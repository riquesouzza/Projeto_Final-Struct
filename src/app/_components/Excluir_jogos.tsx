"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface Game {
  id: number;
  title: string;
  image: string;
  synopsis: string;
}

interface Props {
  games: Game[];
  onDelete: (ids: number[]) => Promise<void>;
}

export default function Excluir_jogos({ games, onDelete }: Props) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedIds(
      selectedIds.length === games.length ? [] : games.map((g) => g.id)
    );
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) {
      toast.error("Nenhum jogo selecionado para exclusão!");
      return;
    }

    if (!confirm(`Tem certeza que quer excluir ${selectedIds.length} jogo(s)?`)) {
      return;
    }

    try {
      setIsDeleting(true);
      await onDelete(selectedIds);
      setSelectedIds([]);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-(--steam-mid) flex items-center justify-center p-6">
      <div className="w-full max-w-[80vw] max-h-[80vh] bg-[var(--steam-dark)] p-8 rounded-2xl shadow-xl flex flex-col">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          JOGOS
        </h2>

        <div className="flex-1 overflow-auto text-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox
                    checked={
                      selectedIds.length === games.length && games.length > 0
                    }
                    onCheckedChange={toggleSelectAll}
                    disabled={isDeleting}
                  />
                </TableHead>
                <TableHead className="text-white">Nome do Jogo</TableHead>
                <TableHead className="text-white">Sinopse</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {games.map((game) => (
                <TableRow key={game.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedIds.includes(game.id)}
                      onCheckedChange={() => toggleSelect(game.id)}
                      disabled={isDeleting}
                    />
                  </TableCell>
                  <TableCell>{game.title}</TableCell>
                  <TableCell>{game.synopsis}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4">
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={selectedIds.length === 0 || isDeleting}
            className="w-full"
          >
            {isDeleting ? "Excluindo..." : "EXCLUIR"}
          </Button>
        </div>
      </div>
    </div>
  );
}