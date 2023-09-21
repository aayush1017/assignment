'use client';
// Navbar.js
import React from 'react';

function Navbar({
  userGreeting,
  revenueTypes,
  selectedRevenueType,
  onRevenueTypeChange,
}) {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      {/* Left: User Greeting */}

      {/* Right: Dropdown for Revenue Type */}
      <div className="relative">
        <select
          className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring"
          value={selectedRevenueType}
          onChange={(event) => onRevenueTypeChange(event.target.value)} // Use the prop correctly
        >
          {revenueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="text-white text-xl">{userGreeting}</div>
    </nav>
  );
}

export default Navbar;
