export default function Navbar() {
    return (
      <header className="border-b border-gray-100 bg-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-8 py-5">
          <a href="/" className="text-lg font-bold tracking-tight">
            Simon Wen
          </a>
  
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="transition hover:text-black">
              Home
            </a>
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
        </nav>
      </header>
    );
  }
  