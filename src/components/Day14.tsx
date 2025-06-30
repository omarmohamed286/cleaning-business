import React, { useEffect } from 'react';
import { ArrowLeft, Users, Search, Handshake, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Target, Award, Globe, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day14() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceProviderStrengths = [
    "Masters at their jobs",
    "Understand their work deeply",
    "Friendly and open with clients",
    "Do a great job with quality",
    "Know how to instill trust face-to-face",
    "Provide excellent service delivery"
  ];

  const serviceProviderWeaknesses = [
    "Marketing",
    "SEO", 
    "AdWords",
    "Branding",
    "Web Strategy",
    "Web Analytics",
    "Conversion Optimization",
    "Copywriting"
  ];

  const hiringStrategy = [
    {
      step: 1,
      title: "Start Within Your Inner Circle",
      description: "Your home cleaner, lawn care guy, or other service providers you already know",
      icon: Users,
      color: "blue"
    },
    {
      step: 2,
      title: "Ask for Referrals",
      description: "When you find your first person, ask if they know anyone else",
      icon: Handshake,
      color: "green"
    },
    {
      step: 3,
      title: "General Job Postings",
      description: "If inner circle doesn't work, move to public job boards",
      icon: Search,
      color: "purple"
    }
  ];

  const jobPostingPlatforms = [
    { platform: "Friends and family", description: "Personal network referrals" },
    { platform: "Facebook city groups", description: "Local community groups" },
    { platform: "Facebook marketplace", description: "Local service listings" },
    { platform: "Indeed", description: "Professional job board" },
    { platform: "Care.com", description: "Service provider platform" },
    { platform: "Craigslist gigs section", description: "Local gig economy" }
  ];

  const positioningExamples = [
    {
      type: "Wrong Approach",
      example: "Hi, I'm a new business and I'm just wondering if you might be interested in working with us...",
      result: "Sounds desperate and unprofessional",
      color: "red"
    },
    {
      type: "Right Approach", 
      example: "Hi, my name is Rohan, founder of Dope Meals, check out our website here: dopemealsdotcom. We've personally ordered your sirloin steak and let me just say...'amazeballs!' What are your best rates for sirloin if we were to start with a small order of 50 pieces, with a view to building a long-term relationship?",
      result: "Professional, confident, partnership-focused",
      color: "green"
    }
  ];

  const winWinBenefits = [
    {
      title: "For Service Providers",
      benefits: [
        "Focus on what they do best",
        "No marketing headaches",
        "Steady stream of customers",
        "Professional support system",
        "Business growth without business skills"
      ],
      icon: Award,
      color: "blue"
    },
    {
      title: "For You",
      benefits: [
        "Expert service delivery",
        "Customer trust and confidence",
        "Quality work without learning trade",
        "Scalable service capacity",
        "Focus on business operations"
      ],
      icon: TrendingUp,
      color: "green"
    }
  ];

  const screeningProcess = [
    { step: "Interview", method: "Zoom (some folks do in person)", icon: MessageCircle },
    { step: "Background check", method: "Standard verification process", icon: CheckCircle },
    { step: "Go!", method: "Start the partnership", icon: Target }
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
              Day 14
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Finding Your First Teams - Hiring Day 1
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
            <Users className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 14 of 27</span>
          </div>
          <p className="text-lg text-purple-100 leading-relaxed mb-4">
            So this step is often scary for folks but like everything else we'll show you how we solve it in a systematic way.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-xl font-bold text-yellow-300 text-center">
              A lot of things in business seemed impossible until I realized that 70 gazillion other people had already done it!
            </p>
            <p className="text-purple-200 text-center mt-2">
              So what am I? Chopped liver?
            </p>
          </div>
        </div>

        {/* The Perfect Partnership */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Perfect Partnership Opportunity</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">What We Know</h3>
            <p className="text-blue-700">
              In every industry, there are tons of folks that are masters at their jobs. 
              These folks will become your ideal partners in providing the actual service to customers. <strong>Not you.</strong>
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">I repeat, not you.</h3>
            <p className="text-orange-700 mb-4">
              Again I've done over <strong>100,000 jobs</strong> and have never met a client face to face.
            </p>
            <div className="text-center">
              <span className="text-2xl font-bold text-orange-800">No need to.</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-4">✅ What They're Great At</h3>
              <div className="space-y-2">
                {serviceProviderStrengths.map((strength, index) => (
                  <div key={index} className="flex items-center text-green-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-red-800 mb-4">❌ What They're Not Great At</h3>
              <div className="space-y-2">
                {serviceProviderWeaknesses.map((weakness, index) => (
                  <div key={index} className="flex items-center text-red-700">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{weakness}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">The Perfect Situation</h3>
            <p className="text-green-100 text-center mb-4">
              And it's not me being harsh. It's just the facts. And these are facts that open up a world of opportunities for us.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 text-center">
                It's the perfect situation to set up an arrangement where each person wins!
              </p>
            </div>
          </div>
        </div>

        {/* Win-Win Benefits */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Everyone Wins</h2>
          
          <p className="text-gray-700 mb-6">
            We find great service providers, tell them our story, and take a bunch of the burden off them while they get to focus on what they do best:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {winWinBenefits.map((benefit, index) => (
              <div key={index} className={`bg-${benefit.color}-50 p-6 rounded-lg`}>
                <div className="flex items-center mb-4">
                  <benefit.icon className={`h-8 w-8 text-${benefit.color}-600 mr-3`} />
                  <h3 className={`text-xl font-bold text-${benefit.color}-800`}>{benefit.title}</h3>
                </div>
                <div className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-${benefit.color}-400 rounded-full mr-3`}></div>
                      <span className={`text-${benefit.color}-700 text-sm`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-2 text-center">Providing Great Service to Customers</h3>
            <p className="text-purple-700 text-center">
              While we handle all the business complexities they don't want to deal with.
            </p>
          </div>
        </div>

        {/* Hiring Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 3-Step Hiring Strategy</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Start Close to Home</h3>
            <p className="text-blue-700">
              So because the first team is important I like to start within my inner circle.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {hiringStrategy.map((step) => (
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

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-3">Real Examples</h3>
            <div className="space-y-2 text-green-700">
              <p>• My first cleaner for my last company was my home cleaner at the time.</p>
              <p>• My first lawncare guy was the guy that cut my lawn.</p>
            </div>
          </div>
        </div>

        {/* Job Posting Platforms */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Post Jobs</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">If Inner Circle Doesn't Work</h3>
            <p className="text-yellow-700">
              And if you don't know anyone that knows someone that provides the service you need (which I find hard to believe), then we move to general job postings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {jobPostingPlatforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <h4 className="font-bold text-gray-800 mb-1">{platform.platform}</h4>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Sample Job Posting</h3>
            <p className="text-blue-700">
              That's something you can post on Craigslist gigs and have people apply. 
              Keep it simple and professional.
            </p>
          </div>
        </div>

        {/* Positioning Yourself */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How You Position Yourself</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">⚠️ Where A Lot of Folks Fall Apart</h3>
            <p className="text-red-700">
              I know this is where a lot of folks fall apart, so let me say this...
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">The Key to Success</h3>
            <p className="text-orange-700 mb-4">
              If you do things in order: i.e get a nice looking website up, things will look official and people will apply to work with you, but are less likely to do so if you come across like you don't belong.
            </p>
          </div>

          <div className="space-y-6">
            {positioningExamples.map((example, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                example.color === 'red' ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
              }`}>
                <h3 className={`text-lg font-bold mb-4 ${
                  example.color === 'red' ? 'text-red-800' : 'text-green-800'
                }`}>
                  {example.color === 'red' ? '❌' : '✅'} {example.type}
                </h3>
                <div className={`p-4 rounded-lg border-l-4 mb-4 ${
                  example.color === 'red' ? 'bg-white border-red-400' : 'bg-white border-green-400'
                }`}>
                  <p className={`italic ${
                    example.color === 'red' ? 'text-red-700' : 'text-green-700'
                  }`}>
                    "{example.example}"
                  </p>
                </div>
                <div className={`p-3 rounded-lg text-center ${
                  example.color === 'red' ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  <span className={`font-bold ${
                    example.color === 'red' ? 'text-red-800' : 'text-green-800'
                  }`}>
                    Result: {example.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Mindset */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Core Mindset Shift</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-3xl font-bold text-yellow-300 mb-4">
                We are who we want to be TODAY!
              </p>
              <p className="text-blue-100">
                No begging, no "I'm a new business and I'm just wondering..." Nah son.
              </p>
            </div>
            <p className="text-lg text-purple-100">
              Once we have that dope homepage design we're then able to navigate and negotiate like we deserve a seat at the table.
            </p>
          </div>
        </div>

        {/* Partnership Approach */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Partnership Approach</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Equal Position</h3>
            <p className="text-green-700 mb-4">
              Apply this same thing to hiring. You're building partnerships that offer a win-win where each team brings skills that the other person doesn't have.
            </p>
            <p className="text-green-600">
              So no begging and no negotiating from a position of weakness. There's no need.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">What You Bring to the Table</h3>
            <p className="text-blue-700 mb-4">
              With all you bring to the table you're in an equal position and you don't have to move with timidity.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-center">
                <Globe className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                <span className="text-blue-800 font-medium text-sm">Professional Website</span>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg text-center">
                <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                <span className="text-blue-800 font-medium text-sm">Marketing Expertise</span>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg text-center">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                <span className="text-blue-800 font-medium text-sm">Customer Pipeline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screening Process */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Screening Process</h2>
          
          <p className="text-gray-700 mb-6">
            It's your job from there to conduct screening:
          </p>

          <div className="space-y-4">
            {screeningProcess.map((step, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <step.icon className="h-6 w-6 text-blue-600 mr-4" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{step.step}</h3>
                  <p className="text-gray-600 text-sm">{step.method}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigate Like You Belong */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Target className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Navigate Like You Belong</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                So this is more of a "navigate like you belong" rather than a how-to on hiring
              </p>
              <p className="text-orange-100">
                I'll go through more hiring details on Hiring Day 2 tomorrow!
              </p>
            </div>
          </div>
        </div>

        {/* Tomorrow Preview */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Tomorrow</h3>
            <p className="text-gray-700">
              More detailed hiring processes, interview techniques, and team management strategies.
            </p>
            <p className="text-blue-600 font-semibold mt-2">
              See you then!!
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day13')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 13
          </button>
          <button
            onClick={() => navigate('/day15')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 15 - Hiring Day 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day14;