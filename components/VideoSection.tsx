import React from "react";
import CourseLinks6 from "./CourseLinks6";

const VideoSection = () => {
  return (
    <main className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
      <div className="">
        <div className="text-center lg:text-left" data-aos="fade-right">
          <h2 className="lg:text-6xl text-6xl font-rubik font-normal pb-4 text-blue leading-tight">
            IVY League
            <br />
            <span className="text-black font-bricolage font-medium">
            </span>{" "}
          </h2>
          <div>
            <h2 className="lg:text-6xl text-4xl font-medium font-bricolage pb-5 leading-tight text-black">
              Curriculum
            </h2>
          </div>
          <p className="text-red font-rubik font-normal lg:text-xl text-lg leading-tight">
            Corporate approved curriculum with IVY League delivery format
          </p>
        </div>
        <div className="mb-10 md:mb-0 flex justify-center md:items-start md:justify-start items-center">
          <CourseLinks6 />
        </div>
      </div>
      <div
        className="rounded-xl border-2 mt-6"
        style={{
          // backgroundImage: `url("/mac.webp")`,
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fBGPGEoAvbM?autoplay=1&mute=1&controls=0&loop=1&playlist=fBGPGEoAvbM&si=uMI1fS2KicrCb_H8"
          title="YouTube video player"
          className="rounded-2xl border-4 border-black md:w-[560px] w-[400px] z-10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy" 
          style={{
            // backgroundImage: `url("/mac.webp")`,
          }}
        />
      </div>
    </main>
  );
};

export default VideoSection;
