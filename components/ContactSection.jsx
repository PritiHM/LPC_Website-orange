"use client";

import React from 'react';

const ContactSection = () => {
  return (
    <section className="pt-30 relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#3d1a0a] via-[#4d2a0f] to-[#fff7f0] py-20 px-6 font-sans">
      
      {/* Decorative Blur Glows */}
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-orange-500/20 blur-[100px]" />
      <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-white/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold text-white tracking-tight text-center">
          Contact
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-[2.5rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl md:p-12">
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <input type="text" placeholder="Name" className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none focus:ring-2 focus:ring-orange-400/50"/>
                  <input type="email" placeholder="Email" className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none focus:ring-2 focus:ring-orange-400/50"/>
                </div>

                <input type="tel" placeholder="Phone" className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none focus:ring-2 focus:ring-orange-400/50"/>

                <select defaultValue="" className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-orange-100/70 outline-none focus:ring-2 focus:ring-orange-400/50">
                  <option value="" disabled>Select Service</option>
                  <option value="cleaning">Commercial Cleaning</option>
                  <option value="pest">Pest Control</option>
                  <option value="marble">Marble Polishing</option>
                </select>

                <textarea placeholder="Message" rows="5" className="w-full rounded-[2rem] border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none focus:ring-2 focus:ring-orange-400/50"></textarea>

                

                {/* WHATSAPP BUTTON */}
                <a
                  href="https://wa.me/917420806320?text=Hello%20I%20want%20to%20connect%20on%20WhatsApp"
                  target="_blank"
                  className="flex justify-center mt-4"
                >
                  <div className="rounded-full bg-green-500 hover:bg-green-600 px-10 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                    Join WhatsApp
                  </div>
                </a>

              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 lg:col-span-5">
            
            {/* CONTACT INFO */}
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
              <div className="space-y-6">

                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-orange-400/30 text-orange-400">📞</div>
                  <div>
                    <p className="text-xs text-orange-400">Phone</p>
                    <p className="text-white">7506102007</p>
                    <p className="text-white">9969504730</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-orange-400/30 text-orange-400">✉️</div>
                  <div>
                    <p className="text-xs text-orange-400">Email</p>
                    <p className="text-white">lpcfacility1121@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-orange-400/30 text-orange-400">📍</div>
                  <div>
                    <p className="text-xs text-orange-400">Address</p>
                    <p className="text-white">
                      2/3, Sadguru Krupa CHS, Dharamveer Nagar, Atali Road,
                      Ambivli West, Kalyan, Thane, Maharashtra - 421102
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ✅ MAP BACK */}
            <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-xl backdrop-blur-xl">
              <div className="relative h-64 w-full overflow-hidden rounded-[1.5rem]">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                  className="h-full w-full object-cover grayscale opacity-50" 
                  alt="Location Map" 
                />
                <div className="absolute inset-0 bg-orange-900/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-orange-400 text-[#3d1a0a] shadow-lg">
                    📍
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;