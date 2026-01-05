import React from "react";
// import headings from "../../../../public/cap.png";
import headings from "../../../../public/captain.png";
import rect1 from "../../../../public/rect1.png";
import rect2 from "../../../../public/rect2.png";
import rect3 from "../../../../public/rect3.png";
import rect4 from "../../../../public/rect4.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cardData = [
  { icon: rect1 },
  { icon: rect2 },
];
const cardData2 = [
  { icon: rect3 },
  { icon: rect4 },
];

interface FirstProps {
  type: string;
}

const Third: React.FC<FirstProps> = ({ type }) => {
  return (
    <section className="bg-[#090212] flex justify-center p-6 md:p-12">
      <div className="w-full max-w-6xl">
        {/* Heading Image */}
        <div className="flex justify-end">
          <Image
            src={headings}
            alt="heading"
            className="w-[250px] md:w-[500px] lg:w-[600px] h-auto mb-10"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[...cardData, ...cardData2].map((card, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={card.icon}
                  alt={`card-${index}`}
                  className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-md">
            <h5 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
              Flexible Hours &
            </h5>
            <h5 className="text-gold-gradient text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              High Earnings
            </h5>
            <p className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 leading-relaxed">
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
        </div>
      </div>
    </section>
  );
};

export default Third;
