"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuUserOpen, setMenuUserOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMenuUserOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "/#home", label: "HOME" },
    { href: "/#about", label: "SOBRE" },
    { href: "/#categories", label: "CATEGORIAS" },
  ];

  return (
    <header className="steam-header sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/ " className="text-4xl font-extrabold steam-accent text-shadow-md text-shadow-[#00BA2B]/30">
            SR
          </Link>

          <nav className="hidden md:flex md:items-center md:space-x-6" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="steam-link transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}

            {session?.user ? (
              <div className="relative">
                <button
                  onClick={() => setMenuUserOpen((s) => !s)}
                  className="flex items-center space-x-2 hover:opacity-80"
                >
                  <Image
                    src={session.user.image ?? "/default-avatar.png"}
                    alt="Foto do usuário"
                    width={32}
                    height={32}
                    className="rounded-full border"
                  />
                  <span className="font-medium">{session.user.name?.split(" ")[0]}</span>
                </button>

                {menuUserOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-900 shadow-lg border border-gray-700 rounded-md p-2">
                    <Link
                      href="/usuario"
                      className="block px-3 py-2 hover:bg-gray-800 rounded"
                      onClick={() => setMenuUserOpen(false)}
                    >
                      Meu perfil
                    </Link>

                    <button
                      className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded"
                      onClick={() => signOut()}
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="steam-link text-bold text-white transition-colors">
                ENTRAR
              </Link>
            )}
          </nav>

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

          {session?.user ? (
            <>
              <Link
                href="/usuario"
                className="block px-3 py-2 rounded-md hover:bg-gray-800/30"
                onClick={() => setOpen(false)}
              >
                Meu perfil
              </Link>

              <button
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-800/30"
                onClick={() => signOut()}
              >
                Sair
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-bold hover:bg-gray-800/30"
              onClick={() => setOpen(false)}
            >
              ENTRAR
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}