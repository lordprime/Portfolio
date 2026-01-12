"use strict";
"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: { x: number; y: number; vx: number; vy: number }[] = [];
        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#10b981"; // Emerald-secure
            ctx.strokeStyle = "rgba(99, 102, 241, 0.2)"; // Indigo-research, low opacity

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();

                // Connect particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
            />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
                <div className="space-y-4">
                    <h2 className="text-emerald-secure font-mono text-lg md:text-xl tracking-wide animate-fade-in-up">
                        Hi, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-secure to-indigo-research animate-fade-in-up delay-100">
                        {portfolioData.hero.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto animate-fade-in-up delay-200">
                        {portfolioData.hero.tagline}
                    </p>
                </div>

                <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg animate-fade-in-up delay-300">
                    {portfolioData.hero.bio}
                </p>

                <div className="flex justify-center gap-6 animate-fade-in-up delay-500">
                    <Link
                        href={portfolioData.hero.links.linkedin}
                        target="_blank"
                        className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-emerald-secure"
                    >
                        <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link
                        href={portfolioData.hero.links.email}
                        className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-indigo-research"
                    >
                        <Mail className="w-6 h-6" />
                    </Link>
                    <Link
                        href="https://github.com" // Placeholder if not provided, assuming standard
                        target="_blank"
                        className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
                    >
                        <Github className="w-6 h-6" />
                    </Link>
                </div>

                <div className="pt-12 animate-bounce">
                    <ArrowDown className="w-6 h-6 mx-auto text-slate-600" />
                </div>
            </div>
        </div>
    );
};
