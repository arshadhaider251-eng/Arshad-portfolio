"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Menu, X, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const NAV_ITEMS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

const SKILLS = [
  { name: "HTML", proficiency: 95 },
  { name: "CSS", proficiency: 90 },
  { name: "JavaScript", proficiency: 88 },
  { name: "React", proficiency: 85 },
  { name: "Node.js", proficiency: 82 },
  { name: "Express.js", proficiency: 80 },
  { name: "MongoDB", proficiency: 78 },
  { name: "Responsive Design", proficiency: 92 },
  { name: "Python", proficiency: 75 },
  { name: "C++", proficiency: 70 },
  { name: "UI/UX", proficiency: 80 },
  { name: "REST APIs", proficiency: 85 },
];

const PROJECTS = [
  {
    title: "Plant Leaf Disease Diagnosis & Detection",
    desc: "An intelligent system for detecting plant leaf diseases using image recognition and frontend technologies.",
    tech: "HTML, CSS, JavaScript, Python",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1200&auto=format&fit=crop",
    link: "https://github.com/arshadhaider251-eng",
    demoLink: "#",
  },
  {
    title: "Modern Frontend UI Projects",
    desc: "Designed responsive and user-friendly interfaces with clean UI/UX principles.",
    tech: "HTML, CSS, JavaScript",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    link: "https://github.com/arshadhaider251-eng",
    demoLink: "#",
  },
  {
    title: "Responsive Web Interfaces",
    desc: "Built modern cross-device compatible layouts and frontend experiences.",
    tech: "Responsive Design, Bootstrap, Node.js",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    link: "https://github.com/arshadhaider251-eng",
    demoLink: "#",
  },
];

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "arshadhaider251@gmail.com",
    href: "mailto:arshadhaider251@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/arshadhaider251-eng",
    href: "https://github.com/arshadhaider251-eng",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/arshad-ali",
    href: "https://linkedin.com/in/arshad-ali",
  },
];

const STATS = [
  { number: "3+", label: "Projects Completed" },
  { number: "1+", label: "Years Experience" },
  { number: "12", label: "Skills Mastered" },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-indigo-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-400">Arshad Ali</div>

          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition ${
                  activeSection === item
                    ? "text-indigo-400 border-b-2 border-indigo-400"
                    : "text-gray-300 hover:text-indigo-400"
                } pb-2`}
                aria-label={`Navigate to ${item} section`}
                aria-current={activeSection === item ? "page" : undefined}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden p-2 hover:bg-indigo-500/10 rounded-lg transition"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-indigo-500/20 p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize py-2 text-gray-300 hover:text-indigo-400 transition"
                aria-current={activeSection === item ? "page" : undefined}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        <section
          id="home"
          className="relative px-6 md:px-20 py-20 pt-32 bg-gradient-to-br from-black via-slate-950 to-indigo-950"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#7c3aed,_transparent_40%)]" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-indigo-400 mb-4">
                Full Stack Developer
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                Arshad Ali
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-6">
                Software Engineering Student & Full Stack Developer
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                Passionate about building modern, responsive, and scalable web
                applications using both frontend and backend technologies.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold shadow-lg shadow-indigo-500/30 hover:scale-105 transform duration-300"
                  aria-label="View my projects"
                >
                  View Projects
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 rounded-2xl border border-indigo-500 hover:bg-indigo-500/10 transition font-semibold hover:scale-105 transform duration-300"
                  aria-label="Contact me"
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                  alt="Developer workspace and setup"
                  loading="lazy"
                  className="rounded-[2rem] border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 w-full h-[500px] object-cover"
                />

                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 hover:border-indigo-400/50 transition">
                    <h3 className="text-3xl font-bold mb-2">Arshad Ali</h3>
                    <p className="text-indigo-400 text-lg mb-3">
                      Full Stack Developer
                    </p>

                    <div className="flex flex-wrap gap-3 text-sm">
                      {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 hover:border-indigo-400/60 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 py-16 bg-slate-950 border-b border-indigo-500/20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-2xl border border-indigo-500/20 bg-white/5 hover:bg-white/10 transition"
                aria-hidden={false}
              >
                <div className="text-5xl font-bold text-indigo-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="px-6 md:px-20 py-20 bg-slate-950">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am a motivated and hardworking Software Engineering student with
              skills in both frontend and backend development. I enjoy building
              responsive user interfaces, developing scalable backend systems,
              improving user experiences, and continuously learning modern full
              stack technologies.
            </p>
          </div>
        </section>

        <section id="skills" className="px-6 md:px-20 py-20 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-indigo-500/20 bg-white/5 backdrop-blur-xl p-6 text-center hover:scale-105 hover:border-indigo-400/50 transition duration-300 shadow-lg group cursor-pointer"
                >
                  <p className="font-semibold text-lg mb-3">{skill.name}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-full rounded-full transition-all duration-300 group-hover:w-full"
                      style={{ width: `${skill.proficiency}%` }}
                      aria-valuenow={skill.proficiency}
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                    />
                  </div>
                  <p className="text-xs text-indigo-400 mt-2">
                    {skill.proficiency}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 md:px-20 py-20 bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <article
                  key={index}
                  className="rounded-3xl border border-indigo-500/20 bg-white/5 p-8 hover:-translate-y-2 hover:border-indigo-400/50 transition duration-300 shadow-xl group overflow-hidden"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-44 w-full object-cover rounded-2xl border border-indigo-500/20 group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-5 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="text-indigo-400 text-sm font-medium mb-6">
                    {project.tech}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 flex-1 px-4 py-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600/40 transition text-center justify-center text-sm"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 flex-1 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-center justify-center text-sm"
                      aria-label={`View ${project.title} demo`}
                      target={
                        project.demoLink && project.demoLink !== "#"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        project.demoLink && project.demoLink !== "#"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 md:px-20 py-20 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Experience
            </h2>

            <div className="rounded-3xl border border-indigo-500/20 bg-white/5 p-10 shadow-xl text-left hover:border-indigo-400/50 transition">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-indigo-400">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-gray-400 text-lg">Ezitech</p>
                </div>
                <span className="px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-sm text-indigo-300">
                  Present
                </span>
              </div>

              <ul className="space-y-3 text-gray-300 list-disc list-inside leading-relaxed">
                <li>Developing responsive and user-friendly web interfaces.</li>
                <li>
                  Building modern frontend and backend applications using HTML,
                  CSS, JavaScript, Node.js, and database technologies.
                </li>
                <li>Collaborating on real-world development projects.</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="px-6 md:px-20 py-20 bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Open to internships, collaborations, full stack development
            opportunities, and networking.
          </p>

          <div className="grid md:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {CONTACTS.map((contact, index) => {
              const Icon = contact.icon;
              const isMail = contact.href.startsWith("mailto:");
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className="rounded-2xl border border-indigo-500/30 bg-white/5 backdrop-blur-sm px-6 py-4 hover:bg-white/10 hover:border-indigo-400/60 transition group flex items-center justify-center gap-3"
                  aria-label={`Contact via ${contact.label}`}
                >
                  <Icon
                    size={20}
                    className="group-hover:text-indigo-400 transition"
                  />
                  <div className="text-left hidden sm:block">
                    <p className="text-xs text-gray-400">{contact.label}</p>
                    <p className="text-sm font-semibold">{contact.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-indigo-500/20">
            <p className="text-gray-400 text-sm">
              © 2026 Arshad Ali. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
