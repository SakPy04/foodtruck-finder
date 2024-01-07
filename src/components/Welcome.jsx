import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import chicago from '../assets/chicago.jpg';
import sf from '../assets/sf.jpg'
import boston from '../assets/boston.jpg'
const libraries = ['places'];

const mapContainerStyle = {
  width: '50vw',
  height: '50vh',
};

const listContainerStyle = {
  width: '50vw',
  height: '50vh',
  overflowY: 'auto',
  borderRight: '1px solid #ccc',
  padding: '10px',
};
const cities = [
  { name: 'Chicago', image: chicago, center: { lat: 41.8781, lng: -87.6298 } },
  { name: 'San Francisco', image: sf, center: { lat: 37.7749, lng: -122.4194 } },
  { name: 'Boston', image: boston, center: { lat: 42.3601, lng: -71.0589 } },
];

const App = () => {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [selectedTruck, setSelectedTruck] = useState(null);

  const [selectedCity, setSelectedCity] = useState(cities[0])
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,

    libraries,
  });

  useEffect(() => {
    // Fetch food truck data from the server
    axios
      .get(`http://localhost:5000/welcome`)
      .then((response) => {
        const filteredFoodTrucks = response.data.filter((document) => document.city === selectedCity.name);
        console.log(`Fetched data for ${selectedCity.name}:`, filteredFoodTrucks);
        setFoodTrucks(filteredFoodTrucks);
      })
      .catch((error) => {
        console.error('Error fetching food trucks:', error);
      });
  }, [selectedCity]); 
  

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className='flex flex-col h-screen'>
      {/* Additional Content (Top) */}
      <div className='w-full h-1/2 bg-gray-200'>
    <h1 className='text-3xl font-semibold font-sans text-gray-700 py-4 justify-center text-center'>Find a Food Truck in Your City!</h1>
 
    <div className='flex flex-row justify-between p-4'>
    {cities.map((city) => (
            <div key={city.name} className='flex flex-col max-w-full'>
              <img
                src={city.image}
                className='h-72 w-50 transition-all duration-300 rounded-xl cursor-pointer filter grayscale hover:grayscale-0'
                alt={city.name}
              />
              <div className='text-xl p-2 text-center font-semibold font-sans text-gray-700'>
              <input
                type='radio'
                name='city'
                value={city.name}
                id={city.name}
                checked={selectedCity.name === city.name}
                onChange={() => setSelectedCity(city)}
              />
              <label htmlFor={city.name}>{city.name}</label>
              </div>
          </div>

            ))}
  
</div>
  </div>

      {/* Food Truck List Container (Bottom Left) */}
      <div className='flex flex-row h-1/2'>
      <div style={listContainerStyle}>
    <h2 className='text-2xl font-semibold font-sans mb-4 text-gray-700'>Food Trucks List</h2>
    <ul className='bg-white rounded-2xl p-4 text-lg font-bold text-white text-center '>
      {foodTrucks.map((truck) => (
        <li key={truck._id} className='mb-2 cursor-pointer bg-blue-400 rounded p-2 text-bold hover:bg-slate-500' onClick={() => setSelectedTruck(truck)}>
          {truck.Applicant}
        </li>
      ))}
    </ul>
  </div>

        {/* Google Map Container (Bottom Right) */}
        <div className='relative' style={{ width: '50vw', height: '50vh' }}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={selectedCity.center} // Default center (San Francisco)
          >
            {foodTrucks.map((truck) => (
              // Check for valid latitude and longitude values
              (typeof truck.Latitude === 'number' && typeof truck.Longitude === 'number') && (
                <Marker
                  key={truck._id}
                  position={{ lat: truck.Latitude, lng: truck.Longitude }}
                  onClick={() => {
                    setSelectedTruck(truck);
                  }}
                />
              )
            ))}
            {selectedTruck && (
              <InfoWindow
                position={{ lat: selectedTruck.Latitude, lng: selectedTruck.Longitude }}
                onCloseClick={() => {
                  setSelectedTruck(null);
                }}
              >
                <div>
                  <h2>{selectedTruck.Applicant}</h2>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      </div>
    </div>

  );
};

export default App;
