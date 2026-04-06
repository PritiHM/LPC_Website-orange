"use client"
import React from 'react';

const PestControlSection = () => {
  // Replace this with your actual business number
  const whatsappNumber = "919876543210"; 

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
    <div
      className="min-h-screen w-full flex flex-col items-center py-8 pt-20 selection:bg-orange-500/30 bg-cover bg-center"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 80%, rgba(52,26,13,0.5) 0%, rgba(15,15,15,0.6) 70%),
          url('/images/bg-clean.png')
        `
      }}
    >
      {/* Wooden Top Header Section */}
      <div 
        className="w-full flex justify-center py-4 mb-12 shadow-2xl relative"
        style={{
          background: 'linear-gradient(to bottom, #3d2b1f 0%, #2a1d15 100%)',
          borderBottom: '1px solid rgba(0,0,0,0.3)'
        }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.2) 4px)' }}></div>
        
        <h1 
          className="text-[#f5e6d3] text-4xl md:text-5xl font-serif tracking-wide relative z-10"
          style={{ 
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontFamily: 'Georgia, serif' 
          }}
        >
          Pest Control Services
        </h1>
      </div>

<div className="max-w-[1280px] w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 relative">
        
  {/* 🔥 PREMIUM ORANGE GLOW SPOTS */}
  <div className="absolute inset-0 pointer-events-none z-0">

    <div className="absolute top-[5%] left-[10%] w-[250px] h-[250px] bg-orange-500/20 blur-[120px] rounded-full"></div>

    <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-orange-600/20 blur-[140px] rounded-full"></div>

    <div className="absolute top-[50%] left-[40%] w-[350px] h-[350px] bg-orange-500/20 blur-[150px] rounded-full"></div>

    <div className="absolute bottom-[20%] left-[15%] w-[280px] h-[280px] bg-orange-600/20 blur-[130px] rounded-full"></div>

    <div className="absolute bottom-[5%] right-[10%] w-[250px] h-[250px] bg-orange-500/20 blur-[120px] rounded-full"></div>

  </div>        
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-orange-500/20 blur-[120px]"></div>
          <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-orange-600/20 blur-[140px]"></div>
          <div className="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] bg-orange-500/20 blur-[120px]"></div>
        </div>
        
        
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden lg:block"></div>
        

        {services.map((item) => (
          <div key={item.id} className={`flex flex-col md:flex-row ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-5 relative z-10`}>
            
            {/* Image Cluster Container */}
            <div className="flex flex-col gap-3 w-full md:w-[240px] shrink-0">
              <div className="rounded-[1.25rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                <img src={item.mainImg} alt={item.title} className="w-full h-40 object-cover opacity-90" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[1rem] overflow-hidden border border-white/10 shadow-xl aspect-square bg-zinc-900">
                  <img src={item.subImg1} alt="detail" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[1rem] overflow-hidden border border-white/10 shadow-xl aspect-square bg-zinc-900">
                  <img src={item.subImg2} alt="detail" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Content Card (Glassmorphism) */}
            <div className="flex-1 p-6 rounded-[2rem] border border-white/10 backdrop-blur-xl shadow-inner relative overflow-hidden flex flex-col justify-between min-h-[280px]"
                 style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)' }}>
              
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-600/10 blur-3xl rounded-full"></div>

              <div>
                <h3 className="text-white text-[1.4rem] font-semibold mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <p className="text-zinc-400 text-[0.825rem] leading-[1.5] font-light">
                    {item.desc1}
                  </p>
                  <p className="text-zinc-400 text-[0.825rem] leading-[1.5] font-light">
                    {item.desc2}
                  </p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi, I am interested in your ${item.title} service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
                style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
              >
                <svg 
                  className="w-5 h-5 transition-transform group-hover:rotate-12" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PestControlSection;