"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center+=100",
            end: "bottom center",
            scrub: 0.5,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Agile Digital Edge Pvt. Ltd.",
      period: "2025 - Present",
      description: "Worked as a Senior Full Stack Developer, architecting and developing high-performance applications using MERN Stack and Laravel, overseeing frontend architecture, backend services, API integrations, and database optimization."
    },
    {
      role: "Full Stack Developer",
      company: "Softradix Technologies",
      period: "2024 - 2025",
      description: "Contributed as a Full Stack Developer by designing and developing complete web applications using MERN Stack and Laravel, covering frontend development, backend logic, API integration, and database management."
    },
    {
      role: "Web Developer",
      company: "Swap IT Hub",
      period: "2023 - 2024",
      description: "Worked as a Full Stack Developer, building and maintaining scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and PHP Laravel, handling both frontend UI and backend APIs."
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-heading">
          Experience
        </h2>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">

          {/* Animated Sliding Line */}
          <div
            ref={lineRef}
            className="absolute top-0 -left-[1px] w-[2px] bg-gradient-to-b from-primary via-purple-500 to-accent"
          />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-black border-2 border-primary z-10 group-hover:scale-125 transition-all duration-300" />

              <div className="glass-panel p-6 rounded-2xl md:flex justify-between items-start gap-6 hover:bg-white/5 transition-colors border border-white/5 group-hover:border-primary/30">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-heading mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-body-text text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="mt-4 md:mt-1 flex-shrink-0">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:text-primary transition-colors">
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
