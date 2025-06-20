"use client"

import Link from 'next/link'
import { useState } from 'react'

import CountUp from 'react-countup'

export default function Home() {
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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up animate-delay-100">
                Your Ride, Your Way
              </h1>
              <p className="text-xl text-purple-100 animate-fade-in-up animate-delay-200">
                Experience safe, reliable, and convenient transportation with Frec.
                Book your ride in seconds and travel with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
                <Link href="/#download" className="bg-white text-[rgb(105,58,151)] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift text-center">
                  Download App
                </Link>
                <Link href="/#about" className="border-2 border-white text-white hover:bg-white hover:text-[rgb(105,58,151)] font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift text-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-right animate-delay-200">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 animate-fade-in-up animate-delay-300">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-slow"></div>
                    <span className="text-lg">Available Now</span>
                  </div>
                  <div className="text-3xl font-bold animate-bounce-in animate-delay-400">2 min away</div>
                  <div className="text-purple-100 animate-fade-in-up animate-delay-500">Your driver is on the way</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animate-delay-100">
              Why Choose Frecfast?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              We provide the best ride-sharing experience with safety, reliability, and convenience at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up animate-delay-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 hover-scale">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up animate-delay-400">Safe & Secure</h3>
              <p className="text-gray-600 animate-fade-in-up animate-delay-500">
                All our drivers are verified and vehicles are regularly inspected for your safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up animate-delay-400">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 hover-scale">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up animate-delay-500">Fast & Reliable</h3>
              <p className="text-gray-600 animate-fade-in-up animate-delay-600">
                Get picked up in minutes with our extensive network of drivers available 24/7.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up animate-delay-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 hover-scale">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up animate-delay-600">Affordable Pricing</h3>
              <p className="text-gray-600 animate-fade-in-up animate-delay-700">
                Transparent pricing with no hidden fees. Pay only for what you use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animate-delay-100">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Getting a ride with Frec is simple and straightforward. Just follow these easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up animate-delay-300">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 animate-bounce-in hover-scale">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up animate-delay-400">Book Your Ride</h3>
              <p className="text-gray-600 animate-fade-in-up animate-delay-500">
                Open the app, enter your destination, and choose your ride type.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animate-delay-400">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 animate-bounce-in hover-scale">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up animate-delay-500">Get Matched</h3>
              <p className="text-gray-600 animate-fade-in-up animate-delay-600">
                We'll connect you with a nearby driver who will pick you up in minutes.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animate-delay-500">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 animate-bounce-in hover-scale">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up animate-delay-600">Enjoy Your Ride</h3>
              <p className="text-gray-600 animate-fade-in-up animate-delay-700">
                Sit back, relax, and enjoy your journey. Payment is automatic and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up animate-delay-100">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Join thousands of satisfied customers who trust Frecfast for their daily transportation needs.
          </p>
          <Link href="/download" className="bg-white text-[rgb(105,58,151)] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift inline-block animate-fade-in-up animate-delay-300">
            Download App Now
          </Link>
        </div>
      </section>


      {/* About */}

      {/* Mission & Vision */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="animate-fade-in-left animate-delay-300">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up animate-delay-400">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 animate-fade-in-up animate-delay-500">
                At Frecfast, we believe that transportation should be accessible, reliable, and safe for everyone.
                Our mission is to provide a seamless ride-sharing experience that connects communities and
                makes travel more convenient than ever before.
              </p>
              <p className="text-lg text-gray-600 animate-fade-in-up animate-delay-600">
                We're committed to reducing traffic congestion, lowering carbon emissions, and creating
                economic opportunities for drivers while providing exceptional service to our riders.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover-lift animate-fade-in-right animate-delay-400">
              <h3 className="text-2xl font-semibold mb-4 animate-fade-in-up animate-delay-500">Our Vision</h3>
              <p className="text-gray-600 mb-6 animate-fade-in-up animate-delay-600">
                To become the world's most trusted and preferred transportation platform,
                making mobility accessible to everyone, everywhere.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 hover-lift animate-fade-in-up animate-delay-700">
                  <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse-slow"></div>
                  <span>Global accessibility</span>
                </div>
                <div className="flex items-center space-x-3 hover-lift animate-fade-in-up animate-delay-800">
                  <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse-slow"></div>
                  <span>Sustainable transportation</span>
                </div>
                <div className="flex items-center space-x-3 hover-lift animate-fade-in-up animate-delay-900">
                  <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse-slow"></div>
                  <span>Community connection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up animate-delay-300 hover-lift transition-all duration-500 py-8 px-4">
              <div className="text-4xl font-bold mb-2 animate-bounce-in"><CountUp end={1000000} duration={2} separator="," suffix="+" /></div>
              <p className="text-purple-100 animate-fade-in-up animate-delay-400">Happy Riders</p>
            </div>
            <div className="animate-fade-in-up animate-delay-400 hover-lift transition-all duration-500 py-8 px-4">
              <div className="text-4xl font-bold mb-2 animate-bounce-in"><CountUp end={50000} duration={2} separator="," suffix="+" /></div>
              <p className="text-purple-100 animate-fade-in-up animate-delay-500">Verified Drivers</p>
            </div>
            <div className="animate-fade-in-up animate-delay-400 hover-lift transition-all duration-500 py-8 px-4">
              <div className="text-4xl font-bold mb-2 animate-bounce-in"><CountUp end={100} duration={2} separator="," suffix="+" /></div>
              <p className="text-purple-100 animate-fade-in-up animate-delay-600">Cities Served</p>
            </div>
            <div className="animate-fade-in-up animate-delay-400 hover-lift transition-all duration-500 py-8 px-4">
              <div className="text-4xl font-bold mb-2 animate-bounce-in"><CountUp end={24} duration={2} suffix="/7" /></div>
              <p className="text-purple-100 animate-fade-in-up animate-delay-700">Customer Support</p>
            </div>
          </div>
        </div>
      </section>


     

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Download the Frecfast App</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Get started with Frecfast by downloading our app for your device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift inline-block">Download for iOS</a>
            <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift inline-block">Download for Android</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animate-delay-100">
              App Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Discover what makes the Frecfast app the best choice for your transportation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up animate-delay-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 hover-scale">
                <svg className="w-6 h-6 text-[rgb(105,58,151)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up animate-delay-400">Real-time Tracking</h3>
              <p className="text-gray-600 animate-fade-in-up animate-delay-500">
                Track your driver's location in real-time and know exactly when they'll arrive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up animate-delay-400">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 hover-scale">
                <svg className="w-6 h-6 text-[rgb(105,58,151)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up animate-delay-500">Secure Payments</h3>
              <p className="text-gray-600 animate-fade-in-up animate-delay-600">
                Multiple payment options with secure, encrypted transactions for your peace of mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up animate-delay-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 hover-scale">
                <svg className="w-6 h-6 text-[rgb(105,58,151)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up animate-delay-600">24/7 Support</h3>
              <p className="text-gray-600 animate-fade-in-up animate-delay-700">
                Get help anytime with our round-the-clock customer support team.
              </p>
            </div>
          </div>
        </div>
      </section>






       {/* Contact Form & Info */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left animate-delay-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in-up animate-delay-400">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up animate-delay-500">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover-lift"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="animate-fade-in-up animate-delay-600">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover-lift"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up animate-delay-700">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover-lift"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="animate-fade-in-up animate-delay-800">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover-lift"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="animate-fade-in-up animate-delay-900">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover-lift"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift animate-fade-in-up animate-delay-1000"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-right animate-delay-400">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in-up animate-delay-500">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8 animate-fade-in-up animate-delay-600">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 hover-lift animate-fade-in-up animate-delay-700 hover:bg-white hover:shadow-md transition-all duration-300 rounded-lg p-3 cursor-pointer">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">
                      123 Main Street<br />
                      City, State 12345<br />
                      Country
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift animate-fade-in-up animate-delay-800 hover:bg-white hover:shadow-md transition-all duration-300 rounded-lg p-3 cursor-pointer">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift animate-fade-in-up animate-delay-900 hover:bg-white hover:shadow-md transition-all duration-300 rounded-lg p-3 cursor-pointer">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      support@frec.com<br />
                      info@frec.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
