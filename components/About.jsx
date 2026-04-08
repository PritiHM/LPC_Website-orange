"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  const leadership = {
    directors: [
      {
        name: "SANTOSH SHEWALE",
        role: "Director",
        image: "/images/SANTOSH SHEWALE.jpeg",
      },
      {
        name: "SHANKAR RAUT",
        role: "Director",
        image: "/images/Shankar Raut.jpeg",
      },
    ],
    employees: [
      {
        name: "AARTI SHEWALE",
        role: "Chief Executive Officer",
        image: "/images/Aarti Shewale.jpeg",
      },
      {
        name: "VISHAL SASE",
        role: "Chief Technology Officer",
        image: "/images/Vishal Sase.jpeg",
      },
    ],
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-[#1a120b] via-[#2b1d0e] to-[#5a3e1b] text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff9f1c]/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#5a3e1b]/30 blur-[140px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="relative">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          <div className="w-full lg:w-1/2 z-10 p-10 lg:p-24 flex flex-col justify-center space-y-6 
          bg-gradient-to-br from-[#1a120b]/85 via-[#2b1d0e]/75 to-[#1a120b]/75 backdrop-blur-xl">
            <div className="text-[#ff9f1c] text-xs font-bold uppercase tracking-[0.3em]">
              About LPC Facility
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smart Pest Control <br /> & Facility Solutions
            </h1>
            <p className="text-sm md:text-base text-gray-300/90 leading-relaxed max-w-xl">
              Our customers can conveniently connect with us through our website,
              mobile app, or direct contact — ensuring a smooth and responsive
              service experience.
            </p>
            <Link href="/pestcontrol">
              <button className="bg-[#ff9f1c] text-[#1a120b] px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                Get Service
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/images/about-hero.png"
              alt="Pest Control"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Who We Are</h2>
            <p className="text-gray-300/90 leading-relaxed">
              At LPC Facility, we remain committed to delivering safe,
              sustainable, and innovative pest management solutions that protect
              businesses and promote healthier environments.
            </p>
            <p className="text-gray-300/90 leading-relaxed">
              We assist you with the treatment of pests and help prevent
              unwanted infestations later, with our discreet, efficient, and
              complete pest control services for both domestic and commercial
              properties.
            </p>
            <p className="text-gray-300/90 leading-relaxed">
              We provide on-time service to our clients and are always available
              according to their scheduled timings. Our services are highly
              appreciated for their affordability and reliability.
            </p>
          </div>
          <div className="p-10 rounded-[2rem] bg-[#2b1d0e]/40 backdrop-blur-xl border border-[#ff9f1c]/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] space-y-6">
            <h3 className="text-2xl font-bold text-[#ff9f1c]">
              Why Choose Us
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><span className="text-[#ff9f1c]">✔</span> High-quality chemicals</li>
              <li><span className="text-[#ff9f1c]">✔</span> Preventive measures</li>
              <li><span className="text-[#ff9f1c]">✔</span> Highly skilled professionals</li>
              <li><span className="text-[#ff9f1c]">✔</span> Eco-friendly chemicals</li>
              <li><span className="text-[#ff9f1c]">✔</span> Gel & herbal treatment</li>
              <li><span className="text-[#ff9f1c]">✔</span> Service warranty</li>
              <li><span className="text-[#ff9f1c]">✔</span> Affordable pricing</li>
            </ul>
          </div>
        </div>
      </section>
<section className="py-24 px-6 lg:px-24 relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="text-left mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
        Our Leadership
      </h2>
      <div className="w-20 h-1.5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.3)]"></div>
    </div>

    {/* Main Layout */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT SIDE */}
      <div className="space-y-10">
        
        {/* Directors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {leadership.directors.map((member, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-105 hover:border-orange-400/40 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 pointer-events-none"></div>

              <div className="relative z-10 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-6 object-cover object-[center_20%] border-4 border-orange-500/20 group-hover:border-orange-500/50 transition-all duration-500"
                />
                <h4 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Employees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {leadership.employees.map((member, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md transition-all duration-500 hover:bg-white/10 hover:border-orange-400/30 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover object-[center_20%] border-2 border-white/10 group-hover:border-orange-500/40 transition-all"
              />
              <h4 className="text-base font-semibold text-white/90">
                {member.name}
              </h4>
              <p className="text-orange-400/80 text-xs uppercase font-bold tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-center space-y-8">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-orange-400 tracking-tight">
            Leadership Vision
          </h3>
          <p className="text-white/80 text-lg leading-relaxed font-light">
            Our directors bring years of expertise in facility management, 
            delivering high-quality services with innovation and reliability. 
            We are committed to setting new benchmarks in premium flooring 
            and design solutions.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-orange-400 tracking-tight">
            Our Team Strength
          </h3>
          <p className="text-white/80 text-lg leading-relaxed font-light">
            Behind every successful project is our skilled workforce. Our team 
            ensures smooth execution, meticulous quality service delivery, 
            and absolute customer satisfaction across all specialized segments.
          </p>
        </div>

        <div className="pt-4">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 bg-orange-500/50"></span>
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold">
              Excellence in every detail
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </main>
  );
};

export default About;