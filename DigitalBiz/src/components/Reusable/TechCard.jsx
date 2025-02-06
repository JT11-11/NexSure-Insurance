import React from 'react'
import { Shield, Code, Wallet } from 'lucide-react';

const iconMap = {
  cybersecurity: Shield,
  aiContent: Code,
  blockchain: Wallet,
};

const TechCard = ({
  price = 0,
  icon="cybersecurity",
  title="",
  description="",
  isPopular=false
})=> {
  const Icon = iconMap[icon];
  return(
  <>
<div className="bg-white rounded-lg p-6 shadow-lg">
  {isPopular&&(<div className="mb-4">
    <span className="inline-block bg-orange-500 text-white text-sm px-3 py-1 rounded-full">POPULAR</span>
    </div>)}
      <Icon className="w-12 h-12 text-orange-500 mb-4" />
        <p className="text-gray-600 mb-2">From ${price}/month</p>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a href="/technologylearnmore" className="text-orange-500 font-semibold flex items-center">
            Learn more
          <span className="ml-2">→</span>
          </a>
    </div>
    </>
    
  )
}

export default TechCard