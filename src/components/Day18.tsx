import React, { useEffect } from 'react';
import { ArrowLeft, Search, Star, Users, Target, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Award, Globe, MessageCircle, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day18() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const competitiveAnalysisSteps = [
    {
      step: 1,
      title: "Hunt Down 1-Star Reviews",
      description: "Find negative reviews online and read them carefully",
      icon: Search,
      color: "red"
    },
    {
      step: 2,
      title: "Record Common Complaints",
      description: "Document things clients complain about over and over again",
      icon: AlertTriangle,
      color: "orange"
    },
    {
      step: 3,
      title: "Turn Into Values",
      description: "Transform industry problems into your selling points",
      icon: Target,
      color: "green"
    },
    {
      step: 4,
      title: "Infuse Into Communication",
      description: "Build these solutions into your website and marketing",
      icon: MessageCircle,
      color: "blue"
    }
  ];

  const commonComplaints = [
    {
      complaint: "Late arrivals",
      solution: "Arrival window vs exact time",
      implementation: "Build in buffer time and communicate clearly"
    },
    {
      complaint: "Poor communication",
      solution: "Multiple contact methods",
      implementation: "Phone, text, email, and chat availability"
    },
    {
      complaint: "Unreliable service",
      solution: "Consistent quality standards",
      implementation: "Training programs and quality checks"
    },
    {
      complaint: "Hidden fees",
      solution: "Transparent pricing",
      implementation: "Clear upfront pricing with no surprises"
    },
    {
      complaint: "No follow-up",
      solution: "Proactive customer service",
      implementation: "Automated follow-up and satisfaction checks"
    }
  ];

  const competitionReality = [
    {
      misconception: "Competition looks like this:",
      description: "One winner takes all, everyone else loses",
      reality: false,
      icon: AlertTriangle
    },
    {
      misconception: "But it actually looks like this:",
      description: "Multiple winners, some collaborating, many working together",
      reality: true,
      icon: Users
    }
  ];

  const collaborationBenefits = [
    "Your competition will often be a source of business",
    "A source of service providers",
    "A source of support along the way",
    "Potential partnership opportunities",
    "Industry knowledge sharing"
  ];

  const marketSaturationMyths = [
    {
      myth: "The market is saturated",
      reality: "FEAR masquerading as logical reasoning",
      truth: "Any saturation is usually a saturation of bad players making lots of money"
    },
    {
      myth: "No room for new players",
      reality: "Quality competition is often lacking",
      truth: "Look at the quality of competition, not just quantity"
    },
    {
      myth: "Too much competition",
      reality: "More validation that there's money to be made",
      truth: "Competition proves market demand exists"
    }
  ];

  const successStory = {
    name: "Facebook Group Member",
    start: "Rough start",
    timeline: "One year later",
    result: "Over $200k in revenue",
    lesson: "Benefits of joining a community and having folks to lean on"
  };

  const designAdvantages = [
    "Better designed website to begin with",
    "Professional branding and presentation",
    "Modern user experience",
    "Mobile-optimized interface",
    "Clear value proposition"
  ];

  const keyInsights = [
    "Check out your competition, get ideas from things they don't do well (and things they do well)",
    "Make sure you're well positioned to succeed",
    "You don't have to make mistakes yourselves in order to learn",
    "Your competition will often be a source of business, service providers, and support",
    "Reality often looks different than what we think"
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
              Day 18
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Competition and Values - Turn Problems Into Advantages
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Eye className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 18 of 27</span>
          </div>
          <p className="text-lg text-purple-100 leading-relaxed mb-4">
            Today we check out our competition and reframe a few things. Quick post.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-xl font-bold text-yellow-300 text-center">
              This isn't to garner us some moral high-ground...business is hard.
            </p>
            <p className="text-purple-200 text-center mt-2">
              But we'll learn from other companies' experiences.
            </p>
          </div>
        </div>

        {/* Competitive Analysis Process */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 4-Step Competitive Analysis Process</h2>
          
          <p className="text-gray-700 mb-6">
            So today we're going to spend a few minutes checking out the competitive landscape and figuring out some of the issues that are industry-wide...
          </p>

          <div className="space-y-6 mb-8">
            {competitiveAnalysisSteps.map((step) => (
              <div key={step.step} className={`bg-${step.color}-50 border-l-4 border-${step.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <div className={`bg-${step.color}-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0`}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <step.icon className={`h-6 w-6 text-${step.color}-600 mr-3`} />
                      <h3 className={`text-lg font-bold text-${step.color}-800`}>{step.title}</h3>
                    </div>
                    <p className={`text-${step.color}-700`}>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">The Goal</h3>
            <p className="text-blue-700">
              In order to find these industry-wide issues, we hunt down 1 star reviews online, read them, and record the things clients complain about over and over again.
            </p>
          </div>
        </div>

        {/* Yelp Review Example */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Example from Yelp</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">Quick Example Coming Up...</h3>
            <p className="text-red-700 mb-4">
              So from reading this review, we can turn this into values for us and put us in a better situation to win!
            </p>
            <div className="bg-red-100 p-4 rounded-lg">
              <Star className="h-6 w-6 text-red-600 mb-2" />
              <p className="text-red-800 font-medium">
                Example: Customer complaining about late arrivals and poor communication
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-3">Turn Problems Into Solutions</h3>
            <p className="text-green-700 mb-4">
              Are people complaining about late arrivals? Build in some solution for that: "arrival window" vs an actual time for example.
            </p>
            <p className="text-green-600">
              Keep going, and the result of this work might look like a comprehensive list of competitive advantages.
            </p>
          </div>
        </div>

        {/* Common Complaints & Solutions */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Industry Problems → Your Advantages</h2>
          
          <div className="space-y-6">
            {commonComplaints.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">❌ Common Complaint</h4>
                    <p className="text-red-700 text-sm">{item.complaint}</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">✅ Your Solution</h4>
                    <p className="text-green-700 text-sm">{item.solution}</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">🔧 Implementation</h4>
                    <p className="text-blue-700 text-sm">{item.implementation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy Summary */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Target className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The Strategy</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-lg text-green-100 mb-4">
                In summary, we find the industry-wide problems and we turn those issues into selling points.
              </p>
              <p className="text-xl font-bold text-yellow-300">
                We infuse those selling points into our communication and website.
              </p>
            </div>
            <p className="text-green-200">
              And this is before we consider that our website will be better designed to begin with!
            </p>
          </div>
        </div>

        {/* Design Advantages */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Competitive Advantages</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Beyond Problem-Solving</h3>
            <p className="text-blue-700">
              And this is before we consider that our website will be better designed to begin with!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {designAdvantages.map((advantage, index) => (
              <div key={index} className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-purple-800 font-medium">{advantage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competition Reality */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Reality About Competition</h2>
          
          <p className="text-gray-700 mb-6">
            Oh and a general idea on competition.
          </p>

          <div className="space-y-6 mb-6">
            {competitionReality.map((item, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                item.reality ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-start">
                  <item.icon className={`h-6 w-6 ${
                    item.reality ? 'text-green-600' : 'text-red-600'
                  } mr-3 mt-1`} />
                  <div>
                    <h3 className={`text-lg font-bold mb-3 ${
                      item.reality ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {item.reality ? '✅' : '❌'} {item.misconception}
                    </h3>
                    <p className={`${
                      item.reality ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">The Truth About Markets</h3>
            <p className="text-blue-700">
              With multiple winners, some collaborating, and many working together.
            </p>
          </div>
        </div>

        {/* Collaboration Benefits */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Competition Actually Helps You</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Reframe Competition</h3>
            <p className="text-green-700">
              Quite often your competition will end up working or partnering with you in some way. So keep that in mind and reframe what competition feels like.
            </p>
          </div>

          <div className="space-y-3">
            {collaborationBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-blue-50 p-4 rounded-lg">
                <Users className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-blue-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Award className="h-8 w-8 text-yellow-300 mr-3" />
            <h3 className="text-xl font-bold">Real Success Story</h3>
          </div>
          <p className="text-blue-100 mb-4">
            Here's an example, this was one of the folks that I helped build one of these businesses from our Facebook group.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold text-red-300 mb-2">Starting Point</h4>
              <p className="text-blue-200">{successStory.start}</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold text-green-300 mb-2">One Year Later</h4>
              <p className="text-blue-200">{successStory.result}</p>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg mt-4">
            <p className="text-yellow-300 font-semibold text-center">
              Btw this also illustrates the benefits of joining a community and having folks to lean on
            </p>
          </div>
        </div>

        {/* Community Invitation */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Join the Community</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Your Official Invite</h3>
            <p className="text-purple-700 mb-4">
              Here's your official invite to join our Facebook group for ongoing support and community.
            </p>
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-800 font-semibold">facebook.com/groups/remotecleaning</span>
            </div>
          </div>
        </div>

        {/* Market Saturation Myth */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center mb-6">
            <AlertTriangle className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">THE MOST ASKED QUESTION FOR 12 YEARS</h2>
            <p className="text-red-100 mt-2">(Was #1 question 12 years ago as well)</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 text-center">
              "BUT ROHAN ISN'T THE MARKET SATURATED?"
            </h3>
            <p className="text-red-100 text-center">
              This is meaningless, yet this single question has stopped more potential entrepreneurs in their tracks than...well I honestly can't think of anything that beats this.
            </p>
          </div>

          <div className="space-y-4">
            {marketSaturationMyths.map((myth, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-300 mb-2">❌ Myth: {myth.myth}</h4>
                <p className="text-red-100 mb-2">Reality: {myth.reality}</p>
                <p className="text-pink-200 text-sm">✅ Truth: {myth.truth}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fear vs Logic */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fear Masquerading as Logic</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">The Reality</h3>
            <p className="text-orange-700 mb-4">
              "The market is saturated" is just <strong>FEAR masquerading as logical reasoning</strong>.
            </p>
            <p className="text-orange-600">
              Start looking at the quality of the competition, and you'll often find that any saturation is a saturation of bad players, and they're making a LOT of money despite being so bad.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">The Alternative</h3>
            <p className="text-blue-700 mb-4">
              If you want no competition you could always start a bikini shop in Antarctica. :-)
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-bold text-center">
                Either way, the market is NEVER saturated! Stop it and get to work.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Takeaway Today</h2>
          
          <div className="space-y-4">
            {keyInsights.map((insight, index) => (
              <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">{insight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reality Check */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Reality Often Looks Different</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-purple-100 mb-4">
                And be reminded that your competition will often be a source of business, a source of service providers, and a source of support along the way.
              </p>
              <p className="text-xl font-bold text-yellow-300">
                It's funny how reality often looks different than what we think.
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Kill Those Market Saturation Questions</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                So kill those questions about market saturation.
              </p>
              <p className="text-green-100">
                The market is NEVER saturated! Stop it and get to work.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-center text-lg">
            Check out your competition, learn from their mistakes and successes, and position yourself to win.
          </p>
          <p className="text-center text-blue-200 mt-2 font-semibold">
            See y'all tomorrow
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day17')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 17
          </button>
          <button
            onClick={() => navigate('/day19')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 19 - Making Millions with Yelp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day18;