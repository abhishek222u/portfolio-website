"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    }, containerRef);

    return () => ctx.revert();
  }, []);



  return (
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-heading">
          About <span className="text-primary">Me</span>
        </h2>

        <p className="text-lg text-body-text leading-relaxed mb-12 max-w-3xl mx-auto">
          I'm a passionate Full Stack Developer with a knack for building beautiful, responsive, and user-friendly web applications.
          With a strong foundation in modern frontend technologies and backend architecture, I transform ideas into seamless digital experiences.
          I value clean code, intuitive design, and continuous learning.
        </p>


      </div>
    </section>
  );
}
