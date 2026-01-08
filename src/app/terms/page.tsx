"use client";

import { useState, useEffect } from "react";

interface TermsResponse {
  message: string;
  data: {
    _id: string;
    termsAndConditionCustomer: string;
  };
}

export default function Terms() {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.frecfast.com/api/customer/termsAndConditonCustomer"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch terms and conditions");
        }

        const data: TermsResponse = await response.json();
        
        if (data.data && data.data.termsAndConditionCustomer) {
          setContent(data.data.termsAndConditionCustomer);
        } else {
          throw new Error("No content found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching terms:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#411B66] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animate-delay-100">
            Terms & Conditions
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Please read these terms and conditions carefully before using our service.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {loading && (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#411B66] mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading terms and conditions...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <p className="text-red-800">
                  <strong>Error:</strong> {error}
                </p>
                <p className="text-red-600 mt-2 text-sm">
                  Please try refreshing the page or contact support if the problem persists.
                </p>
              </div>
            )}

            {!loading && !error && content && (
              <div
                className="animate-fade-in-up animate-delay-300 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:text-gray-600 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_li]:text-gray-600 [&_li]:mb-2 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-gray-900 [&_br]:mb-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}

            {!loading && !error && !content && (
              <div className="text-center py-20">
                <p className="text-gray-600">No content available at this time.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 