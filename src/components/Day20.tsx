import React, { useEffect } from 'react';
import { ArrowLeft, Users, MessageCircle, Star, Search, Target, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Award, Video, CreditCard, Calendar, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day20() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const thumbtackBenefits = [
    {
      benefit: "Helping you find customers",
      description: "Direct lead generation from people actively seeking services",
      icon: Users,
      color: "blue"
    },
    {
      benefit: "Helping you find Quality Service Providers",
      description: "Build your team by connecting with skilled professionals",
      icon: Search,
      color: "green"
    },
    {
      benefit: "Giving you leads for customers",
      description: "Qualified prospects ready to book your services",
      icon: Target,
      color: "purple"
    },
    {
      benefit: "Being a place for five star reviews",
      description: "Build credibility and social proof for your business",
      icon: Star,
      color: "orange"
    }
  ];

  const mirrorTechniqueBenefits = [
    "Makes your customer feel special",
    "Shows them that you care about their needs", 
    "Shows your customer that you are paying attention to their request and needs"
  ];

  const faqs = [
    {
      question: "Can you sign up your cleaning company on Thumbtack if you're just using ICS only?",
      answer: "Yes, you can!",
      icon: CheckCircle
    },
    {
      question: "Can you ask for a credit card on Thumbtack?",
      answer: "I do it on the real booking form on my website.",
      icon: CreditCard
    },
    {
      question: "The communication you had with your customer in the video, is it happening within Thumbtack?",
      answer: "Yes it is!",
      icon: MessageCircle
    },
    {
      question: "When you set up your profile, what do you use as a profile picture?",
      answer: "I suggest that you use a person with a friendly and welcoming face that works for your company. You can also use a stock photo OR AI generated photo.",
      icon: Users
    },
    {
      question: "Do you manage your follow up in-house or do you outsource it?",
      answer: "I use VAs",
      icon: Target
    },
    {
      question: "Do your cleaners clean attics, basements, and garages?",
      answer: "I would add this on as an additional service",
      icon: Star
    }
  ];

  const homeAdvisorWarnings = [
    "They might try to lock you in for an annual contract",
    "Stay away from annual contracts in this business",
    "Use monthly trials to test if you like them",
    "Use PAY PER ACTION vs PAY PER VIEW",
    "Set maximum cost per day for leads",
    "Dispute leads that aren't useful"
  ];

  const thumbtackTips = [
    {
      tip: "Pay Per Lead Model",
      description: "You will be paying for leads on Thumbtack",
      icon: DollarSign
    },
    {
      tip: "Competition is Normal",
      description: "Having lots of cleaning companies in your area isn't bad - you're going to become an option",
      icon: Users
    },
    {
      tip: "Check Contractor Availability",
      description: "Ask them what their availability is when determining schedules",
      icon: Calendar
    },
    {
      tip: "Credit Card Requirement",
      description: "If customers don't have a credit card, they are not the customer for you!",
      icon: CreditCard
    }
  ];

  const platformReality = [
    "Is Thumbtack perfect? Nah son.",
    "But none of these platforms are.",
    "You just have to find the platform that works for your style",
    "And that works in your city."
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
              Day 20
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Making Millions with Thumbtack - Lead Generation & The Mirror Technique
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
            <Target className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 20 of 27</span>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed">
            Ok bet, let's get goin! Today we dive into Thumbtack and learn the Mirror Technique for customer communication.
          </p>
        </div>

        {/* Thumbtack Benefits */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How THUMBTACK Can Help Your Business</h2>
          
          <div className="space-y-6">
            {thumbtackBenefits.map((item, index) => (
              <div key={index} className={`bg-${item.color}-50 border-l-4 border-${item.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <item.icon className={`h-8 w-8 text-${item.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`text-xl font-bold text-${item.color}-800 mb-3`}>
                      {item.benefit}
                    </h3>
                    <p className={`text-${item.color}-700`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Resources */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Video Training Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Video className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-800">Thumbtack Overview Video</h3>
              </div>
              <p className="text-blue-700 mb-4">
                Made this video on Thumbtack that you can watch, so this won't be a long post.
              </p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold text-center">
                  Complete Thumbtack Strategy Guide
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-800">Mirror Technique Demo</h3>
              </div>
              <p className="text-green-700 mb-4">
                Watch me use the mirror technique in Thumbtack responses.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-semibold text-center">
                  Real Customer Communication Examples
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mirror Technique */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Mirror Technique</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">What Is The Mirror Technique?</h3>
            <p className="text-purple-700 mb-4">
              This involves you listening and repeating the customers needs back to them when they reach out. 
              <strong> This step is crucial to your business.</strong>
            </p>
            <p className="text-purple-600">
              It is also a good technique to use in other relationships in your life as well.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What are the benefits of the mirror technique?</h3>
            <div className="space-y-3">
              {mirrorTechniqueBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-blue-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-blue-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">The Power of Active Listening</h3>
            <p className="text-green-100 text-center">
              When you mirror back their needs, customers feel heard, understood, and valued. 
              This builds instant trust and dramatically increases conversion rates.
            </p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <p className="text-gray-700 mb-6">
            So this is largely a video day, so I'll just respond to some FAQs here:
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <faq.icon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Home Advisor Warning */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Home Advisor Warning</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">Question from Community</h3>
            <p className="text-red-700 mb-4">
              "Home Advisor found my website and called me and wants to find leads for recurring clients, 
              charging a one-time $30 for each potential client. Thoughts? A good deal?"
            </p>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="text-red-800 font-bold">
                I don't trust them but you can explore it.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {homeAdvisorWarnings.map((warning, index) => (
              <div key={index} className="flex items-start bg-yellow-50 p-4 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-800 text-sm">{warning}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-2">Key Rule</h3>
            <p className="text-orange-700">
              <strong>You do not want to get locked into an annual contract.</strong> You always want to use a monthly trial 
              that way you can see if you like them.
            </p>
          </div>
        </div>

        {/* Thumbtack Tips */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Thumbtack Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {thumbtackTips.map((tip, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <tip.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-800 mb-2">{tip.tip}</h3>
                    <p className="text-blue-700 text-sm">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Reality */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Platform Reality Check</h2>
            <div className="space-y-3">
              {platformReality.map((point, index) => (
                <p key={index} className="text-lg text-gray-200">
                  {point}
                </p>
              ))}
            </div>
            <div className="bg-white/10 p-6 rounded-lg mt-6">
              <p className="text-xl font-bold text-yellow-300">
                At the end of the day you can do this however you like.
              </p>
            </div>
          </div>
        </div>

        {/* Key Strategies Summary */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Thumbtack Success Strategies</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Mirror Technique</h4>
              <p className="text-green-700 text-sm">Repeat customer needs back to build trust</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">Lead Generation</h4>
              <p className="text-blue-700 text-sm">Pay per qualified lead model</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-purple-800 mb-2">Review Building</h4>
              <p className="text-purple-700 text-sm">Collect five-star reviews for credibility</p>
            </div>
          </div>
        </div>

        {/* Tomorrow Preview */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Tomorrow Should Be Fun!</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-2">
                We're getting close to the finish line!
              </p>
              <p className="text-orange-100">
                More advanced strategies and final implementation details coming up.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day19')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 19
          </button>
          <button
            onClick={() => navigate('/day21')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 21 - Why Entrepreneurship Hasn't Worked
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day20;