// Schema Interfaces
interface BlogPost {
  title: string;
  image: string;
  date: string;
  updatedAt?: string;
  excerpt?: string;
  slug: string;
}

interface Course {
  title: string;
  description: string;
  code: string;
  duration: string;
  price: number;
}

interface Event {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
}

interface NewsArticle {
  title: string;
  image: string;
  date: string;
  updatedAt?: string;
}

interface GalleryImage {
  url: string | undefined;
  title: string | undefined;
  description?: string;
  // Support for alternative property names
  src?: string;
  alt?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'iMET Global',
  url: 'https://imetglobal.com',
  logo: 'https://imetglobal.com/images/logo.png',
  description: 'iMET Global provides professional education and career development programs.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'India'
  },
  sameAs: [
    'https://www.facebook.com/imetglobal',
    'https://www.linkedin.com/company/imetglobal',
    'https://www.instagram.com/imetglobal'
  ]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'iMET Global',
  url: 'https://imetglobal.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://imetglobal.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateFAQSchema = (faqs: FAQ[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const generateBlogPostSchema = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  image: post.image,
  datePublished: post.date,
  dateModified: post.updatedAt || post.date,
  author: {
    '@type': 'Organization',
    name: 'iMET Global'
  },
  publisher: {
    '@type': 'Organization',
    name: 'iMET Global',
    logo: {
      '@type': 'ImageObject',
      url: 'https://imetglobal.com/images/logo.png'
    }
  },
  description: post.excerpt || post.title,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://imetglobal.com/blog/${post.slug}`
  }
});

export const generateCourseSchema = (course: Course) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.description,
  provider: {
    '@type': 'Organization',
    name: 'iMET Global',
    sameAs: 'https://imetglobal.com'
  },
  courseCode: course.code,
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    duration: course.duration,
    price: course.price,
    priceCurrency: 'INR'
  }
});

export const generateEventSchema = (event: Event) => ({
  '@context': 'https://schema.org',
  '@type': 'EducationEvent',
  name: event.title,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  location: {
    '@type': 'VirtualLocation',
    url: 'https://imetglobal.com'
  },
  organizer: {
    '@type': 'Organization',
    name: 'iMET Global',
    url: 'https://imetglobal.com'
  },
  offers: {
    '@type': 'Offer',
    price: event.price,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock'
  }
});

export const generateNewsArticleSchema = (article: NewsArticle) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: article.title,
  image: article.image,
  datePublished: article.date,
  dateModified: article.updatedAt || article.date,
  author: {
    '@type': 'Organization',
    name: 'iMET Global'
  },
  publisher: {
    '@type': 'Organization',
    name: 'iMET Global',
    logo: {
      '@type': 'ImageObject',
      url: 'https://imetglobal.com/images/logo.png'
    }
  }
});

export const generateContactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact iMET Global',
  description: 'Get in touch with iMET Global for inquiries about our courses and programs',
  mainEntity: {
    '@type': 'Organization',
    name: 'iMET Global',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@imetglobal.com'
    }
  }
};

export const generateImageGallerySchema = (images: GalleryImage[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'iMET Global Gallery',
  description: 'Photo gallery showcasing iMET Global events and activities',
  image: images.map(img => ({
    '@type': 'ImageObject',
    contentUrl: img.url || img.src,
    name: img.title || img.alt,
    description: img.description || img.alt
  }))
});
