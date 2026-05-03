const focusAreas = [
    {
      title: "Backend Development",
      description:
        "Designing API routes, service logic, database workflows, and maintainable server-side systems.",
    },
    {
      title: "AI-Powered Applications",
      description:
        "Building tools that use AI for question answering, document processing, and workflow automation.",
    },
    {
      title: "Full-Stack Shipping",
      description:
        "Turning practical ideas into usable products with frontend, backend, deployment, and iteration.",
    },
  ];
  
  const tools = [
    "Python",
    "C++",
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Vercel",
    "Tencent Cloud",
  ];
  
  export default function AboutPage() {
    return (
      <main className="overflow-hidden px-8 py-16 text-black">
        <section className="mx-auto max-w-6xl">
          <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-gray-200/70 backdrop-blur-xl md:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-200/70 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-200/70 blur-3xl" />
  
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                  About Me
                </p>
  
                <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
                  I build practical software with backend, AI, and full-stack thinking.
                </h1>
  
                <div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
                  <p>
                    I am a University of Waterloo student interested in software
                    engineering, backend development, API design, databases, and
                    AI-powered tools.
                  </p>
  
                  <p>
                    My projects focus on turning practical ideas into working
                    software, including educational AI platforms, document
                    automation tools, backend workflow systems, and database-driven
                    applications.
                  </p>
                </div>
              </div>
  
              <div className="rounded-[2rem] bg-gray-950 p-6 text-white shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Profile
                </p>
  
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400">Focus</p>
                    <p className="mt-1 font-semibold">Backend · API · AI Tools</p>
                  </div>
  
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400">Current Stack</p>
                    <p className="mt-1 font-semibold">Next.js · FastAPI · SQL</p>
                  </div>
  
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400">Goal</p>
                    <p className="mt-1 font-semibold">
                      Ship useful, maintainable products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="mt-10 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-gray-200/70 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-black" />
                <h2 className="text-xl font-black text-gray-950">{area.title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {area.description}
                </p>
              </div>
            ))}
          </section>
  
          <section className="mt-10 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-xl shadow-gray-200/70 backdrop-blur md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Technical Toolbox
                </p>
  
                <h2 className="mt-4 text-3xl font-black text-gray-950">
                  Tools I use to build and ship projects.
                </h2>
  
                <p className="mt-5 leading-8 text-gray-600">
                  I like working with tools that help me move from idea to
                  working product quickly while keeping the codebase clear and
                  maintainable.
                </p>
              </div>
  
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
    );
  }
  