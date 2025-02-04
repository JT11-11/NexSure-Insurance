import React from 'react'
import { Download } from 'lucide-react'

const ClaimsSection = () => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">Claims made easy</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Download className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <h3 className="font-medium">Download our app</h3>
                <p className="text-sm text-gray-600">Available on iOS and Android</p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src="/api/placeholder/120/40" alt="App Store" className="h-10 object-contain" />
              <img src="/api/placeholder/120/40" alt="Play Store" className="h-10 object-contain" />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/api/placeholder/500/400"
            alt="Claims app"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
  
export default ClaimsSection