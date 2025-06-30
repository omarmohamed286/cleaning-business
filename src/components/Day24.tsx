import React, { useEffect } from 'react';
import { ArrowLeft, Eye, TrendingUp, Users, DollarSign, Monitor, Palette, Target, CheckCircle, AlertTriangle, Lightbulb, Award, Zap, Globe, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day24() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const designEvolution = [
    {
      year: "2013",
      revenue: "$5,000 per month",
      cost: "$450 (broke after being laid off)",
      description: "First version of the site. Got a guy on scriptlance to do this.",
      problems: [
        "Huge overpowering logo that tried to be as literal as possible",
        "Logo took up too much real estate",
        "Zero human faces",
        "Poorly executed elements"
      ],
      positives: [
        "Large green 'Book Now' buttons above the fold",
        "Testimonials included",
        "Borrowed trust from established sites",
        "Good enough to compete and get jobs"
      ],
      icon: DollarSign,
      color: "red"
    },
    {
      year: "2014", 
      revenue: "$5,000 per week",
      cost: "Improved design investment",
      description: "Toned the logo down and improved copywriting.",
      problems: [
        "Still learning design principles",
        "Limited human faces (only one)"
      ],
      positives: [
        "Toned down logo significantly",
        "Improved copywriting",
        "Added pictures to testimonials (much more credible)",
        "Added more homely vibe",
        "Conversion rates way up"
      ],
      icon: TrendingUp,
      color: "orange"
    },
    {
      year: "2015",
      revenue: "$5,000 per day",
      cost: "Professional design investment",
      description: "Tested quite a few things and optimized for conversions.",
      problems: [
        "Continuous optimization needed"
      ],
      positives: [
        "Toned down logo even further",
        "Started checkout flow right on homepage",
        "Added Yelp review widget",
        "Showed customer ratings",
        "Borrowed trust from Washington Post",
        "Added mobile booking and live chat",
        "13 human faces total!",
        "Improved design layered over all elements"
      ],
      icon: Award,
      color: "green"
    }
  ];

  const designPrinciples = [
    {
      principle: "More Humans, More Money",
      description: "From zero human faces to 13 human faces - direct correlation with revenue growth",
      icon: Users,
      color: "blue"
    },
    {
      principle: "Above the Fold Checkout",
      description: "Start customers down the checkout flow immediately on homepage",
      icon: Target,
      color: "green"
    },
    {
      principle: "Social Proof Integration",
      description: "Yelp reviews, customer ratings, media mentions build trust",
      icon: Star,
      color: "purple"
    },
    {
      principle: "Mobile Optimization",
      description: "Mobile booking and responsive design for all devices",
      icon: Monitor,
      color: "orange"
    },
    {
      principle: "Live Chat Integration",
      description: "Immediate customer support and conversion assistance",
      icon: Users,
      color: "pink"
    },
    {
      principle: "Trust Borrowing",
      description: "Leverage established brands and media mentions for credibility",
      icon: Award,
      color: "indigo"
    }
  ];

  const conversionLoop = [
    { step: "Revenue", description: "Current business income", icon: DollarSign },
    { step: "Better Design", description: "Invest in improved conversion design", icon: Palette },
    { step: "More Revenue", description: "Increased conversions and sales", icon: TrendingUp },
    { step: "Better Design", description: "Reinvest in further optimization", icon: Eye },
    { step: "More Revenue", description: "Compound growth continues", icon: Award }
  ];

  const designTips = [
    {
      tip: "Separate Designer and Developer",
      description: "Never have the designer and developer be the same person",
      reasoning: "Like Apple hiring a designer for iPhone looks, then having same person build components. These are different skillsets.",
      icon: Users,
      color: "blue"
    },
    {
      tip: "Find Conversion-Focused Designers",
      description: "Designer must understand not only making things pretty, but how to get people to buy",
      reasoning: "They'll know pre-scroll buying techniques, pop-up strategies, and internet marketing tools.",
      icon: Target,
      color: "green"
    }
  ];

  const keyLearnings = [
    "Most of what I know about making money online I figured out from reading stuff online",
    "The last part is the most crucial: implementing every single thing I learned",
    "Design isn't the main reason this worked out, but 'design to convert' is ultra critical",
    "It's a feedback loop you have to do multiple times",
    "The goal is for every $1 spent in marketing, as many dollars as possible come back"
  ];

  const designMistakes = [
    {
      mistake: "Logo-First Approach",
      problem: "Getting logo done first and dedicating too much real estate",
      solution: "Logo is a little afterthought after everything else is done",
      icon: AlertTriangle
    },
    {
      mistake: "No Human Faces",
      problem: "Zero connection with potential customers",
      solution: "More humans = more money (proven correlation)",
      icon: Users
    },
    {
      mistake: "Poor Element Execution",
      problem: "Having right elements but executing them poorly",
      solution: "Focus on professional execution of proven elements",
      icon: Eye
    },
    {
      mistake: "Not Testing Iterations",
      problem: "Sticking with first version without optimization",
      solution: "Continuous testing and improvement over time",
      icon: TrendingUp
    }
  ];

  const conversionElements = [
    "Pre-scroll buying techniques",
    "Various pop-up types and strategies", 
    "Social proof integration",
    "Trust signals and credibility markers",
    "Mobile optimization",
    "Live chat functionality",
    "Clear call-to-action buttons",
    "Customer testimonials with photos"
  ];

  const businessPhilosophy = [
    {
      mindset: "No Emotional Attachment",
      description: "If we launch a company and it doesn't work, we just work on improving it. If it still doesn't work after a valid effort, we throw in the towel and launch something else.",
      icon: Target
    },
    {
      mindset: "Continuous Improvement",
      description: "Over time, the more we put things out the better we get and the more I trust myself to keep investing in ME.",
      icon: TrendingUp
    },
    {
      mindset: "Systematic Approach",
      description: "If I do this, this, and this, in this way, and work with this person and be relentless for like a year, we have a really good chance of making this work!",
      icon: Zap
    }
  ];

  const lazyPhilosophy = [
    "If your design doesn't connect you're going to have to work harder for customers",
    "And I'm way too lazy for that!",
    "Better to invest in good design upfront than work 10x harder later"
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
              Day 24
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Design for Conversions - A Visual Journey to $20M
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
            <Eye className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 24 of 27</span>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">A Visual Journey!</h2>
            <p className="text-lg text-purple-100 mb-4">
              Most of what I know about making money online I've figured out from reading stuff online.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                Made me think to post about my transition to getting better at internet marketing by looking at the designs of one of my companies.
              </p>
            </div>
          </div>
        </div>

        {/* Background Context */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Background & Learning Journey</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">From Corporate to Entrepreneur</h3>
            <p className="text-blue-700 mb-4">
              So my background is in Accounting/Finance. That was my career out of college and for the next 10 years after graduating I worked in corporate America with my soul being slowly stripped from me.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold">
                I figured out this marketing stuff to get away from that by reading every internet marketing blog I could find and implementing every single thing I learned.
              </p>
              <p className="text-blue-600 text-sm mt-2">The last part is the most crucial.</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-2">Recent Conversation</h3>
            <p className="text-green-700 italic">
              "Legit recent conversation I had. Made me think to post a bit about my transition to getting better at internet marketing by looking at the designs of one of my companies."
            </p>
          </div>
        </div>

        {/* Visual Walk Back in Time */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">A Little Visual Walk Back in Time</h2>
          
          <p className="text-gray-700 mb-6">
            Peep the design each year and where I was at with revenue:
          </p>

          <div className="space-y-8">
            {designEvolution.map((period, index) => (
              <div key={index} className={`bg-${period.color}-50 border-l-4 border-${period.color}-500 p-8 rounded-r-lg`}>
                <div className="flex items-start">
                  <period.icon className={`h-12 w-12 text-${period.color}-600 mr-6 mt-2 flex-shrink-0`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-2xl font-bold text-${period.color}-800`}>
                        {period.year}
                      </h3>
                      <div className={`bg-${period.color}-600 text-white px-4 py-2 rounded-full`}>
                        <span className="font-bold">{period.revenue}</span>
                      </div>
                    </div>
                    
                    <p className={`text-${period.color}-700 mb-4 font-medium`}>
                      {period.description}
                    </p>
                    
                    <div className={`bg-${period.color}-100 p-4 rounded-lg mb-4`}>
                      <p className={`text-${period.color}-800 font-semibold`}>
                        Cost: {period.cost}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-100 p-4 rounded-lg">
                        <h4 className="font-bold text-red-800 mb-3">❌ Problems</h4>
                        <ul className="text-red-700 text-sm space-y-1">
                          {period.problems.map((problem, pIndex) => (
                            <li key={pIndex} className="flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              {problem}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-green-100 p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-3">✅ What Worked</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          {period.positives.map((positive, pIndex) => (
                            <li key={pIndex} className="flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {positive}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Design Principles */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Design Principles That Drive Revenue</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {designPrinciples.map((principle, index) => (
              <div key={index} className={`bg-${principle.color}-50 p-6 rounded-lg hover:bg-${principle.color}-100 transition-colors duration-200`}>
                <div className="flex items-start">
                  <principle.icon className={`h-8 w-8 text-${principle.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`font-bold text-${principle.color}-800 mb-2`}>
                      {principle.principle}
                    </h3>
                    <p className={`text-${principle.color}-700 text-sm`}>
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Conversion Loop */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Revenue → Design → Revenue Loop</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">The Feedback Loop</h3>
            <p className="text-purple-700">
              "Design to convert" is an ultra critical step that ends up being like a feedback loop that you have to do multiple times. It looks like this:
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            {conversionLoop.map((step, index) => (
              <React.Fragment key={index}>
                <div className="bg-blue-50 p-6 rounded-lg text-center min-w-[150px]">
                  <step.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-blue-800 mb-1">{step.step}</div>
                  <div className="text-blue-600 text-xs">{step.description}</div>
                </div>
                {index < conversionLoop.length - 1 && (
                  <div className="text-2xl font-bold text-blue-600">→</div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">...and on and on!</h3>
            <p className="text-green-100 text-center">
              The goal with this is for every $1 you spend in marketing as many dollars as possible come back.
            </p>
          </div>
        </div>

        {/* Design Mistakes to Avoid */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Design Mistakes I Made</h2>
          
          <div className="space-y-6">
            {designMistakes.map((mistake, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <mistake.icon className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-red-800 mb-2">{mistake.mistake}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-1">Problem:</h4>
                        <p className="text-red-700 text-sm">{mistake.problem}</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-1">Solution:</h4>
                        <p className="text-green-700 text-sm">{mistake.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for a Dope Design Outcome</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Disclaimer</h3>
            <p className="text-yellow-700">
              As a rule this is more to share what we do and less to say what you should do. If what you're doing works, keep at it! But for us:
            </p>
          </div>

          <div className="space-y-6">
            {designTips.map((tip, index) => (
              <div key={index} className={`bg-${tip.color}-50 border-l-4 border-${tip.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <tip.icon className={`h-8 w-8 text-${tip.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`text-xl font-bold text-${tip.color}-800 mb-3`}>
                      {tip.tip}
                    </h3>
                    <p className={`text-${tip.color}-700 mb-3`}>
                      {tip.description}
                    </p>
                    <div className={`bg-${tip.color}-100 p-4 rounded-lg`}>
                      <p className={`text-${tip.color}-800 text-sm italic`}>
                        {tip.reasoning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Elements */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Conversion Elements</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">What Conversion-Focused Designers Know</h3>
            <p className="text-blue-700">
              Solid designers these days are going to have some internet marketing tools in their back pockets as well.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {conversionElements.map((element, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-green-800 font-medium">{element}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
          
          <div className="space-y-4">
            {keyLearnings.map((learning, index) => (
              <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                <Lightbulb className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800 font-medium">{learning}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business Philosophy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Philosophy & Mindset</h2>
          
          <div className="space-y-6">
            {businessPhilosophy.map((philosophy, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <philosophy.icon className="h-8 w-8 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-purple-800 mb-3">{philosophy.mindset}</h3>
                    <p className="text-purple-700">{philosophy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Lazy Philosophy */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Zap className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">My "Lazy" Philosophy</h2>
            <div className="space-y-4">
              {lazyPhilosophy.map((point, index) => (
                <p key={index} className="text-lg text-orange-100">
                  {point}
                </p>
              ))}
            </div>
            <div className="bg-white/10 p-6 rounded-lg mt-6">
              <p className="text-2xl font-bold text-yellow-300">
                ***If your design doesn't connect you're going to have to work harder for customers...and I'm way too lazy for that! ***
              </p>
            </div>
          </div>
        </div>

        {/* Journey Reflection */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Globe className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The Journey Continues</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-lg text-green-100 mb-4">
                My main takeaway in my head as I was writing this is that this online thing is a journey.
              </p>
              <p className="text-xl font-bold text-yellow-300 mb-4">
                The chance of the first thing you put out being amazing is pretty slim.
              </p>
              <p className="text-green-200">
                Don't sweat it. You see how bad my stuff was lol but over time I got better.
              </p>
            </div>
            <p className="text-green-100">
              (And I'm sure I still have a ton of things to improve upon)
            </p>
          </div>
        </div>

        {/* Trust Building */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Building Trust in Yourself</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">No Emotional Attachment</h3>
            <p className="text-blue-700 mb-4">
              And of course, if we launch a company and it doesn't work, we just work on improving it. If it still doesn't work after a valid effort, we throw in the towel and launch something else. <strong>No emotional attachment!</strong>
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-3">Building Confidence</h3>
            <p className="text-green-700 mb-4">
              Over time, the more we put things out the better we get and the more I trust myself to keep investing in ME. And not in a way like "I know I got this" but in a way like:
            </p>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-semibold italic">
                "If I do this, this, and this, in this way, and work with this person and be relentless for like a year, we have a really good chance of making this work!"
              </p>
            </div>
            <p className="text-green-600 mt-3 text-center font-bold">
              And off we go!
            </p>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-purple-800 mb-3">Conversion Template</h3>
              <p className="text-purple-700 mb-4">
                I posted this before but here's a template I created to show how we think about designing stuff for conversion:
              </p>
              <div className="bg-purple-100 p-3 rounded-lg">
                <p className="text-purple-800 font-semibold">Design Template Available</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Y Combinator Companies</h3>
              <p className="text-blue-700 mb-4">
                List of Ycombinator companies that you can use to get design inspiration. Find your industry or something close to it:
              </p>
              <div className="bg-blue-100 p-3 rounded-lg">
                <p className="text-blue-800 font-semibold">yclist.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Award className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Hope This Is Helpful</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-purple-100 mb-4">
                One thing is certain: If your design doesn't connect you're going to have to work harder for customers...
              </p>
              <p className="text-xl font-bold text-yellow-300">
                And I'm way too lazy for that!
              </p>
            </div>
            <p className="text-purple-200 mt-4">
              See you tomorrow!
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day23')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 23
          </button>
          <button
            onClick={() => navigate('/day25')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 25 - $10K in Revenue from One Email Blast
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day24;