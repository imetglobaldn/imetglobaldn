// Banner.js

import React from 'react';

interface BannerProps {
    title: string;
    description: string;
  }

  const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <section className="bg-new py-24 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center lg:gap-10 mb-8 flex-col md:flex-row md:items-center w-[110%]" data-aos="fade-right">
            <div className="border-[1px] border-black w-[28%] " />
            <div className="md:text-left text-center w-full md:w-[60%] lg:w-[50%] font-bricolage_grotesque">
              <h2 className="text-7xl font-semibold mt-10 md:mt-0 mb-8 font-bricolage text-red" data-aos="fade-right">
                {title}
              </h2>
            </div>
          </div>
          <p className="md:w-[40%] text-center">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
