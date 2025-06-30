import React, { useEffect } from 'react';
import { ArrowLeft, ShoppingCart, CreditCard, Calendar, MapPin, Plus, RefreshCw, Mail, Globe, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day9() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkoutSteps = [
    {
      step: 1,
      title: "Contact Info & Address",
      description: "Simple form to capture customer details and service location",
      icon: MapPin,
      color: "blue"
    },
    {
      step: 2,
      title: "Services & Extras",
      description: "Perfect for upselling and increasing average order value",
      icon: Plus,
      color: "green"
    },
    {
      step: 3,
      title: "Date/Time & Frequency",
      description: "With automated discounts built in to incentivize higher frequency bookings",
      icon: Calendar,
      color: "purple"
    },
    {
      step: 4,
      title: "Payment & Booking",
      description: "Additional notes, credit card details, and the huge BOOK NOW button",
      icon: CreditCard,
      color: "orange"
    }
  ];

  const keyFeatures = [
    {
      feature: "Above the fold checkout",
      description: "Customers can start booking immediately without scrolling",
      icon: ShoppingCart
    },
    {
      feature: "Cart abandonment emails",
      description: "Automated email sequences for incomplete bookings",
      icon: Mail
    },
    {
      feature: "One-page checkout",
      description: "Simple, streamlined booking process",
      icon: CheckCircle
    },
    {
      feature: "Real-time scheduling",
      description: "Live availability and instant booking confirmation",
      icon: Calendar
    },
    {
      feature: "Automated discounts",
      description: "Built-in incentives for recurring bookings",
      icon: RefreshCw
    },
    {
      feature: "Stripe integration",
      description: "Secure credit card processing with one click setup",
      icon: CreditCard
    }
  ];

  const businessModel = [
    "Customer finds your website",
    "Customer books service online", 
    "You coordinate with service provider",
    "Service gets completed",
    "You handle payment & customer service",
    "Repeat & scale"
  ];

  const techAdvantages = [
    {
      comparison: "Traditional Local Business",
      characteristics: [
        "Phone-only booking",
        "Manual scheduling",
        "Cash/check payments",
        "No follow-up system",
        "Limited availability"
      ],
      result: "Limited growth potential"
    },
    {
      comparison: "Our Tech-Enabled Approach",
      characteristics: [
        "24/7 online booking",
        "Automated scheduling",
        "Credit card processing",
        "Email automation",
        "Global accessibility"
      ],
      result: "Unlimited scalability"
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
              Day 9
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Online Booking - Simple Checkout That Converts
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <ShoppingCart className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 9 of 27</span>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed">
            Today we'll walk through our booking form to show you how we get customers to pay us. Simple one-page checkout that converts.
          </p>
        </div>

        {/* Philosophy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach: Don't Reinvent the Wheel</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Proven Strategy</h3>
            <p className="text-green-700">
              Remember as we build these businesses we're not going to try to reinvent any wheels. 
              We know a simple above the fold checkout works, and that's what we're going with.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🎯 The Secret Weapon</h3>
            <p className="text-blue-700 mb-4">
              Best thing: if someone gives us their email in that form but does not complete the booking, they get automated emails in sequence to bring them back to the site.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold text-center">
                It just happens in the background and we don't have to lift a finger!
              </p>
              <p className="text-blue-600 text-sm text-center mt-2">
                (Cart abandonment for local services - freaking unheard of)
              </p>
            </div>
          </div>
        </div>

        {/* Checkout Process */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 4-Step Checkout Process</h2>
          
          <p className="text-gray-700 mb-8">
            As folks go through the funnel when people get to the booking form it's laid out like this... simple one page checkout:
          </p>

          <div className="space-y-6">
            {checkoutSteps.map((step) => (
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
        </div>

        {/* Key Features */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features That Set Us Apart</h2>
          
          <p className="text-gray-700 mb-6">
            Some of this stuff might seem completely normal, but in actuality they are still pretty novel for most local service businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-start">
                  <feature.icon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{feature.feature}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uber Comparison */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Zap className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The Uber Model for Local Services</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-purple-100 mb-4">
                So the same way Uber was able to apply technology over simple transportation services and dominate, we're able to do the same with other services.
              </p>
              <p className="text-xl font-bold text-yellow-300">
                Technology + Traditional Services = Market Domination
              </p>
            </div>
          </div>
        </div>

        {/* Tech vs Traditional */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Advantage</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {techAdvantages.map((approach, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${index === 0 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
                <h3 className={`text-lg font-bold mb-4 ${index === 0 ? 'text-red-800' : 'text-green-800'}`}>
                  {index === 0 ? '❌' : '✅'} {approach.comparison}
                </h3>
                <ul className={`space-y-2 mb-4 ${index === 0 ? 'text-red-700' : 'text-green-700'}`}>
                  {approach.characteristics.map((char, charIndex) => (
                    <li key={charIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${index === 0 ? 'bg-red-400' : 'bg-green-400'}`}></div>
                      {char}
                    </li>
                  ))}
                </ul>
                <div className={`font-bold text-center p-3 rounded-lg ${index === 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  Result: {approach.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Example */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">See It In Action</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
              <ExternalLink className="h-5 w-5 mr-2" />
              Live Implementation
            </h3>
            <p className="text-blue-700 mb-4">
              You can go here and see how everything works, please don't book service though, but feel free to check out the slider and how things work:
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-bold text-center">
                oakbayclean.com
              </p>
              <p className="text-blue-600 text-sm text-center mt-2">
                Real 7-figure business using this exact system
              </p>
            </div>
          </div>
        </div>

        {/* Tools & Integration */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools We Use</h2>
          
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">All-in-One Solution</h3>
            <p className="text-green-700 mb-4">
              Surprise surprise... the same tool we use for domain name, website, hosting, email reminders etc.
            </p>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-bold">convertlabs.io</p>
              <p className="text-green-600 text-sm">Complete booking system and website solution</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-3">Payment Processing</h4>
              <p className="text-blue-700 mb-3">
                We integrate with Stripe for credit cards (takes literally one click)
              </p>
              <div className="bg-blue-100 p-3 rounded-lg">
                <p className="text-blue-800 font-semibold">One-click Stripe integration</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-3">Business Model</h4>
              <p className="text-purple-700 mb-3">
                Remember we're building an ecommerce company at the end of the day. So we don't take cash or checks.
              </p>
              <div className="bg-purple-100 p-3 rounded-lg">
                <p className="text-purple-800 font-semibold">Built to operate from anywhere</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-green-200 mr-3" />
            <h3 className="text-xl font-bold">Global Success Story</h3>
          </div>
          <p className="text-green-100 mb-4">
            Here's Chris, one of our peeps who hit <span className="text-yellow-300 font-bold">$250k in the first year</span> building from <span className="text-yellow-300 font-bold">JAPAN!</span>
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-green-100 italic text-center">
              "Our businesses are built so we can build from anywhere."
            </p>
          </div>
        </div>

        {/* Business Process Flow */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How the Business Works</h2>
          
          <div className="space-y-3">
            {businessModel.map((step, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-800">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Update */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Progress Update</h2>
            <p className="text-lg text-orange-100 mb-4">
              So I'll stop there, but here's how you can keep up with me: rohangilkes.com
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                One step closer to our first customers.
              </p>
              <p className="text-orange-200 mt-2">
                And that first dollar made in a new business...
              </p>
            </div>
          </div>
        </div>

        {/* Tomorrow Preview */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Tomorrow</h3>
            <p className="text-gray-700">
              We'll dive deeper into the technical setup and show you exactly how to implement this booking system.
            </p>
            <p className="text-blue-600 font-semibold mt-2">
              See y'all back here tomorrow!
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day8')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 8
          </button>
          <button
            onClick={() => navigate('/day10')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 10 - E-Commerce Elements
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day9;