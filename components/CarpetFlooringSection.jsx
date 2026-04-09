"use client";
import React from 'react';

const CarpetFlooringSection = () => {
  const whatsappNumber = "917506102007"; 

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
      
      {/* --- 🎯 HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
          alt="Modern luxury interior"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className={`${glassCardStyle} max-w-3xl p-8 md:p-12 space-y-6`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Professional Carpet <br/>
                <span className="text-orange-500">Flooring Solutions</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                Looking for professional carpet flooring solutions for your residential, commercial, or industrial space? We provide premium-quality carpet flooring products and design services tailored to your exact needs. From elegant home interiors to durable office and industrial flooring, our solutions combine style, comfort, and long-lasting performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20am%20interested%20in%20Carpet%20and%20Rubber%20Flooring%20services.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-950/20 text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- 🎯 BELOW SECTIONS --- */}
      <div className="relative z-10">
        
        <div className="absolute inset-0 z-0">
           <img
            src="/images/bg-clean.png" 
            alt="Warm flooring texture"
            className="w-full h-full object-cover fixed opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2b1a10]/70 via-[#1a0f08]/50 to-[#000]/40 pointer-events-none sticky top-0 h-full"></div>
        </div>

        <div className="relative z-10">
          {/* INTRODUCTION SECTION */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className={glassCardStyle + " p-8 md:p-10"}>
                 <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">Professional Carpet Flooring Solutions for Every Space</h2>
                      <p className="text-white/70 leading-relaxed">
                        At LPC, we specialize in premium carpet design and flooring solutions tailored for offices, residential spaces, and commercial environments. Our expertise combines aesthetics with functionality to transform your spaces into elegant and comfortable environments.
                      </p>
                    </div>
                    <div className="border-l-2 border-orange-500/30 pl-8 italic text-white/60 text-sm md:text-base">
                      "With a deep understanding of your project requirements, we offer customized flooring options and end-to-end design support to help you create the perfect environment."
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* SOLUTIONS SECTION */}
<section className="py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <div className={glassCardStyle + " p-8 md:p-10"}>
      <h2 className="text-3xl font-bold mb-8 text-white">
        Our <span className="text-orange-500">Flooring Solutions</span>
      </h2>

      {/* Grid structure: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionsList.map((item, i) => {
          const isLast = i === solutionsList.length - 1;

          return (
           <div
  key={i}
  className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-[1.02] transition-all duration-500 shadow-xl
    ${isLast ? "sm:col-span-2 lg:col-span-3 lg:w-1/2 mx-auto" : ""}
  `}
>
  {/* 1 & 2. Full Height Container and Full Cover Image */}
  <div className="relative h-64 md:h-80 w-full overflow-hidden">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />

    {/* Subtle Dark Gradient Overlay for text contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

    {/* 4 & 5. Bottom Glass Bar with Centered Title */}
    <div className="absolute bottom-0 left-0 right-0 py-4 px-2 bg-white/10 backdrop-blur-md border-t border-white/20">
      <h4 className="text-white font-semibold text-center text-sm md:text-base tracking-wide drop-shadow-md">
        {item.title}
      </h4>
    </div>
  </div>

  {/* Wooden Brown Shine Effect (Applied only to centered last item) */}
  {isLast && (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#3d2616_100%)] opacity-60"></div>
    </div>
  )}
</div>
          );
        })}
      </div>
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