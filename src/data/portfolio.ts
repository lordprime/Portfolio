import { Shield, Terminal, Server, Lock, Code, Cloud, Network, Database } from "lucide-react";

export const portfolioData = {
    hero: {
        name: "Abhishek Reddy",
        tagline: "Cybersecurity Researcher @ CISPA | AI Security | VAPT Specialist",
        bio: "Cybersecurity researcher and MSc student at Saarland University with a focus on web application security and attacks against ML models. Currently working as a Research Assistant at CISPA, developing automated frameworks for CDN fingerprinting and cloud-based strategies for Web Application Penetration Testing (WAPT). Building hybrid tools integrating LLMs and Reinforcement Learning to analyze XSS and CSRF vulnerabilities.",
        location: "Saarbrücken, Germany",
        profileImage: "",
        links: {
            linkedin: "https://linkedin.com/in/r-abhishek-reddy",
            email: "mailto:abhishek.ramesh@cispa.de",
            github: "https://github.com/abhi-reddy",
        },
    },
    certifications: [
        {
            title: "Certified Ethical Hacker (CEH v12)",
            issuer: "EC-Council",
            date: "2023",
            link: "https://drive.google.com/file/d/1LgpuNJ-kaOCza9x7ap-FdsqFDvQTyffM/view"
        },
        {
            title: "Certified Network Defender (CND v2)",
            issuer: "EC-Council",
            date: "2023",
            link: "https://drive.google.com/file/d/1Y7ZEg2MwNsBHVZVur1Rv5wVQQ6WOSOCG/view"
        },
        {
            title: "IBM: Python for Data Science",
            issuer: "Coursera",
            date: "2023",
            link: "https://courses.cognitiveclass.ai/certificates/849371c57f964cf8a6158e9cd85c5621"
        },
        {
            title: "IBM: Cybersecurity Analyst Professional",
            issuer: "Coursera",
            date: "2023",
            link: "https://www.credly.com/badges/c203c970-c22e-4064-a3fa-373429333b04"
        },
        {
            title: "Practical Penetration Testing",
            issuer: "TCM Security",
            date: "2023",
            link: "https://academy.tcm-sec.com/"
        }
    ],
    experience: [
        {
            role: "Research Assistant",
            company: "CISPA Helmholtz Center for Information Security",
            period: "Aug 2025 - Present",
            description: "Researching web application security with a focus on detecting and mitigating Cross-Site Scripting (XSS) attacks using cloud-based strategies. Developing an automated framework for CDN fingerprinting, with emphasis on service workers and web caches.",
            icon: Shield,
        },
        {
            role: "Penetration Testing Intern",
            company: "Hackers4u",
            period: "Sep 2023 - Oct 2023",
            description: "Performed network and application vulnerability assessments using Nessus, Nmap, and simulated attacks. Identified and documented critical security gaps.",
            icon: Terminal,
        },
        {
            role: "Cybersecurity & Digital Forensics Intern",
            company: "CybersecuredIndia",
            period: "Dec 2022 - Feb 2023",
            description: "Analyzed malware behavior and conducted forensic investigations while maintaining chain-of-custody integrity. Developed risk mitigation plans based on findings.",
            icon: Lock,
        },
        {
            role: "Information Security Administrator Intern",
            company: "Virtual Testing Foundation",
            period: "Sep 2022 - Nov 2022",
            description: "Completed 10-week training in information security. Assisted in policy documentation and threat analysis using the MITRE ATT&CK framework.",
            icon: Server,
        },
        {
            role: "Networking & Cybersecurity Intern",
            company: "Cybersocial",
            period: "Aug 2022 - Sep 2022",
            description: "Mapped network topologies and documented IP/VLAN configurations. Conducted vulnerability scans using Nessus/Nmap.",
            icon: Network,
        },
    ],
    projects: [
        {
            title: "HackBot – AI-Powered Cybersecurity Assistant",
            description: "Built with Meta-Llama2 to analyze threats and generate vulnerability reports in Markdown. Dual deployment (local / RunPod) with CLI interface for real-time analysis. Integrated static code analysis to automate exploit detection.",
            tech: ["Meta-Llama2", "Python", "Static Analysis"],
            link: "#",
        },
        {
            title: "API-Based Nmap – Network Scanning Automation",
            description: "Uses python-nmap and Flask for customizable vulnerability scans. Centralized dashboard for monitoring and report generation.",
            tech: ["Python", "Flask", "Nmap"],
            link: "https://doi.org/10.69888/FTSIN.2024.000290",
        },
        {
            title: "AI-Based Enumeration and Exploit Suggestor",
            description: "Autonomous pentest assistant implementing AI to map attack surfaces and suggest exploits, mimicking tools like Nmap and Metasploit. Generates structured Markdown reports for streamlined documentation.",
            tech: ["AI/ML", "Python", "Metasploit"],
            link: "#",
        },
    ],
    publications: [
        {
            title: "Hybrid Quantum-Classical Neural Network Incorporating Attention Mechanisms for Anomaly Detection",
            citation: "AI4S 2025 - Wright State University",
            year: "2025",
            link: "https://www.linkedin.com/posts/r-abhishek-reddy_connections-ai4s2025-wrightstateuniversity-activity-7406370417491288064-qqTk",
        },
        {
            title: "Autoencoder-Driven Machine Learning for Advanced Cybersecurity Malware Detection",
            citation: "DOI: 10.69888/FTSIN.2024.000292",
            year: "2024",
            link: "https://doi.org/10.69888/FTSIN.2024.000292",
        },
        {
            title: "Docker-Based Decentralized Vulnerability Assessment with Port Scanning",
            citation: "DOI: 10.69888/FTSIN.2024.000290",
            year: "2024",
            link: "https://doi.org/10.69888/FTSIN.2024.000290",
        },
        {
            title: "API-Based Network Scanning",
            citation: "ISBN: 978-93-95830-43-0",
            year: "2023",
            link: "https://isbnsearch.org/isbn/9789395830430",
        },
        {
            title: "Enhancing Fog Computing Through Data Center Expansion",
            citation: "ISSN: 0972-8945",
            year: "2023",
            link: "https://www.sijss.com/",
        },
    ],
    skills: [
        {
            category: "Offensive Security",
            items: [
                { label: "Penetration Testing", skills: "Metasploit, Burp Suite, Nmap, Nessus, Sqlmap" },
                { label: "Red Teaming", skills: "MITRE ATT&CK Framework, APT Simulation" }
            ]
        },
        {
            category: "Defensive Security",
            items: [
                { label: "Incident Response", skills: "Splunk, Wireshark, Autopsy, Risk Assessment" },
                { label: "Compliance", skills: "ITIL Framework, ISO 27001, Security Audits" }
            ]
        },
        {
            category: "Development Manager & Automation",
            items: [
                { label: "Languages", skills: "Python (Security Automation, Flask), Java, C++" },
                { label: "AI/ML", skills: "Meta-Llama3, Code Analysis, Prompt Engineering" },
                { label: "Development", skills: "Agile(Scrum), Jira & Confluence" },
                { label: "", skills: "Software Delivery Lifecycle (SDLC)" }
            ]
        },
        {
            category: "Cloud & Networking",
            items: [
                { label: "AWS Security Hub", skills: "Threat detection/Compliance Monitoring" },
                { label: "Azure", skills: "SIEM/SOAR automation" },
                { label: "Network", skills: "VLAN segmentation, TCP/IP Stack optimization, Firewall Configuration, SD-WAN" },
                { label: "", skills: "Network Monitoring with Wireshark/tcpdump" }
            ]
        },
        {
            category: "Productivity Ecosystem",
            items: [
                { label: "Collaboration tools", skills: "Microsoft 365, Google Workspace (Script automation, Data Studio reporting), Jira (Agile workflow management)" },
                { label: "Documentation", skills: "GitHub (Infrastructure documentation), Markdown (Technical writing, Readme Automation)" },
                { label: "Communication", skills: "Slack, Teams, LaTeX" }
            ]
        }
    ],
    hobbies: [
        "🎮 CTF Competitions",
        "📚 Security Research",
        "🔧 Building Security Tools",
        "🎯 Bug Bounty Hunting",
        "📖 Tech Blogging",
        "🏋️ Fitness",
    ],
    languages: [
        { name: "English", level: "C1" },
        { name: "German", level: "A2" },
        { name: "Hindi", level: "C2" },
        { name: "Kannada", level: "C2" },
        { name: "Telugu", level: "C1" },
    ],
    education: [
        {
            degree: "M.Sc. Cybersecurity",
            institution: "Saarland University",
            status: "Oct 2024 - Present",
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Jain University",
            status: "Gold Medalist, CGPA 9.13/10",
        },
    ],
    devQuotes: [
        { quote: "The best defense is a good offense.", author: "Security Proverb" },
        { quote: "There are only two types of companies: those that have been hacked, and those that will be.", author: "Robert Mueller" },
        { quote: "Security is not a product, but a process.", author: "Bruce Schneier" },
        { quote: "The only truly secure system is one that is powered off.", author: "Gene Spafford" },
        { quote: "Amateurs hack systems, professionals hack people.", author: "Bruce Schneier" },
        { quote: "If you think technology can solve your security problems, then you don't understand the problems.", author: "Bruce Schneier" },
        { quote: "Privacy is not something that I'm merely entitled to, it's an absolute prerequisite.", author: "Marlon Brando" },
        { quote: "A hacker does for love what others would not do for money.", author: "Laura Creighton" },
    ],
};

