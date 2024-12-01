"use client";
import { Chip } from "@/components/common/Chip/Chip";
import { TopSeller } from "../Carousel/TopSellerAvatar";
import { Swiper, SwiperSlide } from "swiper/react";
import Text from "@/components/common/Text/Text";
import SwiperCore from "swiper";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

export const TopCollectorsToday = (): JSX.Element => {
  SwiperCore.use([Navigation, FreeMode, Autoplay]);

  return (
    <div className="flex flex-col gap-5 my-10">
      <Text size={32} heavy className="text-center">
        Top collectors buy today
      </Text>
      <Swiper
        navigation={false}
        slidesPerView={9}
        initialSlide={5}
        freeMode={{ enabled: true, sticky: false }}
        loop
        speed={5000}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          waitForTransition: true,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        style={{
          height: "66px",
          width: "100vw",
        }}
      >
        {TopSellers.slice(0, 10).map((el, i) => (
          <SwiperSlide key={i}>
            <Chip img={el.profilePhoto} label={el.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        navigation={false}
        loop
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          waitForTransition: true,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        speed={5000}
        slidesPerView={9}
        initialSlide={2}
        freeMode={{
          enabled: true,
          sticky: false,
        }}
        style={{
          height: "66px",
          width: "100vw",
        }}
      >
        {TopSellers.slice(10, 20).map((el, i) => (
          <SwiperSlide key={i}>
            <Chip img={el.profilePhoto} label={el.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const TopSellers: TopSeller[] = [
  {
    name: "Juan Pérez",
    priceBid: 150.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily Johnson",
    priceBid: 200.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Akira Tanaka",
    priceBid: 180.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sofía Ramírez",
    priceBid: 220.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Smith",
    priceBid: 175.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Luca Rossi",
    priceBid: 190.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Aisha Khan",
    priceBid: 210.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Clara Müller",
    priceBid: 160.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "David Lee",
    priceBid: 185.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Elena García",
    priceBid: 195.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Ana Torres",
    priceBid: 3000.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Luis Martínez",
    priceBid: 2500.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Sofia Ivanova",
    priceBid: 2800.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "James Brown",
    priceBid: 3200.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Yuki Nakamura",
    priceBid: 2900.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Claudia Fernández",
    priceBid: 3100.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    name: "Marco Silva",
    priceBid: 3300.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Fatima Al-Mansoori",
    priceBid: 3400.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Omar Hassan",
    priceBid: 3600.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Isabella Rossi",
    priceBid: 3700.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/11.jpg",
  },
];
