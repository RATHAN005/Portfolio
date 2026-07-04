"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKETCH_PATHS = [
  "M 40 120 Q 80 60 120 90 Q 160 120 200 80 Q 240 40 280 70 Q 310 90 330 80",
  "M 40 160 Q 90 130 140 150 Q 190 170 240 140 Q 280 120 330 145",
  "M 40 200 C 80 180 120 220 160 200 C 200 180 240 210 280 200 Q 310 192 330 205",
];

export default function HobbyArtist2D() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="artist-2d"
      className="chapter-section flex-col justify-center"
      style={{ background: "#0F0705" }}
    >
      {/* Warm coral ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(232,115,74,0.09) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <div className="flex-1 max-w-xl flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{ color: "var(--chapter-coral)", fontFamily: "var(--font-body)" }}
          >
            Hobby — 2D Illustration
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="chapter-title text-4xl sm:text-5xl md:text-7xl mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            I draw{" "}
            <span className="text-gradient">to think</span>
            {" "}differently.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="body-copy text-lg mb-6" style={{ color: "rgba(240,236,228,0.65)" }}>
              Before I open a code editor, I sketch on paper. Architecture diagrams, 
              UI flows, even abstract doodles of how I imagine data moving through 
              a system. Drawing engages a different part of my brain — and 
              the ideas that come from it are usually the best ones.
            </p>
            <p className="body-copy text-lg" style={{ color: "rgba(240,236,228,0.4)" }}>
              I do character illustrations, landscapes, and the occasional 
              surrealist piece where a circuit board becomes a city. 
              My medium of choice is Procreate — but there&apos;s still 
              something about a sketchbook and a ballpoint pen.
            </p>
          </motion.div>
        </div>

        {/* Sketch SVG that fills in with color on scroll */}
        <div className="shrink-0 w-full max-w-md">
          <svg
            ref={ref}
            viewBox="0 0 370 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* Background washes — fill in when in view */}
            <motion.rect
              x="0" y="0" width="370" height="280" rx="16"
              fill="#1a0e08"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
            />
            {/* Sketch paths — draw in */}
            {SKETCH_PATHS.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="rgba(232,115,74,0.25)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 0.3 + i * 0.5, ease: "easeInOut" }}
              />
            ))}
            {/* Color fill reveal — the "sketch fills in" effect */}
            <motion.path
              d="M 80 200 Q 100 170 130 180 Q 160 190 180 165 Q 200 140 220 155 Q 240 170 260 150 Q 280 130 300 140 L 300 240 Q 260 250 220 245 Q 180 240 140 248 Q 110 254 80 250 Z"
              fill="rgba(232,115,74,0.12)"
              initial={{ scaleY: 0, originY: "100%" }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Watercolor-style blobs */}
            {[
              { cx: 150, cy: 130, r: 45, color: "rgba(232,115,74,0.15)", delay: 0.5 },
              { cx: 250, cy: 100, r: 35, color: "rgba(168,85,247,0.1)", delay: 0.8 },
              { cx: 200, cy: 200, r: 30, color: "rgba(34,197,94,0.08)", delay: 1.1 },
            ].map(({ cx, cy, r, color, delay }, i) => (
              <motion.circle
                key={i}
                cx={cx} cy={cy} r={r}
                fill={color}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay, ease: "easeOut" }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
            ))}
            {/* Fine detail lines */}
            {SKETCH_PATHS.map((d, i) => (
              <motion.path
                key={`accent-${i}`}
                d={d}
                stroke={i === 0 ? "rgba(232,115,74,0.7)" : "rgba(232,115,74,0.4)"}
                strokeWidth={i === 0 ? "2" : "1"}
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.8 + i * 0.3, ease: "easeInOut" }}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
