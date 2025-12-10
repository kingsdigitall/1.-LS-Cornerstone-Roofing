import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = ({ data }: any) => {
  return (
    <div className="mt-14 md:mt-20" itemScope itemType="https://schema.org/FAQPage">
      <h2 className="text-center text-3xl font-bold text-minor">Frequently Asked Questions</h2>
      <div className="mt-5 flex flex-col items-center justify-center px-6">
        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="md:w-2/3 "
        >
          {data.map((items: any, index: number) => (
            <AccordionItem
              value={`item-${index + 1}`}
              className="no-underline"
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <AccordionTrigger className="font-semibold hover:no-underline" itemProp="name">
                Q: {items?.ques}
              </AccordionTrigger>
              <AccordionContent className="text-base" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <span itemProp="text">A: {items?.ans}</span> 
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
