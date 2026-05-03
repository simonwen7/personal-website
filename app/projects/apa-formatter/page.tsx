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
  
          <section className="mt-8 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-gray-200/70 backdrop-blur-xl md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
              Document Automation
            </p>
  
            <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
              APA Formatter
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              A document analysis and formatting tool that helps detect and fix
              APA-style issues in Word documents.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-2">
              {["FastAPI", "Python", "python-docx", "DOCX", "APA 7"].map(
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
          </section>
  
          <section className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Problem",
                text: "Formatting academic documents manually is time-consuming and easy to get wrong, especially when checking margins, spacing, headings, and references.",
              },
              {
                title: "Solution",
                text: "The tool analyzes uploaded Word documents, detects style issues, and prepares a corrected version based on APA-style formatting rules.",
              },
              {
                title: "My Role",
                text: "I designed the backend routes, document parsing workflow, validation logic, and automatic formatting process using Python and FastAPI.",
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
        </article>
      </main>
    );
  }
  