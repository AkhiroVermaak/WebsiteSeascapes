import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeBookingWidget from "./components/HomeBookingWidget";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden">
      <main className="relative max-w-screen min-h-screen flex flex-col items-center">
        <Hero />
        {/* Position the HomeBookingWidget to overlap with Hero */}
        <div className="relative w-full flex justify-center">
        
          <HomeBookingWidget  />
        </div>
      </main>
      <Footer />
    </div>
  );
}
