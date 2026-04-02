"use client";
import { useEffect, useState } from "react";
import "../app/globals.css"
import { motion } from "framer-motion";
import {
  Sparkles,
  Bug,
  Target,
  Zap,
  ChevronRight,
  Star,
} from "lucide-react";

// --- Reusable Glass Component ---
const GlassCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ scale: 1.02, borderColor: 'rgba(249, 115, 22, 0.3)' }}
    className={`
      relative overflow-hidden
      bg-white/5 backdrop-blur-[20px] 
      border border-white/10 rounded-[24px] md:rounded-[32px] 
      shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
      ${className}
    `}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    {children}
  </motion.div>
);

const logos = [
  "/images/logo_page_1.png",
  "/images/logo_page_2.png",
  "/images/logo_page_3.png",
  "/images/logo_page_6.png",
  "/images/logo_page_5.png",
  "/images/logo_page_6.png",
  "/images/logo_page_7.png",
  "/images/logo_page_8.png",
  "/images/logo_page_9.png",
  "/images/logo_page_10.png",
  "/images/logo_page_11.png",
  "/images/logo_page_12.png",
];

const Hero = () => {
  const items = [
    { label: "Bed Bugs", angle: 0 },
    { label: "Cockroach", angle: 72 },
    { label: "Termite", angle: 144 },
    { label: "Mosquito", angle: 216 },
    { label: "Rodent", angle: 288 },
  ];

const radius = 375 - 80;
  const services = [
    {
      title: "Pest Control",
      desc: "Effective pest elimination with advanced techniques.",
      img: "/images/pest control.webp",
    },
    {
      title: "Carpet Cleaning",
      desc: "Deep cleaning for stain-free and hygienic carpets.",
      img: "/images/carpet-cleaning.webp",
    },
    {
      title: "Marble Polishing",
      desc: "Restore shine with premium polishing solutions.",
      img: "/images/marbel-polishing.jpg",
    },
    {
      title: "Carpet/Rubber Flooring",
      desc: "Complete care and maintenance for rubber flooring.",
      img: "/images/rubber florring.webp",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Corp",
      text: "The level of professionalism...",
      initials: "JD"
    },
    {
      name: "Amit Sharma",
      role: "Director, InfraBuild",
      text: "Highly reliable...",
      initials: "AS"
    },
    {
      name: "Priya Mehta",
      role: "Manager, CleanCo",
      text: "Exceptional service...",
      initials: "PM"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const t = testimonials[index];
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const s = Array.from({ length: 25 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setStars(s);
  }, []);

  

  return (
    <div className="  text-white  overflow-x-hidden">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-600/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="relative z-10">
<section className="relative min-h-screen flex items-center overflow-hidden">          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/herobg.png"
              alt="hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#020617]/50 mix-blend-multiply"></div>
          </div>

          {/* ✨ Light Glow Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-100px] left-[-100px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/20 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="absolute bottom-[-120px] right-[-100px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-orange-400/20 rounded-full blur-[80px] md:blur-[120px]"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 md:px-12">
<div className="max-w-2xl p-5 md:p-8 mt-10 md:mt-0 mb-10 md:mb-16 rounded-2xl  bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-white">              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                We Don’t Just Control Pests <br className="hidden md:block" /> We Eliminate Them
              </h1>
              <p className="text-base md:text-lg text-blue-100 mb-8">
                Premium facility management solutions
              </p>
              <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-bold transition">
                Get Started
              </button>
            </div>
          </div>

          {/* 🔥 GLASS STRIP */}
         <div className="absolute bottom-0 left-0 w-full z-20">
  <div className="
    w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6
    bg-gradient-to-r from-white/10 via-white/5 to-white/10
    backdrop-blur-xl border-t border-white/10
    rounded-none md:rounded-t-2xl
    shadow-lg shadow-blue-900/20
    px-4 md:px-4 py-3 md:py-4 text-center
  ">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">5+</h3>
                <p className="text-xs md:text-sm text-blue-100">Years Experience</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">100+</h3>
                <p className="text-xs md:text-sm text-blue-100">Clients Served</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Certified</h3>
                <p className="text-xs md:text-sm text-blue-100 uppercase tracking-tighter md:tracking-normal">Advanced Treatments</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Fast</h3>
                <p className="text-xs md:text-sm text-blue-100">Same-Day Service</p>
              </div>
            </div>
          </div>
        </section>

      <section className="relative py-16 md:py-24 px-4 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-br from-[#f5c38a] via-[#e6a96b] to-[#d89455]">

      {/* 🔥 DOT PATTERN */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.15) 1.5px, transparent 1.5px)`,
          backgroundSize: "18px 18px",
        }}
      />

      {/* 🔥 LIGHT EFFECTS */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_60%)]" />

      {/* 🔥 GLOW BLOBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-white/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-orange-300/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <div className="w-20 md:w-24 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* 🔥 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">

          {services.slice(0, 3).map((service, i) => (
            <div
              key={i}
              className="bg-white/25 backdrop-blur-xl border border-white/40 rounded-3xl p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-2xl mb-6 shadow-md"
              />

              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                {service.title}
              </h3>

              <p className="text-black/70 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

        {/* 🔥 BIG CENTER CARD */}
        <div className="flex justify-center">
          {services.slice(3, 4).map((service, i) => (
            <div
              key={i}
              className="bg-white/25 backdrop-blur-xl border border-white/40 rounded-3xl p-6 md:p-8 text-center w-full md:w-[60%] shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-44 md:h-52 object-cover rounded-2xl mb-6 shadow-md"
              />

              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3">
                {service.title}
              </h3>

              <p className="text-black/70 text-sm max-w-xl mx-auto">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

      <section className="relative min-h-screen py-3 md:py-10 w-full flex flex-col items-center justify-center overflow-hidden bg-[#1a0f08]">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-orbit.png')" }}
        />
        
        {/* Soft Wooden Dark Brown Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: `linear-gradient(to bottom, rgba(60,35,20,0.4), rgba(25,12,5,0.7))`
          }}
        />

        {/* Center Glow Aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.12),transparent_60%)]" />

        {/* ✨ Sparkles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {stars.map((s, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-200 rounded-full opacity-70 animate-pulse"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. HEADER */}
      <div className="relative z-20 text-center mb-6 md:mb-12 px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-2 italic text-white uppercase tracking-tighter drop-shadow-2xl">
          The LPC Ecosystem
        </h2>
        <p className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
          360° Shield Technology
        </p>
      </div>

      {/* 3. ORBIT SYSTEM */}
      <div className="relative z-10 flex justify-center items-center w-full h-[420px] md:h-[650px]">
        
        {/* Scaling Wrapper for Responsiveness */}
        <div className="relative flex justify-center items-center scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-90 xl:scale-100 transition-transform duration-700">
          
          {/* ORBIT RINGS */}
          <div className="absolute w-[300px] h-[300px] border border-white/20 rounded-full" />
          
          <div 
            className="absolute w-[550px] h-[550px] border border-white/30 rounded-full" 
            style={{ boxShadow: '0 0 50px rgba(255,255,255,0.05)' }}
          />

          {/* CENTER CORE */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 40px rgba(249,115,22,0.5), 0 0 80px rgba(249,115,22,0.6), 0 0 120px rgba(249,115,22,0.4)",
                "0 0 80px rgba(249,115,22,0.8), 0 0 160px rgba(249,115,22,0.9), 0 0 220px rgba(249,115,22,0.6)",
                "0 0 40px rgba(249,115,22,0.5), 0 0 80px rgba(249,115,22,0.6), 0 0 120px rgba(249,115,22,0.4)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="z-30 w-48 h-48 bg-gradient-to-br from-orange-600 to-orange-500 border-2 border-orange-300/40 rounded-full flex flex-col items-center justify-center text-white relative"
          >
            <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-2xl" />

            <Zap className="text-white fill-white mb-2" size={44} />
            <span className="font-black text-2xl text-center leading-none tracking-tighter">
              PEST <br /> CONTROL
            </span>

            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none" />
          </motion.div>

          {/* ROTATING PLANETS */}
          <motion.div
            className="absolute w-[750px] h-[750px] rounded-full pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-${radius}px)`
                }}
              >
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                  className="group pointer-events-auto"
                >
                  <div 
                    className="
                      relative w-32 h-32 
                      bg-white/10 backdrop-blur-2xl 
                      border border-white/30 rounded-full 
                      flex items-center justify-center 
                      transition-all duration-500 cursor-pointer
                      hover:scale-110 hover:border-orange-400/50
                      shadow-[0_0_30px_rgba(255,255,255,0.05)]
                      hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]
                    "
                  >
                    <div className="absolute top-3 left-6 w-12 h-5 bg-white/20 rounded-full blur-md -rotate-45" />
                    
                    <span className="text-xs font-black text-white uppercase tracking-widest text-center px-3 select-none drop-shadow-md">
                      {item.label}
                    </span>

                    <div className="absolute inset-0 rounded-full bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-500" />
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom Vignette */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#120804] to-transparent z-10" />
</section>

      <section className="py-12 md:py-20 bg-[#f5d4aa] overflow-hidden">
  <div className="space-y-8">

