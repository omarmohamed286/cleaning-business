import React, { useEffect } from 'react';
import { ArrowLeft, Star, MessageCircle, Camera, Search, DollarSign, Target, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Award, Users, Clock, Percent } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day19() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yelpStrategies = [
    {
      strategy: "Quote Button Setup",
      description: "Request a quote button with fast response rate and time",
      benefit: "Instills trust and captures leads directly on Yelp",
      icon: MessageCircle,
      color: "blue",
      stats: "1487 quote requests = potential $70K+ revenue"
    },
    {
      strategy: "Discount Offers",
      description: "Added discount offer to increase conversions",
      benefit: "Boosts conversion rates and tracks customer sources",
      icon: Percent,
      color: "green",
      stats: "Significant conversion rate improvement"
    },
    {
      strategy: "Business Highlights",
      description: "Paid feature that appears organic to customers",
      benefit: "Enhanced visibility and professional appearance",
      icon: Award,
      color: "purple",
      stats: "Worth investing in as revenue grows"
    },
    {
      strategy: "SEO-Optimized Photos",
      description: "400+ photos with strategic keyword placement",
      benefit: "Improves Yelp SEO rankings dramatically",
      icon: Camera,
      color: "orange",
      stats: "#1 Yelp ranking = millions in revenue"
    },
    {
      strategy: "Review Responses",
      description: "Business owner actively responds to all reviews",
      benefit: "Shows engagement and builds customer relationships",
      icon: Users,
      color: "pink",
      stats: "Improved customer satisfaction and trust"
    }
  ];

  const successMetrics = [
    { metric: "Reviews", value: "582", description: "Total customer reviews" },
    { metric: "Rating", value: "4.5", description: "Average star rating" },
    { metric: "Quote Requests", value: "1,487", description: "Direct lead generation" },
    { metric: "Potential Revenue", value: "$70K+", description: "From 20% conversion at $250 avg" }
  ];

  const seoPhotoExamples = [
    {
      keyword: "guest room cleaning in Los Angeles",
      purpose: "Location-specific service targeting",
      impact: "Captures local search traffic"
    },
    {
      keyword: "deep cleaning in Torrance", 
      purpose: "Service-specific local targeting",
      impact: "Ranks for specific service searches"
    },
    {
      keyword: "kitchen cleaning services",
      purpose: "Room-specific service optimization",
      impact: "Targets detailed search queries"
    },
    {
      keyword: "move-out cleaning specialists",
      purpose: "Specialized service positioning",
      impact: "Captures niche market searches"
    }
  ];

  const setupRequirements = [
    "Terms and conditions page",
    "Privacy policy page", 
    "Professional website design",
    "Business phone number displayed",
    "Business email address",
    "Physical business address",
    "Legitimate business appearance"
  ];

  const yelpBenefits = [
    "Direct customer acquisition channel",
    "Built-in trust and credibility",
    "Local SEO advantages",
    "Review-based social proof",
    "Quote request system",
    "Photo showcase capabilities",
    "Business highlight features",
    "Customer engagement tools"
  ];

  const conversionMath = [
    { scenario: "Conservative (20%)", conversion: "20%", revenue: "$74,350", description: "297 customers × $250 avg" },
    { scenario: "Realistic (30%)", conversion: "30%", revenue: "$111,525", description: "446 customers × $250 avg" },
    { scenario: "Optimized (40%)", conversion: "40%", revenue: "$148,700", description: "595 customers × $250 avg" }
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
              Day 19
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Making Millions with Yelp - Your Customer Acquisition Goldmine
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Star className="h-8 w-8 text-yellow-200 mr-3" />
            <span className="text-xl font-bold">Day 19 of 27</span>
          </div>
          <p className="text-lg text-yellow-100 leading-relaxed mb-4">
            Today we'll talk about Yelp! So many folks have crushed this and changed their lives, it's insane!!!
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-xl font-bold text-yellow-200 text-center">
              Yelp often ends up being an integral part of our customer acquisition strategy.
            </p>
          </div>
        </div>

        {/* Success Story Example */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Success Story - They're Crushing It!</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">The Numbers Don't Lie</h3>
            <p className="text-green-700 mb-4">
              Here's an example of a really good Yelp account. These folks have amassed <strong>582 reviews</strong> while maintaining a <strong>4.5 star rating</strong>. They're crushing it!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="font-semibold text-blue-800 mb-1">{metric.metric}</div>
                <div className="text-sm text-blue-600">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">Million Dollar Potential</h3>
            <p className="text-green-100 text-center">
              Done correctly, you could do <strong className="text-yellow-300">a million dollars a year from Yelp alone!</strong>
            </p>
          </div>
        </div>

        {/* Yelp Strategies */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5 Key Yelp Strategies That Generate Millions</h2>
          
          <div className="space-y-6">
            {yelpStrategies.map((strategy, index) => (
              <div key={index} className={`bg-${strategy.color}-50 border-l-4 border-${strategy.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <strategy.icon className={`h-8 w-8 text-${strategy.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-${strategy.color}-800 mb-3`}>
                      {strategy.strategy}
                    </h3>
                    <p className={`text-${strategy.color}-700 mb-3`}>
                      {strategy.description}
                    </p>
                    <div className={`bg-${strategy.color}-100 p-4 rounded-lg mb-3`}>
                      <p className={`text-${strategy.color}-800 font-medium`}>
                        <strong>Benefit:</strong> {strategy.benefit}
                      </p>
                    </div>
                    <div className={`bg-white p-3 rounded-lg border-l-4 border-${strategy.color}-400`}>
                      <p className={`text-${strategy.color}-700 font-semibold text-sm`}>
                        📊 {strategy.stats}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Math */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Revenue Math</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Quote Request Conversion Scenarios</h3>
            <p className="text-blue-700">
              With 1,487 quote requests, even modest conversion rates generate substantial revenue:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {conversionMath.map((scenario, index) => (
              <div key={index} className={`p-6 rounded-lg text-center ${
                index === 1 ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
              }`}>
                <h4 className={`text-lg font-bold mb-3 ${
                  index === 1 ? 'text-green-800' : 'text-gray-800'
                }`}>
                  {scenario.scenario}
                </h4>
                <div className={`text-3xl font-bold mb-2 ${
                  index === 1 ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {scenario.revenue}
                </div>
                <div className={`text-sm mb-2 ${
                  index === 1 ? 'text-green-700' : 'text-gray-600'
                }`}>
                  {scenario.conversion} conversion rate
                </div>
                <div className={`text-xs ${
                  index === 1 ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {scenario.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Photo Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO Photo Strategy - The Secret Weapon</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Yelp SEO is Real!</h3>
            <p className="text-purple-700 mb-4">
              Yes, Yelp rankings are SEO driven just like on Google. Strategic photo naming can dramatically improve your rankings.
            </p>
            <div className="bg-purple-100 p-4 rounded-lg">
              <p className="text-purple-800 font-semibold text-center">
                Imagine what 400 photos with keywords does for rankings? #1 Yelp position = millions in revenue!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {seoPhotoExamples.map((example, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <Camera className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">Photo Keyword Example</h4>
                    <div className="bg-white p-3 rounded-lg border-l-4 border-orange-400 mb-3">
                      <p className="text-orange-700 font-mono text-sm">"{example.keyword}"</p>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-orange-600 font-semibold text-sm">Purpose: </span>
                        <span className="text-orange-700 text-sm">{example.purpose}</span>
                      </div>
                      <div>
                        <span className="text-orange-600 font-semibold text-sm">Impact: </span>
                        <span className="text-orange-700 text-sm">{example.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">The Long-Term Payoff</h3>
            <p className="text-yellow-700">
              This stuff takes effort, but like everything in life you get out what you put in. 
              <strong> The good thing is you do the work once and you're paid for years to come!</strong>
            </p>
          </div>
        </div>

        {/* Setup Requirements */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Setup Requirements - Words of Caution</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">Website Verification Required</h3>
            <p className="text-red-700 mb-4">
              When setting up your Yelp account they will check your website to verify. Make sure everything looks legit and professional before applying.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {setupRequirements.map((requirement, index) => (
              <div key={index} className="flex items-center bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-blue-800 font-medium">{requirement}</span>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-2">Wait Until Ready</h3>
            <p className="text-orange-700">
              Wait until you have your phone number, email, and address on the site before applying so you don't have any issues.
            </p>
          </div>
        </div>

        {/* Yelp Benefits Summary */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Yelp Should Be Part of Your Strategy</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {yelpBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-green-50 p-4 rounded-lg">
                <Target className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The Million Dollar Opportunity</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                Those are the main markers of a successful Yelp page.
              </p>
              <p className="text-lg text-blue-100">
                Done correctly and you could do a million dollars a year from Yelp alone.
              </p>
            </div>
            <p className="text-purple-200">
              Don't forget to get a Yelp account as part of your customer acquisition strategy!
            </p>
          </div>
        </div>

        {/* Partnership Opportunity */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Users className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Partnership Opportunity</h2>
            <p className="text-lg text-green-100 mb-4">
              BTW if anybody wants to partner with me in some way to build one of these businesses hit me on Instagram.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-green-200">
                <strong>instagram.com/rohangilkes</strong> - My DMs on here are diabolical and I hate the UI.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Update */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Almost There!</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-2">
                See you tomorrow, can't believe we'll be right at Day 20 already!!!
              </p>
              <p className="text-orange-100">
                We're in the home stretch of building your million-dollar business.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day18')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 18
          </button>
          <button
            onClick={() => navigate('/day20')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 20 - Making Millions with Thumbtack
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day19;