import React from 'react'
import { ChevronRight } from 'lucide-react' 

const ProductCard = ({ title, price, description, isPopular, imageSrc }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={imageSrc || "/api/placeholder/400/300"}
          alt={title}
          className="w-full h-full object-cover"
        />
        {isPopular && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 text-xs rounded">
            POPULAR
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500">From ${price}/month</div>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <button className="mt-4 group flex items-center text-orange-500">
          Learn more
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

export default ProductCard