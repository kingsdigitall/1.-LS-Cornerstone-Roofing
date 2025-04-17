import React from 'react'
import Banner from '../components/Home/Banner'
import contentData from '@/components/Content/servicePage.json'
import Service from '../components/Home/Service'
import { Metadata } from 'next'
import Types from '../components/Widgets/Types'
import ContactInfo from '@/components/Content/ContactInfo.json'

export const metadata: Metadata = {
  title: {
    absolute: contentData.metaTitle,
  },
  description: contentData.metaDescription,
  alternates: {
    canonical: `${ContactInfo.baseUrl}services`
  },
}
const page = () => {
  return (
    <div>
     <Banner  h1={contentData.h1Banner}
          image={contentData.bannerImage}
          header={contentData.bannerQuote}
          p1={contentData.metaDescription}    />
          {/* Content 1 */}
          <div className="">
            <div className="mt-20 text-minor text-4xl text-center">{contentData?.serviceTitle}</div>
            <Types/>
          </div>
          {/* Content 1 */}
    </div>
  )
}

export default page