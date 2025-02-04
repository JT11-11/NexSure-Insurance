import React from 'react'

const QuickLink = ({ title, description, buttonText }) => (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md">
        {buttonText}
      </button>
    </div>
);

export default QuickLink