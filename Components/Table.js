'use client';
import React from 'react';

function Table({ data }) {
  return (
    <div className="table-container mt-5">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                S_no
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Line of Business
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Month
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ACV (₹)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                TCV (₹)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue (₹)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.S_no}>
                <td className="px-6 py-4 whitespace-nowrap">{item.S_no}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.line_of_business}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.revenue_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.product}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.year}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.month}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ₹{item.acv.toLocaleString('en-IN')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ₹{item.tcv.toLocaleString('en-IN')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ₹{item.revenue.toLocaleString('en-IN')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
