"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function Hobby3DArtist() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-45, 45]);
  const rotateX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [15, -15]);

  return (
    <section
      id="3d-artist"
      ref={ref}
      className="chapter-section flex-col justify-center"
      style={{ background: "#08020F" }}
    >
      {/* Violet ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.1) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col items-center text-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="flex-1 flex flex-col items-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{ color: "var(--chapter-violet)", fontFamily: "var(--font-body)" }}
          >
            Hobby — 3D Artist
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="chapter-title text-4xl sm:text-5xl md:text-7xl mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            Every mesh starts with{" "}
            <span className="text-gradient-violet">one vertex.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="body-copy text-lg mb-6" style={{ color: "rgba(240,236,228,0.65)" }}>
              I got into 3D art through Blender — originally to make assets for 
              a game idea that never launched. The idea died; the obsession with 
              topology and lighting didn&apos;t.
            </p>
            <p className="body-copy text-lg" style={{ color: "rgba(240,236,228,0.4)" }}>
              There&apos;s a parallel between good 3D modeling and good software 
              architecture. In both: the cleaner the underlying structure, 
              the better everything built on top of it looks.
            </p>
          </motion.div>
        </div>

        {/* CSS 3D wireframe cube — scroll-driven rotation */}
        <div className="shrink-0 w-64 h-64 flex items-center justify-center" style={{ perspective: "600px" }}>
          <motion.div
            style={{
              width: 180,
              height: 180,
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
          >
            {/* All 6 faces */}
            {[
              { transform: "translateZ(90px)",           border: "rgba(168,85,247,0.6)" },
              { transform: "translateZ(-90px)",          border: "rgba(168,85,247,0.4)" },
              { transform: "rotateY(90deg) translateZ(90px)",  border: "rgba(168,85,247,0.5)" },
              { transform: "rotateY(-90deg) translateZ(90px)", border: "rgba(168,85,247,0.3)" },
              { transform: "rotateX(90deg) translateZ(90px)",  border: "rgba(232,121,249,0.5)" },
              { transform: "rotateX(-90deg) translateZ(90px)", border: "rgba(232,121,249,0.3)" },
            ].map((face, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  border: `1px solid ${face.border}`,
                  background: `rgba(168,85,247,${0.02 + i * 0.005})`,
                  transform: face.transform,
                  backfaceVisibility: "hidden" as const,
                  transformStyle: "preserve-3d" as const,
                }}
              >
                {/* Inner cross pattern */}
                <div style={{ position: "absolute", inset: "25%", border: `1px solid ${face.border}`, opacity: 0.4 }} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
