"use client";
import React, { useState } from "react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("Residential");
  const [selectedService, setSelectedService] = useState(null);

  const tabs = ["Residential", "Commercial"];

  const residentialServices = [
    { id: 1, title: "Bed Bugs", desc: "Effective bed bug control for homes.Effective bed bug control for homes.", img: "/images/bedbug.jpg" },
    { id: 2, title: "Cockroach", desc: "Safe cockroach treatment for kitchen & home.Effective bed bug control for homes.", img: "/images/cockroachs.jpg" },
    { id: 3, title: "Mosquito", desc: "Protect your family from mosquito diseases.Effective bed bug control for homes.", img: "/images/mosquito.webp" },
    { id: 4, title: "Termite", desc: "Protect wooden furniture from termite damage.Effective bed bug control for homes.", img: "/images/termite.jpg" },
    { id: 5, title: "Rodent", desc: "Home rodent control solutions.Effective bed bug control for homes.", img: "/images/mouse.webp" },
    { id: 6, title: "Disinfection", desc: "Home sanitization services.Effective bed bug control for homes.", img: "/images/disinfection.jpeg" },
  ];

  const commercialServices = [
    { id: 1, title: "Bed Bugs", desc: "Office bed bug control services.Effective bed bug control for homes.", img: "/images/bedbug.jpg" },
    { id: 2, title: "Cockroach", desc: "Commercial cockroach pest solutions.Effective bed bug control for homes.", img: "/images/cockroachs.jpg" },
    { id: 3, title: "Mosquito", desc: "Mosquito control for large spaces.Effective bed bug control for homes.", img: "/images/mosquito.webp" },
    { id: 4, title: "Termite", desc: "Industrial termite protection.Effective bed bug control for homes.", img: "/images/termite.jpg" },
    { id: 5, title: "Rodent", desc: "Warehouse rodent control.Effective bed bug control for homes.", img: "/images/mouse.webp" },
    { id: 6, title: "Disinfection", desc: "Office deep sanitization.Effective bed bug control for homes.", img: "/images/disinfection.jpeg" },
  ];

  const displayServices =
    activeTab === "Residential"
      ? residentialServices
      : commercialServices;

  return (
<section className="pt-30 relative py-16 px-4 bg-gradient-to-b from-[#3d1a0a] via-[#52310f] to-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Services</h2>

          <div className="flex justify-center mt-6">
            <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                    activeTab === tab
                      ? "bg-white text-[#3d1a0a]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {displayServices.map((service) => (
    <div
      key={service.id}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 min-h-[380px] flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
      onClick={() => setSelectedService(service)}
    >
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-48 sm:h-52 object-cover rounded-xl mb-5"
      />

      <div className="flex flex-col flex-grow px-1">
        <h3 className="text-black font-bold text-xl sm:text-2xl mb-3">
          {service.title}
        </h3>

        <p className="text-black/80 text-base leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  ))}
</div>

        {selectedService && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 text-gray-600 text-xl"
              >
                ✕
              </button>

              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-bold mb-2">
                {selectedService.title}
              </h3>

              <p className="text-gray-600">
                {selectedService.desc}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;