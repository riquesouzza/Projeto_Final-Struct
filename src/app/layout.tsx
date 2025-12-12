import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Navbar } from "./_components/Navbar";
import Footer from "./_components/Footer";
import { AuthProvider } from "@/components/authProvider";
import NavbarLoginCadastro from "@/components/Navbar_login_cadastro.tsx";

export const metadata: Metadata = {
  title: "SteamReviews",
  description: "Uma plataforma estilo Steam focada em reviews de jogos.",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <AuthProvider>
          <Navbar />
          {children}
          </AuthProvider>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
