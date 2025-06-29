import React, { useEffect } from 'react';
import { ArrowLeft, Video, Users, Play, Globe, Clock, Heart, DollarSign, Zap, AlertTriangle, Target, TrendingUp, Award, MessageCircle, Lightbulb } from 'lucide-react';

interface Day22Props {
  onBack: () => void;
}

function Day22({ onBack }: Day22Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoLibraryTopics = [
    {
      title: "Customer Service Philosophy",
      description: "How we think about customer service and our approach to client relationships",
      icon: Heart,
      color: "blue"
    },
    {
      title: "Welcome Video & Culture",
      description: "Introduction to company culture and what we stand for",
      icon: Users,
      color: "green"
    },
    {
      title: "Meeting the Team",
      description: "Get to know your colleagues and team structure",
      icon: Users,
      color: "purple"
    },
    {
      title: "What It's Like to Work for Us",
      description: "Day-to-day expectations and work environment",
      icon: Award,
      color: "orange"
    },
    {
      title: "What It Takes to Succeed",
      description: "Success criteria and performance expectations",
      icon: Target,
      color: "pink"
    },
    {
      title: "Next Steps & Software Setup",
      description: "Getting set up on our software and systems",
      icon: Play,
      color: "indigo"
    },
    {
      title: "How to Best Work with Us",
      description: "Communication protocols and best practices",
      icon: MessageCircle,
      color: "teal"
    },
    {
      title: "What We Expect at Each Job",
      description: "Detailed job requirements and quality standards",
      icon: CheckCircle,
      color: "red"
    }
  ];

  const remoteBusinessBenefits = [
    "Run business from anywhere in the world",
    "No geographical limitations on talent",
    "Lower overhead costs",
    "Scalable team management",
    "Consistent training delivery",
    "Professional onboarding process"
  ];

  const videoCreationTips = [
    "Each video takes like 5 minutes to make",
    "No video skills required",
    "Use simple tools like biteable.com",
    "Focus on content, not production quality",
    "Create once, use forever",
    "Build your library over time"
  ];

  const killerMessages = [
    {
      message: "How difficult is it to...?",
      problem: "Looking for easy shortcuts",
      reality: "Everything about business is difficult",
      response: "Difficult as hell. Hiring teams is difficult. Finding customers is difficult. Getting them to pay you is difficult. Business is one mega ton of difficult things to navigate.",
      icon: AlertTriangle,
      color: "red"
    },
    {
      message: "How many hours per week will it take...?",
      problem: "Wanting minimum effort for maximum results",
      reality: "All of them. All the hours!",
      response: "If I wasn't working on my business I was working at my job and thinking about working on my business, taking notes in meetings, texting teams in the bathroom.",
      icon: Clock,
      color: "orange"
    },
    {
      message: "Trying to find something I'm passionate about",
      problem: "Mixing passion with profit",
      reality: "I build businesses to make money",
      response: "Things you're passionate about are usually fun, and very few people are going to pay you to have fun. Make money doing something unsexy, then pursue passions.",
      icon: Heart,
      color: "purple"
    }
  ];

  const entrepreneurshipRealities = [
    "Easy is a predictable safe paycheck at a predictable safe job",
    "Becoming an entrepreneur is the road less traveled",
    "It's not less traveled because it's a cake walk",
    "Business is one mega ton of difficult things to navigate",
    "There is no easy way out, no shortcuts"
  ];

  const workLifeBalance = [
    {
      context: "Job",
      approach: "Work/life balance is important",
      description: "Maintain boundaries and personal time",
      icon: Users
    },
    {
      context: "Building Business",
      approach: "Balance goes out the window",
      description: "ONE YEAR with little to no balance in exchange for 60-70 years of freedom",
      icon: Zap
    }
  ];

  const timeCommitmentExample = [
    "Working at job thinking about business",
    "Taking notes in between meetings",
    "Texting teams in the bathroom",
    "Running to coffee shop after work",
    "Working until midnight on business",
    "Weekends dedicated to business growth"
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
              Day 22
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Leveraging Video - Remote Team Training & Entrepreneurship Reality
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Video className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 22 of 27</span>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed mb-4">
            If you're new this is a series where you watch me lay everything out from scratch in the way I built my local service business to <span className="text-yellow-300 font-bold">$20 million in sales</span>.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-xl font-bold text-yellow-300 text-center">
              Today we'll talk about setting expectations with our teams and doing so remotely.
            </p>
          </div>
        </div>

        {/* Remote Business Reality */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Running Businesses Remotely</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">How do we set expectations remotely?</h3>
            <p className="text-green-700 mb-4">
              Cause again, we run these businesses from anywhere.
            </p>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-semibold">
                My business is on the east coast and I've been living on the west coast for the last 5 years.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {remoteBusinessBenefits.map((benefit, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                <Globe className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-blue-800 font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Library Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Building Your Video Library</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">The Goal</h3>
            <p className="text-purple-700 mb-4">
              Create a selection of videos that you have as your video library. So that for each new hire, you can have folks go through the videos and watch them and get affiliated with how you work.
            </p>
            <div className="bg-purple-100 p-4 rounded-lg">
              <p className="text-purple-800 font-semibold text-center">
                Takes some time, but you do this stuff once and it pays off forever!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {videoLibraryTopics.map((topic, index) => (
              <div key={index} className={`bg-${topic.color}-50 p-6 rounded-lg hover:bg-${topic.color}-100 transition-colors duration-200`}>
                <div className="flex items-start">
                  <topic.icon className={`h-6 w-6 text-${topic.color}-600 mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`font-bold text-${topic.color}-800 mb-2`}>{topic.title}</h3>
                    <p className={`text-${topic.color}-700 text-sm`}>{topic.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Creation Tips */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Video Creation Made Simple</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">No Video Skills Required</h3>
            <p className="text-blue-700">
              Not only am I going to show you what I use to make videos (with no video skills) I'll also share my videos that you can take and tweak if you like!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {videoCreationTips.map((tip, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Play className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-800 font-medium text-sm">{tip}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-3">Recommended Tool</h3>
            <p className="text-orange-700 mb-4">
              I use these folks to make these videos: (No relationship with them, don't care what you use, just sharing what I use)
            </p>
            <div className="bg-orange-100 p-4 rounded-lg">
              <p className="text-orange-800 font-bold text-center">biteable.com</p>
            </div>
          </div>
        </div>

        {/* The Three Killer Messages */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the DMs and Messages I Get</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">Three Messages I'd Pay Not to Get Anymore</h3>
            <p className="text-red-700">
              So I get a lot of messages/emails/pms per day, and most are cool, and fun, and I chat with some awesome people. 
              But included in those is almost always one of these three that kill me softly each day.
            </p>
          </div>

          <div className="space-y-8">
            {killerMessages.map((msg, index) => (
              <div key={index} className={`bg-${msg.color}-50 border-l-4 border-${msg.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <msg.icon className={`h-8 w-8 text-${msg.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-${msg.color}-800 mb-3`}>
                      {index + 1}. "{msg.message}"
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-100 p-4 rounded-lg">
                        <h4 className="font-bold text-red-800 mb-2">❌ The Problem</h4>
                        <p className="text-red-700 text-sm">{msg.problem}</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">✅ The Reality</h4>
                        <p className="text-green-700 text-sm">{msg.reality}</p>
                      </div>
                    </div>
                    <div className={`bg-${msg.color}-100 p-4 rounded-lg`}>
                      <p className={`text-${msg.color}-800 italic`}>
                        "{msg.response}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Entrepreneurship Reality Check */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">The Entrepreneurship Reality</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                Starting and growing a business is a full time job.
              </p>
              <p className="text-lg text-red-100 mb-2">
                Oh you have a full time job already? Great.
              </p>
              <p className="text-2xl font-bold text-yellow-300">
                Now you have two.
              </p>
            </div>
            <div className="space-y-3">
              {entrepreneurshipRealities.map((reality, index) => (
                <p key={index} className="text-red-100">
                  {reality}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Work-Life Balance Reality */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Work-Life Balance Reality</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {workLifeBalance.map((item, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                index === 0 ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200'
              }`}>
                <div className="flex items-center mb-4">
                  <item.icon className={`h-8 w-8 ${
                    index === 0 ? 'text-blue-600' : 'text-orange-600'
                  } mr-3`} />
                  <h3 className={`text-xl font-bold ${
                    index === 0 ? 'text-blue-800' : 'text-orange-800'
                  }`}>
                    {item.context}
                  </h3>
                </div>
                <div className={`p-4 rounded-lg mb-4 ${
                  index === 0 ? 'bg-blue-100' : 'bg-orange-100'
                }`}>
                  <p className={`font-bold ${
                    index === 0 ? 'text-blue-800' : 'text-orange-800'
                  }`}>
                    {item.approach}
                  </p>
                </div>
                <p className={`text-sm ${
                  index === 0 ? 'text-blue-700' : 'text-orange-700'
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">My Philosophy</h3>
            <p className="text-purple-100 text-center mb-4">
              I'm all for "work/life balance when it comes to a job" but that goes out the window when it comes to building a business from zero.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 text-center">
                ONE YEAR with little to no balance in exchange for 60 or 70 years of freedom.
              </p>
              <p className="text-purple-200 text-center mt-2">
                I'd take that bet any day of the week.
              </p>
            </div>
          </div>
        </div>

        {/* Time Commitment Example */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What "All the Hours" Actually Looks Like</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">My Personal Experience</h3>
            <p className="text-yellow-700">
              If I wasn't working on my business I was working at my job (and thinking about working on my business, taking notes in between meetings, texting teams in the bathroom, and then getting off work and damn near running to get a good spot at the coffee shop so I could continue working.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {timeCommitmentExample.map((activity, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-800 font-medium text-sm">{activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Passion vs Money */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <DollarSign className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">I Build Businesses To Make Money</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <p className="text-lg text-gray-200 mb-4">
                Man listen, if you're looking for passion, you're talking to the wrong guy.
              </p>
              <div className="text-3xl font-bold text-yellow-300 mb-4 tracking-wider">
                I<br/>
                BUILD<br/>
                BUSINESSES<br/>
                TO<br/>
                MAKE<br/>
                MONEY
              </div>
              <p className="text-gray-300">
                There are extra benefits and there's a lot of good you can do in the world but money is what runs the entire ship.
              </p>
            </div>
            <div className="space-y-4 text-gray-200">
              <p>
                I then use that money to pursue my passions. I'm not trying to mix the two.
              </p>
              <p>
                I've always thought that "pursue a business doing something that you're passionate about" is the biggest crock of b.s ever invented.
              </p>
              <p className="text-lg font-semibold text-yellow-300">
                Things that you're passionate about are usually fun, and very few people are going to pay you to have fun.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Philosophy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Business Strategy</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">The Unsexy Money Strategy</h3>
            <p className="text-orange-700 mb-4">
              I'd rather make money doing something that nobody on the face of the earth wants to do because it's grimey and uncomfortable and unsexy.
            </p>
            <p className="text-orange-600">
              Make a ton of money there and then go do the passions.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Different Perspectives</h3>
            <p className="text-blue-700 mb-4">
              So that's it. And yeah there are a gazillion exceptions to everything I said here, and everyone sees this differently, but this is how I see it.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-bold text-center">DO YOU!!!!!</p>
            </div>
          </div>
        </div>

        {/* The One Year Prescription */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The One Year Prescription</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-green-100 mb-4">
                I really think the prescription is:
              </p>
              <p className="text-3xl font-bold text-yellow-300 mb-4">
                ONE YEAR with little to no balance
              </p>
              <p className="text-xl text-green-200">
                in exchange for 60 or 70 years of freedom.
              </p>
              <p className="text-lg text-green-100 mt-4">
                I'd take that bet any day of the week.
              </p>
            </div>
          </div>
        </div>

        {/* Honest Take */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Honest Take</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-purple-800 mb-3">Work-Life Balance Context</h3>
              <p className="text-purple-700">
                I'm all for "work/life balance when it comes to a job" but that goes out the window when it comes to building a business from zero.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">The Trade-Off</h3>
              <p className="text-green-700">
                I really think the prescription is ONE YEAR with little to no balance in exchange for 60 or 70 years of freedom.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Reference Link</h3>
              <p className="text-blue-700">
                So yeah, that's my honest take. And now that I've written this out, I can just forward people to this link!
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Catch Y'all Tomorrow</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-2">
                Everything so far has been building to this point.
              </p>
              <p className="text-orange-100">
                We're in the final stretch of the 27-day journey!
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
            Next: Day 23 - Launch Like a Pro
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day22;