export default function AboutPage() {
    return (
      <main className="min-h-screen bg-white px-8 py-16 text-black">
        <section className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            About Me
          </p>
  
          <h1 className="mt-6 text-4xl font-bold tracking-tight">
            I am a software engineering-focused student building backend systems,
            APIs, and AI-powered applications.
          </h1>
  
          <div className="mt-10 space-y-6 text-lg leading-8 text-gray-700">
            <p>
              I am a University of Waterloo student interested in software
              engineering, backend development, API design, databases, and
              AI-powered tools.
            </p>
  
            <p>
              My projects focus on turning practical ideas into working software,
              including educational AI platforms, document automation tools,
              backend-driven workflow systems, and database-centered applications.
            </p>
  
            <p>
              I enjoy building systems that are clear, maintainable, and useful in
              real workflows. I am especially interested in backend architecture,
              SQL databases, FastAPI, React, Next.js, and cloud deployment.
            </p>
          </div>
  
          <section className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold">Technical Focus</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Backend API development</li>
                <li>SQL database design</li>
                <li>AI-powered applications</li>
                <li>Full-stack web development</li>
                <li>Cloud deployment and project shipping</li>
              </ul>
            </div>
  
            <div className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold">Tools I Use</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Python, C++, JavaScript, TypeScript</li>
                <li>FastAPI, React, Next.js</li>
                <li>MySQL, PostgreSQL</li>
                <li>Git, GitHub, VSCode</li>
                <li>Vercel, Tencent Cloud, Ubuntu</li>
              </ul>
            </div>
          </section>
        </section>
      </main>
    );
  }
  