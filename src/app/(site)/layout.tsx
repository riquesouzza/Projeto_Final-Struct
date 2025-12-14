import "@/styles/globals.css";

import Navbar_apos_login from "@/app/_components/Navbar_apos_login";
import Footer_apos_login from "@/app/_components/Footer_apos_login";
import { AuthProvider } from "@/components/authProvider";
import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/sonner";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function PrivateLayout({children,}: {children: React.ReactNode;}) {
  //const { data: session } = useSession();

//if (!session) {
  //  redirect("/login");
// } else {
  //  if (session.user.role === "ADM") {
    //  redirect("/home_adm");
  //  } 
 // }

  return (
    <TRPCReactProvider>
      <AuthProvider>
        <html lang="pt-BR">
          <body>
            <Navbar_apos_login />
            <main>{children}</main>
            <Footer_apos_login />
            <Toaster position="top-right" />
          </body>
        </html>
      </AuthProvider>
    </TRPCReactProvider>
  );
}