"use client";
import React, { useState } from 'react';

const ProjectsSection = () => {

  const [activeVideo, setActiveVideo] = useState(null);

  const row1Large = {
    title: "Commercial Office",
    image: "https://www.w3schools.com/html/mov_bbb.mp4",
    label: "Main Project"
  };

  const row1Small = [
    { title: "Before", image: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "After", image: "https://www.w3schools.com/html/movie.mp4" }
  ];

  const row2 = [
    { title: "Kitchen Sanitization", image: "https://www.w3schools.com/html/mov_bbb.mp4", time: "00:54" },
    { title: "Pest Control", image: "https://www.w3schools.com/html/movie.mp4", time: "01:20" }
  ];

  return (
    <div className="pt-20 relative min-h-screen w-full overflow-hidden font-sans">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="h-1/2 w-full bg-[#3d1a0a]" />
        <div className="h-1/2 w-full bg-[#fff7f0]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">

        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-white">
          Projects
        </h2>

        <div className="flex flex-col gap-6">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="md:col-span-3">
              <VideoCard item={row1Large} height="h-[420px]" setActiveVideo={setActiveVideo} />
            </div>

            <div className="flex flex-col gap-6 md:col-span-2">
              {row1Small.map((item, idx) => (
                <VideoCard key={idx} item={item} height="h-[198px]" setActiveVideo={setActiveVideo} />
              ))}
              <div className="mt-[-8px] text-right">
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                  Before & After —
                </span>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {row2.map((item, idx) => (
              <VideoCard key={idx} item={item} height="h-[300px]" setActiveVideo={setActiveVideo} />
            ))}
          </div>
        </div>

        {/* Video Preview */}
        <div className="group mt-16 flex flex-col items-center gap-10 rounded-[2.5rem] border border-white/40 bg-white/30 p-8 shadow-2xl backdrop-blur-xl md:flex-row md:p-12">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold text-[#3d1a0a]">Video preview</h3>
            <p className="max-w-md text-orange-900/70">
              Take a closer look at our high-standard procedures.
            </p>
          </div>

          <div className="relative aspect-video w-full flex-1 overflow-hidden rounded-3xl border-4 border-white/50 shadow-inner">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
          
          <div className="relative w-full max-w-4xl">

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};


const VideoCard = ({ item, height, setActiveVideo }) => (
  <div 
    onClick={() => setActiveVideo(item.image)}
    className={`group cursor-pointer relative w-full overflow-hidden rounded-[2rem] border border-white/20 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-orange-500/20 ${height}`}
  >

    <video
      src={item.image}
      className="absolute inset-0 h-full w-full object-cover"
      muted
      loop
      autoPlay
      playsInline
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white shadow-2xl backdrop-blur-md">
        ▶
      </div>
    </div>

    <div className="absolute bottom-4 left-4 right-4 flex h-12 items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 text-white backdrop-blur-xl">
      <span className="text-xs font-semibold uppercase tracking-wider">{item.title}</span>
      {item.time && <span className="text-[10px]">{item.time}</span>}
      {item.label && <span className="text-[10px] text-orange-300">{item.label}</span>}
    </div>

  </div>
);

export default ProjectsSection;