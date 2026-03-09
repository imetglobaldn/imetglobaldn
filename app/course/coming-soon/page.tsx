"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CourseLinks2 from "@/components/CourseLinks2";

const ComingSoonPage = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  const text = "Coming Soon";

  return (
    <main className="min-h-screen bg-new">
      {/* Banner Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:pl-44">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Animated text */}
              <div className="flex flex-wrap justify-center lg:justify-start mb-6">
                {text.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-6xl md:text-6xl font-bold text-red inline-block tracking-tighter mx-1"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>

              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-3xl md:text-3xl font-medium text-blue mb-8">
                  New Programs Under Development
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  We&apos;re crafting something extraordinary. Stay tuned for our innovative
                  programs that will revolutionize digital education.
                </p>
              </motion.div>

              {/* Notification Form */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <CourseLinks2 />
              </motion.div>
            </div>

            {/* Right Animation */}
            <div className="lg:w-1/2 relative">
              <motion.div
                variants={circleVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <div className="relative w-[400px] h-[400px]">
                  <Image
                    src="/bannermain.webp"
                    alt="Coming Soon Illustration"
                    width={600}
                    height={400}
                    className=" object-cover"
                  />
                  {/* Animated circles */}
                  {/* <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border-4 border-blue rounded-full"
                  /> */}
                  {/* <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-4 border-4 border-red rounded-full"
                  /> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-red/10 rounded-full blur-xl"
        />
      </section>

      {/* Features Preview Section */}
      <section className="py-20 bg-main">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Led Curriculum",
                description: "Designed with input from leading industry experts",
                delay: 0.2,
              },
              {
                title: "Hands-on Learning",
                description: "Practice-oriented approach with real-world projects",
                delay: 0.4,
              },
              {
                title: "Career Support",
                description: "Dedicated placement assistance and mentorship",
                delay: 0.6,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-red mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComingSoonPage;
