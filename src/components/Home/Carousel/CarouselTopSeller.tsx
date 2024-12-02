"use client";
import Text from "@/components/common/Text/Text";
import { useState } from "react";
import { TopSeller, TopSellerAvatar } from "./TopSellerAvatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContainerBox } from "@/components/common/ContainerBox/ContainerBox";

export const CarouselTopSeller = (): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("day");

  const getTopSellers = () => {
    switch (selectedPeriod) {
      case "day":
        return TopSellersOfTheDay;
      case "month":
        return TopSellersOfTheMonth;
      case "year":
        return TopSellersOfTheYear;
      default:
        return [];
    }
  };

  const topSellers = getTopSellers();

  return (
    <ContainerBox>
      <div className="flex items-center my-10">
        <Text size={32} heavy>
          Top sellers in
        </Text>
        <div className="cursor-pointer flex items-center justify-center gap-2">
          <select
            size={0}
            onChange={(e) => setSelectedPeriod(e.target.value as TimePeriod)}
            className={`bg-transparent font-manropeRegular focus:ring-0 !border-none !ring-0 outline-none p-0 m-0 text-primary text-[32px] font-extrabold !w-[${selectedPeriod.length}ch]`}
          >
            {timePeriods.map((el, key) => (
              <option
                key={key}
                value={el}
                className="text-foreground hover:bg-primary font-normal"
              >
                {TimePeriodLabelSelector[el]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          navigation={true}
          slidesPerView={6}
          style={{
            height: "155px",
            display: "flex",
            width: "80vw",
            gap: "30px",
          }}
        >
          {topSellers.map((el, i) => {
            return (
              <SwiperSlide
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "min-content",
                  userSelect: "none",
                }}
              >
                <TopSellerAvatar
                  key={i}
                  data={el}
                  isTopThree={i + 1 <= 3}
                  index={i + 1}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </ContainerBox>
  );
};

type TimePeriod = "day" | "month" | "year";

const timePeriods: TimePeriod[] = ["day", "month", "year"];

type TimePeriodType = {
  [x in TimePeriod]: string;
};

const TimePeriodLabelSelector: TimePeriodType = {
  day: "1 day",
  month: "1 month",
  year: "1 year",
};

const TopSellersOfTheDay: TopSeller[] = [
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
];

const TopSellersOfTheMonth: TopSeller[] = [
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

const TopSellersOfTheYear: TopSeller[] = [
  {
    name: "Roberto Díaz",
    priceBid: 35000.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Claudia Fernández",
    priceBid: 32000.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Fernando Jiménez",
    priceBid: 34000.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Nina Petrovna",
    priceBid: 33000.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Liam O'Connor",
    priceBid: 36000.0,
    profilePhoto: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Chloé Dubois",
    priceBid: 37000.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Jin Soo Park",
    priceBid: 38000.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Amina Mohammed",
    priceBid: 39000.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    name: "Mateo González",
    priceBid: 40000.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    name: "Karla Schmidt",
    priceBid: 41000.0,
    profilePhoto: "https://randomuser.me/api/portraits/women/18.jpg",
  },
];
