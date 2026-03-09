"use client";
import Image from "next/image";
import Link from "next/link";
// import CourseLinks2 from "@/components/CourseLinks2";
import QualificationPathway from "@/components/QualificationPathway";

const CohortsPage = () => {
  const courseCards = [
    {
      slug: "ecp",
      title: "Executive Certificate Program",
      description: "Digital Performance Marketing, Analytics & AI Enablement",
      imageUrl: "/images/ecp.webp",  // Make sure this image exists
    },
    {
      slug: "cp",
      title: "Certificate Program",
      description: "Digital Marketing & Analytics",
      imageUrl: "/images/cp.webp",  // Make sure this image exists
    },
    {
      slug: "decp",
      title: "Digital Entrepreneurship Certificate Program",
      description: "Digital Business & Entrepreneurship",
      imageUrl: "/images/decp.webp",  // Make sure this image exists
    },
  ];

  return (
    <main>
      {/* Banner Page */}
      <section className="bg-new md:py-16 py-10 md:px-10 px-6">
        <main className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-64 flex-col lg:flex-row">
            {/* Left Content */}
            <div className="text-center lg:text-left" data-aos="fade-right">
              <h2 className="lg:text-7xl text-4xl font-rubik font-normal pb-4 text-red leading-tight">
              Programs &
                <br />
                {/* B-School,{" "} */}
                <span className="text-black font-bricolage font-medium">
                Eligibility
                </span>{" "}
                
              </h2>
              <h2 className="lg:text-7xl text-4xl font-medium font-bricolage pb-5 leading-tight">
              Cohort
              </h2>
              {/* <p className="text-red font-rubik font-normal lg:text-6xl text-4xl leading-tight">
                Education
              </p> */}
            </div>

            {/* Right Image */}
            <div
              className="w-full lg:w-auto flex-shrink-0"
              data-aos="fade-left"
            >
              <Image
                src="/bannermain.webp"
                alt="girl"
                width={440}
                height={440}
                className="rounded-2xl mx-auto lg:mx-0"
                loading="lazy"
              />
            </div>
          </div>
        </main>
      </section>

      {/* Qualification Pathway Section */}
      <QualificationPathway />

      {/* Course Cards Section */}
      <section className="bg-main py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCards.map((course) => (
              <div
                key={course.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full"
                data-aos="fade-up"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold text-red mb-2">{course.title}</h3>
                    <p className="text-black mb-4 text-xl">{course.description}</p>
                  </div>
                  <div className="mt-auto pt-4">
                    <Link
                      href={`/course/${course.slug}`}
                      className="inline-block w-full bg-blue hover:bg-red text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 text-center"
                    >
                      Explore Program
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CohortsPage;
