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
     <section
  className="min-h-screen w-full flex flex-col items-center pt-20 py-10 bg-cover bg-center relative overflow-hidden"
  style={{
    backgroundImage: `url('/images/bg-clean.png')`,
    backgroundPosition: 'center 30%'
  }}
>

  {/* 🔥 NORMAL DARK WOODEN OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1a120b]/60 via-[#2b1d0e]/50 to-[#1a120b]/60"></div>

  {/* 🔥 SUBTLE ORANGE GLOW */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#ff9f1c]/7 via-transparent to-transparent"></div>

        {/* 🔥 STRIP COVER HEADER */}
        <div className="w-full flex justify-center py-14 -mt-20 mb-16 relative">

          <div className="absolute inset-0 bg-gradient-to-r from-[#1a120b]/80 via-[#2b1d0e]/70 to-[#1a120b]/80 backdrop-blur-sm"></div>

          <div className="absolute inset-0 border-y border-[#ff9f1c]/20"></div>

          <h1 className="text-[#f5e6d3] text-4xl md:text-5xl font-serif tracking-wide relative z-10 text-center">
            Pest Control Services
          </h1>
        </div>

        <div className="max-w-[1280px] w-full px-6 flex flex-col gap-16 relative">

          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden lg:block"></div>
{services.map((item) => (
  <div
    key={item.id}
    className={`relative p-8 md:p-10 rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/30 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15),inset_0_0_0_1px_rgba(255,255,255,0.4)] group transition-all duration-500 grid lg:grid-cols-2 gap-12 items-center ${
      item.reverse ? "lg:[&>div:first-child]:order-2" : ""
    }`}
  >
    {/* --- GLASS SURFACE SHINE & REFLECTIONS --- */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      
      {/* Top Glossy Rim Light */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/80 opacity-70"></div>
      
      {/* Sharp Corner Sparkle */}
      <div className="absolute top-4 left-6 w-1.5 h-1.5 bg-white rounded-full blur-[1.5px] opacity-60"></div>
      
      {/* Fixed Top Reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-30"></div>
    </div>

    {/* --- IMAGES SIDE --- */}
    <div className="flex flex-col gap-5 relative z-10">
      <div className="h-[280px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <img 
          src={item.mainImg} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          alt={item.title} 
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="h-[160px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <img src={item.subImg1} className="w-full h-full object-cover" alt="Detail 1" />
        </div>
        <div className="h-[160px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <img src={item.subImg2} className="w-full h-full object-cover" alt="Detail 2" />
        </div>
      </div>
    </div>

    {/* --- CONTENT SIDE --- */}
    <div className="flex flex-col justify-center text-left relative z-10">
      <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {item.title}
      </h3>

      <p className="text-zinc-200 text-[16px] leading-[1.8] mb-4 font-light">
        {item.desc1}
      </p>

      <p className="text-zinc-300 text-[15px] leading-[1.8] mb-8 font-light italic border-l-2 border-white/20 pl-5">
        {item.desc2}
      </p>

      {/* WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full md:w-fit text-center px-10 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_15px_35px_rgba(37,211,102,0.4)]"
        style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
      >
        Book via WhatsApp
      </a>
    </div>
  </div>
))}
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