import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "@/app/_components/Footer";
import Navbar from "../_components/Navbar";

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
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  );
}