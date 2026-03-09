import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { youtubevideos } from "@/constants";
import Image from "next/image";

const InnovationCenter = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (api) {
      const intervalId = setInterval(() => {
        api.scrollNext();
      }, 3000); // Auto scroll every 3 seconds

      return () => clearInterval(intervalId);
    }
  }, [api]);

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div 
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10"
        data-aos="fade-right"
      >
        <div className="hidden md:block border-[1px] border-black w-full md:w-[28%]" />
        <div className="text-center md:text-left w-full md:w-[60%] lg:w-[50%]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-bricolage">
            Innovation <br />
            <span className="text-red">Center</span>
          </h2>
        </div>
        <div className="w-full md:w-auto">
          <Button className="w-full md:w-auto p-4 md:p-6 my-4 md:my-8">
            <Link href="https://www.youtube.com/@imetglobalnewdelhi">
              Learn More
            </Link>
          </Button>
        </div>
      </div>

      {/* Carousel Section */}
      <div 
        className="mt-10 relative w-full"
        data-aos="fade-left"
      >
        <Carousel className="w-full" setApi={setApi}>
          <CarouselPrevious className="absolute block -left-12 z-10 bg-transparent hover:bg-blue/80 h-16 w-16   [&>svg]:h-8 [&>svg]:w-8 border-2 border-transparent" />

          <CarouselContent className="px-4">
            {youtubevideos.map((video, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2 md:p-4"
              >
                <div className="relative aspect-[9/16] max-w-[290px] mx-auto">
                  <div 
                    className="absolute inset-0 rounded-3xl shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 z-0">
                      <Image
                        src="/phone.webp"
                        alt="Phone frame"
                        layout="fill"
                        objectFit="cover"
                        priority={index === 0}
                      />
                    </div>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoUrl
                        .split("/")
                        .filter(Boolean)
                        .pop()}?autoplay=0&controls=1`}
                      className="absolute inset-0 w-full h-full rounded-2xl z-10"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={video.title}
                      loading="lazy"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className="absolute block -right-12 z-10 hover:bg-blue/80 bg-transparent h-16 w-16   [&>svg]:h-8 [&>svg]:w-8 border-2 border-transparent" />
        </Carousel>
      </div>
    </div>
  );
};

export default InnovationCenter;
