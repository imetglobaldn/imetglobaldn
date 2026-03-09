import { testimonilsData } from "@/constants";
import { useEffect} from "react";
import AOS from "aos";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
// import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


const Testimonials = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="bg-new py-12">
        <div className="container mx-auto max-w-7xl px-4">
        <div
              className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
              data-aos="fade-right"
            >
              <div className="border-[1px] border-black  w-[28%]" />
              <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
                <h2 className="md:text-6xl text-5xl text-blue font-bold  mb- pt-4 md:pt-0 font-bricolage">
                  
                </h2>
                <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
                Hear From <br />
                  <span className="text-red ">Our Learners</span>
                </h2>
              </div>
            </div>

          <div className="flex  justify-center">
            <div className="relative w-full max-w-[1350px] ">
              {" "}
              {/* Limit the width for larger screens */}
              <Carousel>
                <CarouselContent className="px-2">
                  {testimonilsData.map((story, index) => (
                    <CarouselItem
                    key={index}
                    className=" md:basis-1/2  md:px-6 lg:px-10 px-14 flex justify-center items-center mx-auto"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md text-center sm:h-[480px] md:h-auto ">
                      <div className="flex gap-2 border-b-[1px] mb-2 ">
                        <div className="flex justify-center mb-4">
                          <Image
                            src={story.image} 
                            alt={`${story.name}'s picture`} 
                            className="w-16 h-16 rounded-full object-cover" 
                            width={64} 
                            height={64} 
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center -translate-y-2">
                          <div className="flex justify-center text-[#FBBF24] mb-2">
                            {[...Array(story.rating)].map((_, i) => (
                              <FaStar key={i} className="text-lg" />
                            ))}
                          </div>
                          <h3 className="text-md font-semibold font-bricolage">
                            {story.name}, {story.role}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-md">{story.feedback}</p>
                    </div>
                  </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute md:-left-4 left-0 top-1/2 transform -translate-y-1/2 bg-blue text-white p-2 rounded-full">
                  Prev
                </CarouselPrevious>
                <CarouselNext className="absolute md:-right-4 right-4 top-1/2 transform -translate-y-1/2 bg-blue text-white p-2 rounded-full">
                  Next
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          {/* <div className="overflow-hidden translate-y-[5vw] md:translate-y-0 z-50 md:mt-20">
            <motion.div
              className="flex space-x-8" // Adjust spacing between logos
              {...scrollAnimation}
            >
              {duplicatedLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.image}
                  alt={logo.alt}
                  width={100} // adjust size based on your needs
                  height={100}
                />
              ))}
            </motion.div>
          </div> */}
        </div>
      </section>
  )
}

export default Testimonials