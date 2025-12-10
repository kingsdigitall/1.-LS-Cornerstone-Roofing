import Banner from "@/app/components/Home/Banner";
import React from "react";
import contentData from "@/components/Content/servicePage.json";
import { Metadata } from "next";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Service from "@/app/components/Home/Service";
import Navbar from "@/app/components/State/NavbarState";
import { headers } from "next/headers";
import content from "@/components/Content/subDomainUrlContent.json";

export function generateMetadata() {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
  return {
    title: {
      absolute: contentData.metaTitle
        ?.split("[location]")
        .join(Data.name|| ContactInfo.location)
        ?.split("[phone]")
        .join(ContactInfo.No),
    },
    description: contentData.metaDescription
      ?.split("[location]")
      .join(Data.name || ContactInfo.location)
      ?.split("[phone]")
      .join(ContactInfo.No),
    alternates: {
      canonical: `https://${Data.slug}.${ContactInfo.host}/services/`,
    },
  };
}
const page = () => {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
  const locationName = ContactInfo.location;
  return (
    <div className="">
      <div>
        <Navbar />
        <Banner
          h1={contentData.h1Banner
            ?.split("[location]")
            .join(Data.name||ContactInfo.location)
            ?.split("[phone]")
            .join(ContactInfo.No)}
          image={contentData.bannerImage}
          header={contentData.bannerQuote}
          p1={contentData.metaDescription
            ?.split("[location]")
            .join(Data.name|| ContactInfo.location)
            ?.split("[phone]")
            .join(ContactInfo.No)}
        />

        {/* Content 1 */}
        <div className="">
          {/* <Affordable /> */}
          <Service value={subdomain} />
          {/* <TypeOfDumpster /> */}
        </div>
        {/* Content 1 */}
      </div>
    </div>
  );
};

export default page;
