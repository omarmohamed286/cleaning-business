import React, { useEffect } from 'react';
import { ArrowLeft, PenTool, Users, MessageCircle, Target, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day6() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const launchProcess = [
    { step: 1, title: "Create a dope looking brand", description: "Website, logo, copywriting", status: "in-progress" },
    { step: 2, title: "Set up ways for customers to pay us", description: "Payment processing and checkout", status: "upcoming" },
    { step: 3, title: "Drive as much traffic as we can muster", description: "Marketing and customer acquisition", status: "upcoming" }
  ];

  const copywritingComparison = [
    {
      type: "Option A - Corporate Speak",
      example: "Our proprietary cleaning technology provides world-class removal of microscopic bacteria from surfaces while preventing cross-contamination and...blah blah.",
      rating: "❌ Boring & Confusing"
    },
    {
      type: "Option B - Human Speak", 
      example: "You'll get good old-fashioned cleaning with products that are safe for your family and pets.",
      rating: "✅ Clear & Relatable"
    }
  ];

  const boringCTAs = [
    "SUBMIT",
    "SUBSCRIBE", 
    "CLICK HERE",
    "LEARN MORE",
    "GET STARTED"
  ];

  const betterCTAs = [
    "Grab the Book",
    "Get VIP Access",
    "Become a Secret Agent",
    "Join the Tribe",
    "Start Your Journey"
  ];

  const copywritingTips = [
    {
      tip: "Write for a human being",
      description: "Simple conversation with one person, not a corporate boardroom",
      icon: Users
    },
    {
      tip: "Don't be afraid of slang",
      description: "If it fits your audience, use language they actually use",
      icon: MessageCircle
    },
    {
      tip: "Read everything aloud",
      description: "Should sound like a fun conversation with a friend",
      icon: PenTool
    },
    {
      tip: "Stay away from corporate speak",
      description: "Better connection means more money",
      icon: Target
    }
  ];

  const problemSolvers = [
    "Scared?",
    "Intimidated?", 
    "Unsure?",
    "Apprehensive?"
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
              Day 6
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Copywriting - Writing That Actually Sells
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <PenTool className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 6 of 27</span>
          </div>
          <p className="text-lg text-green-100 leading-relaxed">
            As usual every day I introduce you to someone else that saw the same stuff I'm sharing with you, took action, and changed their lives. Here's my guy that did it while at his full time job.
          </p>
        </div>

        {/* Launch Process */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process for Launching Companies</h2>
          
          <p className="text-gray-700 mb-6">
            The same process every single time:
          </p>

          <div className="space-y-4 mb-8">
            {launchProcess.map((item) => (
              <div key={item.step} className={`flex items-start p-6 rounded-lg border-l-4 ${
                item.status === 'in-progress' ? 'bg-blue-50 border-blue-500' : 
                item.status === 'completed' ? 'bg-green-50 border-green-500' : 
                'bg-gray-50 border-gray-300'
              }`}>
                <div className={`rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 ${
                  item.status === 'in-progress' ? 'bg-blue-500 text-white' :
                  item.status === 'completed' ? 'bg-green-500 text-white' :
                  'bg-gray-400 text-white'
                }`}>
                  {item.step}
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    item.status === 'in-progress' ? 'text-blue-800' :
                    item.status === 'completed' ? 'text-green-800' :
                    'text-gray-600'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`${
                    item.status === 'in-progress' ? 'text-blue-700' :
                    item.status === 'completed' ? 'text-green-700' :
                    'text-gray-500'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h3 className="text-lg font-bold text-orange-800 mb-2">Why This Works</h3>
            <p className="text-orange-700">
              Working this way stops us from agonizing over the gazillion "what-ifs" and "buts" and "well the problem is" that people use to stop themselves.
            </p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 90% Rule</h2>
          
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-purple-800">Critical Insight</h3>
            </div>
            <p className="text-purple-700 text-lg">
              We know that <strong>90% of what we end up learning about a business we learn AFTER the launch</strong> and not in the agonizing before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Make it easy to pay</h4>
              <p className="text-green-700 text-sm">Simple checkout process</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">Sell what people want</h4>
              <p className="text-blue-700 text-sm">Proven market demand</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-purple-800 mb-2">Provide good experiences</h4>
              <p className="text-purple-700 text-sm">Quality service delivery</p>
            </div>
          </div>

          <div className="text-center text-gray-600">
            <p>Most other things don't really matter.</p>
          </div>
        </div>

        {/* Universal Solution */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Zap className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The Universal Problem Solver</h2>
            <p className="text-lg text-red-100 mb-6">
              When in doubt, almost every problem you can imagine can be solved by this one little crazy thing:
            </p>
            <div className="text-4xl font-bold text-yellow-300 mb-6">
              GET CUSTOMERS!
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {problemSolvers.map((problem, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg">
                  <div className="text-lg font-semibold text-pink-200">{problem}</div>
                  <div className="text-yellow-300 font-bold">Get customers.</div>
                </div>
              ))}
            </div>
            <p className="text-red-100 mt-6">
              You'll learn faster, tighten up your mindset issues, and start to move with confidence.
            </p>
          </div>
        </div>

        {/* Perfection Warning */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Beware the Quest for Perfection</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">Nothing to Something</h3>
              <p className="text-green-700 mb-4">Incredible distance between the two.</p>
              <div className="bg-green-200 h-4 rounded-full">
                <div className="bg-green-600 h-4 rounded-full w-full"></div>
              </div>
              <p className="text-green-600 text-sm mt-2">Massive impact</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Something to Perfect</h3>
              <p className="text-gray-700 mb-4">Barely noticeable.</p>
              <div className="bg-gray-200 h-4 rounded-full">
                <div className="bg-gray-400 h-4 rounded-full w-1/4"></div>
              </div>
              <p className="text-gray-500 text-sm mt-2">Minimal impact</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <div className="text-3xl font-bold text-blue-600">Get to something!</div>
          </div>
        </div>

        {/* Copywriting Main Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Copywriting That Actually Works</h2>
          
          <p className="text-gray-700 mb-6">
            This will be short. Let's say you have two options:
          </p>

          <div className="grid md:grid-cols-1 gap-6 mb-8">
            {copywritingComparison.map((option, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                index === 0 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-bold ${
                    index === 0 ? 'text-red-800' : 'text-green-800'
                  }`}>
                    {option.type}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    index === 0 ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
                  }`}>
                    {option.rating}
                  </span>
                </div>
                <div className={`p-4 rounded-lg italic ${
                  index === 0 ? 'bg-white border-l-4 border-red-400' : 'bg-white border-l-4 border-green-400'
                }`}>
                  <p className={`${index === 0 ? 'text-red-700' : 'text-green-700'}`}>
                    "{option.example}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">The Winner</h3>
            <p className="text-blue-700">
              We always go with <strong>Option B</strong>. Write for a human being and you make more money.
            </p>
          </div>
        </div>

        {/* Copywriting Tips */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Copywriting Tips That Work</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {copywritingTips.map((tip, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <tip.icon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="font-bold text-gray-800">{tip.tip}</h3>
                </div>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">The Goal</h3>
            <p className="text-yellow-700 mb-4">
              Have a simple conversation with one human being, and if done well, they'll actually hear your voice in their heads.
            </p>
            <div className="text-center">
              <span className="text-xl font-bold text-yellow-800">
                Better connection = More money
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action Tips */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Better Call-to-Actions</h2>
          
          <p className="text-gray-700 mb-6">
            Stay away from boring calls to action. Something silly will work so much better.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-red-800 mb-4">❌ Boring CTAs</h3>
              <div className="space-y-2">
                {boringCTAs.map((cta, index) => (
                  <div key={index} className="bg-red-100 p-3 rounded-lg text-center">
                    <span className="text-red-700 font-medium">{cta}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-4">✅ Better CTAs</h3>
              <div className="space-y-2">
                {betterCTAs.map((cta, index) => (
                  <div key={index} className="bg-green-100 p-3 rounded-lg text-center hover:bg-green-200 transition-colors duration-200 cursor-pointer">
                    <span className="text-green-700 font-medium">{cta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final Tip */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <MessageCircle className="h-12 w-12 text-purple-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Final Copywriting Tip</h2>
            <p className="text-lg text-purple-100 mb-4">
              Read everything aloud when you're done.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                It should sound like a fun conversation with a friend.
              </p>
            </div>
            <p className="text-purple-200 mt-4">
              If you can find a way to write casually and stay away from corporate speak, you'll connect better with your audience.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-700 mb-2">
              Okay I'll chill there and I'll come back and check any questions.
            </p>
            <p className="text-blue-600 font-semibold">
              See you in 24!
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day5')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 5
          </button>
          <button
            onClick={() => navigate('/day7')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 7 - Customer Service
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day6;