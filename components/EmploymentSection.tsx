import React from "react";
import { employmentData } from "@/constants";

const EmploymentSection: React.FC = () => {
  return (
    <section className="px-4 py-8 md:px-4 lg:px-0 mx-auto max-w-7xl">
      <div
        className="flex justify-left gap-4 lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
        data-aos="fade-right"
      >
        <div className="border-[1px] border-black w-[28%]" />
        <div className="text-left w-full md:w-[60%] lg:w-[45%] font-bricolage_grotesque">
          <h2 className="md:text-6xl text-5xl text-blue font-bold pt-4 md:pt-0 font-bricolage">
            Total
          </h2>
          <h2 className="md:text-6xl text-5xl font-bold  font-bricolage">
            Employment
            <br />
            <span className="text-red"></span>
          </h2>
        </div>
      </div>
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 "
      >
        {employmentData.map((data, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 text-white shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-none ${data.bgColor} `}
          >
            <h3 className="text-3xl font-bold mb-2 text-white">{data.title}</h3>
            <ul className="space-y-1 text-md text-black font-semibold">
              {data.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmploymentSection;
