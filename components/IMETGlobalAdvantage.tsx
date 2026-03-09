import React from "react";
import { imetGlobalAdvantageData } from "../constants";
import Image from "next/image";

interface AdvantageCardProps {
  title: string;
  description: string;
  highlight: boolean;
  image: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  description,
  highlight,
  image,
}) => (
  <div
    className={`bg-white p-6 rounded-2xl ${highlight ? "shadow-none":"shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]"  }`}
  >
    <div className={`w-full h-48  rounded-md overflow-hidden mb-6 `}>
      <Image
        src={image}
        alt={title}
        width={1000}
        height={400}
        className="object-cover w-full h-48 text-white "
      />
    </div>
    <h3 className={`text-xl font-bold  text-white p-4 rounded-2xl ${highlight ? "bg-orange":"bg-blue"  }`}>{title}</h3>
    <p className="text-lg px-4 py-2">{description}</p>
  </div>
);

const IMETGlobalAdvantage: React.FC = () => (
  <section className="py-10 px-4 bg-main">
    <main className="max-w-7xl mx-auto">
      <div
        className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
        data-aos="fade-right"
      >
        <div className="border-[1px] border-black  w-[28%]" />
        <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
          <h2 className="md:text-6xl text-5xl text-blue font-bold  mb- pt-4 md:pt-0 font-bricolage">
            The
          </h2>
          <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
            iMET Global <br />
            <span className="text-red ">Advantage</span>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {imetGlobalAdvantageData.map((item, index) => (
          <AdvantageCard
            key={index}
            title={item.title}
            description={item.description}
            highlight={item.highlight}
            image={item.image}
          />
        ))}
      </div>
    </main>
  </section>
);

export default IMETGlobalAdvantage;
