export default function Footer() {
    return (
      <footer className="mt-auto border-t border-white/60 bg-white/50 px-8 py-10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold text-gray-950">Simon Wen</p>
            <p className="mt-2 text-sm text-gray-500">
              Backend systems, AI tools, and full-stack products.
            </p>
          </div>
  
          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
            <a href="/projects" className="transition hover:text-black">
              Projects
            </a>
            <a href="/about" className="transition hover:text-black">
              About
            </a>
            <a href="/resume" className="transition hover:text-black">
              Resume
            </a>
            <a href="/contact" className="transition hover:text-black">
              Contact
            </a>
          </div>
  
          <p className="text-sm text-gray-400">
            © 2026 Simon Wen. Built with Next.js.
          </p>
        </div>
      </footer>
    );
  }
  