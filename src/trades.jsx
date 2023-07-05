import React, { useState } from 'react';
//import orders from './orders';


const orders = [
	{
		"Symbol": "AAOI",
		"DateTime": "05/31/2023;103609",
		"Quantity": -100,
		"": -100,
		"TradePrice": 2.37,
		"TradeMoney": -237,
		"Buy/Sell": "SELL",
		"FifoPnlRealized": 0,
		"ClientAccountID": "DU7167678",
		"AccountAlias": "",
		"Model": "",
		"CurrencyPrimary": "USD",
		"FXRateToBase": 1,
		"AssetClass": "STK",
		"SubCategory": "COMMON",
		"Description": "APPLIED OPTOELECTRONICS INC",
		"Conid": 135423662,
		"SecurityID": "US03823U1025",
		"SecurityIDType": "ISIN",
		"CUSIP": "03823U102",
		"ISIN": "US03823U1025",
		"ListingExchange": "NASDAQ",
		"UnderlyingConid": "",
		"UnderlyingSymbol": "",
		"UnderlyingSecurityID": "",
		"UnderlyingListingExchange": "",
		"Issuer": "",
		"Multiplier": 1,
		"Strike": "",
		"TradeID": 1138818889,
		"Expiry": "",
		"RelatedTradeID": "",
		"Put/Call": "",
		"ReportDate": "05/31/2023",
		"PrincipalAdjustFactor": "",
		"TradeDate": "05/31/2023",
		"SettleDateTarget": "06/02/2023",
		"TransactionType": "ExchTrade",
		"Exchange": "ISLAND",
		"Proceeds": 237,
		"Taxes": 0,
		"IBCommission": -1.016396,
		"IBCommissionCurrency": "USD",
		"NetCash": 235.983604,
		"ClosePrice": 2.22,
		"Open/CloseIndicator": "O",
		"Notes/Codes": "",
		"CostBasis": -235.983604,
		"FxPnl": 0,
		"MtmPnl": 15,
		"OrigTradePrice": 0,
		"OrigTradeDate": "",
		"OrigTradeID": "",
		"OrigOrderID": 0,
		"OrigTransactionID": 0,
		"ClearingFirmID": "",
		"IBOrderID": 453775794,
		"TransactionID": 5268321534,
		"IBExecID": "00012ec5.648ccf2c.01.01",
		"RelatedTransactionID": "",
		"BrokerageOrderID": "011210e9.00012ff4.647585bf.0001",
		"OrderReference": "",
		"VolatilityOrderLink": "",
		"ExchOrderID": "011210e9.00012ad4.6e8ad995[3]",
		"ExtExecID": "172936965S",
		"OrderTime": "05/30/2023;125030",
		"OpenDateTime": "",
		"HoldingPeriodDateTime": "",
		"WhenRealized": "",
		"WhenReopened": "",
		"LevelOfDetail": "EXECUTION",
		"ChangeInPrice": 0,
		"ChangeInQuantity": 0,
		"OrderType": "LMT",
		"TraderID": "",
		"IsAPIOrder": "N",
		"AccruedInterest": 0,
		"SerialNumber": "",
		"DeliveryType": "",
		"CommodityType": "",
		"Fineness": 0,
		"Weight": "0.0 ()"
	},
	{
		"Symbol": "AAOI",
		"DateTime": "05/31/2023;173014",
		"Quantity": 100,
		"": 0,
		"TradePrice": 2.13,
		"TradeMoney": 213,
		"Buy/Sell": "BUY",
		"FifoPnlRealized": 21.983604,
		"ClientAccountID": "DU7167678",
		"AccountAlias": "",
		"Model": "",
		"CurrencyPrimary": "USD",
		"FXRateToBase": 1,
		"AssetClass": "STK",
		"SubCategory": "COMMON",
		"Description": "APPLIED OPTOELECTRONICS INC",
		"Conid": 135423662,
		"SecurityID": "US03823U1025",
		"SecurityIDType": "ISIN",
		"CUSIP": "03823U102",
		"ISIN": "US03823U1025",
		"ListingExchange": "NASDAQ",
		"UnderlyingConid": "",
		"UnderlyingSymbol": "",
		"UnderlyingSecurityID": "",
		"UnderlyingListingExchange": "",
		"Issuer": "",
		"Multiplier": 1,
		"Strike": "",
		"TradeID": 1139138004,
		"Expiry": "",
		"RelatedTradeID": "",
		"Put/Call": "",
		"ReportDate": "05/31/2023",
		"PrincipalAdjustFactor": "",
		"TradeDate": "05/31/2023",
		"SettleDateTarget": "06/02/2023",
		"TransactionType": "ExchTrade",
		"Exchange": "ISLAND",
		"Proceeds": -213,
		"Taxes": 0,
		"IBCommission": -1,
		"IBCommissionCurrency": "USD",
		"NetCash": -214,
		"ClosePrice": 2.22,
		"Open/CloseIndicator": "C",
		"Notes/Codes": "",
		"CostBasis": 235.983604,
		"FxPnl": 0,
		"MtmPnl": 9,
		"OrigTradePrice": 0,
		"OrigTradeDate": "",
		"OrigTradeID": "",
		"OrigOrderID": 0,
		"OrigTransactionID": 0,
		"ClearingFirmID": "",
		"IBOrderID": 453889644,
		"TransactionID": 5271986393,
		"IBExecID": "00012ec5.648d6de1.01.01",
		"RelatedTransactionID": "",
		"BrokerageOrderID": "011210e9.00012ff4.647585c0.0002",
		"OrderReference": "",
		"VolatilityOrderLink": "",
		"ExchOrderID": "011210e9.00012ad4.6e8b68d9[2]",
		"ExtExecID": "173152830B",
		"OrderTime": "05/31/2023;155510",
		"OpenDateTime": "",
		"HoldingPeriodDateTime": "",
		"WhenRealized": "",
		"WhenReopened": "",
		"LevelOfDetail": "EXECUTION",
		"ChangeInPrice": 0,
		"ChangeInQuantity": 0,
		"OrderType": "LMT",
		"TraderID": "",
		"IsAPIOrder": "N",
		"AccruedInterest": 0,
		"SerialNumber": "",
		"DeliveryType": "",
		"CommodityType": "",
		"Fineness": 0,
		"Weight": "0.0 ()"
	},
	{
		"Symbol": "ABEO",
		"DateTime": "06/05/2023;141726",
		"Quantity": -100,
		"": -100,
		"TradePrice": 4,
		"TradeMoney": -400,
		"Buy/Sell": "SELL",
		"FifoPnlRealized": 0,
		"ClientAccountID": "DU7167678",
		"AccountAlias": "",
		"Model": "",
		"CurrencyPrimary": "USD",
		"FXRateToBase": 1,
		"AssetClass": "STK",
		"SubCategory": "COMMON",
		"Description": "ABEONA THERAPEUTICS INC",
		"Conid": 571221112,
		"SecurityID": "US00289Y2063",
		"SecurityIDType": "ISIN",
		"CUSIP": "00289Y206",
		"ISIN": "US00289Y2063",
		"ListingExchange": "NASDAQ",
		"UnderlyingConid": "",
		"UnderlyingSymbol": "",
		"UnderlyingSecurityID": "",
		"UnderlyingListingExchange": "",
		"Issuer": "",
		"Multiplier": 1,
		"Strike": "",
		"TradeID": 1140714946,
		"Expiry": "",
		"RelatedTradeID": "",
		"Put/Call": "",
		"ReportDate": "06/05/2023",
		"PrincipalAdjustFactor": "",
		"TradeDate": "06/05/2023",
		"SettleDateTarget": "06/07/2023",
		"TransactionType": "ExchTrade",
		"Exchange": "ISLAND",
		"Proceeds": 400,
		"Taxes": 0,
		"IBCommission": -1.0177,
		"IBCommissionCurrency": "USD",
		"NetCash": 398.9823,
		"ClosePrice": 4.03,
		"Open/CloseIndicator": "O",
		"Notes/Codes": "",
		"CostBasis": -398.9823,
		"FxPnl": 0,
		"MtmPnl": -3,
		"OrigTradePrice": 0,
		"OrigTradeDate": "",
		"OrigTradeID": "",
		"OrigOrderID": 0,
		"OrigTransactionID": 0,
		"ClearingFirmID": "",
		"IBOrderID": 454484310,
		"TransactionID": 5284875567,
		"IBExecID": "00012ec5.6490373d.01.01",
		"RelatedTransactionID": "",
		"BrokerageOrderID": "011210e9.00012ff4.647d68f4.0001",
		"OrderReference": "",
		"VolatilityOrderLink": "",
		"ExchOrderID": "011210e9.00012ad4.6e8dd82e[2]",
		"ExtExecID": "309337S",
		"OrderTime": "06/05/2023;133010",
		"OpenDateTime": "",
		"HoldingPeriodDateTime": "",
		"WhenRealized": "",
		"WhenReopened": "",
		"LevelOfDetail": "EXECUTION",
		"ChangeInPrice": 0,
		"ChangeInQuantity": 0,
		"OrderType": "LMT",
		"TraderID": "",
		"IsAPIOrder": "N",
		"AccruedInterest": 0,
		"SerialNumber": "",
		"DeliveryType": "",
		"CommodityType": "",
		"Fineness": 0,
		"Weight": "0.0 ()"
	},
	{
		"Symbol": "ABEO",
		"DateTime": "06/07/2023;161050",
		"Quantity": 100,
		"": 0,
		"TradePrice": 3.96,
		"TradeMoney": 396,
		"Buy/Sell": "BUY",
		"FifoPnlRealized": 1.9823,
		"ClientAccountID": "DU7167678",
		"AccountAlias": "",
		"Model": "",
		"CurrencyPrimary": "USD",
		"FXRateToBase": 1,
		"AssetClass": "STK",
		"SubCategory": "COMMON",
		"Description": "ABEONA THERAPEUTICS INC",
		"Conid": 571221112,
		"SecurityID": "US00289Y2063",
		"SecurityIDType": "ISIN",
		"CUSIP": "00289Y206",
		"ISIN": "US00289Y2063",
		"ListingExchange": "NASDAQ",
		"UnderlyingConid": "",
		"UnderlyingSymbol": "",
		"UnderlyingSecurityID": "",
		"UnderlyingListingExchange": "",
		"Issuer": "",
		"Multiplier": 1,
		"Strike": "",
		"TradeID": 1141934337,
		"Expiry": "",
		"RelatedTradeID": "",
		"Put/Call": "",
		"ReportDate": "06/07/2023",
		"PrincipalAdjustFactor": "",
		"TradeDate": "06/07/2023",
		"SettleDateTarget": "06/09/2023",
		"TransactionType": "ExchTrade",
		"Exchange": "ISLAND",
		"Proceeds": -396,
		"Taxes": 0,
		"IBCommission": -1,
		"IBCommissionCurrency": "USD",
		"NetCash": -397,
		"ClosePrice": 4,
		"Open/CloseIndicator": "C",
		"Notes/Codes": "",
		"CostBasis": 398.9823,
		"FxPnl": 0,
		"MtmPnl": 4,
		"OrigTradePrice": 0,
		"OrigTradeDate": "",
		"OrigTradeID": "",
		"OrigOrderID": 0,
		"OrigTransactionID": 0,
		"ClearingFirmID": "",
		"IBOrderID": 454946522,
		"TransactionID": 5302134494,
		"IBExecID": "00012ec5.649254e7.01.01",
		"RelatedTransactionID": "",
		"BrokerageOrderID": "011210e9.00012ff4.648009e9.0002",
		"OrderReference": "",
		"VolatilityOrderLink": "",
		"ExchOrderID": "011210e9.00012ad4.6e8fa486[3]",
		"ExtExecID": "173229382B",
		"OrderTime": "06/07/2023;154544",
		"OpenDateTime": "",
		"HoldingPeriodDateTime": "",
		"WhenRealized": "",
		"WhenReopened": "",
		"LevelOfDetail": "EXECUTION",
		"ChangeInPrice": 0,
		"ChangeInQuantity": 0,
		"OrderType": "LMT",
		"TraderID": "",
		"IsAPIOrder": "N",
		"AccruedInterest": 0,
		"SerialNumber": "",
		"DeliveryType": "",
		"CommodityType": "",
		"Fineness": 0,
		"Weight": "0.0 ()"
	},
]

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
