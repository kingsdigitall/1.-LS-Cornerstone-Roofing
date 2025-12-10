import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import content from "@/components/Content/subDomainUrlContent.json";
import { FaCrown } from "react-icons/fa6";
import Banner from "@/app/components/Home/Banner";
import contentData from "@/components/Content/about.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Navbar from "@/app/components/State/NavbarState";
import { headers } from "next/headers";
import Affordable from "@/app/components/Widgets/Affordable";
import localImages from "@/local-image-paths.json"

export function generateMetadata({ params }: { params: { services: string } }) {
const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
  // console.log(Data.name)
  return {
  title: {
    absolute: contentData.metaTitle.split("[location]").join(Data?.name || ContactInfo.location)
            ?.split("[phone]").join(ContactInfo.No),
  },
  description: contentData.metaDescription,
  alternates: {
    canonical: `https://${Data.slug}.${ContactInfo.host}/about/`,
  },
}}
const page = () => {
   const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
   const contentData1 = JSON.parse(
    JSON.stringify(contentData)
      .split("[location]").join(Data?.name || ContactInfo.location)
            ?.split("[phone]").join(ContactInfo.No),
  );
  return (
    <div className="max-[1200px] flex flex-col items-center justify-center  bg-white text-black ">
      <div className="  w-screen min-w-[375px] cursor-default  text-lg md:w-full">
        {/* poster */}
        
        <Navbar/>
        <Banner
          h1={contentData.h1Banner.split("[location]").join(Data?.name || ContactInfo.location)
            ?.split("[phone]").join(ContactInfo.No)}
          image={contentData.bannerImage}
          header={contentData.bannerQuote}
          p1={contentData.metaDescription.split("[location]").join(Data?.name || ContactInfo.location)
            ?.split("[phone]").join(ContactInfo.No)}
        />
        {/* poster */}
        {/* -----------------------------------------About Start------------------------ */}
        <div className="mx-4 mt-6 print:hidden md:mx-10">
          {/* who */}
          <div className="my-20 grid  w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
            <div className="flex flex-col justify-center    ">
              <div className="text-">ABOUT </div>
              <h2 className="text-3xl font-bold ">
                {" "}
                Who We Are?<br></br>
              </h2>
              <div className="mt-6 "></div>
              <div
                className="  text-justify"
                dangerouslySetInnerHTML={{ __html: contentData1.p2 }}
              ></div>
            </div>
            <div className="w-full pt-10">
              <Image
                src={`/about/${localImages.about.h2Image}`}
                className="rounded-lg border object-cover  shadow-lg "
                alt={contentData.h2Image.split(".")[0]}
                width={1000}
                height={1000}
              />
            </div>
          </div>
          {/* who */}
        </div>
        {/* -----------------------------------------About End------------------------ */}
       
       <Affordable
          Data={{
            missionSection: contentData1.missionSection,
            missionTitle: contentData1.missionTitle,
            missionDescription: contentData1.missionDescription,
          }}
        />
        {/* Mission */}
        {/* -----------------------------------------Conversation ------------------------ */}
        <div className="my-20">
          <h2 className={`text-center text-4xl font-extrabold text-main`}>
            Let&apos;s Start a Conversation
          </h2>
          <div className="mt-4 border-double text-center">
            <button id="cta-id"
              className={`mt-3 rounded-lg bg-main px-4 py-3 font-bold tracking-wide text-white     shadow-lg hover:bg-minor`}
            >
              <a id='cta-id' href={`tel:${ContactInfo.tel}`}> {ContactInfo.No}</a>
            </button>
          </div>
        </div>
        {/* -----------------------------------------Conversation End------------------------ */}
        {/* all */}
        <div className="mx-4 my-20 md:mx-20">
          <div className="text-3xl font-bold ">
            <h2 className="flex justify-center gap-2 ">
              <FaCrown className={`text-3xl text-main `} />
              Areas We Serve
            </h2>
          </div>
          <div
            className=" mt-2 text-center text-xl"
            dangerouslySetInnerHTML={{
              __html: contentData.areaweserveSection.description,
            }}
          ></div>
          <div className="flex justify-center">
            <Link
              href={`${ContactInfo?.baseUrl}locations`}
              className=" text-center text-xl font-bold text-main duration-150 ease-in hover:tracking-wide "
            >
              {contentData.areaweserveSection.linkText}
            </Link>
          </div>
        </div>
        {/* all */}
        {/* -----------------------------------------Our Mission Start------------------------ */}
      
        {/* -----------------------------------------Our Mission End------------------------ */}
      </div>
    </div>
  );
};

export default page;
