import { Metadata } from 'next';
import CourseClient from './CourseClient';
import { COURSE_INFO } from '@/constants';

// Define the CourseSlug type
type CourseSlug = "ecp" | "decp" | "cp";

// Define the props for the course page component
interface CoursePageProps {
  params: { slug: CourseSlug };
}

// Generate metadata for the page
export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const courseDetails = COURSE_INFO[params.slug];

  return {
    title: `${params.slug.toUpperCase()} - ${courseDetails.title} | iMET Global`,
    description: courseDetails.description,
  };
}

// Server Component
export default function CoursePage({ params }: CoursePageProps) {
  return <CourseClient slug={params.slug} />;
}

// Generate static params for all course slugs
export function generateStaticParams() {
  return [
    { slug: 'ecp' },
    { slug: 'decp' },
    { slug: 'cp' }
  ];
}
