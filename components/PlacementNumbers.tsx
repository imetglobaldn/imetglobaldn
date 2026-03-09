// components/PlacementNumbers.tsx
import Image from "next/image";
import React from "react";


const placementData = [
  {
    icon: "/newicon1.webp",
    title: "Internships | LIVE Assignments",
    highlight: true,
    bgColor: "bg-orange", // Color for this item
    description: (
      <>
        <span className="font-bold">10K+</span> per month Stipend
      </>
    ),
  },
  {
    icon: "/newicon2.webp",
    title: "Placements for Students",
    highlight: false,
    bgColor: "bg-blue", // Color for this item
    description: (
      <>
        1st year <span className="font-bold">(3L+)</span> 2nd year<span className="font-bold">(5L+)</span> 3rd year<span className="font-bold">(8L+)</span>
      </>
    ),
  },
  {
    icon: "/newicon3.webp",
    title: "Lateral Placements for Working Professionals",
    highlight: false,
    bgColor: "bg-[#CC6B49]", // Color for this item
    description: (
      <>
        Min <span className="font-bold">30%</span> increment on <span className="font-bold">present CTC</span>
      </>
    ),
  },
];

const PlacementNumbers: React.FC = () => {
  return (
   <>
      <main className="max-w-7xl mx-auto">
        <div
          className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
          data-aos="fade-right"
        >
          <div className="border-[1px] border-black w-[28%]" />
          <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
            <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
              Career Prospects <br />
              <span className="text-red">and Placement</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placementData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]"
            >
              <div
                className={`w-12 h-12 mb-4 flex items-center justify-center rounded-full`}
              >
                <Image src={item.icon} alt={item.title} className="w-50 h-50" width={100} height={100} loading="lazy"/>
              </div>
              <h3
                className={`text-2xl font-bold font-bricolage text-black mb-2 p-3 rounded-3xl ${item.bgColor}`}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </main>

        </>
  );
};

export default PlacementNumbers;
