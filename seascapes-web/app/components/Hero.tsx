'use client';
import React, { useState, useEffect } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import HeroSlide from './HeroSlide';

const Hero: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideCount: number = 3; // Number of slides

  useEffect(() => {
    if (!api) return; // Do nothing if API is not initialized

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slideCount;
      api.scrollTo(nextIndex); // Scroll to the next slide using the API
      setCurrentIndex(nextIndex); // Update the current index
    }, 6000); // Change slides every 6 seconds

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, [api, currentIndex, slideCount]);

  return (
    <div className="w-[102vw] h-[90vh] flex justify-center items-center overflow-hidden">
      <Carousel setApi={setApi} className="w-[100%] h-[100%]">
        <CarouselContent className="flex w-full h-full">
          <CarouselItem className="w-full pl-0">
            <HeroSlide imageUrl="/images/clarenceDrive.jpg" contentText="Discover This African Gem" />
          </CarouselItem>
          <CarouselItem className="w-full pl-0 basis-[100%]">
            <HeroSlide imageUrl="/images/beach.jpg" contentText="Explore Beautiful Landscapes" />
          </CarouselItem>
          <CarouselItem className="w-full pl-0">
            <HeroSlide imageUrl="/images/penguins.jpg" contentText="Experience Tranquility" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
