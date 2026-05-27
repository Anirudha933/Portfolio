"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: "After 1st scroll" (approx 5-10% down)
  // Fades in 5-10%, peaks 10-25%, fades out 25-30%
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.25, 0.3], [0, 0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.3], [50, -50]); // Parallax up

  // Section 2: Middle portion
  // Fades in 35-40%, peaks 40-55%, fades out 55-60%
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.55, 0.6], [0, 0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.6], [50, -50]); // Parallax up

  // Section 3: Final portion of the sequence
  // Fades in 65-70%, peaks 70-85%, fades out 85-90%
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.65, 0.7, 0.85, 0.9], [0, 0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.9], [50, -50]); // Parallax up

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center h-full w-full">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute flex flex-col items-center justify-center text-center w-full px-4"
      >
        <h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-white pb-2"
          style={{ textShadow: "0px 4px 30px rgba(0,0,0,1), 0px 2px 10px rgba(0,0,0,0.8)" }}
        >
          Anirudha Mohanty.
        </h1>
        <div className="mt-6 bg-black/30 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-2xl">
          <p className="text-lg md:text-xl text-white font-medium max-w-2xl text-center tracking-wide">
            Systems-focused Software Developer.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute left-0 w-full md:w-[60%] flex flex-col justify-center px-8 md:px-24 h-full"
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 pb-2">
          High-Performance <br />
          Systems.
        </h2>
        <div className="mt-6 bg-black/30 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/10 shadow-2xl max-w-xl">
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
            Building multi-threaded C++ engines, deep packet inspection pipelines, and parsing network traffic at scale.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute right-0 w-full md:w-[60%] flex flex-col justify-center items-end text-right px-8 md:px-24 h-full"
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 pb-2">
          Intelligent ML & <br />
          Backends.
        </h2>
        <div className="mt-6 bg-black/30 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/10 shadow-2xl max-w-xl text-right">
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
            Designing network anomaly detection models with Explainable AI (XAI) and building LLM-integrated platforms.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
