"use client"
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
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
      gallery: ['https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400', 'https://images.unsplash.com/photo-1581578731522-745d05ad9a2d?w=400']
    },
    {
      id: 'mosquito',
      title: 'Mosquito Control',
      short: 'Advanced fogging and larva control for all-season safety.',
      full: 'We target both adult populations and breeding grounds. Our process includes thermal fogging for perimeters and larvicide application in stagnant water zones.',
      steps: ['Mapping', 'Larvicide', 'Fogging', 'Netting'],
      image: 'https://images.unsplash.com/photo-1590634159381-8d264f6932e6?w=800',
      gallery: ['https://images.unsplash.com/photo-1563132337-f159f484226c?w=400', 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400']
    },
    {
      id: 'rodent',
      title: 'Rodent Control',
      short: 'Strategic exclusion and trapping for 100% elimination.',
      full: 'Total rodent management involving ultrasonic repellents, structural sealing of entry points, and humane baiting stations tailored for residential layouts.',
      steps: ['Entry Check', 'Sealing', 'Trapping', 'Sanitization'],
      image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=800',
      gallery: ['https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400', 'https://images.unsplash.com/photo-1558231261-f093122f87a6?w=400']
    },
    {
      id: 'termite',
      title: 'Termite Control',
      short: 'Pre & Post construction protection for your property.',
      full: 'Industry-leading sub-soil barriers and injection treatments. We use non-repellent liquid termiticides that eliminate entire colonies through contact.',
      steps: ['Drilling', 'Injection', 'Soil Barrier', 'Warranty'],
      image: 'https://images.unsplash.com/photo-1621905252507-b354bcadc445?w=800',
      gallery: ['https://images.unsplash.com/photo-1554224155-1696413565d3?w=400', 'https://images.unsplash.com/photo-1589939705384-5185138a04b9?w=400']
    }
  ];

  const commercial = [
    { title: 'Carpet Cleaning', desc: 'Deep-extraction steam cleaning for heavy-duty commercial carpets.' },
    { title: 'Marble Polishing', desc: 'Diamond-grade polishing to restore shine to corporate lobbies.' },
    { title: 'Bird Control Net', desc: 'High-density polyethylene (HDPE) netting for long-term balcony protection.' },
    { title: 'Container Fumigation', desc: 'ISPM-15 compliant fumigation for export containers and wooden pallets.' },
    { title: 'Tank & Drain Cleaning', desc: 'Automated high-pressure cleaning for industrial water storage systems.' },
    { title: 'Sanitization', desc: 'Hospital-grade misting services for office spaces and industrial units.' },
    { title: 'Jet Spray Cleaning', desc: 'Specialized pressure washing for building facades and heavy equipment.' }
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-slate-200 font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* Background Gradient Layer */}
 <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1220] via-[#0d1b2a] to-[#3b2a1a]/30 pointer-events-none" />
      {/* --- HERO SECTION --- */}
   <section className="relative h-[550px] flex items-center px-6 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600"
    alt="Pest Control"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK BLUE OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220]/90 via-[#0d1b2a]/80 to-[#0b1220]/90"></div>

  {/* ORANGE GLOW (premium touch) */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#ffb84e]/10 via-transparent to-transparent"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto w-full">

    <div className="max-w-xl">

      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        Safe, Effective & <br />
        <span className="text-[#ffb84e]">
          Reliable Pest Control
        </span>
      </h1>

      <p className="text-gray-300 mb-6">
        Protect your home and business with advanced pest management solutions.
      </p>

      <button className="bg-[#ffb84e] text-[#0b1220] px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
        Get Service
      </button>

    </div>

  </div>

</section>

      {/* --- RESIDENTIAL CARDS GRID --- */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          Residential Services <div className="h-px flex-1 bg-white/10" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {residential.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedResidential(item)}
              className="group cursor-pointer relative p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:border-orange-500/40"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <img src={item.image} className="w-full sm:w-40 h-40 object-cover rounded-2xl" alt={item.title} />
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ffb84e] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.short}</p>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2">
                    View Process <Plus size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- COMMERCIAL ACCORDION LIST --- */}
      <section className="relative py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Facility Management</h2>
          <p className="text-gray-500">Corporate-grade cleaning and maintenance solutions.</p>
        </div>

        <div className="space-y-4">
          {commercial.map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-white/5 border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenCommercial(openCommercial === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold">{item.title}</span>
                <div className={`p-2 rounded-full transition-transform duration-300 ${openCommercial === idx ? 'rotate-180 bg-orange-500 text-[#0b1220]' : 'bg-white/5'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openCommercial === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm border-t border-white/5 bg-[#0d1b2a]/30">
                      <p className="leading-relaxed mb-4">{item.desc}</p>
                      <div className="flex items-center gap-4 text-orange-400/80 text-xs font-bold uppercase">
                        <span className="flex items-center gap-1"><ShieldCheck size={14}/> Certified Process</span>
                        <span className="flex items-center gap-1"><CheckCircle2 size={14}/> 100% Safe</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
            <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/5 text-center group hover:border-orange-500/30 transition-all">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-400 group-hover:text-[#0b1220] transition-all">
                {step.i}
              </div>
              <h4 className="text-xl font-bold mb-2">{step.t}</h4>
              <p className="text-gray-500 text-sm">{step.d}</p>
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
              className="absolute inset-0 bg-[#0b1220]/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0d1b2a] border border-white/20 rounded-[48px] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <button 
                onClick={() => setSelectedResidential(null)}
                className="absolute top-8 right-8 z-10 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 p-10 bg-white/5 border-r border-white/10">
                  <h3 className="text-3xl font-bold mb-6 text-[#ffb84e]">{selectedResidential.title}</h3>
                  <div className="space-y-4">
                    {selectedResidential.gallery.map((img, idx) => (
                      <img key={idx} src={img} className="rounded-3xl w-full h-36 object-cover border border-white/10 shadow-lg" alt="process" />
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-3/5 p-12 flex flex-col justify-center">
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">{selectedResidential.full}</p>
                  
                  <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">Service Pillars</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedResidential.steps.map((step, i) => (
                      <span key={i} className="px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-bold">
                        {step}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full mt-12 py-5 rounded-2xl bg-[#ffb84e] text-[#0b1220] font-bold transition-all hover:scale-[1.02] shadow-xl">
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