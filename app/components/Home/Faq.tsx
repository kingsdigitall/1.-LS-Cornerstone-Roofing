import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = ({ data }: any) => {
  return (
    <div className="mt-14 md:mt-20">
      <h2 className=" text-center text-3xl font-bold text-main">FAQs</h2>
      {data[0].ques ? (
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
              >
                <AccordionTrigger className="font-semibold hover:no-underline">
                  Q: {items?.ques}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  A: {items?.ans}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ) : null}
    </div>
  );
};

export default Faq;
