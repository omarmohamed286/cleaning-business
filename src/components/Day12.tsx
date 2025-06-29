import React, { useEffect } from 'react';
import { ArrowLeft, Phone, Globe, Users, Mic, MessageSquare, Tag, FileText, ExternalLink, Clock, DollarSign, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

interface Day12Props {
  onBack: () => void;
}

function Day12({ onBack }: Day12Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneSystemGoals = [
    {
      goal: "A local number (NOT 1800 number)",
      reason: "You want to appear local",
      icon: Phone,
      color: "blue"
    },
    {
      goal: "VOIP capability",
      reason: "Answer on laptop wherever you live in the world",
      icon: Globe,
      color: "green"
    },
    {
      goal: "Shared number access",
      reason: "Build customer service team with shared access",
      icon: Users,
      color: "purple"
    },
    {
      goal: "Voice recordings",
      reason: "Record all inbound/outbound calls",
      icon: Mic,
      color: "orange"
    },
    {
      goal: "Text messaging",
      reason: "Text clients and teams as well",
      icon: MessageSquare,
      color: "pink"
    }
  ];

  const keyFeatures = [
    {
      feature: "Invite Your Staff",
      description: "As you grow your customer service team, handle all calls, text messages, and voice mails in one place",
      icon: Users,
      benefit: "Seamless team scaling"
    },
    {
      feature: "Call Recordings & Transcriptions",
      description: "Permanent record of all customer service interactions for quality and training",
      icon: Mic,
      benefit: "Quality assurance"
    },
    {
      feature: "Customer Notes & Tags",
      description: "Keep detailed records of customer preferences and interaction history",
      icon: Tag,
      benefit: "Personalized service"
    },
    {
      feature: "Internal Team Notes",
      description: "Share important information and context between team members",
      icon: FileText,
      benefit: "Team coordination"
    }
  ];

  const timeMoneyTradeoffs = [
    {
      resource: "Time",
      approach: "Spend time to make money",
      example: "Work 1.5 hours before day job, lunch hour, coffee shop until midnight",
      color: "blue"
    },
    {
      resource: "Money", 
      approach: "Buy someone else's time to make more money",
      example: "Invest in tools, services, and team members to scale faster",
      color: "green"
    }
  ];

  const realityChecks = [
    "Most folks have way more time available than they think",
    "They're not as zealous about how they use that time as they should be",
    "People miscalculate opportunity cost in their decision making",
    "College costs $300K+ but people hesitate at $2K for business investment"
  ];

  const sacrificeExamples = [
    "Hanging out",
    "Nightclubs", 
    "Birthday parties",
    "'Oh I'm in town for the weekend'",
    "Comcast for a few months to save money"
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
              Day 12
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Phone System - Professional Communication That Scales
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Phone className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 12 of 27</span>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed">
            Time to set up a professional phone system that works from day one to booking 100,000+. 
            <span className="text-yellow-300 font-bold">Local presence, global capability.</span>
          </p>
        </div>

        {/* Phone System Goals */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Goals for Your Phone System</h2>
          
          <p className="text-gray-700 mb-6">
            So we're trying to get a business phone number that fits several criteria:
          </p>

          <div className="space-y-4 mb-8">
            {phoneSystemGoals.map((goal, index) => (
              <div key={index} className={`bg-${goal.color}-50 border-l-4 border-${goal.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <goal.icon className={`h-6 w-6 text-${goal.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`text-lg font-bold text-${goal.color}-800 mb-2`}>
                      {goal.goal}
                    </h3>
                    <p className={`text-${goal.color}-700`}>
                      {goal.reason}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OpenPhone Solution */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter OpenPhone</h2>
          
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg mb-6">
            <div className="flex items-center mb-4">
              <ExternalLink className="h-6 w-6 text-green-200 mr-2" />
              <h3 className="text-xl font-bold">openphone.com</h3>
            </div>
            <p className="text-green-100 mb-4">
              That's what I use, I get no benefit from sharing it, use whatever you want.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-xl font-bold text-yellow-300">$19/month</span>
                <span className="text-green-200 ml-2">for everything you need</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Scales From Day 1 to 100,000+ Bookings</h3>
            <p className="text-blue-700">
              This is what we use, and for like $19 a month you have your phone number with some things that are going to become important as your business grows.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features That Matter</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-start mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{feature.feature}</h3>
                    <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                    <div className="bg-blue-100 px-3 py-1 rounded-full">
                      <span className="text-blue-800 font-medium text-xs">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Scaling */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Built for Team Growth</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">From Solo to Team</h3>
            <p className="text-purple-700">
              So that as you grow your customer service team you handle all calls, text messages, and voice mails in one place starting with you proving operational support and scaling all the way up as you build out your team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">Shared Access</h4>
              <p className="text-blue-700 text-sm">Entire team can access the same number</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Mic className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Call Records</h4>
              <p className="text-green-700 text-sm">Permanent record of all interactions</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <Tag className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-bold text-orange-800 mb-2">Customer Context</h4>
              <p className="text-orange-700 text-sm">Notes and tags for personalized service</p>
            </div>
          </div>
        </div>

        {/* Tool Philosophy */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">My Tool Philosophy</h2>
            <p className="text-lg text-gray-200 mb-4">
              This is another "I don't care what you use" tool, but it's what we use every single time because it just works.
            </p>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-2">
                Works from your 1st booking...
              </p>
              <p className="text-xl font-bold text-yellow-300">
                All the way to your 100,000th booking
              </p>
              <p className="text-gray-300 mt-2">(Which is where I'm at now)</p>
            </div>
          </div>
        </div>

        {/* Choice Framework */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Choice Framework</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg text-center">
              <Clock className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h4 className="font-bold text-red-800 mb-2">Research for 45 Days</h4>
              <p className="text-red-700 text-sm">Analyze every possible option</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <h4 className="font-bold text-yellow-800 mb-2">Find Something Better</h4>
              <p className="text-yellow-700 text-sm">Use what works for you</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Grab OpenPhone & Move On</h4>
              <p className="text-green-700 text-sm">Get your local number and keep building</p>
            </div>
          </div>
        </div>

        {/* Reality Check */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center mb-6">
            <AlertTriangle className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Reality Check: This Is a Full-Time Job</h2>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg mb-6">
            <p className="text-lg text-red-100 mb-4">
              Starting and growing a business is a full time job.
            </p>
            <p className="text-xl font-bold text-yellow-300 mb-2">
              Oh you have a full time job already? Great.
            </p>
            <p className="text-2xl font-bold text-yellow-300">
              Now you have two.
            </p>
          </div>

          <p className="text-red-100 text-center">
            So how is any of this going to be doable when you have friends, family, a boss breathing down your neck, and a host of other real-life issues?
          </p>
        </div>

        {/* Time & Money Resources */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Only Two Resources That Matter</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Time & Money</h3>
            <p className="text-blue-700 mb-4">
              It's going to take a strong appraisal of the only two resources that matter in this race:
            </p>
            <p className="text-blue-600 font-semibold">
              No matter what, you have to give something up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {timeMoneyTradeoffs.map((resource, index) => (
              <div key={index} className={`bg-${resource.color}-50 p-6 rounded-lg`}>
                <h3 className={`text-xl font-bold text-${resource.color}-800 mb-3`}>
                  {resource.resource}
                </h3>
                <p className={`text-${resource.color}-700 mb-4 font-semibold`}>
                  {resource.approach}
                </p>
                <div className={`bg-${resource.color}-100 p-4 rounded-lg`}>
                  <p className={`text-${resource.color}-800 text-sm`}>
                    {resource.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time Investment Story */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Time Investment Strategy</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">1 Year All-In Commitment</h3>
            <p className="text-orange-700 mb-4">
              Since I don't like giving straight up advice, I'll just say what my experience was like:
            </p>
            <p className="text-orange-600">
              I set out a goal of spending 1 year allocating all of my time to my business. All of it that was humanly possible.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-gray-800 mb-4">My Daily Schedule:</h4>
            <div className="space-y-3">
              <div className="flex items-center bg-white p-3 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-800">Wake up at 6am, work 1.5 hours on business</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg">
                <Clock className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-800">Lunch hour working on business</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-gray-800">5pm-midnight at coffee shop working on business</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600 mr-3" />
                <span className="text-gray-800">Saturdays and Sundays, 8 hours each minimum</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-bold text-green-800 mb-3">The Result</h4>
            <p className="text-green-700 mb-4">
              At the end of the day, I was putting in <strong>MORE time on my second job than my "real" job</strong>.
            </p>
            <p className="text-green-600">
              But I think that was a tiny price to pay to set myself up to make my own life decisions for the rest of my life.
            </p>
          </div>
        </div>

        {/* Sacrifices Made */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Gave Up</h2>
          
          <div className="bg-red-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-4">For 1 Year, I Didn't Do:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {sacrificeExamples.map((sacrifice, index) => (
                <div key={index} className="flex items-center bg-red-100 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-red-700">{sacrifice}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-2">The Tradeoff</h3>
            <p className="text-blue-700">
              That's the real tradeoff in this entire deal - temporary sacrifice for permanent freedom to make your own life decisions.
            </p>
          </div>
        </div>

        {/* Money Investment Reality */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Money Investment Reality Check</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Opportunity Cost Blindness</h3>
            <p className="text-yellow-700 mb-4">
              Most people miscalculate this as well. First they completely ignore opportunity cost in their decision making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-bold text-red-800 mb-3">College Investment</h4>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$300,000+</div>
                <div className="text-red-700 text-sm">With opportunity cost</div>
                <div className="text-red-600 text-sm mt-2">People make without thinking twice</div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-800 mb-3">Business Investment</h4>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$2,000</div>
                <div className="text-green-700 text-sm">For business startup</div>
                <div className="text-green-600 text-sm mt-2">Suddenly sounds like $2 million</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {realityChecks.map((check, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800">{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Contradiction */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">The Core Contradiction</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-2xl font-bold text-yellow-300 mb-4">
                You can't simultaneously want something badly, and then don't want to give up anything for it.
              </p>
              <p className="text-purple-200">
                Living like that will drive you crazy.
              </p>
            </div>
          </div>
        </div>

        {/* Investment Example */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Investment Appraisal Example</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Website Investment Case Study</h3>
            <p className="text-blue-700 mb-4">
              I had someone tell me that <strong>$5,000 was too much for my new website</strong>. 
              And this is even after showing them that with increased conversion rates, I could do an additional <strong>$150K per year</strong> from the improvement.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">$5,000 → $150,000</div>
                <div className="text-blue-600">Investment → Annual Return</div>
                <div className="text-blue-700 font-semibold mt-2">3,000% ROI</div>
              </div>
            </div>
            <p className="text-blue-600 mt-4 font-semibold">
              This is the type of appraisal that is often done fairly poorly.
            </p>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Keep This in Mind</h2>
            <p className="text-lg text-gray-200 mb-4">
              Most people will never break out of working a 9-5 job because they don't do a really good job of appraising:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">Time Commitment</h4>
                <p className="text-gray-300 text-sm">What it will actually take to succeed</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2">Money Investment</h4>
                <p className="text-gray-300 text-sm">Potential outcomes vs. costs</p>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-2xl font-bold text-yellow-300">
                You have to give something up to win in this game.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-center text-lg">
            Okay the last few days were kinda easy, but in the next few days we'll have some bigger challenges especially when we start with hiring and finding partners etc...
          </p>
          <p className="text-center text-blue-200 mt-2 font-semibold">
            See y'all tomorrow.
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
            Next: Day 13 - Marketing Channels
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day12;