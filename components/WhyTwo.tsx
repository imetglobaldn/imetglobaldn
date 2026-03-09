// import { cardsDatatwo } from "@/constants";
// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// interface WhyImetProps {
//   className: string;
// }

// const WhyTwo: React.FC<WhyImetProps> = ({ className }) => {
//   return (
//     <section className={className}>
//       <div className="rounded-3xl text-5xl px-6 md:px-24 py-32">
//         <div className="max-w-7xl mx-auto">
//           {/* Carousel Section */}
//           <Carousel className="relative">
//             <CarouselContent className="flex space-x-4">
//               {cardsDatatwo.map((card, index) => (
//                 <CarouselItem
//                   key={index}
//                   className="p-24 rounded-lg transition-transform hover:scale-105 w-full md:basis-1/2 lg:basis-1/3 flex flex-col items-center  justify-start h-[550px]
//                     bg-black text-white shadow-[7px_4px_0px_0px_rgba(255,255,255,225)]
//                     hover:bg-white hover:text-black hover:shadow-[7px_4px_0px_0px_rgba(0,0,0,1)]"
//                 >
//                   {/* Image */}
//                   <div className="flex justify-center mb-4">
//                     <Image
//                       src={card.image}
//                       alt={card.title}
//                       width={100}
//                       height={100}
//                       className="rounded-full -mt-[50px]"
//                     />
//                   </div>
//                   {/* Title */}
//                   <h3 className="text-2xl font-bold text-center font-bricolage mb-4">
//                     {card.title}
//                   </h3>
//                   {/* Description */}
//                   <p className="text-left text-base">{card.description}</p>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>

//             {/* Carousel Navigation */}
//             <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2">
//               &#9664; {/* Replace with a suitable icon if needed */}
//             </CarouselPrevious>
//             <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2">
//               &#9654; {/* Replace with a suitable icon if needed */}
//             </CarouselNext>
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyTwo;
