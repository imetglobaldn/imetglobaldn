import Image from "next/image";

interface WhyImetProps {
  className: string; // Specify className as a string type
}

const FinancialAssistance: React.FC<WhyImetProps> = ({ className }) => { // Use the interface here
  // Define cards data within the component
  const cardsData = [
    {
      title: "iMET Global is an emerging skill-building wing of Pradurbhav Foundation (a section 8 Not-for-Profit company) that works with social development as a key objective.",
      description: "",
      image: "/images/w1.webp", // Replace with actual image path
    },
    {
      title: "iMET is the only institute supported by its associated Digital Agency arm — Digitally Next and the world’s largest AI Enablement community-building initiative — iSoCIAL, aiming to reach 30K+ users and connections in Digital Media, AI Enablement, and Big Data.",
      description: "",
      image: "/images/w2.webp", // Replace with actual image path
    },
    {
      title: "iMET’s focus is to prepare its learners to work at Agency and Corporate Levels that cannot be easily achieved with standard certifications and online programs.",
      description: "",
      image: "/images/w3.webp", // Replace with actual image path
    },
    {
      title: "Since its soft launch, iMET has impacted the lives of more than 30K learners from various colleges, institutes, and corporates.",
      description: "",
      image: "/images/w1.webp", // Replace with actual image path
    },
  ];

  return (
    <section className={className}>
      <div className="rounded-3xl text-5xl px-6 pb-24 pt-10">
        <div className="max-w-7xl mx-auto">
          {/* Cards Section */}
          <div
            className="flex flex-col lg:flex-row justify-center items-center w-full space-y-8 lg:space-y-0 lg:space-x-8"
            data-aos="fade-left"
          >
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-transform hover:scale-105 w-full lg:w-1/3 flex flex-col items-center justify-start h-[440px] 
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
                    className="rounded-full -mt-[50px]"
                  />
                </div>
                {/* Title */}
                <h3
                  className={`text-xl font-bold text-center font-bricolage mb-4`}
                >
                  {card.title}
                </h3>
                {/* Description */}
                <p className="text-left text-lg ">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAssistance;
