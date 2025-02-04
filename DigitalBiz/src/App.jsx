import {ChevronRight, ChevronLeft } from 'lucide-react';
import './App.css';
import Navigation from './components/HomePg/Navbar';
import InsuranceTab from './components/HomePg/InsuranceTab';
import ProductCard from './components/HomePg/ProductCard';
import QuickLink from './components/HomePg/QuickLink';
import Testimonial from './components/HomePg/Testimonial';
import ClaimsSection from './components/HomePg/Claims';
import insuranceProductsData from './Data/InsuranceProductsData';
import { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Life & Health');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Celebrate living.
            <br />
            We've got your back.
          </h1>
          <p className="text-gray-600 mb-8">
            We believe that insurance is a source of empowerment. Enjoy life and celebrate it – and if
            anything unexpected happens, have the confidence that we've got your back.
          </p>
          
          {/* Insurance Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.keys(insuranceProductsData).map((tabName) => (
              <InsuranceTab
                key={tabName}
                label={tabName}
                isActive={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              />
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insuranceProductsData[activeTab].map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              description={product.description}
              isPopular={product.isPopular}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Quick links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <QuickLink
            title="Is your policy expiring?"
            description="Renew your coverage within minutes"
            buttonText="Renew now"
          />
          <div className="col-span-1 md:col-span-2">
            <QuickLink
              title="HDB Fire insurance"
              description="5-year coverage for your HDB flat"
              buttonText="Buy now"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-6">From the people who matter most</h2>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto py-4">
            <Testimonial
              author="Grace M"
              date="25 May"
              content="I am actually a great fan of FWD. I have many policies with them for self and family members..."
              rating={5}
            />
            <Testimonial
              author="LONG SANDY"
              date="30 March"
              content="Never thought that an online application for term life insurance can be so smooth and such a breeze..."
              rating={5}
            />
            <Testimonial
              author="CCL"
              date="17 February"
              content="Pleasant encounter with Aisyah, from the customer engagement team..."
              rating={5}
            />
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="py-12 bg-orange-500 mt-12 rounded-xl">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-12">
              <img src="/api/placeholder/150/150" alt="Award 1" className="h-16 object-contain" />
              <img src="/api/placeholder/150/150" alt="Award 2" className="h-16 object-contain" />
              <img src="/api/placeholder/150/150" alt="Award 3" className="h-16 object-contain" />
            </div>
          </div>
        </div>
        <div className="py-12">
          <ClaimsSection />
        </div>
      </div>
    </div>
  );
};

export default App;