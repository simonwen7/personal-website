export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
          <a href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-sm font-bold text-white shadow-lg shadow-black/20 transition group-hover:-rotate-6">
              SW
            </div>
            <div>
              <p className="text-sm font-bold leading-none tracking-tight">
                Simon Wen
              </p>
              <p className="mt-1 text-xs text-gray-500">Software Engineer</p>
            </div>
          </a>
  
          <div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white/80 p-1 shadow-sm md:flex">
            {[
              ["Home", "/"],
              ["Projects", "/projects"],
              ["About", "/about"],
              ["Resume", "/resume"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
              >
                {label}
              </a>
            ))}
          </div>
  
          <a
            href="/contact"
            className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gray-800 md:inline-block"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </header>
    );
  }
  