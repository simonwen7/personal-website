const skillGroups = [
    {
      title: "Languages",
      items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frameworks",
      items: ["React", "Next.js", "FastAPI", "Node.js"],
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Cloud",
      items: ["Git", "GitHub", "VSCode", "Vercel", "Ubuntu", "Tencent Cloud"],
    },
  ];
  
  const resumeHighlights = [
    "Backend systems with clean API design and database workflows.",
    "AI-powered applications using structured knowledge and document processing.",
    "Full-stack web products built with React, Next.js, Python, and SQL.",
    "Cloud deployment using Vercel, Ubuntu servers, and custom domains.",
  ];
  
  export default function ResumePage() {
    return (
      <main className="overflow-hidden px-8 py-16 text-black">
        <section className="mx-auto max-w-6xl">
          <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-gray-200/70 backdrop-blur-xl md:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-200/70 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-200/70 blur-3xl" />
  
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                  Resume
                </p>
  
                <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
                  Software engineering resume focused on backend, AI, and full-stack projects.
                </h1>
  
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  My resume highlights backend development, API design, database
                  work, AI-powered applications, and full-stack software projects.
                </p>
  
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/resume.pdf"
                    className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-gray-800"
                  >
                    Download Resume
                  </a>
  
                  <a
                    href="/projects"
                    className="rounded-full border border-gray-300 bg-white/80 px-7 py-4 text-sm font-bold shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    View Projects
                  </a>
                </div>
              </div>
  
              <div className="rounded-[2rem] bg-gray-950 p-6 text-white shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Resume Snapshot
                </p>
  
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400">Primary Focus</p>
                    <p className="mt-1 font-semibold">Software Engineering</p>
                  </div>
  
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400">Strengths</p>
                    <p className="mt-1 font-semibold">
                      Backend · API · SQL · AI Tools
                    </p>
                  </div>
  
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400">Portfolio Type</p>
                    <p className="mt-1 font-semibold">Project-based showcase</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-gray-200/70 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <h2 className="text-2xl font-black text-gray-950">
                  {group.title}
                </h2>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
  
          <section className="mt-10 rounded-[2rem] border border-white/70 bg-gray-950 p-8 text-white shadow-2xl shadow-gray-300/70 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Highlights
                </p>
  
                <h2 className="mt-4 text-3xl font-black">
                  What my resume is built around.
                </h2>
              </div>
  
              <ul className="space-y-4">
                {resumeHighlights.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                      ✓
                    </span>
                    <span className="leading-7 text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </main>
    );
  }
  