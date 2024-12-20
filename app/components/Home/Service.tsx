import Image from "next/image";
import React from "react";
import data from "@/components/Content/serviceWidgetContent.json";
import { MdDoubleArrow } from "react-icons/md";

const Service = () => {
  return (
    <div className=" md:px-10  px-4">
      <div className="mb-10 flex flex-wrap   justify-center gap-10">
        {data?.map((items: any, index: number) => (
          <div
            className=" 1 mt-10 w-[22rem] overflow-hidden rounded-3xl border  border-gray-300 shadow-md duration-300 ease-in hover:-translate-y-4"
            key={index}
          >
            <div className="flex h-60 justify-center object-cover">
              <Image
                aria-hidden="true"
                src={`/${items.imageUrl}`}
                alt={`${items.imageUrl.split(".")[0]}`}
                title={`${items.imageUrl.split(".")[0]}`}
                width="900"
                height="550"
                className="object-cover"
              />
            </div>
            <h3
              className={`1 mt-4 flex justify-start gap-2  px-4  text-xl font-bold text-minor `}
            >
              <MdDoubleArrow className="text-bold text-3xl " />
              {items.title} 
            </h3>
            <p className=" p-4 text-justify text-base">{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
