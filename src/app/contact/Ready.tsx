'use client';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import shape1 from '../../../public/shape-1.png';
import shape2 from '../../../public/shape-2.png';
import Image from 'next/image';

const Ready = () => {
  return (
    <div  className="bg-[#090212]">
    <div className="bg-[#090212] relative p-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-6">

      {/* Top/side shapes */}
      <div className="absolute top-[60%] right-[5%] md:right-[20%] w-12 h-12">
        <Image src={shape1} alt="icon" />
      </div>
      <div className="absolute top-[60%] left-[5%] md:left-[20%] w-12 h-12">
        <Image src={shape2} alt="icon" />
      </div>

      {/* Heading */}
      <h1 className="text-gold-gradient mt-5 font-bold text-3xl sm:text-4xl md:text-5xl">
        Ready to take plan? just a
      </h1>
      <h2 className="text-white font-bold text-2xl sm:text-3xl">Matter of one click</h2>
      {/* <h6 className="text-white text-xs sm:text-sm">Subscribe to get daily updated from us !!!</h6> */}

      {/* Email input */}
      {/* <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 animate-fade-in-right animate-delay-300 mt-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full md:w-[350px] px-4 py-2 rounded-full border border-[#F6ED87] focus:outline-none focus:border-purple-500 bg-white text-black"
        />
        <button
          type="submit"
          className="bg-gold md:w-[100px] w-full text-[#6B1580] flex items-center justify-center px-3 py-2 rounded-full transition hover:scale-105"
        >
          Send
        </button>
      </div> */}

      {/* <h6 className="text-white mt-2 text-xs sm:text-sm">
        Already a member? <span className="text-[#6B1580]">Sign in</span>
      </h6> */}
    </div>
    </div>

  );
};

export default Ready;
