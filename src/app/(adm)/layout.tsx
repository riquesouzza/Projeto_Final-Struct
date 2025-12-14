import "@/styles/globals.css";
import Navbar_adm from "@/app/_components/Navbar_adm";
import Footer_apos_login from "@/app/_components/Footer_apos_login";
import { Toaster } from "sonner";

export default function AdmLayout({ children }: { children: React.ReactNode }) {

  return (
    <body>
      <Navbar_adm />
      {children}
      <Toaster position="top-right" />
      <Footer_apos_login />
    </body>
  );
}