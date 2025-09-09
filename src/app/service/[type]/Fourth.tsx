import React from "react";
import building from "../../../../public/building.png";
import apple from "../../../../public/apple.png";
import playstore from "../../../../public/playstore.png";
import menmobile from "../../../../public/menmobile.png";
import Image from "next/image";

interface FirstProps {
  type: string
}

const Fourth: React.FC<FirstProps> = ({ type }) => {    return (
        <div className="bg-[#10041F]">
            <div className='bg-[#090212] h-[100px] md:h-[250px]'></div>
            <div
                className="bg-[#7544A6] mx-auto max-w-6xl h-auto -mt-20 md:-mt-28 rounded-2xl shadow-lg"
                style={{
                    backgroundImage: `url(${building.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-10 md:py-12">

                    <div className="text-center md:text-left md:w-2/3 space-y-4">
                        <h5 className="text-[#F6ED87] text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                            Download{" "}
                            <span className="text-white">our mobile app.</span>
                        </h5>

                        <p className="text-white text-sm sm:text-base md:text-lg">
                            Your app is your tool for better solution with your followers,
                            making it easier for them to keep up to date.
                        </p>

                        <div className="flex justify-center md:justify-start gap-3">
                            <Image
                                src={playstore}
                                alt="playstore"
                                width={120}
                                height={120}
                                className="w-28 sm:w-32"
                            />
                            <Image
                                src={apple}
                                alt="apple"
                                width={120}
                                height={120}
                                className="w-28 sm:w-32"
                            />
                        </div>
                    </div>

                    <div className="mt-6 md:-mt-36 flex justify-center mr-0 md:-mr-10 lg:-mr-20">
                        <Image
                            src={menmobile}
                            alt="mobile"
                            width={250}
                            height={250}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Fourth;
