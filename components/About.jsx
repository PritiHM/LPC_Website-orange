"use client";
import React from "react";

const AboutPage = () => {
  return (
    <main className=" pt-20 min-h-screen bg-[#fff7f0] font-sans text-slate-800 selection:bg-orange-200 overflow-hidden">
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-100/30 blur-[120px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative px-0 lg:px-0 mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[60vh]">
          
          <div className="w-full lg:w-1/2 z-10 bg-[#3d1a0a] p-10 lg:p-24 flex flex-col justify-center space-y-6">
            <div className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em]">
              Introducing Care
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              LPC Facility <br />
              Services Pvt. Ltd.
            </h1>

            <p className="text-sm md:text-base text-orange-100/70 max-w-md leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="pt-4">
              <button className="px-8 py-3 bg-[#ffb84e] hover:bg-[#e6a646] text-[#3d1a0a] font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,184,78,0.3)] hover:shadow-[0_0_30px_rgba(255,184,78,0.5)]">
                Get a Quote
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <img
              src="/images/about-hero.png"
              alt="Modern Corporate Office"
              className="w-full h-full min-h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-6">
              <div className="text-orange-600 text-xs font-bold uppercase tracking-widest">Introducing</div>
              <h2 className="text-4xl font-bold text-[#3d1a0a]">LPC's Mission & Vision</h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm max-w-xl">
                <p>LPC has been at the forefront of quality control and excellence. We strive to provide the most innovative solutions for our clients worldwide.</p>
                <p>Our team works tirelessly to incorporate the latest technology in facility management, ensuring your spaces are not just clean, but healthy.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white/80 border border-orange-50 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col items-start">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                </div>
                <h3 className="text-xl font-bold text-orange-900 mb-2">Vision</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Global benchmark for facility management through innovation.</p>
              </div>

              <div className="p-8 bg-white/80 border border-orange-50 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col items-start">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                </div>
                <h3 className="text-xl font-bold text-orange-900 mb-2">Commitment</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Unyielding quality control and consistent customer satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="pb-24 px-6 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            <div className="bg-[#3d1a0a] rounded-[2rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="relative z-10">
                <img
                  src="/images/certificate.png"
                  alt="ISO Certification"
                  className="w-48 h-48 object-contain mb-4 drop-shadow-[0_0_15px_rgba(255,184,78,0.2)]"
                />
                <h3 className="text-3xl font-bold text-white tracking-tight">ISO 9001:2015</h3>
                <p className="text-orange-400 text-sm font-semibold mt-2 uppercase tracking-widest">Certified</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-white flex flex-col md:flex-row items-center gap-8">
              <img
                src="/images/team.png"
                alt="Santosh Shewale"
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg"
              />
              <div className="text-center md:text-left space-y-2">
                <span className="text-slate-400 text-xs font-semibold">Owner</span>
                <h3 className="text-3xl font-bold text-orange-950">Santosh Shewale</h3>
                <p className="text-slate-500 text-sm">Managing Director</p>
                <div className="pt-4">
                  <span className="px-4 py-1.5 bg-[#ffb84e]/20 text-[#3d1a0a] text-xs font-bold rounded-full">#Professional</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;