{/* 🔥 ROW 1 */}
<div className="relative overflow-hidden marquee py-4">
  <div className="flex w-max items-center gap-16 marquee-track left">
    {[...logos, ...logos].map((logo, i) => (
      <img
        key={i}
        src={logo}
        alt="client"
        className="h-16 md:h-20 object-contain opacity-100 hover:scale-110 transition duration-300"
      />
    ))}
  </div>
</div>

{/* 🔥 ROW 2 */}
<div className="relative overflow-hidden marquee py-4">
  <div className="flex w-max items-center gap-16 marquee-track right">
    {[...logos, ...logos].map((logo, i) => (
      <img
        key={i}
        src={logo}
        alt="client"
        className="h-16 md:h-20 object-contain opacity-100 hover:scale-110 transition duration-300"
      />
    ))}
  </div>
</div>

  </div>
</section>

        {/* TESTIMONIALS */}
        <section className="w-full py-8 md:py-15  text-center bg-[#bc8032] px-6">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
    Trusted by Industry Leaders
  </h2>
  <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-12 md:mb-16" />

  <div className="flex justify-center">
    <div className="max-w-4xl w-full text-center">

      {/* ⭐ Stars */}
      <div className="flex justify-center gap-2 text-orange-500 mb-6 md:mb-8">
        {[...Array(5)].map((_, s) => (
          <Star key={s} size={20} fill="currentColor" />
        ))}
      </div>

      {/* 🔥 BIG TEXT */}
      <p className="text-xl sm:text-2xl md:text-4xl font-semibold leading-relaxed text-white mb-10 md:mb-12 italic">
        "{t.text}"
      </p>

      {/* 👤 Profile */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 p-[2px]">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#0f172a]">
            
            {t.image ? (
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full font-bold text-white text-lg">
                {t.initials}
              </div>
            )}

          </div>
        </div>

        <div className="text-center sm:text-left">
          <p className="font-bold text-lg text-white">{t.name}</p>
          <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest">
            {t.role}
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
      </div>
    </div>
  );
};

export default Hero;