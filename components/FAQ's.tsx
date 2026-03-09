import React, { useState } from "react";

const FAQS: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(5); // Initially show 5 items

  // Full list of accordion data
  const accordionData = [
    {
      title: (
        <div>Who is eligible to enrol in <span className="font-bold">ECP?</span></div>
      ),
      content: (
        <div>
          <p>
            <span className="font-bold">Cohort -I:</span> PG students including MBA/MCA/MS | CA/CS/CMA
          </p>
          <p>
            <span className="font-bold">Cohort -II:</span> Dropped out from CA/CS/CMA/CFA | Not interested in conventional PG | Not interested in government exams / UPSC anymore
          </p>
          <p>
            <span className="font-bold">Cohort -III:</span> Graduates (including Hotel Management | BBA/BCA) with 1+ year of experience | BTechs
          </p>
          <p>
            <span className="font-bold">Cohort -IV:</span> Working professionals with 1+ years of work experience
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>Can I apply for<span className="font-bold"> ECP? </span> if I don&apos;t belong to the applicable cohorts?</div>
      ),
      content: (
        <p>
          Yes, you can apply for the program and can be shortlisted based on an
          <span className="font-bold"> entrance qualification interview.</span>
        </p>
      ),
    },
    {
      title: "I am a working professional aiming for a leadership role in marketing, how will this program help me?",
      content: (
        <p>
          The ECP program will help you develop{" "}
          <span className="font-bold">advanced digital marketing and strategy skills.</span> The 360-degree orientation, hands-on experience, and specialized tracks will equip you with competencies for leadership roles in digital social media, branding, and CMO-level positions.
        </p>
      ),
    },
    {
      title: "Being a working professional, it&apos;s important for me to network with like-minded people, will I get an opportunity for the same?",
      content: (
        <p>
          The program includes <span className="font-bold">LIVE assignments</span>, guest lectures, and modules taught by practitioners. It also provides a{" "}
          <span className="font-bold">lifetime membership of iSoCIAL</span> (Online community for Digital Social Media and AI enablement) and access to the iMET Alumni network.
        </p>
      ),
    },
    {
      title: "As a student pursuing MBA/PGDM, will I get an edge during my placement?",
      content: (
        <p>
          The ECP program offers <span className="font-bold">specialized tracks</span> in emerging areas like digital marketing, personal branding, and data analytics—skills highly valued by employers. Additionally, the focus on <span className="font-bold">AI-powered tools</span> and practical projects ensures you stand out during placements.
        </p>
      ),
    },
    {
      title: "In my MBA/PGDM college, we don&apos;t get many companies in campus related to digital marketing. Will iMET help me get placed after the program?",
      content: (
        <p>
          The ECP program bridges the gap between academic knowledge and industry requirements. It offers <span className="font-bold">placement assistance</span>, internships, and a peer group of working professionals to help secure digital marketing opportunities.
        </p>
      ),
    },
    {
      title: "I am from a commerce background and recently dropped out of my CA preparation. Can I enroll in this course?",
      content: (
        <p>
          Yes, the ECP program is open to applicants from diverse academic backgrounds, including commerce. Your previous experience in commerce makes you a{" "}
          <span className="font-bold">suitable candidate.</span>
        </p>
      ),
    },
    {
      title: "How will this program prepare us for an AI future? Will our jobs be secure after pursuing this program?",
      content: (
        <p>
          The ECP program places a strong emphasis on <span className="font-bold">AI enablement and analytics.</span> You will gain hands-on experience with the latest AI-powered marketing tools and see real-time application in digital agency offices.
        </p>
      ),
    },
    {
      title: "How can I check the eligibility for Pradurbhav Scholarships?",
      content: (
        <p>
          You can check your eligibility by filling out the{" "}
          <span className="font-bold">Scholarship form</span>. A counselor will guide you through the process.
        </p>
      ),
    },
    {
      title: "What is meant by IVY league delivery?",
      content: (
        <p>
          The <span className="font-bold">&ldquo;IVY League delivery&rdquo;</span> refers to the program&apos;s corporate-approved curriculum, focusing on practical applications, industry-relevant content, and expert faculty members to ensure you&apos;re <span className="font-bold">profession-ready.</span>
        </p>
      ),
    },
  ];
  


  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const loadMoreFAQs = () => {
    setVisibleCount((prev) => prev + 5); // Show 5 more items
  };

  return (
    <section className="bg-new py-14">
      <main className="max-w-7xl mx-auto">
        <div
          className="flex justify-left gap-4 lg:gap-10 mb-8 flex-col md:flex-row md:items-center px-6"
          data-aos="fade-right"
        >
          <div className="border-[1px] border-black w-[28%]" />
          <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
            <h2 className="md:text-6xl text-5xl text-red font-bricolage font-bold uppercase pt-4 md:pt-0 tracking-widest">
              FAQS
            </h2>
            <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage text-blue">
              Answers to Your <span className="text-black">Questions</span>
            </h2>
          </div>
        </div>
        <div className="space-y-4">
          {accordionData.slice(0, visibleCount).map((item, index) => (
            <div key={index} className="border rounded-lg">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-lg font-medium text-left bg-blue-100 hover:bg-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-xl font-medium">{item.title}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-xl bg-blue-50 text-gray-700 font-medium">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
        {visibleCount < accordionData.length && (
          <div className="mt-6 text-center">
            <button
              onClick={loadMoreFAQs}
              className="px-6 py-2 text-white bg-blue rounded-md hover:bg-blue font-bold"
            >
              Load More ⟳
            </button>
          </div>
        )}
      </main>
    </section>
  );
};

export default FAQS;
