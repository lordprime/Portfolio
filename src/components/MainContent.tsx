"use client";

import { portfolioData } from "@/data/portfolio";
import { Terminal, Shield, Cloud, FileText, Code, ExternalLink, X, BookOpen, Sun, Moon, Download, Quote, Zap, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

// Helper for section headers
const SectionHeader = ({ title }: { title: string }) => (
    <h2 className="text-3xl font-semibold text-white mb-6 mt-12 first:mt-0">{title}</h2>
);

export const MainContent = () => {
    const { theme, toggleTheme } = useTheme();
    const [selectedJob, setSelectedJob] = useState<typeof portfolioData.experience[0] | null>(null);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isQuoteFading, setIsQuoteFading] = useState(false);

    // Rotate quotes every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsQuoteFading(true);
            setTimeout(() => {
                setCurrentQuoteIndex((prev) => (prev + 1) % portfolioData.devQuotes.length);
                setIsQuoteFading(false);
            }, 300);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentQuote = portfolioData.devQuotes[currentQuoteIndex];

    return (
        <div className="flex-1 pb-20 relative">
            {/* Modal for Work Experience */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedJob(null)}>
                    <div className="bg-card border border-border-subtle p-6 rounded-3xl max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-indigo-500/30">
                                <selectedJob.icon className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{selectedJob.role}</h3>
                                <p className="text-indigo-400">{selectedJob.company}</p>
                            </div>
                        </div>
                        <div className="text-sm text-slate-500 font-mono mb-4 bg-background inline-block px-3 py-1.5 rounded-xl">
                            {selectedJob.period}
                        </div>
                        <p className="text-slate-300 leading-relaxed text-sm">
                            {selectedJob.description}
                        </p>
                    </div>
                </div>
            )}

            {/* Header / Logo Area with Theme Toggle */}
            <div className="mb-12 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                        <Terminal className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-white tracking-tight">Workfolio</h1>
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-3 bg-card rounded-2xl hover:bg-element-hover-bg transition-all border border-transparent hover:border-slate-700 group"
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? (
                        <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
                    ) : (
                        <Moon className="w-5 h-5 text-indigo-500 group-hover:-rotate-12 transition-transform" />
                    )}
                </button>
            </div>

            {/* About Me */}
            <section>
                <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
                <div className="text-slate-300 leading-relaxed text-base border-t border-b border-border-subtle py-6">
                    <p>{portfolioData.hero.bio}</p>
                </div>
            </section>

            {/* Download Resume & Dev Quote Section */}
            <section className="mt-6">
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    {/* Download Resume Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl hover:from-indigo-500 hover:to-purple-500 transition-all group"
                    >
                        <Download className="w-4 h-4 text-white" />
                        <span className="text-sm font-medium text-white">Download Resume</span>
                    </a>

                    {/* Rotating Quote */}
                    <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-card rounded-2xl border border-border-subtle">
                        <div className="p-1.5 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg shrink-0">
                            <Quote className="w-3.5 h-3.5 text-amber-400" />
                        </div>
                        <div className={`transition-opacity duration-300 ${isQuoteFading ? 'opacity-0' : 'opacity-100'}`}>
                            <p className="text-sm text-slate-300 italic leading-relaxed">"{currentQuote.quote}"</p>
                            <p className="text-xs text-slate-500">— {currentQuote.author}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Experience */}
            <section className="mt-10">
                <SectionHeader title="Work Experience" />
                <div className="space-y-3">
                    {portfolioData.experience.map((job, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedJob(job)}
                            className="flex items-center p-4 bg-card rounded-3xl hover:bg-element-hover-bg transition-all cursor-pointer border border-transparent hover:border-slate-700 active:scale-[0.99] group"
                        >
                            {/* Chevron indicator */}
                            <div className="p-1.5 bg-element-bg rounded-lg mr-3 group-hover:bg-indigo-500/20 transition-colors">
                                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-white">{job.role}</span>
                                    <span className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">{job.period}</span>
                                </div>
                                <p className="text-sm text-slate-400">{job.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skill Set - Simple Text Layout Matching Resume */}
            <section className="mt-10">
                <SectionHeader title="Skills" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {portfolioData.skills.map((skillGroup, idx) => (
                        <div key={idx} className="space-y-2">
                            {/* Category Title */}
                            <h3 className="font-bold text-white text-lg">{skillGroup.category}</h3>

                            {/* Skills as text */}
                            <div className="space-y-1 text-sm text-slate-300 leading-relaxed">
                                {skillGroup.items.map((item, itemIdx) => (
                                    <p key={itemIdx}>
                                        {item.label && <span className="text-slate-400">{item.label} : </span>}
                                        {item.skills}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects (Work Examples) */}
            <section className="mt-10">
                <SectionHeader title="Work Examples" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {portfolioData.projects.map((proj, idx) => (
                        <div key={idx} className="group bg-card rounded-3xl overflow-hidden hover:bg-element-hover-bg transition-colors cursor-pointer border border-transparent hover:border-slate-700">
                            {/* Project Image Placeholder */}
                            <div className="h-40 bg-gradient-to-br from-[#333] to-[#222] flex items-center justify-center relative">
                                <span className="absolute top-3 left-3 px-3 py-1 bg-black/50 rounded-full text-[10px] text-white backdrop-blur-sm">Project</span>
                                <Terminal className="w-10 h-10 text-slate-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    {proj.title}
                                </h3>
                                <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">{proj.description}</p>
                                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 group-hover:text-slate-300">
                                    View Details <ExternalLink className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Publications */}
            <section className="mt-10">
                <SectionHeader title="Publications" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {portfolioData.publications.map((pub, index) => (
                        <a
                            key={index}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-5 bg-card rounded-3xl hover:bg-element-hover-bg transition-all border border-transparent hover:border-indigo-500/50 overflow-hidden"
                        >
                            {/* Gradient accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Publication number badge */}
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-element-bg flex items-center justify-center text-xs font-bold text-slate-500 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-all">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all">
                                <BookOpen className="w-5 h-5 text-indigo-400" />
                            </div>

                            {/* Content */}
                            <h4 className="font-bold text-white text-sm mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2 pr-8">
                                {pub.title}
                            </h4>

                            <div className="flex items-center gap-2 mb-3">
                                {pub.year && (
                                    <span className="px-2.5 py-0.5 bg-element-bg rounded-full text-[10px] text-slate-300 font-medium">
                                        {pub.year}
                                    </span>
                                )}
                                <span className="text-[10px] text-slate-500 font-mono truncate">
                                    {pub.citation}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-indigo-400 transition-colors">
                                <span>Read Paper</span>
                                <ExternalLink className="w-3 h-3" />
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};
