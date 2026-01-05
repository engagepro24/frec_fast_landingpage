"use client";

export const dynamic = "force-dynamic";

import React, { useState, useRef, useEffect } from "react";
import {
  StandaloneSearchBox,
  useJsApiLoader,
  Libraries,
} from "@react-google-maps/api";
import { useSearchParams } from "next/navigation";
import greenmap from "../../../public/greenmap.png";
import redmap from "../../../public/redmap.png";
import Image from "next/image";

const libraries: Libraries = ["places"];

interface Vehicle {
  _id: string;
  vehicleType: string;
  baseFare: number;
  image: string;
  pricePerKm: number;
  isActive: boolean;
}

const RapidoBooking = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyA8G4zHnAyp4d_jTxyD59kXbRmdyZQcoEw",
    libraries,
  });

  const searchParams = useSearchParams();

  const pickupRef = useRef<any>(null);
  const dropRef = useRef<any>(null);

  // Get data from URL query params
  const pickupAddress = searchParams.get("pickupAddress") || "Rameswaram";
  const pickupLat = parseFloat(searchParams.get("pickupLat") || "9.288");
  const pickupLng = parseFloat(searchParams.get("pickupLng") || "79.3129");

  const dropAddress = searchParams.get("dropAddress") || "Madurai";
  const dropLat = parseFloat(searchParams.get("dropLat") || "9.9252");
  const dropLng = parseFloat(searchParams.get("dropLng") || "78.1198");

  const [pickup, setPickup] = useState({
    address: pickupAddress,
    lat: pickupLat,
    lng: pickupLng,
  });

  const [drop, setDrop] = useState({
    address: dropAddress,
    lat: dropLat,
    lng: dropLng,
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedRide, setSelectedRide] = useState<string | null>(null);

  // Fetch vehicles
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch(
          "https://api.frecfast.com/api/vehicle/getAllVehicleWebsite?limit=100"
        );
        const data = await res.json();
        const activeVehicles = data.data.filter((v: Vehicle) => v.isActive);
        setVehicles(activeVehicles);
      } catch (err) {
        console.error("Failed to fetch vehicles:", err);
      }
    };
    fetchVehicles();
  }, []);

  // Haversine formula
  const getDistanceInKm = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ) => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handlePickupPlacesChanged = () => {
    const place = pickupRef.current?.getPlaces()?.[0];
    if (place) {
      setPickup({
        address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  const handleDropPlacesChanged = () => {
    const place = dropRef.current?.getPlaces()?.[0];
    if (place) {
      setDrop({
        address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  if (!isLoaded) {
    return <p className="text-center mt-10">Loading Maps…</p>;
  }

  const distance = getDistanceInKm(pickup.lat, pickup.lng, drop.lat, drop.lng);


  return (
    <div className="min-h-screen bg-[#411B66]  flex flex-col items-center py-6 px-4 text-white">
      <div className="w-full max-w-2xl flex justify-start mb-4">
        {/* <h1 className="text-xl font-bold text-[#411B66]">Frecfast</h1> */}
      </div>

      {/* Pickup & Drop Inputs */}
      <div className="w-full max-w-2xl border rounded-lg bg-[#411B66] p-4 mb-6 space-y-3">
        {/* Pickup Input */}
        <div className="relative">
          <StandaloneSearchBox
            onLoad={(ref) => (pickupRef.current = ref)}
            onPlacesChanged={handlePickupPlacesChanged}
          >
            <input
              type="text"
              value={pickup.address}
              onChange={(e) =>
                setPickup({ ...pickup, address: e.target.value })
              }
              placeholder="Enter Pickup Location"
              className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#10041f]"
            />
          </StandaloneSearchBox>
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Image src={greenmap} alt="pickup" width={20} height={20} />
          </div>
        </div>

        {/* Drop Input */}
        <div className="relative">
          <StandaloneSearchBox
            onLoad={(ref) => (dropRef.current = ref)}
            onPlacesChanged={handleDropPlacesChanged}
          >
            <input
              type="text"
              value={drop.address}
              onChange={(e) => setDrop({ ...drop, address: e.target.value })}
              placeholder="Enter Drop Location"
              className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#10041f]"
            />
          </StandaloneSearchBox>
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Image src={redmap} alt="drop" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="w-full max-w-2xl">
        <p className="font-bold  mb-3 ">Select Service</p>
        <div className="flex flex-col space-y-3">
          {vehicles.map((vehicle) => {
            const ridePrice = vehicle.baseFare + vehicle.pricePerKm * distance;
            const awsImage = "https://tgps-new-2025.s3.ap-south-1.amazonaws.com/" + vehicle.image
            return (
              <div
                key={vehicle._id}
                onClick={() => setSelectedRide(vehicle._id)}
                className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer transition ${selectedRide === vehicle._id
                  ? "border-blue-600 bg-gray-100 text-black"
                  : "border-gray-300 hover:border-gray-400"
                  }`}
              >
                <div className="flex items-center space-x-3">

                  <Image src={`https://tgps-new-2025.s3.ap-south-1.amazonaws.com/${vehicle.image}`} alt="pickup" width={40} height={60} />

                  <p className="font-medium">{vehicle.vehicleType}</p>
                </div>
                <p className="font-semibold">₹{ridePrice.toFixed(0)}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Payment Method */}
      {/* <div className="w-full max-w-2xl mt-6 flex items-center gap-2 text-sm ">
        <span className="text-lg">💳</span> Cash
      </div> */}

      {/* Continue Booking Button */}
      <button
        className="w-full max-w-2xl mt-6 bg-[#10041f] text-white cursor-pointer py-3 rounded-md font-semibold disabled:opacity-50"
        disabled={!pickup.address || !drop.address || !selectedRide}
        onClick={() => {
          const selectedVehicle = vehicles.find((v) => v._id === selectedRide);
          if (!selectedVehicle) return;
          const ridePrice =
            selectedVehicle.baseFare + selectedVehicle.pricePerKm * distance;

          // Replace alert with redirect to Play Store
          // window.open(
          //   "https://play.google.com/store/apps/details?id=com.ubercab", // Replace with your app package name
          //   "_blank"
          // );
          // Replace alert with redirect to Play Store
          window.open(
            "https://play.google.com/store/apps", // Replace with your app package name
            "_blank"
          );
          // alert(
          //   `Ride confirmed!\nPickup: ${pickup.address}\nDrop: ${drop.address}\nDistance: ${distance.toFixed(
          //     2
          //   )} km\nVehicle: ${selectedVehicle.vehicleType}\nPrice: ₹${ridePrice.toFixed(
          //     0
          //   )}`
          // );
        }}
      >
        Continue Booking
      </button>
    </div>
  );
};

const Page = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <RapidoBooking />
  </React.Suspense>
);

export default Page;
