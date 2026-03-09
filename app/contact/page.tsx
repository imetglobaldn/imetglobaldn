"use client";

import Banner from "@/components/Banner";
// import FAQ from "@/components/FAQ's";
import dynamic from 'next/dynamic';
import { contactData, contactInfo } from "@/constants";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { IoLogoWhatsapp } from "react-icons/io";
import { generateContactPageSchema, generateBreadcrumbSchema } from '../../lib/schema';

// Dynamically import Map and Stats to disable SSR
const Map = dynamic(() => import('@/components/Map'), { ssr: false });
// const Stats = dynamic(() => import('@/components/Stats'), { ssr: false });

const ContactPage = () => {

  const contactInfomation = contactData.find(item => item.title === "Contact Us");
  const breadcrumbItems = [
    { name: 'Home', url: 'https://imetglobal.com' },
    { name: 'Contact', url: 'https://imetglobal.com/contact' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateContactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
      />
      <main>
      {/* Main section */}
      <Banner 
        title={contactInfomation ? contactInfomation.title : "Contact Us"}
        description={contactInfomation ? contactInfomation.description : ""}
      />

      {/* Form section */}
      <section className="bg-beige py-32">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-10 items-center justify-center">
          <div className="flex flex-col lg:px-0 px-10">
            <h2 className="text-5xl font-bold mb-6 font-bricolage">Get in Touch</h2>
            {/* <h2 className="text-5xl font-bold mb-6 font-bricolage">
              Get Protected Now: <br /> Act with Lumintu Insurance
            </h2> */}
            <h3 className="text-2xl font-bricolage font-semibold md:mb-6">Contact Info</h3>

            <div className="space-y-4 flex flex-col justify-between">
              <div className="flex items-start text-start">
                <Image
                  src="/logos/phone.webp"
                  alt="Phone Icon"
                  className="w-16 h-16 mt-1"
                  width={100}
                  height={100}
                />
                <div className="ml-4">
                  <p className="font-semibold text-2xl">Phone Number</p>
                  <p className="text-red text-lg underline flex gap-2 items-center justify-center">{contactInfo.phone} <IoLogoWhatsapp className="text-green-800"/> </p>
                </div>
              </div>
              <div className="flex items-start">
                <Image
                  src="/logos/location.webp"
                  alt="Location Icon"
                  className="w-16 h-16 mt-1"
                  width={100}
                  height={100}
                />
                <div className="ml-4">
                  <p className="font-semibold text-2xl">Campus</p>
                  <p className="text-red text-lg lg:w-[45%]">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Image
                  src="/logos/email.webp"
                  alt="Email Icon"
                  className="w-16 h-16 mt-1"
                  width={100}
                  height={100}
                />
                <div className="ml-4">
                  <p className="font-semibold text-2xl">Email Address</p>
                  <p className="text-red text-lg underline">{contactInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-gray-100 p-16 rounded-lg shadow-lg w-[40%]">
            <form
              className="space-y-4 flex flex-col justify-evenly"
              method="post"
              action="/api/contact"
            >
              <div>
                <label className="block font-semibold mb-1" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Your Message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-black text-white font-bold rounded-md flex justify-center items-center"
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div> */}
          <div className="shadow-[7px_4px_0px_0px_rgba(0,0,0,1)] bg-[#f3f4f6] rounded-2xl lg:mx-0 mx-4">
           <ContactForm/>
           </div>
        </div>
      </section>
     

      {/* Map section */}
      <Map />

      {/* Stats section */}
      {/* <Stats className="bg-[#CC6B494D]" /> */}

      {/* FAQ's section */}
      {/* <FAQ /> */}
    </main>
    </>
  );
};

export default ContactPage;
