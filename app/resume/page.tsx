export default function ResumePage() {
    return (
      <main className="min-h-screen bg-white px-8 py-16 text-black">
        <section className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Resume
          </p>
  
          <h1 className="mt-6 text-4xl font-bold tracking-tight">
            Software engineering resume
          </h1>
  
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            My resume highlights backend development, API design, database work,
            AI-powered applications, and full-stack software projects.
          </p>
  
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Download Resume
            </a>
  
            <a
              href="/projects"
              className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-100"
            >
              View Projects
            </a>
          </div>
  
          <section className="mt-14 rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold">Core Skills</h2>
  
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">Languages</h3>
                <p className="mt-2 leading-7 text-gray-700">
                  Python, C++, JavaScript, TypeScript, SQL
                </p>
              </div>
  
              <div>
                <h3 className="font-semibold">Frameworks</h3>
                <p className="mt-2 leading-7 text-gray-700">
                  React, Next.js, FastAPI, Node.js
                </p>
              </div>
  
              <div>
                <h3 className="font-semibold">Databases</h3>
                <p className="mt-2 leading-7 text-gray-700">
                  MySQL, PostgreSQL
                </p>
              </div>
  
              <div>
                <h3 className="font-semibold">Tools</h3>
                <p className="mt-2 leading-7 text-gray-700">
                  Git, GitHub, VSCode, Vercel, Ubuntu, Tencent Cloud
                </p>
              </div>
            </div>
          </section>
  
          <section className="mt-8 rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold">Project Focus</h2>
  
            <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-gray-700">
              <li>Backend systems with clean API design and database workflows.</li>
              <li>AI-powered applications using structured knowledge and document processing.</li>
              <li>Full-stack web products built with React, Next.js, Python, and SQL.</li>
              <li>Cloud deployment using Vercel, Ubuntu servers, and custom domains.</li>
            </ul>
          </section>
        </section>
      </main>
    );
  }
  