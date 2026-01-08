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
                className="terms-content animate-fade-in-up animate-delay-300"
                dangerouslySetInnerHTML={{ __html: content }}
                style={{
                  color: "#374151",
                }}
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

      <style jsx global>{`
        .terms-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .terms-content p {
          color: #4b5563;
          margin-bottom: 1rem;
          line-height: 1.75;
        }

        .terms-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .terms-content li {
          color: #4b5563;
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }

        .terms-content strong {
          font-weight: 600;
          color: #111827;
        }

        .terms-content br {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
} 