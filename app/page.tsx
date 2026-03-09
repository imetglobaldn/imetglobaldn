"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  // storyData,
  // youtubevideos,
  tabs,
  // tabData,
  socialSphereData,
  // sectionData,
  iMetSessions,
} from "../constants";

import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Stats from "@/components/Stats";
import Members from "@/components/Members";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ's";
import CohortsCarousel from "@/components/cardCarousel";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaQuora,
} from "react-icons/fa";
// import News from "@/components/News";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import WhyImet from "@/components/Whyimetglobal";
import HowToEnroll from "@/components/HowtoEnroll";
import Flags from "@/components/Flags";
// import IMETGlobalAdvantage from "@/components/IMETGlobalAdvantage";
import PlacementNumbers from "@/components/PlacementNumbers";
// import CoursesCarousel from "@/components/CoursesCarousel";
// import Popup from "@/components/Popup";

import CourseLinks from "@/components/Popup";
import InfiniteScroll from "@/components/InfiniteScroll";
// import CalendlyButton from "@/components/Calendly";
import Calendly from "@/components/Calendly";
import CourseLinks3 from "@/components/CourseLinks3";
import CourseLinks4 from "@/components/CourseLinks4";
import VideoSection from "@/components/VideoSection";
import InnovationCenter from "@/components/InnovationCenter";
import SpotlightSection from "@/components/SpotlightSection";
import QualificationsPathway from "@/components/QualificationPathway";
import CollaborationSection from "@/components/CollaborationSection";
import ImetAdvantage from "@/components/ImetAdvantage";
import EmploymentSection from "@/components/EmploymentSection";
import NewsSection from "@/components/NewsSection";

// import SplineModel from "@/components/SplineModel";

/**
 * Renders the Hero section of the page, which includes various components 
 * such as a banner, image, course links, and sections for employment, 
 * qualifications, and more. Utilizes AOS for animations and includes support 
 * for responsive design with different styles based on screen size.
 */
