"use client";

import { motion } from "framer-motion";

export default function HobbyPCBuilding() {
  return (
    <section
      id="pc-building"
      className="chapter-section flex-col justify-center"
      style={{ background: "#050A1A" }}
    >
      {/* RGB ambient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 55%)",
        }}
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 60%, rgba(168,85,247,0.1) 0%, transparent 55%)",
        }}
      />

      {/* Exploded PC parts — abstract SVG diagram */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] max-w-2xl opacity-10 pointer-events-none pr-12 hidden lg:block">
        <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Motherboard outline */}
          <rect x="100" y="150" width="200" height="200" rx="8" stroke="#3B82F6" strokeWidth="1"/>
          {/* CPU */}
          <rect x="145" y="185" width="60" height="60" rx="4" stroke="#A855F7" strokeWidth="1.5"/>
          <rect x="155" y="195" width="40" height="40" rx="2" fill="#A855F7" fillOpacity="0.2"/>
          {/* RAM sticks */}
          <rect x="220" y="180" width="20" height="80" rx="3" stroke="#22C55E" strokeWidth="1"/>
          <rect x="245" y="180" width="20" height="80" rx="3" stroke="#22C55E" strokeWidth="1"/>
          {/* GPU (elevated) */}
          <rect x="60" y="260" width="160" height="50" rx="6" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 2"/>
          {/* PSU */}
          <rect x="120" y="370" width="100" height="60" rx="6" stroke="#F59E0B" strokeWidth="1"/>
          {/* Fan circle */}
          <circle cx="310" cy="120" r="50" stroke="#3B82F6" strokeWidth="1" strokeDasharray="6 3"/>
          <circle cx="310" cy="120" r="30" stroke="#3B82F6" strokeWidth="0.5"/>
          {/* Connection lines */}
          <line x1="175" y1="245" x2="140" y2="285" stroke="#3B82F6" strokeWidth="0.5" opacity="0.5"/>
          <line x1="220" y1="230" x2="310" y2="170" stroke="#A855F7" strokeWidth="0.5" opacity="0.5"/>
          <line x1="175" y1="350" x2="175" y2="370" stroke="#F59E0B" strokeWidth="0.5" opacity="0.5"/>
          {/* RGB strip */}
          <path d="M100 350 Q150 340 200 350 Q250 360 300 350" stroke="#3B82F6" strokeWidth="2" opacity="0.6"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.5em] uppercase mb-8"
          style={{ color: "var(--chapter-electric)", fontFamily: "var(--font-body)" }}
        >
          Hobby — PC Building
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="chapter-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-10 max-w-3xl"
          style={{ color: "var(--text-primary)" }}
        >
          I don&apos;t just{" "}
          <span className="text-gradient-electric">use</span>
          {" "}computers.
          <br />
          I <span className="text-gradient-electric">build</span> them.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl flex flex-col items-center text-center"
        >
          <p className="body-copy text-lg mb-6" style={{ color: "rgba(240,236,228,0.65)" }}>
            There&apos;s something deeply satisfying about choosing every component — the
            CPU, the cooler, the RAM timings — and knowing exactly why you made each call.
            My first build took a weekend and three YouTube tutorials. Now I can thermal-paste 
            a CPU in my sleep.
          </p>
          <p className="body-copy text-lg" style={{ color: "rgba(240,236,228,0.4)" }}>
            The RGB is non-negotiable. Not because it makes the computer faster — it just 
            makes the desk look incredible at 2 AM when I&apos;m still debugging.
          </p>
        </motion.div>

        {/* RGB accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-12 h-[2px] w-64 origin-center rounded-full rgb-glow"
          style={{ background: "linear-gradient(90deg, #3B82F6, #A855F7, #22C55E)" }}
        />
      </div>
    </section>
  );
}
