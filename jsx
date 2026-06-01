import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white font-sans antialiased flex flex-col items-center px-4 md:px-8">
      
      {/* Navigation Bar */}
      <header className="w-full max-w-7xl flex justify-between items-center py-6 border-b border-white/5">
        <div className="text-xl font-extrabold tracking-tight">OneText</div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <a href="#login" className="text-slate-200 hover:text-white transition">Login</a>
          <button className="border border-white/30 rounded-full px-4 py-2 hover:bg-white/10 transition flex items-center gap-1">
            Get started <span>&rarr;</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-7xl mt-12 md:mt-20 flex flex-col gap-12">
        
        {/* Hero Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headings & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              20% More Revenue<br />
              Per Campaign.<br />
              Guaranteed.
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Incremental. It's why we exist. See why the most innovative brands in ecommerce add text to 
              buy, shopper-specific recommendations and two-way texting on top of conventional SMS 
              marketing. You won't go back.
            </p>
            
            {/* AI Action Input */}
            <div className="flex items-center bg-[#161d30] border border-white/10 p-1.5 rounded-full max-w-lg w-full shadow-inner mt-4">
              <span className="bg-gradient-to-r from-blue-5xl to-blue-600 bg-blue-600 text-[10px] font-black uppercase px-2 py-0.5 rounded ml-3 tracking-wider">
                AI
              </span>
              <input 
                type="url" 
                placeholder="Enter your brand's URL" 
                className="bg-transparent border-none outline-none flex-grow text-sm px-3 text-white placeholder-slate-500 min-w-0"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shrink-0 transition flex items-center gap-1 shadow-md">
                Test our AI <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Simulated Product Interface */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[450px] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
            
            {/* Background Atmosphere Lights */}
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-blue-600/30 rounded-full filter blur-[60px]" />
            <div className="absolute -top-10 left-1/4 w-44 h-44 bg-orange-600/20 rounded-full filter blur-[50px]" />
            
            {/* Simulated Floating Chat Threads */}
            <div className="relative w-full h-full p-6 flex flex-col justify-between z-10">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl rounded-br-sm self-end max-w-[260px] text-xs sm:text-sm shadow-xl">
                Ready to sell more with OneText?
              </div>
              
              <div className="bg-blue-600 p-4 rounded-2xl rounded-br-sm self-end max-w-[180px] text-xs sm:text-sm font-semibold shadow-xl">
                Absolutely!
              </div>
              
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl rounded-bl-sm self-start max-w-[280px] text-xs sm:text-sm shadow-xl">
                Hi, this is Sarah! Would you like to buy a cookie?
              </div>
            </div>
          </div>

        </div>

        {/* Footer / Social Proof Banner */}
        <section className="bg-[#111827] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 mb-16 shadow-lg">
          
          {/* Customer Testimonial */}
          <div className="flex flex-col gap-1 text-center md:text-left">
            <blockquote className="text-xl sm:text-2xl font-bold tracking-tight">
              "Incredible"
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Moiz Ali <span className="text-slate-600 ml-1">Founder of Native Deodorant</span>
            </p>
          </div>

          {/* Partner Brands */}
          <div className="flex flex-wrap justify-center gap-3">
            {['tabs', 'wonder monday', 'CADEN LANE', '• create'].map((brand, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/60 border border-white/5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide text-slate-400 capitalize"
              >
                {brand}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default HeroSection;
