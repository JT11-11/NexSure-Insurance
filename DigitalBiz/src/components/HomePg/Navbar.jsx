import React from 'react'
import { Search} from 'lucide-react'

const Navigation = () => (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">FWD</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Life & Health</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Home & Maid</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Motor</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Travel</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Invest & Save</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Claims</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Promotions</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-orange-500 font-medium">Advisor Login</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Login</button>
          <Search className="w-6 h-6 text-gray-600" />
        </div>
      </nav>
    </header>
  );

export default Navigation;


