import React from "react";
import journey from "../assets/images/PeopleBench.png";

const AboutUs = () => {
    return (
        <>
            {/* Journey Section */}
            <div className="w-full bg-gray-100 rounded-3xl px-4 md:px-8 py-8 md:py-12 mx-auto max-w-6xl mb-8 md:mb-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                    <div className="lg:w-1/2 px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                            From Pixels to Progress
                        </h2>
                        <p className="text-gray-700 text-xs md:text-lg leading-relaxed">
                            Our journey began four years ago when I started freelancing as a graphic designer while pursuing my degree. Over time, I had the opportunity to collaborate with numerous companies, gaining invaluable experience in digital marketing, UI/UX design, and beyond. This hands-on experience allowed me to understand the unique challenges businesses face in today's competitive landscape.
                            <br /><br />After a year of freelancing, I was fortunate to connect with a talented team of sales and marketing experts who shared the same vision: to create a company that delivers exceptional results and helps businesses grow. Together, we turned this dream into reality.
                        </p>
                    </div>

                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                        <img
                            src={journey}
                            alt="Our Journey Illustration"
                            className="w-full h-48 md:h-64 lg:h-72 object-contain rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;