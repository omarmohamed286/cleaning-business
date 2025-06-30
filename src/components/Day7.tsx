import React, { useEffect } from 'react';
import { ArrowLeft, Heart, Users, Star, Shield, TrendingUp, CheckCircle, AlertTriangle, Lightbulb, Award, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day7() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceExamples = [
    {
      company: "Zappos",
      example: "Buying new shoes for a customer, mailing to Sweden, paying international shipping AND customs fees",
      icon: Award
    },
    {
      company: "Your Business",
      example: "Going above and beyond to make customers feel special and taken care of",
      icon: Heart
    }
  ];

  const servicePrinciples = [
    {
      title: "Customer isn't always right",
      subtitle: "But we treat them like they are",
      description: "Often customers are DEAD WRONG, but we handle it with grace and professionalism",
      icon: Users,
      color: "blue"
    },
    {
      title: "Think customer convenience",
      subtitle: "At all times",
      description: "Every decision should consider how to make things easier for the customer",
      icon: Heart,
      color: "green"
    },
    {
      title: "Service is marketing",
      subtitle: "Best ROI you can get",
      description: "Money spent on customer service is worth multiples more than AdWords",
      icon: TrendingUp,
      color: "purple"
    }
  ];

  const keyInsights = [
    "Outside of technology, customer service is the greatest differentiator for these businesses",
    "It's cheaper to keep existing customers than it is to replace them",
    "Customer Service is MARKETING!",
    "Ridiculously AWESOME customer service is the best marketing spend imaginable!"
  ];

  const upcomingTopics = [
    { topic: "Pricing", description: "How to price your services competitively", icon: DollarSign },
    { topic: "Competitive Analysis", description: "Understanding your market landscape", icon: TrendingUp },
    { topic: "Hiring", description: "Building your team", icon: Users }
  ];

  const onNavigateToDay27 = () => {
    navigate('/day27');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-2"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Days
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              Day 7
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Developing Our Customer Service Mindset
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Heart className="h-8 w-8 text-pink-400 mr-3" />
            <span className="text-xl font-bold">Day 7 of 27</span>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed mb-4">
            If you're new here, this is DAY 7 of a 27 DAY series where you peek over my shoulder and watch me build a business from scratch.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-xl font-bold text-yellow-300 text-center">
              Today isn't an ACTION day - it's preparation and mindset! 🧠
            </p>
          </div>
        </div>

        {/* World Class Service Goal */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Goal: World Class Service</h2>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-6">
            <div className="flex items-center mb-4">
              <Star className="h-8 w-8 text-yellow-300 mr-3" />
              <h3 className="text-xl font-bold">Think Zappos</h3>
            </div>
            <p className="text-orange-100 text-lg">
              Companies that are known for great service. That's what we're aiming for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceExamples.map((example, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <example.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-blue-800">{example.company}</h3>
                </div>
                <p className="text-blue-700">{example.example}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">The Reality Check</h3>
            <p className="text-yellow-700">
              Of course we can't duplicate the deep pockets of a multi-million dollar company, but we can do things to make the customer feel special and taken care of.
            </p>
          </div>
        </div>

        {/* Customer Service Principles */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Service Principles</h2>
          
          <div className="space-y-6">
            {servicePrinciples.map((principle, index) => (
              <div key={index} className={`bg-${principle.color}-50 border-l-4 border-${principle.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <principle.icon className={`h-8 w-8 text-${principle.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`text-xl font-bold text-${principle.color}-800 mb-1`}>
                      {principle.title}
                    </h3>
                    <h4 className={`text-lg font-semibold text-${principle.color}-700 mb-3`}>
                      {principle.subtitle}
                    </h4>
                    <p className={`text-${principle.color}-600`}>
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Big Question */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Is the customer always right?</h2>
            <div className="text-5xl font-bold text-yellow-300 mb-4">
              Hell to the Naw!
            </div>
            <p className="text-xl text-red-100 mb-4">
              Actually, quite often the customer is <strong>DEAD WRONG!</strong>
            </p>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg font-semibold text-pink-200">
                But what we're going to try to do is treat our customers like they are right (within reason of course!)
              </p>
            </div>
          </div>
        </div>

        {/* Major Point */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Major Point</h2>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold">Key Differentiator</h3>
            </div>
            <p className="text-lg text-purple-100">
              Outside of technology, customer service is the <strong>greatest differentiator</strong> for these businesses.
            </p>
          </div>

          <div className="space-y-4">
            {keyInsights.map((insight, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-800 font-medium">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Service as Marketing */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Service = Marketing</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">Retention Strategy</h3>
              <p className="text-green-700 mb-4">
                It's cheaper to keep existing customers than it is to replace them.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-800">5x</div>
                <div className="text-sm text-green-600">More expensive to acquire new customers</div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">ROI Comparison</h3>
              <p className="text-blue-700 mb-4">
                Money spent on customer service vs. AdWords:
              </p>
              <div className="space-y-2">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <div className="font-bold text-blue-800">Customer Service</div>
                  <div className="text-sm text-blue-600">Worth multiples more</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="font-bold text-gray-600">AdWords</div>
                  <div className="text-sm text-gray-500">Standard ROI</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h3 className="text-lg font-bold text-orange-800 mb-2">Bottom Line</h3>
            <p className="text-orange-700">
              As far as I'm concerned, money spent this way is worth multiples more than if I were to spend the same money on Adwords.
            </p>
          </div>
        </div>

        {/* Not Just Quick Money */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Shield className="h-12 w-12 text-blue-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">This Isn't About Quick Money</h2>
            <p className="text-lg text-gray-200 mb-4">
              Easy day. This is just a post to make sure that folks recognize that this is not about throwing up a quick website and counting dollars.
            </p>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                You have to build AWESOME customer service into the fabric of the company to sustain it.
              </p>
            </div>
          </div>
        </div>

        {/* Resource Recommendation */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Reading</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-blue-800">Delivering Happiness</h3>
                <p className="text-blue-600">by Zappos</p>
              </div>
            </div>
            <p className="text-blue-700">
              Check out this book for customer service insights if you need more inspiration and concrete examples.
            </p>
          </div>
        </div>

        {/* Timeline & What's Coming */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Timeline & What's Coming</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-2">The Goal</h3>
            <p className="text-green-700">
              I know this may seem slow for some of you, but for me, my goal is to <strong>start making money by day 30</strong> and I'll show you guys EXACTLY how we get there.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Coming Up Next</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {upcomingTopics.map((topic, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <topic.icon className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-bold text-gray-800 mb-1">{topic.topic}</h4>
                  <p className="text-sm text-gray-600">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-2">Heads Up!</h3>
            <p className="text-orange-700">
              Things are going to <strong>ramp up quickly</strong> in the next few days!
            </p>
          </div>
        </div>

        {/* TL;DR Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">TL;DR</h2>
            <div className="space-y-4 text-lg text-purple-100">
              <p>
                Customers aren't always right, but we're going to treat them that way even if it ends up losing some money on an individual transaction here and there.
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-xl font-bold text-yellow-300">
                  At the end of the day, ridiculously AWESOME customer service is the best marketing spend imaginable!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-center text-lg">
            That's it for today - a mindset day to set the foundation for everything that follows.
          </p>
          <p className="text-center text-blue-200 mt-2 font-semibold">
            See y'all on the morrow!
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day6')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 6
          </button>
          <button
            onClick={() => navigate('/day8')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 8 - Pricing
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day7;