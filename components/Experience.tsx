"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        organization: "Ramaiah Institute of Technology",
        role: "B.E. in Electrical and Electronics (GPA: 8.5)",
        period: "Aug 2023 – July 2027 (Expected)",
        description: "Developing strong foundations in Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems (OS), and Web Technologies.",
    },
    {
        organization: "DeepLearning.AI & Stanford University",
        role: "Supervised Machine Learning: Regression and Classification",
        period: "Certification",
        description: "Acquired deep understanding of supervised machine learning algorithms, covering linear and logistic regression, cost functions, gradient descent optimization, regularization techniques, and model evaluation.",
        link: "https://coursera.org/share/9c1294146b03569ffa31012d0a026ad9"
    },
    {
        organization: "Deloitte Australia",
        role: "Cyber Job Simulation (Forage)",
        period: "2025",
        description: "Completed virtual experience simulating cyber security workflows, network forensics, threat analysis, and secure system practices.",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_68bd06be8b87fbdc1c6ae90c_1757221745046_completion_certificate.pdf"
    },
    {
        organization: "LeetCode",
        role: "300+ Algorithmic Problems Solved",
        period: "Ongoing",
        description: "Actively training and solving complex problems on algorithms, data structures, and graph theory to master problem-solving at scale.",
        link: "https://leetcode.com/u/Anirudha14/"
    },
];

export default function Experience() {
    return (
        <section className="relative z-20 bg-[#0a0a12] py-32 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter text-white text-center"
                >
                    Journey & Milestones
                </motion.h2>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(99,51,255,0.8)]" />

                            <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-widest">{milestone.period}</div>
                            <h3 className="text-3xl font-bold text-white mb-1">{milestone.organization}</h3>
                            <h4 className="text-xl text-violet-400 mb-4">{milestone.role}</h4>
                            <p className="text-gray-300 leading-relaxed max-w-2xl">
                                {milestone.description}
                            </p>

                            {milestone.link && (
                                <a
                                    href={milestone.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-semibold text-violet-400 hover:text-violet-300 mt-4 transition-colors cursor-pointer"
                                >
                                    View Credential <span className="ml-1">→</span>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
