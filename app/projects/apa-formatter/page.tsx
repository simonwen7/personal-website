export default function ApaFormatterPage() {
    return (
      <main className="overflow-hidden px-8 py-16 text-black">
        <article className="mx-auto max-w-6xl">
          <a
            href="/projects"
            className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm transition hover:-translate-y-0.5 hover:text-black hover:shadow-md"
          >
            ← Back to Projects
          </a>
  
          <section className="mt-8 grid items-center gap-10 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-gray-200/70 backdrop-blur-xl md:grid-cols-2 md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                Document Automation
              </p>
  
              <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
                APA Doc Formatter
              </h1>
  
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                A full-stack web application that analyzes and formats Word
                documents into APA style using a FastAPI backend and Vite
                frontend.
              </p>
  
              <div className="mt-8 flex flex-wrap gap-2">
                {["Python", "FastAPI", "React", "Vite", "python-docx", "APA 7"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
  
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-bold text-white shadow-lg shadow-gray-300 transition hover:-translate-y-0.5 hover:bg-gray-800"
                >
                  Live Demo Coming Soon
                </a>
  
                <a
                  href="https://github.com/simonwen7/apa-doc-formatter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-900 hover:shadow-md"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
  
            <div className="rounded-[2rem] bg-gray-950 p-6 text-white shadow-2xl shadow-gray-300">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
  
              <div className="mt-8 text-sm text-gray-400">POST /documents/analyze</div>
  
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-sm">
                <span className="text-sky-300">file:</span>{" "}
                <span className="text-gray-100">"essay.docx"</span>
              </div>
  
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-sm leading-7">
                <p className="text-emerald-300">analyzing document...</p>
                <p className="text-emerald-300">detecting APA issues...</p>
                <p className="text-gray-200">formatted file ready ✓</p>
              </div>
  
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                    Backend
                  </p>
                  <p className="mt-3 text-lg font-black">FastAPI</p>
                </div>
  
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                    Output
                  </p>
                  <p className="mt-3 text-lg font-black">Formatted DOCX</p>
                </div>
              </div>
            </div>
          </section>
  
          <section className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Problem",
                text: "Formatting academic documents manually is time-consuming and easy to get wrong, especially when checking margins, spacing, headings, citations, and references.",
              },
              {
                title: "Solution",
                text: "The tool analyzes uploaded Word documents, detects APA-style formatting issues, and generates a corrected version that users can download.",
              },
              {
                title: "My Role",
                text: "I built the backend routes, document parsing workflow, validation logic, automatic formatting process, and connected the workflow to a frontend interface.",
              },
            ].map((section) => (
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
  
          <section className="mt-10 grid gap-6 md:grid-cols-[1fr_1.5fr]">
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-xl shadow-gray-200/70 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                Key Features
              </p>
  
              <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-950">
                What the system does
              </h2>
            </div>
  
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-xl shadow-gray-200/70 backdrop-blur">
              <ul className="space-y-5 text-gray-700">
                {[
                  "Uploads .docx files for document analysis.",
                  "Detects APA-style formatting issues in Word documents.",
                  "Applies formatting fixes using python-docx.",
                  "Generates a corrected downloadable Word document.",
                ].map((feature) => (
                  <li key={feature} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="leading-7">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
  
          <section className="mt-10 grid gap-10 rounded-[2rem] bg-gray-950 p-8 text-white shadow-2xl shadow-gray-300 md:grid-cols-2 md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-400">
                Architecture
              </p>
  
              <h2 className="mt-6 text-4xl font-black tracking-tight">
                Frontend → backend API → document formatter.
              </h2>
  
              <p className="mt-6 text-base leading-8 text-gray-300">
                The system is organized around a clean full-stack workflow. The
                frontend sends a Word document to the backend API, the backend
                parses and validates the document, and the formatter produces a
                corrected file for download.
              </p>
            </div>
  
            <div className="space-y-4">
              {[
                "Vite Frontend",
                "FastAPI Backend",
                "Document Parser",
                "APA Validator",
                "DOCX Formatter",
                "Downloadable Output",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
    );
  }
  