import { Shield, Terminal, Server, Lock, Code, Cloud, Network, Database } from "lucide-react";

export const portfolioData = {
    hero: {
        name: "Abhishek Reddy",
        tagline: "Cybersecurity Researcher @ CISPA | AI Security | VAPT Specialist",
        bio: "M.Sc. Cybersecurity student and Research Assistant at CISPA with technical & practical foundation in Web Security, AI Agent Vulnerabilities, and Machine Learning. Currently leading novel research on Service Worker-mediated Web Cache Deception (SW-WCD) and the first systematic security evaluation of Autonomous Coding Agents (Intent-Driven Autonomous Development). Proficient in building complex simulation infrastructures (Docker/Nginx/Playwright), statistical analysis (R), and auditing AI-generated software using eBPF and stateful fuzzing.",
        location: "Saarbrücken, Germany",
        profileImage: "/image.jpg",
        links: {
            linkedin: "https://linkedin.com/in/r-abhishek-reddy",
            email: "mailto:abhishek.ramesh@cispa.de",
            github: "https://github.com/lordprime",
            phone: "tel:+491625922595",
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
            role: "Research Assistant (Web & AI Security)",
            company: "CISPA -- Helmholtz Center for Information Security",
            period: "Sep 2025 – Present",
            description: "• SW-WCD Research: Developed `SW-WCD-RESEARCH`, a controlled prototype to study Service Worker-mediated Web Cache Deception. Architected a simulation environment using Nginx (CDN logic) and Express (Origin) to test path sculpting and header manipulation payloads.\n• Infrastructure Automation: Implemented a Playwright-based test suite for cross-browser validation and an R-based statistical engine to compute attack success rates and time-to-cache metrics.\n• AI Agent Security (IDAD): Leading the Vibecoding Security Gap study, benchmarking Agent-Native IDEs vs. CLI Agents. Designing the `XYZ Bench` framework to evaluate 275 development tasks for hallucinated dependencies, logic optimization bypasses, and security vulnerabilities.\n• Vulnerability Discovery: Uncovering novel Verification Gap, risks where autonomous agents report successful tests on vulnerable code, specifically in context poisoning and legacy pattern propagation & identifying Security Vuln.",
            icon: Shield,
        },
        {
            role: "Penetration Testing Intern",
            company: "Hackers4u",
            period: "Sep 2023 – Oct 2023",
            description: "• Executed black-box penetration tests on web applications, identifying critical vulnerabilities (SQLi, XSS, IDOR).\n• Automated network enumeration using Nmap and Nessus APIs, reducing manual scanning time by 40%.\n• Documented findings in markdown reports for technical and non-technical stakeholders.",
            icon: Terminal,
        },
        {
            role: "Cybersecurity & Digital Forensics Intern",
            company: "CybersecuredIndia",
            period: "Dec 2022 – Feb 2023",
            description: "• Analyzed malware behavior logs using Python to detect obfuscation patterns.\n• Conducted forensic investigations preserving chain-of-custody; reconstructed attack timelines using Registry and Prefetch artifacts.\n• Translated findings into actionable risk mitigation plans.",
            icon: Lock,
        },
        {
            role: "Information Security Administrator Intern",
            company: "Virtual Testing Foundation",
            period: "Sep 2022 – Nov 2022",
            description: "• Mapped adversary behaviors to controls using MITRE ATT&CK to identify gaps.\n• Assisted in drafting Information Security and Acceptable Use Policies (ISP/AUP).",
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
            title: "SW-WCD-RESEARCH: Web Cache Deception Prototype",
            description: "• Engineered a complete research testbed to evaluate how Service Workers influence WCD behaviors in CDN-backed architectures.\n• Implemented Node.js anomaly detectors to log rewritten URLs and cache indicators.\n• Developed attack payloads (e.g., t1-path-sculpting.js) to bypass standard CDN cache armor.\n• Designed PostgreSQL schema for trial data storage and statistical power analysis.",
            tech: ["Docker", "Nginx", "Playwright", "R", "JS", "SQL"],
            link: "#",
        },
        {
            title: "The Vibecoding Security Gap (IDAD Evaluation)",
            description: "• Building `XYZ Bench` to compare Agent-Native IDEs vs. CLI agents across 275 software tasks.\n• Measuring hallucinated dependencies and context poisoning rates in autonomous coding.\n• Using eBPF to monitor insecure execution patterns in agent-generated code.",
            tech: ["Python", "eBPF", "Gemini 3.5", "Claude Code"],
            link: "#",
        },
        {
            title: "Protocol Fuzzing",
            description: "• Designed a stateful Fandango IO grammar for a Redis-like key-value store, enabling valid command sequences (SET/GET/UPDATE) with response validation.\n• Simulated an SMTP man-in-the-middle attack by hijacking authenticated sessions to send spoofed emails without hardcoded credentials.\n• Used derivation tree constraints and prefix-aware tracking to enforce protocol correctness during fuzzing.",
            tech: ["Python", "Fandango", "SMTP", "Redis-like Protocol"],
            link: "#",
        },
        {
            title: "HACKBOT: AI-Powered Automated Exploit Engine",
            description: "• Local LLM interface with RAG to query CVE databases without hallucinations.\n• Deployed on RunPod with latency/resource optimization.\n• Integrated static analysis for auto-generated vulnerability reports.",
            tech: ["Python", "Meta-Llama 3", "RunPod", "RAG"],
            link: "#",
        },
        {
            title: "API-Based NMAP Dashboard",
            description: "• Full-stack dashboard for managing and visualizing Nmap scans.\n• Enabled real-time asset visibility and centralized reporting.",
            tech: ["Python", "Flask", "REST API"],
            link: "#",
        },
    ],
    publications: [
        {
            title: "Autoencoder-Driven Machine Learning for Advance Cybersecurity Malware Detection",
            citation: "FMDB Transactions on Sustainable Intelligent Networks, Vol. 1, No. 4, pp. 252–264",
            year: "2024",
            link: "https://doi.org/10.69888/FTSIN.2024.000292",
        },
        {
            title: "Docker Based Decentralized Vulnerability Assessment with Port Scanning",
            citation: "FMDB Transactions on Sustainable Intelligent Networks",
            year: "2024",
            link: "https://doi.org/10.69888/FTSIN.2024.000290",
        },
        {
            title: "API-based Network Scanning, Mapana",
            citation: "Proceedings of National Conference on Emerging Trends in Computer Science",
            year: "2024",
            link: "#",
        },
        {
            title: "Enhancing Fog Computing Through Data Center Expansion",
            citation: "SIJSS-UGC Journal (ISSN: 0972–8945)",
            year: "2023",
            link: "https://www.sijss.com/",
        },
    ],
    skills: [
        {
            category: "Web & Offensive Security",
            items: [
                { label: "Skills", skills: "VAPT, System exploitation, Privilege escalation, Proof of concept development, Client-side vulnerability assessment, Browser and extension testing, CDN Architecture (Nginx/Varnish/Cloudflare), OWASP Top 10." }
            ]
        },
        {
            category: "Security Operations",
            items: [
                { label: "Skills", skills: "Splunk, Wireshark, Autopsy, MITRE ATT&CK, ITIL Framework, ISO 27001, Security Audits, Risk Assessment." }
            ]
        },
        {
            category: "Cloud & DevSecOps",
            items: [
                { label: "Skills", skills: "AWS Security fundamentals, Azure SIEM/SOAR, Infrastructure as Code (Terraform), Container security (Docker, Kubernetes), CI/CD Security concepts, Misconfiguration analysis." }
            ]
        },
        {
            category: "Programming",
            items: [
                { label: "Skills", skills: "Python (automation, security tooling, agent workflows), Bash/Shell Scripting, JavaScript/Node.js, C++" }
            ]
        },
        {
            category: "ML & Tools",
            items: [
                { label: "Skills", skills: "PyTorch, TensorFlow, Autoencoders, RL, LLMs (Claude Code), HuggingFace, RunPod, Langchain, VectorDatabases, Docker, Kubernetes." }
            ]
        },
        {
            category: "AI Security",
            items: [
                { label: "Attacks", skills: "Prompt Injection, Jailbreaking, Data Poisoning, Membership Inference attack." },
                { label: "Defense", skills: "Input Sanitization (Guardrails), Adversarial Training, Robustness Verification." }
            ]
        },
        {
            category: "AI & Security Automation",
            items: [
                { label: "Skills", skills: "AI-assisted security workflows, Integration with LLMs (Claude, GPT, Llama), agent-based automation." }
            ]
        },
        {
            category: "Database & Data Handling",
            items: [
                { label: "Skills", skills: "SQLite3, PostgreSQL, JSON-based data modeling, dataset preprocessing for security and ML pipelines." }
            ]
        },
        {
            category: "Productivity Ecosystem",
            items: [
                { label: "Skills", skills: "Workspace (Script automation, Data Studio reporting), Jira (Agile workflow management), Documentation (GitHub, Markdown), Communication (Slack, Teams, LaTeX)." }
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
