"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 77;
const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(2, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setIsLoaded(true);
          // Draw first frame
          drawFrame(0, loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (index: number, imgs: HTMLImageElement[]) => {
    if (!canvasRef.current || !imgs[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set internal canvas resolution to match source images
    if (canvas.width !== imgs[index].width) {
       canvas.width = imgs[index].width;
       canvas.height = imgs[index].height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgs[index], 0, 0, canvas.width, canvas.height);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isLoaded) {
      // Map scroll 0 -> 1 to frame 0 -> 76
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      drawFrame(frameIndex, images);
    }
  });

  // Fade out the canvas at the very end of the scroll to transition smoothly into the next section
  const canvasOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#080810]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#080810]">
        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="w-full h-full object-cover object-top"
        />
        
        {/* Loading State fallback */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#080810]">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin opacity-50"></div>
          </div>
        )}

        {/* Parallax Overlays */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
