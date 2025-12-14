"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { api } from "@/trpc/react";

type Avaliacao = {
  jogoId: number;
};

export default function Avaliacao({ jogoId }: Avaliacao) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const criarAvaliacao = api.avaliar.criar.useMutation({
    onSuccess: () => {
      toast.success("Avaliação enviada com sucesso!", {
        description: <span className = "text-black">Obrigado por compartilhar sua opinião</span>,
      });
      setComment("");
      setRating(0);
    },
    onError: () => {
      toast.error("Erro ao enviar a avaliação", {
        description:  <span className = "text-black">Tente novamente mais tarde</span>,
      });
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (rating === 0) {
      toast.error("Selecione uma quantidade de estrelas");
      return;
    }

    criarAvaliacao.mutate({
      jogoId,
      descricao: comment,
      estrelas: rating,
    });
  }

  return (
    <div className="min-h-screen bg-(--steam-mid) flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-[var(--steam-dark)] p-8 rounded-2xl shadow-xl flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          AVALIAR JOGO
        </h2>

        <div className="flex justify-center gap-2 text-4xl cursor-pointer">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`transition ${
                star <= rating ? "text-yellow-400" : "text-gray-500"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="bg-gray-200 text-black rounded-xl h-48 p-4"
          placeholder="Escreva seu comentário..."
          required
        />

        <Button
          type="submit"
          disabled={criarAvaliacao.isPending}
          className="w-full bg-[#00BA2B] hover:bg-[#00ba2b90] text-white font-semibold"
        >
          {criarAvaliacao.isPending ? "Enviando..." : "AVALIAR"}
        </Button>
      </form>
    </div>
  );
}