import React from "react";

interface Service {
  id: number;
  title: string;
  description?: string;
  subpoints?: string[];
}

interface MarketingServicesSectionProps {
  services: Service[]; // Accept services as a prop
}

const MarketingServicesSection: React.FC<MarketingServicesSectionProps> = ({
  services,
}) => {
  return (
    <section className="bg-new py-24 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-6xl text-5xl font-bricolage font-semibold">
          Get ready for
        </h2>
        <h2 className="md:text-6xl text-5xl font-bricolage font-semibold text-blue">
          “Most In-Demand”
        </h2>
        <h2 className="md:text-6xl text-5xl font-bricolage font-semibold text-red mb-10">
          Job Roles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="flex items-start space-x-4">
              {/* Circle Number */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
                {service.id < 10 ? `0${service.id}` : service.id}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-black mt-1">{service.description}</p>
                )}
                {service.subpoints && (
                  <ul className="mt-2 ml-4 list-disc text-black">
                    {service.subpoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingServicesSection;
