import React, { useState } from 'react';
import { Shield, AlertTriangle, Bitcoin} from 'lucide-react';
import Navigation from '../components/HomePg/Navbar';

const SecurityAssessment = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const questions = {
    1: {
      text: "What type of digital assets do you primarily work with?",
      options: [
        "Business data and customer information",
        "AI-generated content (art, text, code)",
        "Cryptocurrencies and NFTs",
        "Multiple types of digital assets"
      ]
    },
    2: {
      text: "What is your primary security concern?",
      options: [
        "Data breaches and ransomware",
        "Copyright and IP protection",
        "Theft and hacking",
        "Multiple concerns"
      ]
    },
    3: {
      text: "What is your monthly digital asset value range?",
      options: [
        "Under $10,000",
        "$10,000 - $50,000",
        "$50,000 - $100,000",
        "Over $100,000"
      ]
    }
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [step]: answer });
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      generateRecommendation({ ...answers, [step]: answer });
    }
  };

  const generateRecommendation = (finalAnswers) => {
    let recommendation = {
      primary: "",
      secondary: "",
      icon: null,
      description: ""
    };

    if (finalAnswers[1].includes("AI-generated")) {
      recommendation = {
        primary: "AI Content Liability Insurance",
        price: "$35/month",
        icon: Robot,
        description: "Recommended for your AI-generated content protection needs. Covers copyright and intellectual property risks."
      };
    } else if (finalAnswers[1].includes("Cryptocurrencies")) {
      recommendation = {
        primary: "Blockchain Asset Insurance",
        price: "$60/month",
        icon: Bitcoin,
        description: "Best suited for protecting your cryptocurrency and NFT investments against theft and hacking attempts."
      };
    } else {
      recommendation = {
        primary: "Cybersecurity Insurance",
        price: "$45/month",
        icon: Shield,
        description: "Comprehensive protection for your business data and digital assets against cyber threats and breaches."
      };
    }

    setRecommendation(recommendation);
  };

  const renderQuestion = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">{questions[step].text}</h2>
      <div className="grid gap-4">
        {questions[step].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full p-4 text-left border rounded-lg hover:bg-orange-50 hover:border-orange-500 transition-colors duration-200 bg-white"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  const renderRecommendation = () => {
    if (!recommendation) return null;
    const Icon = recommendation.icon;

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Your Recommended Coverage</h2>
        
        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <Icon className="w-8 h-8 text-orange-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{recommendation.primary}</h3>
              <p className="text-gray-600">Starting from {recommendation.price}</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{recommendation.description}</p>
          
          {/* Simple alert box using only Tailwind */}
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
            <p className="text-sm text-yellow-700">
              Recommended based on your profile and asset value. Actual prices may vary based on specific coverage needs.
            </p>
          </div>

          <button 
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
          >
            Get Protected Now
          </button>
        </div>

        <button 
          onClick={() => {
            setStep(1);
            setAnswers({});
            setRecommendation(null);
          }}
          className="text-orange-500 hover:text-orange-600 font-medium"
        >
          Start Over
        </button>
      </div>
    );
  };

  return (
    <>
    <Navigation />
    <div className="max-w-2xl mx-auto p-6 mt-13">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Digital Security Assessment</h1>
      {recommendation ? renderRecommendation() : renderQuestion()}
      {!recommendation && (
        <div className="mt-6 text-sm text-gray-500">
          Step {step} of 3
        </div>
      )}
    </div>
    </>
  );
};

export default SecurityAssessment;