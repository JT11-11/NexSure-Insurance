import React from 'react'
import { Search} from 'lucide-react'

const Navigation = () => (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">FWD</div>
        <div className="hidden md:flex space-x-6">
          <a href="/Technology" className="text-gray-600 hover:text-gray-900">Technology</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Claims</a>
          <a href="/ContactUs" className="text-gray-600 hover:text-gray-900">Help</a>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 text-gray-600" />
        </div>
      </nav>
    </header>
  );

export default Navigation;


