import React from 'react';

const FacilityManagement = () => {
  const mainServices = [
    {
  title: "Carpet / Rubber Flooring",
  description: "We provide professional cleaning and maintenance for carpet and rubber flooring to ensure hygiene, durability, and a fresh environment.",
  process: ["Surface scrubbing", "Deep cleaning", "Stain removal & drying"],
  image: "/images/marbel polishing.avif",
  icon: (
    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  )
},
    {
      title: "Carpet Cleaning",
      description: "Professional removal of bacteria, stains, and allergens for a pristine and healthy environment.",
      process: ["Deep extraction cleaning", "Odor neutralization", "Sanitization & drying"],
      image: "/images/carpet cleaning.png",
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Marble Polishing",
      description: "Restoring the natural luster of your stone surfaces with precision equipment and care.",
      process: ["Diamond pad polishing", "Surface sealing", "High-gloss buffing"],
      image: "/images/marbel polishing.avif",
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a2 2 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a2 2 0 01-1-1v-6z" />
        </svg>
      )
    }
  ];

  const otherServices = [
    { name: "Bird Control and Protection Net", icon: "🐦" },
    { name: "Container Fumigation", icon: "📦" },
    { name: "Tank & Drain Cleaning", icon: "🚰" },
    { name: "Sanitization", icon: "✨" },
    { name: "Jet Spray Cleaning", icon: "🚿" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#3d1a0a] via-[#4d2a0f] to-orange-50 py-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full -ml-32" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Facility Management Services
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">

        {/* MAIN SERVICES */}
        {mainServices.map((service, index) => (
          <div 
            key={index}
            className="group flex flex-col md:flex-row items-stretch bg-white/20 backdrop-blur-lg border border-white/30 rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-orange-400/20 transition-all duration-500 hover:-translate-y-2"
          >
            {/* IMAGE */}
            <div className="w-full md:w-2/5 min-h-[250px] relative overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center space-y-6">
              
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                {service.icon}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  {service.title}
                </h3>
                <p className="text-black text-sm md:text-base leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/20">
                <h4 className="text-orange-400 font-bold uppercase tracking-widest text-[10px] mb-4">
                  Process
                </h4>
                <ul className="grid gap-2">
                  {service.process.map((step, i) => (
                    <li key={i} className="flex items-center text-black text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-3" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}

        {/* OTHER SERVICES */}
        <div className="group bg-white/20 backdrop-blur-lg border border-white/30 rounded-[2.5rem] p-8 md:p-12 shadow-2xl hover:shadow-orange-400/20 transition-all duration-500 hover:-translate-y-2">
          
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Other Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherServices.map((service, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-orange-400/10 transition-all duration-300"
              >
                <span className="text-xl mr-4">{service.icon}</span>
                <span className="text-black font-medium text-sm md:text-base">
                  {service.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default FacilityManagement;