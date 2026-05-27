"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { RefObject } from "react";

export default function HeroBackground({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) {
    const { scrollYProgress } = useScroll({
        container: containerRef,
    });

    // The background and avatar will fade out as the user scrolls past the 4th hero slide (scrollYProgress ~0.5 to 0.65)
    const backgroundOpacity = useTransform(scrollYProgress, [0.5, 0.65], [1, 0]);
    const avatarY = useTransform(scrollYProgress, [0, 0.6], ["0%", "15%"]);
    const avatarScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.06]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.4, 0.6, 0.3]);

    return (
        <motion.div 
            style={{ opacity: backgroundOpacity }}
            className="fixed inset-0 w-full h-screen overflow-hidden bg-[#080810] pointer-events-none z-0"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-radial from-[#0d0d1a] via-[#080810] to-[#04040a]" />
                {/* Animated glow orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
                    style={{
                        background: "radial-gradient(circle, rgba(99,51,255,0.25) 0%, transparent 70%)",
                        opacity: glowOpacity,
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
                    style={{
                        background: "radial-gradient(circle, rgba(0,210,200,0.18) 0%, transparent 70%)",
                        opacity: glowOpacity,
                    }}
                />
            </div>

            {/* Floating grid lines */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Avatar portrait with parallax */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ y: avatarY, scale: avatarScale }}
            >
                <div className="relative flex items-end justify-center h-full w-full max-w-3xl mx-auto">
                    {/* Radial glow behind portrait */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[80px] bg-violet-600/20" />

                    {/* Avatar image */}
                    <img
                        src="/avatar.png"
                        alt="Developer Portrait"
                        className="relative z-10 h-[90vh] max-h-[900px] object-contain select-none"
                        style={{
                            filter: "drop-shadow(0 0 60px rgba(99,51,255,0.3)) drop-shadow(0 0 120px rgba(0,210,200,0.15))",
                        }}
                        draggable={false}
                    />

                    {/* Bottom fade-out gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080810] to-transparent z-20" />
                </div>
            </motion.div>

            {/* Particle dots */}
            <div className="absolute inset-0 z-5">
                {[...Array(18)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 3 + 1,
                            height: Math.random() * 3 + 1,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.3 + 0.05,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
