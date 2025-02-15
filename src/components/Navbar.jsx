import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#292E46] w-full py-5">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo on the left corner */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="w-12 h-12" />
                </div>

                {/* Desktop Menu - Centered and extending till right */}
                <div className="hidden md:flex flex-grow justify-center">
                    <div className="px-6 py-1 flex justify-around items-center space-x-10 w-full max-w-4xl">
                        <Link to="/" className="text-gray-100 hover:text-white px-3 py-2">HOME</Link>
                        <Link to="/about-us" className="text-gray-100 hover:text-white px-3 py-2">ABOUT US</Link>
                        <Link to="/testimonials" className="text-gray-100 hover:text-white px-3 py-2">TESTIMONIALS</Link>
                        <Link to="/services" className="text-gray-100 hover:text-white px-3 py-2">SERVICES</Link>
                        <Link to="/contact-us" className="text-gray-100 hover:text-white px-3 py-2">CONTACT US</Link>
                    </div>
                </div>

                {/* Mobile menu button on the right corner */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Appears on the right */}
            {isOpen && (
                <div className="md:hidden flex justify-end">
                    <div className="bg-gray-200 rounded-lg mt-2 w-2/3">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className="text-gray-900 hover:text-black block px-3 py-2" onClick={() => setIsOpen(false)}>HOME</Link>
                            <Link to="/about-us" className="text-gray-900 hover:text-black block px-3 py-2" onClick={() => setIsOpen(false)}>ABOUT US</Link>
                            <Link to="/testimonials" className="text-gray-900 hover:text-black block px-3 py-2" onClick={() => setIsOpen(false)}>TESTIMONIALS</Link>
                            <Link to="/services" className="text-gray-900 hover:text-black block px-3 py-2" onClick={() => setIsOpen(false)}>SERVICES</Link>
                            <Link to="/contact-us" className="text-gray-900 hover:text-black block px-3 py-2" onClick={() => setIsOpen(false)}>CONTACT US</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
