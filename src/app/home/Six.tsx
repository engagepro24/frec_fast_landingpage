import React from "react";
import siximage from "../../../public/siximage.png";
import shape from "../../../public/shape.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Six = () => {
    return (
        <section className="bg-[#10041F] relative overflow-hidden">
            {/* Top shape */}
            <div className="absolute top-[4rem] lg:top-[10rem] right-[8rem] z-10">
                <Image src={shape} alt="shape" width={50} height={50} />
            </div>

            <div className="flex flex-col md:flex-row  relative z-20 mx-auto">
                {/* Left image */}
                <div className="relative md:w-[50%] ">
                    <Image className="rounded-r-2xl"
                        src={siximage}
                        alt="image"
                        // fill
                        quality={100}
                        priority
                    />
                </div>


                {/* Content */}
                <div className="md:w-[40%] flex flex-col md:text-left p-4 md:p-16 justify-center items-center md:items-start">
                    <h5 className="text-gold-gradient text-2xl md:text-4xl lg:text-6xl mb-1 font-bold">
                        Safety for
                    </h5>
                    <h5 className="text-white text-2xl md:text-4xl lg:text-6xl mb-2  lg:mb-4 font-bold">All</h5>
                    <p className="text-white text-sm md:text-base lg:text-2xl mb-6 leading-relaxed">
                        At Frecfast, your safety is our highest priority. From the moment
                        you book a ride to the time you reach your destination, we are
                        committed to providing a secure, reliable, and comfortable travel
                        experience. Every measure we take is designed to make your journey
                        worry-free, so you can ride with complete peace of mind.
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
        </section>
    );
};

export default Six;
