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
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none transition-all focus:bg-white/30 focus:ring-2 focus:ring-orange-400/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none transition-all focus:bg-white/30 focus:ring-2 focus:ring-orange-400/50"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none transition-all focus:bg-white/30 focus:ring-2 focus:ring-orange-400/50"
                />

                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full appearance-none rounded-full border border-white/10 bg-white/20 px-6 py-4 text-orange-100/70 outline-none transition-all focus:bg-white/30 focus:ring-2 focus:ring-orange-400/50"
                  >
                    <option value="" disabled>Service Type</option>
                    <option value="cleaning">Commercial Cleaning</option>
                    <option value="pest">Pest Control</option>
                    <option value="marble">Marble Polishing</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center">
                    <svg className="h-4 w-4 text-orange-100/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                  </div>
                </div>

                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full rounded-[2rem] border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none transition-all focus:bg-white/30 focus:ring-2 focus:ring-orange-400/50"
                ></textarea>

                <div className="flex justify-center pt-4">
                  <button className="group relative rounded-full bg-gradient-to-r from-orange-400 to-orange-300 px-12 py-4 font-bold text-[#3d1a0a] shadow-lg transition-all hover:scale-105 hover:shadow-orange-400/40 active:scale-95">
                    Contact
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 lg:col-span-5">
            
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
              <div className="space-y-6">
                
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/30 text-orange-400 shadow-inner">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Phone</p>
                    <p className="text-white">+966 5033 0029</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/30 text-orange-400 shadow-inner">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Email</p>
                    <p className="text-white">contact@luxfacility.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/30 text-orange-400 shadow-inner">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Address</p>
                    <p className="text-white">Dammam 31, Saudi Arabia</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-xl backdrop-blur-xl">
              <div className="relative h-64 w-full overflow-hidden rounded-[1.5rem]">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                  className="h-full w-full object-cover grayscale opacity-50" 
                  alt="Location Map" 
                />
                <div className="absolute inset-0 bg-orange-900/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-orange-400 text-[#3d1a0a] shadow-lg shadow-orange-400/50">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"></svg>
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