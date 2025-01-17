'use client';
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useCallback, useEffect, useState } from "react";


export default function Home() {




  const containerStyle = {
    width: '100%',
    height: '450px',
  };



  const MapComponent = () => {
    const mapOptions = {
      // styles: mapStyles,
      zoomControl: false, // Hide zoom control
      mapTypeControl: false, // Hide map type control
      streetViewControl: false, // Hide street view control
      fullscreenControl: false // Hide fullscreen control
    };
    const [currentLocation, setCurrentLocation] = useState(null);
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
            setIsLoaded(true); // Mark the map as loaded
          },
          (error) => {
            console.error(error);
            setIsLoaded(true); // Still set isLoaded to true to stop the spinner
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        currentLocation({ lat: 20.5937, lng: 78.9629 });
        setIsLoaded(true); // Set to true even if geolocation is not supported
      }
    }, []);

    return (
      <LoadScript googleMapsApiKey="AIzaSyDVmLxJagzx2MGSJ58SPiL3WXD-x4QPtf4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentLocation}
          zoom={12}
          options={mapOptions}
        >
          {/* Add a marker as an example */}
          <Marker position={currentLocation} />
        </GoogleMap>
      </LoadScript>
    );
  };
  return (
    <>

      <section id="hero" className="relative  py-10 lg:py-20 overflow-hidden">
        <div className="container">
          <div className="grid items-center lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <h2 className="text-4xl lg:text-6xl text-neutral-700 font-bold">
                Get Help Anytime, Anywhere with <span >
                  HelpRush
                </span>
              </h2>
              <form action="#" className="searchForm mt-8 max-w-md flex gap-2">
                <input type="text" placeholder="Search for Services or Providers" className="flex-1" />
                <button className="bg-primary w-12 h-12 !p-0 flex justify-center items-center btn rounded-full">
                  <Icon icon="meteor-icons:search" width="24" height="24" />
                </button>
              </form>
            </div>
            <div>
              <MapComponent />
            </div>
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={300}
          maxOpacity={0.1}
          duration={1}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(60vw_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-10%] opacity-55 w-[100%] h-[140%] skew-y-12  ",
          )}
        />
      </section>
    </>
  );
}
