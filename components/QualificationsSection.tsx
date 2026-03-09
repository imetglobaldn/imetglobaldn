import React from 'react';
import { qualificationsData } from '../constants/index';
import CourseLinks3 from './CourseLinks3';
// import { IconType } from 'react-icons';

const QualificationsSection: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-[#faf4eb] text-black">
      <main className='mx-auto max-w-7xl'>
      <div
        className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
        data-aos="fade-right"
      >
        <div className="border-[1px] border-black  w-[28%]" />
        <div className="text-left w-full md:w-[60%] lg:w-[50%] font-bricolage_grotesque">
          <h2 className="md:text-6xl text-5xl text-blue font-bold  mb- pt-4 md:pt-0 font-bricolage">
          What 
          </h2>
          <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
          iMET Qualifications   <br />
            <span className="text-red ">give you :</span>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {qualificationsData.map((item, index) => (
          <div
            key={index}
            className={`${item.color} p-10 rounded-lg flex gap-4 text-left items-center justify-center text-white shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]`}
          >
            {/* Icon */}
            <div className="mb-4 md:text-5xl text-4xl">
              <item.icon />
            </div>
            <p className="md:text-3xl text-xl font-semibold t">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
          {/* <Link href="/course/ecp">Apply for free counselling</Link> */}
          <CourseLinks3/>
          </div>
      </main>
    </section>
  );
};

export default QualificationsSection;
