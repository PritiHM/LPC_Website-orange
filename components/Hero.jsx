"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  Shield, 
  Wind, 
  Sparkles, 
  Bug, 
  Zap, 
  Ghost, 
  MousePointer2, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export default function PremiumHomePage() {
  // --- Responsive Orbit Radius Logic ---
  const [radius, setRadius] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setRadius(140);      // Mobile
      else if (window.innerWidth < 1024) setRadius(220); // Tablet
      else setRadius(300);                               // Desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridStyle = {
    backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.07) 1px, transparent 1px), 
                      linear-gradient(to bottom, rgba(249, 115, 22, 0.07) 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
  };

  const services = [
    { title: "Pest Control", desc: "Eco-friendly, medical-grade protection for your home and office.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", icon: <Shield className="text-orange-500" /> },
    { title: "Carpet Cleaning", desc: "Deep steam extraction that removes 99% of allergens and bacteria.", img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=800", icon: <Wind className="text-orange-500" /> },
    { title: "Marble Polishing", desc: "Diamond-abrasive restoration for a mirror-like finish on stone.", img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800", icon: <Sparkles className="text-orange-500" /> },
  ];

  const pestPlanets = [
    { name: "Termite", icon: <Zap /> },
    { name: "Cockroach", icon: <Bug /> },
    { name: "Rodent", icon: <MousePointer2 /> },
    { name: "Mosquito", icon: <Ghost /> },
    { name: "Bed Bugs", icon: <Shield /> },
  ];

  const clientLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Apple_logo_white.svg", 
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  ];

  const testimonials = [
    { name: "Sarah J.", role: "Homeowner", text: "The marble polishing was transformative. My floors look brand new!", stars: 5 },
    { name: "Marcus C.", role: "Property Manager", text: "Highly professional pest control. Haven't seen a bug in months.", stars: 5 },
    { name: "Elena R.", role: "Interior Designer", text: "Their carpet cleaning is the only one I trust for my high-end clients.", stars: 5 },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950 z-10" />
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Hero" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold tracking-widest text-orange-400 uppercase border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-md">
              Elite Facility Management
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              We Don’t Just Control Pests <br />
              <span className="text-orange-500">We Eliminate Them</span>
            </h1>
            <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-10">
              Specialized maintenance services designed for luxury homes and high-end commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <button className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-600/30">
                Book a Service
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-10 py-4 rounded-full font-bold transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40" style={gridStyle} />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">World-Class Solutions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <motion.div key={i} whileHover={{ y: -12 }} className="group bg-white rounded-[2.5rem] overflow-hidden border border-orange-100 shadow-xl shadow-slate-200/50 transition-all duration-300">
                <div className="h-56 md:h-64 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="mb-4">{s.icon}</div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{s.title}</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">{s.desc}</p>
                  <button className="text-orange-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Details <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM ORBIT SECTION (GLASS COLOR BG) */}
      <section className="relative py-24 md:py-40 px-6 overflow-hidden bg-slate-50">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 -z-20 opacity-40" style={gridStyle} />
        
        {/* Glassmorphism Background Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[90%] md:w-[85%] md:h-[80%] bg-white/40 backdrop-blur-2xl rounded-[4rem] border border-white/60 shadow-[0_32px_64px_rgba(0,0,0,0.05)] -z-10" />

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[900px] bg-orange-400/15 blur-[140px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">Targeted Protection</h2>
            <h3 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight">Advanced Defense Ecosystem</h3>
          </div>

          <div className="relative flex items-center justify-center min-h-[450px] sm:min-h-[650px] md:min-h-[800px] w-full scale-90 sm:scale-100">
            {/* Orbit Rings */}
            <div className="absolute border border-orange-200/50 rounded-full w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px]" />
            <div className="absolute border border-orange-100/30 rounded-full w-[380px] h-[380px] sm:w-[600px] sm:h-[600px] md:w-[850px] md:h-[850px] opacity-60" />

            {/* Center Core (Stronger Gradient) */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: ["0 0 40px rgba(249,115,22,0.3)", "0 0 80px rgba(249,115,22,0.6)", "0 0 40px rgba(249,115,22,0.3)"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-30 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 flex flex-col items-center justify-center text-white ring-8 ring-white/70 shadow-2xl"
            >
              <Shield size={window.innerWidth < 640 ? 32 : 52} className="mb-2" />
              <span className="font-black text-sm sm:text-xl md:text-2xl uppercase tracking-tighter text-center leading-none">
                Pest<br />Control
              </span>
            </motion.div>

            {/* Orbiting Planets (Vibrant Style) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              {pestPlanets.map((pest, i) => {
                const angle = (i * 360) / pestPlanets.length;
                return (
                  <div key={i} className="absolute" style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` }}>
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="relative group/planet">
                      <div className="bg-white hover:bg-orange-500 text-slate-800 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full shadow-[0_15px_35px_rgba(249,115,22,0.1)] border-2 border-orange-50 flex flex-col items-center justify-center transition-all duration-300 group-hover/planet:scale-110 group-hover/planet:shadow-orange-400/50">
                        <div className="mb-1 text-orange-500 group-hover/planet:text-white transition-colors">
                          {React.cloneElement(pest.icon, { size: window.innerWidth < 640 ? 20 : 32 })}
                        </div>
                        <span className="text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest text-center px-1 group-hover/planet:text-white transition-colors">
                          {pest.name}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT LOGOS (FULL COLOR MARQUEE) */}
      <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 md:gap-32 items-center px-12">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <img key={i} src={logo} alt="client" className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-all duration-300 cursor-pointer" />
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="relative py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30" style={gridStyle} />
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Client Feedback</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Trusted by Industry Leaders</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-orange-50 shadow-xl shadow-slate-200/40 hover:border-orange-200 transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, index) => <Star key={index} size={18} fill="#f97316" color="#f97316" />)}
                </div>
                <p className="text-lg md:text-xl italic text-slate-700 mb-8 leading-relaxed font-medium">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-orange-600/20">{t.name[0]}</div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">{t.name}</h4>
                    <p className="text-orange-500 text-sm font-bold uppercase tracking-tighter">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="relative py-24 md:py-32 px-6 bg-slate-950 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full -z-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight text-white">
            Ready for a <span className="text-orange-500">Cleaner</span> Space?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-600 hover:bg-orange-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl shadow-orange-600/40 transition-all transform hover:scale-105 active:scale-95">
              Get a Free Quote Now
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .group:hover .animate-marquee { animation-play-state: paused; }
      `}</style>
    </main>
  );
}