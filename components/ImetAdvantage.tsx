import React from "react";
import { imetAdvantageData } from "@/constants";
import Link from "next/link";

interface AdvantageItemProps {
  title: string;
  description: string;
  index: number;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  title,
  description,
  index,
}) => {
  // Custom styles for specific items
  const isHighlighted = index === 2; // "No theoretical written tests/exams"

  return (
    <div
      className={`
        flex flex-col p-6 bg-white rounded-xl
        transition-all duration-300 ease-in-out
        shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-none
        border border-gray-100 group
        ${isHighlighted ? "hover:border-red-500" : "hover:border-blue-500"}
        relative overflow-hidden
      `}
    >
      {/* Background decoration */}
      <div
        className={`
        absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10
        transform rotate-45 transition-colors duration-300
        ${
          isHighlighted
            ? "bg-red-50 group-hover:bg-red-100"
            : "bg-blue-50 group-hover:bg-blue-100"
        }
      `}
      />

      {/* Content */}
      <div className="relative z-10">
        <h2
          className={`
          font-bricolage md:text-xl font-semibold mb-3
          transition-colors duration-300 text-red
          
        `}
        >
          {title}
        </h2>
        <div className="flex items-start gap-2">
          <span className="text-gray-400 font-medium">-</span>
          <p className="text-gray-600 text-sm font-normal leading-relaxed group-hover:text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ImetAdvantage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div
        className="flex justify-left gap-4 lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
        data-aos="fade-right"
      >
        <div className="border-[1px] border-black w-[28%]" />
        <div className="text-left w-full md:w-[60%] lg:w-[45%] font-bricolage_grotesque">
          <h2 className="md:text-6xl text-5xl text-blue font-bold  pt-4 md:pt-0 font-bricolage">
            The
          </h2>
          <h2 className="md:text-6xl text-5xl font-bold mb-2 font-bricolage">
            iMET Global
            <br />
            <span className="text-red">Advantage</span>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
        {imetAdvantageData.map((item, index) => (
          <AdvantageItem
            key={index}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </div>
      <div className="mt-8 text-center flex gap-5 flex-col lg:flex-row">
        <div
          className="bg-white lg:h-36 justify-center items-center p-4 rounded-lg inline-block lg:w-1/2 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-none"
        >
          <h3 className="font-semibold mb-2 text-red text-2xl">UNESCO endorsed alumni status</h3>
          <p className="text-lg text-gray-600">
            Learners get the alumni status along with UNESCO endorsd student
            identity card, valid in 125+ countries across the globe.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-4 p-2">
          <h2 className="text-lg text-center">
            iMET is a global community to develop, promote and encourage
            <span className="text-black font-bold ">
              {" "}
              Innovation, Mentorship, Entrepreneurship and Talent Building {" "}
            </span>
            with Practitioner’s or Doer’s perspective.
          </h2>
          <Link
            href="/about"
            className="text-white bg-black p-4 rounded-full font-bold text-lg hover:underline"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImetAdvantage;
