"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#6b4226] via-[#4a2f1d] to-[#2b1a12] text-white pt-12 pb-6 px-4 md:px-10">
      
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-3">LPC</h2>
          <p className="text-orange-200 text-sm">
            LPC Facility Services Pvt. Ltd. provides reliable pest control and facility management services with safe and effective solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-300">Quick Links</h3>
          <ul className="space-y-2 text-orange-200 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-orange-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-300">Services</h3>

          <ul className="space-y-2 text-orange-200 text-sm">

            <li>
              <Link href="/services" className="hover:text-orange-400 transition">
                Pest Control
              </Link>
            </li>

            <li>
              <Link href="/carpet-flooring" className="hover:text-orange-400 transition">
                Carpet & Rubber Flooring
              </Link>
            </li>

            <li>
              <Link href="/FacilityManagement" className="hover:text-orange-400 transition">
                Carpet Cleaning
              </Link>
            </li>

            <li>
              <Link href="/FacilityManagement" className="hover:text-orange-400 transition">
                Marble Polishing
              </Link>
            </li>

            <li>
              <Link href="/FacilityManagement" className="hover:text-orange-400 transition">
                Other Services
              </Link>
            </li>
            <li>
              <Link href="/FacilityManagement" className="hover:text-orange-400 transition">
                Data Cleaning Services
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-300">Contact</h3>
          <ul className="space-y-2 text-orange-200 text-sm">
            <li>
              📍 2/3, Sadguru Krupa CHS, Dharamveer Nagar, Atali Road,  
              Ambivli West, Kalyan, Thane, Maharashtra - 421102
            </li>
            <li>📞 +91 7506102007</li>
            <li>📞 +91 9969504730</li>
            <li>✉️ lpcfacility1121@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-orange-800 mt-10 pt-4 text-center text-orange-300 text-sm">
        © {new Date().getFullYear()} LPC Facility Services Pvt. Ltd. All rights reserved.
      </div>

    </footer>
  );
}