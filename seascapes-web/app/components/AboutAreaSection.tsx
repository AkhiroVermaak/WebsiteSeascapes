import React from 'react';
import Image from 'next/image';

const AboutAreaSection = () => {
  return (
    <section className="relative w-full py-24 px-8  text-gray-900 bg-opacity-5">
      <h2 className="text-5xl font-serif font-bold text-center mb-12 text-gray-800">About the Overberg Region</h2>
      <p className="text-xl font-light text-center max-w-3xl mx-auto mb-16 leading-relaxed">
        The Overberg region is home to some of the Western Cape's most stunning coastal villages, offering both tranquility and adventure. Explore Betty's Bay, Pringle Bay, and Rooi-Els, each offering its own unique charm and experiences.
      </p>

      <div className="space-y-16">
        {/* Area 1: Betty's Bay */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="md:w-1/2">
            <Image
              src="/images/beach.jpg"
              alt="Betty's Bay"
              width={800}
              height={600}
              className="rounded-l-xl w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 text-lg leading-relaxed">
            <h3 className="text-4xl font-serif font-semibold mb-4 text-gray-800">Betty's Bay</h3>
            <p className="mb-4">
              Nestled between mountains and sea, Betty’s Bay is known for its stunning beaches, penguin colony at Stony Point, and the Harold Porter National Botanical Gardens. Perfect for nature lovers and adventurers alike.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Penguin colony at Stony Point</li>
              <li>Harold Porter Botanical Garden</li>
              <li>Pristine beaches and surfing spots</li>
            </ul>
          </div>
        </div>

        {/* Area 2: Pringle Bay */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="md:w-1/2">
            <Image
              src="/images/clarenceDrive.jpg"
              alt="Pringle Bay"
              width={800}
              height={600}
              className="rounded-r-xl w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 text-lg leading-relaxed">
            <h3 className="text-4xl font-serif font-semibold mb-4 text-gray-800">Pringle Bay</h3>
            <p className="mb-4">
              A quiet coastal village, Pringle Bay offers peace and seclusion. The nearby Kogelberg Biosphere provides biodiversity, and the calm beaches are perfect for relaxation.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Close proximity to Kogelberg Nature Reserve</li>
              <li>Quiet, secluded beaches</li>
              <li>Scenic hiking trails</li>
            </ul>
          </div>
        </div>

        {/* Area 3: Rooi-Els */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="md:w-1/2">
            <Image
              src="/images/penguins.jpg"
              alt="Rooi-Els"
              width={800}
              height={600}
              className="rounded-l-xl w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 text-lg leading-relaxed">
            <h3 className="text-4xl font-serif font-semibold mb-4 text-gray-800">Rooi-Els</h3>
            <p className="mb-4">
              Tucked away on a quiet peninsula, Rooi-Els offers a sense of tranquility that’s hard to find anywhere else. Crystal-clear waters and sweeping views make it a top destination for water sports and birdwatching.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Kayaking and water sports</li>
              <li>Birdwatching and wildlife</li>
              <li>Clear waters for snorkeling and diving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAreaSection;
