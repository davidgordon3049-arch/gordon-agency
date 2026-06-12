import { useState } from 'react';
import { Phone, Globe, Settings, CheckCircle, ChevronDown, ChevronUp, Building2, Zap, Users } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [companyName, setCompanyName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleTestSystem = () => {
    if (companyName.trim() && mobileNumber.trim()) {
      alert(`[System Connection Successful] Your simulation lead has been logged. In a live setup, your customer would receive an automated text back within 60 seconds, and the lead would pop up instantly on your tracking sheet.`);
    }
  };

  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-['Inter',sans-serif]">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-extrabold tracking-[0.15em] uppercase">
            Gordon Acquisition Systems
          </h1>
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-400">Local Lead Generation Systems</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-12 pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            We Catch the Customers<br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Your Competitors Miss.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            We build high-converting local business websites and equip them with dedicated local tracking phone numbers.
            When a hot lead finds your business online, our automated standby systems make sure they get a text response
            within 60 seconds—securing the job for your crew before they call the next company on Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToDemo}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl text-lg transition-all duration-400 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Test the Missed Call System
            </button>
            <button
              onClick={scrollToPricing}
              className="px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-gray-400 text-white font-semibold rounded-xl text-lg transition-all duration-400 hover:scale-105"
            >
              View Our Pricing Packages
            </button>
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section className="relative z-10 px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 */}
            <div className="group bg-[#0b1120] border border-[#1f2937] rounded-xl p-8 transition-all duration-400 hover:scale-[1.02] hover:border-gray-600">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 transition-transform duration-400 group-hover:scale-110">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Missed Call Rescue</h3>
              <p className="text-gray-400 leading-relaxed">
                We link a dedicated local tracking number to your cell phone. If you are out in the field and miss a call,
                our system instantly texts the customer back automatically to book the job before they call your competitors.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-[#0b1120] border border-[#1f2937] rounded-xl p-8 transition-all duration-400 hover:scale-[1.02] hover:border-gray-600">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 transition-transform duration-400 group-hover:scale-110">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">High-Converting Web Storefronts</h3>
              <p className="text-gray-400 leading-relaxed">
                We design and launch custom, lightning-fast dark-mode portfolios built specifically to look professional,
                display your local service areas, and drive high-intent calls straight to your crew.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-[#0b1120] border border-[#1f2937] rounded-xl p-8 transition-all duration-400 hover:scale-[1.02] hover:border-gray-600">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 transition-transform duration-400 group-hover:scale-110">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Turnkey System Setup</h3>
              <p className="text-gray-400 leading-relaxed">
                We handle 100% of the technical setup. We secure your local phone number, host your files, and route
                your data into a simple, private Google Sheet tracking spreadsheet so you can see your leads in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="relative z-10 px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#0b1120] border border-[#1f2937] rounded-xl p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold">Test Our Instant Response System</h3>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Type your business name and callback number below to simulate how our background framework captures
              a local lead and fires an instantaneous routing handshake alert.
            </p>
            <div className="space-y-4 mb-8">
              <input
                type="text"
                placeholder='e.g., Quality Tree & Lawn'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-5 py-4 bg-[#030712] border border-[#1f2937] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
              />
              <input
                type="text"
                placeholder='773-748-3321'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-5 py-4 bg-[#030712] border border-[#1f2937] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
              />
            </div>
            <button
              onClick={handleTestSystem}
              disabled={!companyName.trim() || !mobileNumber.trim()}
              className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-lg transition-all duration-400 hover:scale-[1.02] disabled:hover:scale-100"
            >
              Test the Instant Response System
            </button>
          </div>
        </div>
      </section>

      {/* Activity Log Terminal */}
      <section className="relative z-10 px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#030712] border border-[#1f2937] rounded-xl p-6 lg:p-8 font-mono text-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-500 ml-4 text-xs">pipeline_monitor.log</span>
            </div>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3 group hover:bg-[#0b1120]/50 px-3 py-2 rounded transition-colors duration-300">
                <span className="text-emerald-400 font-semibold">[System Active]</span>
                <span>Monitoring local 512 area code tracking numbers...</span>
              </div>
              <div className="flex items-start gap-3 group hover:bg-[#0b1120]/50 px-3 py-2 rounded transition-colors duration-300">
                <span className="text-orange-400 font-semibold">[Missed Call Logged]</span>
                <span>Target Lead: Quality Tree & Lawn → Automated Callback Text Dispatched.</span>
              </div>
              <div className="flex items-start gap-3 group hover:bg-[#0b1120]/50 px-3 py-2 rounded transition-colors duration-300">
                <span className="text-blue-400 font-semibold">[Queue Standby]</span>
                <span>Monitoring System Queue for Lead: Fix It Rocket.</span>
              </div>
              <div className="flex items-start gap-3 group hover:bg-[#0b1120]/50 px-3 py-2 rounded transition-colors duration-300">
                <span className="text-emerald-400 font-semibold">[System Check]</span>
                <span>100% System Uptime // All Routing Lines Active.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="relative z-10 px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Turnkey Growth Packages</h2>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Core */}
            <div className="group bg-[#0b1120] border border-[#1f2937] rounded-xl p-8 transition-all duration-400 hover:scale-[1.02] hover:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-bold">Core Infrastructure Setup</h3>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-extrabold text-white">$1,000.00</p>
                <p className="text-sm text-gray-400 mt-1">Setup Fee (One-time) + $199.00 / month</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '1 custom local dark-mode website',
                  '1 dedicated local tracking phone number supplied and hosted by us',
                  'Automated missed-call text-back logic',
                  '1 private Google Sheet lead tracker'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 border border-gray-600 hover:border-orange-500 hover:text-orange-500 rounded-xl font-semibold transition-all duration-400">
                Get Started
              </button>
            </div>

            {/* Growth - Most Popular */}
            <div className="group bg-[#0b1120] border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] rounded-xl p-8 transition-all duration-400 hover:scale-[1.02] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR SETUP
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-bold">Growth Acquisition Setup</h3>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-extrabold text-white">$2,500.00</p>
                <p className="text-sm text-gray-400 mt-1">Setup Fee (One-time) + $299.00 / month</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Multi-page local business web framework',
                  'Dedicated local number setup',
                  'Advanced custom automated text-back response scripts',
                  'Priority lead routing straight to up to 3 separate field crew cell phones'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 rounded-xl font-semibold transition-all duration-400">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="group bg-[#0b1120] border border-[#1f2937] rounded-xl p-8 transition-all duration-400 hover:scale-[1.02] hover:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-amber-500" />
                <h3 className="text-xl font-bold">Enterprise Automation Setup</h3>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-extrabold text-white">$5,000.00</p>
                <p className="text-sm text-gray-400 mt-1">Setup Fee (One-time) + $499.00 / month</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Engineered for multi-location commercial operators',
                  'Unlimited dark-mode website layouts',
                  'Multi-channel custom tracking number arrays',
                  'Full enterprise CRM integration',
                  'Dedicated priority support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 border border-gray-600 hover:border-orange-500 hover:text-orange-500 rounded-xl font-semibold transition-all duration-400">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Do I have to buy my own phone number or set up tech software?",
                a: "No. We handle everything. We buy, host, and supply the local tracking phone number for you. There's no software for you to install or configure. We take care of all the technical setup so you can focus on running your business."
              },
              {
                q: "What happens if I miss a customer call while working on a job site?",
                a: "Our system detects the missed call instantly and automatically sends a professional text message to your customer within 60 seconds. This keeps them engaged and prevents them from calling your competitors while you're busy working."
              },
              {
                q: "Are there any hidden fees or hosting platform costs?",
                a: "No hidden fees. The monthly fee covers everything: phone number hosting, website hosting, text message automation, and your Google Sheet lead tracker. You'll never see surprise charges on your bill."
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-[#0b1120] border border-[#1f2937] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#030712]/50 transition-colors duration-300"
                >
                  <span className="font-semibold text-lg pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Footer */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0b1120] to-[#030712] border border-[#1f2937] rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Primary System Deployment Footprint</h3>
            <p className="text-gray-400 text-lg">Austin / Leander / Round Rock, Texas Service Area Hub</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 lg:px-12 py-8 border-t border-[#1f2937]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2026 GORDON ACQUISITION SYSTEMS. ALL RIGHTS RESERVED. POWERED BY SECURE PHONE ROUTING & AUTOMATED LEAD LOGGING INFRASTRUCTURE.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
