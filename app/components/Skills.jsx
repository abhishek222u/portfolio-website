"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Code,
    Layout,
    Server,
    Database,
    Smartphone,
    Globe,
    Cpu,
    Layers,
    Terminal
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layout className="w-6 h-6 text-primary" />,
            skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Redux", "Blade"]
        },
        {
            title: "Backend & Database",
            icon: <Server className="w-6 h-6 text-indigo-400" />,
            skills: ["Node.js", "Express", "Php", "Laravel", "PostgreSQL", "MongoDB", "Firebase", "Prisma"]
        },
        {
            title: "AI Tools",
            icon: <Cpu className="w-6 h-6 text-purple-400" />,
            skills: ["antigravity", "Cursor", "ChatGPT", "Claude", "GitHub Copilot",]
        },
        {
            title: "Tools & DevOps",
            icon: <Terminal className="w-6 h-6 text-accent" />,
            skills: ["Git", "Docker", "AWS", "Vercel", "coolify", "supabase"]
        },
    ];

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6">
                <div ref={headingRef} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 inline-block relative">
                        Technical Skills
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                    </h2>
                    <p className="text-body-text max-w-2xl mx-auto">
                        A comprehensive toolkit of modern technologies I use to build scalable, high-performance applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-heading">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
