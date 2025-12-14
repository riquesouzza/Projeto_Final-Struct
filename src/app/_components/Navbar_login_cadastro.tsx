"use client";

import Link from "next/link";

export default function NavbarLoginCadastro() {
  return (
    <header className="steam-header sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-4xl font-extrabold steam-accent text-shadow-md text-shadow-[#00BA2B]/30"
          >
            SR
          </Link>
        </div>
      </div>
    </header>
  );
}