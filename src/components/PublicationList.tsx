"use strict";
"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Section, cn } from "@/components/Section";
import { Copy, Check, FileText } from "lucide-react";

export const PublicationList = () => {
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const handleCopy = (citation: string, index: number) => {
        navigator.clipboard.writeText(citation);
        setCopiedId(index);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <Section id="publications" className="bg-slate-950/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                    <span className="text-indigo-research">~</span> Publications
                </h2>
                <div className="h-1 w-20 bg-indigo-research mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {portfolioData.publications.map((pub, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:bg-slate-900 transition-colors"
                    >
                        <div className="p-3 bg-slate-800 rounded-lg text-indigo-research shrink-0">
                            <FileText className="w-6 h-6" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                                {pub.title}
                            </h3>
                            <p className="text-slate-400 font-mono text-sm border-l-2 border-slate-700 pl-3">
                                {pub.citation}
                            </p>
                        </div>

                        <div className="flex gap-3 shrink-0 w-full md:w-auto mt-2 md:mt-0">
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 md:flex-none py-2 px-4 text-center rounded bg-indigo-research hover:bg-indigo-600 text-white text-sm font-medium transition-colors"
                            >
                                View
                            </a>
                            <button
                                onClick={() => handleCopy(pub.citation, index)}
                                className="flex-1 md:flex-none py-2 px-4 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
                                title="Copy Citation"
                            >
                                {copiedId === index ? (
                                    <>
                                        <Check className="w-4 h-4 text-emerald-secure" />
                                        <span className="md:hidden">Copied</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        <span className="md:hidden">Copy</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
