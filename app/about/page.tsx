import Banner from "@/components/Banner";
import { contactData } from "@/constants";
import Image from "next/image";
import React from "react";

const About = () => {
  const contactInfomation = contactData.find(
    (item) => item.title === "About Us"
  );
  return (
    <>
      <Banner
        title={contactInfomation ? contactInfomation.title : "About Us"}
        description={
          "" /* contactInfomation ? contactInfomation.description : "" */
        }
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
          <div className="lg:w-1/2">
          <h3 className=" font-medium tracking-wide leading-7 sm:leading-8 text-center md:text-left text-base sm:text-lg lg:text-xl px-4 sm:px-6 md:px-0">
            iMET is a global community to develop, promote and encourage
            innovation, Mentorship, Entrepreneurship and Talent building with
            Practitioner&apos;s or Doer&apos;s perspective. It was launched on April 2,
            2011 at IIT Delhi (interestingly the same day we won our cricket
            world cup too!!). As an entity, iMET is a part of Pradurbhav
            Foundation, a section 8 company (a more legal format of a
            Trust/Society) committed towards new age Education, Research and
            Social Welfare.
          </h3>
          </div>
          <div className="lg:w-1/2">
          <Image
            src="/images/a1.webp"
            alt="imet global"
            width={100}
            height={100}
            layout="responsive"
            className="rounded-xl mb-4 md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] "
          />
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row justify-center py-8 sm:py-12 md:py-24 gap-8 sm:gap-10 md:gap-24 items-center">
          <h3 className="font-medium tracking-wide leading-7 sm:leading-8 text-center md:text-left text-base sm:text-lg lg:text-xl px-4 sm:px-6 md:px-0">
            iMET is a global community to develop, promote and encourage
            innovation, Mentorship, Entrepreneurship and Talent building with
            Practitioner&apos;s or Doer&apos;s perspective. It was launched on April 2,
            2011 at IIT Delhi (interestingly the same day we won our cricket
            world cup too!!). As an entity, iMET is a part of Pradurbhav
            Foundation, a section 8 company (a more legal format of a
            Trust/Society) committed towards new age Education, Research and
            Social Welfare.
          </h3>
          <Image
            src="/images/a1.webp"
            alt="imet global"
            width={100}
            height={100}
            layout="responsive"
            className="rounded-xl mb-4 "
          />
        </div> */}
        <div
          className="flex justify-left gap-6 sm:gap-8 lg:gap-10 flex-col md:flex-row md:items-center pt-8 sm:pt-10"
          data-aos="fade-right"
        >
          <div className="hidden md:block border-[1px] border-black w-[28%]" />
          <div
            className="text-left w-full md:w-[100%] lg:w-[120%] px-4 sm:px-6 md:px-0"
            data-aos="fade-down"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-bricolage leading-tight">
              School of Digital/Social Media & AI Enablement, a new age world
            </h2>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row-reverse justify-center py-8 sm:py-12 md:py-24 gap-8 sm:gap-10 md:gap-24 items-center">
            <h3 className="font-medium tracking-widest leading-7 sm:leading-8 text-center md:text-left text-base sm:text-lg lg:text-xl px-4 sm:px-6 md:px-0">
              iMET&apos;s School of Digital Social Media AI Enablement is scoped
              around its core value of{" "}
              <span className="text-red font-bold italic">i</span>
              nnovation, <span className="text-red font-bold italic">M</span>
              entorship, <span className="text-red font-bold italic">E</span>
              ntrepreneurship and{" "}
              <span className="text-red font-bold italic">T</span>
              alent building.
              <br />
              <br /> As an emerging skills arm of iMET under{" "}
              <span className="text-red font-bold">
                Pradurbhav Foundation, a section 8 company (a more not for
                profit entity)
              </span>
              , it is committed towards new age Education, Research and Social
              Welfare.
            </h3>
            <Image
              src="/images/earth.webp"
              width={500}
              height={100}
              alt="iMET Global"
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-md rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center font-medium tracking-wide leading-7 sm:leading-8 text-center md:text-left text-base sm:text-lg lg:text-xl gap-8 sm:gap-10">
            <p className="px-4 sm:px-6 md:px-0">
              It has been structured on New Generation and New India&apos;s charter
              of building Digital India, Start- up /Stand up India, Make in
              India and Skill India. It was launched in 2011 as iMET&apos;s Centre of
              Excellence (CoE) for Working Professionals, Self Employed
              Professionals, Entrepreneurs, Startups , Small & Medium Businesses
              and Students. Better Career, Self Employment, Better Employability
              & Growth beyond Appraisals are some of the fervent outcomes when
              our learners opt for the right program for themselves.
            </p>
            <p className="px-4 sm:px-6 md:px-0">
              All the programs fully equip our learners on the skills, different
              tools, concepts, online marketing techniques, Digital marketing,
              social media marketing, ORM, internet marketing, SEO, SEM, Google
              protocols, Digital Transformation, advance skills in business
              planning, market planning, language proficiency and communication
              skills in Hindi and English in a systematic way at learner&apos;s pace
              with practical assignments and industrial trainings. Since 2011,
              more than 30000 students have been trained under it at different
              institutes, associations and in their own campus.
            </p>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-bricolage leading-tight md:mt-24 mt-10">
          COMMUNITY ESSENCE
        </h2>
        <div className="flex flex-col lg:flex-row justify-center py-8 sm:py-12 md:py-24 gap-8 sm:gap-10 md:gap-24 items-center md:-mt-[24px]">
          <h3 className="font-medium tracking-widest leading-7 sm:leading-8 text-center md:text-left text-base sm:text-lg lg:text-xl px-4 sm:px-6 md:px-0">
            iMET Global is for all Santiagos, Zahirs, Bridas, Chanakyas….or the
            future likes of Steve Jobs, Richard Bransons, Zuckerbergs; The ones
            who are the Kirks andSpocks of their own voyagers of discovery on
            the mission- ‘the quest of knowledge’ to make the difference beyond
            conventional living and aspiration.
            <br />
            <br /> iMET resonates with such beliefs and supports the efforts to
            make such big dreams happen in a BIGGER way .iMET thus helps such
            awakened souls to Collaborate -Co create and Co exist.
            <br />
            <br /> You may be in a garb of a Student, Entrepreneur, Start Up,
            Professional, SME, MSME; either from a developed to developing
            nation or from a big city to smaller one however set on making
            ‘extraordinaire’ the way of your life.
          </h3>
          <Image
            src="/images/group.webp"
            width={500}
            height={100}
            alt="iMET Global"
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default About;
