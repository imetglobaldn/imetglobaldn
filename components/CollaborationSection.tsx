import Image from "next/image";
import { collaborationData } from "@/constants";

const CollaborationSection: React.FC = () => {
  return (
    
      <div className="overflow-x-auto rounded-lg border-main max-w-[1700px] mx-auto">
        <div
          className="flex justify-center lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
          data-aos="fade-right"
        >
          <div className="border-[1px] border-black  w-[20%]" />
          <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
            <h2 className="md:text-6xl text-5xl text-blue font-bold  mb- pt-4 md:pt-0 font-bricolage"></h2>
            <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage">
              Alliances | Partnerships | Institutes
              <br />
              <span className="text-red "> Served</span>
            </h2>
          </div>
        </div>
        <table className="min-w-full border-collapse hidden md:table ">
          {/* Table Headings for desktop view */}
          <thead>
            <tr className="bg-main text-lg md:text-2xl border-4 border-main">
              <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                Advisory Councils
              </th>
              <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                Corporates
              </th>
              <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                Educational Institutes
              </th>
              <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                International Entities
              </th>
              <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                Government and Ministries{" "}
              </th>
            </tr>
          </thead>
          {/* Table Body for desktop view */}
          <tbody>
            <tr>
              <td className="py-6 px-4 text-center border-4 border-main">
                <div className="flex flex-wrap justify-center gap-4">
                  {collaborationData.practitioners.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={220}
                        height={60}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-6 px-4 text-center border-4 border-main">
                <div className="flex flex-wrap justify-center gap-4">
                  {collaborationData.academicCollaborations.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={100}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-6 px-4 text-center border-4 border-main">
                <div className="flex flex-wrap justify-center gap-4">
                  {collaborationData.accreditationBodies.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={100}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-6 px-4 text-center border-4 border-main">
                <div className="flex flex-wrap justify-center gap-4">
                  {collaborationData.ngos.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-6 px-4 text-center border-4 border-main">
                <div className="flex flex-wrap justify-center gap-4">
                  {collaborationData.governmentBodies.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={200}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Mobile view - stacking each category as a card */}
        <div className="md:hidden space-y-8">
          <div className="border-4 border-main p-4 rounded-lg">
            <h2 className="text-center font-semibold text-gray-700 text-lg mb-4">
              Advisory
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {collaborationData.practitioners.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border-4 border-main p-4 rounded-lg">
            <h2 className="text-center font-semibold text-gray-700 text-lg mb-4">
              Corporate
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {collaborationData.academicCollaborations.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border-4 border-main p-4 rounded-lg">
            <h2 className="text-center font-semibold text-gray-700 text-lg mb-4">
              Education
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {collaborationData.accreditationBodies.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border-4 border-main p-4 rounded-lg">
            <h2 className="text-center font-semibold text-gray-700 text-lg mb-4">
              Flag
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {collaborationData.ngos.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border-4 border-main p-4 rounded-lg">
            <h2 className="text-center font-semibold text-gray-700 text-lg mb-4">
              Govt
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {collaborationData.governmentBodies.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default CollaborationSection;
