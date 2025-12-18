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
                  <li>• Tableau Dashboards</li>
                  <li>• Web Development (React)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="relative mx-auto w-[280px] sm:w-[320px]">
              <div className="rounded-[160px] border-2 border-zinc-300 dark:border-zinc-700 p-3">
                <div className="rounded-[140px] bg-gradient-to-b from-sky-100 to-sky-300 dark:from-sky-900 dark:to-sky-700 h-[420px] flex items-end justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Madhav portrait"
                    className="h-[340px] object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between px-5 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40"
                  >
                    <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      {s.label}
                    </div>
                    <div className="font-serif text-3xl">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 text-zinc-500">
                <a className="hover:text-zinc-900 dark:hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">in</a>
                <a className="hover:text-zinc-900 dark:hover:text-white" href="https://github.com/Mlamichhane1" target="_blank" rel="noreferrer">gh</a>
                <a className="hover:text-zinc-900 dark:hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">ig</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center font-serif text-4xl">Skills</h2>
        <p className="text-center text-zinc-500 dark:text-zinc-400 mt-2">My favorite skills</p>

        <div className="mt-12 grid lg:grid-cols-3 gap-10">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-6">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{group}</div>
                <div className="text-xs text-zinc-500">{items.length} skills</div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {items.map((s) => (
                  <div key={s.name} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
                    <div className="font-medium">{s.name}</div>
                    <div className="text-xs text-zinc-500 mt-1">{s.level}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Qualification */}
      <section id="qualification" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center font-serif text-4xl">Qualification</h2>
        <p className="text-center text-zinc-500 dark:text-zinc-400 mt-2">Experience & education</p>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <Card title="Education">
            <h3 className="font-semibold text-lg">Bachelor’s (in progress / recent)</h3>
            <div className="text-sm text-zinc-500 mt-1">Philadelphia, PA — Drexel University</div>
            <div className="text-sm text-zinc-500 mt-1">2025 —</div>
            <div className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Relevant: Data Analysis, AI/ML, Web Development, Database Systems, Algorithms.
            </div>
          </Card>

          <Card title="Work">
            <h3 className="font-semibold text-lg">Projects-focused Experience</h3>
            <div className="text-sm text-zinc-500 mt-1">Philadelphia, PA</div>
            <div className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Built deployable apps and dashboards, focusing on clean UX, robust analysis, and practical results.
            </div>
          </Card>
        </div>
      </section>

      <Divider />

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 pypy-16">
        <h2 className="text-center font-serif text-4xl">Projects</h2>
        <p className="text-center text-zinc-500 dark:text-zinc-400 mt-2">Most recent work</p>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center">
          <button
            onClick={prev}
            className="hidden lg:grid lg:col-span-1 h-12 w-12 rounded-full border border-zinc-200 dark:border-zinc-800 place-items-center hover:bg-zinc-100 dark:hover:bg-zinc-900"
            aria-label="Previous project"
          >
            ←
          </button>

          <div className="lg:col-span-10 grid md:grid-cols-2 gap-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-950">
              <img src={currentProject.image} alt={currentProject.title} className="w-full h-[240px] object-cover" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {currentProject.type}
                </div>
                <h3 className="mt-2 font-serif text-3xl">{currentProject.title}</h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {currentProject.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {currentProject.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4 text-sm">
                {currentProject.demo ? (
                  <a className="underline underline-offset-4" href={currentProject.demo} target="_blank" rel="noreferrer">
                    View Demo →
                  </a>
                ) : (
                  <span className="text-zinc-400">Demo not added</span>
                )}
                {currentProject.repo ? (
                  <a className="underline underline-offset-4" href={currentProject.repo} target="_blank" rel="noreferrer">
                    View Repo →
                  </a>
                ) : (
                  <span className="text-zinc-400">Repo not added</span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={next}
            className="hidden lg:grid lg:col-span-1 h-12 w-12 rounded-full border border-zinc-200 dark:border-zinc-800 place-items-center hover:bg-zinc-100 dark:hover:bg-zinc-900"
            aria-label="Next project"
          >
            →
          </button>

          <div className="lg:col-span-12 flex justify-center gap-2 mt-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setProjectIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === projectIndex ? "bg-zinc-900 dark:bg-white" : "bg-zinc-300 dark:bg-zinc-700"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <div className="lg:hidden flex justify-center gap-4">
            <button onClick={prev} className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800">← Prev</button>
            <button onClick={next} className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800">Next →</button>
          </div>
        </div>
      </section>

      <Divider />

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center font-serif text-4xl">Contact Me</h2>
        <p className="text-center text-zinc-500 dark:text-zinc-400 mt-2">Get in touch</p>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <Card title="Talk to me">
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-zinc-500">Email</div>
                <a className="underline underline-offset-4" href="mailto:madhav.lamichhane@drexel.edu">
                  madhav.lamichhane@drexel.edu
                </a>
              </div>
              <div>
                <div className="text-zinc-500">WhatsApp</div>
                <a className="underline underline-offset-4" href="tel:+14452376650">
                  +1 (445) 237-6650
                </a>
              </div>
            </div>
          </Card>

          <Card title="Get in Touch">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form demo — connect EmailJS / Formspree to receive messages.");
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-sm text-zinc-500">Name</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3 outline-none"
                  placeholder="Your name goes here"
                />
              </div>
              <div>
                <label className="text-sm text-zinc-500">Email</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3 outline-none"
                  placeholder="Your email goes here"
                />
              </div>
              <div>
                <label className="text-sm text-zinc-500">Message</label>
                <textarea
                  className="mt-2 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3 outline-none min-h-[140px]"
                  placeholder="Your message goes here"
                />
              </div>
              <button className="mt-2 px-5 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900">
                Submit ↗
              </button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <div className="font-serif text-3xl">Madhav</div>
          <div className="text-sm text-zinc-500 mt-2">Data Science • ML • Economics</div>
          <div className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Madhav Lamichhane. All rights reserved.</div>
        </div>
      </footer>

      <a
        href="#home"
        className="fixed bottom-6 right-6 h-10 w-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/70 backdrop-blur grid place-items-center hover:bg-zinc-100 dark:hover:bg-zinc-900"
        title="Back to top"
      >
        ↑
      </a>
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="border-t border-zinc-200 dark:border-zinc-800" />
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-6">
      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <span>▣</span>
        <span>{title}</span>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
