"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  content: string;
}

const ReviewWidget: React.FC = () => {
  // console.log(data)

  const testimonials = [
    {
      name: "Sarah Jose",
      content:
        "I had a leak in my roof that was driving me crazy. I called LS Cornerstone Roofing Service, and they were quick to respond and fix the issue. Their team was professional, and the work was done efficiently. I can finally relax knowing my roof is in top condition!",
    },
    {
      name: "Mark T",
      content:
        "As a property manager, I rely on trustworthy contractors for my buildings, and LS Cornerstone Roofing has exceeded all expectations. They provide excellent communication, timely service, and affordable pricing. I’ve used them multiple times and will continue to do so.",
    },
    {
      name: "Samantha Brown",
      content:
        "I needed my commercial roof repaired after a storm caused some damage. The team was thorough in their inspection and recommended a cost-effective solution. They got the job done quickly, and I’m confident my business is safe for the long term.",
    },
    {
      name: "Karen M",
      content:
        "When I bought my first home, I wasn’t sure about the roof’s condition. I called LS Cornerstone Roofing Company for an inspection, and they provided a detailed report with options. Their advice helped me make an informed decision, and they did the repairs at a great price!",
    },
    {
      name: "Mark Jose",
      content:
        "As a real estate agent, I work with clients who need quick, reliable roofing solutions. LS Cornerstone Roofing has always been my go-to recommendation. Their professionalism and expertise make them stand out in a crowded market.",
    },
    {
      name: "Emily Rose",
      content:
        "After a bad storm, I needed emergency roof repairs. Their team arrived quickly, and the work was top-quality. They were polite, and respectful, and did everything they could to make sure my home was secure. I highly recommend their services.",
    },
    {
      name: "Lisa ",
      content:
        "I was struggling to find a reliable roofing company and I found LS Cornerstone Roofing. Their team gave me a free roof inspection and explained all the issues clearly. The repair was completed on time, and the final result exceeded my expectations.",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative  pb-10">
      <h2 className="text-first mb-10 mt-20 text-center text-3xl font-bold text-main">
        Testimonials
      </h2>
      <Slider {...settings}>
        {testimonials.map((item: any, index: number) => (
          <div
            className="relative mb-10 p-5  lg:h-80 lg:bg-main lg:text-white"
            key={index + 1}
          >
            <div className="flex items-center justify-center">
              <Image
                src="/5Star.png"
                alt="review"
                width={1000}
                height={500}
                className="w-40 "
              />
            </div>

            <h3 className="mt-4 text-center text-xl  font-semibold">
              {item.name}
            </h3>
            <p className="mt-4 ">{item.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewWidget;
