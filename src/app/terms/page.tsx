export default function Terms() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#411B66] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animate-delay-100">Terms & Conditions</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Please read these terms and conditions carefully before using our service.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 animate-fade-in-up animate-delay-300">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                These Terms and Conditions ("Terms") govern your use of the Frec ride-sharing service operated by Frec ("we," "our," or "us"). By accessing or using our service, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-400">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By using our service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our service.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                Frec provides a technology platform that connects riders with independent drivers who provide transportation services. We do not provide transportation services ourselves.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Account Creation</h3>
              <p className="text-gray-600 mb-4">
                To use our service, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Account Security</h3>
              <p className="text-gray-600 mb-4">
                You are responsible for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-700">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Conduct</h2>
              <p className="text-gray-600 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li className="hover-lift">Use our service for any illegal or unauthorized purpose</li>
                <li className="hover-lift">Violate any applicable laws or regulations</li>
                <li className="hover-lift">Interfere with or disrupt our service or servers</li>
                <li className="hover-lift">Attempt to gain unauthorized access to our systems</li>
                <li className="hover-lift">Harass, abuse, or harm other users or drivers</li>
                <li className="hover-lift">Provide false or misleading information</li>
                <li className="hover-lift">Use our service to transport illegal items or substances</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-800">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Pricing</h3>
              <p className="text-gray-600 mb-4">
                All fares are calculated based on distance, time, and demand. Prices are subject to change without notice. You will be charged the fare displayed at the time of booking.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Payment Methods</h3>
              <p className="text-gray-600 mb-4">
                We accept various payment methods including credit cards, debit cards, and digital wallets. Payment is processed automatically after each ride.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.3 Cancellation Fees</h3>
              <p className="text-gray-600 mb-4">
                Cancellation fees may apply if you cancel a ride after a driver has been assigned or if you fail to show up for your ride.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-900">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Safety and Security</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1 Driver Verification</h3>
              <p className="text-gray-600 mb-4">
                All drivers undergo background checks and vehicle inspections. However, we cannot guarantee the safety of any transportation service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2 Emergency Situations</h3>
              <p className="text-gray-600 mb-4">
                In case of emergency, contact local emergency services immediately. Our service includes emergency features for your safety.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-1000">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Frec shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animate-delay-1100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg hover-lift">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> legal@frec.com
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