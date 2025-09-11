export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#411B66] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animate-delay-100">Privacy Policy</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 animate-fade-in-up animate-delay-300">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                Frec ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our ride-sharing service.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-400">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li className="hover-lift">Name, email address, and phone number</li>
                <li className="hover-lift">Payment information and billing address</li>
                <li className="hover-lift">Profile information and preferences</li>
                <li className="hover-lift">Communications with our customer support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location Information</h3>
              <p className="text-gray-600 mb-4">
                To provide our ride-sharing service, we collect location information including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li className="hover-lift">Your current location when requesting a ride</li>
                <li className="hover-lift">Pickup and destination addresses</li>
                <li className="hover-lift">Real-time location during your trip</li>
                <li className="hover-lift">Location history for trip records</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Device Information</h3>
              <p className="text-gray-600 mb-4">
                We automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li className="hover-lift">Device type and operating system</li>
                <li className="hover-lift">IP address and browser type</li>
                <li className="hover-lift">App usage data and crash reports</li>
                <li className="hover-lift">Device identifiers and settings</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li className="hover-lift">Provide and maintain our ride-sharing service</li>
                <li className="hover-lift">Process payments and transactions</li>
                <li className="hover-lift">Connect you with drivers and facilitate rides</li>
                <li className="hover-lift">Send you service updates and notifications</li>
                <li className="hover-lift">Improve our service and develop new features</li>
                <li className="hover-lift">Ensure safety and security of our platform</li>
                <li className="hover-lift">Comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">With Drivers</h3>
              <p className="text-gray-600 mb-4">
                We share necessary information with drivers to facilitate your ride, including your name, pickup location, and destination.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Providers</h3>
              <p className="text-gray-600 mb-4">
                We work with trusted third-party service providers who help us operate our service, including payment processors, cloud storage providers, and analytics services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Requirements</h3>
              <p className="text-gray-600 mb-4">
                We may disclose your information if required by law or to protect our rights, property, or safety, or that of our users or the public.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-700">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li className="hover-lift">Encryption of data in transit and at rest</li>
                <li className="hover-lift">Regular security assessments and updates</li>
                <li className="hover-lift">Access controls and authentication measures</li>
                <li className="hover-lift">Employee training on data protection</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-800">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li className="hover-lift"><strong>Access:</strong> Request access to your personal information</li>
                <li className="hover-lift"><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li className="hover-lift"><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li className="hover-lift"><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li className="hover-lift"><strong>Opt-out:</strong> Opt out of marketing communications</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-900">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg hover-lift">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> privacy@frec.com
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 123 Main Street, City, State 12345, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 