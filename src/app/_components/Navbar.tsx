"use client"; // Necessário porque esse componente usa estado e hooks do React no front-end

import Link from "next/link"; // Link do Next.js para navegação eficiente
import { Button } from "@/components/ui/button"; // Componente de botão do shadcn/ui
import { useEffect, useState } from "react"; // Hooks do React para estado e efeitos

export function Navbar() {
  const [open, setOpen] = useState(false); 
  // "open" controla se o menu mobile está aberto ou fechado

  // Fecha o menu quando a tela é redimensionada para modo desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
      // Quando a largura for >= 768px, ele força o menu a fechar
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Fecha o menu quando o usuário aperta a tecla ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Links principais que aparecem na Navbar
  const links = [
    { href: "/#home", label: "HOME" },
    { href: "/#about", label: "SOBRE" },
    { href: "/#categories", label: "CATEGORIAS" },
    { href: "/#", label: <span className = "font-bold"> ENTRAR </span> },
  ];

  return (
    <header className="steam-header sticky top-0 z-50 shadow-sm">
      {/* Header fixo no topo com sombra e z-index alto */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container centralizado e responsivo */}

        <div className="flex items-center justify-between h-16">
          {/* Área da esquerda: logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-4xl font-extrabold steam-accent text-shadow-md text-shadow-[#00BA2B]/30"
            >
              SR {/* Logo do site */}
            </Link>
          </div>

          {/* NAVBAR DESKTOP (só aparece quando md >= 768px) */}
          <nav className="hidden md:flex md:items-center md:space-x-6" aria-label="Primary">
            {/* Mapeia todos os links */}
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="steam-link transition-colors duration-200">
                {l.label}
              </Link>
            ))}

            {/* Botões "Entrar" e "Cadastrar" (somente no desktop) */}
            <div className="flex items-center gap-3">
              <Button variant="destructive">CADASTRAR</Button>
            </div>
          </nav>

          {/* BOTÃO HAMBÚRGUER (só aparece no mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen((s) => !s)} // Alterna entre aberto e fechado
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Abrir menu"
              className="inline-flex items-center justify-center p-2 rounded-md steam-text hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#66c0f4]"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
                // Ícone rotaciona ao abrir o menu
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/* Ícone muda dependendo do estado */}
                {open ? (
                  // Ícone de X
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Ícone de hambúrguer
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE (abre/fecha com animação no height e opacity) */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-1" aria-label="Mobile Primary">
          {/* Links mobile */}
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)} // Fecha menu ao clicar em qualquer link
              className="block px-3 py-2 rounded-md text-base font-medium steam-link hover:bg-gray-800/30 transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* Botões mobile */}
          <div className="flex flex-col gap-3 pt-2">
            <Button  variant="destructive" className="w-full">
              CADASTRAR
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}