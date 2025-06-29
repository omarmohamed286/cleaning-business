import React from 'react';
import { Rocket, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

interface DFYCalloutProps {
  onNavigateToDay27: () => void;
}

function DFYCallout({ onNavigateToDay27 }: DFYCalloutProps) {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-8 border-2 border-orange-300 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Rocket className="h-8 w-8 text-yellow-300 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-1">
              Skip the Work - We'll Do It All For You!
            </h3>
            <p className="text-orange-100 text-sm">
              Complete business setup in 30 days for just $97
            </p>
          </div>
        </div>
        <button
          onClick={onNavigateToDay27}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
        >
          <DollarSign className="h-5 w-5 mr-2" />
          Get Started
          <ArrowRight className="h-5 w-5 ml-2" />
        </button>
      </div>
      
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white/10 p-3 rounded-lg text-center">
          <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-1" />
          <span className="text-xs text-orange-100">Website Built</span>
        </div>
        <div className="bg-white/10 p-3 rounded-lg text-center">
          <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-1" />
          <span className="text-xs text-orange-100">Marketing Setup</span>
        </div>
        <div className="bg-white/10 p-3 rounded-lg text-center">
          <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-1" />
          <span className="text-xs text-orange-100">Sales Copy</span>
        </div>
        <div className="bg-white/10 p-3 rounded-lg text-center">
          <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-1" />
          <span className="text-xs text-orange-100">Ready to Launch</span>
        </div>
      </div>
    </div>
  );
}

export default DFYCallout;