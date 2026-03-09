"use client"
import { useEffect, useState } from "react";

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component has mounted on the client
  }, []);

  if (!isClient) return null; // Render nothing until client-side JavaScript is loaded

  return <>{children}</>;
};

export default ClientOnly;
