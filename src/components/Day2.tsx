import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, TrendingUp, Users, DollarSign, Clock, Target, CheckCircle, Building, Globe } from 'lucide-react';

interface Day2Props {
  onBack: () => void;
}

function Day2({ onBack }: Day2Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cityRequirements = [
    { 
      icon: Building, 
      title: "Metropolitan area", 
      description: "Homes/apartments are closer together for efficiency" 
    },
    { 
      icon: DollarSign, 
      title: "High median income", 
      description: "Above average income means more disposable income for services" 
    },
    { 
      icon: Users, 
      title: "Good population", 
      description: "Lean towards over 100,000 people for market size" 
    },
    { 
      icon: Globe, 
      title: "Multiple areas", 
      description: "Central city plus additional cities/areas in 30-45 minute radius" 
    }
  ];

  const businessModelSteps = [
    "Customer finds your website",
    "Customer books service online", 
    "You coordinate with service provider",
    "Service gets completed",
    "You handle payment & customer service",
    "Repeat & scale"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-2"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Days
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              Day 2
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              The Business Model and Let's Choose Our City
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="h-8 w-8 text-orange-400 mr-3" />
            <span className="text-xl font-bold">Day 2 of 27</span>
          </div>
          <p className="text-lg text-green-100 leading-relaxed">
            This is DAY 2 of a 27 DAY series where you peek over my shoulder and learn how to lay out a remote service business just like my company that just hit <span className="text-orange-400 font-semibold">$20 million in sales</span>.
          </p>
        </div>

        {/* Mindset Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Right Mindset</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Move Dreams Into the Here and Now</h3>
            <p className="text-purple-700 mb-4">
              Instead of holding onto some fantastical business idea that requires millions in funding and years of development, I asked myself this...
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-xl font-semibold text-purple-800 text-center">
                "What can I build NOW with my current resources?"
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-bold text-red-800 mb-3">❌ Wrong Approach</h4>
              <ul className="text-red-700 space-y-2">
                <li>• Passion project mindset</li>
                <li>• Waiting for perfect conditions</li>
                <li>• Seeking millions in funding</li>
                <li>• Years of development</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-800 mb-3">✅ Right Approach</h4>
              <ul className="text-green-700 space-y-2">
                <li>• Focus on outcomes</li>
                <li>• Use current resources</li>
                <li>• Launch in 30 days</li>
                <li>• Bootstrap and grow</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Critical Mindset Shift</h3>
            <p className="text-yellow-700">
              You have to get to the <strong>"a ton of regular people have done it, why not me?"</strong> stage of the game to win. 
              This may require some mindset adjustments! It's really hard to do anything amazing in life unless you let go of cynicism and self-doubt.
            </p>
          </div>
        </div>

        {/* City Selection */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choosing Your City</h2>
          
          <p className="text-gray-700 mb-6">
            Most folks start in their own city, but there are some criteria that would be helpful if you live somewhere atypical:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {cityRequirements.map((req, index) => (
              <div key={index} className="flex items-start bg-blue-50 p-6 rounded-lg">
                <req.icon className="h-8 w-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-blue-800 mb-2">{req.title}</h3>
                  <p className="text-blue-700 text-sm">{req.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">My Recommendation</h3>
            <p className="text-blue-700">
              All things being equal, I would start where I am. While these are completely remote businesses, it does help to know local nuances - like knowing that beltway traffic is trash at 5:30 pm and nobody is getting anywhere fast.
            </p>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 text-green-200 mr-3" />
            <h3 className="text-xl font-bold">Real Success Story</h3>
          </div>
          <p className="text-green-100 mb-4">
            Along the way I'll keep introducing you to more people like this. This is Neel, a redditor that just followed my last case study, and built himself a million dollar company.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-green-100 italic">
              "These were just regular folks, with regular jobs, who wanted something more for themselves and their families and did it."
            </p>
          </div>
        </div>

        {/* Business Model */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Business Model</h2>
          
          <p className="text-gray-700 mb-6">
            The main reason why this stuff consistently works so well is the simplicity of local service businesses. 
            It's almost ridiculous when you think about it.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">The Uber Model for Services</h3>
            <p className="text-orange-700">
              Essentially you're building a business that is the marketing/technology/operations arm of a service that is already being done all across the world without having to provide the infrastructure around the actual service delivery.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
            <div className="space-y-3">
              {businessModelSteps.map((step, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-800">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">The Old vs New Way</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-200 mb-2">❌ Old Way</h4>
                <ul className="text-purple-100 text-sm space-y-1">
                  <li>• Need office space</li>
                  <li>• Need cars and equipment</li>
                  <li>• Need products and supplies</li>
                  <li>• Thousands in startup costs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-200 mb-2">✅ New Way</h4>
                <ul className="text-pink-100 text-sm space-y-1">
                  <li>• Couple hundred dollars</li>
                  <li>• Little to no overhead</li>
                  <li>• Work from anywhere</li>
                  <li>• Scale without infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What's Coming Next */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What's Coming Next</h3>
          <p className="text-gray-700 mb-4">
            I'll stop here so this doesn't become overwhelming. Over the next few days we'll get into:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <Target className="h-6 w-6 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-800">Technical Setup</h4>
              <p className="text-sm text-gray-600">Domain, website, booking systems</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Users className="h-6 w-6 text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-800">Operations</h4>
              <p className="text-sm text-gray-600">Hiring, training, service delivery</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600 mb-2" />
              <h4 className="font-semibold text-gray-800">Marketing</h4>
              <p className="text-sm text-gray-600">Customer acquisition and growth</p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-center text-lg">
            Appreciate you following along, I'll try to be as transparent as possible along the way.
          </p>
          <p className="text-center text-blue-200 mt-2 font-semibold">
            See you folks tomorrow!
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Days
          </button>
          <div className="text-gray-500">
            Next: Day 3 - How To Choose Your Domain
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day2;