import React, { useEffect } from 'react';
import { ArrowLeft, Mail, DollarSign, Zap, Target, TrendingUp, CheckCircle, AlertTriangle, Lightbulb, Award, Clock, Users, Eye, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day25() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const emailCampaignResults = [
    { metric: "Open Rate", value: "41%", description: "Industry average is 20-25%" },
    { metric: "Total Opens", value: "1,685", description: "People who opened the email" },
    { metric: "Jobs Booked", value: "77", description: "Direct conversions from email" },
    { metric: "Average Job Value", value: "$134", description: "Revenue per booking" },
    { metric: "Total Revenue", value: "$10,300", description: "From one email blast" },
    { metric: "Conversion Rate", value: "~4%", description: "Of email opens converted to bookings" }
  ];

  const emailStrategy = [
    {
      step: 1,
      title: "Collect Emails Obsessively",
      description: "From customers who bought and checkout/subscriber flow visitors",
      icon: Users,
      color: "blue"
    },
    {
      step: 2,
      title: "Create Urgent, Short Email",
      description: "Use urgency (24 hours only) and keep it concise",
      icon: Clock,
      color: "orange"
    },
    {
      step: 3,
      title: "Punchy Subject Line",
      description: "Create urgency with 'Expires Tomorrow' type messaging",
      icon: Zap,
      color: "purple"
    },
    {
      step: 4,
      title: "Send and Track Results",
      description: "Monitor opens, clicks, and conversions",
      icon: Target,
      color: "green"
    }
  ];

  const badCTAs = [
    "SUBMIT",
    "SUBSCRIBE", 
    "SIGN UP"
  ];

  const goodCTAs = [
    "Stalk Us",
    "Become a Secret Agent",
    "Give Me The Goods",
    "Change My Life!",
    "Protect Your Assets",
    "Get Better Skin",
    "Make Your Dog Happy"
  ];

  const ctaProblems = [
    {
      cta: "SUBMIT",
      problem: "Sounds like the beginning of a masochistic relationship where you're asking someone to bend on one knee to be humiliated",
      solution: "Use something silly like 'Stalk Us' or 'Become a Secret Agent'",
      icon: AlertTriangle
    },
    {
      cta: "SUBSCRIBE",
      problem: "You could have well written SPAM ME, because that's how this feels",
      solution: "Say something like 'Give Me The Goods' - tells them what's in it for them",
      icon: Mail
    },
    {
      cta: "SIGN UP",
      problem: "No bueno. Doesn't tell visitor what's in it for them",
      solution: "Put what's in it for the customer: 'Protect Your Assets' or 'Get Better Skin'",
      icon: Users
    }
  ];

  const emailPower = [
    "Closest thing you have to ATMs in the internet marketing game",
    "Swipe your card (send an email) and get cash coming out the other end",
    "Nothing beats emails of past customers",
    "Email is the ruler of the freaking universe",
    "Makes us more money - that simple"
  ];

  const copywritingTips = [
    {
      tip: "Replace 'We', 'I', 'Visitors', 'Customers' with 'You' and 'Your'",
      reason: "Only one person is reading your site at any one time",
      example: "Speak directly to that one single person",
      icon: Users
    },
    {
      tip: "Tell visitors what's in it for them",
      reason: "People want to know the benefit before taking action",
      example: "Instead of 'Sign Up' use 'Get Better Results'",
      icon: Target
    },
    {
      tip: "Get creative with call to actions",
      reason: "Stand out from bland marketing brochures",
      example: "Make it fun and engaging, not corporate",
      icon: Lightbulb
    }
  ];

  const listBuildingStrategy = [
    "Start working on a list from day one",
    "Nurture list with giveaways and discounts",
    "Provide free stuff and contests",
    "Build to 4K+ emails for maximum impact",
    "Keep engaging until ready to go big"
  ];

  const emailTemplate = {
    subject: "Expires Tomorrow - Special Offer",
    urgency: "For 24 hours only...",
    content: "Short, punchy email with clear offer",
    cta: "Creative, benefit-focused call to action"
  };

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
              Day 25
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              $10K in Revenue from One Email Blast - The Complete Email Funnel
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <DollarSign className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 25 of 27</span>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">$10K IN REVENUE FROM ONE EMAIL BLAST</h2>
            <p className="text-lg text-green-100 mb-4">
              If you're new here, here's day 25 of a case study where I walk you through how you can launch and build a local business in a month.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                Today we'll talk about email follow up for cash!
              </p>
            </div>
          </div>
        </div>

        {/* Email Power Statement */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why We're Obsessive About Email</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">We're obsessive when it comes to collecting every single email we can collect on our websites.</h3>
            <p className="text-blue-700 mb-4">Why?</p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-bold text-center text-xl">
                Because it makes us more money. That simple.
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {emailPower.map((point, index) => (
              <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                <Mail className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-green-800 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3 text-center">If content is king...</h3>
            <p className="text-3xl font-bold text-yellow-300 text-center mb-4">
              EMAIL IS THE RULER OF THE FREAKING UNIVERSE!!!
            </p>
            <p className="text-purple-100 text-center">
              It's the closest thing you have to ATMs in the internet marketing game.
            </p>
          </div>
        </div>

        {/* The $10K Campaign */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The $10K Email Campaign Breakdown</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Actual Campaign Results</h3>
            <p className="text-yellow-700">
              Okay, here's an actual campaign I did for my cleaning company. Take it, tweak it for your product/service and get cracking!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {emailCampaignResults.map((result, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                <div className="font-semibold text-blue-800 mb-1">{result.metric}</div>
                <div className="text-sm text-blue-600">{result.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">Overall Result: A WIN!</h3>
            <p className="text-green-100 text-center mb-4">
              Conversion: ~4% of the folks that opened the email booked.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 text-center">
                I'll live with that any day of the week!
              </p>
            </div>
          </div>
        </div>

        {/* Email Strategy Process */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 4-Step Email Strategy</h2>
          
          <div className="space-y-6">
            {emailStrategy.map((step) => (
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

        {/* Email Template Example */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Winning Email Template</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Template Structure</h3>
            <div className="space-y-4">
              <div className="bg-red-100 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">Subject Line</h4>
                <p className="text-red-700 font-mono">{emailTemplate.subject}</p>
                <p className="text-red-600 text-sm mt-2">Peep the urgency!!! (Expires Tomorrow)</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">Opening Hook</h4>
                <p className="text-orange-700 font-mono">{emailTemplate.urgency}</p>
                <p className="text-orange-600 text-sm mt-2">Create immediate urgency</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">Email Content</h4>
                <p className="text-blue-700">{emailTemplate.content}</p>
                <p className="text-blue-600 text-sm mt-2">See how short the email is</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Call to Action</h4>
                <p className="text-green-700">{emailTemplate.cta}</p>
                <p className="text-green-600 text-sm mt-2">Make it compelling and benefit-focused</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-2">Key Success Factors</h3>
            <ul className="text-purple-700 space-y-2">
              <li>• <strong>Urgency:</strong> "For 24 hours only" creates immediate action</li>
              <li>• <strong>Brevity:</strong> Short emails perform better than long ones</li>
              <li>• <strong>Clear offer:</strong> Obvious value proposition</li>
              <li>• <strong>Strong subject:</strong> "Expires Tomorrow" drives opens</li>
            </ul>
          </div>
        </div>

        {/* List Building Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Building Your Email List</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">Starting From Zero</h3>
            <p className="text-orange-700 mb-4">
              It will take a while if you're now starting out to get up to 4K emails of course, but keep nurturing that list with giveaways and discounts and free stuff and contests, and whatever else you can think of until you're ready to go big.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {listBuildingStrategy.map((strategy, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <RefreshCw className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-blue-800 font-medium">{strategy}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-2">Go Forth and Be Great!</h3>
            <p className="text-green-700">
              Nothing beats emails. And nothing beats emails of past customers.
            </p>
          </div>
        </div>

        {/* Call to Action Problems */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3 Words You Should Never Use</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">Since we're on emails, let me add this real quick.</h3>
            <p className="text-red-700">
              Here are 3 words you should never use while you're trying to collect emails:
            </p>
          </div>

          <div className="space-y-6">
            {ctaProblems.map((cta, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <cta.icon className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-800 mb-3">{cta.cta}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-4 rounded-lg">
                        <h4 className="font-bold text-red-800 mb-2">❌ Problem</h4>
                        <p className="text-red-700 text-sm">{cta.problem}</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">✅ Solution</h4>
                        <p className="text-green-700 text-sm">{cta.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Better CTAs */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Better Call-to-Actions</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Don't Use Boring CTAs</h3>
            <p className="text-yellow-700">
              Stay away from boring calls to action. Something silly will work so much better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-red-800 mb-4">❌ Boring CTAs</h3>
              <div className="space-y-2">
                {badCTAs.map((cta, index) => (
                  <div key={index} className="bg-red-100 p-3 rounded-lg text-center">
                    <span className="text-red-700 font-medium">{cta}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-4">✅ Creative CTAs</h3>
              <div className="space-y-2">
                {goodCTAs.map((cta, index) => (
                  <div key={index} className="bg-green-100 p-3 rounded-lg text-center hover:bg-green-200 transition-colors duration-200 cursor-pointer">
                    <span className="text-green-700 font-medium">{cta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-2">The Goal</h3>
            <p className="text-blue-700">
              It almost doesn't have to make sense, but I bet you'll end up with higher conversions than "subscribe". 
              Better off putting what's in it for the customer.
            </p>
          </div>
        </div>

        {/* Copywriting Tips */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bonus Copywriting Tips</h2>
          
          <div className="space-y-6">
            {copywritingTips.map((tip, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <tip.icon className="h-8 w-8 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-purple-800 mb-3">{tip.tip}</h3>
                    <p className="text-purple-700 mb-3">{tip.reason}</p>
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <p className="text-purple-800 text-sm italic">{tip.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Users className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Speak to One Person</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                Replace all incidences of "We", "I", "Visitors", "Customers" etc. with "You" and "Your".
              </p>
              <p className="text-purple-100">
                Only one person is reading your site at any one time, and we want to speak to that one single person.
              </p>
            </div>
          </div>
        </div>

        {/* Creative CTAs Goal */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Creative CTA Goal</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Stand Out From the Crowd</h3>
            <p className="text-green-700 mb-4">
              So that's it. I make sure to get creative with my call to actions so the visitor knows there's something in it for them and my site doesn't come across as yet another bland marketing brochure.
            </p>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-semibold text-center">
                Make it fun, make it engaging, make it memorable!
              </p>
            </div>
          </div>
        </div>

        {/* Starting Out Reminder */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Starting Out? No Problem!</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-orange-100 mb-4">
                And of course I know this won't matter when you're starting out because you don't have a list yet in this space...
              </p>
              <p className="text-xl font-bold text-yellow-300">
                So this is a reminder to start working on a list from day one.
              </p>
            </div>
            <p className="text-orange-200 mt-4">
              Good luck!
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">✅ Email Best Practices</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Collect emails obsessively</li>
                  <li>• Use urgency in subject lines</li>
                  <li>• Keep emails short and punchy</li>
                  <li>• Focus on past customers</li>
                  <li>• Track and optimize results</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">✅ CTA Improvements</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Avoid boring words like "Submit"</li>
                  <li>• Get creative with call-to-actions</li>
                  <li>• Tell visitors what's in it for them</li>
                  <li>• Use "You" and "Your" language</li>
                  <li>• Make it fun and memorable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Award className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Email = Money Machine</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                $10,300 from one email blast proves the power of email marketing.
              </p>
              <p className="text-lg text-green-100">
                Start building your list today and create your own money machine!
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day24')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 24
          </button>
          <button
            onClick={() => navigate('/day26')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 26 - Tools We Use
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day25;