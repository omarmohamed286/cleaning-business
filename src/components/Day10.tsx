import React, { useEffect } from 'react';
import { ArrowLeft, Gift, Percent, Mail, RefreshCw, TrendingUp, Code, AlertTriangle, Lightbulb, DollarSign, Target, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day10() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const localServiceProviderStrengths = [
    "Providing the actual service",
    "What products to use", 
    "Customer interactions"
  ];

  const localServiceProviderWeaknesses = [
    "Customer acquisition",
    "Marketing",
    "Branding", 
    "Technology",
    "Business operations"
  ];

  const ecommerceElements = [
    {
      title: "Gift Cards",
      description: "Thanksgiving, Christmas, Valentine's day, Birthdays... people buy gift cards. Fire some out to your email list and watch the money rolling in.",
      icon: Gift,
      color: "green",
      benefits: ["Holiday revenue spikes", "Cash flow improvement", "Customer acquisition"]
    },
    {
      title: "Discount Codes", 
      description: "Great for tracking customer sources and personalizing offers. Easy way to figure out where clients come from.",
      icon: Percent,
      color: "blue", 
      benefits: ["Source tracking", "Personalized offers", "Customer retention"]
    },
    {
      title: "Holiday Email Templates",
      description: "Easy conversions. Check for upcoming holidays, send out email template for that holiday. Individual campaigns that have netted $10k with one email.",
      icon: Mail,
      color: "purple",
      benefits: ["Instant revenue", "Seasonal marketing", "High ROI campaigns"]
    },
    {
      title: "Cart Abandonment Tool",
      description: "Capture leads who start checkout but don't complete. Set up automated emails to recapture those folks. Works like a charm.",
      icon: RefreshCw,
      color: "orange",
      benefits: ["Lead recovery", "Automated follow-up", "Increased conversions"]
    }
  ];

  const discountCodeExamples = [
    { platform: "Twitter", code: "TWITTER10" },
    { platform: "Facebook", code: "FACEBOOK15" },
    { platform: "Yelp", code: "YELP20" },
    { platform: "Personal", code: "10PERCENT4Mary" }
  ];

  const engineerWarnings = [
    "Resist the urge to want to build everything yourself",
    "Resist the urge to over-engineer every problem", 
    "Don't go down never-ending rabbit holes",
    "Avoid zillow api and automated AI solutions",
    "Skip auto-responders and automatic job distribution",
    "Don't build when you can buy/integrate"
  ];

  const successMetrics = [
    { metric: "Individual Email Campaign", value: "$10K", description: "Revenue from single holiday email" },
    { metric: "Gift Card Sales", value: "High ROI", description: "Especially during holidays" },
    { metric: "Cart Recovery", value: "15-25%", description: "Typical abandonment recovery rate" },
    { metric: "Source Tracking", value: "100%", description: "Know exactly where customers come from" }
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
              Day 10
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              E-Commerce Elements That Boost Sales & Margins
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
            <TrendingUp className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 10 of 27</span>
          </div>
          <p className="text-lg text-purple-100 leading-relaxed">
            Today I want to touch on a few elements that will boost our sales and margins beyond what we originally had in mind. These are things that are typical with super optimized e-commerce sites but are <span className="text-yellow-300 font-bold">rare with local services</span>.
          </p>
        </div>

        {/* Market Opportunity */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Perfect Partnership Opportunity</h2>
          
          <p className="text-gray-700 mb-6">
            Most of the competition either overlook these things or don't even know they exist. And that's the thing with these businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-4">✅ Local Service Providers Are Great At:</h3>
              <div className="space-y-2">
                {localServiceProviderStrengths.map((strength, index) => (
                  <div key={index} className="flex items-center text-green-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-red-800 mb-4">❌ Local Service Providers Are Not Great At:</h3>
              <div className="space-y-2">
                {localServiceProviderWeaknesses.map((weakness, index) => (
                  <div key={index} className="flex items-center text-red-700">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                    <span>{weakness}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">The Perfect Partnership</h3>
            <p className="text-blue-700">
              So it's a perfect partnership where <strong>we provide the second group</strong> and <strong>they provide the first group</strong>.
            </p>
          </div>
        </div>

        {/* Skill Development Note */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Don't Worry About Skills</h2>
            <p className="text-lg text-green-100 mb-4">
              And don't worry if you aren't up on the second group yourself, I think this is true:
            </p>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                "You can learn business skills faster than service providers can learn business skills."
              </p>
            </div>
            <p className="text-green-200 mt-4">
              Either way, we'll get into how we find these folks and partner with them in a future day.
            </p>
          </div>
        </div>

        {/* E-Commerce Elements */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">E-Commerce Elements for Local Services</h2>
          
          <p className="text-gray-700 mb-8">
            Here are some of the tech value adds that are typical in e-commerce companies but largely nonexistent at local services. We'll incorporate these and have an advantage from day one:
          </p>

          <div className="space-y-8">
            {ecommerceElements.map((element, index) => (
              <div key={index} className={`bg-${element.color}-50 border-l-4 border-${element.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start mb-4">
                  <element.icon className={`h-8 w-8 text-${element.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-${element.color}-800 mb-3`}>
                      {element.title}
                    </h3>
                    <p className={`text-${element.color}-700 mb-4`}>
                      {element.description}
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                      {element.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className={`bg-${element.color}-100 p-3 rounded-lg text-center`}>
                          <span className={`text-${element.color}-800 font-medium text-sm`}>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discount Code Examples */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Discount Code Strategy</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Source Tracking Made Easy</h3>
            <p className="text-blue-700 mb-4">
              These have been great because it allows me to figure out where clients come from. Easy way to track sources of customers...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Platform-Specific Codes</h4>
              <div className="space-y-2">
                {discountCodeExamples.slice(0, 3).map((example, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg flex justify-between">
                    <span className="text-gray-700">{example.platform}:</span>
                    <span className="font-mono text-blue-600">{example.code}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Personalized Codes</h4>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-700 text-sm mb-2">Example personalized message:</p>
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-700 italic">
                    "Hi Mary, I know we showed up late, please use this discount code for 10% off your next month's cleaning: <span className="font-mono text-green-600">10PERCENT4Mary</span>"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Holiday Email Success */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Holiday Email Templates - $10K Revenue Example</h2>
          
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-3">The Process</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-bold text-green-200 mb-2">Step 1</div>
                <div className="text-green-100">Check for upcoming holidays</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-bold text-green-200 mb-2">Step 2</div>
                <div className="text-green-100">Send out email template for that holiday</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Real Results</h3>
            <p className="text-yellow-700 mb-4">
              And these aren't just pretty emails, we've run individual campaigns that have net <strong>$10k with one email</strong>...
            </p>
            <p className="text-yellow-600">
              Here is a facebook post I made about one of them: [Facebook post reference]
            </p>
          </div>
        </div>

        {/* Cart Abandonment */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cart Abandonment for Local Services</h2>
          
          <div className="bg-orange-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">How It Works</h3>
            <p className="text-orange-700 mb-4">
              If our customers start to checkout as long as they enter their name and email and move on to step 2 in the checkout flow, we can capture them as a lead.
            </p>
            <p className="text-orange-600">
              You can then set up automated emails to go out and recapture those folks. <strong>Works like a charm.</strong>
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Revolutionary for Local Services</h3>
            <p className="text-blue-700">
              This is standard in e-commerce but virtually unheard of in local services. It's like having a sales person follow up with every potential customer automatically.
            </p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="font-semibold text-gray-800 mb-1">{metric.metric}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* No Code Required */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Code className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">No Code Required!</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-lg text-blue-100 mb-4">
                And you can do all these things <strong className="text-yellow-300">without writing a single line of code!</strong>
              </p>
              <p className="text-blue-200">
                By the way I've built and sold two software companies and still can't write a single line of code - don't get caught up in the weeds.
              </p>
            </div>
          </div>
        </div>

        {/* Engineer Warning */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Word of Caution for Engineers</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">If you are an engineer or technical person wanting to build a business. STOP AND READ THIS.</h3>
            <p className="text-red-700">
              I've spoken to thousands of redditors over the years. Whenever I encounter an engineer or other technical person wanting to build a business I caution them on this:
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {engineerWarnings.map((warning, index) => (
              <div key={index} className="flex items-start bg-yellow-50 p-4 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-800">{warning}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">The Reality Check</h3>
            <p className="text-orange-100 mb-4">
              You're going to send yourself down a never-ending rabbit hole that involves zillow api and automated AI generated solutions and auto-responders and automatic job distribution and on and on and on...
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 text-center">
                While you're working on that stuff, someone else would have plugged in the tools that exist and built a million dollar company.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Target className="h-12 w-12 text-blue-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">TL;DR</h2>
            <div className="space-y-4 text-lg text-gray-200">
              <p>
                Elements that are typically associated with sophisticated e-commerce sites also work well at the local level to help:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="font-bold text-green-300">Boost Margins</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <div className="font-bold text-blue-300">Accelerate Growth</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <Target className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                  <div className="font-bold text-purple-300">Lower CAC</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Coming Next</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Tomorrow's Focus</h3>
            <p className="text-blue-700 mb-4">
              Short and sweet today but we're going to go into <strong>hiring/partnerships</strong> tomorrow, so hang around for that.
            </p>
            <p className="text-blue-600">
              At the end of the day, do what works for you, but I've seen this many times over the years.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-center text-lg">
            That's about it for today - we've covered the key e-commerce elements that will set you apart from 99% of local service businesses.
          </p>
          <p className="text-center text-blue-200 mt-2 font-semibold">
            Chat with you then!
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day9')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 9
          </button>
          <button
            onClick={() => navigate('/day11')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 11 - Business Formation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day10;