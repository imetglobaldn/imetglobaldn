import Image from 'next/image';
import { contactData, GALLERY_IMAGES } from '@/constants';
import Banner from '@/components/Banner';
import { generateImageGallerySchema, generateBreadcrumbSchema } from '../../lib/schema';

const Gallery: React.FC = () => {
  const contactInfomation = contactData.find(item => item.title === "Gallery");
  const breadcrumbItems = [
    { name: 'Home', url: 'https://imetglobal.com' },
    { name: 'Gallery', url: 'https://imetglobal.com/gallery' }
  ];

  // Map gallery images to match the schema interface
  const schemaImages = GALLERY_IMAGES.map(img => ({
    url: img.src,
    title: img.alt,
    description: img.alt
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateImageGallerySchema(schemaImages)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
      />
      <section className="pb-10 bg-orange">
        <Banner
          title={contactInfomation ? contactInfomation.title : "Gallery"}
          description={contactInfomation ? contactInfomation.description : ""}
        />
        <div className="container mx-auto px-4 max-w-7xl pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                className="relative overflow  w-full h-96 "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                  className="hover:scale-105 transition-transform duration-300 "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
