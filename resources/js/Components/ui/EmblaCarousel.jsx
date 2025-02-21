import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { PrevButton } from "./PrevButton";
import { NextButton } from "./NextButton";

const slidesData = [
  { title: "Slide 1", color: "bg-blue-500" },
  { title: "Slide 2", color: "bg-green-500" },
  { title: "Slide 3", color: "bg-orange-500" },
  { title: "Slide 4", color: "bg-purple-500" },
  { title: "Slide 5", color: "bg-pink-500" },
  { title: "Slide 6", color: "bg-yellow-500" },
];

export function EmblaCarousel() {
  // Repare em align: "center" e containScroll: false
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      slidesToScroll: 1,
      containScroll: false, 
    },
    [Autoplay()]
  );

  return (
    <div className="embla relative overflow-hidden" ref={emblaRef}>
      {/* Linha de slides */}
      <div className="embla__container flex">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="embla__slide flex-none px-6"
            style={{ width: "400px", height: "500px" }}
          >
            <div
              className={`w-full h-full flex items-center justify-center text-white ${slide.color} rounded-2xl`}
            >
              <h3 className="text-2xl">{slide.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <PrevButton
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 z-10"
      />

      <NextButton
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 z-10"
      />
    </div>
  );
}
