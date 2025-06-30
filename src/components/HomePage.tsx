import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, TrendingUp, Users, DollarSign, Clock, ArrowRight, CheckCircle, Star } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  const days = [
    { day: 1, title: "The Industries that Work", description: "Discover which service industries are most profitable and scalable" },
    { day: 2, title: "Choosing Your City and Business Model", description: "Strategic location selection and business model optimization" },
    { day: 3, title: "How To Choose Your Domain", description: "Domain selection strategies for maximum SEO impact" },
    { day: 4, title: "Website and Elements", description: "Building a converting website that drives bookings" },
    { day: 5, title: "Logo and Focus", description: "Brand identity that builds trust and recognition" },
    { day: 6, title: "Copywriting", description: "Sales copy that converts visitors into customers" },
    { day: 7, title: "Customer Service", description: "Service standards that create loyal customers" },
    { day: 8, title: "Pricing", description: "Pricing strategies for maximum profitability" },
    { day: 9, title: "Online Booking", description: "Automated booking systems that work 24/7" },
    { day: 10, title: "E-Commerce Elements", description: "Payment processing and transaction optimization" },
    { day: 11, title: "Business Formation", description: "Legal structure and business registration" },
    { day: 12, title: "Phone System", description: "Professional phone systems that convert calls" },
    { day: 13, title: "Marketing Channels", description: "Multi-channel marketing for maximum reach" },
    { day: 14, title: "Hiring Day 1", description: "Finding and recruiting your first team members" },
    { day: 15, title: "Hiring Day 2", description: "Onboarding and training systems that scale" },
    { day: 16, title: "Insurance", description: "Protecting your business and limiting liability" },
    { day: 17, title: "Multiple Customer Contacts", description: "Communication systems that build relationships" },
    { day: 18, title: "Competition and Values", description: "Competitive positioning and value proposition" },
    { day: 19, title: "Making Millions with Yelp", description: "Yelp optimization strategies that drive revenue" },
    { day: 20, title: "Making Millions with Thumbtack", description: "Thumbtack mastery for consistent lead flow" },
    { day: 21, title: "Why Entrepreneurship Hasn't Worked", description: "Common pitfalls and how to avoid them" },
    { day: 22, title: "Leveraging Video", description: "Video marketing that builds trust and converts" },
    { day: 23, title: "Launch Like a Pro", description: "Launch strategies for maximum impact" },
    { day: 24, title: "Design for Conversions", description: "Design principles that increase conversions" },
    { day: 25, title: "$10K in Revenue from One Email Blast", description: "Email marketing that generates instant revenue" },
    { day: 26, title: "Tools We Use", description: "Essential tools and software for scaling" },
    { day: 27, title: "Let's Do It for You", description: "Complete done-for-you business setup offer" }
  ];

  const milestones = [
    { date: "October 2011", event: "Read inspiring article", amount: "$0" },
    { date: "November 3rd", event: "Launched website", amount: "First job same day" },
    { date: "End of November", event: "First $1,000 profit", amount: "$1,000" },
    { date: "Few weeks later", event: "Exceeded full-time income", amount: "$4,000/month" },
    { date: "Later", event: "Quit day job", amount: "$40,000/month" },
    { date: "Today", event: "Multi-million dollar company", amount: "$20M+ in sales" }
  ];

  const handleDayClick = (dayNumber: number) => {
    navigate(`/day${dayNumber}`);
  };

  const navigateToDay27 = () => {
    navigate('/day27');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Launch & Grow A<br />
              <span className="text-orange-400">Million Dollar</span><br />
              Cleaning Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              In 27 Days (Without Leaving Your Laptop)
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <DollarSign className="h-5 w-5 text-green-400" />
                <span className="font-semibold">$0 to $20M+ in Sales</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="h-5 w-5 text-blue-300" />
                <span className="font-semibold">8 Team Members</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-orange-300" />
                <span className="font-semibold">Started Part-Time</span>
              </div>
            </div>
            
            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={() => handleDayClick(1)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Start Your Journey Today
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={navigateToDay27}
                className="border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Skip to Done-For-You Option
              </button>
            </div>

            {/* Done-For-You Highlight Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg border-2 border-orange-300 shadow-lg max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                  🚀 Don't Want to Do It Yourself?
                </h3>
                <p className="text-orange-100 mb-4">
                  We'll build your complete cleaning business in 30 days for just <span className="text-yellow-300 font-bold text-xl">$97</span>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-1" />
                    <span className="text-xs text-orange-100">Website Built</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-1" />
                    <span className="text-xs text-orange-100">Marketing Setup</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-1" />
                    <span className="text-xs text-orange-100">Sales Copy</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-1" />
                    <span className="text-xs text-orange-100">Ready to Launch</span>
                  </div>
                </div>
                <button
                  onClick={navigateToDay27}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Get Your Business Built for $97
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Inspiration to Multi-Million Dollar Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In October 2011, I read about a guy making $150,000/year with a cleaning company. 
            I thought, "If he can do it, why can't I?" Here's exactly what happened next...
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                  <div className="text-sm font-semibold text-blue-600 mb-2">{milestone.date}</div>
                  <div className="text-lg font-bold text-gray-900 mb-2">{milestone.event}</div>
                  <div className="text-2xl font-bold text-green-600">{milestone.amount}</div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-3">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What I Did Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Here's Exactly What I Did (In 3 Weeks)
            </h2>
            <p className="text-xl text-gray-300">
              The simple steps that started a multi-million dollar empire
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Drew Up Marketing Plan", description: "One page in bullet form - that's it" },
              { step: 2, title: "Built Website", description: "Featured the most appealing ideas from successful competitors" },
              { step: 3, title: "Secured First Cleaner", description: "Asked my home cleaner if she'd take jobs - she said 'hells yeah'" },
              { step: 4, title: "Brushed Up on AdWords", description: "Used existing knowledge to set up profitable campaigns" },
              { step: 5, title: "Created Social Media", description: "Started Twitter and Facebook pages for credibility" },
              { step: 6, title: "Launched & Got First Job", description: "Launched November 3rd, got first job same day" }
            ].map((item) => (
              <div key={item.step} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three-Fold Purpose */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            This Guide Has Three Goals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">This Is Not Brain Surgery</h3>
              <p className="text-gray-600">Building a successful cleaning business doesn't require a PhD. It's simpler than you think.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don't Overthink Shit</h3>
              <p className="text-gray-600">Sometimes just doing it is the only answer. Action beats analysis paralysis every time.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-orange-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Case Study</h3>
              <p className="text-gray-600">Follow along with the exact steps I used, updated for what works in 2024.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 27 Days Curriculum */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your 27-Day Roadmap to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each day builds on the last, giving you a complete system for launching and scaling your cleaning business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {days.map((day) => (
              <div 
                key={day.day} 
                onClick={() => handleDayClick(day.day)}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 hover:border-orange-500 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 group-hover:bg-orange-100 text-blue-600 group-hover:text-orange-600 px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300">
                    Day {day.day}
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {day.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {day.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-green-100">
              Real results from following this exact system
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-300 mb-2">$20M+</div>
              <div className="text-sm text-white">Total Sales Generated</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-300 mb-2">27</div>
              <div className="text-sm text-white">Days to Launch</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-300 mb-2">8</div>
              <div className="text-sm text-white">Team Members</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-300 mb-2">3</div>
              <div className="text-sm text-white">Weeks to Setup</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Million Dollar Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            You can follow along and do it yourself, or you can hang out here for 10 more years without doing anything. 
            The choice is yours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => handleDayClick(1)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Start Day 1 Now
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={navigateToDay27}
              className="border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Skip to Done-For-You Option
            </button>
          </div>
          
          <p className="text-sm text-gray-400 italic">
            "In true reddit fashion you can tell me why this no longer works or the market is saturated... 
            and I'll just giggle over here and keep going."
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <TrendingUp className="h-8 w-8 text-orange-500 mr-3" />
              <span className="text-xl font-bold">Million Dollar Cleaning Business</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 - From Zero to $20 Million in Sales
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;