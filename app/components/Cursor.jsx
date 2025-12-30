"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Check if device is touch-enabled (roughly)
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Move cursor and follower
        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
                ease: "none",
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out",
            });
        };

        // Hover effects
        const onMouseEnterLink = () => setIsHovering(true);
        const onMouseLeaveLink = () => setIsHovering(false);

        document.addEventListener("mousemove", onMouseMove);

        // Add listeners to all clickable elements
        const links = document.querySelectorAll("a, button, input, textarea, select");
        links.forEach((link) => {
            link.addEventListener("mouseenter", onMouseEnterLink);
            link.addEventListener("mouseleave", onMouseLeaveLink);
        });

        // Observer to attach listeners to dynamic elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const links = document.querySelectorAll("a, button, input, textarea, select");
                    links.forEach((link) => {
                        // Remove first to avoid duplicates (although safe with named function, good practice)
                        link.removeEventListener("mouseenter", onMouseEnterLink);
                        link.removeEventListener("mouseleave", onMouseLeaveLink);
                        link.addEventListener("mouseenter", onMouseEnterLink);
                        link.addEventListener("mouseleave", onMouseLeaveLink);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            links.forEach((link) => {
                link.removeEventListener("mouseenter", onMouseEnterLink);
                link.removeEventListener("mouseleave", onMouseLeaveLink);
            });
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (isHovering) {
            gsap.to(cursor, { scale: 0, duration: 0.3 });
            gsap.to(follower, { scale: 3, backgroundColor: "rgba(37, 99, 235, 0.1)", borderColor: "transparent", duration: 0.3 });
        } else {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(37, 99, 235, 0.5)", duration: 0.3 });
        }
    }, [isHovering]);

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference pointer-events-none"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300"
            />
        </div>
    );
}
