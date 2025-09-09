import React from 'react'
import greenmap from '../../../public/greenmap.png'
import redmap from '../../../public/redmap.png'
import phone from '../../../public/phone.png'
import phslide from '../../../public/phslide.png'
import Image from 'next/image'
import LocationPickFixed from "../../components/LocationPickFixed"
import Slider from "react-slick"; // 👈 import the slider component
// Import only core slick CSS (skip theme for Tailwind styling)
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const phoneImages = [phslide, phslide, phslide]; // 👈 you can add more images here

const First = () => {
  // Slider settings
  const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,

};


  return (
    <section
      id="home"
      className="bg-[#411B66] flex items-center justify-center pt-5 md:pt-10 p-5 "
    >
      <div className="text-center max-w-7xl px-4">
        <h5 className="text-white text-3xl md:text-6xl font-bold ">
          Your All-in-One <span className="text-gold-gradient">Ride</span>
        </h5>
        <h5 className="text-gold-gradient text-3xl md:text-6xl font-bold">& Delivery App</h5>
        <p className="text-[#FFFFFF] mt-2 text-sm md:text-md font-bold">
          From bike, auto, and car rides to fast, secure parcel deliveries —
          everything you need in one reliable app.
        </p>
        <LocationPickFixed />

        {/* <div className="flex justify-center mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2 border-2 border-[#AF60FF] rounded-full px-4 py-2">
                            <Image src={greenmap} alt="pickup" width={20} height={20} />
                            <p className="text-white text-sm md:text-md">Enter pick up location</p>
                        </div>
                        <div className="flex items-center gap-2 border-2 border-[#AF60FF] rounded-full px-4 py-2">
                            <Image src={redmap} alt="drop" width={20} height={20} />
                            <p className="text-white text-sm md:text-md">Enter Drop location</p>
                        </div>
                        <div className="md:max-w-[125px] flex items-center justify-center bg-gold rounded-full px-2 py-2">
                            <p className="text-[#6B1580] text-sm md:text-md cursor-poiner">Book Ride</p>
                        </div>
                    </div>
                 </div>  */}


        {/* Slider Section */}
        <div className="mt-8 max-w-[500px] mx-auto relative pb-6">
          {/* Phone frame */}
          <Image
            src={phone}
            alt="Phone frame"
            className="w-full h-full "
            priority
          />

          {/* Phone screen area */}
          <div className="absolute top-[6%] left-[28%] w-[38%] h-[96%] overflow-hidden ">
            <Slider {...settings} className="w-full h-full   ">
              {phoneImages.map((img, index) => (
                <div key={index} className="w-full h-full flex items-center justify-center ">
                  <Image
                    src={img}
                    alt={`phone-${index}`}
                    className="w-full h-[345px]  "
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </section>
  )
}

export default First
