import React, { useEffect } from 'react';
import { ArrowLeft, Target, Users, Star, Globe, DollarSign, Mail, Handshake, TrendingUp, Search, MessageCircle, AlertTriangle, Lightbulb, Award, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day13() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marketingFormula = [
    {
      step: 1,
      title: "Build a dope landing page with a great offer",
      description: "Professional website that converts visitors into customers",
      icon: Globe,
      color: "blue"
    },
    {
      step: 2,
      title: "Build a seamless way for people to convert",
      description: "Simple checkout process and booking system",
      icon: Target,
      color: "green"
    },
    {
      step: 3,
      title: "Get as many people as possible to see it",
      description: "Drive targeted traffic from multiple channels",
      icon: TrendingUp,
      color: "purple"
    }
  ];

  const marketingChannels = [
    {
      channel: "Friends and Family (Referrals)",
      percentage: "1%",
      description: "Your inner circle and word-of-mouth referrals",
      icon: Users,
      color: "blue",
      effectiveness: "High quality, low volume"
    },
    {
      channel: "Social Media",
      percentage: "1%", 
      description: "Facebook, Instagram, Twitter presence",
      icon: MessageCircle,
      color: "pink",
      effectiveness: "Brand awareness, limited conversions"
    },
    {
      channel: "Review Sites/Classifieds (Yelp, etc. + SEO)",
      percentage: "90%",
      description: "Where people actively search for services",
      icon: Star,
      color: "green",
      effectiveness: "Highest ROI, active buyers"
    },
    {
      channel: "Local Media/Blogs",
      percentage: "1%",
      description: "Local publications and community blogs",
      icon: Globe,
      color: "orange",
      effectiveness: "Credibility building"
    },
    {
      channel: "General Paid Media",
      percentage: "5%",
      description: "Google Ads, Facebook Ads, etc.",
      icon: DollarSign,
      color: "red",
      effectiveness: "Scalable but expensive"
    },
    {
      channel: "Strategic Partnerships",
      percentage: "2%",
      description: "Partnerships with complementary businesses",
      icon: Handshake,
      color: "purple",
      effectiveness: "Quality leads, relationship dependent"
    }
  ];

  const keyInsights = [
    "Your people are the folks that are ACTIVELY looking for you",
    "Find out where they are looking",
    "Go where they are already looking",
    "90% of money comes from people actively searching vs interrupting with ads"
  ];

  const successStory = {
    name: "Nicovi",
    age: "19 years old",
    background: "Right out of high school",
    achievement: "Built successful business working with the author"
  };

  const marketingMyths = [
    {
      myth: "Facebook/Instagram ads are essential",
      reality: "Chances are the only person that will benefit is Zuckerberg",
      icon: AlertTriangle
    },
    {
      myth: "Marketing is something magical",
      reality: "It's mostly about finding where your customers are already looking",
      icon: Lightbulb
    },
    {
      myth: "You need complex funnels",
      reality: "Simple, direct approach to active searchers works best",
      icon: Target
    }
  ];

  const failureReality = [
    "Nothing happens! It's literally the most mundane non-event imaginable",
    "Spend a day or two wrapping up loose ends",
    "Head to the movies or do something fun",
    "By the next day already figuring out what the next thing is"
  ];

  const successPattern = [
    { attempt: "Try", result: "Fail", color: "red" },
    { attempt: "Try", result: "Fail", color: "red" },
    { attempt: "Try", result: "Fail", color: "red" },
    { attempt: "Try", result: "Fail", color: "red" },
    { attempt: "Try", result: "Win", color: "green" },
    { attempt: "Continue", result: "Win", color: "green" },
    { attempt: "Continue", result: "Win", color: "green" },
    { attempt: "Continue", result: "Win", color: "green" }
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
              Day 13
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Marketing Channels - Where to Find Paying Customers
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Search className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 13 of 27</span>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">SO WHERE THE HELL DO WE FIND PAYING CUSTOMERS?</h2>
            <p className="text-lg text-red-100">
              This is going to be an intro to step 3 of our proven formula.
            </p>
          </div>
        </div>

        {/* Marketing Formula */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Simple Marketing Formula</h2>
          
          <p className="text-gray-700 mb-6">
            At the end of the day growing a business is simply:
          </p>

          <div className="space-y-4 mb-8">
            {marketingFormula.map((step) => (
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
            <h3 className="text-lg font-bold text-blue-800 mb-2">So this is going to be an intro to step 3</h3>
            <p className="text-blue-700">
              We've covered the first two steps extensively. Now it's time to drive traffic and get customers.
            </p>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Award className="h-8 w-8 text-yellow-300 mr-3" />
            <h3 className="text-xl font-bold">Age Is Just a Number</h3>
          </div>
          <p className="text-green-100 mb-4">
            By the way I figured this stuff out at <strong className="text-yellow-300">37 years old</strong>. 
            My friend Nicovi figured it out at <strong className="text-yellow-300">19 years old</strong> from working with me.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-lg font-bold text-yellow-300 text-center mb-2">
              If you're in your teens or 20s or 30s you're still so ahead of the game
            </p>
            <p className="text-green-200 text-center">
              You can skip most of the corporate drudgery and rescue yourself now if you want
            </p>
          </div>
          <p className="text-center text-xl font-bold text-yellow-300 mt-4">
            If a teenager right out of high school can do it...
          </p>
        </div>

        {/* Marketing Reality */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marketing for Local Isn't Magic</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">The Truth About Local Marketing</h3>
            <p className="text-purple-700 mb-4">
              So 1st thing: Marketing for local isn't magic. It's mostly:
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {keyInsights.map((insight, index) => (
              <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                  {index + 1}
                </div>
                <span className="text-blue-800 font-medium">{insight}</span>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Key Insight</h3>
            <p className="text-yellow-700">
              In this game you will make ~90% of your money from people that are <strong>actively looking for you</strong> vs people that you interrupt with ads while they're sharing relationship memes on Facebook.
            </p>
          </div>
        </div>

        {/* Marketing Myths */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Marketing Myths</h2>
          
          <div className="space-y-6">
            {marketingMyths.map((myth, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <myth.icon className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">❌ Myth: {myth.myth}</h3>
                    <p className="text-red-700">✅ Reality: {myth.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Channels Breakdown */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where Our People Hang Out</h2>
          
          <p className="text-gray-700 mb-6">
            So let's see where our people hang out. Here's the breakdown of where your new business will come from:
          </p>

          <div className="space-y-6">
            {marketingChannels.map((channel, index) => (
              <div key={index} className={`bg-${channel.color}-50 border-l-4 border-${channel.color}-500 p-6 rounded-r-lg hover:shadow-md transition-shadow duration-200`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <channel.icon className={`h-8 w-8 text-${channel.color}-600 mr-4 mt-1 flex-shrink-0`} />
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold text-${channel.color}-800 mb-2`}>
                        {channel.channel}
                      </h3>
                      <p className={`text-${channel.color}-700 mb-2`}>
                        {channel.description}
                      </p>
                      <div className={`bg-${channel.color}-100 px-3 py-1 rounded-full inline-block`}>
                        <span className={`text-${channel.color}-800 font-medium text-sm`}>
                          {channel.effectiveness}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`bg-${channel.color}-600 text-white px-4 py-2 rounded-full ml-4`}>
                    <span className="font-bold text-lg">{channel.percentage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-3">The 90% Rule</h3>
            <p className="text-green-700">
              Notice that <strong>Review Sites/Classifieds (including SEO) make up 90% of new business</strong>. 
              This is where people are actively searching for services like yours.
            </p>
          </div>
        </div>

        {/* Email Marketing */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Email for Customer Retention</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <div className="flex items-center mb-3">
              <Mail className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-bold text-blue-800">Converting Old Customers to Purchase Again</h3>
            </div>
            <p className="text-blue-700">
              Email strategies for turning one-time customers into repeat customers and building lifetime value.
            </p>
          </div>
        </div>

        {/* 12-Month Goal */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Target className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Your 12-Month Mission</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                Your goal in the next 12 months is to become one of the best people in the world at the list of things above
              </p>
              <p className="text-orange-100">
                Or build capital to help hire some of those people.
              </p>
            </div>
            <p className="text-lg text-orange-100">
              Either way, you don't build a big business by throwing up a website and hoping for the best.
            </p>
          </div>
        </div>

        {/* Systematic Approach */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Systematic Approach</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">How You Actually Build a Big Business</h3>
            <p className="text-blue-700">
              You build a big business by <strong>systematically cycling through the sources of traffic above</strong> after you have built a landing page that converts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-bold text-red-800 mb-3">❌ Not Easy</h4>
              <p className="text-red-700">
                It's an intense set of work that requires dedication and systematic execution.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-800 mb-3">✅ Worth It</h4>
              <p className="text-green-700">
                Could have you quit your job in a year and effectively retire in 3 years vs the slow drudgery of working until you're 65.
              </p>
            </div>
          </div>
        </div>

        {/* Failure Reality */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What If You Fail?</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">The Reality of Failure</h3>
            <div className="space-y-2">
              {failureReality.map((point, index) => (
                <div key={index} className="flex items-center text-green-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">The Success Pattern</h3>
            <p className="text-blue-700 mb-4">
              My personal experience hasn't been "Try→Win", it has been more like:
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {successPattern.map((step, index) => (
                <div key={index} className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  step.color === 'red' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                  {step.attempt} → {step.result}
                </div>
              ))}
            </div>
            <p className="text-blue-600 text-center font-semibold">
              With each failure you get better, and then things just start to come easy.
            </p>
          </div>
        </div>

        {/* Naysayers Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center mb-6">
            <Zap className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Dealing with Naysayers</h2>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg mb-6">
            <p className="text-lg text-purple-100 mb-4">
              If you're doing something...I mean anything, you'll meet them. Whether it's in real life, on the Internet, or wherever else. Sometimes it's even your friends and family.
            </p>
            <p className="text-purple-200">
              I keep an imgur album of the best ones I come across. Sometimes for a little motivation, and sometimes just to look back and smile.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-yellow-300 mb-3">The $20 Million Lesson</h3>
            <p className="text-purple-100 mb-4">
              Here's one of my favorite ones from a few years back when I was making $4k per month, from what was my cleaning company at the time. This was the top comment on Hacker News.
            </p>
            <p className="text-lg font-bold text-yellow-300">
              That little company has since done $20 MILLION DOLLARS!
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-300 mb-3">The Internal Naysayer</h3>
            <p className="text-purple-100 mb-4">
              What intrigued me about this comment was the fact that it was so thoughtfully written. This wasn't a troll. This was someone that provided a seemingly well-reasoned analysis.
            </p>
            <p className="text-purple-200 mb-4">
              So why is this important? Because this is exactly what many of us do to ourselves.
            </p>
            <p className="text-lg font-bold text-yellow-300">
              We have a naysayer living permanently inside our heads!
            </p>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Shut That Cat Up!</h2>
            <p className="text-lg text-red-100 mb-6">
              The voice in our head typically skews negative. Not a bad thing on its face, but you'll analyze and over think and what-if every single idea until you convince yourself it won't work.
            </p>
            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <p className="text-xl font-bold text-yellow-300 mb-2">
                Over time this messes with your confidence
              </p>
              <p className="text-red-200">
                And you end up paralyzed.
              </p>
            </div>
            <div className="text-4xl font-bold text-yellow-300 mb-4">
              At some point we have to just say "Fuck It" and get to work!
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-center text-lg">
            Don't be afraid of failing, it's like the best and cheapest MBA you'll ever get.
          </p>
          <p className="text-center text-blue-200 mt-2 font-semibold">
            See ya'll tomorrow!
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day12')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 12
          </button>
          <button
            onClick={() => navigate('/day14')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 14 - Hiring Day 1
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day13;