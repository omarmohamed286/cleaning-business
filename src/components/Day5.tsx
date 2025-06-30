import React, { useEffect } from 'react';
import { ArrowLeft, Palette, Zap, DollarSign, Clock, Target, CheckCircle, AlertTriangle, Lightbulb, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day5() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const costBreakdown = [
    { item: "Domain", cost: "~$14" },
    { item: "Website theme, hosting & software", cost: "$60 - $200" },
    { item: "Total so far", cost: "Maybe $200", highlight: true }
  ];

  const dontMatterList = [
    "Fancy Logo",
    "Fancy packaging material", 
    "Fancy email design",
    "Fancy slogans",
    "Fancy color gradients",
    "Fancy anything like this..."
  ];

  const matterList = [
    "Quality Home Page Design",
    "Good Checkout page design",
    "Simplicity of checkout flow",
    "Security markers: https etc.",
    "Showing people themselves",
    "Testimonials etc."
  ];

  const mindsetShifts = [
    {
      title: "Build what you can afford",
      description: "Stop searching for resources to build a business. Instead search for businesses that match your resources.",
      icon: Target
    },
    {
      title: "Start where you are",
      description: "You will NEVER have enough time, money, knowledge, support, or skill. Might as well get started now.",
      icon: Zap
    },
    {
      title: "Focus on what's closest to the money",
      description: "Re-allocate resources from fancy stuff to things that get someone to pull out their credit card.",
      icon: DollarSign
    }
  ];

  const neverEnoughList = [
    "Enough time",
    "Enough money", 
    "Enough knowledge",
    "Enough support",
    "Enough skill"
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
              Day 5
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Logo and Focus - A Quick One on Getting Our Logo
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
            <Palette className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 5 of 27</span>
          </div>
          <p className="text-lg text-orange-100 leading-relaxed">
            Most people spend days (sometimes months) agonizing over a logo, but for me: 
            <span className="text-yellow-300 font-bold"> If I can't get it done in a few minutes, I don't want it.</span>
          </p>
        </div>

        {/* Quick Recap */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Recap - Last 4 Days</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-center bg-green-50 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-800">Checked mindset issues</span>
              </div>
              <div className="flex items-center bg-green-50 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-800">Settled on industry choice</span>
              </div>
              <div className="flex items-center bg-green-50 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-800">Figured out domain name</span>
              </div>
              <div className="flex items-center bg-green-50 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-800">Started thinking about website theme</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Potential Costs So Far</h3>
              <div className="space-y-2">
                {costBreakdown.map((item, index) => (
                  <div key={index} className={`flex justify-between p-2 rounded ${item.highlight ? 'bg-blue-200 font-bold text-blue-900' : 'text-blue-700'}`}>
                    <span>{item.item}:</span>
                    <span>{item.cost}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-blue-600 font-medium">
                That's a month of Starbucks for a lot of people ☕
              </div>
            </div>
          </div>
        </div>

        {/* Logo Philosophy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo Philosophy</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Remember This</h3>
            <p className="text-yellow-700 mb-4">
              A successful business isn't tied to...
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="flex items-center text-red-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  The colors you like
                </div>
                <div className="flex items-center text-red-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  The logo you like
                </div>
                <div className="flex items-center text-red-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  The vibe you like
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-red-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  The branding you like
                </div>
                <div className="flex items-center text-red-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Etc.
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-xl font-bold text-center text-yellow-800">
                It begins and ends with what YOUR CUSTOMERS like.
              </p>
            </div>
          </div>
        </div>

        {/* Business Success Insight */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold">Key Business Insight</h2>
          </div>
          <p className="text-lg text-purple-100 mb-4">
            I feel like half the money you make in businesses is directly tied to what business you decide to build.
          </p>
          <div className="bg-white/10 p-4 rounded-lg mb-4">
            <p className="text-xl font-bold text-yellow-300 text-center">
              The decision is that important.
            </p>
          </div>
          <p className="text-purple-100 mb-4">
            Like real estate, most of the money is made on the purchase.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-red-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-red-200 mb-2">❌ Wrong Choice</h4>
              <p className="text-red-100 text-sm">1 year working on a new business that didn't make a penny</p>
            </div>
            <div className="bg-green-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-green-200 mb-2">✅ Right Choice</h4>
              <p className="text-green-100 text-sm">6 months working on a business that did over $200,000</p>
            </div>
          </div>
          <p className="text-center mt-4 text-purple-200 italic">
            Same person, same skills, same effort.
          </p>
        </div>

        {/* Start Where You Are */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Where You Are</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <p className="text-orange-700 text-lg mb-4">
              If you take anything from this: <strong>start where you are</strong>
            </p>
            <p className="text-orange-600 mb-4">You will NEVER be in a space where you have:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {neverEnoughList.map((item, index) => (
                <div key={index} className="flex items-center text-orange-700">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-orange-100 rounded-lg">
              <p className="text-xl font-bold text-center text-orange-800">
                So might as well get started now.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mindsetShifts.map((shift, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <shift.icon className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-blue-800 mb-2">{shift.title}</h3>
                <p className="text-blue-700 text-sm">{shift.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Lists Framework */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Two Lists Framework</h2>
          
          <p className="text-gray-700 mb-6">
            When I knew I had found somewhere that I could start with almost no money and fill the resource gap with hustle, 
            here's how I focused...
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4">❌ LIST 1: DON'T MATTER</h3>
              <div className="space-y-2">
                {dontMatterList.map((item, index) => (
                  <div key={index} className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ LIST 2: MATTER A SHIT TON!</h3>
              <div className="space-y-2">
                {matterList.map((item, index) => (
                  <div key={index} className="flex items-center text-green-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">The Goal</h3>
            <p className="text-lg">
              Re-allocate resources from list one to list two. <strong>RELENTLESSLY!</strong>
            </p>
            <p className="text-yellow-100 mt-2">
              Focus on the things that will get someone to pull out their credit card and make a purchase.
            </p>
            <div className="text-center mt-4">
              <span className="text-2xl font-bold text-yellow-200">
                {">>> The things that are closest to the money. <<<"}
              </span>
            </div>
          </div>
        </div>

        {/* Favorite Logo Example */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Favorite Logo on the Internet</h2>
          
          <div className="bg-gray-100 p-8 rounded-lg text-center mb-6">
            <div className="text-6xl font-bold text-gray-800 mb-4">
              Stripe.
            </div>
            <p className="text-gray-600">Simple. Clean. Effective.</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Why This Logo Works</h3>
            <div className="grid md:grid-cols-2 gap-4 text-blue-700">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Wastes no time</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Wastes no space</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Does not care about your feelings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Recently sold for ~$300 million</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-center text-blue-800 font-semibold">
                These cats chose a font, put a period, and said "f*ck it, let's build a business!"
              </p>
            </div>
          </div>

          <div className="mt-6 bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-2">And That's How I Roll As Well</h3>
            <p className="text-purple-700">
              Simple. Horizontal. Type out the word and add a little dash of pizzazz if I'm in a fancy mood. But that's it.
            </p>
          </div>
        </div>

        {/* Logo Tool */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where I Do My Logos</h2>
          
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg mb-6">
            <div className="flex items-center mb-4">
              <ExternalLink className="h-6 w-6 text-green-200 mr-2" />
              <h3 className="text-xl font-bold">looka.com</h3>
            </div>
            <p className="text-green-100 mb-4">No affiliation with these people, just sharing what I use along the way.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">How It Works:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm">1</div>
                <span className="text-gray-700">Type out the name of the company</span>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm">2</div>
                <span className="text-gray-700">Choose a vibe from other logos they present</span>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm">3</div>
                <span className="text-gray-700">Choose a color</span>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm">4</div>
                <span className="text-gray-700">Choose a little icon if you want</span>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm">5</div>
                <span className="text-gray-700">They present you with a ton of options</span>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm">6</div>
                <span className="text-gray-700 font-semibold">You choose one and bounce!</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-2">The Goal</h3>
            <p className="text-orange-700 text-center text-xl">
              Knock a logo out in <strong>10 minutes</strong>, not <strong>10 days!</strong>
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 text-center">
            Again I don't care what you use, no affiliation with these people, I'm just sharing what I use along the way. 
            Got something better? Cool. Can do it yourself? Cool.
          </p>
        </div>

        {/* Closing */}
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-center text-lg">
            That's about it for today. Nothing too crazy.
          </p>
          <p className="text-center text-blue-200 mt-2 font-semibold">
            Tomorrow things start to warm up a bit. See you then!
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day4')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 4
          </button>
          <button
            onClick={() => navigate('/day6')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 6 - Copywriting
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day5;