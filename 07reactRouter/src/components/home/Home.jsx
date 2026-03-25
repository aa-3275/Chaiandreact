import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-orange-50 overflow-hidden">
        <div className="container mx-auto px-6 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <div className="space-y-8 text-center lg:text-left z-10">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
                Work Smarter, <br />
                Not <span className="text-orange-700">Harder</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Unlock your potential with our advanced tools. Seamlessly
                collaborate, manage projects, and boost productivity from
                anywhere in the world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-orange-700 rounded-full hover:bg-orange-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700"
                  to="/"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Download App
                </Link>
                <Link
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-orange-700 transition-all duration-200 bg-orange-100 rounded-full hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700"
                  to="/about"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Side: Hero Image */}
            <div className="relative lg:block">
              {/* Decorative Blob */}
              <div className="absolute top-0 -right-4 -z-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 left-20 -z-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

              <img
                className="relative w-full max-w-lg mx-auto transform transition-transform hover:scale-105 duration-500 drop-shadow-2xl rounded-2xl"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Team working"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURES SECTION (New Added) ================= */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Why People Love Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="w-14 h-14 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600">
                Experience lightning-fast speeds with our optimized engine.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="w-14 h-14 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
              <p className="text-gray-600">
                Your data is protected with enterprise-grade security.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="w-14 h-14 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative</h3>
              <p className="text-gray-600">
                Work together with your team in real-time without lag.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM PROMO ================= */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to get started?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Join thousands of users who are already building the future with
                our platform. Download the app today.
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Get Started Now
              </button>
            </div>
            <div className="relative h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                alt="Meeting"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
