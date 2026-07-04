"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function HobbyPCB() {
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(svgRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const dur = prefersReducedMotion ? 0 : 2.5;

  return (
    <section
      id="pcb-explorer"
      className="chapter-section flex-col justify-center"
      style={{ background: "#030D06" }}
    >
      {/* Circuit green ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 50%, rgba(34,197,94,0.07) 0%, transparent 60%)",
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
            style={{ color: "var(--chapter-circuit)", fontFamily: "var(--font-body)" }}
          >
            Hobby — PCB Explorer
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="chapter-title text-4xl sm:text-5xl md:text-7xl mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            Circuits are{" "}
            <span className="text-gradient-circuit">code</span>
            {" "}in copper.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="body-copy text-lg mb-6" style={{ color: "rgba(240,236,228,0.65)" }}>
              I started exploring PCBs when I realised software without hardware 
              is only half the story. Tracing signal paths on a board is like reading 
              assembly — tedious until suddenly it all makes perfect sense.
            </p>
            <p className="body-copy text-lg" style={{ color: "rgba(240,236,228,0.4)" }}>
              I&apos;m not an electrical engineer, but I understand enough to read 
              schematics, test with a multimeter, and know exactly when a capacitor 
              is the wrong value.
            </p>
          </motion.div>
        </div>

        {/* SVG circuit board drawing in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md shrink-0"
        >
          <svg
            ref={svgRef}
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* Board outline */}
            <motion.rect
              x="20" y="20" width="260" height="260" rx="8"
              stroke="#22C55E" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ pathLength: { duration: dur, ease: "easeInOut" }, opacity: { duration: 0.3 } }}
            />
            {/* Horizontal traces */}
            <motion.path d="M60 80 H150 V120 H240" stroke="#22C55E" strokeWidth="1" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: dur, delay: 0.3, ease: "easeInOut" }}/>
            <motion.path d="M60 150 H110 V180 H200" stroke="#22C55E" strokeWidth="1" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: dur, delay: 0.6, ease: "easeInOut" }}/>
            <motion.path d="M60 220 H240" stroke="#22C55E" strokeWidth="1" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: dur, delay: 0.9, ease: "easeInOut" }}/>
            {/* Vertical traces */}
            <motion.path d="M100 60 V130" stroke="#86EFAC" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: dur, delay: 0.5, ease: "easeInOut" }}/>
            <motion.path d="M200 60 V240" stroke="#86EFAC" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: dur, delay: 0.8, ease: "easeInOut" }}/>
            {/* IC chip */}
            <motion.rect x="110" y="110" width="80" height="60" rx="4" stroke="#22C55E" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: dur, delay: 1.0, ease: "easeInOut" }}/>
            {/* IC pins */}
            {[0,1,2,3].map((i) => (
              <motion.line key={`l${i}`} x1={110} y1={125 + i * 12} x2={95} y2={125 + i * 12} stroke="#22C55E" strokeWidth="1" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}/>
            ))}
            {[0,1,2,3].map((i) => (
              <motion.line key={`r${i}`} x1={190} y1={125 + i * 12} x2={205} y2={125 + i * 12} stroke="#22C55E" strokeWidth="1" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}/>
            ))}
            {/* Via dots */}
            {[[60,80],[150,120],[240,80],[200,240],[100,130]].map(([cx,cy], i) => (
              <motion.circle key={i} cx={cx} cy={cy} r="4" stroke="#22C55E" strokeWidth="1" fill="#22C55E" fillOpacity="0.2" initial={{ scale: 0, opacity: 0 }} animate={isInView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }} style={{ transformOrigin: `${cx}px ${cy}px` }}/>
            ))}
            {/* Capacitors */}
            <motion.rect x="70" y="200" width="20" height="12" rx="2" stroke="#86EFAC" strokeWidth="1" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 1.8 }}/>
            <motion.rect x="220" y="160" width="20" height="12" rx="2" stroke="#86EFAC" strokeWidth="1" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 1.9 }}/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
