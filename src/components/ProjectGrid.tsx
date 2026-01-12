"use strict";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { ExternalLink, Terminal } from "lucide-react";
import Link from "next/link";

export const ProjectGrid = () => {
    return (
        <Section id="projects" className="bg-slate-950/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                    <span className="text-emerald-secure">./</span>Features
                </h2>
                <div className="h-1 w-20 bg-emerald-secure mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-secure/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-secure/10"
                    >
                        {/* Header Bar */}
                        <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            <div className="ml-auto">
                                <Terminal className="w-4 h-4 text-slate-600" />
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-secure transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 h-20">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={project.link}
                                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-secure hover:text-emerald-400 transition-colors"
                            >
                                View Project <ExternalLink className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
