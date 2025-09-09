"use client"
//   src="https://palanivelstorage.s3.ap-south-1.amazonaws.com/mediaBucketname/11681734799b43dc52db9988877dbb42.mp4"

import React, { useState } from 'react'
// import head from '../../../public/head.png'
import head from '../../../public/benefits.png'
import thumbnail from '../../../public/thumbnail.png'
import Image from 'next/image'
import { Play } from 'lucide-react'

const Fivth = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)

    const handleVideoPause = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const video = e.currentTarget
        // Only return to thumbnail if video is actually paused (not seeking)
        if (video.paused && !video.seeking) {
            setIsPlaying(false)
        }
    }

    const handleVideoRef = (ref: HTMLVideoElement | null) => {
        setVideoRef(ref)
    }


    return (
        <section className=" bg-gradient-to-b from-[#7544A6] to-[#090212] p-5 flex justify-center font-bold ">
            <div className="text-center">
                {/* Heading */}
                {/* <Image
                    src={head}
                    alt="heading"
                    className="w-[300px] md:w-[600px] ml-auto mb-10"
                /> */}

                <div className="w-full max-w-7xl">
                    {/* Heading Image */}
                    <div className="flex justify-end">
                        <Image
                            src={head}
                            alt="heading"
                            className=" ml-auto w-[300px] md:w-[600px] max-h-[150px]  max-w-4xl lg:h-auto mb-10"
                            priority
                        />
                    </div>
                </div>

                {/* Video Thumbnail OR Video */}
                <div className="relative w-full max-w-6xl mx-auto rounded-2xl shadow-lg overflow-hidden">
                    {!isPlaying ? (
                        <>
                            <Image
                                src={thumbnail}
                                alt="video thumbnail"
                                className="w-full h-auto rounded-2xl"
                            />
                            {/* Play Button */}
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="cursor-pointer w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#7544A6] text-white shadow-lg hover:scale-110 transition-transform">
                                    <Play size={32} fill="white" />
                                </div>
                            </button>
                        </>
                    ) : (




                        <video
                            ref={handleVideoRef}
                            className="w-full aspect-video rounded-2xl"
                            // src="https://palanivelstorage.s3.ap-south-1.amazonaws.com/mediaBucketname/11681734799b43dc52db9988877dbb42.mp4"
                            autoPlay
                            controls
                            loop
                            
                            onPause={handleVideoPause}
                        >
                            Your browser does not support the video tag.
                        </video>


                        // <iframe
                        //     className="w-full aspect-video rounded-2xl"
                        //     src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        //     title="YouTube video player"
                        //     frameBorder="0"
                        //     allow="autoplay; fullscreen; picture-in-picture"
                        //     allowFullScreen
                        // ></iframe>


                    )}
                </div>
            </div>
        </section>
    )
}

export default Fivth
