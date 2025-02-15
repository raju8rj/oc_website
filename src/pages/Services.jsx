import React from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';



const Services = () => {
    return (
        <div className="bg-black min-h-screen text-white py-16 sm:py-20">
            {/* Main heading */}
            <div className="text-center mb-12 sm:mb-16 px-4">
                <h1 className="text-6xl sm:text-7xl font-bold mb-4 sm:mb-6">Services</h1>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl">
                    Grow smarter, grow faster as we need Solutions at the right place and at Smarttrak we are
                    empowering all your digital twin needs
                </p>
            </div>

            {/* Service Cards Container */}
            <div className="max-w-7xl mx-auto px-4 space-y-8 sm:space-y-12">
                {/* Digital Marketing Card */}
                <div className="p-6 sm:p-8 lg:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-72 flex justify-center mb-8 md:mb-0">
                            <img
                                src={image1}
                                alt="Digital Marketing"
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div className="text-center md:text-left md:max-w-xl">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                                Digital Marketing:
                                <br />
                                <span className="text-gray-400">Code to Conversion,</span>
                                <br />
                                <span className="text-gray-400">Seamlessly Built</span>
                            </h2>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-xl sm:text-2xl">
                                Where Function Meets Future-Ready Technology
                            </p>
                            <button className="bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-colors text-lg sm:text-xl mx-auto md:mx-0">
                                Learn more
                                <span className="ml-1">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Web Development Card */}
                <div className="p-6 sm:p-8 lg:p-12">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between">
                        <div className="w-full md:w-72 flex justify-center mb-8 md:mb-0">
                            <img
                                src={image2}
                                alt="Web Development"
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div className="text-center md:text-left md:max-w-xl">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                                Web Development:
                                <br />
                                <span className="text-gray-400">Code to Conversion,</span>
                                <br />
                                <span className="text-gray-400">Seamlessly Built</span>
                            </h2>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-xl sm:text-2xl">
                                Where Function Meets Future-Ready Technology
                            </p>
                            <button className="bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-colors text-lg sm:text-xl mx-auto md:mx-0">
                                Learn more
                                <span className="ml-1">→</span>
                            </button>
                        </div>
                    </div>
                </div>


                {/* UI/UX Card */}
                <div className="p-6 sm:p-8 lg:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-72 flex justify-center mb-8 md:mb-0">
                            <img
                                src={image3}
                                alt="UI/UX Design"
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div className="text-center md:text-left md:max-w-xl">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                                UI/UX Design:
                                <br />
                                <span className="text-gray-400">Code to Conversion,</span>
                                <br />
                                <span className="text-gray-400">Seamlessly Built</span>
                            </h2>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-xl sm:text-2xl">
                                Where Function Meets Future-Ready Technology
                            </p>
                            <button className="bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-colors text-lg sm:text-xl mx-auto md:mx-0">
                                Learn more
                                <span className="ml-1">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Graphic Design Card */}
                <div className="p-6 sm:p-8 lg:p-12">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between">
                        <div className="w-full md:w-72 flex justify-center mb-8 md:mb-0">
                            <img
                                src={image4}
                                alt="Graphic Design"
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div className="text-center md:text-left md:max-w-xl">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                                Graphic Design:
                                <br />
                                <span className="text-gray-400">Code to Conversion,</span>
                                <br />
                                <span className="text-gray-400">Seamlessly Built</span>
                            </h2>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-xl sm:text-2xl">
                                Where Function Meets Future-Ready Technology
                            </p>
                            <button className="bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-colors text-lg sm:text-xl mx-auto md:mx-0">
                                Learn more
                                <span className="ml-1">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Marketing Card */}
                <div className="p-6 sm:p-8 lg:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-72 flex justify-center mb-8 md:mb-0">
                            <img
                                src={image5}
                                alt="Product Marketing"
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div className="text-center md:text-left md:max-w-xl">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                                Product Marketing:
                                <br />
                                <span className="text-gray-400">Code to Conversion,</span>
                                <br />
                                <span className="text-gray-400">Seamlessly Built</span>
                            </h2>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-xl sm:text-2xl">
                                Where Function Meets Future-Ready Technology
                            </p>
                            <button className="bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-colors text-lg sm:text-xl mx-auto md:mx-0">
                                Learn more
                                <span className="ml-1">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Web Design Card */}
                <div className="p-6 sm:p-8 lg:p-12">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between">
                        <div className="w-full md:w-72 flex justify-center mb-8 md:mb-0">
                            <img
                                src={image6}
                                alt="Web Design"
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div className="text-center md:text-left md:max-w-xl">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                                Web Design:
                                <br />
                                <span className="text-gray-400">Code to Conversion,</span>
                                <br />
                                <span className="text-gray-400">Seamlessly Built</span>
                            </h2>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-xl sm:text-2xl">
                                Where Function Meets Future-Ready Technology
                            </p>
                            <button className="bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-colors text-lg sm:text-xl mx-auto md:mx-0">
                                Learn more
                                <span className="ml-1">→</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};



export default Services;