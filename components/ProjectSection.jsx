"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const projects = [
    { title: "Corporate Office 1", image: "/images/Corporate 1.png" },
    { title: "Corporate Office", image: "/images/Corporate.png" },
    { title: "Hotel Kitchen", image: "/images/Hotel Kitchen.png" },
    { title: "Kitchen Sanitization", image: "/images/Kitchen.png" },
    { title: "Office Space 1", image: "/images/Offices 1.png" },
    { title: "Office Space", image: "/images/Offices.png" },
    { title: "Pest Control Service", image: "/images/Pest.jpg" },
    { title: "Residential Service", image: "/images/Res.jpg" },
    { title: "Residential Treatment", image: "/images/resi.jpg" },
    { title: "Residential Cleaning", image: "/images/Residential.png" },
    { title: "Deep Cleaning Project 1", image: "/images/project1.png" },
    { title: "Deep Cleaning Project 2", image: "/images/project2.png" },
    { title: "Deep Cleaning Project 3", image: "/images/project3.png" }
  ];

  const gridProjects = projects.slice(0, -1);
  const featuredProject = projects[projects.length - 1];

  const chunked = [];
  for (let i = 0; i < gridProjects.length; i += 3) {
    chunked.push(gridProjects.slice(i, i + 3));
  }

  const ProjectCard = ({ project, isFeatured = false, className = "" }) => (
    <motion.div
      onClick={() => setSelectedImg(project.image)}
      className={`group relative overflow-hidden rounded-[2.5rem] cursor-pointer p-[1px] transition-all duration-500 ${className}`}
    >
      {/* --- ANIMATED BORDER GLOW --- */}
      <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#ffffff_25%,#f97316_50%,#ffffff_75%,#f97316_100%)] animate-[spin_4s_linear_infinite]" />
      </div>

      {/* --- CARD INNER BODY --- */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-[#0d0704]/80 backdrop-blur-xl z-10">
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full object-cover transition-transform duration-[1s] ease-out ${isFeatured ? 'group-hover:scale-110' : 'group-hover:scale-105'}`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0704] via-transparent to-transparent opacity-80" />

        {/* Shine Sweep */}
        <div className="absolute inset-0 translate-x-[-150%] skew-x-12 transition-transform duration-1000 group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className={`absolute bottom-0 left-0 p-6 w-full ${isFeatured ? 'text-center' : ''}`}>
          <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.3em] drop-shadow-lg">
            {project.title}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen w-full py-24 px-4 md:px-10 overflow-hidden bg-black">
      
      {/* 1. FULL WIDTH BACKGROUND IMAGE LAYER */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/service-bg-dark.jpg')" }} // Update to your path
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0d0704] via-[#0d0704]/90 to-[#0d0704]" />

      <div className="relative z-10 w-full">
        
        {/* Header (Minimal) */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-4">
            Our <span className="text-orange-500">Portfolio</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-12 bg-orange-500/50" />
             <p className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.6em]">Premium Service Excellence</p>
             <div className="h-[1px] w-12 bg-orange-500/50" />
          </div>
        </div>

        {/* --- FULL WIDTH ZIG-ZAG GRID --- */}
        <div className="flex flex-col gap-10">
          {chunked.map((group, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-10 min-h-[400px] md:min-h-[550px]">
                {isEven ? (
                  <>
                    <div className="md:col-span-8"><ProjectCard project={group[0]} className="h-full" /></div>
                    <div className="md:col-span-4 flex flex-col gap-10">
                      {group[1] && <ProjectCard project={group[1]} className="h-1/2 min-h-[200px]" />}
                      {group[2] && <ProjectCard project={group[2]} className="h-1/2 min-h-[200px]" />}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-4 flex flex-col gap-10 order-2 md:order-1">
                      {group[0] && <ProjectCard project={group[0]} className="h-1/2 min-h-[200px]" />}
                      {group[1] && <ProjectCard project={group[1]} className="h-1/2 min-h-[200px]" />}
                    </div>
                    <div className="md:col-span-8 order-1 md:order-2">
                      {group[2] && <ProjectCard project={group[2]} className="h-full" />}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* --- FINAL FEATURED CARD (Centered & Ultra-Sized) --- */}
        <div className="mt-16 flex flex-col items-center">
          
          <div className="w-full md:w-[85%] lg:w-[80%]">
            <ProjectCard 
              project={featuredProject} 
              isFeatured={true} 
              className="h-[500px] md:h-[650px]" 
            />
          </div>
        </div>
      </div>

      {/* --- FULL SCREEN MODAL --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-4 md:p-16 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white/30 hover:text-orange-500 transition-all p-3 bg-white/5 rounded-full border border-white/10">
                <X size={36} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full h-full max-h-[85vh] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg} className="w-full h-full object-contain bg-neutral-900" alt="Full Enlarge" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;