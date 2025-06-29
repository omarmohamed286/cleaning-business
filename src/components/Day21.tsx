import React, { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, DollarSign, Users, Target, TrendingUp, Clock, Lightbulb, Zap, CheckCircle, XCircle, Award, ShoppingCart, Eye, Heart } from 'lucide-react';

interface Day21Props {
  onBack: () => void;
}

function Day21({ onBack }: Day21Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const entrepreneurshipFailures = [
    {
      number: 1,
      title: "I'll Launch and Figure Out Monetization Later",
      problem: "Building without a clear path to revenue",
      solution: "Monetization first or we don't lift a finger",
      description: "Don't build until you know exactly how you will monetize and there is a clear path to get there in a quantifiable time.",
      example: "We design checkout forms and sales funnels way before we worry about a logo.",
      icon: DollarSign,
      color: "red"
    },
    {
      number: 2,
      title: "Hiring and Partnering with Friends",
      problem: "Choosing relationships over skills",
      solution: "Work with the best people with exact skills you need",
      description: "The chance that one of the best people in the world is your friend seems pretty slim.",
      example: "I work with great people with very specific skillsets, end up becoming friends after.",
      icon: Users,
      color: "orange"
    },
    {
      number: 3,
      title: "Working IN the Business",
      problem: "Not spending enough time on marketing",
      solution: "75% of your time should be on marketing",
      description: "Track your time for a week. Are you spending 75% of your time on marketing? If no, something is off.",
      example: "Focus on customer acquisition, not just service delivery.",
      icon: Target,
      color: "yellow"
    },
    {
      number: 4,
      title: "Having Too Many Options",
      problem: "Customizing every single product/service",
      solution: "ONE product or service at ONE price",
      description: "Each new customer requiring custom work is a scaling nightmare - you're just an employee with multiple bosses.",
      example: "The only work I want to do for each new customer is charge the credit card.",
      icon: ShoppingCart,
      color: "green"
    },
    {
      number: 5,
      title: "Blogging as a Business",
      problem: "Too long to monetize, requires being amazing",
      solution: "Choose businesses where regular people become millionaires",
      description: "I want something that even if I'm just ok there is still a path to millions in annual revenue.",
      example: "The time it takes to actually be able to sell something is wayyy too long for me.",
      icon: Eye,
      color: "blue"
    },
    {
      number: 6,
      title: "Not Charging Enough",
      problem: "Underpricing leads to difficult customers",
      solution: "If people aren't complaining about price, you're not charging enough",
      description: "Charge enough so you can build in value and make it attractive to the client.",
      example: "A $2,000 client is way less a pain than a $20 client.",
      icon: DollarSign,
      color: "indigo"
    },
    {
      number: 7,
      title: "Fear of Failure and Associated Embarrassment",
      problem: "Paralyzed by what others might think",
      solution: "Nobody will know or care about your failures",
      description: "Trust me... nobody will know or care. People think you're savvy for trying.",
      example: "I've had project after project collapse and followers ask 'are you hiring for ____ yet?!' Baby...that tanked.",
      icon: Heart,
      color: "purple"
    },
    {
      number: 8,
      title: "Having a Ton of Inventory You Can't Move",
      problem: "Buying too much product upfront",
      solution: "Start small - buy for 5 customers, not 100",
      description: "I would rather run out of product multiple times than have 500 trinkets in my living room.",
      example: "Sell to 5 strangers → sold? Buy for 10 more → repeat.",
      icon: ShoppingCart,
      color: "pink"
    }
  ];

  const additionalFailures = [
    {
      number: 9,
      title: "Low Price Points in General",
      problem: "Selling products with low price points like $8",
      solution: "$40-$100+ per customer (preferably recurring)",
      description: "That has to cover customer acquisition, marketing, packaging, operations, website overheads, taxes. How Sway?",
      icon: DollarSign
    },
    {
      number: 10,
      title: "Deal Sites",
      problem: "Deal site listings benefit only the deal sites",
      solution: "Obsessive upselling and follow up required",
      description: "It can work but needs obsessive upselling and follow up to convert to recurring customers.",
      icon: Target
    },
    {
      number: 11,
      title: "Fear of Execution",
      problem: "Avoiding uncomfortable but necessary actions",
      solution: "Success only happens in uncomfortable spaces",
      description: "If you want to get somewhere you've never been you have to do things that you've never done.",
      icon: Zap
    },
    {
      number: 12,
      title: "Not Quitting Fast Enough",
      problem: "Hanging onto projects that aren't working",
      solution: "30 days for simple businesses, 60 for complex",
      description: "Keep an eye on reality and appraise if it's not working because of your efforts or the thing just isn't working.",
      icon: Clock
    },
    {
      number: 13,
      title: "Bad Design",
      problem: "Coming out the gate with unprofessional appearance",
      solution: "Professional design from day one",
      description: "Like showing up on a first date in construction boots and sweat-stained clothes. You can't cross conversion hurdles if you're not looking the part.",
      icon: Eye
    },
    {
      number: 14,
      title: "Entrepreneurship A.D.D",
      problem: "Jumping from project to project",
      solution: "Focus obsessively on one thing for 12 months",
      description: "Find what's made the most people millionaires, see if it's unsophisticated, determine if you can start cheap.",
      icon: Target
    },
    {
      number: 15,
      title: "Lack of Funding",
      problem: "Being in a business that requires funding when you don't have it",
      solution: "Choose businesses well-suited for no funding",
      description: "A $300 website + Craigslist to connect customers and providers? That works when you're broke.",
      icon: DollarSign
    }
  ];

  const successCriteria = [
    "Find the project that has made the most people millionaires",
    "See if it's fairly unsophisticated and you get to sales in a month or two", 
    "Determine if you can start it on the cheap"
  ];

  const localServicesAdvantages = [
    "Made the most people millionaires",
    "Unsophisticated and simple to understand",
    "Can start for under $500",
    "Get to first sale in 30 days",
    "No inventory required",
    "Recurring revenue potential"
  ];

  const mindsetShifts = [
    {
      from: "Perfect planning",
      to: "Quick execution and learning",
      description: "90% of what you learn happens after launch"
    },
    {
      from: "Working with friends",
      to: "Working with skilled professionals",
      description: "Skills matter more than relationships in business"
    },
    {
      from: "Low prices for volume",
      to: "Premium pricing for quality",
      description: "Higher prices often mean easier customers"
    },
    {
      from: "Fear of failure",
      to: "Embrace experimentation",
      description: "Nobody cares about your failures as much as you think"
    }
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
              Day 21
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Entrepreneurship Hasn't Worked - 15 Fatal Mistakes
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 21 of 27</span>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">HERE'S WHY BUSINESS HASN'T WORKED OUT FOR YOU YET!</h2>
            <p className="text-lg text-red-100 mb-4">
              Today is a little different. I want to spend today addressing the things I've seen that cause people to fail at building local service businesses and any business at all for that matter.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                Hopefully this can help some of us not make the same mistakes I made when I was trying to figure things out.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Important Note</h3>
            <p className="text-yellow-700 mb-4">
              I'm not saying to go out and change your entire business model after reading this.
            </p>
            <p className="text-yellow-600">
              <strong>If what you're doing works, keep at it!</strong> There are a million ways to skin a cat.
            </p>
          </div>
        </div>

        {/* Main Failures 1-8 */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 8 Biggest Business Killers</h2>
          
          <div className="space-y-8">
            {entrepreneurshipFailures.map((failure) => (
              <div key={failure.number} className={`bg-${failure.color}-50 border-l-4 border-${failure.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <div className={`bg-${failure.color}-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0`}>
                    {failure.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <failure.icon className={`h-6 w-6 text-${failure.color}-600 mr-3`} />
                      <h3 className={`text-xl font-bold text-${failure.color}-800`}>
                        {failure.title}
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className={`bg-red-100 p-4 rounded-lg`}>
                        <h4 className="font-bold text-red-800 mb-2">❌ Problem</h4>
                        <p className="text-red-700 text-sm">{failure.problem}</p>
                      </div>
                      <div className={`bg-green-100 p-4 rounded-lg`}>
                        <h4 className="font-bold text-green-800 mb-2">✅ Solution</h4>
                        <p className="text-green-700 text-sm">{failure.solution}</p>
                      </div>
                    </div>
                    <p className={`text-${failure.color}-700 mb-3`}>
                      {failure.description}
                    </p>
                    <div className={`bg-${failure.color}-100 p-3 rounded-lg`}>
                      <p className={`text-${failure.color}-800 font-medium text-sm italic`}>
                        "{failure.example}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Failures 9-15 */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">7 More Critical Mistakes (9-15)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {additionalFailures.map((failure) => (
              <div key={failure.number} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-start">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
                    {failure.number}
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <failure.icon className="h-5 w-5 text-gray-600 mr-2" />
                      <h3 className="font-bold text-gray-800 text-sm">{failure.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-red-100 p-2 rounded text-xs">
                        <span className="font-semibold text-red-800">Problem: </span>
                        <span className="text-red-700">{failure.problem}</span>
                      </div>
                      <div className="bg-green-100 p-2 rounded text-xs">
                        <span className="font-semibold text-green-800">Solution: </span>
                        <span className="text-green-700">{failure.solution}</span>
                      </div>
                      <p className="text-gray-600 text-xs">{failure.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Framework */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Success Framework</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">If it were me I would do this:</h3>
            <div className="space-y-3">
              {successCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm">
                    {index + 1}
                  </div>
                  <span className="text-blue-700">{criteria}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-3">Then Focus Obsessively</h3>
            <p className="text-green-700">
              I would focus on that one, work on it obsessively for <strong>12 months</strong> and go from there.
            </p>
          </div>
        </div>

        {/* Local Services Perfect Fit */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Award className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Local Services is Perfection for This</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {localServicesAdvantages.map((advantage, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-200 mx-auto mb-2" />
                  <p className="text-green-100 text-sm font-medium">{advantage}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                Local services checks every box for the perfect business model!
              </p>
            </div>
          </div>
        </div>

        {/* Mindset Shifts */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Mindset Shifts</h2>
          
          <div className="space-y-6">
            {mindsetShifts.map((shift, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-red-100 px-4 py-2 rounded-lg">
                    <span className="text-red-800 font-semibold">From: {shift.from}</span>
                  </div>
                  <div className="text-purple-600 font-bold text-xl">→</div>
                  <div className="bg-green-100 px-4 py-2 rounded-lg">
                    <span className="text-green-800 font-semibold">To: {shift.to}</span>
                  </div>
                </div>
                <p className="text-purple-700 text-center">{shift.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Funding Reality */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Funding Reality</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">Lack of Funding Isn't the Problem</h3>
            <p className="text-orange-700 mb-4">
              If there is a lack of funding you have to be in a business that is well suited to a lack of funding.
            </p>
            <p className="text-orange-600">
              So lack of funding isn't as much of an issue as being in a business that isn't well suited for a lack of funds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-bold text-red-800 mb-3">❌ Bad for No Funding</h4>
              <p className="text-red-700 text-sm mb-3">
                Business where you need inventory and product distribution with no funding
              </p>
              <div className="bg-red-100 p-3 rounded-lg">
                <p className="text-red-800 font-semibold text-center">Nah son.</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-800 mb-3">✅ Perfect for No Funding</h4>
              <p className="text-green-700 text-sm mb-3">
                $300 website + Craigslist to connect customers and providers
              </p>
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-green-800 font-semibold text-center">Yassss!</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Personal Example</h3>
            <p className="text-blue-700">
              I did that and made money when I was broke. This requires killing your ego a bit but this is harder said than done for many people.
            </p>
          </div>
        </div>

        {/* Marathon Analogy */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Entrepreneurship is a Marathon</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                You can't become a successful marathon runner without some shin splints.
              </p>
              <p className="text-lg text-purple-100">
                And entrepreneurship is a marathon.
              </p>
            </div>
            <p className="text-purple-200">
              If you're at a tough spot right now, stay positive. That moment when things look like they're about to implode is often when things find a way of working out...
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">❌ Avoid These</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Building without monetization plan</li>
                  <li>• Working with friends over skilled people</li>
                  <li>• Too many custom options</li>
                  <li>• Underpricing your services</li>
                  <li>• Fear of failure paralysis</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">✅ Do These Instead</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Monetization first approach</li>
                  <li>• Work with skilled professionals</li>
                  <li>• One product, one price model</li>
                  <li>• Premium pricing strategy</li>
                  <li>• Embrace experimentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Good Luck and Keep Going</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-green-100 mb-4">
                That's about it. You can't become a successful marathon runner without some shin splints. And entrepreneurship is a marathon.
              </p>
              <p className="text-xl font-bold text-yellow-300">
                And if you're at a tough spot right now, stay positive.
              </p>
              <p className="text-green-200 mt-2">
                That moment when things look like they're about to implode is often when things find a way of working out...
              </p>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-center text-lg">
            Good luck and catch you tomorrow. Getting close.
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
            Next: Day 22 - Leveraging Video
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day21;