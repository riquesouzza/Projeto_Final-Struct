"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MyCarousel() {
  const carouselItems = [
    {
      id: 1,
      title: "Slide 1",
      description: "Descrição do primeiro slide",
      bgColor: "bg-blue-200",
    },
    {
      id: 2,
      title: "Slide 2", 
      description: "Descrição do segundo slide",
      bgColor: "bg-green-200",
    },
    {
      id: 3,
      title: "Slide 3",
      description: "Descrição do terceiro slide", 
      bgColor: "bg-yellow-200",
    },
    {
      id: 4,
      title: "Slide 4",
      description: "Descrição do quarto slide",
      bgColor: "bg-purple-200",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 overflow-hidden">
      <h2 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#66C0F4] mb-4">Jogos Validados</h2>
      
      <Carousel className="w-full">
        <CarouselContent className="ml-0">
          {carouselItems.map((item) => (
            <CarouselItem 
              key={item.id} 
              className="pl-4 basis-10/12 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
            >
              <div className={`p-4 sm:p-6 rounded-lg border ${item.bgColor} h-40 sm:h-48 flex flex-col items-center justify-center`}>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-gray-700 text-center text-sm sm:text-base">{item.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Botões de navegação responsivos */}
        <div className="flex justify-center gap-4 mt-4 sm:mt-6 sm:justify-start">
          <CarouselPrevious className="relative static sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 transform scale-75 sm:scale-100" />
          <CarouselNext className="relative static sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 transform scale-75 sm:scale-100" />
        </div>
      </Carousel>
    </div>
  );
}