"use strict";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/Section";

export const SkillCloud = () => {
    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                    <span className="text-emerald-secure">root@skills:~#</span> ls -la
                </h2>
                <div className="h-1 w-20 bg-emerald-secure mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Offensive */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        Offensive Security
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {portfolioData.skills.offensive.map((skill, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded font-mono text-sm hover:bg-red-500/20 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Dev & AI */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        Dev & AI
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {portfolioData.skills.devAi.map((skill, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded font-mono text-sm hover:bg-indigo-500/20 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Cloud & Net */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Cloud & Network
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {portfolioData.skills.cloudNet.map((skill, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-mono text-sm hover:bg-emerald-500/20 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
