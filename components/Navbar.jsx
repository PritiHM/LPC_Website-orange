"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scroll down → hide
        setShow(false);
      } else {
        // scroll up → show
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 
      ${show ? "translate-y-0" : "-translate-y-full"}
      bg-white/10 backdrop-blur-md border-b border-white/20`}
    >
      <div className="flex justify-between items-center px-4 md:px-10 md:pl-20 py-1 md:py-2 text-orange-400">
        
        {/* LOGO */}
        <Image
          src="/images/LPC_FACILITY_SERVICES_PVT._LTD._LOGO_page-0001-removebg-preview.png"
          alt="LPC Services Logo"
          width={90}
          height={35}
          className="object-contain w-[70px] md:w-[90px] h-auto"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-semibold text-xl">
          <a href="/" className="hover:text-orange-400 transition">Home</a>
          <a href="/about" className="hover:text-orange-400 transition">About Us</a>
          <a href="/services" className="hover:text-orange-400 transition">Services</a>
          <a href="/FacilityManagement" className="hover:text-orange-400 transition">Facility Management</a>
          <a href="/project" className="hover:text-orange-400 transition">Projects</a>
          <a href="/contactus" className="hover:text-orange-400 transition">Contact Us</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          

<Link href="/contactus">
  <button className="hidden md:block bg-orange-400 hover:bg-orange-500 transition text-black px-3 py-1 rounded-full text-sm font-semibold">
    Get Quote
  </button>
</Link>

          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="px-4 pb-2">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-black shadow-xl space-y-3">
            
            <a href="/" className="block text-center hover:text-orange-400">Home</a>
            <a href="/about" className="block text-center hover:text-orange-400">About Us</a>
            <a href="/services" className="block text-center hover:text-orange-400">Services</a>
            <a href="/FacilityManagement" className="block text-center hover:text-orange-400">Facility Management</a>
            <a href="/project" className="block text-center hover:text-orange-400">Projects</a>
            <a href="/contactus" className="block text-center hover:text-orange-400">Contact Us</a>

           <Link href="/contactus">
  <button className="hidden md:block bg-orange-400 hover:bg-orange-500 transition text-black px-3 py-1 rounded-full text-sm font-semibold">
    Get Quote
  </button>
</Link>

          </div>
        </div>
      )}
    </div>
  );
}