"use client";

import React, { useState } from 'react';

const ContactSection = () => {
  // 1. Form Handling State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const whatsappNumber = "917506102007";

  // 2. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder.toLowerCase() === 'name' ? 'name' : e.target.type === 'email' ? 'email' : e.target.type === 'tel' ? 'phone' : e.target.name]: e.target.value });
  };

  // 3. Dynamic WhatsApp Logic
  const handleWhatsApp = (e) => {
    e.preventDefault();
    
    const { name, email, phone, service, message } = formData;
    
    const text = `Hello, I want service%0A%0A` +
                 `*Name:* ${name}%0A` +
                 `*Email:* ${email}%0A` +
                 `*Phone:* ${phone}%0A` +
                 `*Service:* ${service}%0A` +
                 `*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text.replace(/%0A/g, '\n'))}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
          
          {/* LEFT SIDE (FORM) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-[2.5rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl md:p-12">
              
              <form className="space-y-5" onSubmit={handleWhatsApp}>
                
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none focus:ring-2 focus:ring-orange-400/50"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none focus:ring-2 focus:ring-orange-400/50"
                  />
                </div>

                <input 
                  type="tel" 
                  placeholder="Phone" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none focus:ring-2 focus:ring-orange-400/50"
                />

               <select 
  value={formData.service}
  onChange={(e) => setFormData({...formData, service: e.target.value})}
  required
  className="w-full rounded-full border border-white/10 bg-white/20 px-6 py-4 text-orange-100/70 outline-none focus:ring-2 focus:ring-orange-400/50"
>
  <option value="" disabled>Select Service</option>
  
  <optgroup label="Pest Control" className="bg-[#4d2a0f]">
    <option value="Professional Mosquito Control">Professional Mosquito Control</option>
    <option value="Rodent (Mouse) Control">Rodent (Mouse) Control</option>
    <option value="Termite Pest Control">Termite Pest Control</option>
    <option value="Bed Bug Pest Control">Bed Bug Pest Control</option>
    <option value="Bird Control and Protection Net">🕊️ Bird Control and Protection Net</option>
    <option value="Container Fumigation">🚢 Container Fumigation</option>
  </optgroup>

  <optgroup label="Cleaning & Maintenance" className="bg-[#4d2a0f]">
    <option value="Carpet Cleaning">Carpet Cleaning</option>
    <option value="Professional Carpet Flooring Solutions">Professional Carpet Flooring Solutions</option>
    <option value="Marble Polishing">Marble Polishing</option>
    <option value="Tank & Drain Cleaning">🚰 Tank & Drain Cleaning</option>
    <option value="Sanitization">🧴 Sanitization</option>
    <option value="Jet Spray Cleaning">🚿 Jet Spray Cleaning</option>
  </optgroup>
</select>

                <textarea 
                  placeholder="Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full rounded-[2rem] border border-white/10 bg-white/20 px-6 py-4 text-white placeholder-orange-100/50 outline-none focus:ring-2 focus:ring-orange-400/50"
                ></textarea>

                <button
                  type="submit"
                  className="w-full flex justify-center mt-4 group"
                >
                  <div className="rounded-full bg-green-500 hover:bg-green-600 px-10 py-3 font-semibold text-white shadow-lg transition hover:scale-105 active:scale-95">
                    Send to WhatsApp
                  </div>
                </button>

              </form>
            </div>
          </div>

  {/* RIGHT SIDE (CONTACT INFO) */}
<div className="space-y-8 lg:col-span-5">
  <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
    <div className="space-y-6">
      
      {/* Phone Section */}
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-orange-400/30 text-orange-400">📞</div>
        <div>
          <p className="text-xs text-orange-400">Phone</p>
          <div className="flex flex-col">
            <a 
              href="tel:7506102007" 
              className="text-white transition-colors duration-300 hover:text-[#ff9f1c]"
            >
              7506102007
            </a>
            <a 
              href="tel:9969504730" 
              className="text-white transition-colors duration-300 hover:text-[#ff9f1c]"
            >
              9969504730
            </a>
          </div>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-orange-400/30 text-orange-400">✉️</div>
        <div>
          <p className="text-xs text-orange-400">Email</p>
          <a 
            href="mailto:info@lpcfacility.in" 
            className="text-white transition-colors duration-300 hover:text-[#ff9f1c]"
          >
            info@lpcfacility.in
          </a>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex items-start gap-5">
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-orange-400/30 text-orange-400">📍</div>
        <div>
          <p className="text-xs text-orange-400">Address</p>
          <p className="text-white text-sm">
            2/3, Sadguru Krupa CHS, Dharamveer Nagar, Atali Road,
            Ambivli West, Kalyan, Thane, Maharashtra - 421102
          </p>
        </div>
      </div>
      
    </div>
  </div>

  {/* MAP SECTION */}
  <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-xl backdrop-blur-xl">
    <div className="relative h-64 w-full overflow-hidden rounded-[1.5rem]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.452601957248!2d73.1931818752101!3d19.26264968198083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796859495d5e5%3A0x2e06a842a1a1d82e!2sAtali%2C%20Ambivli%20West%2C%20Maharashtra%20421102!5e0!3m2!1sen!2sin!4v1712650000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;