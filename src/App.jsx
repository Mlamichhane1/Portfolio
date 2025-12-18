import React, { useEffect, useMemo, useState } from "react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Qualification", href: "#qualification" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { label: "Years of experience", value: "1+" },
  { label: "Completed projects", value: "10+" },
  { label: "Companies worked", value: "1+" },
];

const skills = {
  "Frontend Developer": [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
  ],
  "Programming Languages": [
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "C", level: "Intermediate" },
    { name: "C++", level: "Basic" },
  ],
  "Backend & Tools": [
    { name: "Streamlit", level: "Intermediate" },
    { name: "Pandas", level: "Intermediate" },
    { name: "NumPy", level: "Intermediate" },
    { name: "Tableau", level: "Intermediate" },
    { name: "SQLite", level: "Intermediate" },
  ],
};

const projects = [
  {
    title: "Greenlight: Policy Choice Optimizer",
    type: "Decision-support Web App",
    desc:
      "Streamlit app that ranks policy/project alternatives using discounted present value and expected net benefits under uncertainty. Includes PV calculator, scenario input, 2-period demo, and CSV export.",
    demo: "https://greenlight-policy-optimizer-93ziew5luesdd89shjk2pm.streamlit.app",
    repo: "https://github.com/Mlamichhane1/greenlight-policy-optimizer",
    image: "/projects/greenlight.png",
    tags: ["Python", "Streamlit", "Pandas", "NumPy"],
  },
  {
    title: "Expense Tracker",
    type: "Python + SQLite",
    desc:
      "Tracks daily transactions, categories spending, and visualizes trends with charts. Simple, clean workflow for personal finance analysis.",
    demo: "",
    repo: "",
    image: "/projects/expense.png",
    tags: ["Python", "SQLite", "Matplotlib", "Pandas"],
  },
  {
    title: "U.S. Inflation Trend Analyzer (2010–2024)",
    type: "Tableau Dashboard",
    desc:
      "Analyzes CPI-based inflation trends (2010–2024). Highlights peak/average rates and year-by-year cost-of-living changes.",
    demo: "",
    repo: "",
    image: "/projects/inflation.png",
    tags: ["Tableau", "Pandas", "NumPy"],
  },
];

function useTheme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme };
}

export default function App() {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("Home");
  const [projectIndex, setProjectIndex] = useState(0);

  const currentProject = useMemo(() => projects[projectIndex], [projectIndex]);

  useEffect(() => {
    const handler = () => {
      const sections = nav.map((n) => document.querySelector(n.href));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (!s) continue;
        if (y >= s.offsetTop) {
          setActive(nav[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const next = () => setProjectIndex((i) => (i + 1) % projects.length);
  const prev = () => setProjectIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur border-b border-zinc-200 dark:bg-zinc-950/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <img src="/profile.jpg" alt="Madhav" className="h-full w-full object-cover" />
            </div>
            <div className="font-semibold tracking-tight">Madhav</div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={`hover:text-zinc-900 dark:hover:text-white ${
                  active === n.label ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 grid place-items-center"
              title="Toggle theme"
            >
              {theme === "dark" ? "☾" : "☀"}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="/resume.pdf"
              className="text-sm px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 grid place-items-center"
              title="Toggle theme"
            >
              {theme === "dark" ? "☾" : "☀"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-5 pt-16 pb-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              Hi, I’m Madhav <br />
              Data Science & Software <br />
              Builder in Philadelphia
            </h1>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Biography
                </div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  I build data-driven apps and dashboards with a focus on clean UI, strong analysis, and
                  deployable projects. I enjoy Python, Streamlit, Tableau, and web development.
                </p>

                <div className="mt-6 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Contact
                </div>
                <div className="mt-3 text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                  <div>Philadelphia, PA</div>
                  <div className="underline underline-offset-4">
                    <a href="mailto:pujan.pokharel@drexel.edu">madhav.lamichhane@drexel.edu</a>
                  </div>
                  <div className="underline underline-offset-4">
                    <a href="tel:+14452376650">+1 (445) 237-6650</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Expertise
                </div>
                <ul className="mt-3 text-zinc-700 dark:text-zinc-200 space-y-2">
                  <li>• Data Analysis & Visualization</li>
                  <li>• Streamlit App Development</li>
                  <li>• Python + Pandas + NumPy</li>
                  <li>• Tableau Dashboard
