"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FacilityManagement = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState(null);

  const mainServices = [
    {
      title: "🧼 Carpet & Rubber Flooring",
      redirect: true,
      description: "We provide professional cleaning and maintenance for carpet and rubber flooring to ensure hygiene, durability, and a fresh environment.",
      process: ["🧽 Surface scrubbing", "💧 Deep cleaning", "✨ Stain removal & drying"],
      image: "/images/carpet-rubber-flooring.webp",
      images: ["/images/carpet-1.jpg", "/images/carpet-2.jpg"]
    },
    {
      title: "🧹 Carpet Cleaning",
      description: "Professional removal of bacteria, stains, and allergens for a pristine and healthy environment.",
      process: ["🧴 Deep extraction cleaning", "🌿 Odor neutralization", "🦠 Sanitization & drying"],
      image: "/images/carpet-cleaning.jpg",
      images: ["/images/carpet-3.png", "/images/carpet-4.png"]
    },
    {
      title: "🪨 Marble Polishing",
      description: "Restoring the natural luster of your stone surfaces with precision equipment and care.",
      process: ["💎 Diamond pad polishing", "🛡️ Surface sealing", "✨ High-gloss buffing"],
      image: "/images/marbel polishing.avif",
      images: ["/images/marbel-polishing.jpg", "public/images/marbel-polishing.avif"]
    }
  ];

  const otherServices = [
    {
      name: "🕊️ Bird Control and Protection Net",
      description: "Protection solutions to prevent bird nesting and damage.",
      process: ["🔍 Site inspection", "🛠️ Net installation", "🔒 Secure fitting"],
      images: ["/images/bird-1.jpg", "/images/bird-2.jpg"]
    },
    {
      name: "🚢 Container Fumigation",
      description: "Effective fumigation for pest-free cargo and storage.",
      process: ["☁️ Gas treatment", "📦 Sealing", "🌬️ Ventilation"],
      images: ["/images/fumi-1.jpg", "/images/fumi-2.jpg"]
    },
    {
      name: "🚰 Tank & Drain Cleaning",
      description: "Deep cleaning for hygiene and safe water systems.",
      process: ["🧹 Sludge removal", "💦 Pressure cleaning", "🧴 Disinfection"],
      images: ["/images/tank-1.jpg", "/images/tank-2.jpg"]
    },
    {
      name: "🧴 Sanitization",
      description: "Complete sanitization for safe and germ-free spaces.",
      process: ["🌫️ Spray treatment", "🧻 Surface wipe", "🌬️ Air sanitization"],
      images: ["/images/san-1.jpg", "/images/san-2.jpg"]
    },
    {
      name: "🚿 Jet Spray Cleaning",
      description: "High-pressure cleaning for tough dirt and surfaces.",
      process: ["💨 Pressure wash", "🧽 Deep scrub", "💧 Final rinse"],
      images: ["/images/jet-1.jpg", "/images/jet-2.jpg"]
    },
    {
  name: "🖥️ Data Center Cleaning Services",
  description: "Ensure maximum performance and reliability of your IT infrastructure with our specialized data center cleaning services. We provide deep cleaning for racks, cables, wiring systems, and critical hardware components.",
  process: [
    "🔍 Precision inspection",
    "🧹 Dust & contamination removal",
    "💻 Component-level cleaning",
    "🌬️ Airflow optimization"
  ],
  images: ["/images/datacenter-1.png", "/images/datacenter-2.png","/images/datacenter-3.png"]
}
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#1a0c05] via-[#2d180a] to-[#0a0503] py-24 px-6 overflow-hidden">
      
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-orange-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl">
          Facility Management <span className="text-orange-500">Services</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* MAIN SERVICES */}
        {mainServices.map((service, index) => (
          <div
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              if (service.redirect) {
                router.push("/carpet-flooring");
              } else {
                setSelectedService(service);
              }
            }}
            className="group relative z-20 cursor-pointer flex flex-col md:flex-row bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[3rem] overflow-hidden 
                       shadow-[0_20px_60px_rgba(255,255,255,0.12)] 
                       hover:shadow-[0_30px_80px_rgba(255,255,255,0.18)] 
                       hover:border-white/50 hover:-translate-y-3 hover:scale-[1.02] 
                       transition-all duration-500 ease-out 
                       min-h-[380px] md:min-h-[420px]
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/25 before:via-transparent before:to-transparent before:opacity-60 before:rounded-[inherit] before:pointer-events-none"
          >
            <div className="w-full md:w-2/5 relative overflow-hidden h-[300px] md:h-auto border-r border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="w-full md:w-3/5 p-12 md:p-16 flex flex-col justify-center space-y-6 relative bg-gradient-to-br from-white/15 via-white/5 to-transparent">
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-orange-400 transition-colors drop-shadow-md">
                {service.title}
              </h3>
              <p className="text-lg text-gray-100 leading-relaxed font-normal opacity-90">
                {service.description}
              </p>
              
              <div className="flex items-center space-x-4 text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
                <span className="h-[1px] w-8 bg-orange-500 transition-all group-hover:w-12"></span>
                <span>Discover More</span>
              </div>
            </div>
          </div>
        ))}

        {/* OTHER SERVICES */}
        <div className="relative bg-white/15 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-12 md:p-16 
                        shadow-[0_20px_60px_rgba(255,255,255,0.08)] 
                        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-40 before:rounded-[inherit] before:pointer-events-none">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
            Specialized Care
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                }}
                className="cursor-pointer p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl transition-all duration-500 
                           hover:bg-white/25 hover:scale-105 hover:border-white/40 group shadow-lg
                           flex items-center justify-between min-h-[100px]"
              >
                <div className="text-white text-lg font-medium group-hover:text-orange-300 transition-colors">
                  {service.name}
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:border-transparent transition-all">
                  +
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP MODAL - FIXED FOR MOBILE */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center bg-black/85 backdrop-blur-md p-6 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && setSelectedService(null)}
        >
          <div
            className="relative bg-white/20 backdrop-blur-[50px] border border-white/40 rounded-[3rem] max-w-5xl w-full p-6 md:p-10 max-h-[90vh] overflow-y-auto
                       shadow-[0_40px_100px_rgba(255,255,255,0.15)] 
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-transparent before:opacity-70 before:rounded-[inherit] before:pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 border border-white/20 transition-all duration-300 shadow-xl z-50"
            >
              ✕
            </button>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pr-10 tracking-tight">
              {selectedService.title || selectedService.name}
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* LEFT SIDE: IMAGES */}
              {selectedService.images && (
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  {selectedService.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-2xl border border-white/10">
                      <img 
                        src={img} 
                        alt="Service Highlight" 
                        className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* RIGHT SIDE: CONTENT */}
              <div className="w-full md:w-1/2">
                <p className="text-lg text-gray-100 mb-6 leading-relaxed font-light">
                  {selectedService.description}
                </p>

                {selectedService.process && (
                  <div className="space-y-4">
                    <p className="text-orange-400 font-bold uppercase tracking-widest text-[10px]">Service Roadmap</p>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedService.process.map((step, i) => (
                        <div key={i} className="flex items-center space-x-4 bg-white/10 p-4 rounded-[1.5rem] border border-white/10 hover:bg-white/20 transition-colors">
                          <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-orange-500/30 text-orange-400 flex items-center justify-center font-bold border border-orange-500/30 text-sm shadow-inner">
                            {i + 1}
                          </span>
                          <span className="text-white text-md font-light">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* WHATSAPP BUTTON */}
                <a
                  href={`https://wa.me/7506102007?text=Hello, I am interested in ${selectedService.title || selectedService.name} service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                    WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilityManagement;