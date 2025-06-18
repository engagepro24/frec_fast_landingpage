export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Frec</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We're revolutionizing transportation by connecting people with reliable, safe, and affordable rides.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Frec, we believe that transportation should be accessible, reliable, and safe for everyone. 
                Our mission is to provide a seamless ride-sharing experience that connects communities and 
                makes travel more convenient than ever before.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to reducing traffic congestion, lowering carbon emissions, and creating 
                economic opportunities for drivers while providing exceptional service to our riders.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To become the world's most trusted and preferred transportation platform, 
                making mobility accessible to everyone, everywhere.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span>Global accessibility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span>Sustainable transportation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
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
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <p className="text-purple-100">Happy Riders</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-purple-100">Verified Drivers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-purple-100">Cities Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-purple-100">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 