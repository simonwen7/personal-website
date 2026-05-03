const projects = [
    {
      title: "CMBb Asking",
      description:
        "An AI-powered question-answering platform for educational content and structured knowledge bases.",
      tech: ["FastAPI", "Python", "React", "OpenAI API"],
      href: "/projects/cmbb-asking",
    },
    {
      title: "APA Formatter",
      description:
        "A document analysis and formatting tool that helps detect and fix APA-style issues in Word documents.",
      tech: ["FastAPI", "Python", "python-docx", "DOCX"],
      href: "/projects/apa-formatter",
    },
    {
      title: "Restaurant Order Routing System",
      description:
        "A backend-driven system for coordinating orders across multiple kitchen stations with real-time status tracking.",
      tech: ["Backend", "API", "Database", "Workflow"],
      href: "/projects/restaurant-system",
    },
    {
      title: "Distributed Inventory Management Platform",
      description:
        "A backend-focused inventory system with API design, database workflows, caching, and scalable service structure.",
      tech: ["Backend", "SQL", "API", "Distributed Systems"],
      href: "/projects/inventory-platform",
    },
  ];
  
  export default function ProjectsPage() {
    return (
      <main className="min-h-screen bg-white px-8 py-16 text-black">
        <section className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Selected Work
          </p>
  
          <h1 className="mt-6 text-4xl font-bold tracking-tight">Projects</h1>
  
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            A collection of software engineering projects focused on backend
            systems, API design, databases, AI-powered applications, and full-stack
            product development.
          </p>
  
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold">{project.title}</h2>
  
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
  
                <p className="mt-6 text-sm font-semibold">View Case Study →</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    );
  }
  