interface CourseScheduleItem {
  title: string;
  description: string;
  imageUrl: string;
}

interface CourseScheduleSectionProps {
  courseData: CourseScheduleItem[] | null; 
}

const CourseScheduleSection: React.FC<CourseScheduleSectionProps> = ({ courseData }) => {
  return (
    <section className="bg-new px-8 md:px-24 text-black py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bricolage md:text-5xl font-bold mb-10">
          Course Journey:
        </h2>

        {courseData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseData.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Add the image */}
                <div className="flex-shrink-0">
                  {/* <img
                    src={item.imageUrl}
                    alt={`Icon for ${item.title}`} // Corrected alt attribute
                    width={80}
                    height={80}
                    className="w-[100px] border-2 border-white rounded-2xl"
                  /> */}
                </div>
                {/* Content */}
                <div>
                  <h3 className="font-bold text-2xl">{item.title}</h3>
                  <p className="text-xl w-[80%]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">Loading...</p> // Optional loading state
        )}
      </div>
    </section>
  );
};

export default CourseScheduleSection;
