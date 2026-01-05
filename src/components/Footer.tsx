"use client";
import Link from "next/link";
import send from "../../public/send.png";
import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import AppLogo from "../../public/app_logo.png";
import footerShape from "../../public/footer-shape.png";
import topNavigate from "../../public/topNavigate.png";
import Image from "next/image";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative bg-[#10041F] text-white">
      {/* <div
        style={{
          backgroundImage: `url(${footerShape.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
        className="absolute w-full h-[100px] sm:h-[100px] md:h-[150px]  top-[40%] right-[10%] md:right-[10%] lg:right-[25%]"
      /> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in-left animate-delay-100 ">
            <div className="flex items-center space-x-2 hover-scale">
              <Link
                href="/"
                className="flex items-center space-x-2 hover-scale bg-transparent"
              >
                {/* <Image src={AppLogo} alt="Frecfast logo" className='w-[80px] h-[80px]' /> */}
                {/* <Image src={logo2} alt="Frecfast logo" width={60} height={60} /> */}
              </Link>
            </div>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod
              tempor.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-white hover:text-purple-500 transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 
        5.373-12 12c0 5.99 4.388 10.954 10.125 
        11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
        1.792-4.669 4.533-4.669 1.312 0 2.686.235 
        2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 
        1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
        23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="text-white hover:text-purple-500 transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 
        4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 
        1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 
        4.067 6.13 1.64 3.162a4.822 4.822 0 
        00-.666 2.475c0 1.71.87 3.213 2.188 
        4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 
        4.923 0 003.946 4.827 4.996 4.996 0 
        01-2.212.085 4.936 4.936 0 004.604 
        3.417 9.867 9.867 0 01-6.102 2.105c-.39 
        0-.779-.023-1.17-.067a13.995 13.995 0 
        007.557 2.209c9.053 0 13.998-7.496 
        13.998-13.985 0-.21 0-.42-.015-.63A9.935 
        9.935 0 0024 4.59z"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-white hover:text-purple-500 transition-all duration-300 hover-scale"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="text-white hover:text-purple-500 transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.498 6.186a2.974 2.974 
        0 00-2.09-2.103C19.691 3.5 12 3.5 
        12 3.5s-7.691 0-9.408.583a2.974 2.974 
        0 00-2.09 2.103C0 7.902 0 12 
        0 12s0 4.098.502 5.814a2.974 2.974 
        0 002.09 2.103C4.309 20.5 12 
        20.5 12 20.5s7.691 0 9.408-.583a2.974 
        2.974 0 002.09-2.103C24 16.098 24 
        12 24 12s0-4.098-.502-5.814zM9.75 
        15.02V8.98L15.5 12l-5.75 3.02z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up animate-delay-200">
            <h3 className="text-lg font-semibold">My Account</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-purple-500 transition-all duration-300 hover-lift"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#second"
                  className="text-gray-300 hover:text-purple-500 transition-all duration-300 hover-lift"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#third"
                  className="text-gray-300 hover:text-purple-500 transition-all duration-300 hover-lift"
                >
                  Customer
                </Link>
              </li>
              <li>
                <Link
                  href="/#fourth"
                  className="text-gray-300 hover:text-purple-500 transition-all duration-300 hover-lift"
                >
                  Captian
                </Link>
              </li>
              <li>
                <Link
                  href="/#fivth"
                  className="text-gray-300 hover:text-purple-500 transition-all duration-300 hover-lift"
                >
                  Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-right animate-delay-300">
            <h3 className="text-lg font-semibold">Resource</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 ">
                <Link href="/privacy" >
                
                <span className="text-gray-300">Privacy Policy</span>
                </Link>
              </div>
              <div className="flex items-center space-x-3 ">
                <Link href="/terms" >
                  <span className="text-gray-300">Terms and Conditions</span>
                </Link>
              </div>
              {/* <div className="flex items-center space-x-3 hover-lift">
                <span className="text-gray-300">Customer Terms - Cabs and Auto</span>
              </div>
              <div className="flex items-center space-x-3 hover-lift">
                <span className="text-gray-300">Corporate Affairs</span>
              </div>
              <div className="flex items-center space-x-3 hover-lift">
                <span className="text-gray-300">Captain Terms - Bike Taxi</span>
              </div>
              <div className="flex items-center space-x-3 hover-lift">
                <span className="text-gray-300">Captain Terms - Cabs and Auto</span>
              </div> */}
            </div>
          </div>

          <div className="space-y-4 animate-fade-in-right animate-delay-300">
            {/* <h3 className="text-lg font-semibold text-white">Subscribe us</h3>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 pr-12 rounded-lg border border-[#F6ED87] focus:outline-none focus:border-purple-500 bg-transparent text-white"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center justify-center px-3 py-0.5 bg-purple-600 rounded-r-lg hover:bg-purple-700 transition"
              >
                <Image src={send} alt="send" width={20} height={20} />
              </button>
            </div> */}
            <div
              style={{
                backgroundImage: `url(${footerShape.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              className=" w-full h-[110px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF1A] p-5 animate-fade-in-up animate-delay-400">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#FFFFFF]">
              Copyright 2025 <span className="text-[#AF60FF]">Frecfast</span> |
              All Right Reserved
            </p>
            <div className="flex space-x-2 mt-4 md:mt-0 items-center">
              {/* <Link
                href="/privacy"
                className="text-[#FFFFFF] hover:text-purple-500 transition-all duration-300 hover-lift"
              >
                Privacy Policy
              </Link>

              <div>/</div>

              <Link
                href="/terms"
                className="text-[#FFFFFF] hover:text-purple-500 transition-all duration-300 hover-lift"
              >
                Terms & Conditions
              </Link> */}

              <div>
                <button
                  onClick={scrollToTop}
                  className="cursor-pointer hover:scale-110 transition-transform"
                  aria-label="Back to top"
                >
                  <Image
                    src={topNavigate}
                    alt="Back to top"
                    width={40}
                    height={40}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
