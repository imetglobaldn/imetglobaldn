"use client";

import Image from "next/image";

import {
  FaFacebookF,

  // FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuora,
  FaPhone,
} from "react-icons/fa";

import { FaSquareThreads } from "react-icons/fa6";

import React, { useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";

import CourseLinks5 from "./CourseLinks5";
import Link from "next/link";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration

      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <footer className="bg-red">
      <div className="bg-blue flex justify-center flex-col items-center space-y-5 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center flex-col gap-5">
            <h2 className="text-4xl md:text-6xl font-bricolage font-semibold text-white text-center">
              Career Continuity
              <br /> Cohort Helpline
            </h2>

            <p className="text-center text-white text-sm md:text-base md:px-0 px-10 mb-10">
              Book your slot to attend career counselling sessions from industry
              practitioners
            </p>

            <div className="flex justify-center items-center">
              {/* <Link href="/course/ecp">Apply for free counselling</Link> */}

              <CourseLinks5 />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-[10vw] bg-red-800 text-white py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row text-center md:text-left justify-center">
            {/* Logo and Social Links */}

            <div className="flex-1 space-y-4 mb-10">
              <div className="flex justify-center md:justify-start">
                <Image
                  alt="Logo"
                  src="/main.png"
                  width={300}
                  height={48}
                  data-aos="fade-right"
                />
              </div>

              <p
                className="text-lg font-semibold font-bricolage"
                data-aos="fade-right"
              >
                Follow Us
              </p>

              <div
                className="flex justify-center md:justify-start space-x-4"
                data-aos="fade-right"
              >
                <Link
                  href="https://www.instagram.com/imet.global/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl" />
                </Link>

                <Link
                  href="https://www.facebook.com/imetglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-2xl" />
                </Link>

                <Link
                  href="https://www.quora.com/profile/IMET-Global-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaQuora className="text-2xl" />
                </Link>

                <Link
                  href="https://www.youtube.com/channel/UCt4YK04oYKu7JiEKCyvUpDg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-2xl" />
                </Link>

                <Link
                  href="https://www.threads.net/@imetglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareThreads className="text-2xl" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/imet-global/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl" />
                </Link>
              </div>

              {/* <Image src="/qr-code.webp" width={100} height={100} alt="qrcode" className="rounded-xl"/> */}
            </div>

            {/* Quick Links */}

            <div className="flex-1 space-y-2 mb-10" data-aos="fade-up">
              <h3 className="text-lg font-semibold font-bricolage">
                Quick Links
              </h3>

              <ul className="space-y-1">
                <li>
                  <Link href="/course/ecp" className="hover:text-gray-300">
                    Executive Certificate Program(ECP)
                  </Link>
                </li>

                <li>
                  <Link href="/course/decp" className="hover:text-gray-300">
                    Digital Executive Certificate Program(DECP)
                  </Link>
                </li>

                <li>
                  <Link href="/course/cp" className="hover:text-gray-300">
                    Certificate Program (CP)
                  </Link>
                </li>

                <li>
                  <a href="/gurupool" className="hover:text-gray-300">
                    Gurupool
                  </a>
                </li>

                <li>
                  <a href="/about" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="/refund" className="hover:text-gray-300">
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a href="/disclaimer" className="hover:text-gray-300">
                    Disclaimer
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/sitemap.xml"
                    className="hover:text-white transition-colors"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}

            <div className="flex-1 space-y-4" data-aos="fade-left">
              <h3 className="text-lg font-semibold font-bricolage">
                Contact Us
              </h3>

              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <FaEnvelope className="text-xl" />

                <a
                  href="mailto:contact@imetglobal.com"
                  className="hover:text-gray-300 text-sm md:text-base"
                >
                  contact@imetglobal.com
                </a>
              </div>

              <div className="flex items-center space-x-4 justify-center lg:justify-start w-[60%] lg:w-full ml-16 lg:ml-0">
                <FaMapMarkerAlt className="text-6xl md:text-4xl" />

                <p className="text-sm md:text-base">
                  Business India Complex, Uday Park, Adjacent to August Kranti
                  Marg, Behind South Ex-II 110049 Delhi, India
                </p>
              </div>

              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <FaPhone className="text-xl rotate-[80deg]" />

                <a
                  href="tel:+919810409943"
                  className="hover:text-gray-300 text-sm md:text-base"
                >
                  +91-9810409943
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" z-30">
        <p className=" bg-white text-blue text-sm md:text-xl font-bricolage text-center w-full font-bold p-4 md:p-6">
          2025 – iMET Global | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
