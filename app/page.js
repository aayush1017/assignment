'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/NavigationBar';
import LineChart from '../Components/LineChart';
import { sampleData } from './utils/Data';
import Table from '@/Components/Table';
import LazyLoad from 'react-lazy-load';

const revenueTypes = [...new Set(sampleData.map((item) => item.revenue_type))];
revenueTypes.unshift('All');

function page() {
  const [selectedRevenueType, setSelectedRevenueType] = useState('All');
  const [chartData, setChartData] = useState([]);
  const [filteredData, setFilteredData] = useState(sampleData);

  const userGreeting = 'Hello, User';

  const updateChartData = (selectedType) => {
    let newFilteredData = sampleData;
    if (selectedType !== 'All') {
      newFilteredData = sampleData.filter(
        (item) => item.revenue_type === selectedType
      );
    }
    const chartData = newFilteredData.map((item) => ({
      x: item.month,
      y: item.acv,
    }));

    setChartData(chartData);
    setFilteredData(newFilteredData);
  };
  useEffect(() => {
    updateChartData(selectedRevenueType);
  }, [selectedRevenueType]);

  const handleRevenueTypeChange = (selectedType) => {
    setSelectedRevenueType(selectedType);
  };

  return (
    <div className="App">
      <header>
        <Navbar
          userGreeting={userGreeting}
          revenueTypes={revenueTypes}
          selectedRevenueType={selectedRevenueType}
          onRevenueTypeChange={handleRevenueTypeChange}
        />
      </header>
      <LazyLoad>
        <LineChart chartData={chartData} />
      </LazyLoad>
      <Table data={filteredData} />
    </div>
  );
}

export default page;
