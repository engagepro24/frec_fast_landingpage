import React from "react";
import tick from "../../../../public/tick.png";
import man from "../../../../public/man.png";
import drive from "../../../../public/drive.png";
import time from "../../../../public/time.png";
import Image from "next/image";

const cardData = [
  {
    icon: tick,
    title: "Low cost",
  },
  {
    icon: tick,
    title: "Secured driving",
  },
  {
    icon: tick,
    title: "On time pick up",
  },
  {
    icon: tick,
    title: "24/7 Service available",
  },
];
interface FirstProps {
  type: string;
  serviceImage?: string;
}

const Second: React.FC<FirstProps> = ({ type }) => {
  return (
    <section className="bg-[#10041F] flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="text-center md:text-left max-w-md">
            <h5 className="text-[#AF60FF] text-xl md:text-2xl">Benefits</h5>
            <h5 className="text-gold-gradient text-2xl md:text-4xl mb-1 font-bold">
              {type}
            </h5>
            <h5 className="text-white text-2xl md:text-4xl mb-2 font-bold">
              Service
            </h5>

            <p className="text-white text-sm md:text-md mb-6">
              Quick and affordable bike rides to get you to your destination on
              time. Perfect for beating traffic and saving costs.
            </p>

            {cardData.map((card, index) => (
              <div className="flex items-center gap-4 mb-4" key={index}>
                <Image src={card.icon} alt="card" width={20} height={20} />

                <div className="text-white text-sm md:text-md">
                  {card.title}
                </div>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-b from-[#7544A6] to-[#411B66] border rounded-2xl h-[270px] w-[400px]">
            <div className="absolute bottom-0 z-10">
              <Image
                src={man}
                alt="man"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>

            <div className="absolute right-2 bottom-4 z-10">
              <Image
                src={drive}
                alt="motorcycle helmet"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>

            <div className="absolute -top-10 right-2 z-20">
              <div className="flex items-center gap-3">
                <Image src={time} alt="time" width={220} height={220} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
