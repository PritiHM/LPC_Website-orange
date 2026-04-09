"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bug, Wind, Droplets, Zap } from 'lucide-react';
import Link from "next/link";

const ServicesSection = () => {
  const [selectedResidential, setSelectedResidential] = useState(null);
  const [openCommercial, setOpenCommercial] = useState(null);

  const whatsappNumber = "917506102007"; 

  const services = [
  {
    id: "mosquito",
    title: "Professional Mosquito Control",
    desc1: "Mosquitoes are among the most dangerous pests, spreading harmful diseases like malaria, dengue, and chikungunya. Our specialized treatment eliminates mosquitoes from indoor and outdoor spaces while targeting breeding zones and stagnant water.",
    desc2: "Our advanced process includes fogging, spraying, and larva control using eco-friendly treatments (Bti and methoprene). We target the life cycle from dormant eggs to larvae before they pupate to ensure long-lasting protection for your premises.",
    mainImg: "/images/mosquitos1.png",
    subImg1: "/images/mosquitos2.png",
    subImg2: "/images/mosquitos3.png",
    reverse: false,
  },
  {
    id: "rodent",
    title: "Rodent (Mouse) Control",
    desc1: "Rats and mice cause serious property damage by chewing electrical wires, furniture, and food packaging. They carry harmful bacteria and diseases, making timely professional intervention essential for a hygienic environment.",
    desc2: "Our trained professionals use advanced trapping, baiting, and sealing methods to identify infestation points and prevent future entry. We provide reliable results for homes, warehouses, restaurants, and industrial spaces.",
    mainImg: "/images/rodent1.png",
    subImg1: "/images/rodent2.png",
    subImg2: "/images/rodent3.png",
    reverse: true,
  },
  {
    id: "termite",
    title: "Termite Pest Control",
    desc1: "Termites are silent destroyers that damage wooden furniture, flooring, and building foundations without visible signs. Our specialized anti-termite treatment helps detect and eliminate these pests before they cause structural failure.",
    desc2: "We provide both pre-construction and post-construction termite protection. Our experts use advanced soil and wood treatment methods to ensure complete colony eradication and long-term peace of mind for your property.",
    mainImg: "/images/termite1.png",
    subImg1: "/images/termite2.png",
    subImg2: "/images/termite3.png",
    reverse: false,
  },
  {
    id: "bedbug",
    title: "Bed Bug Pest Control",
    desc1: "Bed bugs hide in mattresses, sofas, and furniture joints, causing skin irritation and sleepless nights. Timely treatment is essential to protect homes, hotels, and commercial spaces from these persistent blood-feeding pests.",
    desc2: "Our specialized services include deep detection, heat treatment, mattress treatment, and residual spraying. We eliminate hidden infestations completely and use safe methods to prevent them from returning to your environment.",
    mainImg: "/images/bedbug1.png",
    subImg1: "/images/bedbug2.png",
    subImg2: "/images/bedbug3.png",
    reverse: true,
  }
];
  return (
    <div className="min-h-screen bg-[#1a120b] text-stone-200 font-sans selection:bg-[#ff9f1c]/30 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[550px] flex items-center px-6 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600"
          alt="Pest Control"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#1a120b]/80 via-[#2b1d0e]/60 to-[#1a120b]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff9f1c]/10 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-stone-100">
              Safe, Effective & <br />
              <span className="text-[#ff9f1c]">Reliable Pest Control</span>
            </h1>

            <p className="text-stone-300 mb-6">
              Protect your home and business with advanced pest management solutions.
            </p>

            <Link href="/pestcontrol">
              <button className="bg-[#ff9f1c] text-[#1a120b] px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                Get Service
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
    {/* --- ADVANCED SCI-FI GLASS ANIMATIONS --- */}
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
`}} />

<section
  className="min-h-screen w-full flex flex-col items-center pt-20 py-10 bg-[#0a0a0a] relative overflow-hidden"
  style={{
    backgroundImage: `url('/images/bg-clean.png')`,
    backgroundPosition: 'center 30%'
  }}
>
  {/* BACKGROUND LIGHT AURA */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#121212]/80 to-[#0a0a0a]/90"></div>

  {/* LUMINOUS GLASS HEADER */}
  <div className="w-full flex justify-center py-10 -mt-20 mb-20 relative z-30">
    <div className="relative px-16 py-8 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.1),inset_0_0_15px_rgba(255,255,255,0.15)] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-100 shadow-[0_0_10px_white]"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] skew-x-[-30deg] animate-sci-fi-shine"></div>
      <h1 className="text-white text-4xl md:text-6xl font-serif tracking-widest relative z-10 text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        Pest Control Services
      </h1>
    </div>
  </div>

  <div className="max-w-[1280px] w-full px-6 flex flex-col gap-24 relative z-10">
    {/* Center Divider Light Line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/40 via-white/5 to-transparent -translate-x-1/2 hidden lg:block"></div>
    
    {services.map((item, index) => {
      // Determine if this card should be reversed (2nd, 4th, etc.)
      const isReversed = index % 2 !== 0;

      return (
        <div
          key={item.id}
          className="relative p-8 md:p-10 rounded-[40px] 
            bg-white/[0.04] backdrop-blur-3xl 
            border-[1.5px] border-white/40
            shadow-[0_0_50px_rgba(148,163,184,0.15),0_0_20px_rgba(255,255,255,0.1),inset_0_0_20px_rgba(255,255,255,0.1),inset_0_0_2px_2px_rgba(255,255,255,0.2)]
            group transition-all duration-700 
            grid lg:grid-cols-2 gap-12 items-center"
        >
          
          {/* GLASS PHYSICS LAYER */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[40px] z-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.8)] opacity-90"></div>
            <div className="absolute -top-1 -left-1 w-12 h-12 bg-white/20 blur-xl rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-blue-400/10 blur-xl rounded-full"></div>
            <div className="absolute top-0 bottom-0 w-64 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent -translate-x-[200%] skew-x-[-30deg] group-hover:animate-sci-fi-shine"></div>
          </div>

          {/* --- IMAGES SIDE --- */}
          {/* Added lg:order-last on odd indexes to create zig-zag */}
          <div className={`flex flex-col gap-5 relative z-10 ${isReversed ? 'lg:order-last' : 'lg:order-first'}`}>
            <div className="h-[300px] rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <img 
                src={item.mainImg} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt={item.title} 
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="h-[160px] rounded-2xl overflow-hidden border border-white/10">
                <img src={item.subImg1} className="w-full h-full object-cover" alt="Detail 1" />
              </div>
              <div className="h-[160px] rounded-2xl overflow-hidden border border-white/10">
                <img src={item.subImg2} className="w-full h-full object-cover" alt="Detail 2" />
              </div>
            </div>
          </div>

          {/* --- CONTENT SIDE --- */}
          <div className="flex flex-col justify-center text-left relative z-10">
            <h3 className="text-white text-3xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              {item.title}
            </h3>
            <p className="text-white/90 text-[17px] leading-[1.8] mb-6 font-medium">
              {item.desc1}
            </p>
            <p className="text-white/70 text-[15px] leading-[1.8] mb-8 font-light italic border-l-2 border-white/40 pl-6 bg-white/5 py-2">
              {item.desc2}
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-fit text-center px-10 py-5 rounded-2xl font-black text-white uppercase tracking-widest transition-all duration-300 hover:scale-[1.05] hover:brightness-110 active:scale-95 shadow-[0_0_30px_rgba(37,211,102,0.4)]"
              style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      );
    })}
  </div>
</section>

      {/* --- WORKFLOW SECTION --- */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[ 
            { t: 'Inspection', i: <Bug />, d: 'Area mapping & entry points.' },
            { t: 'Planning', i: <Wind />, d: 'Custom chemical strategies.' },
            { t: 'Treatment', i: <Droplets />, d: 'Surgical elimination phase.' },
            { t: 'Prevention', i: <Zap />, d: 'Ongoing seal & monitoring.' }
          ].map((step, i) => (
            <div key={i} className="p-10 rounded-[40px] bg-[#2b1d0e]/40 border border-[#ff9f1c]/10 text-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-[#ff9f1c]/10 flex items-center justify-center text-[#ff9f1c] mb-6">
                {step.i}
              </div>
              <h4 className="text-xl font-bold mb-2 text-stone-100">{step.t}</h4>
              <p className="text-stone-500 text-sm">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ServicesSection;