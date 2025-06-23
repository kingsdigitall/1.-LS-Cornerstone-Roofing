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
        "I noticed a small leak in my ceiling right before the rainy season started. I called them for service, and they were at my home the next day. They found the issue, explained the problem clearly, and repaired it quickly. No more leaks, even after heavy rain! I’m so grateful for their quick response and professionalism.",
    },
    {
      name: "Mark T",
      content:
        "I was worried about replacing my old roof because I’d heard horror stories about hidden fees. But Advanced Quality Roofing AZ was completely upfront about the cost and timeline. They stuck to their word, and my new roof looks amazing. I recommend them to anyone looking for honest roofers.",
    },
    {
      name: "Samantha Brown",
      content:
        "From the moment I called Advanced Quality Roofing AZ, I felt like I was in good hands. The team was courteous and explained every step of the process. They even cleaned up so thoroughly after replacing my roof that my yard looked better than when they arrived.",
    },
    {
      name: "Karen M",
      content:
        "I’ve had roofing work done before, but none of those experiences compare to working with Advanced Quality Roofing AZ. They made everything easy and stress-free. The work was completed ahead of schedule, and the quality is top-notch. I’ll call them again if I need anything in the future.",
    },
    {
      name: "Mark Jose",
      content:
        "My roof was over 20 years old and starting to show signs of wear. Advanced Quality Roofing AZ inspected it, gave me an honest assessment, and recommended a replacement. Now, I don’t have to worry about leaks or energy loss. Their work is worth every penny.",
    },
    {
      name: "Emily Rose",
      content:
        "I signed up for regular maintenance with Advanced Quality Roofing AZ, and it’s been a great decision. They come out on schedule, check everything, and fix small issues before they become big problems. It’s saved me so much time and money over the years.",
    },
    {
      name: "Lisa ",
      content:
        "I’ve recommended Advanced Quality Roofing AZ to all my friends and family. They repaired my roof after a big hailstorm, and their work was flawless. What impressed me the most was their honesty—they didn’t try to upsell me on unnecessary repairs.",
    },
    {
      name: "Lisa ",
      content:
        "I recently had a new roof installed by Advanced Quality Roofing AZ, and it’s absolutely beautiful. It’s not just functional—it’s improved my home’s curb appeal, too. I’ve had so many compliments from my neighbors. Thanks for the great work!",
    },
    {
      name: "Lisa ",
      content:
        "When I called Advanced Quality Roofing AZ about a roofing emergency, they treated my issue like a priority. Their team arrived the same day and secured my roof to prevent further damage. I can’t thank them enough for their quick response and excellent service.",
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
            {/* <h3 className="mt-4 text-center text-xl  font-semibold">
              {item.name}
            </h3> */}
            <p className="mt-4 ">{item.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewWidget;
