"use client";

import { motion } from "framer-motion";

interface HeroSlideProps {
    title: string;
    subtitle: string;
    align: "left" | "center" | "right";
}

export default function HeroSlide({ title, subtitle, align }: HeroSlideProps) {
    const alignClass =
        align === "left"
            ? "items-start text-left justify-start md:pl-24"
            : align === "right"
                ? "items-end text-right justify-end md:pr-24"
                : "items-center text-center justify-center";

    return (
        <section className="snap-start snap-always h-screen w-full flex items-center p-8 md:p-16 relative z-10 pointer-events-none">
            <div className={`w-full flex ${alignClass}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl bg-black/50 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] pointer-events-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)] leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mt-4 font-light tracking-wide leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
