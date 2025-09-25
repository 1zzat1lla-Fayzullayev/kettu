import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Wrapper from "../layout/wrapper";
import { Pagination } from "swiper/modules";

function InfoCard() {
  const cards = [
    {
      icon: "/location-card.svg",
      title: "Bir platformada barcha transport",
      text: "Samolyot, avtobus, mashina va kemalarni bitta joyda qidiring.",
    },
    {
      icon: "/shine.svg",
      title: "Eng qulay marshrutlar",
      text: "Tezroq va arzonroq yetib borish yo‘llarini solishtiring.",
    },
    {
      icon: "/face.svg",
      title: "Hamyonbop sayohat",
      text: "Byudjetingizga mos transportni tanlab, qulay sayohat qiling.",
    },
  ];

  return (
    <div className="relative bg-[#F9FAFB] pt-[50px] pb-[70px]">
      <Wrapper>
        <Swiper
          spaceBetween={30}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="flex items-start gap-4 mb-1 bg-white shadow-md hover:shadow-lg 
                           rounded-2xl p-6 cursor-pointer transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-[55px] h-[55px]"
                  />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#1f2937] mb-1">
                    {card.title}
                  </h4>
                  <p className="text-[#6b7280] text-[15px] leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </div>
  );
}

export default InfoCard;
