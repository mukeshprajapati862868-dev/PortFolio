import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">Explore My Projects</h1>
        <Link to="/" className="text-blue-600 hover:underline text-lg">
          Back to Home
        </Link>
      </div>

      <p className="mb-6 text-lg text-gray-800">
        Welcome to the Project Gallery! Here are a few of the applications I’ve
        built, each with unique features and functionalities. Let’s dive in!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1: Bus Ticket Booking */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=60"
            alt="Bus Ticket Booking"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Bus Ticket Booking</h3>
            <p className="text-gray-700 text-base mb-4">
              A comprehensive full-stack React application designed for booking bus tickets, complete with real-time seat selection, passenger details, fare calculation, and booking confirmation. Book your next trip hassle-free!
            </p>
            <a
              href="https://bus-ticket-jcw6-kx4u6k9fl-mukeshprajapatis-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Book Your Ticket
            </a>
          </div>
        </div>

        {/* Project 2: E-Commerce Website */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60"
            alt="E-Commerce Website"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-green-600">E-Commerce Website</h3>
            <p className="text-gray-700 text-base mb-4">
              An elegant and responsive e-commerce site built with React, featuring product search, a smooth shopping cart experience, secure checkout flow, and user login/signup. It’s designed to provide a seamless shopping experience for users!
            </p>
            <a
              href="http://e-commerce-shopora-i0s5ji2u2-mukeshprajapatis-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Project 3: Food Delivery App */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60"
            alt="Food Delivery App"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-red-600">Food Delivery App</h3>
            <p className="text-gray-700 text-base mb-4">
              An intuitive and user-friendly food delivery app that allows users to browse menus, place orders, and track them in real-time. Admin controls to manage food items and provide a smooth experience for both users and restaurant managers.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Order Your Meal
            </button>
          </div>
        </div>

        {/* Project 4: Academic Portal */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-262174,resizemode-75,msid-77837149/news/politics-and-nation/iit-students-alumni-launch-portal-to-help-jee-neet-candidates-in-need-of-transport-facility.jpg"
            alt="Academic Portal"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Academic Portal</h3>
            <p className="text-gray-700 text-base mb-4">
              A dynamic academic portal designed for students and faculty to manage courses, grades, and assignments. Built with React, this platform streamlines academic workflows and enhances communication between students and instructors.
            </p>
            <a
              href="https://climaxcomputerclasses.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              Explore the Portal
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Feel free to explore these projects, interact with the features, and let me know your thoughts! 😊
        </p>
      </div>
    </div>
  );
};

export default Project;
