"use client";

import { motion } from "framer-motion";

export default function HobbySkater() {
  return (
    <section
      id="skater"
      className="chapter-section flex-col justify-center"
      style={{ background: "#0A0A0A" }}
    >
      {/* Acid yellow glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(212,255,0,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.5em] uppercase mb-8"
          style={{ color: "var(--chapter-acid)", fontFamily: "var(--font-body)" }}
        >
          Hobby — Skating
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="chapter-title text-7xl sm:text-8xl md:text-[9rem] mb-10 max-w-4xl flex flex-col items-center text-center"
          style={{
            color: "var(--text-primary)",
            WebkitTextStroke: "1px rgba(212,255,0,0.3)",
          }}
        >
          <span style={{ color: "#D4FF00" }}>Fail.</span>
          {" "}Land.{" "}
          <span style={{ color: "#D4FF00" }}>Repeat.</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 max-w-xl flex flex-col items-center text-center"
          >
            <p className="body-copy text-lg mb-6" style={{ color: "rgba(240,236,228,0.65)" }}>
              Skating taught me that failure is just information. You bail a trick,
              you analyse what went wrong — foot placement, timing, weight — and
              you try again. It&apos;s debugging, but for your body.
            </p>
            <p className="body-copy text-lg" style={{ color: "rgba(240,236,228,0.4)" }}>
              The skateboard doesn&apos;t care about your resume. It&apos;s the most
              honest feedback loop I&apos;ve ever found. Land it or you don&apos;t.
              No participation trophies on asphalt.
            </p>
          </motion.div>

          {/* Stats block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {[
              { label: "Favourite spot",  value: "Empty carparks at 6am" },
              { label: "Best trick",      value: "Consistent kickflip" },
              { label: "Worst bail",      value: "Noseslide > pavement" },
              { label: "Deck of choice",  value: "Whatever fits the budget" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 py-3 border-b"
                style={{ borderColor: "rgba(212,255,0,0.1)" }}
              >
                <span
                  className="text-xs tracking-wider uppercase"
                  style={{ color: "rgba(212,255,0,0.45)", fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </span>
                <span
                  className="text-base"
                  style={{ color: "rgba(240,236,228,0.7)", fontFamily: "var(--font-body)" }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
