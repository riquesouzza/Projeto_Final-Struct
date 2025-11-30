import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Categorias() {

  const textos = ["Aventura", "Terror", "Romance", "Ação", "Sci-Fi"];

  return (
    <section id="categories" className="min-h-screen py-16 bg-(--steam-mid)">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold steam-accent">Categorias</h2>
        <p className="mt-3 steam-text">
          Navegue por gêneros e tags para encontrar reviews do seu interesse.
        </p>

        <Carousel opts={{ align: "start" }} className="w-full pt-15 mx-auto">
          <CarouselContent>
            {textos.map((texto, index) => (
              <CarouselItem
                key={index}
                className="basis-[80%] xs:basis-[70%] sm:basis-[60%] md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  <Card className="bg-[#1B2838] text-white font-bold">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-xl font-semibold">{texto}</span>
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
    </section>
  );
}