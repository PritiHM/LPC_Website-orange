export default function Footer() {
  return (
    <footer className="bg-orange-950 text-white pt-12 pb-6 px-4 md:px-10">

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
            <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-orange-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-300">Services</h3>
          <ul className="space-y-2 text-orange-200 text-sm">
            <li className="hover:text-orange-400 transition cursor-pointer">Pest Control</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Termite Treatment</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Rodent Control</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Sanitization</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-300">Contact</h3>
          <ul className="space-y-2 text-orange-200 text-sm">
            <li>📍 Pune, Maharashtra</li>
            <li>📞 +91 9876543210</li>
            <li>✉️ info@lpcservices.com</li>
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