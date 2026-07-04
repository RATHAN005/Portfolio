"use client";

import { motion } from "framer-motion";

const FOLDS = [
  { label: "Crane",   steps: 32, emoji: "🦢" },
  { label: "Dragon",  steps: 48, emoji: "🐉" },
  { label: "Lotus",   steps: 26, emoji: "🌸" },
  { label: "Fox",     steps: 18, emoji: "🦊" },
];

export default function HobbyOrigami() {
  return (
    <section
      id="origami"
      className="chapter-section flex-col justify-center"
      style={{ background: "#100A06" }}
    >
      {/* Blush ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 40% 40%, rgba(251,191,128,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Folded paper geometric motif */}
      <div className="absolute right-0 bottom-0 w-[45vw] max-w-lg opacity-5 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Origami crane silhouette — simplified polygon */}
          <polygon points="200,20 380,200 200,160 20,200" stroke="#FBBF80" strokeWidth="1" fill="#FBBF80" fillOpacity="0.1"/>
          <polygon points="200,160 380,200 200,380" stroke="#FBBF80" strokeWidth="1" fill="#FBBF80" fillOpacity="0.05"/>
          <polygon points="200,160 20,200 200,380" stroke="#FBBF80" strokeWidth="1" fill="#FBBF80" fillOpacity="0.08"/>
          <line x1="200" y1="20" x2="200" y2="380" stroke="#FBBF80" strokeWidth="0.5"/>
          <line x1="20" y1="200" x2="380" y2="200" stroke="#FBBF80" strokeWidth="0.5"/>
          <line x1="200" y1="160" x2="380" y2="200" stroke="#FBBF80" strokeWidth="0.5"/>
          <line x1="200" y1="160" x2="20" y2="200" stroke="#FBBF80" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.5em] uppercase mb-8"
          style={{ color: "var(--chapter-blush)", fontFamily: "var(--font-body)" }}
        >
          Hobby — Origami
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="chapter-title text-4xl sm:text-5xl md:text-7xl mb-10 max-w-3xl"
          style={{ color: "var(--text-primary)" }}
        >
          One sheet of paper.{" "}
          <span style={{ color: "var(--chapter-blush)" }}>
            Infinite forms.
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="flex-1 max-w-xl flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="body-copy text-lg mb-6" style={{ color: "rgba(240,236,228,0.65)" }}>
                Origami is where I go when I need to think without a screen. There&apos;s 
                something meditative about 48 deliberate folds turning into a dragon — 
                no undo, no ctrl+z, just paper and patience.
              </p>
              <p className="body-copy text-lg" style={{ color: "rgba(240,236,228,0.4)" }}>
                It also turns out that spatial reasoning for origami and system 
                architecture aren&apos;t that different. Both are about understanding 
                structure before you commit to a fold you can&apos;t reverse.
              </p>
            </motion.div>
          </div>

          {/* Fold count cards */}
          <div className="flex gap-4 flex-wrap">
            {FOLDS.map((fold, i) => (
              <motion.div
                key={fold.label}
                initial={{ opacity: 0, y: 30, rotateZ: -5 }}
                whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, type: "spring" }}
                whileHover={{ rotateZ: 3, scale: 1.05 }}
                className="w-36 h-44 rounded-2xl border flex flex-col items-center justify-center gap-3 cursor-default"
                style={{
                  background: `rgba(251,191,128,${0.04 + i * 0.02})`,
                  borderColor: `rgba(251,191,128,${0.12 + i * 0.04})`,
                  transformOrigin: "bottom center",
                }}
              >
                <span className="text-4xl">{fold.emoji}</span>
                <span
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--chapter-blush)" }}
                >
                  {fold.label}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(240,236,228,0.35)", fontFamily: "var(--font-body)" }}
                >
                  {fold.steps} folds
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
