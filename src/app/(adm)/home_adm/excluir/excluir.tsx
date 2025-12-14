"use client";

import Excluir_jogo from "@/app/_components/Excluir_jogos";
import { api } from "@/trpc/react";
import { toast } from "sonner";

export default function DeleteGamesPage() {
  const utils = api.useUtils();

  const {
    data: games,
    isLoading,
    isError,
    error,
  } = api.jogo.listaExcluir.useQuery();

  const excluirjoogo = api.jogo.excluir.useMutation({
    onSuccess: async () => {
      await utils.jogo.listaExcluir.invalidate();
      toast.success("Jogo(s) excluído(s) com sucesso!");
    },
    onError: (err) => {
      toast.error("Erro ao excluir jogo", {
        description: err.message,
      });
    },
  });

  const handleDelete = async (ids: number[]) => {
    await Promise.all(ids.map((id) => excluirjoogo.mutateAsync({ id })));
  };


  if (isLoading) {
    return <p className="p-6 text-white">Carregando jogos...</p>;
  }

  if (isError) {
    return (
      <p className="p-6 text-red-500">
        Erro ao carregar jogos: {error.message}
      </p>
    );
  }

  if (!games || games.length === 0) {
    return (
      <p className="p-6 text-white">
        Nenhum jogo encontrado.
      </p>
    );
  }

  return (
    <Excluir_jogo
      games={games.map((g) => ({
        id: g.id_jogo,
        title: g.nome,
        image: g.imagem ?? "",
        synopsis: g.descricao ?? "",
      }))}
      onDelete={handleDelete}
    />
  );
}
