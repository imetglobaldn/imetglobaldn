import { sectionData } from "@/constants";

interface StatsProps {
  className?: string;
}

const Stats: React.FC<StatsProps> = ({ className }) => {
  const { stats } = sectionData;

  return (
    <section className={` py-12 md:py-20 md:px-36 flex flex-col justify-center items-center ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div
          className="flex flex-wrap justify-between mb-12 text-center space-y-4 lg:space-y-0 lg:text-left w-full px-4 sm:px-6 md:px-0"
          data-aos="fade-down"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0"
            >
              <h3
                className="text-5xl sm:text-6xl md:text-7xl font-semibold font-bricolage"
                style={{ color: stat.color }}
              >
                {stat.count}
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
