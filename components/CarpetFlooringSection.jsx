"use client";
import React from 'react';

const CarpetFlooringSection = () => {
  const whatsappNumber = "919876543210"; 

  const solutionsList = [
  {
    title: "Carpet Tiles",
    image: "/images/carpet-flooring.jpg",
  },
  {
    title: "Carpet Rolls",
    image: "/images/carpet-rolls.webp",
  },
  {
    title: "Rubber Tile Flooring",
    image: "/images/rubber-flooring.jpg",
  },
  {
    title: "Rubber Roll Flooring",
    image: "/images/rubber-roll.jpg",
  },
  {
    title: "Handmade Carpets",
    image: "/images/handmade-carpet.avif",
  },
  {
    title: "Custom Designer Carpets",
    image: "/images/designer-carpet.avif",
  },
  {
    title: "Wooden Flooring",
    image: "/images/wooden-flooring.jpg",
  }
];

  const designServices = [
    "Enquiry-based design development (Cyp-Definity, Print, Axminster, etc.)",
    "Production-ready loom-specific designs",
    "Vector and Photoshop-based carpet designs",
    "2D & 3D room scenes for client presentations",
    "Carpet design visualization",
    "Wool-look and premium texture developments",
    "AI-assisted room creation and concept artwork",
    "Wallcovering design solutions"
  ];

  const planningServices = [
    "Carpet tile and LVT estimation",
    "Field and sheet carpet estimation",
    "Production planning",
    "Seaming and weaving layouts",
    "PCX conversion from AutoCAD files",
    "Wall preparation from scanned images and PDFs",
    "2D rendering",
    "Flood-in, overlays, and FFP support"
  ];

  const whyChooseUs = [
    "Customized flooring solutions",
    "Professional design consultation",
    "Accurate estimation and planning",
    "Commercial & industrial expertise",
    "Premium quality materials",
    "End-to-end project support"
  ];

  // Consistent Glass Style Helper
  const glassCardStyle = `
    relative overflow-hidden
    bg-white/10 backdrop-blur-xl
    border border-white/20
    rounded-3xl
    shadow-[0_20px_60px_rgba(0,0,0,0.4)]
    before:absolute before:inset-0
    before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent
    before:opacity-40 before:pointer-events-none
    transition-all duration-500
  `;

  return (
    <div className="relative min-h-screen bg-[#0f0a07] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* --- 🎯 HERO SECTION (UNSPLASH BACKGROUND) --- */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        {/* Modern Luxury Interior Background */}
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
          alt="Modern luxury interior"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Light Readability Overlay */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className={`${glassCardStyle} max-w-3xl p-8 md:p-12 space-y-6`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Professional Carpet <br/>
                <span className="text-orange-500">Flooring Solutions</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                Looking for professional carpet flooring solutions for your residential, commercial, or industrial space? We provide premium-quality products and design services tailored to your exact needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-950/20 text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- 🎯 BELOW SECTIONS (WARM BROWN LUXURY BACKGROUND) --- */}
      <div className="relative z-10">
        
        {/* Shared Background Image for all bottom sections */}
        <div className="absolute inset-0 z-0">
           <img
            src="/images/bg-clean.png" 
            alt="Warm flooring texture"
            className="w-full h-full object-cover fixed opacity-100"
          />
          {/* Warm Brown Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2b1a10]/70 via-[#1a0f08]/50 to-[#000]/40 pointer-events-none sticky top-0 h-full"></div>
        </div>

        <div className="relative z-10">
          {/* INTRODUCTION SECTION */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className={glassCardStyle + " p-8 md:p-10"}>
                 <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">Transforming Environments</h2>
                      <p className="text-white/70 leading-relaxed">
                        At LPC, we specialize in premium carpet design and flooring solutions tailored for offices, residential spaces, and commercial environments. Our expertise combines aesthetics with functionality.
                      </p>
                    </div>
                    <div className="border-l-2 border-orange-500/30 pl-8 italic text-white/60 text-sm md:text-base">
                      "With a deep understanding of your project requirements, we offer customized flooring options and end-to-end design support."
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* SOLUTIONS SECTION */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
               <div className={glassCardStyle + " p-8 md:p-10"}>
                  <h2 className="text-3xl font-bold mb-8 text-white">Our <span className="text-orange-500">Flooring Solutions</span></h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                   {solutionsList.map((item, i) => (
  <div
    key={i}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-105 transition-all duration-500"
  >
    {/* Image */}
    <div className="h-40 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>

    {/* Title */}
    <div className="absolute bottom-4 left-4 right-4">
      <h4 className="text-white font-semibold text-sm md:text-base">
        {item.title}
      </h4>
    </div>
  </div>
))}
                  </div>
               </div>
            </div>
          </section>

          {/* KEY SERVICES GRID */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
              <div className={glassCardStyle + " p-8 md:p-10"}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-orange-500"></span> Design Services
                </h3>
                <ul className="space-y-3">
                  {designServices.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                      <div className="w-1 h-1 mt-2.5 rounded-full bg-orange-500/60 flex-shrink-0"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={glassCardStyle + " p-8 md:p-10"}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-orange-500"></span> Planning & Estimation
                </h3>
                <ul className="space-y-3">
                  {planningServices.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                      <div className="w-1 h-1 mt-2.5 rounded-full bg-orange-500/60 flex-shrink-0"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="py-24 px-6 pb-32">
            <div className="max-w-7xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Why Choose <span className="text-orange-500">LPC?</span></h2>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className={glassCardStyle + " p-8 flex items-center gap-6 group hover:bg-white/10 transition-all"}>
                  <div className="w-10 h-10 rounded-lg bg-orange-600/20 text-orange-500 border border-orange-500/30 flex items-center justify-center flex-shrink-0 text-lg font-bold group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {index + 1}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">{item}</h4>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CarpetFlooringSection;