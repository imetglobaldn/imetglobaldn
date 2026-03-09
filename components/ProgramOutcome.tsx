import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Card {
  title: string;
  description: string;
  image: string;
}

interface CardCarouselProps {
  cards: Card[]; // Accept the cards array as a prop
}

const ProgramOutcome: React.FC<CardCarouselProps> = ({ cards }) => {
  return (
    <section className="bg-main">
      <div className="w-full max-w-7xl mx-auto md:py-10">
        <Carousel>
          <CarouselPrevious className="absolute md:-left-8 left-4 top-1/2 transform -translate-y-1/2 bg-red p-2 rounded-full z-50 scale-150 text-white">
            ❮
          </CarouselPrevious>
          <CarouselContent className="flex md:px-4 px-4 py-10">
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className="lg:basis-1/3 md:basis-1/2 flex-shrink-0 md:px-4 px-8"
              >
                <div className="bg-blue mt-2 rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-110 transition-transform">
                  <h3 className="text-xl md:text-2xl font-bold text-left pb-2 text-black bg-white py-6 px-4 rounded-3xl mb-4">
                    {card.title}
                  </h3>
                  <h4 className="text-xl font-semibold font-bricolage text-left text-white">
                    {card.description}
                  </h4>
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-black translate-y-16 z-20"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute md:-right-10 right-4 top-1/2 transform -translate-y-1/2 z-50 scale-150 text-white bg-red p-2 rounded-full">
            ❯
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default ProgramOutcome;
