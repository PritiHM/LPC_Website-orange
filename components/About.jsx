"use client";
import React from "react";
import Link from "next/link";


const About = () => {
  const leadership = [
    {
      name: "SHANKAR RAUT",
      role: "Director",
      image: "/images/director1.jpg",
    },
    {
      name: "AARTI SHEWALE",
      role: "Chief Executive Officer",
      image: "/images/director1.jpg",
    },
    {
      name: "VISHAL SASE",
      role: "Chief Technology Officer",
      image: "/images/director1.jpg",
    },
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-[#1a120b] via-[#2b1d0e] to-[#5a3e1b] text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff9f1c]/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#5a3e1b]/30 blur-[140px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          {/* LEFT */}
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

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/about-hero.png"
              alt="Pest Control"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* TEXT */}
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

          {/* GLASS CARD */}
          <div className="p-10 rounded-[2rem] bg-[#2b1d0e]/40 backdrop-blur-xl border border-[#ff9f1c]/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] space-y-6">
            <h3 className="text-2xl font-bold text-[#ff9f1c]">
              Why Choose Us
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <span className="text-[#ff9f1c]">✔</span> High-quality chemicals
                manufactured in India by certified brands
              </li>
              <li>
                <span className="text-[#ff9f1c]">✔</span> Preventive measures
                and advanced pest removal methods
              </li>
              <li>
                <span className="text-[#ff9f1c]">✔</span> Highly skilled
                professionals
              </li>
              <li>
                <span className="text-[#ff9f1c]">✔</span> 100% safe and
                eco-friendly chemicals
              </li>
              <li>
                <span className="text-[#ff9f1c]">✔</span> Gel & herbal treatment
                available
              </li>
              <li>
                <span className="text-[#ff9f1c]">✔</span> Service warranty
                provided
              </li>
              <li>
                <span className="text-[#ff9f1c]">✔</span> Affordable pricing &
                on-time service
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* NEW LEADERSHIP SECTION */}
      <section className="py-20 px-6 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-[#ff9f1c] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-[#2b1d0e]/30 backdrop-blur-xl border border-white/10 hover:border-[#ff9f1c]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,159,28,0.15)] flex flex-col items-center text-center"
              >
                {/* Profile Image Wrapper with Glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#ff9f1c] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#ff9f1c]/20 group-hover:border-[#ff9f1c] transition-colors duration-500 relative z-10"
                  />
                </div>

                <h4 className="text-xl font-bold text-white mb-2 tracking-wide">
                  {member.name}
                </h4>
                <p className="text-[#ff9f1c] font-medium text-sm uppercase tracking-widest">
                  {member.role}
                </p>
                
                {/* Decorative Element */}
                <div className="mt-6 w-12 h-[2px] bg-white/10 group-hover:w-20 group-hover:bg-[#ff9f1c] transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="pb-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#2b1d0e]/40 backdrop-blur-xl border border-[#ff9f1c]/20 rounded-3xl">
            <h3 className="text-xl font-bold text-[#ff9f1c] mb-3">Our Mission</h3>
            <p className="text-gray-300 text-sm">
              Deliver safe, effective, and innovative pest control solutions
              that ensure healthier environments.
            </p>
          </div>

          <div className="p-8 bg-[#2b1d0e]/40 backdrop-blur-xl border border-[#ff9f1c]/20 rounded-3xl">
            <h3 className="text-xl font-bold text-[#ff9f1c] mb-3">Our Vision</h3>
            <p className="text-gray-300 text-sm">
              To become a trusted leader in pest management through technology,
              sustainability, and excellence.
            </p>
          </div>

          <div className="p-8 bg-[#2b1d0e]/40 backdrop-blur-xl border border-[#ff9f1c]/20 rounded-3xl">
            <h3 className="text-xl font-bold text-[#ff9f1c] mb-3">
              Our Commitment
            </h3>
            <p className="text-gray-300 text-sm">
              We ensure quality service, customer satisfaction, and long-term
              pest prevention.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;