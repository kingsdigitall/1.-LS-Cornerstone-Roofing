import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import ContactInfo from "@/components/Content/ContactInfo.json";

const Banner = ({
  image,
  header,
  p1,
  h1,
}: {
  image?: string;
  header: string;
  p1: string;
  h1: string;
}) => {
  return (
    <div className=" relative  mb-24 h-[70vh] max-w-[2100px] duration-150 ease-in-out md:mt-0 md:h-[460px]">
      <Image
        className="absolute h-[70vh] w-[100%] object-cover  md:h-[460px] "
        src={`/banner.jpg`}
        alt="Banner_Image"
        width={10000}
        height={10000}
      />
      <div className="top-30  relative  flex h-full w-full items-center gap-2  bg-gradient-to-r from-[#000000f3] to-[#00000050] text-3xl   text-white md:px-12 md:text-[40px] ">
        <div className=" w-full px-4 pt-4 text-center font-bold leading-[50px] text-white md:mt-14 md:px-0 md:pt-20  lg:pt-0">
          {" "}
          <div className=" w-full">
            {header && header} <br />{" "}
            <h1 className={`inline text-white`}>{h1}</h1>
          </div>
          <div className="mx-auto mt-6 max-w-5xl text-xl font-normal">
            {p1 && `${p1} `}
          </div>
          <div className="flex flex-col items-center md:flex-row  md:gap-10 lg:hidden ">
            <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
              <button
                aria-label="Call"
                className={` mt-4 flex items-center  bg-main  p-3 px-4 text-xl  font-semibold text-white hover:bg-minor md:mt-10`}
              >
                <FaPhoneVolume className="mr-2 text-3xl" />
                {ContactInfo.No}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-28 left-1/2 hidden w-full -translate-x-1/2 -translate-y-1/2 transform  lg:block">
        <div className="mx-auto flex h-28 max-w-5xl items-center justify-between rounded-lg bg-main p-6 text-white shadow-lg">
          <div className="relative flex items-center space-x-4 ">
            <Image
              width={10000}
              height={10000}
              src="/Worker.png"
              alt="AC Repair Guy"
              className="absolute -top-[140%] w-32 object-cover"
            />
            <div className="translate-x-24 transform">
              <h2 className="text-center text-lg font-bold">
                24/7 Emergency Roofing Services - Fast, Realiable & Affordable{" "}
                <br /> roofing services near you!
              </h2>
            </div>
          </div>
          <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
            <button
              id="cta-id"
              aria-label="Call"
              className={`flex items-center  rounded-lg  bg-minor p-3 px-4  text-xl font-semibold text-white`}
            >
              <FaPhoneVolume className="mr-2 text-3xl" />
              {ContactInfo.No}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
