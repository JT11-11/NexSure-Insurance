import React from 'react'

const InsuranceTab = ({ label, isActive }) => (
    <button
      className={`px-6 py-3 text-sm font-medium rounded-full transition-colors
      ${isActive ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
    >
      {label}
    </button>
  );

export default InsuranceTab