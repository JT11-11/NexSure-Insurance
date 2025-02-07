import React from 'react';
import { Link } from 'react-router';
import TechHeader from '../components/TechPg/TechHeader';
import TechCard from '../components/Reusable/TechCard.jsx';
import Navigation from '../components/HomePg/Navbar.jsx';
import { insuranceTechProducts } from '../Data/InsuranceProductsData.jsx';

const TechnologyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation className="w-full mb-5" />
      <main className="flex-1 bg-gray-50 mt-13">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <TechHeader />
          <section className="mt-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insuranceTechProducts.map((product, index) => (
                <TechCard
                  key={index}
                  {...product}
                  onClick={() => console.log(`Clicked ${product.title}`)}
                />
              ))}
            </div>
          </section>
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Quick links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4">Need immediate protection?</h3>
                <p className="text-gray-600 mb-6">Get instant coverage for your digital assets</p>
                <Link 
                  to="/protectnow" 
                  className="inline-block bg-orange-500 hover:bg-orange-600 transition-colors text-white px-8 py-3 rounded-full font-medium"
                >
                  Protect now
                </Link>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4">Security Assessment</h3>
                <p className="text-gray-600 mb-6">Get a free digital security risk assessment</p>
                <Link 
                  to="/securityassessment" 
                  className="inline-block bg-orange-500 hover:bg-orange-600 transition-colors text-white px-8 py-3 rounded-full font-medium"
                >
                  Start now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TechnologyPage;