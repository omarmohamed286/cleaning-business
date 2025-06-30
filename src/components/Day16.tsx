import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Calendar, FileText, ExternalLink, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Clock, Award, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day16() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const insuranceFeatures = [
    {
      feature: "Insurance by the day, week, or month",
      description: "Flexible coverage periods to match your business needs",
      icon: Calendar,
      color: "blue"
    },
    {
      feature: "Contractor friendly",
      description: "Designed specifically for service-based businesses",
      icon: Shield,
      color: "green"
    },
    {
      feature: "Instant insurance certificates",
      description: "Get proof of insurance immediately for bids and contracts",
      icon: FileText,
      color: "purple"
    }
  ];

  const importantRules = [
    {
      rule: "#53",
      description: "Use whatever you want, doesn't matter to me",
      icon: Target
    },
    {
      rule: "#78", 
      description: "Speak to an expert, this is not my area of expertise",
      icon: AlertTriangle
    }
  ];

  const progressReflection = [
    "One of the biggest takeaways from this is how much you can do by just waking up each day and methodically working on solving one thing",
    "Then waking up the next day, and solving something else",
    "By the end of 30 days you're ahead of like 98% of the people on the planet",
    "No matter how big, no matter how onerous, just a slow day-by-day solution-based approach and you can't not win if you try"
  ];

  const negativeVoiceWarnings = [
    "If you listen to that voice in your head you're going to be convinced that there's something special about you that makes it so you can't do it",
    "Even if I show you 499 other people that have done it, you're going to be like, 'Well 500 people MUST be the saturation point!'",
    "Group A: 'Bro, I would like to do this, but...<insert naysayer conversation here>.'",
    "Group B: 'Bro, just hit $150k, thanks so much...'"
  ];

  const messageGroups = [
    {
      group: "Group A",
      message: "Bro, I would like to do this, but...",
      description: "Insert naysayer conversation here",
      result: "Still making excuses a year later",
      color: "red"
    },
    {
      group: "Group B", 
      message: "Bro, just hit $150k, thanks so much...",
      description: "Took action and executed",
      result: "Success stories after one year",
      color: "green"
    }
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
              Day 16
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Insurance - Keep It On Your Radar
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 16 of 27</span>
          </div>
          <p className="text-lg text-orange-100 leading-relaxed mb-4">
            Okay let's get to it! Today we chat about insurance. I'm not an expert, so just showing what we use.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-xl font-bold text-yellow-300 text-center">
              Use whatever you want!
            </p>
          </div>
        </div>

        {/* Progress Reflection */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Making Good Progress</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Massive Respect!</h3>
            <p className="text-green-700">
              So we're making some good progress and some of you have actually gone through this and done the work, massive respect!
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {progressReflection.map((point, index) => (
              <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-0.5 flex-shrink-0 text-sm">
                  {index + 1}
                </div>
                <span className="text-blue-800 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">The Power of Daily Progress</h3>
            <p className="text-blue-100 text-center mb-4">
              One of the biggest takeaways from this is how much you can do by just waking up each day and methodically working on solving one thing.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 text-center">
                By the end of 30 days you're ahead of like 98% of the people on the planet.
              </p>
            </div>
          </div>
        </div>

        {/* Mindset Warning */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center mb-6">
            <AlertTriangle className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">REMINDER: Silence That Negative Voice</h2>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg mb-6">
            <p className="text-lg text-red-100 mb-4">
              As you're going through this (or anything else challenging in life) you have to silence that negative voice in your head.
            </p>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-300 mb-2">
                Silence that cat or it's going to find a way to silence you!
              </p>
              <p className="text-xl font-bold text-red-200">
                It's either you or me buddy!
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {negativeVoiceWarnings.map((warning, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg">
                <p className="text-red-100">{warning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Groups */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Two Groups I Get Messages From</h2>
          
          <p className="text-gray-700 mb-6">
            And I know this because I get the messages. Been sharing this stuff for years and every time I do I get a shit ton of messages from two groups:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {messageGroups.map((group, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                group.color === 'red' ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  group.color === 'red' ? 'text-red-800' : 'text-green-800'
                }`}>
                  {group.color === 'red' ? '❌' : '✅'} {group.group}
                </h3>
                <div className={`p-4 rounded-lg border-l-4 mb-4 ${
                  group.color === 'red' ? 'bg-white border-red-400' : 'bg-white border-green-400'
                }`}>
                  <p className={`font-bold ${
                    group.color === 'red' ? 'text-red-700' : 'text-green-700'
                  }`}>
                    "{group.message}"
                  </p>
                  <p className={`text-sm mt-2 ${
                    group.color === 'red' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {group.description}
                  </p>
                </div>
                <div className={`p-3 rounded-lg text-center ${
                  group.color === 'red' ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  <span className={`font-bold ${
                    group.color === 'red' ? 'text-red-800' : 'text-green-800'
                  }`}>
                    Result: {group.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">The Pattern</h3>
            <p className="text-yellow-700">
              Not that this is for everybody, but when I see the same folks make the same excuses and other people just march through those hurdles and crush it I'm just taken aback.
            </p>
          </div>
        </div>

        {/* Core Message */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Don't Let YOU Hold YOU Back!</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                Either way I say that to say, don't let YOU hold YOU back!
              </p>
              <p className="text-purple-100">
                The biggest obstacle between you and success is often the voice in your own head.
              </p>
            </div>
          </div>
        </div>

        {/* Insurance Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Insurance - Right to It</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Recommended Solution</h3>
            <p className="text-blue-700 mb-4">
              Company you could use? These folks:
            </p>
            <div className="flex items-center">
              <ExternalLink className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-bold">thimble.com/industry/clean...</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Thimble?</h3>
            <div className="space-y-4">
              {insuranceFeatures.map((feature, index) => (
                <div key={index} className={`bg-${feature.color}-50 p-6 rounded-lg`}>
                  <div className="flex items-start">
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600 mr-3 mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className={`font-bold text-${feature.color}-800 mb-2`}>{feature.feature}</h4>
                      <p className={`text-${feature.color}-700 text-sm`}>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Rules */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Rules Apply</h2>
          
          <p className="text-gray-700 mb-6">
            Note: This is one of those things where rule #53 and #78 apply.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {importantRules.map((rule, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <rule.icon className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-bold text-orange-800">Rule {rule.rule}</h3>
                </div>
                <p className="text-orange-700">{rule.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">Disclaimer</h3>
            <p className="text-red-700 mb-4">
              No I don't know if it's in your state, or if it applies to your situation etc. etc.
            </p>
            <p className="text-red-600">
              Luckily, just takes like 2 secs to reach out to those folks, ask questions and see what's best.
            </p>
          </div>
        </div>

        {/* Instant Proof of Insurance */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Instant Proof of Insurance</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Commercial Bidding Advantage</h3>
            <p className="text-green-700 mb-4">
              By the way the instant proof of insurance thingy they have is a win. When you start bidding on commercial properties you may have to provide this.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              <h4 className="font-bold text-blue-800">Certificate of Insurance</h4>
            </div>
            <p className="text-blue-700 text-sm">
              Instant generation of insurance certificates for commercial bids and contracts.
            </p>
          </div>
        </div>

        {/* Goal and Approach */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Goal and Approach</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Keep It On Your Radar</h3>
            <p className="text-purple-700 mb-4">
              Goal here is to keep this on your radar and share an easy solution to this.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Stay In My Lane</h3>
            <p className="text-yellow-700 mb-4">
              I try to not to stray into areas of expertise that I'm not a pro in, especially when you could actually get top notch advice with a quick phone call or live chat with a pro.
            </p>
            <p className="text-yellow-600">
              You can solve this just like the gazillion other service businesses in your city solved it. :-)
            </p>
          </div>
        </div>

        {/* Simple Solution */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Simple Solution</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-green-100 mb-4">
                You can solve this just like the gazillion other service businesses in your city solved it.
              </p>
              <p className="text-xl font-bold text-yellow-300">
                Just takes like 2 secs to reach out and ask questions!
              </p>
            </div>
          </div>
        </div>

        {/* Closing Thoughts */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Closing Thoughts</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Hope This Share Was Helpful</h3>
            <p className="text-blue-700">
              That's it for me for today. I want to just keep this on your radar, but I try to not to stray into areas of expertise that I'm not a pro in.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-2">Professional Advice</h3>
            <p className="text-green-700">
              Especially when you could actually get top notch advice with a quick phone call or live chat with a pro.
            </p>
          </div>
        </div>

        {/* Final Stretch */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">We're In the Final Stretch</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                We're in the final stretch, see you tomorrow!
              </p>
              <p className="text-orange-100">
                Hope this share was still helpful tho.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day15')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 15
          </button>
          <button
            onClick={() => navigate('/day17')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 17 - Multiple Customer Contacts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day16;