"use client";

import React from 'react';

/**
 * MASONRY LAYOUT LOGIC:
 * To achieve a balanced mosaic, we assign specific spans to different indices.
 * Large (2x2), Tall (1x2), Wide (2x1), and Small (1x1).
 */
const getSpanClass = (index) => {
  const patterns = [
    "md:col-span-2 md:row-span-2", // Large Square
    "md:col-span-1 md:row-span-1", // Small Square
    "md:col-span-1 md:row-span-2", // Tall
    "md:col-span-2 md:row-span-1", // Wide
    "md:col-span-1 md:row-span-1", // Small Square
    "md:col-span-1 md:row-span-1", // Small Square
  ];
  return patterns[index % patterns.length];
};

const ProjectSection = () => {
  const projects = [
    { title: "Commercial Pest Control", image: "/images/Corporate.png" },
        { title: "Commercial Kitchen Cleaning", image: "/images/Hotel Kitchen.png" },
            { title: "Commercial Office Maintenance", image: "/images/Offices.png" },
                { title: "Commercial Pest Control", image: "/images/commercial-3.png" },
                    { title: "Commercial Deep Cleaning", image: "/images/project1.png" },
    { title: "Commercial Hospitality Service", image: "/images/project2.png" },
    { title: "Commercial Pest Control", image: "/images/commercial-1.png" },
    { title: "Commercial Pest Control", image: "/images/commercial-2.png" },
        { title: "Commercial Sanitization", image: "/images/Corporate 1.png" },
            { title: "Commercial Pest Control", image: "/images/commercial-3.png" },
    { title: "Residential Kitchen Cleaning", image: "/images/Kitchen.png" },
    { title: "Industrial Guest Room Sanitization", image: "/images/Hotel Kitchen.png" },
    { title: "Industrial Drainage Treatment", image: "/images/industrial-1.png" },
    { title: "Industrial Maintenance", image: "/images/industrial-3.png" },
        { title: "Commercial Pest Control", image: "/images/commercial-4.png" },
















  
  ];

  return (
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Service <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A visual overview of our professional pest control and deep cleaning 
            expertise across residential and commercial sectors.
          </p>
        </div>

        {/* Mosaic Grid - ADDED grid-flow-dense HERE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense auto-rows-[200px] gap-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-[2rem] bg-neutral-900 cursor-pointer ${getSpanClass(idx)}`}
            >
              {/* Image Container */}
              <div className="w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-lg font-semibold tracking-wide uppercase">
                    {project.title}
                  </p>
                  <div className="mt-2 h-1 w-12 bg-orange-500 mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;