import Capa from "@/app/(home)/home/Capa";
import Sobre from "@/app/(home)/home/sobre";
import Categorias from "@/app/(home)/home/categorias";

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
