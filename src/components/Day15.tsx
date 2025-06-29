import React, { useEffect } from 'react';
import { ArrowLeft, Users, MessageCircle, Search, FileText, Video, CheckCircle, ExternalLink, Lightbulb, TrendingUp, Globe, Target } from 'lucide-react';

interface Day15Props {
  onBack: () => void;
}

function Day15({ onBack }: Day15Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facebookGroupStrategy = [
    {
      step: 1,
      title: "Search for Moms Groups",
      description: "Do a search for moms group in your city and you'll likely find multiple results",
      icon: Search,
      color: "blue"
    },
    {
      step: 2,
      title: "Join and Ask",
      description: "Pop in and ask if anyone knows a good home cleaner",
      icon: MessageCircle,
      color: "green"
    },
    {
      step: 3,
      title: "Get Multiple Results",
      description: "Chances are you'll get multiple results and then you can message the cleaner",
      icon: Users,
      color: "purple"
    }
  ];

  const hiringPlatforms = [
    {
      platform: "Facebook Groups",
      type: "Moms Groups",
      description: "Local community groups where people share recommendations",
      effectiveness: "High quality referrals",
      icon: MessageCircle,
      color: "blue"
    },
    {
      platform: "Craigslist",
      type: "Gigs Section",
      description: "Post in gigs section and reach out to folks offering services",
      effectiveness: "Large volume of candidates",
      icon: Search,
      color: "orange"
    },
    {
      platform: "Spreadsheet Tracking",
      type: "Organization Tool",
      description: "Collect folks in a spreadsheet to stay organized",
      effectiveness: "Systematic approach",
      icon: FileText,
      color: "green"
    }
  ];

  const remoteTools = [
    {
      tool: "Zoom",
      purpose: "Remote interviews",
      description: "Interview candidates remotely if you prefer",
      icon: Video,
      color: "blue"
    },
    {
      tool: "HelloSign / Dropbox Sign",
      purpose: "Digital signatures",
      description: "Sign contracts, welcome docs etc. with free tier available",
      icon: FileText,
      color: "green"
    }
  ];

  const keyInsights = [
    "This stuff is doable and it's really nothing to overthink",
    "There are hundreds of folks out there that are ready and willing to work with you",
    "Don't get overwhelmed by the tools - use them to be seamless at volume",
    "Goal is to have things be as seamless as possible when we hit volume"
  ];

  const realExamples = [
    {
      platform: "Facebook Moms Group",
      approach: "Asked for home cleaner recommendations",
      result: "Multiple responses with contact information",
      example: "Two actual examples of us doing it successfully"
    },
    {
      platform: "Craigslist Gigs",
      approach: "Posted job listing and reached out to service providers",
      result: "Built database of potential team members",
      example: "Systematic collection in spreadsheet format"
    }
  ];

  const toolPhilosophy = [
    "We do use tools in building these companies",
    "Our goal is to have things be as seamless as possible when we hit volume",
    "I'll share everything with you that I can",
    "Don't get overwhelmed - start simple and scale up"
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
              Day 15
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              More Team Finding Strategies - Hiring Day 2
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 15 of 27</span>
          </div>
          <p className="text-lg text-green-100 leading-relaxed mb-4">
            So yesterday we went through Day 1 on how we find service providers. Since this is an important part of building these businesses, I thought we would run it back and do a day 2.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-xl font-bold text-yellow-300 text-center">
              Today we'll go through a few more examples to show you this is actually super doable.
            </p>
          </div>
        </div>

        {/* Facebook Groups Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Facebook Groups - The Hidden Goldmine</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Moms Groups</h3>
            <p className="text-blue-700">
              So one spot that we like to always take a look at is Facebook Groups.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {facebookGroupStrategy.map((step) => (
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
            <h3 className="text-lg font-bold text-green-800 mb-3">Real Success Examples</h3>
            <p className="text-green-700 mb-4">
              Here's two actual examples of us doing it...
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Example 1</h4>
                <p className="text-green-700 text-sm">Posted in local moms group asking for cleaner recommendations</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Example 2</h4>
                <p className="text-green-700 text-sm">Got multiple responses with contact information</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Key Insight</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                So I wanted to share this so folks realize that this stuff is doable and it's really nothing to overthink.
              </p>
              <p className="text-lg text-purple-100">
                There are hundreds of folks out there that are ready and willing to work with you.
              </p>
            </div>
          </div>
        </div>

        {/* Craigslist Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Good Ole Craigslist</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">Another Dope Spot</h3>
            <p className="text-orange-700 mb-4">
              Another dope spot that folks are sometimes cautious about...
            </p>
            <p className="text-orange-600">
              We like to post in the gigs section and even reach out to folks that have posted in there offering their services.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Two-Way Strategy</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">Post Jobs</h4>
                <p className="text-blue-700 text-sm">Post in the gigs section to attract service providers</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">Reach Out</h4>
                <p className="text-blue-700 text-sm">Contact folks who have posted offering their services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Tools */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Stay Organized with Tools</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Spreadsheet Tracking</h3>
            <p className="text-green-700 mb-4">
              Then you can start to collect folks in a spreadsheet.
            </p>
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="flex items-center">
                <ExternalLink className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-800 font-semibold">Here's one you can use</span>
              </div>
              <p className="text-green-600 text-sm mt-2">Google Sheets template for tracking candidates</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {remoteTools.map((tool, index) => (
              <div key={index} className={`bg-${tool.color}-50 p-6 rounded-lg`}>
                <div className="flex items-center mb-4">
                  <tool.icon className={`h-8 w-8 text-${tool.color}-600 mr-3`} />
                  <div>
                    <h3 className={`text-lg font-bold text-${tool.color}-800`}>{tool.tool}</h3>
                    <p className={`text-${tool.color}-600 text-sm`}>{tool.purpose}</p>
                  </div>
                </div>
                <p className={`text-${tool.color}-700`}>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Remote Interview Process */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Remote Interview Process</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">If You're Like Me</h3>
            <p className="text-purple-700">
              And if you're like me and you interview remotely we use tools like Zoom and online signature tools like Hellosign to sign contracts, welcome docs etc.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Free Tier Available</h3>
            <p className="text-blue-700 mb-4">
              There's a free tier available for most of these tools to get started.
            </p>
            <div className="flex items-center">
              <ExternalLink className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">sign.dropbox.com/features/sign-and-fill-pdf-document</span>
            </div>
          </div>
        </div>

        {/* Don't Get Overwhelmed */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Target className="h-12 w-12 text-yellow-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Don't Get Overwhelmed</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-xl font-bold text-yellow-200 mb-4">
                So I'll slow down here and say, don't get overwhelmed.
              </p>
              <p className="text-orange-100">
                We do use tools in building these companies because our goal is to have things be as seamless as possible when we hit volume.
              </p>
            </div>
            <p className="text-lg text-orange-100">
              And as usual I'll share everything with you that I can.
            </p>
          </div>
        </div>

        {/* Tool Philosophy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Tool Philosophy</h2>
          
          <div className="space-y-4 mb-6">
            {toolPhilosophy.map((point, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800">{point}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-2">The Goal</h3>
            <p className="text-blue-700">
              Our goal is to have things be as seamless as possible when we hit volume.
            </p>
          </div>
        </div>

        {/* Key Insights Summary */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
          
          <div className="space-y-4">
            {keyInsights.map((insight, index) => (
              <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-0.5 flex-shrink-0 text-sm">
                  {index + 1}
                </div>
                <span className="text-green-800 font-medium">{insight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Update */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">We're Into the Second Half</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-blue-100 mb-4">
                So we're into the second half of this, but more fun stuff to come.
              </p>
              <p className="text-xl font-bold text-yellow-300">
                Short and sweet for today but I'll dig in deeper tomorrow, long post on the way then!
              </p>
            </div>
          </div>
        </div>

        {/* Real Examples Summary */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Examples That Work</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {realExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{example.platform}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm">Approach:</h4>
                    <p className="text-gray-600 text-sm">{example.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm">Result:</h4>
                    <p className="text-gray-600 text-sm">{example.result}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-blue-800 font-medium text-sm">{example.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Platforms Summary */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Summary</h2>
          
          <div className="space-y-6">
            {hiringPlatforms.map((platform, index) => (
              <div key={index} className={`bg-${platform.color}-50 border-l-4 border-${platform.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <platform.icon className={`h-8 w-8 text-${platform.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-lg font-bold text-${platform.color}-800`}>
                        {platform.platform}
                      </h3>
                      <span className={`bg-${platform.color}-100 text-${platform.color}-800 px-3 py-1 rounded-full text-sm font-medium`}>
                        {platform.type}
                      </span>
                    </div>
                    <p className={`text-${platform.color}-700 mb-2`}>
                      {platform.description}
                    </p>
                    <div className={`bg-${platform.color}-100 px-3 py-1 rounded-full inline-block`}>
                      <span className={`text-${platform.color}-800 font-medium text-sm`}>
                        {platform.effectiveness}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tomorrow Preview */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <Globe className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">What's Coming Tomorrow</h3>
            <p className="text-gray-700 mb-4">
              Long post on the way with deeper insights and more advanced strategies.
            </p>
            <p className="text-blue-600 font-semibold">
              More fun stuff to come!
            </p>
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
            Next: Day 16 - Insurance
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day15;