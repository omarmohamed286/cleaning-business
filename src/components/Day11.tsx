import React, { useEffect } from 'react';
import { ArrowLeft, Building, FileText, CreditCard, Users, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Zap, ExternalLink, Shield } from 'lucide-react';

interface Day11Props {
  onBack: () => void;
}

function Day11({ onBack }: Day11Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const llcBenefits = [
    "Easy to maintain",
    "Not as many annual requirements", 
    "Stress-free way of doing business",
    "Personal liability protection",
    "Tax flexibility",
    "Professional credibility"
  ];

  const businessFormationSteps = [
    {
      step: 1,
      title: "Choose Your Formation Service",
      description: "Use firstbase.io or bizee.com for quick, professional setup",
      icon: Building,
      color: "blue"
    },
    {
      step: 2,
      title: "Complete Application",
      description: "Literally 6-7 minutes of effort, then wait 1-2 weeks",
      icon: FileText,
      color: "green"
    },
    {
      step: 3,
      title: "Get Your Documents",
      description: "All necessary business documents included in one package",
      icon: Shield,
      color: "purple"
    },
    {
      step: 4,
      title: "Set Up Business Banking",
      description: "Business bank account already set up in your business name",
      icon: CreditCard,
      color: "orange"
    }
  ];

  const includedDocuments = [
    "Articles of Organization",
    "Operating Agreement",
    "EIN (Employer Identification Number)",
    "Business Bank Account Setup",
    "Registered Agent Service",
    "Legal Staff Support"
  ];

  const perfectionism = [
    {
      stage: "Nothing to Something Good",
      description: "Incredibly noticeable achievement",
      impact: "High",
      effort: "Worth it",
      color: "green"
    },
    {
      stage: "Something to Perfect", 
      description: "Usually a gigantic waste of time",
      impact: "Low",
      effort: "Not worth it",
      color: "red"
    }
  ];

  const mindsetShifts = [
    {
      problem: "Seems unsolvable",
      solution: "Another entrepreneur has solved it",
      icon: Users
    },
    {
      problem: "Appears insurmountable", 
      solution: "The solution is often easy af!",
      icon: Lightbulb
    },
    {
      problem: "Getting stuck on details",
      solution: "Don't get stuck on any one scary thing",
      icon: Zap
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
              Day 11
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Business Formation - Keep It Simple & Legal
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Building className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 11 of 27</span>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed">
            Time to make it official! Today we're covering business formation - the legal structure that protects you and makes everything legitimate. <span className="text-yellow-300 font-bold">Keep it simple, keep it moving.</span>
          </p>
        </div>

        {/* LLC Recommendation */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why I Choose LLC Every Time</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">My Go-To Structure</h3>
            <p className="text-green-700 mb-4">
              So typically for these simple businesses I do an <strong>LLC</strong>. That's me.
            </p>
            <p className="text-green-600">
              Again do whatever works for you (better yet consult a professional on this).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {llcBenefits.map((benefit, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-blue-800 font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">LLC + EIN = You're Set</h3>
            <p className="text-yellow-700">
              Easy to maintain, not as many annual requirements, and kind of stress free way of doing it.
            </p>
          </div>
        </div>

        {/* Formation Process */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 4-Step Formation Process</h2>
          
          <div className="space-y-6 mb-8">
            {businessFormationSteps.map((step) => (
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

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">The Reality</h3>
            <p className="text-green-100 text-lg">
              The application is literally and I do mean literally... about a <strong className="text-yellow-300">6 or 7 minute effort</strong>.
            </p>
            <p className="text-green-200 mt-2">
              One application, I chill for a week or two and I have my paperwork in hand and I'm ready to go.
            </p>
          </div>
        </div>

        {/* Recommended Services */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Formation Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <ExternalLink className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-blue-800">firstbase.io</h3>
              </div>
              <p className="text-blue-700 mb-4">
                They give you an LLC/Inc and the application is literally about a 6 or 7 minute effort.
              </p>
              <div className="bg-blue-100 p-3 rounded-lg">
                <p className="text-blue-800 font-semibold text-sm">Primary recommendation</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <ExternalLink className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-bold text-green-800">bizee.com</h3>
              </div>
              <p className="text-green-700 mb-4">
                Works perfectly fine as well. I've used both.
              </p>
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">Alternative option</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">No Affiliation</h3>
            <p className="text-gray-700">
              Those are just regular links, use either company or anything else that works. 
              Just sharing what I do for convenience.
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included in Your Package</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Business Documents</h3>
            <p className="text-purple-700 mb-4">
              And for one flat price, it comes with all the documents you need depending on what application you choose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {includedDocuments.map((doc, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-800 font-medium">{doc}</span>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-3">Business Bank Account</h3>
            <p className="text-orange-700">
              And with the application it comes with a business bank account already set up in your business name. 
              I go for convenience and keep it moving. Do you.
            </p>
          </div>
        </div>

        {/* Get Help */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Professional Help</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">I'm Not an Expert</h3>
            <p className="text-blue-700 mb-4">
              If you have questions, hit those cats up, or hit a professional up.
            </p>
            <p className="text-blue-600">
              I'm not an expert on this stuff, they have legal staff to help you and all sorts of resources that comes with your payment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Formation Services</h4>
              <p className="text-green-700 text-sm">Legal staff and resources included with your payment</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <Shield className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-bold text-purple-800 mb-2">Professional Consultation</h4>
              <p className="text-purple-700 text-sm">Consider consulting with a business attorney or accountant</p>
            </div>
          </div>
        </div>

        {/* Mindset Section */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center mb-6">
            <Zap className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Don't Get Stuck on Scary Things</h2>
          </div>
          
          <div className="space-y-4 mb-6">
            {mindsetShifts.map((shift, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <shift.icon className="h-6 w-6 text-yellow-300 mr-3" />
                    <span className="text-red-100">{shift.problem}</span>
                  </div>
                  <div className="text-yellow-300 font-bold">→</div>
                  <div className="text-yellow-200 font-semibold">{shift.solution}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-center text-lg font-semibold text-pink-100">
              Any problem that seems unsolvable, another entrepreneur has solved.
            </p>
            <p className="text-center text-xl font-bold text-yellow-300 mt-2">
              The solution is often easy af!
            </p>
          </div>
        </div>

        {/* Perfectionism Warning */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Random Thought: Perfectionism Kills Progress</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">Keep This in Mind</h3>
            <p className="text-orange-700">
              Perfectionism is the death of progress. As you're working through any large challenge like building a business, keep this in mind:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {perfectionism.map((stage, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                stage.color === 'green' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <h3 className={`text-lg font-bold mb-3 ${
                  stage.color === 'green' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {stage.color === 'green' ? '✅' : '❌'} {stage.stage}
                </h3>
                <p className={`mb-4 ${
                  stage.color === 'green' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {stage.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className={`p-3 rounded-lg text-center ${
                    stage.color === 'green' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <div className={`font-bold ${
                      stage.color === 'green' ? 'text-green-800' : 'text-red-800'
                    }`}>
                      Impact: {stage.impact}
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg text-center ${
                    stage.color === 'green' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <div className={`font-bold ${
                      stage.color === 'green' ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {stage.effort}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-4">The Goal</h3>
            <p className="text-center text-3xl font-bold text-yellow-300">
              Get to something good.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Keep It Moving</h2>
            <p className="text-lg text-green-100 mb-4">
              Okay bet, enjoy your day, don't get stuck on any one scary thing.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                Don't get stuck on things that seem insurmountable.
              </p>
              <p className="text-green-200 mt-2">
                The solution is often easy af!
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
            Next: Day 12 - Phone System
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day11;