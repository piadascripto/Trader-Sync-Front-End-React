import React from 'react';

const Orders = ({ jsonOrders }) => {
	console.log(jsonOrders)

	// Perform object manipulation
	const formattedOrders = jsonOrders.map(order => {
		// Format date and time
		const [date, time] = order.DateTime.split(';');
		const [month, day, year] = date.split('/');
		const [hour, minute, second] = time.match(/\d{2}/g);
		const formattedDateTime = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);

		// Format other properties
		const updatedOrder = {
			Symbol: order.Symbol,
			DateTime: formattedDateTime,
			Quantity: parseInt(order.Quantity),
			TradePrice: typeof order.TradePrice === 'string' ? parseFloat(order.TradePrice.replace(',', '')).toFixed(2) : order.TradePrice,
			TradeMoney: typeof order.TradeMoney === 'string' ? parseFloat(order.TradeMoney.replace(',', '')).toFixed(2) : order.TradeMoney,
			BuySell: order['Buy/Sell'],
			ClientAccountID: order.ClientAccountID,
			Description: order.Description,
			TradeID: order.TradeID,
			IBCommission: typeof order.IBCommission === 'string' ? parseFloat(order.IBCommission.replace(',', '')).toFixed(2) : order.IBCommission,
			NetCash: typeof order.NetCash === 'string' ? parseFloat(order.NetCash.replace(',', '')).toFixed(2) : order.NetCash,
			OpenCloseIndicator: order['Open/CloseIndicator'],
			CostBasis: typeof order.CostBasis === 'string' ? parseFloat(order.CostBasis.replace(',', '')).toFixed(2) : order.CostBasis,
			OrderType: order.OrderType,
		};

		// Convert properties to numbers
		updatedOrder.TradePrice = parseFloat(updatedOrder.TradePrice);
		updatedOrder.TradeMoney = parseFloat(updatedOrder.TradeMoney);
		updatedOrder.IBCommission = parseFloat(updatedOrder.IBCommission);
		updatedOrder.NetCash = parseFloat(updatedOrder.NetCash);
		updatedOrder.CostBasis = parseFloat(updatedOrder.CostBasis);

		return updatedOrder;
	});

	// Sort the trades
	const sortedOrders = formattedOrders.sort((a, b) => a.DateTime - b.DateTime);
};

export default Orders;
