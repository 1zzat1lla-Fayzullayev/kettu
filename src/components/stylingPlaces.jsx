import Wrapper from "../layout/wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function StylingPlaces() {
  const places = [
    {
      image: "/samarkand-hotel.jpg",
      title: "Samarqand Registon mehmonxonasi",
      discount: "10% chegirma",
      price: "$95.00",
    },
    {
      image: "/bukhara-hotel.png",
      title: "Buxoro qadimiy shahar hosteli",
      discount: "7% chegirma",
      price: "$70.00",
    },
    {
      image: "/dubai-resort.jpg",
      title: "Dubay cho‘l resorti",
      discount: "12% chegirma",
      price: "$180.00",
    },
    {
      image: "/istanbul-hotel.jpg",
      title: "Istanbul Bosfor yaqinidagi mehmonxona",
      discount: "8% chegirma",
      price: "$120.00",
    },
    {
      image: "/paris-hotel.jpg",
      title: "Parij Eyfel minorasi yonidagi hotel",
      discount: "10% chegirma",
      price: "$150.00",
    },
  ];

  return (
    <>
      <div className="bg-[#F7F9FC] mt-[100px] py-4 font-lora">
        <Wrapper>
          <div className="text-center mb-8 relative mt-0 md:mt-[50px]">
            <p className=" text-[#2C3F58] font-lora text-[17px] md:text-[20px]">
              Eng yaxshi joylashish maskanlari
            </p>
            <h2 className="text-[25px] md:text-[30px] font-lora leading-[30px] md:leading-[50px] lg:text-[50px] font-bold text-[#2C3F58]">
              Sayohatchilar uchun tanlangan mehmonxonalar
            </h2>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {places.map((place, index) => (
              <SwiperSlide key={index}>
                <div className="w-full rounded-[10px] relative overflow-hidden mb-[50px]">
                  <div className="relative transition-all ease-in transform hover:scale-105">
                    <img
                      src={place.image}
                      alt={place.title}
                      loading="lazy"
                      className="rounded-[10px] object-cover min-[768px]:w-[400px] h-[350px]"
                    />
                    <div className="bg-[#00000063] absolute left-0 top-0 inset-0 rounded-[10px]"></div>
                  </div>
                  <div className="inline-block absolute bg-[#ff5722] py-[4px] px-[15px] rounded-[50px] top-[15px] right-[15px] font-[500] text-white text-[14px]">
                    {place.discount}
                  </div>
                  <div className="absolute bottom-[15px] left-[15px] text-white">
                    <h3 className="text-[20px] mb-[5px] font-[600]">
                      {place.title}
                    </h3>
                    <div className="tour_info_price">
                      <span className="tour_info_price_new">
                        <span
                          className="font-[500]"
                          data-amount={place.price.replace("$", "")}
                        >
                          <span className="currency_symbol">$</span>
                          {place.price.replace("$", "")}
                        </span>
                      </span>
                      <span> / kecha</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </div>
    </>
  );
}

export default StylingPlaces;
