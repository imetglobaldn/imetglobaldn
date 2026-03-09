"use client";
import Image from "next/image";
import { useState } from "react";
import {
    CardsData,
    COURSE_INFO,
    iMetSessions,
    specialisations,
    specialisationImage,
    KeyHighlightsData,
    overviewData,
    courseScheduleData,
    tabs,
    socialSphereData,
    cardsDatatwo,
    marketingServices,
} from "@/constants";
import CohortsCarouselCourse from "@/components/cardCarouselcourse";
import CourseOverview from "@/components/Overview";
import CourseScheduleSection from "@/components/Journey";
import SpecialisationsSection from "@/components/SpecialisationsSection";
import FAQ from "@/components/FAQ's";
import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import Members from "@/components/Members";
import CollaborationSection from "@/components/CollaborationSection";
import PlacementNumbers from "@/components/PlacementNumbers";
import FinancialAssistance from "@/components/FinancialAssistance";
import UpcomingSessions from "@/components/UpcomingSessions";
import Flags from "@/components/Flags";
import PopButton from "@/components/PopButton";
import CourseLinks2 from "@/components/CourseLinks2";
import HowToEnroll from "@/components/HowtoEnroll";
import ProgramOutcome from "@/components/ProgramOutcome";
import MarketingServicesSection from "@/components/JobRolesSection";
import Calendly from "@/components/Calendly";
import dynamic from 'next/dynamic';
import LazyLoad from '@/components/LazyLoad';
import NewsSection from "@/components/NewsSection";

