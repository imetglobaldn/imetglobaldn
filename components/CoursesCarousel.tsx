import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { tabData, imagesCourses } from "@/constants/index";
import Link from "next/link";
import Image from "next/image";

const CoursesCarousel: React.FC = () => {
  return (
    <section className="bg-new py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div
          className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
          data-aos="fade-right"
        >
          <div className="border-[1px] border-black  w-[28%]" />
          <div className="text-left w-full md:w-[60%] lg:w-[50%] font-bricolage_grotesque">
            <h2 className="md:text-6xl text-5xl text-blue font-bold  mb- pt-4 md:pt-0 font-bricolage">
              New Age
            </h2>
            <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
              Skill Driven <br />
              <span className="text-red ">Courses</span>
            </h2>
          </div>
        </div>

        <Carousel>
          <CarouselPrevious className="text-2xl">&lt;</CarouselPrevious>
          <CarouselContent className="flex">
            {tabData.map((course, index) => (
              <CarouselItem key={index} className="w-full p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6 flex flex-col ">
                    <div className="flex flex-col">
                      <h3 className="text-4xl font-bold text-red font-bricolage mb-4">
                        {course.title}
                      </h3>
                      <p className="text-black font-semibold text-xl mb-4">
                        {course.desc}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row pt-6 gap-6">
                      <div className="flex flex-col md:w-1/2">
                        {/* Display options with images for each section in the course */}
                        <ul className="list-disc ml-2 space-y-4 mb-4">
                          {course.options.map((option, optionIndex) => {
                            // Assign a unique key based on index for each option image
                            const key = (
                              optionIndex === 0
                                ? "one"
                                : optionIndex === 1
                                  ? "two"
                                  : optionIndex === 2
                                    ? "three"
                                    : optionIndex === 3
                                      ? "four"
                                      : "default"
                            ) as keyof typeof imagesCourses;

                            return (
                              <li
                                key={optionIndex}
                                className="flex items-center text-gray-600 font-bold mb-4 pb-2"
                              >
                                <Image
                                  src={imagesCourses[key] || imagesCourses.one} // Fallback to first image if key is not found
                                  alt={option}
                                  className="mr-2"
                                  width={50}
                                  height={50}
                                />
                                {option}
                              </li>
                            );
                          })}
                        </ul>
                        <Link
                          href={course.slug}
                          className="text-white p-4 bg-blue hover:underline md:w-[35%] rounded-full font-bricolage font-medium text-center"
                        >
                          Explore Program
                        </Link>
                      </div>
                      <div className="md:w-1/2 mt-4 md:mt-0">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/RQbxloCP2ic?autoplay=1&loop=1&controls=0&playlist=RQbxloCP2ic&mute=1"
                          title="Course Overview Video"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full object-cover rounded-3xl"
                        ></iframe>
                      </div>


                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="text-4xl">&gt;</CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default CoursesCarousel;
