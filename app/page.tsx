import Hero from './components/Home/Hero'
import homeData1 from "@/components/Content/home.json"
import ContactInfo from "@/components/Content/ContactInfo.json";
const homeData = JSON.parse(
    JSON.stringify(homeData1)
      .split("[location]")
      .join(ContactInfo.location)
      .split("[phone]")
      .join(ContactInfo.No),
  );
export async function generateMetadata(
) {
 
  return {
    title: homeData.metaTitle,
  description:homeData.metaDescription,
  alternates: {
    canonical: `${ContactInfo.baseUrl.slice(0, -1)}`,
  }
    
  }
}
export default function Home() {
  return (
   <div className=""> 
    <Hero/>
   </div>
  )
}
