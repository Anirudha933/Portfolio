"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Stateful DPI Engine",
        category: "Systems & Networking",
        description: "A high-performance Stateful Deep Packet Inspection engine in C++17 parsing 10K+ packets/sec. Implemented multi-threaded packet parsing pipelines and TLS SNI extraction for L2-L7 traffic classification.",
        tech: "C++17, Multi-threading, PCAP, TCP/IP",
        image: "/projects/dpi-engine.png"
    },
    {
        title: "Explainable Network AI",
        category: "Machine Learning & Security",
        description: "An end-to-end ML pipeline for Network Anomaly Detection using real-world traffic data. Integrated SHAP for feature explainability and built a Streamlit dashboard with <200ms latency.",
        tech: "Python, Scikit-learn, SHAP, Streamlit",
        image: "/projects/explainable-ai.png"
    },
    {
        title: "Anonymous AI Platform",
        category: "Full-Stack Web App",
        description: "Secure anonymous messaging platform featuring LLM-powered content moderation, safety filtering, and dynamic response suggestions using Groq API and NextAuth.js.",
        tech: "Next.js, NextAuth, MongoDB, Groq API",
        image: "/projects/anonymous-messaging.png",
        link: "https://anon-inbox.vercel.app/"
    }
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#080810] py-32 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-white"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => {
                        const CardContent = (
                            <>
                                {/* Image Background */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/80 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
                                </div>

                                <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 text-xs font-medium tracking-widest text-[#080810] uppercase bg-[#ededed] rounded-full shadow-lg">
                                            {project.category}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md">
                                            {project.tech}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-md">{project.title}</h3>
                                    <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">{project.description}</p>
                                </div>
                            </>
                        );

                        if (project.link) {
                            return (
                                <a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-[500px] flex flex-col justify-end"
                                    >
                                        {CardContent}
                                    </motion.div>
                                </a>
                            );
                        }

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-[500px] flex flex-col justify-end"
                            >
                                {CardContent}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
