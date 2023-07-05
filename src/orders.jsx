import React from 'react';

const Orders = ({ jsonOrders }) => {
  return (
    <div>
      {jsonOrders.map((order, index) => (
        <div key={index}>
          <p>Symbol: {order.Symbol}</p>
          <p>DateTime: {order.DateTime}</p>
          {/* Render other properties of the order */}
        </div>
      ))}
    </div>
  );
};

export default Orders;
