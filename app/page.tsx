export default function Home() {
  return (
    <main className="min-h-screen bg-white px-8 py-16 text-black">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
          Software Engineer Portfolio
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-tight">
          Hi, I&apos;m Simon Wen.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          I build backend systems, API-driven applications, and AI-powered tools.
          This portfolio showcases my software engineering projects, technical
          skills, and selected work.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/projects"
            className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            View Projects
          </a>

          <a
            href="/resume"
            className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-100"
          >
            Resume
          </a>
        </div>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">Backend</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              API design, database workflows, server-side logic, and scalable
              application structure.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">AI Tools</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              AI-powered applications, document analysis tools, and intelligent
              question-answering systems.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">Full Stack</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              End-to-end project development using React, Next.js, FastAPI,
              Python, and SQL databases.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
