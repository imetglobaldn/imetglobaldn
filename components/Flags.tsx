import { newstatsData } from "@/constants";
import Image from "next/image";

const Flags = () => {
  return (
    <section className="">
      <div className="max-w-[1400px] mx-auto flex items-center flex-col">
        <div
          className="flex justify-left gap-4 lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
          data-aos="fade-right"
        >
          <div className="border-[1px] border-black w-[28%]" />
          <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
            <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
              Not just any other <br />
              <span className="text-red">B-School</span>
            </h2>
            <p className="mb-10">
              Backed up by a digital agency and a community of digital social
              media professionals. Giving iMET a unique edge with “Teach what we
              practice. And Practice what we teach
            </p>
          </div>
        </div>
        <Image
          src="/arrow2.webp"
          alt=""
          className="text-center hidden lg:block md:-mb-[80px] -rotate-[15deg]"
          width={600}
          height={100}
        />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-6 ">
          {/* Left Stats Boxes */}
          <div className="flex flex-col lg:w-[70%] ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mx-auto ">
              {newstatsData.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="bg-orange rounded-md p-6 text-center text-white flex flex-col justify-between shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                >
                  <h3 className="text-3xl font-bold text-black">
                    {item.title}
                  </h3>
                  <h3 className="text-3xl font-bold text-red">
                    {item.main}
                  </h3>
                  <p className="text-xl  font-bold">{item.subtitle}</p>
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={`Image for ${item.title}`}
                      width={100}
                      height={50}
                      loading="lazy"
                      className="mt-4 rounded-xl shadow w-[200px] mx-auto mb-6"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center lg:w-[40%] w-full px-12">
            {/* Center Nationalities Section */}
            <div className="bg-blue rounded-md w-full p-4 text-center text-white flex flex-col items-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
              <h3 className="text-3xl font-bold text-black">
                {newstatsData[3].title}
              </h3>
              <p className="text-xl my-6">Countries Represented:</p>
              {newstatsData[3].flags && newstatsData[3].flags.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-4 ">
                  {newstatsData[3].flags.map((flag, index) => (
                    <Image
                      key={index}
                      src={flag}
                      alt={`Flag ${index}`}
                      width={70}
                      height={25}
                      className="rounded shadow border-2 border-white"
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm">No flags available</p>
              )}
            </div>

            {/* Right Empowering Section */}
            <div className="bg-red w-full  rounded-md p-4 text-center text-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
              <p className="text-2xl my-6 capitalize">
                <span className="text-3xl font-semibold">Now... </span><br/>learner’s can directly enrol for iMET’s qualifications
              </p>
              {/* <Image
              className="mt-4 rounded shadow w-[200px] mx-auto mb-2 "
              src="/flagimg/4.webp"
              width={800}
              height={100}
              alt="image"
            /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flags;
