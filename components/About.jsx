"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  // Fixed Data Structure: Changed from an array to an object to match your JSX logic
  const leadership = {
    director: {
      name: "SHANKAR RAUT",
      role: "Director",
      image: "/images/director1.jpg",
    },
    executives: [
      {
        name: "AARTI SHEWALE",
        role: "Chief Executive Officer",
      },
      {
        name: "VISHAL SASE",
        role: "Chief Technology Officer",
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

      {/* LEADERSHIP SECTION */}
      <section className="py-20 px-6 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-[#ff9f1c] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT COLUMN (60% / 7-cols) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* DIRECTOR CARD (Highlighted Layout) */}
              <div className="group relative p-8 md:p-10 rounded-3xl bg-[#2b1d0e]/30 backdrop-blur-xl border border-white/10 hover:border-[#ff9f1c]/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,159,28,0.15)] flex flex-col md:flex-row items-center gap-8">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#ff9f1c] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                  <img
                    src={leadership.director.image}
                    alt={leadership.director.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#ff9f1c]/20 group-hover:border-[#ff9f1c] transition-colors duration-500 relative z-10"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
                    {leadership.director.name}
                  </h4>
                  <p className="text-[#ff9f1c] font-medium text-sm uppercase tracking-widest">
                    {leadership.director.role}
                  </p>
                  <div className="mt-6 w-12 h-[2px] bg-white/10 group-hover:w-20 group-hover:bg-[#ff9f1c] transition-all duration-500"></div>
                </div>
              </div>

              {/* CEO & CTO (Side-by-Side row) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {leadership.executives.map((member, index) => (
                  <div
                    key={index}
                    className="group relative p-8 rounded-3xl bg-[#2b1d0e]/30 backdrop-blur-xl border border-white/10 hover:border-[#ff9f1c]/30 transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[160px]"
                  >
                    <h4 className="text-xl font-bold text-white mb-2 tracking-wide">
                      {member.name}
                    </h4>
                    <p className="text-[#ff9f1c] font-medium text-xs uppercase tracking-widest">
                      {member.role}
                    </p>
                    <div className="mt-4 w-10 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-[#ff9f1c] transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN (40% / 5-cols) - COMPANY INFO */}
            <div className="lg:col-span-5">
              <div className="h-full p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-[#ff9f1c] text-sm font-bold uppercase tracking-[0.2em] mb-4">The Visionary</h3>
                    <p className="text-gray-200 text-lg leading-relaxed italic">
                      "Shankar Raut leads LPC Facility with a mission to redefine pest management through 
                      innovation and sustainable practices, ensuring safety and excellence for every client."
                    </p>
                  </div>
                  <div className="pt-8 border-t border-white/10">
                    <h3 className="text-white text-xl font-bold mb-4">Excellence in Facility Management</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      Our leadership team brings together decades of expertise in hygiene, safety, and operational 
                      efficiency. We are dedicated to providing 24/7 responsiveness and high-quality solutions 
                      across domestic and commercial sectors.
                    </p>
                  </div>
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