const highlights = [
  {
    title: "Backend Systems",
    description:
      "Designing API-driven platforms, database workflows, and maintainable server-side architecture.",
  },
  {
    title: "AI Applications",
    description:
      "Building AI-powered tools for document processing, education, automation, and knowledge retrieval.",
  },
  {
    title: "Full-Stack Products",
    description:
      "Shipping end-to-end web applications with Next.js, React, FastAPI, SQL, and cloud deployment.",
  },
];

const featuredProjects = [
  {
    title: "CMBb Asking",
    description: "AI-powered Q&A platform for educational content.",
    href: "/projects/cmbb-asking",
  },
  {
    title: "APA Formatter",
    description: "Document analysis and formatting automation tool.",
    href: "/projects/apa-formatter",
  },
  {
    title: "Inventory Platform",
    description: "Backend-focused inventory system with scalable API design.",
    href: "/projects/inventory-platform",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden px-8 py-16 text-black">
      <section className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-gray-600">
                Open to software engineering opportunities
              </span>
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
              Software Engineer Portfolio
            </p>

            <h1 className="mt-6 max-w-4xl text-6xl font-black tracking-tight text-gray-950 md:text-7xl">
              Building backend systems, AI tools, and polished web products.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
              Hi, I&apos;m Simon Wen. I focus on backend development, API
              design, databases, AI-powered applications, and full-stack project
              shipping.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-gray-800"
              >
                View Projects
              </a>

              <a
                href="/resume"
                className="rounded-full border border-gray-300 bg-white/80 px-7 py-4 text-sm font-bold shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-200 via-sky-100 to-white blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-gray-300/50 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-gray-950 p-5 text-white">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="mt-8 space-y-4 font-mono text-sm">
                  <p>
                    <span className="text-sky-300">const</span>{" "}
                    <span className="text-emerald-300">developer</span>{" "}
                    <span className="text-gray-400">=</span>{" "}
                    <span className="text-orange-300">"Simon Wen"</span>;
                  </p>
                  <p>
                    <span className="text-sky-300">focus</span>: backend +
                    AI + full-stack
                  </p>
                  <p>
                    <span className="text-sky-300">stack</span>: Next.js,
                    FastAPI, SQL
                  </p>
                  <p>
                    <span className="text-sky-300">status</span>: shipping
                    useful projects
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                    Current focus
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Turning practical ideas into deployable software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/70 bg-white/75 p-7 shadow-xl shadow-gray-200/70 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-black" />
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-24 rounded-[2rem] border border-gray-200 bg-white/75 p-8 shadow-xl shadow-gray-200/70 backdrop-blur">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                Featured Work
              </p>
              <h2 className="mt-4 text-3xl font-black">Selected projects</h2>
            </div>

            <a
              href="/projects"
              className="rounded-full border border-gray-300 px-5 py-3 text-sm font-bold transition hover:bg-black hover:text-white"
            >
              See all projects
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
                <p className="mt-6 text-sm font-bold">View case study →</p>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