const DynamicVideoSection = dynamic(() => import('@/components/VideoSection'), {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const DynamicInfiniteScroll = dynamic(() => import('@/components/InfiniteScroll'), {
    loading: () => <div className="h-48 bg-gray-100 animate-pulse" />
});

const DynamicSpotlightSection = dynamic(() => import('@/components/SpotlightSection'), {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const DynamicTestimonials = dynamic(() => import('@/components/Testimonials'), {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const DynamicInnovationCenter = dynamic(() => import('@/components/InnovationCenter'), {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

// Define the CourseSlug type
type CourseSlug = "ecp" | "decp" | "cp";

// Define the structure of course details
export interface CourseDetails {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
}

// Define the props for the course page component
interface CourseClientProps {
    slug: CourseSlug;
}

// Main Course component
const CourseClient = ({ slug }: CourseClientProps) => {
    // Get course details based on the slug
    const courseDetails = COURSE_INFO[slug];
    const keyHighlights = KeyHighlightsData[slug];
    const [activeVideo, setActiveVideo] = useState<number | null>(null);
    const courseData = overviewData[slug as keyof typeof overviewData] || null;
    const courseType = slug as keyof typeof courseScheduleData;
    const courseD = courseScheduleData[courseType] || null;

    const getIcon = (title: string) => {
        switch (title) {
            case "Facebook":
                return <FaFacebookSquare className="text-[#0866FF]" size={24} />;
            case "LinkedIn":
                return <FaLinkedin className="text-[#0A66C2]" size={24} />;
            case "Twitter":
                return <FaTwitter className="text-blue-400" size={24} />;
            case "Instagram":
                return <FaInstagram className="text-pink-500" size={24} />;
            default:
                return null;
        }
    };

    if (!courseDetails) {
        return <div>Course not found</div>;
    }

    const handleImageClick = (id: number) => {
        setActiveVideo((prevId) => (prevId === id ? null : id));
    };

    const handleCloseVideo = () => {
        setActiveVideo(null);
    };

    const cards = cardsDatatwo[slug as keyof typeof cardsDatatwo];
    const services = marketingServices[slug as keyof typeof marketingServices];
    const specialisationList = specialisations[slug as keyof typeof specialisations];

    return (
        <main className="bg-[#06B5C533]">
            {/* Main Section */}
            <section className="md:px-32 px-8 md:pt-24 py-12">
                <div className="max-w-7xl mx-auto flex justify-between gap-12 flex-col lg:flex-row">
                    <div
                        className="lg:w-[70%] flex flex-col items-center justify-center"
                        data-aos="fade-right"
                    >
                        <h2 className="text-blue md:text-7xl text-4xl font-semibold font-bricolage md:mb-6 tracking-wider">
                            {slug.toUpperCase()} -{" "}
                            <span className="text-black">{courseDetails.title}</span>
                        </h2>
                        <h2 className="md:text-7xl text-4xl font-normal font-bricolage md:mb-3 mb-6 tracking-wide text-[#981D26]">
                        </h2>
                        <p className="md:font-semibold font-medium md:text-6xl text-2xl text-red">
                            {courseDetails.description}
                        </p>
                    </div>
                    <div className="" data-aos="fade-left">
                        <Image
                            src={courseDetails.imageUrl}
                            alt={courseDetails.title}
                            width={720}
                            height={100}
                            className=""
                        />
                    </div>
                </div>
            </section>

            {/* Upcoming section  */}
            <UpcomingSessions slug={slug} />

            {/* Video */}
            <LazyLoad height="600px">
                <section className="bg-main md:py-24 py-10 px-10">
                    <DynamicVideoSection />
                </section>
            </LazyLoad>

            {/* Infinite scrolling section  */}
            <LazyLoad height="400px">
                <main className="flex items-center justify-center p-4 bg-main">
                    <DynamicInfiniteScroll />
                </main>
            </LazyLoad>

            {/* Flags  */}
            <section className=" p-6 md:p-10 lg:px-20 md:py-20 py-16 bg-new text-center flex flex-col justify-center items-center">
                <Flags />
                <Calendly />
            </section>

            {/* Cohort  */}
            <section id="Cohorts" className="py-16 bg-main flex flex-col justify-center items-center">
                <CohortsCarouselCourse slug={slug} />
                <Calendly />
            </section>

            {/* News  */}
            <LazyLoad height="600px">
                <section className="bg-main py-16">
                    <NewsSection />
                </section>
            </LazyLoad>

            {/* Overview */}
            <CourseOverview courseData={courseData} />

            {/* Journey Section */}
            <CourseScheduleSection courseData={courseD} />

            {/* Program Outcomes  */}
            <LazyLoad height="600px">
                <div className="bg-main">
                    <ProgramOutcome cards={cards} />
                    <MarketingServicesSection services={services} />
                </div>
            </LazyLoad>

            {/* Job  */}
            <LazyLoad height="800px">
                <section className="bg-main flex justify-center py-16 items-center flex-col md:px-10 md:pb-16">
                    <section className="w-full ">
                        <div className="max-w-7xl mx-auto px-6">
                            <div
                                className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
                                data-aos="fade-right"
                            >
                                <div className="border-[1px] border-black w-[28%]" />
                                <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
                                    <h2 className="text-7xl font-bold mb-8 font-bricolage">
                                        Driven by <br />
                                        <span className="text-red"> CAR Model</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {CardsData.map((story) => (
                                    <div
                                        key={story.id}
                                        className="relative shadow-lg transition duration-300 ease-in-out"
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
                            <div className="flex justify-end">
                                <CourseLinks2 />
                            </div>
                        </div>
                    </section>
                </section>
            </LazyLoad>

            {/* Placement  */}
            <LazyLoad height="400px">
                <section className="bg-new py-24 px-4 md:px-16 lg:px-32 text-center flex flex-col items-center justify-center">
                    <PlacementNumbers />
                    <PopButton>Apply for free Counselling</PopButton>
                </section>
            </LazyLoad>

            {/* Key Highlights Section */}
            <LazyLoad height="600px">
                <section className="p-6 sm:p-10 bg-main">
                    <div className="max-w-7xl mx-auto flex justify-between gap-12 flex-col py-16">
                        <div
                            className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
                            data-aos="fade-right"
                        >
                            <div className="border-[1px] border-black w-[28%]" />
                            <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
                                <h2 className="text-7xl font-bold mb-8 font-bricolage text-blue">
                                    Key <span className="text-black">Highlights</span>
                                </h2>
                            </div>
                        </div>

                        {/* Key Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {keyHighlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="p-12 rounded-md text-white md:h-[290px]"
                                    style={{ backgroundColor: highlight.color }}
                                >
                                    {/* Highlight Image */}
                                    <div className="mb-4">
                                        <Image
                                            src={highlight.image}
                                            alt={`Highlight ${index + 1}`}
                                            className="w-12 h-auto object-cover rounded-md"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    {/* Highlight Text */}
                                    <div className="text-left text-xl font-semibold">{highlight.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </LazyLoad>

            {/* New Gen  */}
            {slug !== 'cp' && (
                <LazyLoad height="600px">
                    <section className="flex flex-col md:flex-row items-center py-12 md:py-24 px-10 bg-new">
                        <div className="max-w-7xl mx-auto flex justify-between flex-col gap-5 lg:flex-row font-bricolage">
                            <div className="">
                                <h2 className="text-red text-5xl font-bold mb-4">New Gen</h2>
                                <h3 className="text-black text-4xl font-semibold mb-10">
                                    Specialisations :
                                </h3>
                                <SpecialisationsSection specialisations={specialisationList} />
                                <PopButton>Apply for free Counselling</PopButton>
                            </div>

                            {/* Image Section */}
                            <div className=" flex justify-center mt-8 md:mt-0">
                                <Image
                                    src={specialisationImage}
                                    alt="Specialisation Visual"
                                    width={600}
                                    height={400}
                                    className="rounded-md"
                                />
                            </div>
                        </div>
                    </section>
                </LazyLoad>
            )}

            {/* FinicialSolution Section */}
            <div
                className="flex justify-left lg:gap-10 flex-col md:flex-row md:items-center bg-main pt-10 "
                data-aos="fade-right"
            >
                <div className="border-[1px] border-black w-[28%]" />
                <div
                    className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque px-10 md:px-0"
                    data-aos="fade-down"
                >
                    <h2 className="text-red md:text-7xl text-5xl font-bold md:mb-4 font-bricolage md:mt-0 mt-4 ">
                        iMET Global
                    </h2>
                    <h2 className="md:text-7xl text-5xl font-bold mb-8 font-bricolage">
                        Advantages
                    </h2>
                </div>
            </div>
            <FinancialAssistance className="bg-main" />

            {/* Testimonial Section */}
            <LazyLoad height="600px">
                <DynamicTestimonials />
            </LazyLoad>

            {/* How to Enroll  */}
            <section id="howToEnroll" className="bg-main px-4 md:px-8 lg:px-16 md:py-24 py-12 flex flex-col justify-center items-center">
                <HowToEnroll />
                <Calendly />
            </section>

            {/* Members Section */}
            <LazyLoad height="400px">
                <Members />
            </LazyLoad>

            {/* Sessions */}
            <LazyLoad height="600px">
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
                        <div className="mt-8 text-center flex items-center justify-center">
                            <PopButton>Apply for Pradurbhav Scholarships</PopButton>
                        </div>
                    </div>
                </section>
            </LazyLoad>

            {/* Logos  */}
            <LazyLoad height="300px">
                <section className="px-4 md:px-8 lg:px-16 py-8 bg-new">
                    <CollaborationSection />
                </section>
            </LazyLoad>

            {/* Gallery  */}
            <LazyLoad height="600px">
                <section className="py-10 bg-main">
                    <DynamicSpotlightSection tabs={tabs} />
                </section>
            </LazyLoad>

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
                                    className="mb-4 w-[400px] rounded-md"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Youtube Shorts Section */}
            <LazyLoad height="600px">
                <section className="py-10 bg-new px-8 md:px-0">
                    <DynamicInnovationCenter />
                </section>
            </LazyLoad>

            {/* FAQ's */}
            <LazyLoad height="600px" threshold={0.2}>
                <FAQ />
            </LazyLoad>
        </main>
    );
};

export default CourseClient;