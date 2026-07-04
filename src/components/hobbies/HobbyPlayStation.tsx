"use client";

import { motion } from "framer-motion";

const TROPHIES = [
  { icon: "🏆", label: "Platinum",   game: "God of War",          hours: "80h" },
  { icon: "🥇", label: "Gold",       game: "Spider-Man 2",        hours: "42h" },
  { icon: "🥈", label: "Silver",     game: "Horizon Forbidden West", hours: "65h" },
  { icon: "🎮", label: "Favourite",  game: "The Last of Us",      hours: "28h" },
];

export default function HobbyPlayStation() {
  return (
    <section
      id="playstation"
      className="chapter-section flex-col justify-center"
      style={{ background: "#00060F" }}
    >
      {/* PS blue ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(0,111,205,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.5em] uppercase mb-8"
          style={{ color: "var(--chapter-ps)", fontFamily: "var(--font-body)" }}
        >
          Hobby — PlayStation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="chapter-title text-4xl sm:text-5xl md:text-7xl mb-10 max-w-3xl"
          style={{ color: "var(--text-primary)" }}
        >
          The best{" "}
          <span className="text-gradient-ps">stories</span>
          {" "}I know came from a controller.
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
                PlayStation taught me about narrative design before I knew that was a 
                thing. Playing The Last of Us at 14 felt like reading the most 
                emotionally demanding book I&apos;d ever encountered — except I was 
                the one making the choices.
              </p>
              <p className="body-copy text-lg" style={{ color: "rgba(240,236,228,0.4)" }}>
                I&apos;m a completionist at heart. If there&apos;s a trophy for finding 
                every collectible in a 60-hour open world, I will find every 
                single one. This is not healthy. I regret nothing.
              </p>
            </motion.div>
          </div>

          {/* Trophy wall */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-sm w-full">
            {TROPHIES.map((trophy, i) => (
              <motion.div
                key={trophy.game}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12, type: "spring", stiffness: 150 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-5 border flex flex-col gap-2"
                style={{
                  background: "rgba(0,111,205,0.06)",
                  borderColor: "rgba(0,111,205,0.2)",
                }}
              >
                <span className="text-3xl">{trophy.icon}</span>
                <span
                  className="text-xs tracking-wider uppercase"
                  style={{ color: "var(--chapter-ps)", fontFamily: "var(--font-body)" }}
                >
                  {trophy.label}
                </span>
                <span
                  className="text-sm font-semibold leading-tight"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                >
                  {trophy.game}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(240,236,228,0.35)", fontFamily: "var(--font-body)" }}
                >
                  {trophy.hours}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
