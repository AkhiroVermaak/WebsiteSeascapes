"use client"

import React, { useState, useEffect } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import HeroSlide from './HeroSlide';
import DealsPop from './DealsPop';

const Hero: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showDeals, setShowDeals] = useState(false); // State to toggle the deals section
  const slideCount: number = 3; // Number of slides

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slideCount;
      api.scrollTo(nextIndex);
      setCurrentIndex(nextIndex);
    }, 6000);

    return () => clearInterval(interval);
  }, [api, currentIndex, slideCount]);

  const toggleDeals = () => {
    setShowDeals(!showDeals); // Toggle deals section
  };

  return (
    <div className="relative w-[102vw] h-[90vh] flex justify-center items-center overflow-hidden">
      {/* Carousel */}
      <Carousel setApi={setApi} className="w-[100%] h-[100%]">
        <CarouselContent className="flex w-full h-full">
          <CarouselItem className="w-full pl-0">
            <HeroSlide imageUrl="/images/clarenceDrive.jpg" contentText="Discover This African Gem" />
          </CarouselItem>
          <CarouselItem className="w-full pl-0">
            <HeroSlide imageUrl="/images/beach.jpg" contentText="Explore Beautiful Landscapes" />
          </CarouselItem>
          <CarouselItem className="w-full pl-0">
            <HeroSlide imageUrl="/images/penguins.jpg" contentText="Experience Tranquility" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Button to toggle Deals and Specials */}
      <button 
        onClick={toggleDeals} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-primary-hover transition-all"
      >
        {showDeals ? "Close Deals" : "View Deals"}
      </button>

      {/* DealsPop Component */}
      <DealsPop showDeals={showDeals} toggleDeals={toggleDeals} />
    </div>
  );
};

export default Hero;
