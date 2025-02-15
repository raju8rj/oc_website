import React from 'react';
import Rocket from '../../assets/images/Rocket.png';

const HeroAbout = () => {
    return (
        <div className="bg-[#080915] min-h-screen w-full flex items-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left side with rocket and gradient effect */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-center relative">
                    {/* Gradient background */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] opacity-30"
                        style={{
                            background: 'radial-gradient(circle, rgba(88, 28, 235, 0.8) 0%, rgba(37, 7, 128, 0.4) 45%, rgba(8, 9, 21, 0) 70%)',
                        }}
                    />

                    {/* Rocket with animation */}
                    <div className="relative z-10 animate-[bounce_3s_ease-in-out_infinite]">
                        <img
                            src={Rocket}
                            alt="Rocket illustration"
                            className="w-48 md:w-64 lg:w-80"
                        />
                    </div>
                </div>

                {/* Right side with content */}
                <div className="w-full md:w-1/2 text-white relative z-10">
                    <h1 className="text-5xl md:text-4xl font-bold text-white mb-8 leading-tight">
                        Transform Your Digital Presence

                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Turning Brands into Market Leaders. Let's Build Your Success. Redefine what's possible with innovation that sparks and sustains growth. We craft digital experiences that captivate audiences and crush goals.
                    </p>


                </div>
            </div>
        </div>
    );
};

export default HeroAbout;