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
      <div className="mt-10 flex items-center justify-between border-2 border-slate-500 p-10">
        {modelsTab.map((item, index) => {
          return <HeroModels key={index} label={item.label} />;
        })}
      </div>
    </div>
  );
}
