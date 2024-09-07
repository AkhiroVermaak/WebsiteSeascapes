import React from 'react';
import { motion } from 'framer-motion';

const verticalCarouselVariants = {
  animate: {
    y: [0, -100, -200, -300], // Adjust this based on the height of your images
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const WeekPick: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#f5e8e1] to-[#e6d5c4] text-gray-900 py-24 px-8 flex justify-center">
      <div className="max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left side: Vertical Carousel of Property Images */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[500px] overflow-hidden"
        >
          <motion.div
            className="flex flex-col space-y-4"
            variants={verticalCarouselVariants}
            animate="animate"
          >
            <img
              src="/images/cottage.jpg"
              alt="Beachfront Villa 1"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <img
              src="/images/villa.jpg"
              alt="Beachfront Villa 2"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <img
              src="/images/pool.jpg"
              alt="Beachfront Villa 3"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Right side: Property story and highlights */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-800 font-serif leading-tight">
              Pick of the Week: Stunning Beachfront Villa
            </h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Escape to paradise in this luxurious beachfront villa, perfect for families or a romantic getaway. 
              This property boasts breathtaking ocean views, modern amenities, and private beach access.
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-600 space-y-2">
              <li>3 spacious bedrooms with ensuite bathrooms</li>
              <li>Private infinity pool overlooking the ocean</li>
              <li>Fully equipped gourmet kitchen</li>
              <li>Private beach access</li>
              <li>Close to local attractions and dining</li>
            </ul>
          </div>

          {/* "View Property" Button */}
          <div>
            <a
              href="/properties/beachfront-villa"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Property
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WeekPick;
