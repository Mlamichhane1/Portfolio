import { useMemo, useState } from "react";

const SectionLine = () => (
  <div className="mx-auto my-20 h-px w-[92%] max-w-6xl bg-neutral-300/90" />
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-neutral-600 hover:text-neutral-900 transition"
  >
    {children}
  </a>
);

export default function App() {
  const base = import.meta.env.BASE_URL;

  // ====== EDIT THESE ONCE ======
  const profile = useMemo(
    () => ({
      name: "Madhav",
      lastName: "Lamichhane",
      titleLine1: "Data + Economics",
      titleLine2: "Based in Philadelphia",
      location: "Philadelphia, PA",
      email: "ml3862@drexel.edu",
      phone: "208-997-7541",
      resumePath: base + "resume.pdf",
      socials: {
        github: "https://github.com/Mlamichhane1",
        linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN/",
      },
      bio:
        "I’m a Drexel student focused on building data-driven tools and dashboards. I enjoy Python, SQL, Tableau, and creating clean web apps that make analysis easy.",
      stats: [
        { label: "Years of Experience", value: "2+" },
        { label: "Completed Projects", value: "10+" },
        { label: "Tools Built", value: "5+" },
      ],
    }),
    [base]
  );

  const skillGroups = useMemo(
    () => [
      {
        title: "Programming Languages",
        items: [
          { name: "Python", level: "Intermediate" },
          { name: "R", level: "Intermediate" },
          { name: "SQL", level: "Intermediate" },
          { name: "JavaScript", level: "Intermediate" },
        ],
      },
      {
        title: "Data Tools",
        items: [
          { name: "Tableau", level: "Intermediate" },
          { name: "Excel", level: "Intermediate" },
          { name: "Power BI", level: "Basic" },
        ],
      },
      {
        title: "Libraries",
        items: [
          { name: "Pandas", level: "Intermediate" },
          { name: "NumPy", level: "Intermediate" },
          { name: "Matplotlib", level: "Intermediate" },
        ],
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        type: "Decision Support App",
        title: "Greenlight: Policy Choice Optimizer",
        period: "Dec 2025 – Present",
        image: base + "projects/greenlight.png",
        description:
          "Streamlit decision-support app that ranks policy/project alternatives using discounted PV and expected net benefits under uncertainty. Includes PV calculator, depletable-resource demo, and CSV export.",
        demo: "https://greenlight-policy-optimizer-93ziew5luesdd89shjk2pm.streamlit.app",
        repo: "https://github.com/Mlamichhane1/greenlight-policy-optimizer",
        tags: ["Python", "Streamlit", "Pandas", "NumPy"],
      },
      {
        type: "Tableau Dashboard",
        title: "U.S. Inflation Trend Analyzer (2010–2024)",
        period: "Sep 2025 – Oct 2025",
        image: base + "projects/inflation.png",
        description:
          "Analyzes U.S. inflation trends from 2010 to 2024 using CPI data. Visualizes long-term patterns and highlights peaks/averages across years.",
        demo: "",
        repo: "",
        tags: ["Tableau", "Pandas", "NumPy"],
      },
      {
        type: "Python + SQLite App",
        title: "Expense Tracker",
        period: "Oct 2025 – Nov 2025",
        image: base + "projects/expense.png",
        description:
          "Python + SQLite project to record transactions, categorize spending, and generate visual insights with charts.",
        demo: "",
        repo: "",
        tags: ["Python", "SQLite", "Matplotlib", "Pandas"],
      },
    ],
    [base]
  );

  // ====== SLIDER STATE ======
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);
  const left = projects[index];
  const right = projects[(index + 1) % projects.length];

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const message = form.get("message")?.toString() || "";
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-neutral-900 font-sans">
      {/* NAV */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
          <div className="font-serif text-lg">{profile.name}</div>
          <nav className="hidden md:flex items-center gap-7">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href={profile.resumePath}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </nav>
          <a
            href={profile.resumePath}
            className="md:hidden text-sm text-neutral-700"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <main className="pt-20">
        {/* HERO */}
        <section id="home" className="mx-auto max-w-6xl px-5 py-10">
          <h1 className="text-center font-serif text-5xl md:text-7xl leading-[1.05]">
            Hi, I’m {profile.name}
            <br />
            <span className="opacity-95">{profile.titleLine1}</span>
            <br />
            <span className="opacity-95">{profile.titleLine2}</span>
          </h1>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* LEFT */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <div className="text-xs tracking-widest text-neutral-500">BIOGRAPHY</div>
                <p className="mt-3 text-sm leading-6 text-neutral-700">{profile.bio}</p>
              </div>

              <div>
                <div className="text-xs tracking-widest text-neutral-500">CONTACT</div>
                <div className="mt-3 text-sm text-neutral-700 space-y-1">
                  <div>{profile.location}</div>
                  <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  <div>{profile.phone}</div>
                </div>
              </div>

              <div>
                <div className="text-xs tracking-widest text-neutral-500">EXPERTISE</div>
                <ul className="mt-3 text-sm text-neutral-700 space-y-1 list-disc pl-4">
                  <li>Data Analysis</li>
                  <li>Dashboards & Visualization</li>
                  <li>Python Automation</li>
                  <li>SQL + Data Cleaning</li>
                </ul>
              </div>
            </div>

            {/* CENTER ARCH */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-[320px] md:w-[420px]">
                <div className="absolute -inset-4 rounded-t-full rounded-b-[2.5rem] border border-neutral-400" />
                <div className="relative rounded-t-full rounded-b-[2.5rem] overflow-hidden border border-neutral-300 bg-gradient-to-b from-[#e8f0ff] to-[#8fc5ff]">
                  <div className="h-[420px] md:h-[520px] flex items-end justify-center">
                    <img
                      src={base + "profile.png"}
                      alt="profile"
                      className="h-[85%] object-contain"
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 gap-6">
              {profile.stats.map((s) => (
                <div key={s.label} className="text-center lg:text-right">
                  <div className="text-xs tracking-widest text-neutral-500">{s.label}</div>
                  <div className="font-serif text-4xl mt-2">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-5 text-sm text-neutral-700">
            <a className="underline underline-offset-4" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="underline underline-offset-4" href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <SectionLine />

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
            <h2 className="font-serif text-5xl">Skills</h2>
            <p className="mt-2 text-sm text-neutral-600">My favorite skills</p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-800">
                  <span className="inline-block h-2 w-2 rounded-full bg-neutral-700" />
                  {group.title}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  {group.items.map((sk) => (
                    <div
                      key={sk.name}
                      className="rounded-3xl bg-white/70 border border-neutral-200 p-5 text-center"
                    >
                      <div className="font-serif text-lg">{sk.name}</div>
                      <div className="text-xs text-neutral-600 mt-1">{sk.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <SectionLine />

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
            <h2 className="font-serif text-5xl">Projects</h2>
            <p className="mt-2 text-sm text-neutral-600">Most recent work</p>
          </div>

          <div className="mt-14 flex items-center justify-between gap-6">
            <button onClick={prev} className="h-12 w-12 rounded-full border border-neutral-300 bg-white/70 hover:bg-white transition text-xl">
              ‹
            </button>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
              {[left, right].map((p) => (
                <article key={p.title}>
                  <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white/60">
                    <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="text-xs tracking-widest text-neutral-500">{p.type}</div>
                      <div className="mt-2 font-serif text-2xl">{p.title}</div>
                      <div className="mt-1 text-sm text-neutral-600">{p.period}</div>

                      <p className="mt-4 text-sm leading-6 text-neutral-700">{p.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full border border-neutral-300 bg-white/70">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex gap-6 text-sm">
                        {p.demo && <a className="underline underline-offset-4" href={p.demo} target="_blank" rel="noreferrer">View Demo →</a>}
                        {p.repo && <a className="underline underline-offset-4" href={p.repo} target="_blank" rel="noreferrer">View Repo →</a>}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button onClick={next} className="h-12 w-12 rounded-full border border-neutral-300 bg-white/70 hover:bg-white transition text-xl">
              ›
            </button>
          </div>
        </section>

        <SectionLine />

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
            <h2 className="font-serif text-5xl">Contact Me</h2>
            <p className="mt-2 text-sm text-neutral-600">Get in touch</p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <div className="text-sm font-medium text-neutral-800">Talk to me</div>
                <div className="mt-4 text-sm text-neutral-700 space-y-2">
                  <div>
                    <div className="text-neutral-500 text-xs">Email</div>
                    <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-neutral-500 text-xs">Phone</div>
                    <div>{profile.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="text-xs text-neutral-600">Name</label>
                <input name="name" required placeholder="Your name goes here"
                  className="mt-2 w-full rounded-full border border-neutral-400 bg-transparent px-5 py-4 outline-none focus:border-neutral-700" />
              </div>
              <div>
                <label className="text-xs text-neutral-600">Email</label>
                <input name="email" type="email" required placeholder="Your email goes here"
                  className="mt-2 w-full rounded-full border border-neutral-400 bg-transparent px-5 py-4 outline-none focus:border-neutral-700" />
              </div>
              <div>
                <label className="text-xs text-neutral-600">Message</label>
                <textarea name="message" required rows={6} placeholder="Your message goes here"
                  className="mt-2 w-full rounded-[2rem] border border-neutral-400 bg-transparent px-5 py-4 outline-none focus:border-neutral-700" />
              </div>
              <button className="font-serif text-2xl hover:opacity-80 transition">
                Submit ↗
              </button>
            </form>
          </div>
        </section>

        <SectionLine />

        <footer className="pb-16">
          <div className="text-center">
            <div className="font-serif text-4xl">{profile.name}</div>
            <div className="mt-2 text-sm text-neutral-600">Data Science • Economics</div>
            <div className="mt-10 text-xs text-neutral-500">
              © {new Date().getFullYear()} {profile.name} {profile.lastName}. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
