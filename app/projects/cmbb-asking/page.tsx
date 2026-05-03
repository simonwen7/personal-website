const techStack = ["FastAPI", "Python", "React", "OpenAI API", "Ubuntu VPS"];

const features = [
  "AI-powered question answering based on structured course knowledge.",
  "Backend API service built with FastAPI and Python.",
  "Knowledge base workflow designed for future expansion.",
  "Deployable architecture for cloud servers and web frontends.",
];

const sections = [
  {
    title: "Problem",
    text: "Educational resources are often scattered across notes, documents, and websites. Users may know what they want to ask, but they do not always know where the relevant information is located.",
  },
  {
    title: "Solution",
    text: "CMBb Asking provides a focused web interface connected to a backend API. The backend processes user questions, retrieves relevant knowledge, and generates useful answers through an AI-powered workflow.",
  },
  {
    title: "My Role",
    text: "I designed the project structure, built the backend workflow, organized the knowledge base, and prepared the system for cloud deployment and future frontend integration.",
  },
];

export default function CmbbAskingPage() {
  return (
    <main className="overflow-hidden px-8 py-16 text-black">
      <article className="mx-auto max-w-6xl">
        <a
          href="/projects"
          className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm transition hover:-translate-y-0.5 hover:text-black hover:shadow-md"
        >
          ← Back to Projects
        </a>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-gray-200/70 backdrop-blur-xl md:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                AI Education Platform
              </p>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
                CMBb Asking
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                An AI-powered question-answering platform that helps users ask
                questions based on educational content and structured knowledge
                bases.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-gray-800"
                >
                  Live Demo Coming Soon
                </a>

                <a
                  href="#"
                  className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-bold transition hover:-translate-y-1 hover:shadow-lg"
                >
                  GitHub Coming Soon
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky-200 via-indigo-100 to-white blur-2xl" />

              <div className="relative rounded-[2rem] bg-gray-950 p-6 text-white shadow-2xl">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="mt-8 space-y-5 font-mono text-sm">
                  <p className="text-gray-400">POST /ask</p>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p>
                      <span className="text-sky-300">question</span>: &quot;How
                      does this concept work?&quot;
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-emerald-300">retrieving knowledge...</p>
                    <p className="mt-2 text-emerald-300">
                      generating answer...
                    </p>
                    <p className="mt-2 text-gray-300">response ready ✓</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      Backend
                    </p>
                    <p className="mt-2 font-semibold">FastAPI</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      AI Flow
                    </p>
                    <p className="mt-2 font-semibold">Q&A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-gray-200/70 backdrop-blur"
            >
              <h2 className="text-2xl font-black">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {section.text}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-gray-200/70 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              Key Features
            </p>

            <h2 className="mt-4 text-3xl font-black">
              What the system does
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-gray-200/70 backdrop-blur">
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="leading-7 text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/70 bg-gray-950 p-8 text-white shadow-2xl shadow-gray-300/70 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                Architecture
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Web interface → backend API → AI workflow.
              </h2>

              <p className="mt-5 leading-8 text-gray-300">
                The system is organized around a clean backend API. A frontend
                sends user questions to the server, the backend prepares the
                query, retrieves relevant knowledge, and returns an AI-generated
                response.
              </p>
            </div>

            <div className="space-y-3">
              {["Frontend", "FastAPI Backend", "Knowledge Base", "AI Response"].map(
                (step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 font-semibold"
                  >
                    {step}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
