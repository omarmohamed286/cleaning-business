import React, { useEffect } from 'react';
import { ArrowLeft, Wrench, Globe, CreditCard, Mail, MessageCircle, Shield, Phone, Users, DollarSign, BarChart3, Cloud, Building, Search, Target, CheckCircle, ExternalLink, Lightbulb, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day26() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toolCategories = [
    {
      category: "Website & Content",
      tools: [
        { name: "WordPress", url: "wordpress.com", description: "Content management system", icon: Globe, color: "blue" },
        { name: "ConvertLabs", url: "convertlabs.io/30daysfree", description: "Website themes & booking forms", icon: Target, color: "green" }
      ]
    },
    {
      category: "Payments & Finance",
      tools: [
        { name: "Stripe", url: "stripe.com", description: "Payment processing", icon: CreditCard, color: "purple" },
        { name: "Gusto", url: "gusto.com", description: "Payroll management", icon: DollarSign, color: "orange" }
      ]
    },
    {
      category: "Communication",
      tools: [
        { name: "Mailchimp", url: "mailchimp.com", description: "Email marketing", icon: Mail, color: "yellow" },
        { name: "Tawk.to", url: "tawk.to", description: "Live chat", icon: MessageCircle, color: "green" },
        { name: "OpenPhone", url: "openphone.com", description: "Business phone system", icon: Phone, color: "blue" },
        { name: "Google Workspace", url: "workspace.google.com", description: "Business email", icon: Mail, color: "red" }
      ]
    },
    {
      category: "Business Operations",
      tools: [
        { name: "Thimble", url: "thimble.com", description: "Insurance", icon: Shield, color: "indigo" },
        { name: "Foxquilt", url: "foxquilt.com", description: "Insurance alternative", icon: Shield, color: "purple" },
        { name: "Basecamp", url: "basecamp.com", description: "Project management", icon: Users, color: "green" }
      ]
    },
    {
      category: "Business Formation",
      tools: [
        { name: "Bizee", url: "bizee.com", description: "Business incorporation", icon: Building, color: "blue" },
        { name: "Firstbase", url: "firstbase.io", description: "Business incorporation alternative", icon: Building, color: "purple" }
      ]
    },
    {
      category: "Development & Analytics",
      tools: [
        { name: "Upwork", url: "upwork.com", description: "Development work", icon: Users, color: "green" },
        { name: "Google Analytics", url: "marketingplatform.google.com/about/analytics/", description: "Website analytics", icon: BarChart3, color: "orange" },
        { name: "Baremetrics", url: "baremetrics.com", description: "Subscription analytics", icon: BarChart3, color: "blue" },
        { name: "AWS", url: "aws.amazon.com", description: "Specialized hosting for bigger platforms", icon: Cloud, color: "yellow" }
      ]
    },
    {
      category: "Research",
      tools: [
        { name: "Google", url: "google.com", description: "Plain 'ole Google for research", icon: Search, color: "red" }
      ]
    }
  ];

  const businessEssentials = [
    "Fantastic looking homepage",
    "Gift cards functionality", 
    "Seamless online booking",
    "Credit card processing",
    "Automated recurring bookings",
    "Good phone/text support",
    "Solid operations"
  ];

  const keyInsights = [
    "No over-analysis is needed!",
    "Choose one and get to work!",
    "Results won't take you from 10% to 80% chance of winning",
    "Probably increases your chances by 1%",
    "All the work is still ahead of you",
    "Everything above has a track record of working"
  ];

  const successMetrics = [
    { metric: "Total Sales", value: "$20M+", description: "Using these exact tools" },
    { metric: "Jobs Completed", value: "100,000+", description: "Processed through these systems" },
    { metric: "Tools Tested", value: "Gazillion", description: "These rose to the top" },
    { metric: "Success Rate", value: "99%", description: "Will work for most use cases" }
  ];

  const toolPhilosophy = [
    {
      principle: "Track Record Matters",
      description: "Everything listed has a proven track record of working",
      icon: CheckCircle
    },
    {
      principle: "Don't Over-Analyze",
      description: "Choose one and get to work - analysis paralysis kills progress",
      icon: Target
    },
    {
      principle: "1% Impact Rule",
      description: "Tool choice probably increases winning chances by only 1%",
      icon: BarChart3
    },
    {
      principle: "Work Still Ahead",
      description: "Tools don't do the work - you still need to execute",
      icon: Wrench
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
              Day 26
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Tools We Use - The No Explanation Post
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
            <Wrench className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 26 of 27</span>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">The No Explanation Post of What I Use</h2>
            <p className="text-lg text-blue-100 mb-4">
              So folks usually hit me up to ask what products/services we use for a variety of things. After <span className="text-yellow-300 font-bold">$20 million in sales</span> and over <span className="text-yellow-300 font-bold">100,000 jobs done</span>, I've tried a ton of things along the way.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                Here's the things that have risen to the top after trying a gazillion options on this journey.
              </p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proven at Scale</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="font-semibold text-blue-800 mb-1">{metric.metric}</div>
                <div className="text-sm text-blue-600">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="text-lg font-bold text-green-800 mb-2">Will They Work for You?</h3>
            <p className="text-green-700">
              I'd bet you'll be fine for 99% of use cases.
            </p>
          </div>
        </div>

        {/* Tools by Category */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Complete Tool Stack</h2>
          
          <div className="space-y-8">
            {toolCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className={`bg-${tool.color}-50 p-6 rounded-lg hover:bg-${tool.color}-100 transition-colors duration-200`}>
                      <div className="flex items-start">
                        <tool.icon className={`h-8 w-8 text-${tool.color}-600 mr-4 mt-1 flex-shrink-0`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className={`font-bold text-${tool.color}-800`}>{tool.name}</h4>
                            <ExternalLink className={`h-4 w-4 text-${tool.color}-600`} />
                          </div>
                          <p className={`text-${tool.color}-700 text-sm mb-2`}>{tool.description}</p>
                          <div className={`bg-${tool.color}-100 p-2 rounded text-xs`}>
                            <code className={`text-${tool.color}-800`}>{tool.url}</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tool Philosophy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Tool Selection Philosophy</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {toolPhilosophy.map((philosophy, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <philosophy.icon className="h-8 w-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{philosophy.principle}</h3>
                    <p className="text-gray-600 text-sm">{philosophy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The Reality About Tool Choice</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <p className="text-lg text-orange-100 mb-4">
                In most cases though, no over-analysis is needed!
              </p>
              <p className="text-xl font-bold text-yellow-300 mb-4">
                Choose one of these bad boys and get to work!
              </p>
            </div>
            <div className="space-y-3">
              {keyInsights.map((insight, index) => (
                <p key={index} className="text-orange-100">
                  {insight}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Reality Check */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 1% Impact Rule</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Tool Choice Impact</h3>
            <p className="text-yellow-700 mb-4">
              The results of your decisions here won't take you from a 10% chance of winning to 80%.
            </p>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-yellow-800 font-bold text-center">
                It probably increases your chances of winning by 1%.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">What Really Matters</h3>
            <p className="text-blue-700 mb-4">
              That's the impact of any of these decisions as far as I'm concerned. So just grab what has a track record of working (and everything above does) and get to work.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold text-center">
                All the work is still ahead of you.
              </p>
            </div>
          </div>
        </div>

        {/* Business Essentials */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Actually Need</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">At the End of the Day</h3>
            <p className="text-green-700">
              At the end of the day you need:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {businessEssentials.map((essential, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-blue-800 font-medium">{essential}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">Competitive Advantage</h3>
            <p className="text-green-100 text-center mb-4">
              Get those and you're already ahead of 99% of your competition.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 text-center">
                Everything else is icing on the cake.
              </p>
            </div>
          </div>
        </div>

        {/* Expandable List */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h3 className="text-lg font-bold text-purple-800 mb-2">Living Document</h3>
            <p className="text-purple-700">
              I'll stop there, but I'll add to this list as stuff comes to me.
            </p>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alternative Approaches</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Search className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">Research for 45 Days</h4>
              <p className="text-blue-700 text-sm">Analyze every possible option</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Find Something Better</h4>
              <p className="text-green-700 text-sm">Use what works for you</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <Wrench className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-bold text-orange-800 mb-2">Grab These & Move On</h4>
              <p className="text-orange-700 text-sm">Get your tools and keep building</p>
            </div>
          </div>
        </div>

        {/* Final Day Preview */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">ONE MORE DAY TO GO!</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                Got y'all tomorrow!
              </p>
              <p className="text-lg text-purple-100">
                We're at the finish line of this incredible 27-day journey.
              </p>
            </div>
          </div>
        </div>

        {/* Tool Categories Summary */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Tool Categories</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">Website & Content</h4>
              <p className="text-blue-700 text-sm">WordPress, ConvertLabs</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Payments & Finance</h4>
              <p className="text-green-700 text-sm">Stripe, Gusto</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-purple-800 mb-2">Communication</h4>
              <p className="text-purple-700 text-sm">Mailchimp, Tawk.to, OpenPhone</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <Shield className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-bold text-orange-800 mb-2">Business Ops</h4>
              <p className="text-orange-700 text-sm">Insurance, Project Management</p>
            </div>
          </div>
        </div>

        {/* Final Wisdom */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The Bottom Line</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-gray-200 mb-4">
                Everything listed above has a track record of working.
              </p>
              <p className="text-xl font-bold text-yellow-300 mb-4">
                Just grab what works and get to building!
              </p>
              <p className="text-gray-300">
                The tools don't make the business - your execution does.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day25')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 25
          </button>
          <button
            onClick={() => navigate('/day27')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 27 - Let's Do It for You
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day26;