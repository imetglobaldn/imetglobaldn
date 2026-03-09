import React from "react";
import { programData } from "@/constants/index";
import Link from "next/link";

const ProgramSection: React.FC = () => {
  return (
    <section className="px-8 py-8 lg:px-16 bg-main">
      <div className="mx-auto max-w-7xl py-10">
        {/* Section Title */}
        <div
          className="flex justify-left gap-4 lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
          data-aos="fade-right"
        >
          <div className="border-[1px] border-black w-[28%]" />
          <div className="text-left w-full md:w-[60%] lg:w-[45%] font-bricolage_grotesque">
            <h2 className="md:text-6xl text-5xl text-blue font-bold mb-4 pt-4 md:pt-0 font-bricolage">
            Qualification
            </h2>
            <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
            Pathway<br />
              <span className="text-red"></span>
            </h2>
          </div>
        </div>
      <div className="flex flex-col gap-6">
        {programData.map((program, index) => (
          <Link href={program.Link}
          key={index}
          className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"          >
            {/* First Box: Program Title */}
            <div className="flex-1 flex flex-col justify-center items-start px-4 mb-4 lg:mb-0">
              <h2 className="text-lg md:text-xl font-semibold text-teal-600">Cohorts</h2>
              <h2 className="text-lg md:text-3xl font-bold text-teal-600">
                {program.title}
              </h2>
            </div>

            {/* Second Box: Program Type and Details */}
            <div className="flex-1 flex flex-col justify-center items-start px-4 mb-4 lg:mb-0">
              <span className="bg-yellow-400 text-black text-lg font-medium py-1 px-3 rounded-lg shadow-sm">
                {program.programType}
              </span>
              <p className="mt-4 text-gray-600 text-lg">{program.programDetails}</p>
            </div>

            {/* Third Box: Cohort Information */}
            <div className="flex-1 flex flex-col justify-center items-start px-4">
              <h3 className="text-2xl font-semibold text-teal-500">
                {/* {program.cohortTitle} */}
                Eligibility
              </h3>
              <ul className="mt-2 list-disc pl-5 text-gray-500 text-lg">
                {program.cohorts.map((cohort, i) => (
                  <li key={i} className="mt-1">{cohort}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProgramSection;
