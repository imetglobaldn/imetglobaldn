import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Tab {
  id: number;
  img: string;
  color: string; // Tailwind color class (e.g., "bg-red-500")
}

interface SpotlightSectionProps {
  tabs: Tab[];
}

const SpotlightSection: React.FC<SpotlightSectionProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 0);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  // Get the active tab's image with fallback
  const activeImage = tabs.find((tab) => tab.id === activeTab)?.img || tabs[0]?.img || '';

  return (
    <div className="max-w-7xl mx-auto px-4 text-center">
      {/* Header */}
      <div
        className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
        data-aos="fade-right"
      >
        <div className="border-[1px] border-black w-[28%]" />
        <div className="text-left w-full md:w-[60%] lg:w-[50%] font-bricolage_grotesque">
          <h2 className="md:text-6xl text-5xl text-blue font-bold mb-0 pt-4 md:pt-0 font-bricolage"></h2>
          <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
            In The <br />
            <span className="text-red">Spotlight</span>
          </h2>
        </div>
      </div>

      {/* Layout */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-10"
        data-aos="fade-up"
      >
        {/* Larger Card */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div>
            <Image
              src={activeImage}
              alt={`Tab ${activeTab}`}
              width={800}
              height={600}
              loading="lazy"
              className="w-full relative h-64 md:h-96 bg-gray-300 lg:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] shadow-none rounded-[79px] overflow-hidden"
            />
          </div>
        </div>

        {/* Smaller Cards */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`h-32 md:h-[180px] focus:outline-none rounded-[45px] lg:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] shadow-none transition-all transform ${
                activeTab === tab.id ? `${tab.color}` : "bg-white"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <Image
                src={tab.img}
                alt={`Tab ${tab.id}`}
                width={400}
                height={300}
                className="h-full w-full rounded-3xl object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Button */}
      <div className="mt-10 bg-blue md:w-[20%] w-[40%] p-3 rounded-2xl text-white md:text-xl text-lg font-semibold mx-auto text-center hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <Link href="/gallery">Visit Gallery</Link>
      </div>
    </div>
  );
};

export default SpotlightSection;
