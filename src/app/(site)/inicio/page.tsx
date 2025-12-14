import Capa_categorias from "@/app/(site)/inicio/Capa";
import Jogos from "@/app/(site)/inicio/Jogos"; 


export default function Inicio () {

  return (
    <>
    <Capa_categorias />
    <main>
      <Jogos />
    </main>
    </>
  );
}