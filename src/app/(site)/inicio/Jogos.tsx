"use client";

import * as React from "react";
import { api } from "@/trpc/react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Jogos() {
  const textos = ["Simulação", "Terror", "RPG"];
  
  const { data: categorias, isLoading, isError } = api.categoria.listar.useQuery();

  if (isLoading) return <p>Carregando categorias...</p>;
  if (isError) return <p>Erro ao carregar categorias!</p>;

  return (
    <section id="categories" className="min-h-screen py-16 bg-[var(--steam-dark)]">
      <div className="max-w-5xl mx-auto px-6">
        {textos.map((nomeCategoria) => {
          const categoria = categorias?.find((cat) => cat.nome === nomeCategoria);

          if (!categoria || categoria.jogos.length === 0) return null;

          return (
            <div key={nomeCategoria} className="mb-12">
              <h2 className="text-3xl font-bold steam-accent mb-6">{nomeCategoria}</h2>

              <Carousel opts={{ align: "start" }} className="w-full pt-10 mx-auto">
                <CarouselContent>
                  {categoria.jogos.map((jogo) => (
                    <CarouselItem
                      key={jogo.id_jogo}
                      className="basis-[80%] xs:basis-[70%] sm:basis-[60%] md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-2 transition-transform duration-300 hover:scale-[1.03]">
                        <Card className="bg-(--steam-mid) text-white overflow-hidden rounded-xl shadow-lg p-0 border-none">
                          <div className="w-full h-48 overflow-hidden">
                            <img
                              src={jogo.imagem ?? "/placeholder.png"}
                              alt={jogo.nome}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>

                          <CardContent className="p-4 flex flex-col gap-3">
                            <h3 className="text-lg font-bold">{jogo.nome}</h3>
                            <p className="text-sm text-gray-300 line-clamp-2">
                              {jogo.descricao || "Sem descrição disponível"}
                            </p>

                            <div className="mt-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <span className="text-[#66C0F4] font-semibold hover:underline cursor-pointer">
                                    Ler mais
                                  </span>
                                </DialogTrigger>

                                <DialogContent className="bg-(--steam-mid) text-white border border-gray-600 max-w-3xl">
                                  <DialogHeader>
                                    <DialogTitle>{jogo.nome}</DialogTitle>
                                  </DialogHeader>

                                  <DialogDescription className="text-gray-300 mt-3 whitespace-pre-line break-words overflow-wrap-anywhere">
                                    {jogo.descricao}
                                  </DialogDescription>
                                </DialogContent>
                              </Dialog>
                            </div>

                            < Link
                              href={`/avaliacao/${jogo.id_jogo}`}
                              className="mt-3 bg-[#00BA2B] text-white py-2 px-4 rounded-md text-center font-semibold hover:bg-[#01ba2c93] transition"
                            >
                              AVALIAR
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="scale-75 -left-3 top-1/2 -translate-y-1/2 sm:-left-6" />
                <CarouselNext className="scale-75 -right-3 top-1/2 -translate-y-1/2 sm:-right-6" />
              </Carousel>
            </div>
          );
        })}
      </div>
    </section>
  );
}