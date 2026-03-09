"use client"

import { accordionData } from "@/constants";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const CustomAccordion = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined); // Use undefined instead of null

  return (
    <main className="container mx-auto max-w-4xl">
    <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
      {accordionData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-2 border-black mb-4 px-10 rounded-sm text-red">
          <AccordionTrigger className="text-2xl font-semibold text-left text-red">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-black font-semibold text-xl">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </main>
  );
};

export default CustomAccordion;
