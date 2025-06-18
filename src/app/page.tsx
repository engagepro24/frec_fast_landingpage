import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
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
                <Link href="/download" className="bg-white text-[rgb(105,58,151)] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift text-center">
                  Download App
                </Link>
                <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-[rgb(105,58,151)] font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift text-center">
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
              Why Choose Frec?
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
            Join thousands of satisfied customers who trust Frec for their daily transportation needs.
          </p>
          <Link href="/download" className="bg-white text-[rgb(105,58,151)] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift inline-block animate-fade-in-up animate-delay-300">
            Download App Now
          </Link>
        </div>
      </section>
    </div>
  )
}
