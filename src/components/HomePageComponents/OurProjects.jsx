import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Import images
import digitalMarketing from '../../assets/images/image1.png';
import webDevelopment from '../../assets/images/image2.png';
import uiUxDesign from '../../assets/images/image3.png';

const ServicesSection = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const services = [
        {
            icon: digitalMarketing,
            title: "Digital Marketing:",
            description: "Your Growth Engine Powered by Data"
        },
        {
            icon: webDevelopment,
            title: "Web Development:",
            description: "Code to Conversion Seamlessly Built"
        },
        {
            icon: uiUxDesign,
            title: "UI/UX Design:",
            description: "Experiences That Feel Effortless"
        }
    ];

    return (
        <div className="bg-black min-h-screen text-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Section */}
                    <div className="lg:w-2/5">
                        <h1 className="text-5xl font-bold mb-6">Our Services</h1>

                        <p className="text-lg mb-4">
                            Grow smarter, grow faster as we need solutions at the right
                            place and at Smarttrak we are empowering all your digital
                            twin needs.
                        </p>

                        <p className="text-lg mb-8">
                            Our purpose is to deliver excellence in service and execution.
                        </p>

                        {/* Learn More Button with Navigation */}
                        <button
                            onClick={() => navigate('/services')} // Navigate to Services page
                            className="flex items-center gap-2 bg-transparent border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition-all duration-300"
                        >
                            LEARN MORE
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-3/5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-[#0B0F2F] p-8 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-80"
                                >
                                    <div className="mb-8">
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-32 h-32 object-contain"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-medium">{service.title}</h3>
                                        <p className="text-white">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
