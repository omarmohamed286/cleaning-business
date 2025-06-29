import React, { useEffect } from 'react';
import { ArrowLeft, Globe, Search, CheckCircle, AlertTriangle, Target, Lightbulb, ExternalLink } from 'lucide-react';

interface Day3Props {
  onBack: () => void;
}

function Day3({ onBack }: Day3Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const domainExamples = [
    { first: "Clean", second: "Crew", result: "CleanCrew.com" },
    { first: "Sparkle", second: "Green", result: "SparkleGreen.com" },
    { first: "Fresh", second: "Tribe", result: "FreshTribe.com" },
    { first: "Gleam", second: "Happy", result: "GleamHappy.com" }
  ];

  const researchChecklist = [
    "Is there another company that uses a similar name?",
    "Is there a company that used a similar name but is no longer in business?",
    "Can you find an existing trademark on that name or a similar one?",
    "Does the domain have any negative history or associations?"
  ];

  const mythBusters = [
    {
      myth: "Market Validation",
      reality: "Validation is for fantasy ideas. Build companies that have already been validated.",
      icon: Target
    },
    {
      myth: "Market Saturation", 
      reality: "Markets are often saturated with bad players making lots of money. A bootstrapper's dream!",
      icon: AlertTriangle
    },
    {
      myth: "60-Page Business Plans",
      reality: "Use a one-page business plan and get to work. Action beats analysis paralysis.",
      icon: CheckCircle
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
              Day 3
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              How To Choose Your Domain
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-orange-400 mr-3" />
            <span className="text-xl font-bold">Day 3 of 27</span>
          </div>
          <p className="text-lg text-purple-100 leading-relaxed mb-4">
            We're choosing our domain name! Not super critical in our success so don't get stuck on it, but it's important enough to spend some time on it since it's going to be with you hopefully for years to come.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-xl font-bold text-yellow-300 text-center">
              Biggest Takeaway: Keep it Simple!
            </p>
          </div>
        </div>

        {/* Domain Formula */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Two-Word Domain Formula</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Word 1: What You Do</h3>
              <div className="flex flex-wrap gap-2">
                {["Cleaning", "Maids", "Clean", "Sparkle", "Mop", "Fresh", "Gleam"].map((word, index) => (
                  <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-4">Word 2: Anything Short & Sweet</h3>
              <div className="flex flex-wrap gap-2">
                {["Tribe", "Crew", "Green", "NYC", "Happy", "Enjoy", "Pro", "Plus"].map((word, index) => (
                  <span key={index} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Combinations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {domainExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-l-full font-medium">
                      {example.first}
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-r-full font-medium">
                      {example.second}
                    </span>
                  </div>
                  <div className="text-center mt-2 font-bold text-gray-800">
                    {example.result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h3 className="text-lg font-bold text-orange-800 mb-2">Domain Extension Preference</h3>
            <p className="text-orange-700">
              Get a <strong>.com</strong> if at all possible (that's what your customer expects). 
              If it were a SaaS company .io or .co is fine, but for local I lean towards .com.
            </p>
          </div>
        </div>

        {/* Keep It Simple */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Keep It Simple</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-bold text-red-800 mb-3">❌ Don't Do This</h4>
              <ul className="text-red-700 space-y-2">
                <li>• Kaleidoscope Maids</li>
                <li>• Extraordinary Cleaning Solutions</li>
                <li>• Sophisticated Service Systems</li>
                <li>• Words nobody can spell</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-800 mb-3">✅ Do This Instead</h4>
              <ul className="text-green-700 space-y-2">
                <li>• Simple words</li>
                <li>• Easy to spell</li>
                <li>• Easy to remember</li>
                <li>• A 7-year-old could spell it</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Recommended Tool
            </h3>
            <p className="text-blue-700 mb-3">
              Use whatever you like, but I recommend <strong>leandomainsearch.com</strong> (no affiliation).
            </p>
            <p className="text-blue-600 text-sm">
              Put one word in there from your list, and it will recommend second words. You can sort by length and see what you find.
            </p>
          </div>
        </div>

        {/* Research Your Domain */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">After You Find a Domain - Do Your Research</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Due Diligence Checklist</h3>
            <div className="space-y-3">
              {researchChecklist.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-yellow-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-red-800 mb-2">⚠️ Proceed with Caution</h3>
            <p className="text-red-700">
              For anything even remotely close, find something else. Nobody wants to build a million dollar company and then realize you're getting bad reviews meant for another company, or having a trademark fight.
            </p>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Lightbulb className="h-8 w-8 text-green-200 mr-3" />
            <h3 className="text-xl font-bold">Another Success Story</h3>
          </div>
          <p className="text-green-100 mb-4">
            As usual along this journey, I'll keep introducing you to redditors that did this using the same information I'm giving you here for free from my previous case study.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-green-100 italic">
              "These are regular people who followed the exact same steps you're learning right now."
            </p>
          </div>
        </div>

        {/* Myth Busters */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Addressing Common Concerns</h2>
          
          <div className="space-y-6">
            {mythBusters.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <item.icon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-800 mb-2">"{item.myth}"</h3>
                    <p className="text-blue-700">{item.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-3">My Simple Analysis Framework</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">✓</div>
                <div className="text-sm text-purple-700">Are lots of people making money doing this?</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">✓</div>
                <div className="text-sm text-purple-700">Is the startup cost low?</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">✗</div>
                <div className="text-sm text-purple-700">Is there sorcery involved?</div>
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-lg font-bold text-purple-800">Yes, Yes, No? → Let's go! 🚀</span>
            </div>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6">Final Thoughts</h2>
          
          <div className="space-y-4 text-gray-200">
            <p>
              <strong className="text-white">Start Something</strong> if you've always wanted to be an entrepreneur.
            </p>
            <p>
              You don't get good at running marathons by reading about running marathons. And you don't get good at business by reading about business.
            </p>
            <p className="text-xl font-semibold text-orange-400">
              You get good by doing.
            </p>
            <p>
              So that's why I write content like this. It's all about Action! And even if you don't build a local service business, maybe by just reading this you'll see that any business you see is a result of some random person who woke up and did the work, went to sleep and woke up and did the work again.
            </p>
            <p className="text-center text-2xl font-bold text-yellow-300 mt-6">
              No magic required.
            </p>
          </div>
        </div>

        {/* Reminder */}
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-orange-800 mb-2">Reminder</h3>
          <p className="text-orange-700">
            I'm laying out how me and a gazillion other people have done this. Do what works for you. 
            I'm sharing transparently what has worked - if you have a better way, do that. If you have a better tool, use that.
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
            Next: Day 4 - Website and Elements
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day3;