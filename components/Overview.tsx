import Image from 'next/image';

interface CourseOverviewProps {
  courseData: {
    title: string;
    text: string;
    image: string;
  } | null;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ courseData }) => {
  return (
    <section className="bg-main px-10">
      <div className="flex bg-main  py-16 md:px-0 flex-col max-w-7xl mx-auto">
        {courseData ? (
          <>
            <h1 className="md:text-6xl text-4xl font-semibold font-bricolage mb-6 text-red">
              {courseData.title}
            </h1>
            <div className="flex gap-10 md:flex-row flex-col">
              <p className="md:w-[70%] text-black md:text-xl">
                {courseData.text}
              </p>
              <Image
                src={courseData.image}
                alt="Overview Image"
                width={450}
                height={100}
              />
            </div>
          </>
        ) : (
          <p className="text-white">Loading...</p> // Optional loading state
        )}
      </div>
    </section>
  );
};

export default CourseOverview;
