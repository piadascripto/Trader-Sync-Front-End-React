import React, { useEffect, useState } from "react";
import alltrades from './trades';

const trades = alltrades

const TradeSummary = () => {
  const [totalTradeResult, setTotalTradeResult] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [totalTradeQuantity, setTotalTradeQuantity] = useState(0);
  const [numTrades, setNumTrades] = useState(0);
  const [winRate, setWinRate] = useState(0);

  useEffect(() => {
    let totalResult = 0;
    let winCount = 0;
    let totalQuantity = 0;

    Object.values(trades).forEach((trade) => {
      const tradeResult = trade.TradeResult;
      const tradeQuantity = trade.TradeQuantity;

      if (typeof tradeResult === "number" && !isNaN(tradeResult)) {
        totalResult += tradeResult;
      }

      if (typeof tradeQuantity === "number" && !isNaN(tradeQuantity)) {
        totalQuantity += tradeQuantity;
      }

      if (trade.Result === "WIN") {
        winCount++;
      }
    });

    const numTrades = Object.keys(trades).length;
    const winRate = (winCount / numTrades) * 100;

    setTotalTradeResult(totalResult);
    setWinCount(winCount);
    setTotalTradeQuantity(totalQuantity);
    setNumTrades(numTrades);
    setWinRate(winRate);
  }, [trades]);

  return (
<div className="container">
      <h3>Trade Summary</h3>
      <div className="card">
        <div className="card-body">
          <p className="card-text">Total Trades: {numTrades}</p>
          <p className="card-text">Total Trade Result: {totalTradeResult}</p>
          <p className="card-text">Total Trade Quantity: {totalTradeQuantity}</p>
          <p className="card-text">Win Rate: {winRate.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};


export default TradeSummary;
