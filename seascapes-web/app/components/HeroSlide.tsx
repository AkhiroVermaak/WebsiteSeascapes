import React from 'react';
import Image from 'next/image';

interface HeroSlideProps {
  imageUrl: string;
  contentText: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ imageUrl, contentText }) => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="Background Image"
        fill // replaces layout="fill"
        style={{ objectFit: 'cover' }} // replaces objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content on top of the overlay */}
      <div className="relative z-20 flex items-center justify-center h-full text-white">
        <h1 className="text-3xl">{contentText}</h1>
      </div>
    </div>
  );
};

export default HeroSlide;
