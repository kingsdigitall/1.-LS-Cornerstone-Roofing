import { Metadata } from "next";
import React from "react";
import contentData1 from "@/components/Content/contact.json";
import ContactInfo from '@/components/Content/ContactInfo.json';
import Page from "../components/Contact/Page";
const contentData = JSON.parse(
    JSON.stringify(contentData1)
      .split("[location]")
      .join(ContactInfo.location)
      .split("[phone]")
      .join(ContactInfo.No),
  );

export const metadata: Metadata = {
  title: {
    absolute: contentData.metaTitle,
  },
  description: contentData.metaDescription,
  alternates: {
    canonical: `${ContactInfo.baseUrl}contact`
  },
};

const page = () => {

  return (
   <div className="">
    <Page/>
   </div>
  );
};

export default page;
