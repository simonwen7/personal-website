export default function CmbbAskingPage() {
    return (
      <main className="min-h-screen bg-white px-8 py-16 text-black">
        <article className="mx-auto max-w-4xl">
          <a href="/projects" className="text-sm font-medium text-gray-500 hover:text-black">
            ← Back to Projects
          </a>
  
          <p className="mt-10 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            AI Education Platform
          </p>
  
          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            CMBb Asking
          </h1>
  
          <p className="mt-6 text-lg leading-8 text-gray-600">
            An AI-powered question-answering platform that helps users ask
            questions based on educational content and structured knowledge bases.
          </p>
  
          <div className="mt-8 flex flex-wrap gap-2">
            {["FastAPI", "Python", "React", "OpenAI API", "Ubuntu VPS"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                >
                  {item}
                </span>
              )
            )}
          </div>
  
          <section className="mt-14">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 leading-7 text-gray-700">
              CMBb Asking is designed as an AI-assisted Q&A system. The goal is to
              let users ask questions about a specific knowledge base instead of
              searching through scattered notes or documents manually.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Problem</h2>
            <p className="mt-4 leading-7 text-gray-700">
              Many educational resources are difficult to search efficiently. Users
              may know what they want to ask, but they do not always know where the
              relevant information is located.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Solution</h2>
            <p className="mt-4 leading-7 text-gray-700">
              The system provides a web interface connected to a backend API. The
              backend processes user questions, retrieves relevant knowledge, and
              generates helpful answers through an AI-powered workflow.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-gray-700">
              <li>AI-powered question answering based on uploaded knowledge.</li>
              <li>Backend API service built with FastAPI and Python.</li>
              <li>Structured project layout for future feature expansion.</li>
              <li>Deployable on cloud servers such as Tencent Cloud or Vercel-connected frontends.</li>
            </ul>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Links</h2>
            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Live Demo Coming Soon
              </a>
  
              <a
                href="#"
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:bg-gray-100"
              >
                GitHub Coming Soon
              </a>
            </div>
          </section>
        </article>
      </main>
    );
  }
  