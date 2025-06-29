import React, { useEffect } from 'react';
import { ArrowLeft, DollarSign, TrendingUp, Target, Calculator, Users, CheckCircle, AlertTriangle, Lightbulb, Award, BarChart3 } from 'lucide-react';

interface Day8Props {
  onBack: () => void;
}

function Day8({ onBack }: Day8Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const launchProcess = [
    { step: 1, title: "Create a dope looking brand", description: "Website, logo, copywriting", status: "almost-done" },
    { step: 2, title: "Set up ways for customers to pay us", description: "Payment processing and checkout", status: "starting" },
    { step: 3, title: "Drive as much traffic as we can muster", description: "Marketing and customer acquisition", status: "upcoming" }
  ];

  const pricingFactors = [
    "Quality perception",
    "Peace of mind", 
    "Reputation",
    "Convenience",
    "Trust factors",
    "Value-added services"
  ];

  const valueAddedItems = [
    { item: "Money Back Guarantees", description: "Risk reversal for customers", icon: CheckCircle },
    { item: "On time Service", description: "Reliability promise", icon: Target },
    { item: "Credit card processing", description: "Payment convenience", icon: DollarSign },
    { item: "Online Chat", description: "Instant support", icon: Users },
    { item: "Booking by Text message", description: "Mobile convenience", icon: Users },
    { item: "Online booking with real time scheduling", description: "24/7 availability", icon: Calculator },
    { item: "Organic/green cleaning", description: "Health-conscious option", icon: Award },
    { item: "Premium branding, convenience, and peace of mind", description: "Overall experience", icon: TrendingUp }
  ];

  const pricingFormula = [
    { step: "X", description: "How much I need to make per transaction", color: "blue" },
    { step: "Y", description: "How much the teams need to make", color: "green" },
    { step: "X+Y", description: "Create value that justifies this price", color: "purple" }
  ];

  const millionDollarMath = [
    { metric: "Service Price", value: "$200", description: "Average transaction" },
    { metric: "Provider Gets", value: "$120", description: "60% to service provider" },
    { metric: "You Get", value: "$80", description: "40% margin" },
    { metric: "Jobs Per Day", value: "15", description: "Target volume" },
    { metric: "Annual Revenue", value: "$1M+", description: "Achievable in 24-36 months" }
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
              Day 8
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Pricing - How to Price for Profit and Growth
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <DollarSign className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 8 of 27</span>
          </div>
          <p className="text-lg text-green-100 leading-relaxed">
            If you're new here, this is DAY 8 of a 27 DAY series where you peek over my shoulder and learn how to lay out a remote service business just like my company that just hit <span className="text-yellow-300 font-bold">$20 million in sales</span>.
          </p>
        </div>

        {/* Launch Process Update */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Launch Process - Phase 2 Begins</h2>
          
          <p className="text-gray-700 mb-6">
            Again our process for launching companies is the same every single time:
          </p>

          <div className="space-y-4 mb-6">
            {launchProcess.map((item) => (
              <div key={item.step} className={`flex items-start p-6 rounded-lg border-l-4 ${
                item.status === 'almost-done' ? 'bg-yellow-50 border-yellow-500' : 
                item.status === 'starting' ? 'bg-blue-50 border-blue-500' : 
                'bg-gray-50 border-gray-300'
              }`}>
                <div className={`rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 ${
                  item.status === 'almost-done' ? 'bg-yellow-500 text-white' :
                  item.status === 'starting' ? 'bg-blue-500 text-white' :
                  'bg-gray-400 text-white'
                }`}>
                  {item.step}
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    item.status === 'almost-done' ? 'text-yellow-800' :
                    item.status === 'starting' ? 'text-blue-800' :
                    'text-gray-600'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`${
                    item.status === 'almost-done' ? 'text-yellow-700' :
                    item.status === 'starting' ? 'text-blue-700' :
                    'text-gray-500'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Phase 2 if you will...</h3>
            <p className="text-blue-700">
              We're almost done with step 1 and today we start on step 2.
            </p>
          </div>
        </div>

        {/* Pricing Philosophy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Philosophy</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">❌ Common Mistake</h3>
            <p className="text-red-700 mb-4">
              A lot of new entrepreneurs think they should compete on price.
            </p>
            <p className="text-red-600">
              This works in some industries, but I think it's really difficult to sustain in service industries.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">✅ Our Approach</h3>
            <p className="text-green-700 mb-4">
              We're not selling widgets here. Instead we're going to compete on a bunch of other factors while having our price in the general ballpark.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="bg-green-100 p-3 rounded-lg text-center">
                  <span className="text-green-800 font-medium">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Pricing Insight */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Major Key 🔑</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-xl font-bold text-yellow-300 mb-2">
                In the client's mind, the price you charge suggests the quality of service you offer.
              </p>
              <p className="text-lg text-purple-200">
                I'll say that again: <strong>the price you charge suggests the quality of service you offer.</strong>
              </p>
            </div>
            <p className="text-lg text-purple-100">
              On perception alone, being the lowest priced offering can actually <strong>harm you more than it helps</strong>.
            </p>
          </div>
        </div>

        {/* Buyer Psychology */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Buyer Psychology</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">The Reality</h3>
              <p className="text-blue-700 mb-4">
                Fewer people base buying decisions on price than you would imagine.
              </p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-800 mb-1">70%</div>
                <div className="text-sm text-blue-600">Don't choose based on lowest price</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">What They Want</h3>
              <p className="text-green-700 mb-4">
                Many would rather pay a premium price for peace of mind that comes with doing business with a reputable company.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="text-lg font-bold text-green-800">Peace of Mind</div>
                <div className="text-sm text-green-600">Worth paying extra for</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Formula */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Pricing Decision Framework</h2>
          
          <p className="text-gray-700 mb-6">
            As a general rule for pricing I make my decision this way:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {pricingFormula.map((item, index) => (
              <div key={index} className={`bg-${item.color}-50 p-6 rounded-lg text-center`}>
                <div className={`text-3xl font-bold text-${item.color}-600 mb-3`}>
                  {item.step}
                </div>
                <p className={`text-${item.color}-700 font-medium`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h3 className="text-lg font-bold text-orange-800 mb-2">The Magic Formula</h3>
            <p className="text-orange-700">
              <strong>Figure out how much I needed to make per transaction (x)</strong><br/>
              <strong>Find out how much the teams need to make (y)</strong><br/>
              <strong>Create value that in the client's mind justifies a price of (x+y)</strong>
            </p>
          </div>
        </div>

        {/* Industry Standard Margins */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Standard Margins</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Typical Breakdown</h3>
            <p className="text-gray-700 mb-4">
              While there's no magical margin, you'll find that most people add <strong>40% margins</strong> on top of what they pay service technicians to get to their final price.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-800">$200</div>
                <div className="text-blue-600">Total Service Price</div>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-800">$120</div>
                <div className="text-green-600">To Provider (60%)</div>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-800">$80</div>
                <div className="text-purple-600">For Us (40%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Million Dollar Math */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center mb-6">
            <BarChart3 className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">The Million Dollar Math</h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {millionDollarMath.map((item, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg text-center">
                <div className="text-xl font-bold text-yellow-300 mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-green-200 mb-1">{item.metric}</div>
                <div className="text-xs text-green-100">{item.description}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-lg text-center text-green-100 mb-2">
              Get to <strong className="text-yellow-300">15 of these jobs per day</strong> and you're already a <strong className="text-yellow-300">million dollar per year company</strong>.
            </p>
            <p className="text-center text-green-200 font-semibold">
              ^Doable goal that is attainable in 24-36 months.
            </p>
          </div>
        </div>

        {/* Pricing Flexibility */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing is Flexible</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Living Document</h3>
            <p className="text-yellow-700 mb-4">
              At the end of the day though be ready to try different price points, and don't be afraid to raise prices if you think the market can support it.
            </p>
            <p className="text-yellow-600">
              Your pricing is like the constitution, it's a <strong>living breathing document</strong>, so don't get obsessed with getting it perfect at the start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-800 mb-3">✅ Do This</h4>
              <ul className="text-green-700 space-y-2">
                <li>• Test different price points</li>
                <li>• Raise prices when market supports it</li>
                <li>• Adjust based on feedback</li>
                <li>• Monitor competitor pricing</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-bold text-red-800 mb-3">❌ Don't Do This</h4>
              <ul className="text-red-700 space-y-2">
                <li>• Obsess over perfect pricing</li>
                <li>• Hang onto prices that don't work</li>
                <li>• Ignore market feedback</li>
                <li>• Race to the bottom on price</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Value-Added Items */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Value-Added Items = Pricing Power</h2>
          
          <p className="text-gray-700 mb-6">
            Employ as many value-added items as possible and you give yourself more pricing flexibility (i.e you can price more):
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {valueAddedItems.map((item, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <div className="flex items-start">
                  <item.icon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800 mb-1">{item.item}</h3>
                    <p className="text-blue-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Thesis */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Target className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Our Main Thesis</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                If you position your offering as a premium service with enough value-added components for the client, you can charge damn near whatever you please.
              </p>
            </div>
            <p className="text-lg text-indigo-100">
              Just be ready to adjust to what's happening and don't try to hang on to a price that isn't working.
            </p>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Thoughts on Pricing</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">The Bottom Line</h3>
            <p className="text-green-700 mb-4">
              At the end of the day the pricing decisions are in your hands and if you position yourself well, those decisions are largely <strong>independent of what the competition is doing</strong>.
            </p>
            <p className="text-green-600">
              Sweet, hope you enjoyed this.
            </p>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Calculator className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">What's Next</h2>
            <p className="text-lg text-orange-100 mb-4">
              Tomorrow, we're going to set up pricing in our booking system and show you how that works.
            </p>
            <div className="text-3xl font-bold text-yellow-300">
              One step closer to getting P.A.I.D!!!
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
            Next: Day 9 - Online Booking
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day8;