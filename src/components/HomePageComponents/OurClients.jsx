import React from 'react';
// Import client images
import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';
import client4 from '../../assets/images/client4.png';
import client5 from '../../assets/images/client5.png';
import client6 from '../../assets/images/client6.png';
import client7 from '../../assets/images/client7.png';
import client8 from '../../assets/images/client8.png';

const ClientsSection = () => {
    const clients = [
        { id: 1, name: 'Client 1', image: client1 },
        { id: 2, name: 'Client 2', image: client2 },
        { id: 3, name: 'Client 3', image: client3 },
        { id: 4, name: 'Client 4', image: client4 },
        { id: 5, name: 'Client 5', image: client5 },
        { id: 6, name: 'Client 6', image: client6 },
        { id: 7, name: 'Client 7', image: client7 },
        { id: 8, name: 'Client 8', image: client8 }
    ];

    return (
        <div className="relative w-full h-[331px] bg-black overflow-hidden">
            {/* Content container */}
            <div className="relative h-full flex flex-col justify-center">
                {/* Title with Outline Effect */}
                <h2 className="text-4xl font-bold text-transparent stroke-text text-center mb-8">
                    Our Clients
                </h2>

                {/* Clients slider section */}
                <div className="bg-white h-38">
                    {/* Clients slider */}
                    <div className="py-12">
                        <div className="relative flex overflow-x-hidden">
                            {/* First set of logos */}
                            <div className="flex animate-marquee whitespace-nowrap">
                                {clients.map((client) => (
                                    <div key={client.id} className="mx-4 w-28 h-16 flex items-center justify-center">
                                        <img
                                            src={client.image}
                                            alt={client.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Duplicate set for seamless loop */}
                            <div className="flex animate-marquee2 whitespace-nowrap">
                                {clients.map((client) => (
                                    <div key={`duplicate-${client.id}`} className="mx-4 w-28 h-16 flex items-center justify-center">
                                        <img
                                            src={client.image}
                                            alt={client.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add required styles for animation & text outline */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes marquee2 {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee2 {
                    animation: marquee 25s linear infinite;
                }
                .stroke-text {
                    -webkit-text-stroke: 2px white; /* White outline */
                    color: transparent; /* Transparent fill */
                }
            `}</style>
        </div>
    );
};

export default ClientsSection;
