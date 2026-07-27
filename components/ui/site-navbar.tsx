export default function SiteNavbar() {
    return (
      <nav className="fixed inset-x-0 top-0 z-50 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white shadow-lg">
              SW
            </div>
  
            <div>
              <p className="font-semibold text-white">Simon Wen</p>
              <p className="text-sm text-white/65">Software Engineer</p>
            </div>
          </div>
  
          <div className="liquid-glass hidden items-center gap-2 rounded-full px-3 py-2 md:flex">
            <a href="#home" className="rounded-full px-4 py-2 text-sm text-white/75 transition hover:text-white">
              Home
            </a>
            <a href="#projects" className="rounded-full px-4 py-2 text-sm text-white/75 transition hover:text-white">
              Projects
            </a>
            <a href="#about" className="rounded-full px-4 py-2 text-sm text-white/75 transition hover:text-white">
              About
            </a>
            <a href="#resume" className="rounded-full px-4 py-2 text-sm text-white/75 transition hover:text-white">
              Resume
            </a>
            <a href="#contact" className="rounded-full px-4 py-2 text-sm text-white/75 transition hover:text-white">
              Contact
            </a>
          </div>
  
          <a
            href="#contact"
            className="liquid-glass rounded-full px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    );
  }
  