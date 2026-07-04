"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  { year: "2023", title: "Started B.E. Computer Science",     body: "Joined Karpagam College of Engineering. First week — already building side projects in the dorm." },
  { year: "2023", title: "First Full-Stack Project",          body: "React + Node + MySQL. Deployed with a GitHub Action at 3 AM. It worked on the first try." },
  { year: "2024", title: "DevOps Deep Dive",                  body: "Containerised everything. Docker, Kubernetes, ArgoCD — deployed my first GitOps cluster." },
  { year: "2024", title: "IoT & Hardware Exploration",        body: "Built with ESP32. Sensor data pushed to dashboards — software skills crossing into hardware." },
  { year: "2024", title: "Certifications — SQL, REST, React", body: "Formalised what I already knew. Networking Essentials taught me more about HTTP than two years of tutorials." },
  { year: "2025", title: "CGPA 8.5 — Consistent Output",     body: "Academics and side projects, simultaneously. Proof building real things doesn't cost fundamentals." },
  { year: "Now →", title: "Seeking Collaborations",          body: "Internships, open-source, and people who want to build something genuinely useful." },
];

export default function ChapterTimeline() {
  return (
    <section
      id="timeline"
      className="chapter-section flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg-surface)", minHeight: "100svh" }}
    >
      <div className="relative z-10 w-full px-4 sm:px-10 lg:px-16 py-20 flex flex-col justify-center">

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.55em] uppercase mb-8"
          style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
        >
          Chapter 04 — Timeline
        </motion.p>

        {/* Giant heading */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="chapter-title leading-[0.88]"
            style={{ fontSize: "clamp(3rem, 11vw, 11rem)", color: "var(--text-primary)" }}
          >
            The journey
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="chapter-title leading-[0.88]"
            style={{ fontSize: "clamp(3rem, 11vw, 11rem)", color: "var(--accent)" }}
          >
            so far.
          </motion.h2>
        </div>

        {/* Timeline table */}
        <div className="w-full border-t" style={{ borderColor: "var(--border)" }}>
          {MILESTONES.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-16 py-6 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Year */}
              <span
                className="text-[10px] tracking-[0.4em] uppercase shrink-0 sm:w-20 pt-0.5"
                style={{
                  color: i === MILESTONES.length - 1 ? "var(--accent)" : "var(--text-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {m.year}
              </span>

              {/* Dot — hidden on mobile */}
              <div className="hidden sm:flex items-start pt-2">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: i === MILESTONES.length - 1 ? "var(--accent)" : "var(--border)",
                  }}
                />
              </div>

              {/* Title + body */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-12 flex-1">
                <h3
                  className="text-base sm:text-lg font-semibold shrink-0 sm:w-64"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                >
                  {m.title}
                </h3>
                <p
                  className="body-copy text-sm flex-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {m.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
