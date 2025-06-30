import React, { useEffect } from 'react';
import { ArrowLeft, Monitor, Video, Users, ShoppingCart, Star, Eye, CreditCard, RefreshCw, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day4() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const strategies = [
    {
      number: 1,
      title: "Heavy on Images",
      description: "People don't read big paragraphs online. They skim. Keep everything to two or three lines of text and focus on images instead.",
      icon: Eye,
      color: "blue"
    },
    {
      number: 2,
      title: "Add a Video",
      description: "Having a video on your local site sets you apart from 99% of the competition. Videos are easy to make and raise trust levels.",
      icon: Video,
      color: "purple"
    },
    {
      number: 3,
      title: "Borrowed Credibility",
      description: "Get a mention on a website or listing on Yelp? Show that to customers. Simple stuff but often overlooked.",
      icon: Star,
      color: "yellow"
    },
    {
      number: 4,
      title: "Smash Objections",
      description: "Live in the customer's head. Think of things they find important and address potential objections head on.",
      icon: CheckCircle,
      color: "green"
    },
    {
      number: 5,
      title: "More Human Faces",
      description: "People identify with people. When was the last time you felt an emotional connection to gloves and a mop?",
      icon: Users,
      color: "pink"
    },
    {
      number: 6,
      title: "Above the Fold Checkout",
      description: "Your homepage is an iceberg. The only part you can guarantee people see is above the fold. Get them into the funnel there.",
      icon: ShoppingCart,
      color: "orange"
    }
  ];

  const additionalStrategies = [
    {
      number: 7,
      title: "One Page Checkout (As Short As Possible)",
      description: "Asked 9 questions when it could be 5? You just cut your conversion rate. Get basics first, ask more after conversion.",
      icon: CreditCard
    },
    {
      number: 8,
      title: "Solid Design",
      description: "Professional, cohesive website with good copy and simple checkout process. Design matters for conversions.",
      icon: Monitor
    },
    {
      number: 9,
      title: "Upsells",
      description: "Look to increase average transaction size. Upsell at checkout to maximize revenue per customer.",
      icon: TrendingUp
    },
    {
      number: 10,
      title: "Cart Abandonment",
      description: "Someone starts booking but doesn't finish? Grab their email and send automated follow-up sequences.",
      icon: RefreshCw
    },
    {
      number: 11,
      title: "Recurring Revenue",
      description: "Even for one-off services, upsell monthly packages. Bigger discounts for more frequent commitments.",
      icon: RefreshCw
    }
  ];

  const designComparison = [
    {
      type: "Bad Design",
      characteristics: [
        "Cluttered layout",
        "Poor color choices", 
        "Hard to read fonts",
        "No clear call-to-action",
        "Unprofessional appearance"
      ],
      result: "Low conversion rates"
    },
    {
      type: "Good Design",
      characteristics: [
        "Clean, professional layout",
        "Cohesive color scheme",
        "Easy to read typography",
        "Clear call-to-action buttons",
        "Trust-building elements"
      ],
      result: "High conversion rates"
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
              Day 4
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Getting A Website Theme Designed to Win
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Monitor className="h-8 w-8 text-orange-400 mr-3" />
            <span className="text-xl font-bold">Day 4 of 27</span>
          </div>
          <p className="text-lg text-indigo-100 leading-relaxed mb-4">
            Before we choose a theme, I'm going to explain why our websites look the way they do. 
            I'll share the exact website strategies we employ to make this stuff work.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-xl font-bold text-yellow-300 text-center">
              11 Strategies to be precise... 🎯
            </p>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg mb-8">
          <div className="flex items-center mb-3">
            <TrendingUp className="h-6 w-6 text-green-200 mr-2" />
            <h3 className="text-lg font-bold">Another Success Story</h3>
          </div>
          <p className="text-green-100">
            As usual, every day I'll introduce you to someone new that pulled this off the last time I did this case study. 
            Here's my dude hitting <span className="text-yellow-300 font-bold">$100k in 9 months</span>!
          </p>
        </div>

        {/* Main Strategies */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 11 Website Strategies We Use Every Time</h2>
          
          <p className="text-gray-700 mb-8">
            For some of you these are going to seem like no-brainers and for some of you, you might get some AHA moments. 
            Really depends on your level of internet marketing expertise.
          </p>

          <div className="grid gap-6">
            {strategies.map((strategy) => (
              <div key={strategy.number} className={`bg-${strategy.color}-50 border-l-4 border-${strategy.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <div className={`bg-${strategy.color}-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0`}>
                    {strategy.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <strategy.icon className={`h-6 w-6 text-${strategy.color}-600 mr-2`} />
                      <h3 className={`text-lg font-bold text-${strategy.color}-800`}>{strategy.title}</h3>
                    </div>
                    <p className={`text-${strategy.color}-700`}>{strategy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Strategies */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategies 7-11: Advanced Conversion Tactics</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {additionalStrategies.map((strategy) => (
              <div key={strategy.number} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-start">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
                    {strategy.number}
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <strategy.icon className="h-5 w-5 text-gray-600 mr-2" />
                      <h3 className="font-bold text-gray-800">{strategy.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{strategy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Comparison */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Power of Good Design</h2>
          
          <p className="text-gray-700 mb-6">
            Same service. More sales. The second one might be a much better service, at a better price, 
            but unfortunately probably won't convert as well as the first.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {designComparison.map((design, index) => (
              <div key={index} className={`p-6 rounded-lg ${index === 0 ? 'bg-red-50 border-2 border-red-200' : 'bg-green-50 border-2 border-green-200'}`}>
                <h3 className={`text-lg font-bold mb-4 ${index === 0 ? 'text-red-800' : 'text-green-800'}`}>
                  {index === 0 ? '❌' : '✅'} {design.type}
                </h3>
                <ul className={`space-y-2 mb-4 ${index === 0 ? 'text-red-700' : 'text-green-700'}`}>
                  {design.characteristics.map((char, charIndex) => (
                    <li key={charIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${index === 0 ? 'bg-red-400' : 'bg-green-400'}`}></div>
                      {char}
                    </li>
                  ))}
                </ul>
                <div className={`font-bold text-center p-3 rounded-lg ${index === 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  Result: {design.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-orange-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Key Insight</h2>
            <p className="text-lg text-orange-100 mb-4">
              Just throwing up a website willy-nilly and running ads isn't the path to winning.
            </p>
            <p className="text-xl font-bold text-yellow-300">
              Winning is a culmination of a bunch of tiny elements that when added together actually sells your service.
            </p>
          </div>
        </div>

        {/* Tools & Resources */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools & Resources</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Recommended Solution</h3>
              <p className="text-blue-700 mb-3">
                The website themes we use already incorporate all these elements. I don't reinvent any wheels.
              </p>
              <p className="text-blue-600">
                I use themes at <strong>convertlabs.io</strong> (not my company but I know the founder) - 
                that's the booking form and onboarding funnel and everything else I shared here.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Alternative Options</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Can you hack a website together yourself? <strong>Yep!</strong></p>
                <p>• Can you find a theme at ThemeForest and tweak it? <strong>Sure!</strong></p>
                <p>• Use what works for you.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">Real Example</h3>
              <p className="text-green-700">
                Here's one of convertlabs themes in action - a real 7-figure business: 
                <strong> oakbayclean.com</strong>
              </p>
              <p className="text-green-600 text-sm mt-2">
                You'll see all the elements I described here laid out in practice.
              </p>
            </div>
          </div>
        </div>

        {/* Mindset Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6">Important Mindset Shift</h2>
          
          <div className="space-y-4 text-purple-100">
            <p>
              Many of you dropped <strong className="text-white">$50K-$150K on college</strong> without blinking an eyelid 
              (more with opportunity cost), and came out not having the first idea how to actually earn a living 
              that is not dependent on having a boss.
            </p>
            <p>
              <strong className="text-yellow-300">And I know this because... THAT WAS ME!</strong>
            </p>
            <p>
              But somehow the idea of a few dollars to start your own business with a chance to fully control 
              your lives instills a fear of failure that ends up being crippling.
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg mt-6">
            <p className="text-center text-lg font-semibold">
              Hopefully by seeing it laid out in real time you'll see that scary things can just be 
              tackled in a systematic step-by-step manner.
            </p>
          </div>
        </div>

        {/* Daily Reminder */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Reminder</h3>
          <div className="space-y-3 text-gray-700">
            <p>
              You don't have to build a remote service business - maybe just read along and see that 
              launching a business is just what happens as the result of small daily steps.
            </p>
            <p className="text-center text-xl font-bold text-blue-600">
              One day at a time. 📅
            </p>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-center text-lg">
            That's what you'll see play out this month! Tomorrow we'll continue building on these foundations.
          </p>
          <p className="text-center text-blue-200 mt-2 font-semibold">
            See you folks tomorrow!
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day3')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 3
          </button>
          <button
            onClick={() => navigate('/day5')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 5 - Logo and Focus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day4;