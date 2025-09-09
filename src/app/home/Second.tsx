import React from 'react'
import bike from '../../../public/bike.gif'
import auto from '../../../public/auto.gif'
import car from '../../../public/car.gif'
import packages from '../../../public/package.gif'
import Image from 'next/image'
import Link from 'next/link'
const cardData = [
    {
        icon: bike,
        head: 'Bike',
        subhead: 'Quick and affordable bike rides to get you to your destination on time. Perfect for beating traffic and saving costs.'
    },
    {
        icon: auto,
        head: 'Auto',
        subhead: 'Convenient auto rickshaw booking for short trips with reliable drivers and fair pricing.'
    },
    {
        icon: car,
        head: 'Car',
        subhead: 'Comfortable and safe car rides for your business trips, family outings, or everyday travel needs.'
    },
    {
        icon: packages,
        head: 'Parcel',
        subhead: 'Fast and secure parcel delivery right to your doorstep, ensuring your packages reach safely and on time.'
    },
]

const cardData2 = [
    {
        head: '35K',
        subhead: 'No.of Captians '
    },
    {
        head: '20m+',
        subhead: 'Worldwide users'
    },
    {
        head: '15m+',
        subhead: 'Satisfied users'
    },
    {
        head: '24Hrs',
        subhead: 'Support hours'
    },
]

const Second = () => {
    return (
        <section
            className="bg-[#10041F] flex items-center justify-center pt-10 p-3 "
        >
            <div className="text-center max-w-7xl px-4">

                <h5 className="text-[#AF60FF] text-xl font-bold">
                    Features
                </h5>


                <h5 className="text-xl md:text-4xl font-bold mt-2 text-white">
                  <span className="text-gold-gradient">   Our Services</span> which we provide
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 p-4">
                    
                    {cardData.map((card, index) => (

                        <div
                            key={index}
                            className="flex flex-col items-start text-start border-2 border-[#9F712C] rounded-4xl p-2 bg-[#211B2A] hover:scale-105 transition-transform"
                        >
                            {/* <Link href={`/service/${card.head}`} key={index}> */}
                                <Image src={card.icon} alt={card.head} width={80} height={80} />
                                <h3 className="text-white text-lg font-semibold  px-4">{card.head}</h3>
                                <p className="text-gray-300 text-sm mt-2 px-4">{card.subhead}</p>
                            {/* </Link> */}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:my-6 p-4 border-t-1 ">
                    {cardData2.map((card2, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 font-bold"
                        >
                            <h3 className="text-white text-2xl md:text-4xl  mt-4 ">{card2.head}</h3>
                            <p className="text-[#C2972A] text-md mt-2 text-gold-gradient">{card2.subhead}</p>
                        </div>

                    ))}
                </div>

            </div>
        </section>
    )
}

export default Second