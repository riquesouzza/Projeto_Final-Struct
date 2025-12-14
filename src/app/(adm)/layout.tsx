import "@/styles/globals.css";
import Navbar_adm from "@/app/_components/Navbar_adm";
import Footer_apos_login from "@/app/_components/Footer_apos_login";
import { TRPCReactProvider } from "@/trpc/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default function AdmLayout({ children }: { children: React.ReactNode }) {

   //const { data: session } = useSession();

//if (!session) {
    //redirect("/login");
 // } else {
    //if (session.user.role === "USER") {
      //redirect("/inicio");
    //}

  return (
    <html>
      <TRPCReactProvider>
      <body>
        <Navbar_adm />
        {children}
        <Toaster position="top-right" />
        <Footer_apos_login />
      </body>
      </TRPCReactProvider>
    </html>
  );
}