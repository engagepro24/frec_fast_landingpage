"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import phnoe from '../../../public/phnoe.png'
import message from '../../../public/message.png'
import location from '../../../public/location.png'
import Link from '../../../public/Link.png'
import Link1 from '../../../public/Link1.png'
import Link2 from '../../../public/Link2.png'
import Link3 from '../../../public/Link3.png'
import deli from '../../../public/deli.png'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const contactInfo = [
        { icon: phnoe, label: '(00) 875 784 5682' },
        { icon: message, label: 'saastyinfo@gmail.com' },
        { icon: location, label: '238, Arimantab, Moska - USA.' }
    ]

    const linkicon = [
        { icon: Link },
        { icon: Link1 },
        { icon: Link2 },
        { icon: Link3 },
    ]

    return (
        <section className="bg-[#10041F] flex items-center justify-center p-5 mx-auto max-w-6xl">
            <div className="w-full  flex flex-col  justify-center lg:flex-row gap-10 mx-auto pt-12 lg:items-start">

                {/* Contact Information */}
                <div className="flex-1 space-y-8 animate-fade-in-right animate-delay-400">
                    <div>
                        <h2 className="text-3xl font-bold text-gold-gradient mb-4 animate-fade-in-up animate-delay-500">
                            Contact Info
                        </h2>
                        <p className="text-lg text-white mb-8 animate-fade-in-up animate-delay-600">
                            Connect with us through our website’s chat feature for any inquiries or assistance.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <Image src={info.icon} alt="icon" width={20} height={20} />
                                <p className="text-white text-lg font-medium">
                                    {info.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-bold text-gold-gradient mb-4 animate-fade-in-up animate-delay-500">
                        We are on social network
                    </h2>

                    <div className="flex items-center gap-3">
                        {linkicon.map((lin, index) => (
                            <div key={index}>
                                <Image src={lin.icon} alt="icon" width={40} height={40} />
                            </div>
                        ))}
                    </div>

                    <Image src={deli} alt="icon" width={240} height={240} />

                </div>

                {/* Contact Form */}

                <div className="rounded-2xl flex-1 p-8  animate-fade-in-left animate-delay-300 text-white bg-[linear-gradient(124.12deg,#7544A6_-0.68%,#411B66_101.49%)]">
                    <h2 className="text-3xl font-bold  mb-8 animate-fade-in-up animate-delay-400">
                        Contact Us
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="animate-fade-in-up animate-delay-500">
                                <label htmlFor="name" className="block text-sm font-medium  mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-white  text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:scale-105"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="animate-fade-in-up animate-delay-600">
                                <label htmlFor="email" className="block text-sm font-medium  mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-white text-black  w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:scale-105"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="animate-fade-in-up animate-delay-700">
                                <label htmlFor="phone" className="block text-sm font-medium  mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="bg-white text-black  w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:scale-105"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="animate-fade-in-up animate-delay-800">
                                <label htmlFor="subject" className="block text-sm font-medium  mb-2">
                                    Subject *
                                </label>
                                 <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:scale-105"
                                    placeholder="Enter subject"
                                />
                                {/* <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:scale-105"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Customer Support</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="feedback">Feedback</option>
                                </select> */}
                            </div>
                        </div>

                        <div className="animate-fade-in-up animate-delay-900">
                            <label htmlFor="message" className="block text-sm font-medium  mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:scale-105"
                                placeholder="Tell us how we can help you..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full cursor-pointer md:w-[200px] bg-gold hover:bg-purple-700 text-[#6B1580] font-semibold py-4 px-8 rounded-4xl transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-1000"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
