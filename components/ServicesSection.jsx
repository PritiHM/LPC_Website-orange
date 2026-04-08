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
      title: "Mosquito Control",
      desc1: "Mosquitoes are vector insects known for carrying and transmitting diseases like malaria and Zika virus. They thrive in areas with standing water, risking potential health risks to humans and pets.",
      desc2: "The full treatment process involves a comprehensive site survey, application of targeted mosquito larvicides, and a continuous barrier treatment for ongoing protection.",
      mainImg: "/images/mosquitos1.png",
      subImg1: "/images/mosquitos2.png",
      subImg2: "/images/mosquitos3.png",
      reverse: false,
    },
    {
      id: "rodent",
      title: "Rodent (Mouse) Control",
      desc1: "Rodents can infiltrate a structure through small openings. The inspection ensures property damage from gnawing is minimized by using enticing bait stations.",
      desc2: "Integrated trapping and exclusion methods secure the property against these silent pests, preventing structural damage and health risks.",
      mainImg: "/images/rodent1.png",
      subImg1: "/images/rodent2.png",
      subImg2: "/images/rodent3.png",
      reverse: true,
    },
    {
      id: "termite",
      title: "Termite Control",
      desc1: "Termites are cryptic in nature. The enormous structural damage they cause annually requires expert exclusion in structural timber using acoustic devices.",
      desc2: "The detailed treatment process uses chemical barriers and monitoring systems to ensure total colony eradication and long-term safety.",
      mainImg: "/images/termite1.png",
      subImg1: "/images/termite2.png",
      subImg2: "/images/termite3.png",
      reverse: false,
    },
    {
      id: "bedbug",
      title: "Bed Bug Control",
      desc1: "Bed bugs are small, blood-sucking pests that hide in mattresses and furniture. Their bites can cause itching and sleepless nights in homes and hotels.",
      desc2: "We use safe methods such as heat treatment and deep inspection to eliminate bed bugs completely and prevent future infestations.",
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
            <div key={item.id}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                item.reverse ? "lg:[&>div:first-child]:order-2" : ""
              }`}>

              {/* IMAGES */}
              <div className="flex flex-col gap-4">
                <div className="h-[240px] rounded-2xl overflow-hidden">
                  <img src={item.mainImg} className="w-full h-full object-cover" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="h-[140px] rounded-xl overflow-hidden">
                    <img src={item.subImg1} className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[140px] rounded-xl overflow-hidden">
                    <img src={item.subImg2} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center text-left max-w-[600px]">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-300 text-[15px] leading-[1.8] mb-4">
                  {item.desc1}
                </p>

                <p className="text-zinc-300 text-[15px] leading-[1.8] mb-6">
                  {item.desc2}
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  className="inline-block w-fit px-6 py-3 rounded-xl font-medium"
                  style={{
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    color: "white",
                  }}>
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