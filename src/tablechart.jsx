import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import alltrades from './trades';

const trades = alltrades;

const TableChart = () => {
  const tableBodyRef = useRef(null);
  const chartCanvasRef1 = useRef(null);
  const chartCanvasRef2 = useRef(null);
  let chartInstance1 = null;
  let chartInstance2 = null;

  useEffect(() => {
    generateTableRows();
    createChart1();
    createChart2();

    // Cleanup function to destroy the chart instances
    return () => {
      if (chartInstance1) {
        chartInstance1.destroy();
      }
      if (chartInstance2) {
        chartInstance2.destroy();
      }
    };
  }, []);

	
const generateTableRows = () => {
  const tableBody = tableBodyRef.current;

  // Clear existing table rows
  tableBody.innerHTML = '';

  for (const trade in trades) {
    if (trades.hasOwnProperty(trade)) {
      const tradeData = trades[trade];
      const row = document.createElement("tr");

      const { Symbol, TradeType, Result, TradeResult, BrokerCommission, OpenOrderDate, CloseOrderDate } = tradeData;

      const values = [Symbol, TradeType, Result, TradeResult, BrokerCommission, OpenOrderDate, CloseOrderDate];

      values.forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    }
  }
};



  const createChart1 = () => {
    const chartCanvas = chartCanvasRef1.current;
    const tradeResults = Object.values(trades).map((trade) => trade.TradeResult);
    const closeOrderDates = Object.values(trades).map((trade) => trade.CloseOrderDate);
    const colors = tradeResults.map((result) =>
      result < 0 ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 128, 0, 0.5)'
    );

    // Destroy existing chart instance if it exists
    if (chartInstance1) {
      chartInstance1.destroy();
    }

    // Create new chart instance
    chartInstance1 = new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: closeOrderDates,
        datasets: [
          {
            label: 'Trade Result',
            data: tradeResults,
            backgroundColor: colors,
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const createChart2 = () => {
    const chartCanvas = chartCanvasRef2.current;
    const tradeResults = Object.values(trades).map((trade) => trade.TradeResult);
    const closeOrderDates = Object.values(trades).map((trade) => trade.CloseOrderDate);

    // Calculate the cumulative sum of trade results
    const cumulativeResults = [];
    let cumulativeSum = 0;
    for (let i = 0; i < tradeResults.length; i++) {
      cumulativeSum += tradeResults[i];
      cumulativeResults.push(cumulativeSum);
    }

    // Destroy existing chart instance if it exists
    if (chartInstance2) {
      chartInstance2.destroy();
    }

    // Create new chart instance
    chartInstance2 = new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: closeOrderDates,
        datasets: [
          {
            label: 'Cumulative Gains',
            data: cumulativeResults,
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div>
      <div className="container">
        <h3>Gains per day</h3>
        <canvas id="trade-chart1" ref={chartCanvasRef1}></canvas>
      </div>
      <div className="container">
        <h3>Cumulative Gains</h3>
        <canvas id="trade-chart2" ref={chartCanvasRef2}></canvas>
      </div>
      <div className="container">
        <table id="trade-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Trade Type</th>
              <th>Result</th>
              <th>Trade Result</th>
              <th>Broker Commission</th>
              <th>Open Order Date</th>
              <th>Close Order Date</th>
            </tr>
          </thead>
          <tbody ref={tableBodyRef}></tbody>
        </table>
      </div>
    </div>
  );
};



export default TableChart;
