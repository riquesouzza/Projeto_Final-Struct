"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarAposLogin() {
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);


  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "/home_adm", label: "HOME" },
    { href: "/home_adm/adicionar", label: "ADICIONAR" },
    { href: "/home_adm/excluir", label: "EXCLUIR" },
  ];

  return (
    <header className="steam-header sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/home_adm"
            className="text-4xl font-extrabold steam-accent text-shadow-md text-shadow-[#00BA2B]/30"
          >
            SR
          </Link>

    
          <div className="hidden md:flex items-center ml-auto space-x-10">
            <nav className="flex items-center space-x-6" aria-label="Primary">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="steam-link transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

      
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden text-white p-2 rounded hover:bg-gray-700/30 transition"
          >
            {!open ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

    
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-white text-base hover:bg-gray-700/30"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}