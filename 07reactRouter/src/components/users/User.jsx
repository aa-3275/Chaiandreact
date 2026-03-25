import React from "react";
import { useParams, Link } from "react-router-dom";

export default function User() {
  const { userid } = useParams();

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col justify-center items-center py-10">
      {/* Profile Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
        {/* Top Colored Banner */}
        <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-600"></div>

        {/* Profile Image (Avatar) */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <img
            // Ye URL userid ke hisab se alag photo generate karega
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userid}`}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-white bg-gray-100 shadow-md"
          />
        </div>

        {/* User Content */}
        <div className="px-6 pt-20 pb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 capitalize">
            User: <span className="text-orange-600">{userid}</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Full Stack Developer</p>
          <p className="text-gray-400 text-sm mt-4 px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Passionate
            about coding and building modern web applications.
          </p>

          {/* Social Stats */}
          <div className="flex justify-center gap-8 mt-8 border-t pt-6 border-gray-100">
            <div className="text-center">
              <span className="block text-xl font-bold text-gray-800">
                2.5k
              </span>
              <span className="text-sm text-gray-500">Followers</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold text-gray-800">450</span>
              <span className="text-sm text-gray-500">Following</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold text-gray-800">89</span>
              <span className="text-sm text-gray-500">Projects</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-orange-500/30">
              Follow
            </button>
            <Link
              to="/"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
