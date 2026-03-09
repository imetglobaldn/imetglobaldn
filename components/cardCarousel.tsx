import { useState } from "react";
import { cohortsData } from "./CohortData";
import Image from "next/image";
import CourseLinks2 from "./CourseLinks2";

type CohortsCarouselProps = {
  start: number;
  end: number;
};

const CohortsCarousel = ({ start, end }: CohortsCarouselProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const slicedData = cohortsData.slice(start, end);

  const handleTogglePoints = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Collapse if the same card is clicked, expand otherwise
    setShowDetails(false); // Reset the detail component visibility when switching cards
  };

  return (
    <section className="px-4 md:px-10 lg:px-15 bg-main">
      <main className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className="flex justify-left gap-4 lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
          data-aos="fade-right"
        >
          <div className="border-[1px] border-black w-[28%]" />
          <div className="text-left w-full md:w-[60%] lg:w-[45%] font-bricolage_grotesque">
            <h2 className="md:text-6xl text-5xl text-blue font-bold mb-4 pt-4 md:pt-0 font-bricolage">
              Cohorts
            </h2>
            <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
              based Batches for <br />
              <span className="text-red">Effective Learning:</span>
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slicedData.map((cohort, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col">
                <Image
                  src={cohort.image}
                  alt={`${cohort.title} Image`}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="rounded-xl mb-4"
                />
                <div className="bg-blue rounded-2xl px-4 pt-2 pb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-left pb-2 text-red">
                    {cohort.title}
                  </h3>
                  <h4 className="md:text-2xl text-3xl font-semibold font-bricolage text-left text-black pb-2">
                    {cohort.main}
                  </h4>
                  <h4 className="font-semibold text-left md:text-base mb-4 text-white">
                    {cohort.info}
                  </h4>
                </div>
              </div>
              {/* Description */}
              <div className="py-4">
                <p>{cohort.description}</p>
                <button
                  className="text-white font-semibold mt-4 p-4 rounded-2xl bg-orange w-full"
                  onClick={() => handleTogglePoints(index)}
                >
                  {expandedIndex === index ? "Hide" : "Learn More"}
                </button>
                {expandedIndex === index && (
                  <div>
                    <ul className="list-disc pl-5 mt-4 text-blue font-semibold">
                      {cohort.points.map((point, idx) => (
                        <li key={idx} className="pb-2 sm:pb-3">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-center">
                      <CourseLinks2 />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Conditional Rendering of the New Component */}
        {showDetails && (
          <div className="mt-8 p-6 bg-gray-100 rounded-xl">
            <h3 className="text-2xl font-bold text-center">Detail Component</h3>
            <p className="mt-4 text-center">
              Here are more details about the selected cohort.
            </p>
            <button
              className="text-white font-semibold mt-4 p-4 rounded-2xl bg-red-500 mx-auto block"
              onClick={() => setShowDetails(false)}
            >
              Close
            </button>
          </div>
        )}
      </main>
    </section>
  );
};

export default CohortsCarousel;
