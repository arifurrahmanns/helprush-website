'use client';
import Categories from "@/components/home/Categories";
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
        <div className="container relative z-10">
          <div className="grid items-center lg:grid-cols-5 gap-10 lg:gap-20">
            <div className="lg:col-span-3">
              <h2 className="text-4xl lg:text-7xl text-neutral-700 font-bold">
                Get Help Anytime, Anywhere with <span className="shape-text">
                  <span className="relative z-10"> HelpRush </span>
                </span>
              </h2>
              <form action="#" className="searchForm mt-8 max-w-md flex gap-2">
                <input type="text" placeholder="Search for Services or Providers" className="flex-1" />
                <button className="bg-primary w-12 h-12 !p-0 flex justify-center items-center btn rounded-full">
                  <Icon icon="meteor-icons:search" width="24" height="24" />
                </button>
              </form>
            </div>
            <div className="lg:col-span-2">
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
            "inset-x-0 inset-y-[-10%] opacity-55 w-[100%] h-[140%] skew-y-12",
          )}
        />
      </section>

      <section id="categories" className="py-10 lg:py-20">
        <div className="container">
          <h2 className="secttl">
            Search by Category
          </h2>
          <Categories />
        </div>
      </section>
      <section id="categories" className="pb-10 lg:pb-20">
        <div className="container">
          <h2 className="secttl">
            Suggestions
          </h2>
          <div className="grid mt-5 lg:mt-8 lg:grid-cols-3 gap-5">
            <div className="rounded-md border  p-4">
              <div className="grid grid-cols-7">
                <div className="col-span-5">
                  <h3 className="font-semibold text-black text-lg">
                    Hire
                  </h3>
                  <p className="text-sm mt-2 leading-tight text-neutral-800">
                    Hire Trusted local experts anywhere,anytime.
                  </p>
                  <button className="btn !py-1 !px-2  !text-xs mt-3">
                    Details
                  </button>
                </div>
                <img className="lg:col-span-2" src="/img/12144979_Wavy_Bus-44_Single-01.svg" alt="" />
              </div>
            </div>
            <div className="rounded-md border  p-4">
              <div className="grid grid-cols-7">
                <div className="col-span-5">
                  <h3 className="font-semibold text-black text-lg">
                  Advance
                  </h3>
                  <p className="text-sm mt-2 leading-tight text-neutral-800">
                  Book your favourite Pro well in advance for peace of mind
                  </p>
                  <button className="btn !py-1 !px-2  !text-xs mt-3">
                    Details
                  </button>
                </div>
                <img className="lg:col-span-2" src="/img/7119384_3394894.svg" alt="" />
              </div>
            </div>
            <div className="rounded-md border  p-4">
              <div className="grid grid-cols-7">
                <div className="col-span-5">
                  <h3 className="font-semibold text-black text-lg">
                  Emergency
                  </h3>
                  <p className="text-sm mt-2 leading-tight text-neutral-800">
                  Book expert technicians for emergency repairs in minutes 
                  </p>
                  <button className="btn !py-1 !px-2  !text-xs mt-3">
                    Details
                  </button>
                </div>
                <img className="lg:col-span-2" src="/img/11906892_4867781.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
