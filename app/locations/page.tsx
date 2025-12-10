import React from 'react'
import FullPage from '@/app/components/location/FullPage'
import contentData1 from "@/components/Content/location.json";
import Banner from '@/app/components/Home/Banner';
import { Metadata } from 'next';
import ContactInfo from '@/components/Content/ContactInfo.json'
import Navbar from '../components/Navbar';
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
    canonical: `${ContactInfo.baseUrl}locations`
  },
};

const page = () => {
  return (
    <div>
      <Navbar/>
      <Banner
        h1={contentData.h1Banner}
        image={contentData.bannerImage}
        header={contentData.bannerQuote}
        p1={contentData.metaDescription}
      />
      <div className="pb-10">
      <FullPage />
      </div></div>
  )
}

export default page