"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const heroRef = useRef(null);
  const blobRef = useRef(null);
  const contentRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Load Animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.from(".hero-text-name", {
        y: 100,
        opacity: 0,
        duration: 1.2,
      })
        .from(".hero-text-role", {
          x: -50,
          opacity: 0,
        }, "-=0.8")
        .from(".hero-text-tagline", {
          y: 20,
          opacity: 0,
          duration: 0.8,
        }, "-=0.6")
        .fromTo(".hero-btn", {
          y: 20,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        }, "-=0.4");

      // Avatar Entrance
      gsap.from(avatarRef.current, {
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5
      });

      // Floating Animation for the Illustration
      gsap.to(blobRef.current, {
        y: 30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // "Crazy" Animation for Avatar (Floating + Rotation + Tilt)
      // gsap.to(avatarRef.current, {
      //   y: -20,
      //   rotation: 3,
      //   duration: 3,
      //   repeat: -1,
      //   yoyo: true,
      //   ease: "sine.inOut",
      // });

      // Ambient Glow Pulse
      gsap.to(".ambient-glow", {
        opacity: 0.6,
        scale: 1.2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, heroRef);

    // Mouse Parallax Effect for "Crazy" feel
    const handleMouseMove = (e) => {
      if (!avatarRef.current) return;

      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; // Move range
      const y = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(avatarRef.current, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] ambient-glow z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left: Content */}
        <div ref={contentRef} className="text-left space-y-6">

          <h2 className="hero-text-role text-accent font-medium tracking-wider uppercase text-sm md:text-base">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Tech Enthusiast',
                1000,
                'Creative Coder',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <h1 className="hero-text-name text-5xl md:text-7xl font-bold text-heading leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Abhishek
            </span>
          </h1>
          <p className="hero-text-tagline text-body-text text-lg md:text-xl max-w-lg leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences.
            Let's craft something amazing together.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="hero-btn group relative px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a
              href="/abhishek_resume.pdf"
              target="_blank"
              className="hero-btn px-8 py-4 bg-transparent border border-white/10 text-heading rounded-full font-semibold hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>
        </div>

        {/* Right: Abstract Illustration */}
        <div className="relative flex justify-center items-center h-full min-h-[400px]">
          <div className="relative w-full max-w-[500px] aspect-square flex justify-center items-center">

            {/* Background SVG Blob - Animated Standalone */}
            <div ref={blobRef} className="absolute inset-0 w-full h-full z-0 opacity-80 mix-blend-screen scale-110">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#2563EB" }} />
                    <stop offset="100%" style={{ stopColor: "#22C55E" }} />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#blobGradient)"
                  d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.2C59,40.9,47.1,47.4,35.6,52.4C24.1,57.4,13,60.9,0.9,59.3C-11.1,57.7,-24.1,51,-37.2,43.5C-50.3,36,-63.5,27.7,-71.8,15.6C-80.1,3.5,-83.5,-12.3,-79.1,-26.8C-74.7,-41.3,-62.5,-54.5,-49.4,-62.2C-36.3,-69.9,-22.3,-72.1,-8.5,-57.4"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </div>

            {/* Foreground Avatar Image - Animated */}
            <div ref={avatarRef} className="relative z-10 w-[80%] h-[80%] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20">
              <Image
                src="/hero-avatar.jpg"
                alt="Hero Avatar"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Cards (Decor elements) - Keep on top */}
            <div className="absolute top-0 right-0 glass-panel p-4 rounded-2xl animate-pulse delay-75 z-20">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl">⚛️</div>
            </div>
            <div className="absolute bottom-10 -left-4 glass-panel p-4 rounded-2xl animate-pulse delay-1000 z-20">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-2xl">🚀</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
