import React, { useState } from 'react';

const PaymentSelect = () => {
  const [selected, setSelected] = useState('Naqd pul orqali'); // Tanlangan qiymat
  const options = [
    'Naqd pul orqali',
    'Terminal orqali',
    'Pul ko‘chirish',
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        * To‘lov turi
      </label>
      <div className="relative">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-gray-700 sm:text-sm"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 12.414l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* Variantlar ro‘yxati */}
      <div className="mt-2 rounded-lg border border-gray-300 bg-white shadow-md">
        {options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-4 py-2 ${
              selected === option
                ? 'bg-cyan-100 text-cyan-700'
                : 'text-gray-700'
            }`}
          >
            <span>{option}</span>
            {selected === option && (
              <svg
                className="w-5 h-5 text-cyan-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.586 4.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSelect;
