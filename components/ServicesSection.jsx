"use client"
import Link from "next/link";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Plus, 
  ShieldCheck, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  Bug,
  Wind,
  Droplets,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const [selectedResidential, setSelectedResidential] = useState(null);
  const [openCommercial, setOpenCommercial] = useState(null);

  const residential = [
    {
      id: 'bedbug',
      title: 'Bed Bug Control',
      short: 'Complete eradication using high-heat and spray tech.',
      full: 'Our specialized bed bug treatment uses a dual-action approach: thermal remediation to kill eggs and eco-friendly chemical barriers for long-term mattress protection.',
      steps: ['Inspection', 'Heat Treatment', 'Chemical Spray', 'Certification'],
      image: '/images/bedbug1.png',
      gallery: ['/images/bedbug2.png', '/images/bedbug3.png']
    },
    {
      id: 'mosquito',
      title: 'Mosquito Control',
      short: 'Advanced fogging and larva control for all-season safety.',
      full: 'We target both adult populations and breeding grounds. Our process includes thermal fogging for perimeters and larvicide application in stagnant water zones.',
      steps: ['Mapping', 'Larvicide', 'Fogging', 'Netting'],
      image: '/images/mosquitos1.png',
      gallery: ['/images/mosquitos2.png', '/images/mosquitos3.png']
    },
    {
      id: 'rodent',
      title: 'Rodent Control',
      short: 'Strategic exclusion and trapping for 100% elimination.',
      full: 'Total rodent management involving ultrasonic repellents, structural sealing of entry points, and humane baiting stations tailored for residential layouts.',
      steps: ['Entry Check', 'Sealing', 'Trapping', 'Sanitization'],
      image: '/images/rodent1.png',
      gallery: ['/images/rodent2.png', '/images/rodent3.png']
    },
    {
      id: 'termite',
      title: 'Termite Control',
      short: 'Pre & Post construction protection for your property.',
      full: 'Industry-leading sub-soil barriers and injection treatments. We use non-repellent liquid termiticides that eliminate entire colonies through contact.',
      steps: ['Drilling', 'Injection', 'Soil Barrier', 'Warranty'],
      image: '/images/termite1.png',
      gallery: ['/images/termite2.png', '/images/termite3.png']
    }
  ];

 

  return (
    <div className="min-h-screen bg-[#1a120b] text-stone-200 font-sans selection:bg-[#ff9f1c]/30 overflow-x-hidden">
      
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1a120b] via-[#2b1d0e] to-[#5a3e1b]/30 pointer-events-none" />
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[550px] flex items-center px-6 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600"
          alt="Pest Control"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* WOODEN BROWN OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a120b]/90 via-[#2b1d0e]/80 to-[#1a120b]/90"></div>

        {/* ORANGE GLOW (premium touch) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff9f1c]/10 via-transparent to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">

          <div className="max-w-xl">

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-stone-100">
              Safe, Effective & <br />
              <span className="text-[#ff9f1c]">
                Reliable Pest Control
              </span>
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

      {/* --- RESIDENTIAL CARDS GRID --- */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-stone-100">
          Residential Services <div className="h-px flex-1 bg-[#ff9f1c]/20" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {residential.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedResidential(item)}
              className="group cursor-pointer relative p-8 rounded-[32px] bg-[#2b1d0e]/40 border border-[#ff9f1c]/20 backdrop-blur-xl transition-all hover:border-[#ff9f1c]/40"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <img src={item.image} className="w-full sm:w-40 h-40 object-cover rounded-2xl grayscale-[0.3] group-hover:grayscale-0 transition-all" alt={item.title} />
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ff9f1c] transition-colors text-stone-100">{item.title}</h3>
                  <p className="text-stone-400 text-sm mb-4 leading-relaxed">{item.short}</p>
                  <span className="text-xs font-bold text-[#ff9f1c] uppercase tracking-widest flex items-center gap-2">
                    View Process <Plus size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
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
            <div key={i} className="p-10 rounded-[40px] bg-[#2b1d0e]/40 border border-[#ff9f1c]/10 text-center group hover:border-[#ff9f1c]/30 transition-all">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-[#ff9f1c]/10 flex items-center justify-center text-[#ff9f1c] mb-6 group-hover:bg-[#ff9f1c] group-hover:text-[#1a120b] transition-all">
                {step.i}
              </div>
              <h4 className="text-xl font-bold mb-2 text-stone-100">{step.t}</h4>
              <p className="text-stone-500 text-sm">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- RESIDENTIAL CENTER MODAL --- */}
      <AnimatePresence>
        {selectedResidential && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedResidential(null)}
              className="absolute inset-0 bg-[#1a120b]/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-[#2b1d0e] border border-[#ff9f1c]/20 rounded-[48px] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <button 
                onClick={() => setSelectedResidential(null)}
                className="absolute top-8 right-8 z-10 p-3 rounded-full bg-[#ff9f1c]/10 hover:bg-[#ff9f1c]/20 border border-[#ff9f1c]/20 text-[#ff9f1c] transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 p-10 bg-[#1a120b]/40 border-r border-[#ff9f1c]/10">
                  <h3 className="text-3xl font-bold mb-6 text-[#ff9f1c]">{selectedResidential.title}</h3>
                  <div className="space-y-4">
                    {selectedResidential.gallery.map((img, idx) => (
                      <img key={idx} src={img} className="rounded-3xl w-full h-36 object-cover border border-[#ff9f1c]/10 shadow-lg" alt="process" />
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-3/5 p-12 flex flex-col justify-center">
                  <p className="text-stone-300 leading-relaxed mb-8 text-lg">{selectedResidential.full}</p>
                  
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff9f1c] mb-6">Service Pillars</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedResidential.steps.map((step, i) => (
                      <span key={i} className="px-5 py-2 rounded-full bg-[#ff9f1c]/10 border border-[#ff9f1c]/30 text-[#ff9f1c] text-xs font-bold">
                        {step}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full mt-12 py-5 rounded-2xl bg-[#ff9f1c] text-[#1a120b] font-bold transition-all hover:scale-[1.02] shadow-xl">
                    Book Service Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ServicesSection;