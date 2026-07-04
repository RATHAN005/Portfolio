"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Kata-Sync",
    category: "Browser Extension",
    description:
      "A productivity-focused browser extension designed to help developers synchronize coding practice, notes, and progress across platforms in a structured, distraction-free way.",
    tech: ["JavaScript", "HTML", "CSS", "Chrome API"],
    year: "2025",
  },
  {
    id: "02",
    title: "DevSecOps Portal",
    category: "Web Application",
    description:
      "Full-stack Employee Management Portal with secure authentication, analytics, and role-based access control, deployed via a GitOps CI/CD pipeline.",
    tech: ["React", "Node.js", "Docker","Github Actions", "Kubernetes", "ArgoCD","Trivy", "Prometheus", "Grafana"],
    year: "2026",
  },
  {
    id: "03",
    title: "Staffbase System",
    category: "Enterprise System",
    description:
      "Secure full-stack employee record management with JWT authentication, REST APIs, and a relational database backend.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT"],
    year: "2025",
  },
  {
    id: "04",
    title: "ESP32 AI Chatbot",
    category: "IoT & Hardware",
    description:
      "AI-powered chatbot running on an ESP32-C3 Mini — Wi-Fi communication and embedded web technologies for real-time conversational interaction.",
    tech: ["ESP32", "C/C++", "IoT", "REST API"],
    year: "2023",
  },
];

function IntroPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="w-screen h-screen flex flex-col justify-center px-8 sm:px-16 lg:px-32 shrink-0"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-[11px] tracking-[0.55em] uppercase mb-8"
        style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
      >
        Selected Work
      </motion.p>

      <div className="overflow-hidden mb-1">
        <motion.h2
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="chapter-title leading-[0.88]"
          style={{ fontSize: "clamp(3.5rem, 14vw, 14rem)", color: "var(--text-primary)" }}
        >
          Selected
        </motion.h2>
      </div>
      <div className="overflow-hidden mb-10">
        <motion.h2
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="chapter-title leading-[0.88]"
          style={{ fontSize: "clamp(3.5rem, 14vw, 14rem)", color: "var(--accent)" }}
        >
          Work.
        </motion.h2>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-px w-32 origin-left mb-8"
        style={{ background: "var(--border)" }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-[11px] tracking-[0.3em] uppercase"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
      >
        Scroll to explore →
      </motion.p>
    </div>
  );
}

function ProjectPanel({ project }: { project: Project }) {
  return (
    <div className="w-[88vw] sm:w-[72vw] md:w-[58vw] lg:w-[50vw] h-screen flex items-center shrink-0 py-8">
      <div
        className="w-full p-8 sm:p-10 border flex flex-col justify-start overflow-y-auto"
        style={{
          borderColor: "var(--border)",
          maxHeight: "84vh",
        }}
      >
        {/* Top meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span
            className="text-[10px] tracking-[0.4em] uppercase"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            {project.id}
          </span>
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            {project.year}
          </span>
          <span
            className="text-[10px] tracking-[0.3em] uppercase px-3 py-1 border"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title — smaller clamp so long tech stacks don't push it out */}
        <h3
          className="chapter-title mb-5"
          style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)", color: "var(--text-primary)", lineHeight: 0.92 }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="body-copy text-sm sm:text-base leading-relaxed mb-7 max-w-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Tech stack — wraps cleanly */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 border"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <span
          className="text-[11px] tracking-[0.2em] uppercase cursor-pointer transition-opacity duration-200 hover:opacity-60"
          style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
        >
          Github for SourceCode →
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-full gap-8 md:gap-12">
          <IntroPanel />
          {projects.map((project) => (
            <ProjectPanel key={project.id} project={project} />
          ))}
          <div className="w-[8vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
