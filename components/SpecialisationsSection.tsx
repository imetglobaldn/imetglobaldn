import React from "react";

interface SpecialisationsSectionProps {
  specialisations: string[]; // Accept an array of specialisations as a prop
}

const SpecialisationsSection: React.FC<SpecialisationsSectionProps> = ({
  specialisations,
}) => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <ul className="space-y-4 text-[#003366] text-lg">
          {specialisations.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-8 font-bold text-[#003366] mb-8 text-lg">{`0${
                index + 1
              }`}</span>
              <span className="text-2xl">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SpecialisationsSection;
