import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, Phone, ExternalLink, GraduationCap, ArrowRightCircle, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
    return (
        <aside className="lg:w-[350px] w-full flex flex-col gap-10 shrink-0">
            {/* Profile Section */}
            <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                    <Image
                        src={portfolioData.hero.profileImage}
                        alt="Profile"
                        width={192}
                        height={192}
                        className="rounded-full object-cover ring-4 ring-[#333]"
                    />
                </div>
                <p className="text-sm font-medium text-slate-400 mb-1">Hi there! I'm {portfolioData.hero.name}</p>

                {/* Get in Touch */}
                <h3 className="text-left text-2xl font-bold text-white mb-4 mt-8">Get in touch</h3>
                <div className="grid grid-cols-2 gap-3">
                    <Link href={portfolioData.hero.links.email} className="flex items-center gap-3 p-3 bg-card rounded-2xl hover:bg-element-hover-bg transition-colors group">
                        <Mail className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-300">Email</span>
                    </Link>
                    {portfolioData.hero.links.phone && (
                        <Link href={portfolioData.hero.links.phone} className="flex items-center gap-3 p-3 bg-card rounded-2xl hover:bg-element-hover-bg transition-colors group">
                            <Phone className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-300">Phone</span>
                        </Link>
                    )}
                    <Link href={portfolioData.hero.links.linkedin} target="_blank" className="flex items-center gap-3 p-3 bg-card rounded-2xl hover:bg-element-hover-bg transition-colors group">
                        <Linkedin className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-300">LinkedIn</span>
                    </Link>
                    {portfolioData.hero.links.github && (
                        <Link href={portfolioData.hero.links.github} target="_blank" className="flex items-center gap-3 p-3 bg-card rounded-2xl hover:bg-element-hover-bg transition-colors group">
                            <Github className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-300">GitHub</span>
                        </Link>
                    )}
                </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <div className="space-y-2">
                    {portfolioData.education.map((edu, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-card rounded-3xl hover:bg-element-hover-bg transition-colors">
                            <div className="p-2 bg-element-bg rounded-xl">
                                <GraduationCap className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white">{edu.degree}</h4>
                                <p className="text-xs text-slate-400">{edu.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
                <div className="space-y-2">
                    {portfolioData.certifications.map((cert, idx) => (
                        <a
                            key={idx}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-card rounded-3xl hover:bg-element-hover-bg transition-colors group cursor-pointer"
                        >
                            <ArrowRightCircle className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                            <div>
                                <h4 className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">{cert.title}</h4>
                                <p className="text-[10px] text-slate-500">{cert.issuer}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Hobbies */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500" /> Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                    {portfolioData.hobbies.map((hobby, idx) => (
                        <span key={idx} className="px-4 py-2 bg-card rounded-full text-xs text-slate-300 border border-slate-800 hover:border-slate-600 transition-colors">
                            {hobby}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
};

