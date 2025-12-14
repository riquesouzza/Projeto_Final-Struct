import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { AuthProvider } from "@/components/ui/authProvider";
import { TRPCReactProvider } from "@/trpc/react";
import { Navbar } from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "SteamReviews",
  description: "Uma plataforma estilo Steam focada em reviews de jogos.",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body>
        <TRPCReactProvider>
          <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}