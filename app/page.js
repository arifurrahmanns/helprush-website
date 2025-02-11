'use client';
import Categories from "@/components/home/Categories";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {






  const MapComponent = () => {
    const mapOptions = {
      // styles: mapStyles,
      zoomControl: false, // Hide zoom control
      mapTypeControl: false, // Hide map type control
      streetViewControl: false, // Hide street view control
      fullscreenControl: false // Hide fullscreen control
    };
    const [currentLocation, setCurrentLocation] = useState(null);
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyDVmLxJagzx2MGSJ58SPiL3WXD-x4QPtf4',
      libraries: ['geometry', 'drawing'],
    });
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
            // setIsLoaded(true); // Mark the map as loaded
          },
          (error) => {
            console.error(error);
            // setIsLoaded(true); // Still set isLoaded to true to stop the spinner
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setCurrentLocation({ lat: 20.5937, lng: 78.9629 });
        // setIsLoaded(true); // Set to true even if geolocation is not supported
      }
    }, []);

    return (
      isLoaded ? <GoogleMap
        mapContainerClassName="heroMap"
        center={currentLocation}
        zoom={12}
        options={mapOptions}
      >
        {/* Add a marker as an example */}
        <Marker position={currentLocation} />
      </GoogleMap> : <div className="heroMap overflow-hidden">
        <Skeleton count={1} height={450} />
      </div>
    );
  };
  return (
    <>

      <section id="hero" className="relative  py-10 lg:py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid items-center lg:grid-cols-5 gap-10 lg:gap-20">
            <div className="lg:col-span-3">
              <h2 className="text-4xl lg:text-6xl text-neutral-700 font-bold">
                Get Help Anytime, Anywhere with
                <span className="relative text-theme2 z-10">  HelpRush </span>

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
                <img className="col-span-2" src="/img/12144979_Wavy_Bus-44_Single-01.svg" alt="" />
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
                <img className="col-span-2" src="/img/7119384_3394894.svg" alt="" />
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
                <img className="col-span-2" src="/img/11906892_4867781.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="f1" className="pb-10 lg:pb-10">
        <div className="container">
          <div className="grid items-center lg:gap-20 lg:grid-cols-5 gap-10">
            <img className="lg:col-span-2" src="/img/f1.svg" alt="" />
            <div className="lg:col-span-3">
              <h3 className="font-bold !leading-tight text-3xl lg:text-5xl text-primary">
                Work on Your Terms , Grow on Your Schedule
              </h3>
              <p className="mt-5 text-base text-neutral-800">
                Join HelpRush and take charge of your earnings. Offer services when it suits
                you and grow your business on your terms. No resources required
                from us—just your skills and dedication.
              </p>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-center items-start mt-5 lg:mt-10">
                <a href="" className="btn !bg-theme2  !text-primary">Get Started </a>
                <a href="" className="border-b-2  border-black pb-1">Already have an account? Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="f2" className="pb-10 lg:pb-10">
        <div className="container">
          <div className="grid items-center lg:gap-20 lg:grid-cols-5 gap-10">
            <img className="lg:order-2 lg:col-span-2" src="/img/f2.svg" alt="" />
            <div className="lg:order-1 lg:col-span-3">
              <h3 className="font-bold !leading-tight text-3xl lg:text-5xl text-primary">
                Turn everyday Tasks into earnings with errands
              </h3>
              <p className="mt-5 text-base text-neutral-800">
                From grocery runs to bill payments ,help your community while earning extra income.Join HelpRush today and get paid for making life easier in Kashmir.
              </p>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-center items-start mt-5 lg:mt-10">
                <a href="" className="btn !bg-theme2  !text-primary">Get Started </a>
                <a href="" className="border-b-2  border-black pb-1">Already have an account? Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="f1" className="pb-10 lg:pb-20">
        <div className="container">
          <div className="grid items-center lg:gap-20 lg:grid-cols-5 gap-10">
            <img className="lg:col-span-2" src="/img/f3.svg" alt="" />
            <div className="lg:col-span-3">
              <h3 className="font-bold !leading-tight text-3xl lg:text-5xl text-primary">
                HelpRush is designed with business in Mind
              </h3>
              <p className="mt-5 text-base text-neutral-800">
                HelpRush is built with businesses in mind, offering a platform where you can connect with thousands of new customers while seamlessly managing your teams, boosting productivity, and organizing work. With smart data insights to drive growth and social benefits for your team, HelpRush empowers your business to thrive.
              </p>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-center items-start mt-5 lg:mt-10">
                <a href="" className="btn !bg-theme2  !text-primary">Get Started </a>
                <a href="" className="border-b-2  border-black pb-1">Already have an account? Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="appSection" className="py-10  lg:py-20 bg-neutral-50">
        <div className="container">
          <h3>
            It’s easier in the apps
          </h3>
          <div className="grid lg:grid-cols-2">
            <div className="flex  items-center mt-10  flex-col lg:flex-row gap-5">
              <img src="/img/qr1.png" className="w-36" alt="" />
              <div>
                <h5 className="font-semibold text-center lg:text-left text-xl  lg:text-2xl">Download HelpRush app </h5>
                <a href="#" className="text-theme justify-center lg:justify-start text-lg flex items-center mt-1 lg:mt-2 gap-2">Scan to download <Icon className="text-xl" icon="humbleicons:arrow-right" /></a>
              </div>
            </div>
            <div className="flex items-center mt-10  flex-col lg:flex-row gap-5">
              <img src="/img/qr2.png" className="w-36" alt="" />
              <div>
                <h5 className="font-semibold text-center lg:text-left text-xl  lg:text-2xl">Download Provider app  </h5>
                <a href="#" className="text-theme justify-center lg:justify-start text-lg flex items-center mt-1 lg:mt-2 gap-2">Scan to download <Icon className="text-xl" icon="humbleicons:arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
