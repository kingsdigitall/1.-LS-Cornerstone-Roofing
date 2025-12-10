import Image from "next/image";
import Banner from "./Banner";
import ContactInfo from "@/components/Content/ContactInfo.json";
import WhyChoose from "./WhyChoose";
import HourCta from "./HourCta";
import homeData1 from "@/components/Content/home.json";
import Faq from "./Faq";
import Service from "@/app/components/Home/Service";
import ReviewWidget from "../Widgets/ReviewWidget";
import AreaWeServe from "../Widgets/AreaWeServe";
import content from "@/components/Content/subDomainUrlContent.json";
import localImages from "@/local-image-paths.json";
const homeData = JSON.parse(
  JSON.stringify(homeData1)
    .split("[location]")
    .join(ContactInfo.location)
    .split("[phone]")
    .join(ContactInfo.No),
);

const Hero = () => {
  const cityData: any = content;
  const slugs: any = Object.keys(cityData).map((key) => cityData[key]);
  return (
    <div className="w-screen overflow-hidden  md:flex md:w-full md:flex-col md:items-center md:justify-center">
      <div className="w-full overflow-hidden text-lg  print:hidden  dark:bg-white dark:text-black">
        {/* poster */}
        <Banner
          h1={homeData.h1Banner}
          image={homeData.bannerImage}
          header={homeData.bannerQuote}
          p1={homeData.metaDescription}
        />
        {/* poster */}
        {/* Section 1 */}
        <div className="my-10 grid  grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-24">
          <div className="flex flex-col justify-center    ">
            <h2 className="text-first text-3xl font-bold">{homeData.h2}</h2>
            <div
              className="mt-4  text-justify"
              dangerouslySetInnerHTML={{ __html: homeData.p2 }}
            ></div>
          </div>
          <div className="">
            <Image
              height={10000}
              width={10000}
              src={`/home/${localImages.home.h2Image}`}
              className=" h-full w-full rounded-lg object-cover shadow-lg"
              alt={homeData.h2Image.split(".")[0]}
              title={homeData.h2Image.split(".")[0]}
            />
          </div>
        </div>
        {/* Section 1 */}
        {/* Section 2 */}
        <Service />
        {/* Section 2 */}
        {/* Cta */}
        {/* <div className="mt-20"></div>
        <CtaState  />  */}
        {/* Cta */}
        {/* Section 4 */}
        <WhyChoose data={homeData.whyChooseSection} />
        {/* Section 4 */}
        {/* Section 5 */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6  px-6 md:mt-28 md:grid-cols-2 md:px-24 ">
          <div className=" h-fit">
            <Image
              height={1000}
              width={1000}
              src={`/home/${localImages.home.h3Image}`}
              className="h-[400px] w-full  rounded-lg object-cover shadow-lg"
              alt={homeData?.h3Image.split(".")[0]}
            />
          </div>
          <div className=" flex w-full flex-col gap-3   ">
            <h2 className="text-3xl font-bold">{homeData.h3}</h2>

            <div
              className="mt-3  text-justify"
              dangerouslySetInnerHTML={{ __html: homeData?.p3 }}
            ></div>
            <a
              id="cta-id"
              href={`tel:${ContactInfo.tel}`}
              className="flex justify-center"
            >
              <button
                id="cta-id"
                className="mt-6 rounded-lg bg-main px-6 py-2 text-xl font-bold text-white hover:translate-y-2 hover:bg-minor "
              >
                {ContactInfo.No}
              </button>
            </a>
          </div>
        </div>
        {/* Section 5 */}
        {/* CTA */}
        <div className="mt14 md:mt-20">
          <HourCta />
        </div>
        {/* CTA */}
        <div className="mt-14 md:mt-20">
          <h2 className={`  text-center text-3xl font-bold text-minor`}>
            Cities We Serve{" "}
          </h2>
          <AreaWeServe slugs={slugs} />
        </div>
        {/* FAQ */}
        <Faq data={homeData?.faq} />
        {/* FAQ */}
        {/* Review */}
        <ReviewWidget />
        {/* Review */}
        {/* -----------------------------------------Map End---------------------------- */}
        <div className="block w-full  ">
          <div className=" mt-20 overflow-hidden rounded-xl border">
            <iframe
              title="Google Map"
              height="350"
              width={"100%"}
              src={homeData.mapLink}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* -----------------------------------------Map End---------------------------- */}
      </div>
    </div>
  );
};

export default Hero;
