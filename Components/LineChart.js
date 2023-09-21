'use client';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = ({ chartData }) => {
  const [filteredData, setFilteredData] = useState(chartData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const sortedData = chartData.slice().sort((a, b) => b.acv - a.acv);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = sortedData.slice(startIndex, endIndex);

    setFilteredData(paginatedData);
  }, [chartData, currentPage]);

  const updatedChartData = {
    datasets: [
      {
        label: 'ACV',
        data: filteredData.map((item) => item),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    // maintainAspectRatio: true,
    scales: {
      x: {
        // type: 'category',
        title: {
          display: true,
          text: 'Posting Period',
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'ACV (₹)',
          font: {
            size: 14,
          },
        },
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          callback: (value) => `₹${value.toLocaleString('en-IN')}`,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'ACV Over Time',
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div>
      <Line options={chartOptions} data={updatedChartData} />
      <div className="flex justify-center items-center mt-4 h-1/5">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'
          } text-white font-bold py-2 px-4 rounded-l ${
            currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          Previous
        </button>
        <span className="bg-gray-200 py-2 px-4 font-bold">{`Page ${currentPage}`}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={
            currentPage * itemsPerPage >= chartData.length ||
            filteredData.length < itemsPerPage
          }
          className={`${
            (currentPage * itemsPerPage >= chartData.length ||
              filteredData.length < itemsPerPage) &&
            'bg-gray-300'
          } text-white font-bold py-2 px-4 rounded-r ${
            (currentPage * itemsPerPage >= chartData.length ||
              filteredData.length < itemsPerPage) &&
            'cursor-not-allowed'
          } ${
            currentPage * itemsPerPage >= chartData.length ||
            filteredData.length < itemsPerPage ||
            (currentPage === 1 && chartData.length <= itemsPerPage)
              ? ''
              : 'bg-blue-500 hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LineChart;
