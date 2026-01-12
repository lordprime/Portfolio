"use strict";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/Section";

export const Timeline = () => {
    return (
        <Section id="experience" className="relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                    <span className="text-indigo-research">&lt;</span> Experience <span className="text-indigo-research">/&gt;</span>
                </h2>
                <div className="h-1 w-20 bg-indigo-research mx-auto rounded-full" />
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2" />

                <div className="space-y-12">
                    {portfolioData.experience.map((item, index) => {
                        const Icon = item.icon;
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative flex items-center gap-8 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-slate-900 border-2 border-indigo-research rounded-full flex items-center justify-center z-10 transform -translate-x-1/2">
                                    <Icon className="w-4 h-4 text-emerald-secure" />
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 ml-16 md:ml-0 ${isLeft ? "md:text-right" : ""}`}>
                                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-indigo-research transition-colors group">
                                        <span className="inline-block px-3 py-1 bg-indigo-research/10 text-indigo-research text-xs font-mono rounded mb-2 border border-indigo-research/20">
                                            {item.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-secure transition-colors">
                                            {item.role}
                                        </h3>
                                        <h4 className="text-lg text-slate-400 font-mono mb-4">{item.company}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>

                                {/* Empty Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
