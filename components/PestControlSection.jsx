"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PestControlSection = () => {
  const sections = [
    {
      title: "Mosquito Control",
      content: `Mosquitoes are one of the most dangerous pests as they spread diseases like malaria, dengue, chikungunya, and viral infections. They breed in stagnant water and can travel long distances in search of a blood meal, making them a serious threat to residential and commercial environments.

🧬 Mosquito Life Cycle:

• ADULT (1–2 Days)
After emerging, female mosquitoes lay their first batch of eggs within 1–2 days. They can travel up to 10 km in search of a blood meal and return to breeding areas. Females typically live up to 2 weeks.

• EGGS (Days / Weeks / Months)
Eggs remain dormant until activated by rain or water. They hatch when submerged, making water control essential.

• LARVAE (5–6 Days)
Larvae develop quickly in warm conditions. This is the most critical stage for treatment using eco-friendly solutions like Bti and Methoprene.

• PUPAE
After larvae stage, mosquitoes transform into pupae and then adults. Different species breed in wetlands, freshwater pools, or even containers in your surroundings.

💼 Our Professional Treatment:

We provide advanced mosquito control solutions including fogging, spraying, and larva control treatments. Our experts target breeding areas such as stagnant water, gardens, drainage systems, and surrounding premises.

Our services are suitable for homes, offices, societies, and industrial areas. We use safe, effective chemicals and modern equipment to ensure long-lasting protection.

Protect your family and workplace with our reliable mosquito pest control services, quick response, and affordable pricing.`,
      images: [
        "/images/mosquitos3.png",
        "/images/mosquitos2.png",
        "/images/mosquitos1.png"
      ]
    },
    {
      title: "Rodent (Mouse) Control",
      content: `Rodents such as rats and mice are highly destructive pests that can enter your premises through very small openings. They damage property by gnawing on wires, furniture, and structures, and also pose serious health risks by spreading diseases through their droppings, urine, and contamination.

⚠️ Common Problems Caused by Rodents:

• Electrical damage due to wire cutting  
• Food contamination in kitchens and storage areas  
• Structural damage from constant gnawing  
• Spread of harmful bacteria and diseases  

🔍 Inspection & Detection:

Our experts conduct a detailed inspection to identify entry points, nesting areas, and infestation levels. We locate hidden spaces such as walls, ceilings, drainage lines, and storage zones where rodents commonly reside.

🛠️ Our Professional Treatment:

We use advanced and safe rodent control methods including baiting, trapping, and sealing of entry points. Our integrated pest management approach ensures complete elimination and prevents re-infestation.

🏠 Suitable for:

Residential homes, offices, warehouses, restaurants, and commercial spaces.

Choose our reliable rodent control services for long-lasting protection, safe treatment, and quick response to keep your environment clean and secure.`,
      images: [
        "/images/rodent2.png",
        "/images/rodent1.png",
        "/images/rodent3.png"
      ]
    },
    {
      title: "Termite Control",
      content: `Termites are known as silent destroyers that can cause severe damage to wooden structures, furniture, walls, flooring, and even building foundations without visible signs. If not treated on time, termite infestations can lead to costly repairs and long-term structural issues.

⚠️ Common Damage Caused by Termites:

• Damage to wooden furniture, doors, and windows  
• Weakening of building structure and foundation  
• Hidden infestation inside walls and flooring  
• Expensive repair and maintenance costs  

🔍 Inspection & Detection:

Our experts perform a detailed termite inspection using advanced techniques to identify hidden termite activity, affected areas, and entry points. Early detection helps prevent major structural damage.

🛠️ Our Professional Treatment:

We provide advanced anti-termite treatment solutions including soil treatment, wood treatment, and chemical barrier systems to eliminate termites at the root level. Our methods target the termite colony, including the queen, ensuring complete eradication and long-term protection.

🏗️ Services We Offer:

• Pre-construction termite treatment  
• Post-construction termite control  
• Residential pest control services  
• Commercial termite protection  

Choose our reliable termite pest control services for safe treatment, affordable pricing, and long-lasting protection for your home and business.`,
      images: [
        "/images/termite1.png",
        "/images/termite2.png",
        "/images/termite3.png"
      ]
    },
    {
      title: "Bed Bug Control",
      content: `Bed bugs are tiny blood-feeding pests that hide in mattresses, beds, sofas, curtains, furniture joints, and wall cracks. Their bites can cause itching, skin irritation, allergies, and sleepless nights, making timely treatment essential.

⚠️ Common Problems Caused by Bed Bugs:

• Itching, skin irritation, and allergic reactions  
• Sleepless nights due to continuous bites  
• Rapid infestation in beds, sofas, and furniture  
• Hidden breeding in cracks and small spaces  

🔍 Inspection & Detection:

Our experts perform a detailed inspection to identify hidden bed bug infestations in mattresses, furniture joints, wall cracks, and upholstery areas.

🛠️ Our Professional Treatment:

We provide advanced bed bug control solutions including spraying, heat treatment, mattress treatment, and residual pest control methods to eliminate bed bugs completely and prevent re-infestation.

🏠 Suitable for:

Homes, hotels, hostels, offices, and commercial spaces.

Choose our reliable bed bug pest control services for complete relief, safe treatment, quick response, and long-lasting protection for a hygienic and comfortable environment.`,
      images: [
        "/images/bedbug1.png",
        "/images/bedbug2.png",
        "/images/bedbug3.png"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b1a12] via-[#3d2b1f] to-[#1a120b] text-[#f1e3d3] selection:bg-orange-500/30 overflow-x-hidden relative">
      
      {/* Background Texture & Glow Blobs */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/20 blur-[150px] rounded-full pointer-events-none" />

      <main className="relative py-24 px-4 md:px-12 lg:px-24 z-10">
        
        {/* Title Section */}
        <div className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="inline-block text-5xl md:text-7xl font-serif font-bold tracking-widest bg-gradient-to-b from-[#f5d0a9] to-[#c58e4b] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,165,0,0.3)]"
          >
            Pest Control Services
          </motion.h1>
          <div className="mx-auto mt-6 h-[1px] w-48 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto space-y-40">
          {sections.map((pest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className={`flex flex-col lg:flex-row items-stretch gap-16 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Grid Section */}
              <div className="w-full lg:w-1/2 group/images min-h-[400px]">
                <div className="grid grid-cols-2 gap-5 h-full content-stretch">
                   {/* Main Image */}
                  <div className="col-span-2 overflow-hidden rounded-2xl shadow-2xl border border-orange-400/10 relative flex flex-col min-h-[300px]">
                    <div className="absolute inset-0 bg-orange-900/10 z-10 pointer-events-none" />
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] z-20 pointer-events-none" />
                    <img 
                      src={pest.images[0]} 
                      alt={pest.title} 
                      className="w-full h-full object-cover flex-1 transition-all duration-700 group-hover/images:scale-105 group-hover/images:brightness-110"
                    />
                  </div>
                  {/* Secondary Images */}
                  {pest.images.slice(1).map((src, i) => (
                    <div key={i} className="overflow-hidden rounded-2xl shadow-xl border border-orange-400/10 relative group/item min-h-[150px]">
                      <div className="absolute inset-0 bg-orange-900/10 z-10 pointer-events-none" />
                      <img 
                        src={src} 
                        alt="Service detail" 
                        className="w-full h-full object-cover transition-all duration-700 group-hover/item:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Content Section - Glass Card */}
              <div className="w-full lg:w-1/2 flex">
                <motion.div 
                  className="relative flex-1 overflow-hidden backdrop-blur-2xl bg-white/[0.03] border border-orange-400/20 p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.4)] hover:shadow-orange-400/20 transition-all duration-500 flex flex-col"
                >
                  {/* Glass Reflection Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  {/* Inner Wooden Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3d2b1f]/40 to-transparent -z-10" />

                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#f5d0a9] tracking-wide">
                    {pest.title}
                  </h2>
                  
                  {/* Glowing Divider */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-orange-400/60 via-orange-400/20 to-transparent mb-8" />

                  <div className="space-y-6 text-[#f1e3d3] leading-relaxed text-lg font-light opacity-90 flex-1">
                    {pest.content.split('\n\n').map((para, pIndex) => (
                      <p key={pIndex}>{para}</p>
                    ))}
                  </div>

                  {/* BUTTON SECTION ADDED BELOW CONTENT */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link 
                      href="/contactus"
                      className="bg-[#ff9f1c] text-[#1a120b] px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
                    >
                      Contact
                    </Link>
                    <a 
                      href={`https://wa.me/917506102007?text=${encodeURIComponent(`Hello 👋,
I would like to enquire about your ${pest.title} service.
Please share pricing, availability, and details.
Thank you!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
                    >
                      Whatsapp
                    </a>
                  </div>
                  
                  {/* Decorative Premium Detail */}
                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-orange-500/40 to-transparent" />
                    <div className="w-2 h-2 rounded-full bg-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PestControlSection;