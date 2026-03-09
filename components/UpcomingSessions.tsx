import React from "react";
import { upcomingSessions, COURSE_DURATIONS } from "../constants";
import { BsDownload } from "react-icons/bs";
// import CourseLinks5 from "./CourseLinks5";
// import PopButton from "./PopButton";
import PopButtonV2 from "./PopButtonV2";
import PopButtonV3 from "./PopButtonV3";
import Link from "next/link";

interface UpcomingSessionsProps {
  slug: string;
}

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ slug }) => {
  const { details } = upcomingSessions;

  return (
    <section className="bg-[#E5A632] px-4 lg:px-0 border-2 border-orange">
      <div className="text-white mx-auto max-w-7xl ">
        <h2 className="text-2xl md:text-4xl font-bold md:text-left text-center bg-[#E5A632] py-8">
          UPCOMING SESSIONS{" "}
          <span className="font-semibold">(Limited Availability)</span>
        </h2>

        {/* Scrolling Text Container */}
        <div className="overflow-hidden rounded-xl">
          <div className="flex flex-col lg:flex-row md:items-center  justify-center  bg-black py-4 space-x-4 animate-scroll px-6 lg:px-0 rounded-2xl md:rounded-none">
            <div className="bg-black text-white md:px-4 px-8 py-2 rounded-md">
              <span className="font-semibold text-lg">Dates: </span>
              {details.date}
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-md">
              <span className="font-semibold">Duration: </span>
              {COURSE_DURATIONS[slug as keyof typeof COURSE_DURATIONS]}
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-md">
              <span className="font-semibold">Format: </span>
              {details.format}
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-md mb-6 md:mb-0">
              <span className="font-semibold">Location: </span>
              {details.location}
            </div>
            <PopButtonV3>Apply Now</PopButtonV3>
            {/* <CourseLinks5 /> */}
          </div>
        </div>

        <p className="text-center py-3 my-6 md:my-0 text-xl font-semibold bg-blue rounded-xl uppercase">
          NOTE: The program fee covers tuition fee, Notes and Case materials
        </p>

        <div className="flex flex-wrap flex-col md:flex-row justify-start md:justify-center md:items-center space-x-4 bg-main py-4 px-2 md:px-0 rounded-xl mb-10 md:mb-0">
          <button className="flex items-center justify-center  bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 my-4 md:my-0">
            <BsDownload className="mr-2 " /> Download Prospectus
          </button>
          {/* <a href="/" className="text-black font-semibold hover:underline">
            Degree Requirement
          </a>
          <a href="/gurupool" className="text-black font-semibold hover:underline">
            Faculty
          </a>
          <a href="#" className="text-black font-semibold hover:underline">
            How To Apply
          </a>
          <a href="#" className="text-black font-semibold hover:underline">
            Request Information
          </a>
          <a href="#" className="text-black font-semibold hover:underline">
            Financing Your Education
          </a> */}
          <Link
            href="#Cohorts"
            className="text-black font-semibold hover:underline"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("Cohorts")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Degree Requirement
          </Link>
          <a
            href="/gurupool"
            className="text-black font-semibold hover:underline"
          >
            Faculty
          </a>

          <Link
            href="#howToEnroll"
            className="text-black font-semibold hover:underline"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("howToEnroll")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            How To Apply
          </Link>

          <PopButtonV2>Request Information</PopButtonV2>
          <PopButtonV2>Financing Your Education</PopButtonV2>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSessions;
