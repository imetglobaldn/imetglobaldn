import Image from "next/image";
import CourseLinks3 from "./CourseLinks3";

interface WhyImetProps {
  className: string;
}

const Whyimetglobal: React.FC<WhyImetProps> = ({ className }) => {
  const cardsData = [
    {
      title: "A Not for Profit Entity",
      description: (
        <>
          Being a part of{" "}
          <span className="font-bold">
            Pradurbhav Foundation for Skills and Social Development, a Not for
            Profit
          </span>
          (Section 8) Entity, iMET just like its name ( <span className=" italic">i</span>nnovation, Mentoring,
          Entrepreneurship & Talent). Is committed towards making the New-Gen
          Future ready with Smart Digital Education.
        </>
      ),
      image: "/images/w1.webp",
    },
    {
      title: "IVY League Delivery",
      description: (
        <>
          Learning by doing, as we always believed in, and is also working
          wonders. iMET is taking Indian education at par with global standards
          with an in-built
          <span className="font-bold">
            {" "}
            IVY League curriculum @Indian fee structure.
          </span>
        </>
      ),
      image: "/images/w2.webp",
    },
    {
      title: "New In-demand Specializations",
      description: (
        <>
          Because world is now moving into the <span className="font-bold">
          {" "}“Metaverse.”</span> iMET is making its
          learners equipped with holistic dynamics of the Digital World by
          introducing <span className="font-bold">
          {" "}AI Enablement</span>as one of the major specializations.
        </>
      ),
      image: "/images/w3.webp",
    },
  ];

  return (
    <section className={className}>
      <div className="rounded-3xl text-5xl px-6 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Cards Section */}
          <div
            className="flex flex-col lg:flex-row justify-center items-center w-full space-y-8 lg:space-y-0 lg:space-x-8"
            data-aos="fade-left"
          >
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`p-10 rounded-lg transition-transform hover:scale-105 w-full lg:w-1/3 flex flex-col items-center justify-start md:h-[370px] h-[420px]
                  bg-black text-white shadow-[7px_4px_0px_0px_rgba(255,255,255,225)] 
                  hover:bg-white hover:text-black hover:shadow-[7px_4px_0px_0px_rgba(0,0,0,1)]`}
              >
                {/* Image */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="rounded-full -mt-[50px] md:-mt-[70px] border-2 border-black"
                  />
                </div>
                {/* Title */}
                <h3
                  className={`text-xl font-bold text-center font-bricolage mb-4`}
                >
                  {card.title}
                </h3>
                {/* Description */}
                <p className="text-left text-lg ">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/* <Link href="/course/ecp">Apply for free counselling</Link> */}
          <CourseLinks3/>
          </div>
      </div>

    </section>
  );
};

export default Whyimetglobal;
