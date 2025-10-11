"use client";
import { useEffect, useState, type FC } from "react";
import { imageData } from "./carousel.data";
import type { CarouselProps } from "./carousel.types";

const Carousel: FC<CarouselProps> = ({
  images = imageData,
  width = 600,
  height = 400,
  autoPlay = true,
  autoPlayInterval = 10000,
}: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const handler = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(handler);
  }, [autoPlay, autoPlayInterval, images.length, currentImageIndex]);

  return (
    <div
      className={`flex align-center justify-center relative overflow-hidden mx-auto`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <button
        aria-label="Previous Slide"
        className="absolute cursor-pointer top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-50 text-black text-2xl p-3 rounded-full z-10 hover:bg-opacity-70 flex items-center justify-center shadow-lg transition"
        onClick={() =>
          setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
          )
        }
      >
        &#8592;
      </button>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              className="object-cover"
              style={{ width: `${width}px`, height: `${height}px` }}
              alt={`Slide ${index}`}
            />
          );
        })}
      </div>
      <button
        aria-label="Next Slide"
        className="absolute cursor-pointer top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-50 text-black text-2xl p-3 rounded-full z-10 hover:bg-opacity-70 flex items-center justify-center shadow-lg transition"
        onClick={() =>
          setCurrentImageIndex(
            currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
          )
        }
      >
        &#8594;
      </button>
      {/* Index display */}
      <div className="absolute top-11/12 text-black font-bold bg-white px-2 rounded-sm">
        <span>{`${currentImageIndex + 1} / ${images.length}`}</span>
      </div>
    </div>
  );
};

export default Carousel;
