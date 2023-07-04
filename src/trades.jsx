import React, { useState } from 'react';
import orders from './orders';


const alltrades = (orders) => {

 // Format the JSON data and keys
  const formattedOrders = orders.map(order => {
    // Format date and time
    const [date, time] = order.DateTime.split(';');
    const [month, day, year] = date.split('/');
    const [hour, minute, second] = time.match(/\d{2}/g);
    const formattedDateTime = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);

    // Format other properties
    const updatedOrder = Object.fromEntries(
      Object.entries(order).map(([key, value]) => {
        if (typeof value === 'number') {
          if (key === 'TradeID' || key === 'Quantity') {
            return [key.replace('/', ''), value];
          } else {
            return [key.replace('/', ''), Math.floor(value * 100) / 100];
          }
        }
        return [key.replace('/', ''), value];
      })
    );

    return { ...updatedOrder, DateTime: formattedDateTime };
  });

  // Sort the trades
  const sortedOrders = formattedOrders.sort((a, b) => a.DateTime - b.DateTime);

  const trades = {};

  sortedOrders.forEach((order) => {
    const { Symbol, Quantity, IBCommission, TradeMoney } = order;

    if (!trades[Symbol]) {
      trades[Symbol] = {
        Symbol,
        TradeType: "",
        Result: "",
        TradeQuantity: 0,
        TradeResult: 0,
        BrokerCommission: 0,
        OpenOrderDate: "",
        CloseOrderDate: "",
        Orders: [],
      };
    }

    const selectedProperties = {
      Property1: order.Property1,
      Symbol: order.Symbol,
      DateTime: order.DateTime,
      Quantity: order.Quantity,
      TradePrice: order.TradePrice,
      TradeMoney: order.TradeMoney,
      BuySell: order.BuySell,
      ClientAccountID: order.ClientAccountID,
      Description: order.Description,
      TradeID: order.TradeID,
      IBCommission: order.IBCommission,
      NetCash: order.NetCash,
      OpenCloseIndicator: order.OpenCloseIndicator,
      CostBasis: order.CostBasis,
      OrderType: order.OrderType,
    };

    trades[Symbol].Orders.push(selectedProperties);
    trades[Symbol].TradeQuantity += Quantity;
    trades[Symbol].TradeResult = parseFloat((trades[Symbol].TradeResult + TradeMoney).toFixed(2));
    trades[Symbol].BrokerCommission = parseFloat((trades[Symbol].BrokerCommission + IBCommission).toFixed(2));

    const sum = trades[Symbol].Orders.reduce((total, t) => total + t.Quantity, 0);
    if (sum === 0) {
      const key = "Trade" + Object.keys(trades).length;
      trades[key] = trades[Symbol];
      delete trades[Symbol];
    }
  });

  Object.values(trades).forEach((trade) => {
    const firstOrder = trade.Orders[0];
    const lastOrder = trade.Orders[trade.Orders.length - 1];

    if (firstOrder.BuySell === "BUY" && firstOrder.OpenCloseIndicator === "O") {
      trade.TradeType = "LONG";
    } else if (firstOrder.BuySell === "SELL" && firstOrder.OpenCloseIndicator === "O") {
      trade.TradeType = "SHORT";
      trade.TradeResult = -trade.TradeResult;
    } else {
      trade.TradeType = "ERROR";
      console.log(trade);
    }

    trade.OpenOrderDate = new Date(firstOrder.DateTime).toISOString().split("T")[0];
    trade.CloseOrderDate = new Date(lastOrder.DateTime).toISOString().split("T")[0];

    if (trade.TradeQuantity !== 0) {
      trade.Result = "OPEN";
      delete trade.CloseOrderDate;
      delete trade.TradeResult;
    } else {
      trade.Result = trade.TradeResult >= 0 ? "WIN" : "LOSS";
      delete trade.TradeQuantity;
    }
  });


	const tradesArray = Object.values(trades); // Convert trades object to an array
const sortedTrades = tradesArray.sort((a, b) => new Date(a.CloseOrderDate) - new Date(b.CloseOrderDate)); 

return sortedTrades;


};



export default alltrades(orders);
