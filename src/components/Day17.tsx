import React, { useEffect } from 'react';
import { ArrowLeft, Phone, Mail, MessageCircle, Globe, Smartphone, DollarSign, AlertTriangle, Lightbulb, TrendingUp, ExternalLink, CheckCircle, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day17() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      method: "Phone and Text",
      tool: "OpenPhone",
      description: "Business phone system that rings on laptop or cellphone, allows texting, voicemails, and call recording",
      icon: Phone,
      color: "blue",
      setup: "Already set up on previous day"
    },
    {
      method: "Business Email",
      tool: "Google Workspace",
      description: "Professional email addresses like support@mycleaningcompany.com or hiring@mycleaningcompany.com",
      icon: Mail,
      color: "green",
      setup: "workspace.google.com (used to be called gsuite)"
    },
    {
      method: "Website Chat",
      tool: "Tawk.to",
      description: "Chat system that pops up when someone visits the site to initiate conversation and lead them to convert",
      icon: MessageCircle,
      color: "purple",
      setup: "Free forever!"
    }
  ];

  const businessAdvantages = [
    "Make it easy for customers to do business with us",
    "List of things some of which your competition won't bother to do",
    "Entire customer service infrastructure for ~$25/month",
    "Can be run remotely from anywhere",
    "20 years ago this might have cost $1,000/month"
  ];

  const expensiveMoves = [
    {
      mistake: "Being cheap on the wrong things",
      consequence: "Increases risk instead of saving money",
      example: "Skipping essential customer service tools"
    },
    {
      mistake: "Not investing in predictability",
      consequence: "Higher uncertainty and business risk",
      example: "Unreliable communication systems"
    },
    {
      mistake: "Trying to reinvent wheels",
      consequence: "Wasted time and resources",
      example: "Building custom solutions instead of using proven tools"
    }
  ];

  const riskMitigation = [
    "You want predictability, not risk",
    "Find what works and do that",
    "Business isn't about reinventing wheels",
    "It's about slotting in an existing wheel and getting on the road"
  ];

  const customerValue = [
    { metric: "Customer Lifetime Value", value: "Hundreds of dollars", description: "Each customer is worth significant revenue over time" },
    { metric: "Monthly Investment", value: "$25", description: "Total cost for complete customer service infrastructure" },
    { metric: "ROI", value: "Massive", description: "Don't let $25 stop your blessings" }
  ];

  const successStory = {
    achievement: "Over $40,000/month",
    method: "Leveraging cellphone while working full-time job",
    outcome: "Haven't had a job since quitting",
    tools: "All tools come right to cellphone"
  };

  const competitiveAdvantages = [
    "24/7 availability through multiple channels",
    "Professional communication systems",
    "Instant response capabilities",
    "Remote operation flexibility",
    "Automated lead capture and follow-up"
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
              Day 17
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Multiple Customer Contacts - Make It Easy to Reach You
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
            <Smartphone className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 17 of 27</span>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed">
            Today we chat about creating different ways to contact us to increase conversions. 
            <span className="text-yellow-300 font-bold">All the tools we use come right to our cellphone.</span>
          </p>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Real Success Story</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-lg text-green-100 mb-4">
                Remember when I did this I still had my full-time job.
              </p>
              <p className="text-xl font-bold text-yellow-300 mb-2">
                By the time I quit I was doing over $40,000 a month
              </p>
              <p className="text-green-200">
                leveraging my cellphone and I haven't had a job since...
              </p>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 3 Essential Contact Methods</h2>
          
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div key={index} className={`bg-${method.color}-50 border-l-4 border-${method.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <method.icon className={`h-8 w-8 text-${method.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-xl font-bold text-${method.color}-800`}>
                        {method.method}
                      </h3>
                      <span className={`bg-${method.color}-100 text-${method.color}-800 px-3 py-1 rounded-full text-sm font-medium`}>
                        {method.tool}
                      </span>
                    </div>
                    <p className={`text-${method.color}-700 mb-3`}>
                      {method.description}
                    </p>
                    <div className={`bg-${method.color}-100 p-3 rounded-lg`}>
                      <p className={`text-${method.color}-800 font-medium text-sm`}>
                        Setup: {method.setup}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Email Setup */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Email Setup</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Professional Email Addresses</h3>
            <p className="text-green-700 mb-4">
              This way I can get support@mycleaningcompany.com or hiring@mycleaningcompany.com etc.
            </p>
            <div className="flex items-center">
              <ExternalLink className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-semibold">workspace.google.com (used to be called gsuite)</span>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Easy Setup Option</h3>
            <p className="text-blue-700 mb-4">
              If it's confusing to set up someone on Fiverr can do it for like $15.
            </p>
            <div className="bg-blue-100 p-3 rounded-lg">
              <p className="text-blue-800 font-medium text-sm">
                Professional setup service available for minimal cost
              </p>
            </div>
          </div>
        </div>

        {/* Chat System */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Website Chat System</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Chat Works Brilliantly</h3>
            <p className="text-purple-700 mb-4">
              Chat works brilliantly to convert customers.
            </p>
            <p className="text-purple-600">
              You can set it to pop up when someone visits the site so you can initiate conversation and lead them down the path to convert.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <MessageCircle className="h-6 w-6 text-green-600 mr-2" />
              <h4 className="font-bold text-green-800">Tawk.to</h4>
            </div>
            <p className="text-green-700 mb-2">We use tawk.to</p>
            <div className="bg-green-100 p-3 rounded-lg">
              <p className="text-green-800 font-bold text-center">It's free forever!</p>
            </div>
          </div>
        </div>

        {/* Reframe Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">REFRAME</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-lg text-orange-100 mb-4">
                As you're reading this, and it seems like a lot of work I want you to reframe.
              </p>
              <p className="text-xl font-bold text-yellow-300">
                These aren't just the ways we make it easy for customers to do business with us.
              </p>
            </div>
            <p className="text-orange-100">
              These are also a list of things some of which your competition won't bother to do.
            </p>
          </div>
        </div>

        {/* Cost Analysis */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Cost Reality</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Incredible Value</h3>
            <p className="text-blue-700 mb-4">
              And if you add up the cost of everything I mentioned here, it's literally like <strong>$25 a month</strong> for your entire customer service infrastructure that can be ran remotely from anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {customerValue.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{item.value}</div>
                <div className="font-semibold text-gray-800 mb-1">{item.metric}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-2">Historical Perspective</h3>
            <p className="text-green-700">
              Just 20 years ago this might have cost $1,000 a month. <strong>We're living in the future.</strong>
            </p>
          </div>
        </div>

        {/* Scaling Considerations */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Scaling Your Customer Service</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Virtual Assistant Services</h3>
            <p className="text-purple-700">
              As you get bigger and you have capital to deploy you could look at VA services to handle incoming calls and text messages...
            </p>
          </div>
        </div>

        {/* Expensive Moves Warning */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center mb-6">
            <AlertTriangle className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">ONE OF THE MOST EXPENSIVE MOVES YOU CAN MAKE IS BEING CHEAP!</h2>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg mb-6">
            <p className="text-lg text-red-100 mb-4">
              Things are tough for a lot of folks right now, so I know how that is. I'm not talking about being frugal when things are tight.
            </p>
            <p className="text-red-200">
              Trust me, I've been there. Shoot, for most of my life.
            </p>
          </div>

          <div className="space-y-4">
            {expensiveMoves.map((move, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-300 mb-2">{move.mistake}</h4>
                <p className="text-red-100 mb-2">{move.consequence}</p>
                <p className="text-red-200 text-sm italic">Example: {move.example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk vs Savings */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk vs. Savings</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">The Reality</h3>
            <p className="text-orange-700 mb-4">
              But if you do have a reasonable budget for your business,
            </p>
            <p className="text-xl font-bold text-orange-800">
              *Being cheap on the wrong things can be expensive!*
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Key Insight</h3>
            <p className="text-blue-700 mb-4">
              "When you cheap out you're not "saving money" as much as you're "increasing risk".
            </p>
            <p className="text-blue-600">
              And a big part of success in business is risk mitigation.
            </p>
          </div>

          <div className="space-y-3">
            {riskMitigation.map((point, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-800">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business Advantages */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Competitive Advantages</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-blue-800 font-medium">{advantage}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {businessAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Takeaway */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <DollarSign className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">FINAL TAKEAWAY</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-lg text-purple-100 mb-4">
                So that's about it, main takeaway is make it easy for your customer to reach you by phone, text, email, and chat.
              </p>
              <p className="text-xl font-bold text-yellow-300 mb-2">
                Each customer is worth hundreds of dollars in lifetime value
              </p>
              <p className="text-purple-200">
                So don't let $25 stop your blessings.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-2xl font-bold text-yellow-300">
                This is the stuff you're being compensated for!
              </p>
            </div>
          </div>
        </div>

        {/* We're Living in the Future */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Globe className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">We're Living in the Future</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-green-100 mb-4">
                Just 20 years ago this might have cost $1,000 a month.
              </p>
              <p className="text-xl font-bold text-yellow-300">
                Now you can run a complete customer service infrastructure for $25/month from anywhere in the world.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day16')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 16
          </button>
          <button
            onClick={() => navigate('/day18')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 18 - Competition and Values
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day17;