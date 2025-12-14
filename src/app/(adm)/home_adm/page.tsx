import Capa from "@/app/(adm)/home_adm/Capa";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Pagina1 () {
  
  return (
    <>
    <Capa />
    </>
  );
}