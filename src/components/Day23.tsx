import React, { useEffect } from 'react';
import { ArrowLeft, Rocket, CheckCircle, MessageCircle, Phone, Mail, Globe, Users, Star, TrendingUp, Target, Zap, Award, Calendar, MapPin, Camera, Heart, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DFYCallout from './DFYCallout';

function Day23() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const launchEssentials = [
    {
      category: "Booking Form",
      action: "Test this 1st of course",
      description: "Ensure your booking system works flawlessly before launch",
      icon: CheckCircle,
      color: "blue"
    },
    {
      category: "Chat",
      action: "Be logged on and set to proactive",
      description: "Active chat support to convert visitors immediately",
      icon: MessageCircle,
      color: "green"
    },
    {
      category: "Phone/Text",
      action: "Be available to answer",
      description: "Ready to handle inquiries and convert leads",
      icon: Phone,
      color: "purple"
    },
    {
      category: "Email",
      action: "Be available to respond",
      description: "Quick response times build trust and convert leads",
      icon: Mail,
      color: "orange"
    }
  ];

  const pressAngles = [
    "SAHM tech startup",
    "Laid off from work",
    "Tech Driven local company",
    "Black woman entrepreneur",
    "Tech startup guru moving into the local space",
    "etc. etc."
  ];

  const classifiedsPlatforms = [
    { platform: "Angies List", action: "Set up account", icon: Star },
    { platform: "Yelp", action: "Try to get two reviews", icon: Star },
    { platform: "Thumbtack", action: "Put in for a quote", icon: Target },
    { platform: "Homeadvisor", action: "Set up", icon: CheckCircle },
    { platform: "Nextdoor", action: "Sign up and check it out", icon: Users },
    { platform: "Google My Business/Local services", action: "Set it up", icon: Globe },
    { platform: "Bark", action: "Sign up and check it out", icon: Users },
    { platform: "Craigslist", action: "Make a post offering your services", icon: MessageCircle }
  ];

  const socialMediaStrategy = [
    {
      platform: "Twitter",
      action: "Follow/@ 30 apartment complexes and local bloggers",
      tip: "Try Twitter Advanced Search",
      secondary: "Follow 30 members of local press",
      icon: MessageCircle,
      color: "blue"
    },
    {
      platform: "Facebook Profile",
      action: "Make a post",
      tip: "Do a live video, ask friends to share",
      secondary: "Local Facebook Groups - Make a VALUABLE post",
      icon: Users,
      color: "indigo"
    },
    {
      platform: "Facebook Page",
      action: "Make a post",
      tip: "Invite local friends",
      secondary: "",
      icon: Users,
      color: "blue"
    },
    {
      platform: "Instagram",
      action: "Make a post",
      tip: "Follow local people",
      secondary: "",
      icon: Camera,
      color: "pink"
    },
    {
      platform: "LinkedIn",
      action: "Make a post",
      tip: "Professional network outreach",
      secondary: "",
      icon: Users,
      color: "blue"
    }
  ];

  const longerContentStrategy = [
    {
      platform: "Reddit",
      purpose: "Won't turn into business but you could grab a link and go",
      icon: MessageCircle
    },
    {
      platform: "Blog",
      purpose: "Ask Friends/family to make a post linking back (Look for guest blogging opportunities)",
      icon: Globe
    },
    {
      platform: "Medium",
      purpose: "Make a post linking back",
      icon: Globe
    },
    {
      platform: "Imgur (image based)",
      purpose: "Make an image post linking back",
      icon: Camera
    },
    {
      platform: "Live Video/Video",
      purpose: "Create a video of you thanking friends for support",
      icon: Camera
    }
  ];

  const personalOutreach = [
    {
      method: "Email",
      action: "Email Friends, mentors, family, supporters",
      details: "Ask them to email friends if they know anyone in your city (Give them the email to use with the link to your site)",
      icon: Mail,
      color: "blue"
    },
    {
      method: "Text",
      action: "Text friends",
      details: "Direct personal outreach to your immediate network",
      icon: Phone,
      color: "green"
    },
    {
      method: "Feedback",
      action: "Ask for it about your site",
      details: "Helps people feel involved and engaged",
      icon: MessageCircle,
      color: "purple"
    }
  ];

  const complementaryServices = [
    "Home inspectors",
    "Realtors", 
    "Moving companies etc."
  ];

  const launchPartyIdeas = [
    "Make it interesting and fun",
    "Invite friends over with their laptops",
    "Have a blast setting everything up",
    "Put yourself out there together",
    "Create social media buzz",
    "Get immediate feedback and support"
  ];

  const motivationalStats = [
    { stat: "1%", description: "People who actually take action vs just dream" },
    { stat: "99%", description: "People who talk about building businesses but never start" },
    { stat: "27 Days", description: "From idea to launched business" },
    { stat: "$20M", description: "Total sales using this exact system" }
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
              Day 23
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Launch Like a Pro - Your Complete Launch Day Action Plan
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* DFY Callout */}
        <DFYCallout onNavigateToDay27={onNavigateToDay27} />
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Rocket className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-xl font-bold">Day 23 of 27</span>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">LAUNCH DAY PLANS!!!</h2>
            <p className="text-lg text-orange-100 mb-4">
              If you're new this is a series where you watch me lay everything out from scratch in the way I built my local service business to <span className="text-yellow-300 font-bold">$20 million in sales</span>.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300">
                Today will be a quick thread with some Launch Day Bullets!
              </p>
            </div>
          </div>
        </div>

        {/* Motivation Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You're in the 1% - Respect!</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Most People Just Dream</h3>
            <p className="text-green-700 mb-4">
              Most people dream and dream about building a successful company. Sometimes for all their lives.
            </p>
            <p className="text-green-600">
              Instead, some of you are playing zero games and they are a couple of you that have been working diligently on building something. <strong>Salute!</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            {motivationalStats.map((item, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <div className="text-sm text-blue-700">{item.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-center">The Reality</h3>
            <p className="text-purple-100 text-center mb-4">
              It's easy as hell to talk shit from the sidelines and much harder to actually take action.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 text-center">
                So much respect for those actually building something!
              </p>
            </div>
          </div>
        </div>

        {/* Launch Essentials */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Bullets on What to Have in Place by Launch</h2>
          
          <div className="space-y-6">
            {launchEssentials.map((essential, index) => (
              <div key={index} className={`bg-${essential.color}-50 border-l-4 border-${essential.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <essential.icon className={`h-8 w-8 text-${essential.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`text-xl font-bold text-${essential.color}-800 mb-2`}>
                      {essential.category}
                    </h3>
                    <p className={`text-${essential.color}-700 font-semibold mb-2`}>
                      {essential.action}
                    </p>
                    <p className={`text-${essential.color}-600 text-sm`}>
                      {essential.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Strategy</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Craft Your Personal Story</h3>
            <p className="text-purple-700 mb-4">
              Craft a short personal story for an angle and reach out to them on Twitter:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {pressAngles.map((angle, index) => (
              <div key={index} className="bg-pink-50 p-4 rounded-lg text-center">
                <span className="text-pink-800 font-medium">{angle}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Be Transparent</h3>
            <p className="text-yellow-700">
              *Be transparent and tell a personal story* - this creates authentic connections with media and potential customers.
            </p>
          </div>
        </div>

        {/* Classifieds Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Classifieds & Directory Setup</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {classifiedsPlatforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-start">
                  <platform.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{platform.platform}</h3>
                    <p className="text-gray-600 text-sm">{platform.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Social Media Launch Strategy</h2>
          
          <div className="space-y-6">
            {socialMediaStrategy.map((social, index) => (
              <div key={index} className={`bg-${social.color}-50 border-l-4 border-${social.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <social.icon className={`h-8 w-8 text-${social.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-${social.color}-800 mb-3`}>
                      {social.platform}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className={`bg-${social.color}-100 p-4 rounded-lg`}>
                        <h4 className={`font-bold text-${social.color}-800 mb-2`}>Primary Action</h4>
                        <p className={`text-${social.color}-700 text-sm mb-2`}>{social.action}</p>
                        <p className={`text-${social.color}-600 text-xs italic`}>({social.tip})</p>
                      </div>
                      {social.secondary && (
                        <div className={`bg-${social.color}-100 p-4 rounded-lg`}>
                          <h4 className={`font-bold text-${social.color}-800 mb-2`}>Secondary Action</h4>
                          <p className={`text-${social.color}-700 text-sm`}>{social.secondary}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Longer Content Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Longer Content Strategy</h2>
          
          <div className="space-y-4">
            {longerContentStrategy.map((content, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <content.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-800 mb-2">{content.platform}</h3>
                    <p className="text-blue-700 text-sm">{content.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Outreach */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Outreach Strategy</h2>
          
          <div className="space-y-6">
            {personalOutreach.map((outreach, index) => (
              <div key={index} className={`bg-${outreach.color}-50 border-l-4 border-${outreach.color}-500 p-6 rounded-r-lg`}>
                <div className="flex items-start">
                  <outreach.icon className={`h-8 w-8 text-${outreach.color}-600 mr-4 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`text-xl font-bold text-${outreach.color}-800 mb-3`}>
                      {outreach.method}
                    </h3>
                    <p className={`text-${outreach.color}-700 font-semibold mb-2`}>
                      {outreach.action}
                    </p>
                    <p className={`text-${outreach.color}-600 text-sm`}>
                      {outreach.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complementary Services */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complementary Services Partnership</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Cross-Referral Opportunities</h3>
            <p className="text-green-700 mb-4">
              Know other people in the local space with different services? Reach out to set up something where you refer each other.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {complementaryServices.map((service, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-blue-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Launch Party */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Friends to Help in Person</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">"Mimosa Launch Party"</h3>
            <p className="text-orange-700">
              Whatever you call it, make it interesting, invite them over with their laptops, and have a blast setting everything up and putting yourself out there.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {launchPartyIdeas.map((idea, index) => (
              <div key={index} className="bg-pink-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-pink-600 mr-3" />
                  <span className="text-pink-800 font-medium text-sm">{idea}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable List Note */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Living Document</h3>
            <p className="text-blue-700">
              (Will add to this list as well...)
            </p>
            <p className="text-blue-600 text-sm mt-2">
              This launch checklist will continue to evolve and expand based on what works best.
            </p>
          </div>
        </div>

        {/* Motivational Closing */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Award className="h-12 w-12 text-green-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">You're Legit in the 1%</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-4">
              <p className="text-xl font-bold text-yellow-300 mb-4">
                Doing anything great is hard.
              </p>
              <p className="text-lg text-green-100 mb-4">
                If you're actually taking action, you're legit in the 1%.
              </p>
              <p className="text-green-200">
                Respect.
              </p>
            </div>
            <div className="text-4xl font-bold text-yellow-300 mb-4">
              LIFE IS FOR LIVING!
            </div>
            <div className="text-3xl font-bold text-green-200">
              LET'S GET IT!
            </div>
          </div>
        </div>

        {/* Tomorrow Preview */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Calendar className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Tomorrow We Tie Up Loose Ends</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold text-yellow-300 mb-2">
                Tomorrow we'll tie up some more loose ends...
              </p>
              <p className="text-orange-100">
                We're almost at the finish line of this 27-day journey!
              </p>
            </div>
          </div>
        </div>

        {/* Action Summary */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Launch Day Action Summary</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">Technical Setup</h4>
              <p className="text-blue-700 text-sm">Booking, chat, phone, email ready</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Platform Presence</h4>
              <p className="text-green-700 text-sm">8+ directories and classifieds</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-purple-800 mb-2">Social Media</h4>
              <p className="text-purple-700 text-sm">5+ platforms activated</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <Heart className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-bold text-orange-800 mb-2">Personal Network</h4>
              <p className="text-orange-700 text-sm">Friends, family, partnerships</p>
            </div>
          </div>
        </div>

        {/* Final Motivation */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">The Launch Mindset</h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-lg text-purple-100 mb-4">
                Most people will spend months "getting ready to get ready."
              </p>
              <p className="text-xl font-bold text-yellow-300 mb-4">
                You're about to LAUNCH and start making money!
              </p>
              <p className="text-purple-200">
                That puts you in an incredibly elite group of action-takers.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          <button 
            onClick={() => navigate('/day22')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Day 22
          </button>
          <button
            onClick={() => navigate('/day24')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Next: Day 24 - Design for Conversions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day23;