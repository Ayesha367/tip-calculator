'use client';

import { useState } from 'react';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [numPeople, setNumPeople] = useState<number>(2);
  const [tipPercentage, setTipPercentage] = useState<number>(10);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [perPerson, setPerPerson] = useState<number>(0);

  const calculateTotal = () => {
    const tip = (billAmount * tipPercentage) / 100;
    const total = billAmount + tip;
    const perPersonAmount = total / numPeople;
    setTotalAmount(total);
    setPerPerson(perPersonAmount);
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
    >
      {/* Heading outside the container */}
      <h1 className="text-4xl font-bold text-white mb-6">Tip Calculator</h1>

      {/* Calculator Container */}
      <div className="bg-slate-400 rounded-xl shadow-xl w-80 sm:w-96 p-6 space-y-4">
        {/* Total and Per Person */}
        <div className="text-center text-xl font-bold text-gray-800">
          <p>Total $ {totalAmount.toFixed(2)}</p>
          <p>Each $ {perPerson.toFixed(2)}</p>
          <p className="text-sm text-gray-800 mt-2">Enter the bill amount and tip percentage to calculate the tip and total.</p>
        </div>

        {/* Bill Amount Input */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Bill</label>
          <input
            type="number"
            value={billAmount}
            onChange={(e) => {
              setBillAmount(parseFloat(e.target.value));
              calculateTotal();
            }}
            className="w-full p-3 text-lg border border-gray-300 rounded-md"
            placeholder="Enter bill amount"
          />
        </div>

        {/* Number of People Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">People</label>
          <input
            type="number"
            value={numPeople}
            onChange={(e) => {
              setNumPeople(Math.max(1, parseInt(e.target.value)));
              calculateTotal();
            }}
            className="w-full p-3 text-lg border border-gray-300 rounded-md"
            min="1"
          />
        </div>

        {/* Tip Percentage Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tip</label>
          <input
            type="range"
            min="0"
            max="30"
            value={tipPercentage}
            onChange={(e) => {
              setTipPercentage(parseInt(e.target.value));
              calculateTotal();
            }}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-700">
            <span>0%</span>
            <span>{tipPercentage}%</span>
            <span>30%</span>
          </div>
        </div>

        {/* Numeric Keypad */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '.'].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (item === 'C') {
                  setBillAmount(Math.floor(billAmount / 10));
                } else if (item === '.') {
                  setBillAmount(billAmount * 10);
                } else {
                  setBillAmount(billAmount * 10 + (item as number));
                }
                calculateTotal();
              }}
              className="bg-gray-200 p-4 rounded-lg text-xl"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
