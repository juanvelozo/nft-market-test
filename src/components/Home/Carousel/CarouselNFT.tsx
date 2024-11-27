"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { CarouselCard } from "./CarouselCard";

export const CarouselNFT = (): JSX.Element => {
  //constants

  //states
  const [currentSlide, setCurrentSlide] = useState<number>();
  //hooks

  //functions
  SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

  //effects

  //render
  return (
    <div className="!w-screen min-h-[430px] mx-1">
      <Swiper
        navigation={false}
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 60,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.9,
        }}
        slidesPerView={4}
        centeredSlides
        initialSlide={4}
        centerInsufficientSlides
        spaceBetween={"15px"}
        loop={true}
        onSlideChange={(s) => setCurrentSlide(s.realIndex)}
        style={{
          height: "500px",
          display: "flex",
          width: "80vw",
        }}
      >
        {Array.from([0, 1, 2, 3, 4, 5, 6, 7]).map((el) => {
          return (
            <SwiperSlide
              tabIndex={el}
              key={el}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "min-content",
                userSelect: "none",
                filter: "drop-shadow(5px 10px 15px black)",
              }}
            >
              <CarouselCard isActive={currentSlide! == el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
