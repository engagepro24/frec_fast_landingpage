import React from "react";
import headings from "../../../public/heading.png";
import rect1 from "../../../public/rect1.png";
import rect2 from "../../../public/rect2.png";
import rect3 from "../../../public/rect3.png";
import rect4 from "../../../public/rect4.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [rect1, rect2, rect3, rect4];

const Third = () => {
  return (
    <section className="bg-[#090212] flex justify-center p-6 md:p-12">
      <div className="w-full max-w-7xl">
        {/* Heading Image */}
        <div className="flex justify-center">
          <Image
            src={headings}
            alt="heading"
            className="w-full max-w-4xl h-auto mb-10"
            priority
          />
        </div>

        {/* Grid Layout: left (cards) + right (content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Cards */}
          <div className="grid grid-cols-2 gap-6 md:gap-10">
            {cards.map((icon, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={icon}
                  alt={`card-${index}`}
                  className="w-[160px] h-[160px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="text-center md:text-left font-bold lg:p-12">
            <h5 className="text-gold-gradient text-2xl md:text-4xl lg:text-6xl mb-2">
              Get Quick Rides,
            </h5>
            <h5 className="text-white text-2xl md:text-4xl lg:text-6xl mb-4">
              Low Fares
            </h5>
            <p className="text-white text-sm md:text-base lg:text-3xl font-normal mb-6 leading-relaxed">
              At Frecfast, we ensure our customers get rides quickly at the most
              affordable prices.
            </p>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-white bg-[#7544A6] hover:bg-[#9e5ddf] font-semibold py-2 px-6 rounded-full border-2 border-[#9F712C] mx-auto md:mx-0 w-fit"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
