"use client";
import { useState } from "react";

export default function Hero() {
  const [active, setActive] = useState("contact");

  return (
    <section className="  relative w-full">

      {/* ===== TOP HERO ===== */}
      <div className=" relative min-h-[80vh] md:h-screen flex items-center justify-center text-center">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-orange-900/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-white px-4">
          <p className="text-orange-300 font-semibold mb-2 text-sm md:text-base">
            PROTECT YOUR HOME TODAY
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            WE CARE ABOUT YOUR{" "}
            <span className="text-orange-400">PEST</span> INFESTATION
          </h1>

          <p className="mt-4 text-gray-200 text-sm md:text-base">
            There are many variations of passages available but majority have suffered alteration.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center gap-3 mt-6">

            <button
              onClick={() => setActive("contact")}
              className={`px-4 md:px-6 py-2 rounded-full font-semibold transition duration-200
              ${
                active === "contact"
                  ? "bg-orange-700 text-white"
                  : "bg-orange-500 text-black hover:bg-orange-600 active:bg-orange-700"
              }`}
            >
              Contact Us
            </button>

            <button
              onClick={() => setActive("about")}
              className={`px-4 md:px-6 py-2 rounded-full transition duration-200
              ${
                active === "about"
                  ? "bg-white text-black"
                  : "border border-white hover:bg-white hover:text-black active:bg-gray-300"
              }`}
            >
              About Us
            </button>

          </div>
        </div>
      </div>

      {/* ===== BOTTOM ABOUT STYLE ===== */}
      <div className="bg-white py-12 md:py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-fit mx-auto md:mx-0">
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-orange-500 rounded-xl"></div>

            <img
              src="/images/about.png"
              alt="about"
              className="relative rounded-xl w-[280px] h-[320px] md:w-[500px] md:h-[550px] object-cover z-10"
            />

            <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-orange-500 text-black px-4 py-2 md:px-6 md:py-4 rounded-lg shadow-xl z-20">
              <h2 className="text-lg md:text-2xl font-bold">25+</h2>
              <p className="text-xs md:text-sm">Years of Experience</p>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <p className="text-orange-600 font-semibold mb-2 text-sm md:text-base">
              ABOUT US
            </p>

            <h2 className="text-2xl md:text-4xl font-bold leading-snug text-gray-900">
              We Provide Best{" "}
              <span className="text-orange-600">Pest Control</span> Services
            </h2>

            <p className="mt-4 text-gray-700 text-sm md:text-base">
              LPC Facility Services Pvt. Ltd. provides reliable and professional pest control solutions for residential, commercial, and industrial spaces.
            </p>

            <ul className="mt-6 space-y-3 text-gray-800 text-sm md:text-base">
              <li className="flex gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full mt-1"></span>
                Container Fumigation & Warehouse Pest Control Services
              </li>

              <li className="flex gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full mt-1"></span>
                Bed Bugs, Cockroaches, and Rodent Control Solutions
              </li>

              <li className="flex gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full mt-1"></span>
                Termite Treatment & Wood Borer Protection
              </li>

              <li className="flex gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full mt-1"></span>
                Mosquito, Ants, Spider & Lizard Control Services
              </li>

              <li className="flex gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full mt-1"></span>
                Sanitization Services
              </li>
            </ul>

            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-full font-semibold w-full md:w-auto">
              Discover More →
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}