import { teamMembers2 } from "@/constants";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
// import { Button } from "./ui/button";
// import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Members = () => {
  return (
    <section className="bg-main py-14" data-aos="fade-up">
      <div className="mx-auto max-w-7xl">
      <div
          className="flex justify-left lg:gap-10 mb-12 flex-col md:flex-row md:items-center px-10"
          data-aos="fade-right"
        >
          <div className="border-[1px] border-black  w-[28%]" />
          <div className="text-left w-full md:w-[60%] lg:w-[50%] font-bricolage_grotesque">
            <h2 className="md:text-6xl text-5xl text-blue font-bold  mb- pt-4 md:pt-0 font-bricolage">Gurupool</h2>
            {/* <h2 className="text-6xl font-bold mb-8 font-bricolage">
              How to <br />
              <span className="text-red ">Enroll</span>
            </h2> */}
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {teamMembers2.map((member, index) => (
              <CarouselItem key={index} className="lg:basis-1/4 md:basis-1/2  ">
                <div className="flex flex-col items-center px-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover mb-4 rounded-2xl"
                    width={560}
                    height={200}
                  />
                  <div className="flex items-start">
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-red uppercase mb-4">
                        {member.name}
                      </h3>
                      <p className="text-black">{member.role}</p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 inline-flex items-center justify-center bg-blue-600 text-blue p-2 rounded-xl hover:bg-blue-700 transition border-[1px] border-blue"
                    >
                      <FaLinkedinIn className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute scale-150  z-30 md:left-0 left-[2px]  transform -translate-y-1/2 bg-blue p-2 rounded-full text-white  hover:bg-red transition">
            Prev
          </CarouselPrevious>
          <CarouselNext className="absolute scale-150   z-30 md:right-0  right-[2px]  transform -translate-y-1/2 bg-blue p-2 rounded-full text-white hover:bg-red transition">
            Next
          </CarouselNext>
        </Carousel>

        {/* <Button className="mt-6 w-[20%]">
          <Link href="/gurupool">More Members</Link>
        </Button> */}
      </div>
    </section>
  );
};

export default Members;