function Hero() {
  // const [, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // const handleImageClick = (id: number) => {
  //   setActiveVideo((prevId) => (prevId === id ? null : id)); // Toggle video on click
  // };

  // const [, setActiveTab] = useState(1);
  // const [activeTab1, setActiveTab1] = useState(0);
  // const { sections } = sectionData;
  // Safeguard to ensure activeTab is within bounds
  // const isValidTab = activeTab1 >= 0 && activeTab1 < tabData.length;

  // const handleCloseVideo = () => {
  //   setActiveVideo(null); // Close video and return to image
  // };

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

  // const handleTabClick = (id: number) => {
  //   setActiveTab(id);
  // };

  return (
    <main className=" bg-blue">
      {/* Banner Page */}
      <section className="bg-new md:py-16 py-10 md:px-10 px-6">
        <main className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-10 flex-col lg:flex-row">
            {/* Left Content */}
            <div className="text-center lg:text-left" data-aos="fade-right">
              <h2 className="lg:text-6xl text-4xl font-rubik font-normal pb-4 text-red leading-tight">
                New age skills-driven
                <br />
                B-School,{" "}
                <span className="text-black font-bricolage font-medium">
                  Only
                </span>{" "}
                in
              </h2>
              <h2 className="lg:text-6xl text-4xl font-medium font-bricolage pb-5 leading-tight">
                Digital/AI Enabled
              </h2>
              <p className="text-red font-rubik font-normal lg:text-6xl text-4xl leading-tight">
                Education
              </p>
              <p className="text-black font-rubik font-normal lg:text-2xl text-xl leading-tight mt-6">
                # Innovation, Mentorship, Entrepreneurship and Training (IMET)
              </p>
            </div>

            {/* Right Image */}
            <div
              className="w-full lg:w-auto flex-shrink-0 relative"
              data-aos="fade-left"
            >
              <div className="relative aspect-square w-[400px]">
                <Image
                  src="/bannermain.webp"
                  alt="girl"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex justify-center items-center flex-col text-white text-lg md:text-xl font-bold mt-8 gap-12 w-full flex-wrap">
            <CourseLinks />
          </div>
        </main>
      </section>
      {/* CohortsCardCarousel  */}
      <section className=" bg-main  py-16">
        <CohortsCarousel start={0} end={9} />
        {/* <Button className="mt-16 p-8 md:text-2xl text-md flex font-medium mx-auto hover:bg-blue bg-blue hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <Link href="/course/ecp">Check - Online | In-Class | Hybrid</Link>
        </Button> */}
        <Calendly />
      </section>

      {/* Total Employement */}
      <section className="bg-new md:py-16 py-10 px-10">
        <EmploymentSection />
      </section>

      {/* Qualification pathway component */}
      <QualificationsPathway />

      {/* Infinite scrolling section  */}
      <main className="flex items-center justify-center p-4 bg-main">
        <InfiniteScroll />
      </main>

      {/* Flags  */}
      <section className=" p-6 md:p-10 lg:px-20 md:py-20 py-16 bg-new text-center">
        <Flags />
        {/* <Button className="mt-16 p-8 md:text-2xl text-md bg-red hover:bg-red font-medium hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <Link href="/course/ecp">Check - Online | In-Class | Hybrid</Link>
        </Button> */}
        <Calendly />
      </section>

      {/* Video */}
      <section className="bg-orange md:py-24 py-10 px-10">
        <VideoSection />
      </section>

      {/* Advantages */}
      <section className="bg-main md:py-24 py-10 px-10">
        <ImetAdvantage />
      </section>

      {/* Logos  */}
      <section className="px-4 md:px-8 lg:px-16 py-8 bg-new">
        <CollaborationSection />
      </section>

      {/* Advantages  */}
      {/* <IMETGlobalAdvantage /> */}

      {/* Placement  */}
      <section className="bg-main py-24 px-4 md:px-16 lg:px-32 text-center">
        <PlacementNumbers />
        <div className="flex justify-center items-center">
          {/* <Link href="/course/ecp">Apply for free counselling</Link> */}
          <CourseLinks3 />
        </div>
      </section>

      {/* CARS Section */}
      {/* <section className="bg-main flex justify-center py-16 items-center flex-col md:px-10  md:pb-40">
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
              data-aos="fade-right"
            >
              <div className="border-[1px] border-black  w-[28%]" />
              <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
                <h2 className="md:text-6xl text-5xl text-blue font-bold  mb- pt-4 md:pt-0 font-bricolage">
                  Our Story of
                </h2>
                <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
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
                  <span className="italic">i</span>nnovation, Mentorship,{" "}
                  Entrepreneurship and Talent Building{" "}
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
      </section> */}

      {/* Why Imet Section */}
      {/* <div
        className="flex justify-left lg:gap-10 flex-col md:flex-row md:items-center bg-new pt-10 px-10"
        data-aos="fade-right"
      >
        <div className="border-[1px] border-black w-[28%]" />
        <div
          className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque"
          data-aos="fade-down"
        >
          <h2 className="text-black md:text-6xl text-5xl font-bold md:mb-4 font-bricolage md:mt-0 mt-4">
            Why
          </h2>
          <h2 className="md:text-6xl text-5xl font-bold mb-4 font-bricolage text-red">
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
      </div> */}
      {/* <WhyImet className="bg-new" /> */}

      {/* Stats Section */}
      {/* <Stats className="bg-main" /> */}

      {/* Courses */}
      {/* <CoursesCarousel /> */}

      {/* How to enroll  */}
      <section className="bg-new px-4 md:px-8 lg:px-16 py-24">
        <HowToEnroll />
        {/* <Button className="mt-16 p-8 md:text-2xl text-md flex font-medium mx-auto hover:bg-blue bg-blue hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <Link href="/course/ecp">Check - Online | In-Class | Hybrid</Link>
        </Button> */}
        <Calendly />
      </section>

      {/* Information Sections */}
      {/* <section className="bg-new py-12 md:py-24 md:px-36 px-8 flex flex-col justify-center items-center">
        <div className="space-y-12 w-full px-4 sm:px-6 md:px-0 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-8 space-y-8 lg:space-y-0"
            >
       
              <div
                className="w-full lg:w-1/3 lg:text-left"
                data-aos="fade-right"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-blue font-bricolage">
                  {section.title}
                </h3>
              </div>

        
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

          
              <div
                className="w-full lg:w-1/3 lg:text-left"
                data-aos="fade-left"
              >
                <p className="mt-4 text-black font-semibold">
                  {section.description}
                </p>
     
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Members Section */}
      <Members />

      {/* Testimonial Section */}
      <Testimonials />

      {/* Imet In Media  */}

      {/* News  */}
      <section className="bg-main py-16">
        <main className="max-w-7xl mx-auto">
          <div
            className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center px-10"
            data-aos="fade-right"
          >
            <div className="border-[1px] border-black  w-[28%]" />
            <div className="text-left w-full md:w-[60%] lg:w-[50%] font-bricolage_grotesque">
              <h2 className="md:text-6xl text-5xl text-blue font-bold  mb- pt-4 md:pt-0 font-bricolage"></h2>
              <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
                Go Digital <br />
                <span className="text-red ">Or Die</span>
              </h2>
            </div>
          </div>
          {/* <News /> */}
          <NewsSection />
        </main>
      </section>

      {/* Sessions */}
      <section className="bg-new py-10 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-2 font-bricolage">
            8 additional sessions with special emphasis on iMET:
          </h2>
          <p className="text-black text-lg mb-8">
            Innovation, Mentoring, Entrepreneurship, Talent Building for
            Professional Character Building and Spiritual Development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {iMetSessions.map((session, index) => (
              <div
                key={index}
                className="flex items-center bg-[#E5A632] p-6 rounded-lg shadow-md space-x-4"
              >
                <Image
                  src={session.image}
                  alt={session.title}
                  className="object-contain"
                  width={100}
                  loading="lazy"
                  height={150}
                />
                <div className="">
                  <h3 className="text-white font-bold text-xl">
                    {session.title}
                  </h3>
                  <p className="text-white">{session.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center items-center">
            <CourseLinks4 />
            {/* <Button className="p-10 bg-red text-white rounded-lg md:text-3xl text-xl font-medium  hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-red-700">
              Apply for Pradurbhav Scholarships
            </Button> */}
          </div>
        </div>
      </section>

      {/* Gallery  */}
      <section className="py-10 bg-main">
        <SpotlightSection tabs={tabs} />
      </section>

      {/* Youtube Shorts Section */}
      <section className="py-10  bg-new px-8 md:px-0">
        <InnovationCenter />
      </section>

      {/* Social Media  */}
      <section className="py-24 bg-main">
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
              <h2 className="text-red md:text-6xl text-5xl font-bold md:mb-4 font-bricolage md:mt-0 mt-4">
                iMET Global
              </h2>
              <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
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
                className="flex flex-col items-center justify-center p-4 bg-white hover:shadow-lg rounded-lg transition-transform transform hover:scale-105 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex flex-row-reverse items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-black  -mb-[px]">
                    {social.title}
                  </span>

                  {getIcon(social.title)}
                </div>
                {/* Image */}
                <Image
                  src={social.imageUrl}
                  alt={social.title}
                  width={1200}
                  height={100}
                  loading="lazy"
                  className="mb-4 w-[400px] rounded-md"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Spline  */}
      {/* <section className="bg-main">
        <SplineModel scene="https://prod.spline.design/54VWcC3o3NrMJ1Hj/scene.splinecode" />
      </section> */}

      {/* FAQ's */}
      <FAQ />
    </main>
  );
}

export default Hero;
