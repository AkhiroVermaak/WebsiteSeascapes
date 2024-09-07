"use client"
import { motion } from 'framer-motion';
import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { HomeBookingWidget } from "./components/HomeBookingWidget";
import WeekPick from "./components/WeekPick";
import DealsPop from "./components/DealsPop";
import AboutAreaSection from "./components/AboutAreaSection";
import AboutUs from "./components/AboutUs";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden">
      <main className="relative max-w-screen min-h-screen flex flex-col items-center bg-background text-foreground">
        {/* Hero Section */}
        <div className="relative w-full">
          <Hero />
          {/* Booking Form Overlapping Hero */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="absolute bottom-[-50px] w-full flex justify-center z-10"
          >
            <HomeBookingWidget />
          </motion.div>
       
        </div>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="relative w-full py-24 px-8 md:px-16 lg:px-24 bg-accent-light text-accent-foreground-light"
        >
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12  ">
            {/* Individual property cards */}
            <div className="bg-white p-6 shadow-lg rounded-xl">
              <Image
                src="/images/property1.jpg"
                alt="Property 1"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold mt-6">Property 1</h3>
              <p className="mt-3 text-base leading-relaxed">
                A beautiful retreat with modern amenities and scenic views.
              </p>
            </div>
            {/* Repeat for other properties */}
          </div>
        </motion.section>
        {/* Pick of the Week Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInLeft}
          className="relative w-full py-16 px-8 md:px-16 lg:px-24 bg-card text-card-foreground flex justify-center"
        >
          <WeekPick />
        </motion.section>

        {/* About Us Section (Shifted to the right) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInRight}
          className="relative w-full py-16 px-8 md:px-16 lg:px-24 bg-background text-foreground flex flex-row-reverse items-center"
        >
          <AboutUs />
        </motion.section>

        {/* Our Properties Section (Centered) */}
       

        {/* About the Area Section (Alternating left alignment) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInLeft}
          className="relative w-full py-16 px-8 md:px-16 lg:px-24 bg-muted-light text-muted-foreground flex justify-center"
        >
          <AboutAreaSection />
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInRight}
          className="relative w-full py-16 px-8 md:px-16 lg:px-24 bg-gray-100 text-gray-900"
        >
          <h2 className="text-3xl font-semibold text-center mb-12">Gallery</h2>
          <div className="w-full flex overflow-x-scroll gap-8 px-6 md:px-16 lg:px-24">
            <Image
              src="/images/gallery1.jpg"
              alt="Gallery 1"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/images/gallery2.jpg"
              alt="Gallery 2"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
            {/* Add more gallery images */}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
