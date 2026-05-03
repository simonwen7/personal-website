const projects = [
    {
      title: "CMBb Asking",
      category: "AI Education Platform",
      description:
        "An AI-powered question-answering platform for educational content and structured knowledge bases.",
      tech: ["FastAPI", "Python", "React", "OpenAI API"],
      href: "/projects/cmbb-asking",
      status: "Case Study Ready",
    },
    {
      title: "APA Formatter",
      category: "Document Automation",
      description:
        "A document analysis and formatting tool that helps detect and fix APA-style issues in Word documents.",
      tech: ["FastAPI", "Python", "python-docx", "DOCX"],
      href: "/projects/apa-formatter",
      status: "Coming Soon",
    },
    {
      title: "Restaurant Order Routing System",
      category: "Backend Workflow System",
      description:
        "A backend-driven system for coordinating orders across multiple kitchen stations with real-time status tracking.",
      tech: ["Backend", "API", "Database", "Workflow"],
      href: "/projects/restaurant-system",
      status: "Coming Soon",
    },
    {
      title: "Distributed Inventory Management Platform",
      category: "Distributed Backend System",
      description:
        "A backend-focused inventory system with API design, database workflows, caching, and scalable service structure.",
      tech: ["Backend", "SQL", "API", "Distributed Systems"],
      href: "/projects/inventory-platform",
      status: "Coming Soon",
    },
  ];
  
  export default function ProjectsPage() {
    return (
      <main className="overflow-hidden px-8 py-16 text-black">
        <section className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-2xl shadow-gray-200/70 backdrop-blur-xl md:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl" />
  
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                Selected Work
              </p>
  
              <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
                Projects that turn practical ideas into working software.
              </h1>
  
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                A collection of backend systems, AI-powered tools, database-driven
                platforms, and full-stack applications built with a focus on clean
                structure, usability, and deployment.
              </p>
            </div>
          </div>
  
          <section className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-gray-200/70 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="absolute right-6 top-6 text-6xl font-black text-gray-100 transition group-hover:text-gray-200">
                  0{index + 1}
                </div>
  
                <div className="relative">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                      {project.category}
                    </span>
  
                    <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500">
                      {project.status}
                    </span>
                  </div>
  
                  <h2 className="max-w-sm text-2xl font-black tracking-tight text-gray-950">
                    {project.title}
                  </h2>
  
                  <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>
  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
  
                  <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="text-sm font-bold text-gray-950">
                      View Case Study
                    </span>
  
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </section>
        </section>
      </main>
    );
  }
  