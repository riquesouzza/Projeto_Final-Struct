"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Entrar() {
  const { data: session, status } = useSession();

  if (session) {
    redirect("/inicio");
  }

  return (
    <section className="min-h-screen bg-[var(--steam-mid)] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[var(--steam-dark)] p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Entrar/Registrar
        </h1>
        
        <button 
          onClick={() => signIn("google", { callbackUrl: "/usuario" })}
          className="w-full py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition font-medium"
        >
          Entrar/Registrar com Google
        </button>
      </div>
    </section>
  );
}