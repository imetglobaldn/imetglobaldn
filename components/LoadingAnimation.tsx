"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timeout); 
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center flex-col items-center bg-white  z-50">
      <DotLottieReact
        src="https://lottie.host/a2e875c6-013a-41e6-9c5b-14cf62fde102/xqX0Q46TbL.json"
        loop
        autoplay
        className="w-80"
      />

      <Image src="/logo.webp" alt="logo" className="translate-y-52 w-80" width={1500} height={100} />
    </div>
  );
};

export default Loader;
