import React from 'react';

interface DealsPopProps {
  showDeals: boolean;
  toggleDeals: () => void;
}

const DealsPop: React.FC<DealsPopProps> = ({ showDeals, toggleDeals }) => {
  return (
    <div 
      className={`fixed top-0 right-0 h-full w-1/3 bg-primary/90 text-white p-6 transition-transform duration-500 ease-in-out ${
        showDeals ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <h2 className="text-xl font-bold">Deals and Specials</h2>
      <p className="mt-4">
        Save up to 30% on your next booking! Check out our limited-time offers and make the most of your stay.
      </p>
      <button 
        onClick={toggleDeals} 
        className="mt-4 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary-hover transition-all"
      >
        View Deals
      </button>
    </div>
  );
};

export default DealsPop;
