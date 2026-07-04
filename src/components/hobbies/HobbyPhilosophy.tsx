"use client";

import { motion } from "framer-motion";

export default function HobbyPhilosophy() {
  return (
    <section
      id="philosophy"
      className="chapter-section flex-col items-center justify-center text-center"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Very subtle radial glow — deliberately restrained after the skater chapter energy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(240,236,228,0.03) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col items-center">
        {/* Chapter label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.6em] uppercase mb-12"
          style={{ color: "rgba(240,236,228,0.3)", fontFamily: "var(--font-body)" }}
        >
          Philosophy — The through-line
        </motion.p>

        {/* The big statement */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="chapter-title text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] mb-16"
          style={{
            color: "var(--text-primary)",
            lineHeight: 0.9,
          }}
        >
          Eager to{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gradient"
          >
            learn
          </motion.span>
          {" &"}<br />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            master
          </motion.span>
          {" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.0 }}
            style={{ color: "rgba(240,236,228,0.3)" }}
          >
            everything.
          </motion.span>
        </motion.h2>

        {/* Quiet closing lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-xl flex flex-col items-center text-center mb-16"
        >
          <p className="body-copy text-xl leading-loose" style={{ color: "rgba(240,236,228,0.4)" }}>
            Not a tagline. Not a resume bullet.
          </p>
          <p className="body-copy text-xl leading-loose" style={{ color: "rgba(240,236,228,0.4)" }}>
            It&apos;s just how I work. You&apos;ve seen it in 14 chapters of evidence.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--accent-warm), var(--accent-amber))",
              color: "#fff",
              fontFamily: "var(--font-body)",
            }}
          >
            Let&apos;s work together
          </a>
          <a
            href="#hero-sequence"
            className="px-8 py-4 rounded-full border text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "rgba(240,236,228,0.15)",
              color: "rgba(240,236,228,0.5)",
              fontFamily: "var(--font-body)",
            }}
          >
            Back to top
          </a>
        </motion.div>

        {/* Decorative divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="mt-24 w-px h-24 origin-top"
          style={{ background: "linear-gradient(to bottom, rgba(240,236,228,0.2), transparent)" }}
        />
      </div>
    </section>
  );
}
