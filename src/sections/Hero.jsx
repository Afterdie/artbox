import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import HeroMain from "../components/HeroMain";
import HeroModels from "../components/HeroModels";

const modelsTab = [
  {
    label: "bruh",
  },
  {
    label: "bruh",
  },
  {
    label: "bruh",
  },
  {
    label: "bruh",
  },
];

export default function Hero() {
  const swiperRef = useRef(null);

  return (
    <div className="relative m-auto mt-[82px] max-w-[1100px] p-12">
      <Swiper
        ref={swiperRef}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <HeroMain />
        </SwiperSlide>
        <SwiperSlide>
          <HeroMain />
        </SwiperSlide>
        <SwiperSlide>
          <HeroMain />
        </SwiperSlide>
        <SwiperSlide>
          <HeroMain />
        </SwiperSlide>
      </Swiper>
      <div className="relative mt-10 border-2 border-slate-500 p-8">
        <h1 className="absolute inset-0 left-[50%]">
          Shop from a big selection
        </h1>
        <div className="flex items-center justify-between gap-4">
          {modelsTab.map((item, index) => {
            return <HeroModels key={index} ind={index} label={item.label} />;
          })}
        </div>
      </div>
    </div>
  );
}
