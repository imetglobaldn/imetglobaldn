"use client";

// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation"; 
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import Image from "next/image";

const BotAnimation = () => {
//   const [loading, setLoading] = useState(false);
//   const pathname = usePathname(); 

//   useEffect(() => {
//     setLoading(true);

//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 500); 

//     return () => clearTimeout(timeout); 
//   }, [pathname]);

//   if (!loading) return null;

  return (
    <div className="absolute top-0 left-0 w-1/4 h-1/2 flex justify-center flex-col items-center z-50">
      <DotLottieReact
        src="https://lottie.host/a8f34f9a-175f-45ee-a6dd-fce324465be1/RQVpUNapxG.lottie"
        loop
        autoplay
        className="w-64 -rotate-[25deg] "
      />

      {/* <Image src="/logo.webp" alt="logo" className="translate-y-52 w-80" width={1500} height={100} /> */}
    </div>
  );
};

export default BotAnimation;
