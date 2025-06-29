import React, { useEffect } from 'react';
import { ArrowLeft, Rocket, DollarSign, CheckCircle, Star, Target, Globe, Mail, Calendar, Zap, Users, TrendingUp, Award, Heart, Shield, Clock, Lightbulb } from 'lucide-react';

interface Day27Props {
  onBack: () => void;
}

function Day27({ onBack }: Day27Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dfyModules = [
    {
      module: 1,
      title: "Market Research & Verification",
      description: "We research and verify the most profitable service lines for your city and personal network",
      icon: Target,
      color: "blue"
    },
    {
      module: 2,
      title: "Irresistible Offer Creation",
      description: "We craft your irresistible cleaning offer that converts browsers into paying customers",
      icon: DollarSign,
      color: "green"
    },
    {
      module: 3,
      title: "Professional Website & Booking",
      description: "We set up your professional website and booking system that lets clients book you 24/7",
      icon: Globe,
      color: "purple"
    },
    {
      module: 4,
      title: "Client Acquisition System",
      description: "We set up a full Client Acquisition System to attract clients from day one",
      icon: Rocket,
      color: "orange"
    },
    {
      module: 5,
      title: "Email Nurturing Sequence",
      description: "We set up an automated email nurturing sequence to turn leads into loyal recurring clients",
      icon: Mail,
      color: "pink"
    },
    {
      module: 6,
      title: "SEO-Optimized Content",
      description: "We set up your SEO-optimized service pages and content to help you rank and get found",
      icon: Star,
      color: "indigo"
    },
    {
      module: 7,
      title: "Sales Copy That Converts",
      description: "We write all your sales copy — from website headlines to landing pages— written to convert",
      icon: Zap,
      color: "red"
    },
    {
      module: 8,
      title: "Integrated Calendar System",
      description: "We set up and connect your integrated calendar system that lets clients schedule cleanings with zero back-and-forth",
      icon: Calendar,
      color: "teal"
    },
    {
      module: 9,
      title: "Email Templates & Campaigns",
      description: "We design your email templates and marketing campaigns, expertly written by our copywriters",
      icon: Mail,
      color: "blue"
    },
    {
      module: 10,
      title: "Pricing Research & Payment Systems",
      description: "We do your local pricing research and connect your payment systems so customers pay by credit card",
      icon: DollarSign,
      color: "green"
    }
  ];

  const successStats = [
    { stat: "1000+", description: "Entrepreneurs helped launch cleaning businesses" },
    { stat: "$500M", description: "Approximate annual revenue generated" },
    { stat: "30 Days", description: "Complete business setup timeline" },
    { stat: "$97", description: "Total investment required" }
  ];

  const serviceOptions = [
    "Cleaning",
    "HVAC", 
    "Painting",
    "Lawncare",
    "Power washing",
    "Moving",
    "etc."
  ];

  const whyOnly97 = [
    {
      reason: "Tired of Fake Coaching",
      description: "I got tired of all the fake coaching/course offers that led to a loss of trust in the space",
      icon: Shield
    },
    {
      reason: "People Selling My Info",
      description: "And the shit ton of people selling $15,000 programs based on my info (but that's another story)",
      icon: Users
    },
    {
      reason: "Risk-Free Offer",
      description: "I wanted to build an offer so risk-free that you don't need to trust us to take it — all of the risk is on us",
      icon: Heart
    },
    {
      reason: "We Invest Upfront",
      description: "You invest $97, and we put the rest of the money in upfront to get your business off the ground",
      icon: DollarSign
    }
  ];

  const whatYouGet = [
    "Complete market research for your area",
    "Professional website with booking system",
    "All sales copy and marketing materials",
    "Email marketing automation setup",
    "SEO-optimized content and pages",
    "Payment processing integration",
    "Calendar and scheduling system",
    "Client acquisition system",
    "Pricing strategy for your market",
    "Everything needed to start making money"
  ];

  const riskComparison = [
    {
      approach: "Traditional Coaching",
      cost: "$15,000+",
      risk: "High - You pay everything upfront",
      result: "Often just information, no implementation",
      color: "red"
    },
    {
      approach: "Our DFY Service",
      cost: "$97",
      risk: "Zero - We do all the work",
      result: "Complete business ready to launch",
      color: "green"
    }
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
              Day 27
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Let's Do It for You - Complete Done-For-You Business Setup
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Rocket className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">We've Helped Over 1000 Entrepreneurs</h2>
            <p className="text-2xl text-green-100 mb-6">
              Launch their cleaning businesses to approximately <span className="text-yellow-300 font-bold">$500 million dollars</span> in annual revenue.
            </p>
            <div className="text-5xl font-bold text-yellow-300 mb-4">
              Insanity!
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-3xl font-bold text-yellow-300 mb-4">
                Now it's your turn.
              </p>
              <p className="text-xl text-green-100">
                For just $97, our team will build your complete cleaning business in 30 days — everything done for you!
              </p>
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Proven Results</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {successStats.map((stat, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.stat}</div>
                <div className="text-sm text-blue-700">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Options */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Service Business</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Not Just Cleaning!</h3>
            <p className="text-blue-700">
              (Or insert other local service business: hvac, painting, lawncare, power washing, moving etc.)
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {serviceOptions.map((service, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                <span className="text-green-800 font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Shield className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">No Stress. No Confusion.</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-2xl font-bold text-yellow-300 mb-4">
                Just a fully built, ready-to-run business in 30 days —
              </p>
              <p className="text-lg text-purple-100">
                Everything done for you while you focus on what matters most.
              </p>
            </div>
          </div>
        </div>

        {/* DFY Modules */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included in Our Done-For-You (DFY) Service:</h2>
          
          <div className="space-y-6">
            {dfyModules.map((module) => (
              <div key={module.module} className={`bg-${module.color}-50 border-l-4 border-${module.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <div className={`bg-${module.color}-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0`}>
                    {module.module}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <module.icon className={`h-6 w-6 text-${module.color}-600 mr-3`} />
                      <h3 className={`text-xl font-bold text-${module.color}-800`}>
                        🧼 DFY Module {module.module}: {module.title}
                      </h3>
                    </div>
                    <p className={`text-${module.color}-700`}>
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Just $97 */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Just $97</h2>
          
          <div className="space-y-6">
            {whyOnly97.map((reason, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <reason.icon className="h-8 w-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{reason.reason}</h3>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">The Bottom Line</h3>
            <p className="text-green-100 text-center mb-4">
              I wanted to build an offer so risk-free that you don't need to trust us to take it — all of the risk is on us.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 text-center">
                You invest $97, and we put the rest of the money in upfront to get your business off the ground — from the offer to the website to the systems.
              </p>
            </div>
          </div>
        </div>

        {/* Risk Comparison */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare the Risk</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {riskComparison.map((option, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                option.color === 'red' ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  option.color === 'red' ? 'text-red-800' : 'text-green-800'
                }`}>
                  {option.color === 'red' ? '❌' : '✅'} {option.approach}
                </h3>
                <div className="space-y-3">
                  <div className={`p-3 rounded-lg ${
                    option.color === 'red' ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    <div className={`font-semibold ${
                      option.color === 'red' ? 'text-red-800' : 'text-green-800'
                    }`}>
                      Cost: {option.cost}
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    option.color === 'red' ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    <div className={`font-semibold ${
                      option.color === 'red' ? 'text-red-800' : 'text-green-800'
                    }`}>
                      Risk: {option.risk}
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    option.color === 'red' ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    <div className={`font-semibold ${
                      option.color === 'red' ? 'text-red-800' : 'text-green-800'
                    }`}>
                      Result: {option.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Actually Get */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Everything You Get for $97</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {whatYouGet.map((item, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-blue-800 font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Rocket className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Cleaning Business the Smart Way?</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <p className="text-2xl font-bold text-yellow-300 mb-4">
                🚀 Join Cleaning Launch Accelerator now and watch your cleaning business thrive
              </p>
              <p className="text-lg text-orange-100">
                — all without having to manage the complicated setup yourself.
              </p>
            </div>
            
            <div className="bg-white/20 p-8 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-6">
                👉 Click here to secure Your Spot Now for $97
              </p>
              <a 
                href="https://cleaningbootcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-12 py-6 rounded-full text-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                START MY BUSINESS NOW
                <Rocket className="ml-3 h-8 w-8" />
              </a>
              <p className="text-orange-200 mt-4 text-sm">
                cleaningbootcamp.com
              </p>
            </div>
          </div>
        </div>

        {/* Final Success Message */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Award className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Congratulations!</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                You've completed the entire 27-day journey from idea to business launch!
              </p>
              <p className="text-lg text-green-100 mb-4">
                You now have everything you need to build a million-dollar local service business.
              </p>
              <p className="text-green-200">
                The only question left is: Will you take action?
              </p>
            </div>
          </div>
        </div>

        {/* Journey Recap */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your 27-Day Journey Recap</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">Days 1-9: Foundation</h4>
              <p className="text-blue-700 text-sm">Industry choice, business model, website, pricing, booking system</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Days 10-18: Operations</h4>
              <p className="text-green-700 text-sm">E-commerce elements, business formation, phone system, hiring, insurance</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-purple-800 mb-2">Days 19-27: Growth</h4>
              <p className="text-purple-700 text-sm">Marketing channels, launch strategy, design, email marketing, tools</p>
            </div>
          </div>
        </div>

        {/* Final Motivation */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The Time is NOW</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-purple-100 mb-4">
                You have the knowledge. You have the roadmap. You have the tools.
              </p>
              <p className="text-xl font-bold text-yellow-300 mb-4">
                The only thing standing between you and your million-dollar business is action.
              </p>
              <p className="text-purple-200">
                Don't let this opportunity pass you by. Your future self will thank you.
              </p>
            </div>
          </div>
        </div>

        {/* Thank You */}
        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <div className="text-center">
            <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Thank You for Following Along</h2>
            <p className="text-lg text-gray-300 mb-4">
              This has been an incredible 27-day journey together. Whether you build a cleaning business or any other local service business, you now have the blueprint for success.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-400">
                From $0 to $20 Million in Sales - You Can Do This Too!
              </p>
            </div>
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
            🎉 Journey Complete!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day27;