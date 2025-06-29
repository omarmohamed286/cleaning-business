import React, { useEffect } from 'react';
import { ArrowLeft, TrendingUp, CheckCircle, Target, DollarSign, Clock, Users } from 'lucide-react';
import DFYCallout from './DFYCallout';

interface Day1Props {
  onBack: () => void;
  onNavigateToDay27: () => void;
}

function Day1({ onBack, onNavigateToDay27 }: Day1Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    "Home cleaning",
    "Commercial cleaning", 
    "Carpet cleaning",
    "Airbnb Cleaning",
    "Laundry pick up and delivery",
    "Lawn care",
    "Pool cleaning",
    "Moving services"
  ];

  const failedAttempts = [
    "Blog advertising network",
    "Advertising/SEO agency", 
    "Dropshipping",
    "Affiliate marketing",
    "BANS (Build a niche site Ebay commissions)",
    "Copywriting company",
    "And more stuff that I probably forgot"
  ];

  const criteria = [
    { point: "High demand", description: "People are already spending money on it" },
    { point: "Recurring revenue", description: "Customers come back regularly" },
    { point: "Online booking", description: "Can be booked like e-commerce" },
    { point: "Low startup cost", description: "Can start for under $1,000" },
    { point: "Scalable", description: "Can grow without your direct involvement" },
    { point: "Local market", description: "Serves local customers with real needs" }
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
              Day 1
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Choosing Your Industry (And Why Local Services)
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />

        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 text-orange-400 mr-3" />
            <span className="text-xl font-bold">Day 1 of 27</span>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed">
            If you're new here, this is DAY 1 of a ~27 DAY series where you peek over my shoulder and watch how we build local service businesses from scratch. I built my own local service business to <span className="text-orange-400 font-semibold">$20 million in total sales</span> in a little over a decade starting with <span className="text-green-400 font-semibold">$450</span>.
          </p>
        </div>

        {/* Summary Box */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <h3 className="text-lg font-bold text-orange-800 mb-2">Summary</h3>
          <p className="text-orange-700">
            In the next 27 days (or so) I'm going to walk you through the ins and outs of building a service business set up in the way that you can crush it! Even if you don't build anything, at least you can see how some of the things that seem impossible are easily solved.
          </p>
        </div>

        {/* Backstory Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My 30-Second Backstory</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-6">
            <p>
              I used to be in accounting/finance working in the DC area. I hated my job and started reading startup blogs and trying new projects.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Things I Tried (And Failed At):</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {failedAttempts.map((attempt, index) => (
                <div key={index} className="flex items-center bg-red-50 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-red-700">{attempt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3">The Breakthrough</h3>
            <p className="text-green-700 mb-4">
              I came across Shoemoney with his famous Google check and knew there's no way I wanted to work for someone for the rest of my life. That led me to local services.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-green-800">$450</div>
                <div className="text-sm text-green-600">Initial Investment</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-blue-800">4 Months</div>
                <div className="text-sm text-blue-600">To $4K/Month</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-bold text-purple-800">9 Months</div>
                <div className="text-sm text-purple-600">To $40K/Month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choosing an Industry</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Remove All Emotion</h3>
            <p className="text-yellow-700">
              We're here to put up numbers. We can't worry about passion, childhood dreams, or ego stroking. 
              Instead of some sexy "business idea", we're going to build a <strong>"What are people already spending a shit ton of money on"</strong> business.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">The Scoring System</h3>
            <p className="text-gray-700 mb-4">
              I came up with a point system to evaluate opportunities. Closest to 100 wins, and local services hits all the points that matter.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {criteria.map((item, index) => (
                <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-800">{item.point}</div>
                    <div className="text-sm text-blue-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Industries I Like</h3>
            <p className="text-gray-700 mb-4">
              Goal is something that can be booked online so it feels more like an e-commerce play than a service play. 
              Hence something like "roof repair" probably won't apply.
            </p>
            
            <div className="grid md:grid-cols-2 gap-3">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors duration-200">
                  <Target className="h-5 w-5 text-green-600 mr-3" />
                  <span className="font-medium text-green-800">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">The Magic Formula</h3>
            <p className="text-purple-100 mb-4">
              We fish on the side of the pond where a shit ton of people are already catching fish! 
              We're not trying to find something nobody else is doing.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">Execution × Execution × Execution</div>
              <div className="text-purple-200 mt-2">That's where the magic begins...</div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Disclaimer:</strong> I'm going to share how I would do it in 2024. Not what you should do, what I would do.
            </p>
            <p>
              <strong>Legal stuff:</strong> Legal, compliance, business structure, etc. are important in every business. I'm not a lawyer and not your accountant so seek out professionals.
            </p>
            <p>
              <strong>Tools:</strong> I'll share what I use, but I don't care what you use. Use what works for you.
            </p>
            <p>
              <strong>Reality check:</strong> Entrepreneurship is hard. It's much easier to sit on the sidelines and talk shit. Anyone that tells you it's easy is lying. You will encounter anxiety, probably face depression, gain weight sitting at your laptop, take on unhealthy habits, feel out of control, and face sometimes daily emotional rollercoasters.
            </p>
            <p className="font-semibold text-blue-600">
              With that said, if you want to follow along, I'll continue tomorrow on the next step!
            </p>
          </div>
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
            Next: Day 2 - Choosing Your City and Business Model
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day1;