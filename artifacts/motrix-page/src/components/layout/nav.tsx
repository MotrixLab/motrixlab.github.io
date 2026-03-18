import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "News", href: "#news" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
        <div className="px-4 sm:px-6 py-3 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-2 group shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}motrix-logo.png`}
              alt="Motrix Logo"
              className="h-7 w-auto group-hover:opacity-80 transition-opacity"
            />
            <span className="font-bold text-lg tracking-tight text-white hidden sm:block">
              Motrix
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/MotrixLab"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/15 text-white hover:bg-white/25 font-semibold text-sm transition-all duration-200 border border-white/20 whitespace-nowrap"
            >
              GitHub Org
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-1.5 text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-3 px-4 sm:px-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/MotrixLab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-4 py-2 mt-1 rounded-full bg-white/15 text-white hover:bg-white/25 font-semibold text-sm border border-white/20 transition-colors"
            >
              GitHub Org
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
