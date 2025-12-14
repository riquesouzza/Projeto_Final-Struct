"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { api } from "@/trpc/react";

export default function Adicionar() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [selectedCategoria, setSelectedCategorias] = useState<string[]>([]);

  const { data: categorias, isLoading } = api.categoria.listar.useQuery();

  const criarJogo = api.jogo.criar.useMutation({
    onSuccess: () => {
      toast.success("Jogo adicionado!", {
        description: <span className="text-black"> `${title} foi cadastrado com sucesso.`</span>
      });

      setTitle("");
      setImageUrl("");
      setSynopsis("");
      setSelectedCategorias([]);
    },
    onError: (error) => {
      toast.error("Erro ao adicionar o jogo", {
        description: <span className="text-black"> error.message </span>
      });
    },
  });

  function isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim() || !synopsis.trim() || !imageUrl.trim()) {
      toast.error("Todos os campos são obrigatórios!");
      return;
    }

    if (!isValidUrl(imageUrl)) {
      toast.error("A URL da imagem não é válida!");
      return;
    }

    if (selectedCategoria.length === 0) {
      toast.error("Selecione ao menos uma categoria!");
      return;
    }

    await criarJogo.mutateAsync({
      nome: title,
      descricao: synopsis,
      imagem: imageUrl,
      categoria: selectedCategoria, 
    });
  }

  return (
    <div className="min-h-screen bg-(--steam-mid) flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-[var(--steam-dark)] p-8 rounded-2xl shadow-xl flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          NOVO JOGO
        </h2>

        <div>
          <label className="text-gray-200 text-sm">Nome do jogo:</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o nome"
            className="mt-2 bg-gray-200 text-black rounded-xl"
            required
          />
        </div>

        <div>
          <label className="text-gray-200 text-sm">URL da imagem:</label>
          <Input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://exemplo.com/capa.jpg"
            className="mt-2 bg-gray-200 text-black rounded-xl"
            required
          />
        </div>

        <div>
          <label className="text-gray-200 text-sm">Sinopse:</label>
          <Textarea
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            className="bg-gray-200 text-black rounded-xl h-40 p-4"
            placeholder="Escreva a sinopse do jogo..."
            required
          />
        </div>

        <div>
          <label className="text-gray-200 text-sm mb-2 block">Categorias:</label>

          {isLoading && (
            <p className="text-gray-400 text-sm">Carregando categorias...</p>
          )}

          <div className="grid grid-cols-2 gap-3 mt-2">
            {categorias?.map((categoria: { id_categoria: number; nome: string }) => (
              <label
                key={categoria.id_categoria}
                className="flex items-center gap-2 text-gray-200 text-sm"
              >
                <input
                  type="checkbox"
                  checked={selectedCategoria.includes(categoria.nome)}
                  onChange={(e) => {
                    setSelectedCategorias((prev: string[]) =>
                      e.target.checked
                        ? [...prev, categoria.nome]
                        : prev.filter((n) => n !== categoria.nome)
                    );
                  }}
                />
                {categoria.nome}
              </label>
            ))}
          </div>
        </div>

        <Button
          disabled={criarJogo.isPending}
          className="w-full bg-[#00BA2B] hover:bg-[#00ba2b90] text-white font-semibold"
        >
          {criarJogo.isPending ? "Salvando..." : "ADICIONAR"}
        </Button>
      </form>
    </div>
  );
}