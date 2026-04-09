"use client";
import Link from "next/link";
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

const Hero = () => {
  // --- DATA ARRAYS ---
  const logos = [
    { src: "/images/logo_page_1.png", type: "wide" },
    { src: "/images/logo_page_2.png", type: "normal" },
    { src: "/images/logo_page_3.jpeg", type: "tall" },
    { src: "/images/logo_page_12.png", type: "circle" },
    { src: "/images/logo_page_5.png", type: "normal" },
    { src: "/images/logo_page_6.png", type: "wide" },
    { src: "/images/logo_page_7.png", type: "normal" },
    { src: "/images/logo_page_8.png", type: "circle" },
    { src: "/images/logo_page_9.png", type: "small" },
    { src: "/images/logo_page_10.png", type: "small" },
    { src: "/images/logo_page_11.png", type: "wide" },
    { src: "/images/logo_page_12.png", type: "circle" }
  ];

  const row1 = logos.slice(0, 6);
  const row2 = logos.slice(6, 12);

  const items = [
    { label: "carpet & rubber flooring", angle: 0, link: "/carpet-flooring" },
    { label: "carpet cleaning", angle: 72, link: "/FacilityManagement" },
    { label: "bird control", angle: 144, link: "/FacilityManagement" },
    { label: "tank & drain cleaning", angle: 216, link: "/FacilityManagement" },
    { label: "jetspray cleaning", angle: 288, link: "/FacilityManagement" },
  ];

  const services = [
    {
      title: "Pest Control",
      desc: "Effective pest elimination with advanced techniques.",
      img: "/images/pest control.webp",
      link: "/services"
    },
    {
      title: "Carpet Cleaning",
      desc: "Deep cleaning for stain-free and hygienic carpets.",
      img: "/images/carpet-cleaning.jpg",
      link: "/FacilityManagement"
    },
    {
      title: "Marble Polishing",
      desc: "Restore shine with premium polishing solutions.",
      img: "/images/marbel-polishing.jpg",
      link: "/FacilityManagement"
    },
    {
      title: "Carpet & Rubber Flooring",
      desc: "Innovative Carpet, Wooden & Rubber Flooring – Designed, Supplied & Installed to Perfection.",
      img: "/images/carpet-flooring.jpg",
      link: "/carpet-flooring"
    },
  ];

  const testimonials = [
    { name: "John Doe", role: "CEO, Tech Corp", text: "The level of professionalism...", initials: "JD" },
    { name: "Amit Sharma", role: "Director, InfraBuild", text: "Highly reliable...", initials: "AS" },
    { name: "Priya Mehta", role: "Manager, CleanCo", text: "Exceptional service...", initials: "PM" }
  ];

  // --- STATE & EFFECTS ---
  const [index, setIndex] = useState(0);
  const [stars, setStars] = useState([]);
  const radius = 375 - 80;
  const whatsappNumber = "917506102007";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const s = Array.from({ length: 25 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setStars(s);
  }, []);

  const t = testimonials[index];

  return (
    <div className="text-white overflow-x-hidden">
      {/* --- SHARED STYLES --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sci-fi-shine {
          0% { transform: translateX(-200%) skewX(-30deg); opacity: 0; }
          20% { opacity: 0.5; }
          50% { opacity: 0.8; }
          80% { opacity: 0.5; }
          100% { transform: translateX(200%) skewX(-30deg); opacity: 0; }
        }
        .animate-sci-fi-shine {
          animation: sci-fi-shine 3s infinite ease-in-out;
        }
        @keyframes marquee-ltr { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        @keyframes marquee-rtl { 0% { transform: translateX(-33.33%); } 100% { transform: translateX(0); } }
        .animate-marquee-ltr { animation: marquee-ltr 30s linear infinite; }
        .animate-marquee-rtl { animation: marquee-rtl 30s linear infinite; }
      `}} />

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-600/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src="/images/herobg.png" alt="hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#020617]/50 mix-blend-multiply"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-2xl p-5 md:p-8 mt-10 md:mt-0 mb-10 md:mb-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-white">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                We Don’t Just Control Pests <br className="hidden md:block" /> We Eliminate Them
              </h1>
              <p className="text-base md:text-lg text-blue-100 mb-8">Premium facility management solutions</p>
              <Link href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20am%20interested%20in%20your%20services.`} target="_blank">
                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-bold transition">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full z-20">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border-t border-white/10 px-4 md:px-4 py-3 md:py-4 text-center">
              <div><h3 className="text-xl md:text-2xl font-bold">5+</h3><p className="text-xs md:text-sm text-blue-100">Years Experience</p></div>
              <div><h3 className="text-xl md:text-2xl font-bold">100+</h3><p className="text-xs md:text-sm text-blue-100">Clients Served</p></div>
              <div><h3 className="text-xl md:text-2xl font-bold">Certified</h3><p className="text-xs md:text-sm text-blue-100 uppercase tracking-tighter md:tracking-normal">Advanced Treatments</p></div>
              <div><h3 className="text-xl md:text-2xl font-bold">Fast</h3><p className="text-xs md:text-sm text-blue-100">Same-Day Service</p></div>
            </div>
          </div>
        </section>

        {/* --- SERVICES GRID SECTION --- */}
        <section className="relative py-16 md:py-24 px-4 md:px-12 lg:px-20 overflow-hidden bg-[#e9b384]">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(rgba(0,0,0,0.18) 1.2px, transparent 1.2px)`, backgroundSize: "24px 24px" }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#332211] mb-4">Our Services</h2>
              <div className="w-20 md:w-24 h-1 bg-[#d38b5d] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
              {services.slice(0, 3).map((service, i) => (
                <Link href={service.link} key={i}>
                  <div className="group cursor-pointer bg-white/30 backdrop-blur-[12px] border border-white/40 rounded-[2.5rem] p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out">
                    <div className="overflow-hidden rounded-2xl mb-8 shadow-sm">
                      <img src={service.img} alt={service.title} className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2d1b0d] mb-3">{service.title}</h3>
                    <p className="text-[#4a3728] text-[15px] leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              {services.slice(3, 4).map((service, i) => (
                <Link href={service.link} key={i} className="block w-full md:w-[75%]">
                  <div className="group cursor-pointer bg-white/30 backdrop-blur-[12px] border border-white/40 rounded-[3rem] p-8 md:p-10 text-center w-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500">
                    <div className="overflow-hidden rounded-3xl mb-8 shadow-sm">
                      <img src={service.img} alt={service.title} className="w-full h-56 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2d1b0d] mb-4">{service.title}</h3>
                    <p className="text-[#4a3728] text-lg max-w-2xl mx-auto leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- ORBIT ECOSYSTEM SECTION --- */}
        <section className="relative min-h-screen py-3 md:py-10 w-full flex flex-col items-center justify-center overflow-hidden bg-[#1a0f08]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-orbit.png')" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, rgba(60,35,20,0.4), rgba(25,12,5,0.7))` }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.12),transparent_60%)]" />
            <div className="absolute inset-0 z-10 pointer-events-none">
              {stars.map((s, i) => (
                <div key={i} className="absolute w-1 h-1 bg-orange-200 rounded-full opacity-70 animate-pulse" style={{ left: `${s.left}%`, top: `${s.top}%` }} />
              ))}
            </div>
          </div>

          <div className="relative z-20 text-center mb-6 md:mb-12 px-6">
            <h2 className="text-4xl md:text-6xl font-black mb-2 italic text-white uppercase tracking-tighter drop-shadow-2xl">The LPC Ecosystem</h2>
            <p className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">360° Shield Technology</p>
          </div>

          <div className="relative z-10 flex justify-center items-center w-full h-[420px] md:h-[650px]">
            <div className="relative flex justify-center items-center scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-90 xl:scale-100 transition-transform duration-700">
              <div className="absolute w-[300px] h-[300px] border border-white/20 rounded-full" />
              <div className="absolute w-[550px] h-[550px] border border-white/30 rounded-full" style={{ boxShadow: '0 0 50px rgba(255,255,255,0.05)' }} />

              <motion.div
                animate={{ boxShadow: ["0 0 40px rgba(249,115,22,0.5)", "0 0 160px rgba(249,115,22,0.9)", "0 0 40px rgba(249,115,22,0.5)"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="z-30 w-48 h-48 bg-gradient-to-br from-orange-600 to-orange-500 border-2 border-orange-300/40 rounded-full flex flex-col items-center justify-center text-white relative"
              >
                <Zap className="text-white fill-white mb-2" size={44} />
<Link href="/services">
  <span className="font-black text-2xl text-center leading-none tracking-tighter cursor-pointer">
    PEST <br /> CONTROL
  </span>
</Link>              </motion.div>

              <motion.div className="absolute w-[750px] h-[750px] rounded-full pointer-events-none" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }}>
                {items.map((item, i) => (
                  <div key={i} className="absolute top-1/2 left-1/2" style={{ transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-${radius}px)` }}>
                    <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }} className="group pointer-events-auto">
                      <Link href={item.link}>
                        <div style={{ transform: `rotate(-${item.angle}deg)` }} className="relative w-32 h-32 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110 hover:border-orange-400/50 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                          <span className="text-xs font-black text-white uppercase tracking-widest text-center px-3 select-none">{item.label}</span>
                          <div className="absolute inset-0 rounded-full bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-500" />
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#120804] to-transparent z-10" />
        </section>
{/* --- LOGOS SECTION --- */}
<section className="py-12 md:py-20 bg-[#fbf5e9] overflow-hidden">
  <div className="flex flex-col gap-6 md:gap-8">
    
    {/* Row 1 */}
    <div className="relative flex overflow-hidden">
      <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap animate-marquee-ltr">
        {[...row1, ...row1, ...row1].map((logo, i) => (
          <div key={`row1-${i}`} className="relative flex items-center justify-center bg-white rounded-xl md:rounded-2xl shadow-sm border border-white/50 w-36 h-20 md:w-[230px] md:h-[120px] flex-shrink-0 overflow-hidden">
            <img 
              src={logo.src} 
              alt="client logo" 
              className="object-contain w-full h-full p-0 scale-110 md:scale-125" 
            />
          </div>
        ))}
      </div>
    </div>

    {/* Row 2 */}
    <div className="relative flex overflow-hidden">
      <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap animate-marquee-rtl">
        {[...row2, ...row2, ...row2].map((logo, i) => (
          <div key={`row2-${i}`} className="relative flex items-center justify-center bg-white rounded-xl md:rounded-2xl shadow-sm border border-white/50 w-36 h-20 md:w-[230px] md:h-[120px] flex-shrink-0 overflow-hidden">
            <img 
              src={logo.src} 
              alt="client logo" 
              className="object-contain w-full h-full p-0 scale-110 md:scale-125" 
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="w-full py-8 md:py-15 text-center bg-[#bc8032] px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Trusted by Industry Leaders</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-12" />
          <div className="flex justify-center">
            <div className="max-w-4xl w-full text-center">
              <div className="flex justify-center gap-2 text-orange-500 mb-6">
                {[...Array(5)].map((_, s) => <Star key={s} size={20} fill="currentColor" />)}
              </div>
              <p className="text-xl sm:text-2xl md:text-4xl font-semibold leading-relaxed text-white mb-10 italic">"{t.text}"</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0f172a] flex items-center justify-center font-bold text-white text-lg">
                    {t.initials}
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-bold text-lg text-white">{t.name}</p>
                  <p className="text-xs md:text-sm text-slate-300 uppercase tracking-widest">{t.role}</p>
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