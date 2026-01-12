"use strict";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/Section";

// Color schemes for different skill categories
const getCategoryColors = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes("offensive")) {
        return { dot: "bg-red-500", bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20", hover: "hover:bg-red-500/20" };
    } else if (lowerCategory.includes("defensive")) {
        return { dot: "bg-amber-500", bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", hover: "hover:bg-amber-500/20" };
    } else if (lowerCategory.includes("development") || lowerCategory.includes("automation")) {
        return { dot: "bg-indigo-500", bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20", hover: "hover:bg-indigo-500/20" };
    } else if (lowerCategory.includes("cloud") || lowerCategory.includes("network")) {
        return { dot: "bg-emerald-500", bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", hover: "hover:bg-emerald-500/20" };
    } else if (lowerCategory.includes("productivity")) {
        return { dot: "bg-sky-500", bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20", hover: "hover:bg-sky-500/20" };
    }
    return { dot: "bg-slate-500", bg: "bg-slate-500/10", text: "text-slate-400", border: "border-slate-500/20", hover: "hover:bg-slate-500/20" };
};

export const SkillCloud = () => {
    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                    <span className="text-emerald-secure">root@skills:~#</span> ls -la
                </h2>
                <div className="h-1 w-20 bg-emerald-secure mx-auto rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.skills.map((skillCategory, categoryIndex) => {
                    const colors = getCategoryColors(skillCategory.category);
                    return (
                        <div key={categoryIndex} className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${colors.dot}`}></span>
                                {skillCategory.category}
                            </h3>
                            <div className="space-y-3">
                                {skillCategory.items.map((item, itemIndex) => (
                                    <div key={itemIndex}>
                                        {item.label && (
                                            <p className="text-sm text-slate-400 font-medium mb-1">{item.label}</p>
                                        )}
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.split(", ").map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className={`px-3 py-1 ${colors.bg} ${colors.text} border ${colors.border} rounded font-mono text-sm ${colors.hover} transition-colors`}
                                                >
                                                    {skill.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};
