import Capa from "@/app/Pagina1/Capa";
import Sobre from "@/app/Pagina1/sobre";
import Categorias from "@/app/Pagina1/categorias";

export default function Pagina1 () {
  return (
    <>
    <Capa />
      <main>
        <Sobre />
        <Categorias />
      </main>
    </>
  );
}
