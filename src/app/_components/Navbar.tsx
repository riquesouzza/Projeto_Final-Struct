// A Navbar foi feita por Luca
// Ela contém links de navegação para as seções da homepage e é responsiva para desktop e mobile

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  // fecha o menu quando a janela é redimensionada para desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // fecha o menu ao pressionar Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // apontar para âncoras na homepage (id="home", "reviews", ...)
  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "Sobre" },
    { href: "/#categories", label: "Categorias" },
    { href: "/#reviews", label: "Reviews" },
  ];

  return (
    <header className="steam-header sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold steam-accent">
              SteamReviews
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:space-x-6" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="steam-link transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Abrir menu"
              className="inline-flex items-center justify-center p-2 rounded-md steam-text hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#66c0f4]"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (animated) */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-1" aria-label="Mobile Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium steam-link hover:bg-gray-800/30 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}