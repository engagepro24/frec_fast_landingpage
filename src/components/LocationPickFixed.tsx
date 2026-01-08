"use client";
import React, { useState, useRef } from "react";
import { StandaloneSearchBox, GoogleMap, Marker, useJsApiLoader, Libraries } from "@react-google-maps/api";
import Image from "next/image";

import greenmap from "../../public/greenmap.png";
import redmap from "../../public/redmap.png";

const libraries: Libraries = ["places"];
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 13.0827, // Default Chennai
  lng: 80.2707,
};

const LocationPickFixed = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyA8G4zHnAyp4d_jTxyD59kXbRmdyZQcoEw",
    libraries,
  });

  const [pickup, setPickup] = useState<{ address: string; lat: number | null; lng: number | null }>({
    address: "",
    lat: null,
    lng: null,
  });
  const [drop, setDrop] = useState<{ address: string; lat: number | null; lng: number | null }>({
    address: "",
    lat: null,
    lng: null,
  });

  const pickupRef = useRef<any>(null);
  const dropRef = useRef<any>(null);

  const handlePickupPlacesChanged = () => {
    if (pickupRef.current) {
      const place = pickupRef.current.getPlaces()[0];
      if (place && place.geometry) {
        setPickup({
          address: place.formatted_address,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    }
  };

  const handleDropPlacesChanged = () => {
    if (dropRef.current) {
      const place = dropRef.current.getPlaces()[0];
      if (place && place.geometry) {
        setDrop({
          address: place.formatted_address,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Top custom styled search inputs */}
      <div className="flex justify-center mt-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Pickup Box */}
          <StandaloneSearchBox
            onLoad={(ref) => (pickupRef.current = ref)}
            onPlacesChanged={handlePickupPlacesChanged}
          >
            <div className="flex items-center gap-2 border-2 border-[#AF60FF] rounded-full px-4 py-2">
              <Image src={greenmap} alt="pickup" width={20} height={20} />
              <input
                type="text"
                placeholder="Enter pick up location"
                className="bg-transparent w-full text-white text-sm md:text-md focus:outline-none placeholder-white"
                value={pickup.address}
                onChange={(e) => setPickup({ ...pickup, address: e.target.value })}
              />
            </div>
          </StandaloneSearchBox>

          {/* Drop Box */}
          <StandaloneSearchBox
            onLoad={(ref) => (dropRef.current = ref)}
            onPlacesChanged={handleDropPlacesChanged}
          >
            <div className="flex items-center gap-2 border-2 border-[#AF60FF] rounded-full px-4 py-2 text-white ">
              <Image src={redmap} alt="drop" width={20} height={20} />
              <input
                type="text"
                placeholder="Enter drop location"
                className="bg-transparent w-full text-white text-sm md:text-md focus:outline-none placeholder-white"
                value={drop.address}
                onChange={(e) => setDrop({ ...drop, address: e.target.value })}
              />
            </div>
          </StandaloneSearchBox>

          {/* Book Ride Button */}
          <div
            onClick={() => {
              if (!(pickup.address && drop.address)) return; // prevent click if empty

              // Encode the values to use in URL
              const query = new URLSearchParams({
                pickupAddress: pickup.address,
                pickupLat: pickup.lat?.toString() || "",
                pickupLng: pickup.lng?.toString() || "",
                dropAddress: drop.address,
                dropLat: drop.lat?.toString() || "",
                dropLng: drop.lng?.toString() || "",
              }).toString();

              // Build the URL (example: /ride?pickupAddress=...&dropAddress=...)
              const url = `/bookRide?${query}`;

              // Navigate to URL
              window.location.href = url;
            }}
            className={`md:max-w-[125px] flex items-center justify-center rounded-full px-4 py-2 
    ${pickup.address && drop.address
                ? "bg-gold cursor-pointer"
                : "bg-gold cursor-not-allowed"
              }`}
          >
            <p className="text-[#6B1580] text-sm md:text-md">Book Ride</p>
          </div>


        </div>
      </div>

      {/* Map Section */}
      {/* <div className="mt-6 w-full h-[400px]"> */}
      {/* <GoogleMap
          mapContainerStyle={containerStyle}
          center={
            pickup.lat && pickup.lng
              ? { lat: pickup.lat, lng: pickup.lng }
              : drop.lat && drop.lng
                ? { lat: drop.lat, lng: drop.lng }
                : center
          }
          zoom={13}
        > */}
      {/* Pickup Marker */}
      {/* {pickup.lat && pickup.lng && (
            <Marker
              position={{ lat: pickup.lat, lng: pickup.lng }}
              icon={{
                url: "/greenmap.png", // static from public folder
                scaledSize: new window.google.maps.Size(40, 40),
              }}
            />
          )} */}

      {/* Drop Marker */}
      {/* {drop.lat && drop.lng && (
            <Marker
              position={{ lat: drop.lat, lng: drop.lng }}
              icon={{
                url: "/redmap.png", // static from public folder
                scaledSize: new window.google.maps.Size(40, 40),
              }}
            />
          )} */}
      {/* </GoogleMap> */}
      {/* </div> */}
    </>
  );
};

export default LocationPickFixed;
