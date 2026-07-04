"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Shared editorial hobby section template
   ───────────────────────────────────────────────────────────── */
interface HobbyProps {
  id: string;
  label: string;
  line1: string;
  line2: string;
  accentLine: 1 | 2;
  body1: string;
  body2?: string;
  bg?: string;
  extra?: React.ReactNode;
}

function HobbySection({ id, label, line1, line2, accentLine, body1, body2, bg = "var(--bg-primary)", extra }: HobbyProps) {
  return (
    <section
      id={id}
      className="chapter-section flex-col justify-center overflow-hidden"
      style={{ background: bg, minHeight: "100svh" }}
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
          {label}
        </motion.p>

        {/* Line 1 */}
        <div className="overflow-hidden mb-1">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="chapter-title leading-[0.88]"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 9rem)",
              color: accentLine === 1 ? "var(--accent)" : "var(--text-primary)",
            }}
          >
            {line1}
          </motion.h2>
        </div>

        {/* Line 2 */}
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="chapter-title leading-[0.88]"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 9rem)",
              color: accentLine === 2 ? "var(--accent)" : "var(--text-primary)",
            }}
          >
            {line2}
          </motion.h2>
        </div>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="h-px w-full max-w-xs mb-10 origin-left"
          style={{ background: "var(--border)" }}
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="body-copy text-lg sm:text-xl max-w-2xl mb-4"
          style={{ color: "var(--text-secondary)" }}
        >
          {body1}
        </motion.p>

        {body2 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="body-copy text-base max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            {body2}
          </motion.p>
        )}

        {extra && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10"
          >
            {extra}
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Individual hobby exports
   ───────────────────────────────────────────────────────────── */

export function HobbyPCBuilding() {
  return (
    <HobbySection
      id="pc-building"
      label="Hobby — PC Building"
      line1="I don't just use"
      line2="computers. I build them."
      accentLine={2}
      bg="var(--bg-surface)"
      body1="There's something deeply satisfying about choosing every component — the CPU, cooler, RAM timings — and knowing exactly why you made each call. My first build took a weekend and three tutorials."
      body2="The RGB is non-negotiable. Not because it makes the computer faster — it makes the desk look incredible at 2 AM when I'm still debugging."
    />
  );
}

export function HobbyTroubleshooting() {
  // Terminal-style extra
  const lines = [
    "$ npm run dev",
    "> Error: cannot read property 'map' of undefined",
    "$ git blame — commit a3f2c1",
    "$ git stash && git pull origin main",
    "> ✓ Server running on localhost:3000",
  ];
  return (
    <HobbySection
      id="troubleshooting"
      label="Hobby — Troubleshooting"
      line1="If it's broken,"
      line2="I will fix it."
      accentLine={2}
      bg="var(--bg-primary)"
      body1="Debugging is just structured problem-solving with stakes. I've spent hours tracing stack traces, reading kernel logs, and reproducing edge cases that 'should never happen.'"
      body2="The moment a fix clicks — that's better than shipping new features."
      extra={
        <div
          className="border px-6 py-5 max-w-lg font-mono text-xs sm:text-sm leading-loose"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          {lines.map((l, i) => (
            <p key={i} style={{ color: l.startsWith(">") ? "var(--accent)" : "var(--text-muted)" }}>
              {l}
            </p>
          ))}
        </div>
      }
    />
  );
}

export function HobbyPCB() {
  return (
    <HobbySection
      id="pcb-explorer"
      label="Hobby — PCB Explorer"
      line1="Circuits are"
      line2="code in copper."
      accentLine={2}
      bg="var(--bg-surface)"
      body1="I started exploring PCBs when I realised software without hardware is only half the story. Tracing signal paths on a board is like reading assembly — tedious until suddenly it all makes sense."
      body2="I understand enough to read schematics, test with a multimeter, and know when a capacitor is the wrong value."
    />
  );
}

export function HobbyPlayStation() {
  return (
    <HobbySection
      id="playstation"
      label="Hobby — PlayStation"
      line1="Games taught me"
      line2="systems thinking."
      accentLine={2}
      bg="var(--bg-primary)"
      body1="Every game is a system with rules, feedback loops, and emergent complexity. Playing seriously taught me to look for patterns, test hypotheses, and iterate — long before I wrote code."
      body2="Also: the DualSense controller has the best haptics ever made. That's a fact."
    />
  );
}

export function HobbyOrigami() {
  return (
    <HobbySection
      id="origami"
      label="Hobby — Origami"
      line1="Precision"
      line2="is a practice."
      accentLine={2}
      bg="var(--bg-surface)"
      body1="Origami is pure precision — one wrong fold and the whole structure is compromised. It's taught me patience, spatial reasoning, and that constraints aren't limitations; they're design."
      body2="A finished crane from 25 careful folds beats a rushed one every time. Same goes for code."
    />
  );
}

export function Hobby3DArtist() {
  return (
    <HobbySection
      id="3d-artist"
      label="Hobby — 3D Art"
      line1="Every mesh starts"
      line2="with one vertex."
      accentLine={2}
      bg="var(--bg-primary)"
      body1="I got into 3D art through Blender — originally to make assets for a game idea that never launched. The idea died; the obsession with topology and lighting didn't."
      body2="There's a parallel between good 3D modeling and good software architecture: clean underlying structure makes everything built on top look better."
    />
  );
}

export function HobbyArtist2D() {
  return (
    <HobbySection
      id="2d-illustration"
      label="Hobby — 2D Illustration"
      line1="Drawing is"
      line2="thinking made visible."
      accentLine={2}
      bg="var(--bg-surface)"
      body1="I sketch interfaces, UI concepts, and character ideas. It's the fastest way to prototype — faster than Figma, faster than code. A pen and paper remain my best design tool."
    />
  );
}

export function HobbySkater() {
  return (
    <HobbySection
      id="skating"
      label="Hobby — Skating"
      line1="Fall. Get up."
      line2="Try again."
      accentLine={2}
      bg="var(--bg-primary)"
      body1="Skating is just iteration with consequences. You try a trick, you fall, you figure out what went wrong, you try again. That loop is identical to debugging — just faster and more painful."
      body2="The discipline of skating translated directly into how I approach hard technical problems."
    />
  );
}

export function HobbyPhilosophy() {
  return (
    <section
      id="philosophy"
      className="chapter-section flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg-surface)", minHeight: "100svh" }}
    >
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-20 flex flex-col justify-center">

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.55em] uppercase mb-12"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
        >
          Philosophy — The through-line
        </motion.p>

        {/* Giant statement */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="chapter-title leading-[0.88]"
            style={{ fontSize: "clamp(3rem, 12vw, 12rem)", color: "var(--text-primary)" }}
          >
            Eager to learn
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="chapter-title leading-[0.88]"
            style={{ fontSize: "clamp(3rem, 12vw, 12rem)", color: "var(--text-primary)" }}
          >
            &amp; master
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="chapter-title leading-[0.88]"
            style={{ fontSize: "clamp(3rem, 12vw, 12rem)", color: "var(--accent)" }}
          >
            everything.
          </motion.h2>
        </div>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px w-full max-w-xs mb-10 origin-left"
          style={{ background: "var(--border)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="body-copy text-lg max-w-xl mb-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Not a tagline. Not a resume bullet.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="body-copy text-base max-w-xl mb-14"
          style={{ color: "var(--text-muted)" }}
        >
          It&apos;s just how I work. You&apos;ve seen it across every chapter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-[11px] tracking-[0.35em] uppercase font-medium transition-opacity duration-200 hover:opacity-80"
            style={{ background: "var(--accent)", color: "#fff", fontFamily: "var(--font-body)" }}
          >
            Let&apos;s work together
          </a>
          <a
            href="#hero-sequence"
            className="inline-flex items-center justify-center px-8 py-3 border text-[11px] tracking-[0.35em] uppercase transition-opacity duration-200 hover:opacity-60"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            Back to top
          </a>
        </motion.div>
      </div>
    </section>
  );
}
