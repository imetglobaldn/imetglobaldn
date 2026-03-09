import React from "react";
import Image from "next/image";


const HowToEnroll: React.FC = () => {
  const enrollmentSteps = [
    {
      id: 1,
      title: "Send Email Application",
      bgColor: "bg-orange",
      description: (
        <>
          Learner can apply by sending his/her profile and admission request at{" "}
          <span className="font-bold">
            contact@imetglobal.com OR WhatsApp at +91-9810409943
          </span>
        </>
      ),
      icon: "/logos/Icon.webp",
    },
    {
      id: 2,
      title: "Admission Counselling Session",
      bgColor: "bg-blue",
      description:
        "After receiving the application, we will fix a half an hour Admission Counselling Session (ACS) with our Learning & Development Team",
      icon: "/logos/Icon-1.webp",
    },
    {
      id: 3,
      title: "Enrollment Finalisation",
      bgColor: "bg-[#CC6B49]",
      description:
        "After attending ACS, an admission representative will connect with learner to complete the enrollment process and generate a unique Learner ID.",
      icon: "/logos/Icon-2.webp",
    },
  ];

  return (
    <>
      <main className="mx-auto max-w-7xl">
        <div
          className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
          data-aos="fade-right"
        >
          <div className="border-[1px] border-black  w-[28%]" />
          <div className="text-left w-full md:w-[60%] lg:w-[50%] font-bricolage_grotesque">
            <h2 className="md:text-6xl text-5xl text-blue font-bold  mb- pt-4 md:pt-0 font-bricolage"></h2>
            <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
              How to <br />
              <span className="text-red ">Enroll</span>
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {enrollmentSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg p-6 text-center shadow-lg "
            >
              <div className={`flex justify-center mb-4 `}>
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={40}
                />
              </div>
              <h3
                className={`text-lg font-semibold text-red-700 mb-2  text-white p-8 rounded-xl  ${step.bgColor}`}
              >
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
              
            </div>
          ))}
          
        </div>
       
      </main>
 </>
  );
};

export default HowToEnroll;
