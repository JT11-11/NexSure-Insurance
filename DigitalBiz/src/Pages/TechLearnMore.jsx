import React, { useState } from 'react';
import Navigation from '../components/HomePg/Navbar';
import { Shield, Check, Server, Lock } from 'lucide-react';

const TechLearnMore = () => {
  const [activeTab, setActiveTab] = useState('benefits');

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24/7 Cyber Monitoring",
      description: "Round-the-clock surveillance of your digital assets and immediate threat detection"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Data Breach Coverage",
      description: "Up to $1M coverage for data recovery and business interruption"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Ransomware Protection",
      description: "Complete coverage for ransomware attacks including negotiation support"
    }
  ];

  const faqs = [
    {
      question: "What types of cyber attacks are covered?",
      answer: "Our insurance covers a wide range of cyber attacks including but not limited to ransomware, phishing, DDoS attacks, data breaches, and social engineering fraud."
    },
    {
      question: "How quickly can I get coverage?",
      answer: "Coverage can begin immediately after completing our online application and security assessment process, which typically takes less than 30 minutes."
    },
    {
      question: "Is there a waiting period for claims?",
      answer: "No, there's no waiting period. Coverage begins as soon as your policy is active, and you can file claims immediately for any covered incidents."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation className="w-full" />
      
      <main className="flex-1 bg-gray-50">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">Tech Insurance Solutions</h1>
            <p className="text-xl max-w-2xl">Comprehensive protection for your digital assets and technology investments.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex space-x-4 border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('benefits')}
              className={`py-4 px-6 font-medium ${
                activeTab === 'benefits'
                  ? 'border-b-2 border-orange-500 text-orange-500'
                  : 'text-gray-500'
              }`}
            >
              Benefits & Features
            </button>
            <button
              onClick={() => setActiveTab('coverage')}
              className={`py-4 px-6 font-medium ${
                activeTab === 'coverage'
                  ? 'border-b-2 border-orange-500 text-orange-500'
                  : 'text-gray-500'
              }`}
            >
              Coverage Details
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-6 font-medium ${
                activeTab === 'faq'
                  ? 'border-b-2 border-orange-500 text-orange-500'
                  : 'text-gray-500'
              }`}
            >
              FAQ
            </button>
          </div>
          <div className="mt-8">
            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-orange-500 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'coverage' && (
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Coverage Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="text-green-500 w-6 h-6 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Cyber Attack Response</h3>
                      <p className="text-gray-600">Up to $1,000,000 coverage for incident response, including IT forensics, legal support, and customer notification costs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 w-6 h-6 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Business Interruption</h3>
                      <p className="text-gray-600">Coverage for lost income and extra expenses during system outages caused by cyber attacks.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 w-6 h-6 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Data Recovery</h3>
                      <p className="text-gray-600">Full coverage for data recovery costs, including system restoration and data recreation.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'faq' && (
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-16 bg-orange-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to protect your digital assets?</h2>
            <p className="text-gray-600 mb-8">Get started with our comprehensive tech insurance coverage today.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Get Protected Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechLearnMore;