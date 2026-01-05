import React from "react";
import rect1 from "../../../public/rrect.png";
import rect2 from "../../../public/rrect2.png";
import rect3 from "../../../public/rrect3.png";
import rect4 from "../../../public/rrect4.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cardData = [
  { icon: rect1 },
  { icon: rect2 },
  { icon: rect3 },
  { icon: rect4 },
];

const Fourth = () => {
  return (
    <section className="bg-[#10041F] flex justify-center p-6 md:p-12">
      <div className="w-full max-w-7xl">
        {/* Grid Layout: left (text) + right (cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left font-bold">
            <h5 className="text-white text-2xl md:text-4xl lg:text-6xl  mb-2">
                
              Flexible Hours &
            </h5>
            <h5 className="text-gold-gradient text-2xl md:text-4xl lg:text-6xl  mb-4">
              High Earnings
            </h5>
            <p className="text-white text-sm md:text-base lg:text-3xl font-normal mb-6 leading-relaxed">
              Join as a Frecfast captain and earn on your own terms.
              Drive whenever you want.
            </p>
            <Link  target="_blank"
              href="https://play.google.com/store/apps"
              className="flex items-center gap-2 text-white bg-[#7544A6] hover:bg-[#9e5ddf] font-semibold py-2 px-6 rounded-full border-2 border-[#9F712C] mx-auto md:mx-0 w-fit"
            >
              Start Earning
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-10">
            {cardData.map((card, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={card.icon}
                  alt={`card-${index}`}
                  className="w-[160px] h-[160px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
