"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  storyData,
  youtubevideos,
  tabs,
  tabData,
  imagesCourses,
  socialSphereData,
  sectionData,
  iMetSessions,
} from "../constants";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Stats from "./Stats";
import Members from "./Members";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ's";
import CohortsCarousel from "./cardCarousel";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaQuora,
} from "react-icons/fa";
import News from "./News";
import { Button } from "./ui/button";
import Link from "next/link";
import WhyImet from "@/components/Whyimetglobal";
import HowToEnroll from "./HowtoEnroll";

function Hero() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleImageClick = (id: number) => {
    setActiveVideo((prevId) => (prevId === id ? null : id)); // Toggle video on click
  };

  const [activeTab, setActiveTab] = useState(1);
  const [activeTab1, setActiveTab1] = useState(0);
  const { sections } = sectionData;
  // Safeguard to ensure activeTab is within bounds
  const isValidTab = activeTab1 >= 0 && activeTab1 < tabData.length;

  const handleCloseVideo = () => {
    setActiveVideo(null); // Close video and return to image
  };

  const getIcon = (title: string) => {
    switch (title) {
      case "Facebook":
        return <FaFacebookSquare className="text-[#0866FF]" size={24} />;
      case "LinkedIn":
        return <FaLinkedin className="text-[#0A66C2]" size={24} />;
      case "Quora":
        return <FaQuora className="text-red" size={24} />;
      case "Instagram":
        return <FaInstagram className="text-pink-500" size={24} />;
      default:
        return null;
    }
  };

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <main className=" bg-blue">
      {/* Banner Page */}
      <section className="bg-[#C5E2D5] md:px-32 px-6 md:pt-28 pt-12 flex ">
        <div className="max-w-7xl mx-auto flex justify-between gap-10  flex-col lg:flex-row">
          <div className="" data-aos="fade-right">
            <h2 className="md:font-semibold md:text-3xl text-3xl  font-bricolage md:mb-[.5vw] lg:mb-[.25vw] text-blue">
              New Age SKills Driven B- School only in{" "}
            </h2>
            {/* <h2 className="md:text-7xl text-blue text-3xl font-normal font-bricolage mb-3 tracking-wide">
              
            </h2> */}
            <div>
              <Image
                src="/images/circle.webp"
                alt="girl"
                width={1850}
                height={100}
                className="md:mb-[-60px] md:ml-[-50px] lg:mb-[-110px] lg:ml-[-150px] hidden lg:block "
              />
              <h2 className=" lg:text-7xl text-5xl font-normal font-bricolage mb-3 tracking-wide">
                Digital/AI Enabled
              </h2>
            </div>

            <p className="text-blue md:font-semibold md:text-3xl text-3xl mt-[1.5vw]">
              Education to make you profession ready
            </p>
            <div className="flex md:flex-row flex-col gap-6 text-2xl font-bold mt-6 rounded-2xl max-w-3xl">
              <Link
                href="/"
                className="md:w-1/3 bg-[#E5A632] p-4 rounded-2xl shadow-[7px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Short-term
                <br /> Courses
              </Link>
              <Link
                href="/"
                className="md:w-1/3 bg-white p-4 rounded-2xl shadow-[7px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Executive Up-Skilling
              </Link>
              <Link
                href="/"
                className="md:w-1/3 bg-[#CC6B49] p-4 rounded-2xl shadow-[7px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Formal Qualification
              </Link>
            </div>
          </div>
          <div className="" data-aos="fade-left">
            <Image
              src="/images/bannerimg.webp"
              alt="girl"
              width={420}
              height={100}
            />
            <Image
              src="/newgirl.webp"
              alt="girl"
              width={620}
              height={100}
              className="lg:-mt-[50%] md:-mt-[70%] lg:translate-x-[60%] md:translate-x-[50%] translate-x-[20%]"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-main flex justify-center py-16 items-center flex-col md:px-10  md:pb-40">
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
              data-aos="fade-right"
            >
              <div className="border-[1px] border-black  w-[28%]" />
              <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
                <h2 className="text-5xl text-blue font-bold  mb-4 pt-4 md:pt-0 font-bricolage">
                  Our Story of
                </h2>
                <h2 className="text-5xl font-bold mb-8 font-bricolage">
                  Skill Building <br />
                  <span className="text-red ">since 2011</span>
                </h2>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {storyData.map((story) => (
                <div
                  key={story.id}
                  className="relative  shadow-lg transition duration-300 ease-in-out"
                  data-aos="fade-left"
                >
                  {activeVideo === story.id ? (
                    <div className="relative w-full h-full">
                      <video
                        src={story.videoSrc}
                        controls
                        autoPlay
                        className="w-full h-full rounded-lg"
                      />
                      {/* Close button */}
                      <button
                        onClick={handleCloseVideo}
                        className="absolute top-3 right-3 bg-black text-white rounded-full p-2 text-lg z-10 hover:bg-gray-700"
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <Image
                      src={story.imageSrc}
                      alt={`Story ${story.id}`}
                      width={500}
                      height={300}
                      className="rounded-lg cursor-pointer w-full h-auto transition-transform duration-300 hover:scale-105"
                      onClick={() => handleImageClick(story.id)}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
              <p
                className="w-full md:w-[50%] text-left text-[20px] md:text-[18px] font-semibold mb-6 md:mb-0"
                data-aos="fade-left"
              >
                iMET is a global community to develop, promote and encourage
                <span className="font-bold">
                  {" "}
                  <span className="italic">i</span>nnovation,{" "}
                  Mentorship,{" "}
                  Entrepreneurship and{" "}
                  Talent Building{" "}
                </span>
                with Practitioner’s or Doer’s perspective.
              </p>
              <Link
                href="/about"
                className="bg-black text-white font-bold font-bricolage text-[10px] md:text-[26px] py-3 px-6 rounded-full hover:bg-blue transition duration-300 flex "
                data-aos="fade-right"
              >
                Know More
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* Why Imet Section */}
      <div
        className="flex justify-left lg:gap-10 flex-col md:flex-row md:items-center bg-[#CC6B49] p-10"
        data-aos="fade-right"
      >
        <div className="border-[1px] border-black w-[28%]" />
        <div
          className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque"
          data-aos="fade-down"
        >
          <h2 className="text-white md:text-7xl text-5xl font-bold md:mb-4 font-bricolage md:mt-0 mt-4">
            Why
          </h2>
          <h2 className="md:text-7xl text-5xl font-bold mb-8 font-bricolage">
            iMET Global
          </h2>
          <Image
            src="/images/blackcircle.webp"
            alt="girl"
            width={950}
            height={100}
            className="md:-mt-[130px] -mt-[85px] md:-ml-[90px] -ml-[40px] md:w-[950px] w-[750px]"
          />
        </div>
      </div>
      <WhyImet className="bg-[#CC6B49]" />

      {/* CohortsCardCarousel  */}
      <CohortsCarousel start={0} end={8} />

      {/* Stats Section */}
      <Stats className="bg-main" />
      {/* <Button>Button</Button> */}

      {/* Courses */}
      <section className="bg-white py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="p-4  sm:p-6 md:p-8 lg:p-10">
            <div
              className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
              data-aos="fade-right"
            >
              <div className="border-[1px] border-black  w-[28%]" />
              <div className="text-left w-full md:w-[60%] lg:w-[70%] font-bricolage_grotesque">
                <h2
                  className="text-6xl font-medium mb-8 font-bricolage"
                  data-aos="fade-right"
                >
                  New Age Skill Driven <br />
                  <span className="text-blue">Courses</span>
                </h2>
              </div>
            </div>
            <div className="">
              {/* Tabs */}
              <div className="sm:w-1/3 mb-4 sm:mb-0" data-aos="fade-right">
                <ul className="space-y-2 flex justify-end flex-col mb-10 md:mb-0">
                  {tabData.map((tab, index) => (
                    <li
                      key={index}
                      onClick={() => setActiveTab1(index)}
                      className={`cursor-pointer md:p-2 rounded-lg font-semibold 
                  ${
                    activeTab1 === index
                      ? "bg-blue-200 text-blue-800 scale-125 underline md:translate-x-12 translate-x-10"
                      : "text-gray-700"
                  }`}
                    >
                      {/* {tab.title} */}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Tab Content */}
              <div
                className=" p-4 bg-blue-50 rounded-3xl shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] bg-[#06B5C533] flex flex-col "
                data-aos="fade-left"
              >
                {isValidTab ? (
                  <>
                    <h3 className="text-3xl font-bold mb-2">
                      {tabData[activeTab1].title}
                    </h3>
                    <p className="mb-10">{tabData[activeTab1].desc}</p>
                    <div className="flex md:flex-row flex-col flex-end gap-10 justify-between">
                      <ul className="list-disc ml-5 space-y-2 ">
                        {tabData[activeTab1].options.map((option, index) => {
                          // Map numeric index to the appropriate string key
                          const key = (
                            index === 0
                              ? "one"
                              : index === 1
                              ? "two"
                              : index === 2
                              ? "three"
                              : "four"
                          ) as keyof typeof imagesCourses;
                          return (
                            <li
                              key={index}
                              className="flex items-center text-black font-semibold"
                            >
                              <Image
                                src={imagesCourses[key]} // Access the image based on the key
                                alt={option}
                                className="mr-2 gap-10"
                                width={50}
                                height={150}
                              />
                              {option}
                            </li>
                          );
                        })}
                        <Button className="">
                          <Link href="/course/ecp">Learn More</Link>
                        </Button>
                      </ul>

                      <video
                        controls
                        className=" inset-0 md:w-[50%] h-full object-cover rounded-3xl"
                        src="https://www.pexels.com/video/a-bee-is-sitting-on-a-red-flower-27854446/"
                        title="the videos"
                      ></video>
                    </div>
                  </>
                ) : (
                  <p className="text-red-500">Tab data is not available.</p>
                )}
              </div>
            </div>
            <Button className="bg-transparent text-xl text-black hover:bg-red hover:text-white border-black border-2 font-semibold mt-10 md:translate-x-[120%] lg:translate-x-[200%]">Explore Programme</Button>
          </div>
        </div>
      </section>

      {/* News  */}
      <section className="bg-red py-24">
        <main className="max-w-7xl mx-auto">
          <h1 className="text-8xl text-white font-bricolage text-center">
            Go Digital or Die
          </h1>
          <News />
        </main>
      </section>

      {/* Information Sections */}
      <section className="bg-main py-12 md:py-24 md:px-36 px-8 flex flex-col justify-center items-center">
        <div className="space-y-12 w-full px-4 sm:px-6 md:px-0 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-8 space-y-8 lg:space-y-0"
            >
              {/* Title (Left) */}
              <div
                className="w-full lg:w-1/3 lg:text-left"
                data-aos="fade-right"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-blue font-bricolage">
                  {section.title}
                </h3>
              </div>

              {/* Image (Center) */}
              <div
                className="w-full lg:w-1/3 flex justify-center"
                data-aos="fade-up"
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  className="translate-y-10"
                  width={350}
                  height={100}
                />
              </div>

              {/* Description (Right) */}
              <div
                className="w-full lg:w-1/3 lg:text-left"
                data-aos="fade-left"
              >
                <p className="mt-4 text-black font-semibold">
                  {section.description}
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-red-500 font-semibold hover:underline hover:text-red"
                >
                  KNOW MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Members Section */}
      <Members />

      {/* Testimonial Section */}
      <Testimonials />

      {/* How to enroll  */}
      <HowToEnroll />

      {/* Sessions  */}
      <section className="bg-blue py-10 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            8 additional sessions with special emphasis on iMET :
          </h2>
          <p className="text-white text-lg mb-8">
            innovation, Mentoring, Entrepreneurship, Talent Building for
            Professional Character Building and Spiritual Development
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {iMetSessions.map((session, index) => (
              <div key={index} className="flex items-center space-x-4 w-full ">
                <Image
                  src={session.image}
                  alt={session.title}
                  className=" object-contain"
                  width={100}
                  height={100}
                />
                <div className="flex items-center">
                  <h3 className="text-white font-bold text-2xl mb-2">
                    {session.title}
                  </h3>
                  {/* <p className="text-red">{session.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youtube Shorts Section */}
      <section className="py-10 bg-white px-8 md:px-0">
        <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between mx-auto gap-10 px-6">
          <div className="text-left mb-8">
            <h2
              className="text-7xl font-medium font-bricolage"
              data-aos="fade-right"
            >
              Innovation <br />
              <span className="text-blue">Center</span>
            </h2>
            <p className="text-black mt-4 text-lg">
              {/* Explore the journey and projects that make us who we are. */}
            </p>
            <Button className=" p-6 mt-6">
              <Link href="https://www.youtube.com/@imetglobalnewdelhi">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="relative w-full max-w-2xl ">
            <Carousel
              className="flex items-center justify-center"
              data-aos="fade-left"
            >
              <CarouselPrevious className="absolute z-10 -left-2 transform -translate-y-1/2 top-1/2 border-blue text-white bg-blue"></CarouselPrevious>

              <CarouselContent className="flex px-4">
                {youtubevideos.map((video, index) => (
                  <CarouselItem key={index} className="lg:basis-1/2 px-4 ">
                    <div className="relative w-full h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                      <video
                        controls
                        className="absolute inset-0 w-full h-full object-cover"
                        src={video.videoUrl}
                        title={video.title}
                      />
                    </div>
                    <h3 className="text-lg font-medium mt-4 text-center text-transparent">
                      {video.title}
                    </h3>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselNext className="absolute  right-1 transform -translate-y-1/2 top-1/2 bg-blue text-white"></CarouselNext>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Blogs  */}
      <section className="py-24 bg-[#E5A632]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Section Title */}
          <h2
            className="text-4xl md:text-6xl font-semibold mb-4 text-black"
            data-aos="fade-bottom"
          >
            In The Spotlight
          </h2>
          <p className="text-gray-800 mb-8 mx-auto w-full md:w-1/2 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
            diam a risus maximus, scelerisque consequat purus euismod.
          </p>

          {/* Layout */}
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-10"
            data-aos="fade-up"
          >
            {/* Larger Card */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div
                className={`relative h-64 md:h-96 bg-gray-300 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-3xl overflow-hidden p-6`}
              >
                <p className="text-lg">
                  {tabs.find((tab) => tab.id === activeTab)?.content}
                </p>
              </div>
            </div>

            {/* Smaller Cards */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`h-32 md:h-[180px] p-4 text-lg font-semibold focus:outline-none rounded-3xl shadow-lg transition-all transform ${
                    activeTab === tab.id ? `${tab.color} ` : "bg-white"
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media  */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div
            className="flex justify-left lg:gap-10 flex-col md:flex-row md:items-center  pt-10"
            data-aos="fade-right"
          >
            <div className="border-[1px] border-black w-[28%]" />
            <div
              className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque"
              data-aos="fade-down"
            >
              <h2 className="text-white md:text-7xl text-5xl font-bold md:mb-4 font-bricolage md:mt-0 mt-4">
                iMET Global
              </h2>
              <h2 className="md:text-7xl text-5xl font-bold mb-8 font-bricolage">
                Social Sphere
              </h2>
              {/* <Image
            src="/images/blackcircle.webp"
            alt="girl"
            width={950}
            height={100}
            className="md:-mt-[130px] -mt-[85px] md:-ml-[90px] -ml-[40px] md:w-[950px] w-[750px]"
              /> */}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mx-auto">
            {socialSphereData.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-white hover:shadow-lg rounded-lg transition-transform transform hover:scale-105 -[10px_10px_0px_0px_rgba(0,0,0,1)]"
              >shadow
                {/* Image */}
                <Image
                  src={social.imageUrl}
                  alt={social.title}
                  width={1200}
                  height={100}
                  className="mb-4 w-[400px] rounded-md"
                />

                <div className="flex flex-row-reverse items-center gap-2">
                  <span className="text-2xl font-bold text-black  -mb-[px]">
                    {social.title}
                  </span>

                  {getIcon(social.title)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ's */}
      <FAQ />
    </main>
  );
}

export default Hero;
