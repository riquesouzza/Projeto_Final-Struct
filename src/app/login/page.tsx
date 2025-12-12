"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export default function Entrar() {
  const session = useSession();
  return (
    <main id="Entrar" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-6">
        {session.data ? (
          <>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Logado como:</h2>
              <p className="text-lg font-medium text-gray-700 mt-2">
                {session.data?.user?.name || "Sem sessão"}
              </p>
            </div>
            <button 
              onClick={() => signOut()} 
              className="px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-700">Sem sessão ativa</p>
            <button 
              onClick={() => signIn("google")} 
              className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Login com Google
            </button>
          </>
        )}
      </div>
    </main>
  );
}