import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get input values
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const phone = e.target[3].value;

    // Construct the WhatsApp message
    const message = `Hello, I am ${firstName} ${lastName}. My email is ${email} and my phone number is ${phone}. I would like to get in touch.`;

    // Encode the message and redirect to WhatsApp
    const whatsappURL = `https://wa.me/918867570215?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center mb-8 sm:mb-12">
          Contact Us
        </h1>

        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Information Section */}
          <div className="bg-[#0A0B1A] rounded-xl p-4 sm:p-6 lg:p-8">
            <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
              Contact Information
            </h2>
            <p className="text-gray-400 mb-6 sm:mb-8">
              Say something to start a chat!
            </p>

            <div className="space-y-6 sm:space-y-8 mb-8">
              <div className="flex items-center text-white gap-4">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 88675 70215</span>
              </div>

              <div className="flex items-center text-white gap-4">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">
                  pixelamedia@gmail.com
                </span>
              </div>

              <div className="flex items-start text-white gap-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base leading-tight">
                  Hassan, 573201
                </span>
              </div>
            </div>

            <div className="flex justify-start gap-4">
              <a
                href="https://www.facebook.com/share/1A3CR5mwDW/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/pixelamedia.in?igsh=MWptMzlyY3J1dXU2OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://w.app/pixelamediahassan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="+91 88675 70215"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
