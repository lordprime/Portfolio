"use strict";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { GraduationCap } from "lucide-react";

export const Education = () => {
    return (
        <Section id="education" className="pb-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                    <span className="text-indigo-research">sudo</span> apt-get install education
                </h2>
                <div className="h-1 w-20 bg-indigo-research mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.education.map((edu, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-6 bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-emerald-secure transition-colors group"
                    >
                        <div className="p-4 bg-slate-800 rounded-full group-hover:bg-emerald-secure/20 transition-colors">
                            <GraduationCap className="w-8 h-8 text-slate-400 group-hover:text-emerald-secure transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                            <p className="text-indigo-research font-mono mb-2">{edu.institution}</p>
                            <p className="text-slate-500 text-sm">{edu.status}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer / Contact Hint */}
            <footer className="text-center mt-20 text-slate-500 text-sm font-mono">
                <p>Built by Antigravity | &copy; {new Date().getFullYear()} Abhishek Reddy</p>
            </footer>
        </Section>
    );
};
