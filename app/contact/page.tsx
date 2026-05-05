const contactLinks = [
    {
      title: "Email",
      value: "simonwensw7@gmail.com",
      description: "Best for internship, co-op, and project opportunities.",
      href: "mailto:simonwensw7@gmail.com",
    },
    {
      title: "LinkedIn",
      value: "Connect with me",
      description: "View my professional profile and experience.",
      href: "https://www.linkedin.com/in/xiemin-wen-40a1742a7",
    },
    {
      title: "GitHub",
      value: "View my code",
      description: "Explore my software engineering projects and repositories.",
      href: "https://github.com/simonwen7",
    },
    {
      title: "Resume",
      value: "Download resume",
      description: "See my technical skills, experience, and selected projects.",
      href: "/resume.pdf",
    },
  ];
  
  export default function ContactPage() {
    return (
      <main className="overflow-hidden px-8 py-16 text-black">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-gray-200/70 backdrop-blur-xl md:p-12">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-200/70 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-200/70 blur-3xl" />
  
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                  Contact
                </p>
  
                <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
                  Let&apos;s build something useful.
                </h1>
  
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  I am open to software engineering internships, co-op
                  opportunities, backend development roles, and AI-powered
                  application projects.
                </p>
  
                <div className="mt-10 rounded-[1.5rem] border border-gray-200 bg-white/80 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                    Current focus
                  </p>
                  <p className="mt-3 text-lg font-semibold text-gray-950">
                    Backend systems · API design · Databases · AI tools · Cloud deployment
                  </p>
                </div>
              </div>
            </section>
  
            <section className="rounded-[2rem] border border-white/70 bg-gray-950 p-8 text-white shadow-2xl shadow-gray-300/70 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                Quick Message
              </p>
  
              <h2 className="mt-4 text-3xl font-black">
                The fastest way to reach me is email.
              </h2>
  
              <p className="mt-5 leading-8 text-gray-300">
                Replace the placeholder email with your real email before
                deploying this site publicly.
              </p>
  
              <a
                href="mailto:simonwensw7@gmail.com"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-gray-100"
              >
                Send Email
              </a>
            </section>
          </div>
  
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="group rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-gray-200/70 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                      {link.title}
                    </p>
                    <h2 className="mt-4 text-2xl font-black text-gray-950">
                      {link.value}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {link.description}
                    </p>
                  </div>
  
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </section>
        </section>
      </main>
    );
  }
