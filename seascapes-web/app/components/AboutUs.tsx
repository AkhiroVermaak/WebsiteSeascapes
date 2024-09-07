import React from 'react';
import { FaHotel, FaConciergeBell, FaBuilding } from 'react-icons/fa'; // Import relevant icons

const AboutUs = () => {
  return (
    <section className="relative w-full py-16 px-8 bg-white text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-6">
          At Seascapes Accommodations, we pride ourselves on offering a selection of premier properties
          located along the breathtaking coastline of the Overberg region. Whether you're seeking relaxation
          or adventure, we provide the perfect getaway experience.
        </p>
      </div>
      
      {/* Services Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Personalized Stays */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
            <FaHotel size={32} /> {/* Icon for Personalized Stays */}
          </div>
          <h3 className="text-xl font-bold mt-4">Personalized Stays</h3>
          <p className="mt-2">Tailored experiences for all guests to ensure a memorable stay.</p>
        </div>

        {/* Property Management */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
            <FaBuilding size={32} /> {/* Icon for Property Management */}
          </div>
          <h3 className="text-xl font-bold mt-4">Property Management</h3>
          <p className="mt-2">Full-service property management for seamless and stress-free stays.</p>
        </div>

        {/* Concierge Services */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
            <FaConciergeBell size={32} /> {/* Icon for Concierge Services */}
          </div>
          <h3 className="text-xl font-bold mt-4">Concierge Services</h3>
          <p className="mt-2">On-demand concierge services to enhance your travel experience.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
