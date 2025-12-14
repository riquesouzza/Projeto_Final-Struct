import "@/styles/globals.css";

import Navbar_apos_login from "@/app/_components/Navbar_apos_login";
import Footer_apos_login from "@/app/_components/Footer_apos_login";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "../_components/Navbar";

export default function PrivateLayout({children,}: {children: React.ReactNode;}) {

  return (
    <body>
      <Navbar />
      <main>{children}</main>
      <Footer_apos_login />
      <Toaster position="top-right" />
    </body>
  );
}