import React, { useState } from 'react';
import { Shield, CreditCard, CheckCircle, ChevronRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';

const InsurancePurchaseForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    plan: '',
    coverage: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: ''
  });

  const plans = [
    {
      title: 'Cybersecurity Insurance',
      price: '45',
      features: [
        'Complete protection against cyber threats',
        'Data breach coverage',
        'Ransomware protection',
        '24/7 incident response team'
      ]
    },
    {
      title: 'AI Content Liability',
      price: '35',
      features: [
        'Copyright protection',
        'Intellectual property coverage',
        'AI output liability protection',
        'Legal defense coverage'
      ]
    },
    {
      title: 'Blockchain Asset',
      price: '60',
      features: [
        'Cryptocurrency theft protection',
        'NFT coverage',
        'Smart contract audit',
        'Cold storage insurance'
      ]
    }
  ];

  const coverageLevels = [
    { level: 'Basic', multiplier: 1 },
    { level: 'Professional', multiplier: 2 },
    { level: 'Enterprise', multiplier: 3 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlanSelect = (plan) => {
    setFormData(prev => ({
      ...prev,
      plan: plan.title
    }));
    setStep(2);
  };

  const handleCoverageSelect = (coverage) => {
    setFormData(prev => ({
      ...prev,
      coverage: coverage.level
    }));
    setStep(3);
  };

  const validatePersonalInfo = () => {
    const { name, email, phone } = formData;
    return name && email && phone;
  };

  const validatePaymentInfo = () => {
    const { cardNumber, expiryDate, cvv, billingAddress } = formData;
    return cardNumber && expiryDate && cvv && billingAddress;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3 && validatePersonalInfo()) {
      setStep(4);
    } else if (step === 4 && validatePaymentInfo()) {
      setStep(5);
      console.log('Processing payment:', formData);
    }
  };

  const renderPlanSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Select Your Insurance Plan</h2>
      <div className="grid gap-6">
        {plans.map((plan, index) => (
          <button
            key={index}
            onClick={() => handlePlanSelect(plan)}
            className="p-6 border rounded-lg hover:border-orange-500 transition-colors bg-white text-left"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <div className="text-orange-500 font-bold">${plan.price}/month</div>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>
    </div>
  );

  const renderCoverageSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Select Coverage Level</h2>
      <div className="grid gap-6">
        {coverageLevels.map((coverage, index) => (
          <button
            key={index}
            onClick={() => handleCoverageSelect(coverage)}
            className="p-6 border rounded-lg hover:border-orange-500 transition-colors bg-white text-left"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{coverage.level}</h3>
              <div className="text-orange-500 font-bold">
                ${(parseInt(formData.plan === 'AI Content Liability' ? '35' : formData.plan === 'Blockchain Asset' ? '60' : '45') * coverage.multiplier).toFixed(2)}/month
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderPersonalInfo = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold">Personal Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>
      <button 
        type="submit"
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Continue to Payment
      </button>
    </form>
  );

  const renderPaymentInfo = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold">Payment Information</h2>
      <div className="p-4 bg-gray-50 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{formData.plan}</h3>
            <p className="text-sm text-gray-600">{formData.coverage} Coverage</p>
          </div>
          <div className="text-xl font-bold">
            ${(parseInt(formData.plan === 'AI Content Liability' ? '35' : formData.plan === 'Blockchain Asset' ? '60' : '45') * 
              (formData.coverage === 'Professional' ? 2 : formData.coverage === 'Enterprise' ? 3 : 1)).toFixed(2)}/month
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address</label>
          <textarea
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            rows="3"
            required
          />
        </div>
      </div>
      <button 
        type="submit"
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Complete Purchase
      </button>
    </form>
  );

  const renderConfirmation = () => (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h2 className="text-2xl font-semibold">Purchase Successful!</h2>
      <p className="text-gray-600">
        Thank you for choosing our insurance service. You will receive a confirmation email shortly with your policy details.
      </p>
      <div className="p-4 bg-gray-50 rounded-lg mb-6">
        <h3 className="font-semibold mb-2">Purchase Summary</h3>
        <p className="text-gray-600">{formData.plan} - {formData.coverage} Coverage</p>
        <p className="text-xl font-bold mt-2">
          ${(parseInt(formData.plan === 'AI Content Liability' ? '35' : formData.plan === 'Blockchain Asset' ? '60' : '45') * 
            (formData.coverage === 'Professional' ? 2 : formData.coverage === 'Enterprise' ? 3 : 1)).toFixed(2)}/month
        </p>
      </div>
      <Link 
        to="/" 
        className="inline-block bg-white border-2 border-orange-500 text-orange-500 py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors font-medium"
      >
        Back to Home
      </Link>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-orange-500 rounded-full transition-all duration-500"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Plan</span>
          <span>Coverage</span>
          <span>Details</span>
          <span>Payment</span>
          <span>Done</span>
        </div>
      </div>

      {step === 1 && renderPlanSelection()}
      {step === 2 && renderCoverageSelection()}
      {step === 3 && renderPersonalInfo()}
      {step === 4 && renderPaymentInfo()}
      {step === 5 && renderConfirmation()}
    </div>
  );
};

export default InsurancePurchaseForm;