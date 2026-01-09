"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Sheydance",
      description: "Sheydance.com is an online dance class and talent platform that helps people find, book, and enjoy dance lessons in their area.",
      tags: ["laravel", "React js", "coolify", "socket io", 'node js'],
      links: { demo: "https://sheydance.com/", code: "#" },
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Aether Ai Website + Dashboard",
      description: "Aether AI is a platform that uses AI to help users to order their medicines and get them delivered to their doorstep.",
      tags: ["React js", "Node js", "Tailwind css", "socket.io", "postgress sql", "React Library", "Gsap"],
      links: { demo: "https://aetherai.co/", code: "#" },
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Govt Job Portal",
      description: "AllGovJobs.com is an Indian government job aggregator and information portal that provides job seekers with up-to-date listings of government and public sector job opportunities across India",
      tags: ["Next js", "Node js", "Tailwind css", "socket.io", "postgress sql"],
      links: { demo: "https://allgovjobs.com/", code: "#" },
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Top Tipper",
      description: "TopTipper is a digital platform that allows service workers to accept cashless tips via QR codes, ensuring they receive gratuity even when customers do not have cash on hand.",
      tags: ["React js", "Node js", "Tailwind css", "postgress sql"],
      links: { demo: "https://toptipper.co", code: "#" },
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Nest Shopify App",
      description: "Smart Nest (likely referring to Smart Collection) is a Shopify app that allows merchants to create nested sub-collections (categories within categories) and organized menus, making it easier for customers to browse and find products on the store.",
      tags: ["Remix js", "Node js", "Polaris", "Shopify"],
      links: { demo: "", code: "#" },
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Telecey",
      description: "Telecey is a community-based platform that helps users find and compare the best telecom services and mobile plans by gathering real-time, location-based reviews and feedback from other consumers.",
      tags: ["Laravel", "Sql", "Css",],
      links: { demo: "https://telecey.com/", code: "#" },
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section id="projects" ref={containerRef} className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-body-text max-w-xl mx-auto">
            A selection of my recent work, showcasing my technical skills and design capabilities.
          </p>
        </div>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group glass-panel rounded-3xl p-8 relative overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-heading mb-3">{project.title}</h3>
                <p className="text-body-text mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.links.demo} target="_blank" className="flex items-center gap-2 text-sm font-medium text-heading hover:text-primary transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
