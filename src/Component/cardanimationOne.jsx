
import React from "react";

const AnimatedObspFull = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/speed-machine_23-2151955603.jpg?w=2000",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/futuristic-sports-car-night_23-2151955621.jpg?w=2000",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/neon-nights_23-2151955574.jpg?w=2000",
    },
     {
      id:4 ,
      image:
        "https://img.freepik.com/free-photo/futuristic-black-sports-car_23-2151955571.jpg?t=st=1771053633~exp=1771057233~hmac=58ca8e9a08e103b00d96478171adc25da9be8f63af6ef0bd5fc12c2908420a44&w=2000",
    },
     {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/sunset-supercar_23-2151955583.jpg?t=st=1771055473~exp=1771059073~hmac=c575d2fe9f4bc1d789f6ed6e0e099d2a7d116aabb6dc4539832670fbcae57627&w=2000",
    },
     {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/sunset-supercar_23-2151955583.jpg?t=st=1771055473~exp=1771059073~hmac=c575d2fe9f4bc1d789f6ed6e0e099d2a7d116aabb6dc4539832670fbcae57627&w=2000",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Container height = number of cards * 100vh */}
      <div
        className="relative"
        style={{ height: `${cards.length * 100}vh` }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="sticky top-0 flex items-center justify-center h-screen"
          >
            {/* Card */}
            <div className="relative w-4/5 md:w-2/3 lg:w-1/2 h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={card.image}
                alt={`card-${index}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedObspFull;
