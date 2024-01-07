import React from 'react';
import foodTruckImage from '../assets/foodtruck.png';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


const Home = () => {
  const containerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${foodTruckImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(112vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  
  return (
    <div name="Home" style={containerStyle} className="text-white">
      <div className="container mx-auto space-y-12">
        <h1 className="text-6xl font-bold mb-4">Welcome to Foodtruck Finder</h1>
        <p className="text-xl font-bold mb-8">Discover your favorite food trucks in your area!</p>

        <div className="flex flex-col items-center space-y-4">
          <Link to="/login">
            <button className="h-15 w-25 bg-slate-700 hover:bg-slate-500 px-4 py-2 rounded mb-4 font-semibold">
              Find a Foodtruck
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;