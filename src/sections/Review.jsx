import React from "react";
import ReviewCard from "../components/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const reviews = [
  {
    name: "Akshat",
    location: "Bihar",
    comment: "The best quality you could ask for",
  },
  {
    name: "Akshat",
    location: "Bihar",
    comment: "The best quality you could ask for",
  },
  {
    name: "Akshat",
    location: "Bihar",
    comment: "The best quality you could ask for",
  },
  {
    name: "Akshat",
    location: "Bihar",
    comment: "The best quality you could ask for",
  },
];

export default function Review() {
  return (
    <div className="relative m-auto mt-[82px] max-w-[1100px] p-12">
      <h1 className="text-center">What our customers say about us</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        l
        pagination={{
          clickable: true,
        }}
        modules={{ Pagination }}
        loop={true}
      >
        {reviews.map((item, index) => {
          return (
            <SwiperSlide>
              <ReviewCard {...item} key={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
