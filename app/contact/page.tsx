export default function ContactPage() {
    return (
      <main className="min-h-screen bg-white px-8 py-16 text-black">
        <section className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Contact
          </p>
  
          <h1 className="mt-6 text-4xl font-bold tracking-tight">
            Let&apos;s connect.
          </h1>
  
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            I am open to software engineering internships, co-op opportunities,
            backend development roles, and AI-powered application projects.
          </p>
  
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a
              href="mailto:your-email@example.com"
              className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="mt-3 text-gray-600">your-email@example.com</p>
            </a>
  
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold">LinkedIn</h2>
              <p className="mt-3 text-gray-600">View my LinkedIn profile</p>
            </a>
  
            <a
              href="https://github.com/"
              target="_blank"
              className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold">GitHub</h2>
              <p className="mt-3 text-gray-600">View my GitHub projects</p>
            </a>
  
            <a
              href="/resume"
              className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold">Resume</h2>
              <p className="mt-3 text-gray-600">View or download my resume</p>
            </a>
          </div>
        </section>
      </main>
    );
  }
  