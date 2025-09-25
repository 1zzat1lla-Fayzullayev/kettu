import Wrapper from "../layout/wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

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
      title: "Dubay cho'l resorti",
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
    <div className="bg-[#F7F9FC] mt-[100px] py-4">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 relative mt-0 md:mt-[50px]"
        >
          <p className="text-[#2C3F58] text-[17px] md:text-[20px]">
            Eng yaxshi joylashish maskanlari
          </p>
          <h2 className="text-[25px] md:text-[30px] leading-[30px] md:leading-[50px] lg:text-[50px] font-bold text-[#2C3F58]">
            Sayohatchilar uchun tanlangan mehmonxonalar
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
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
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="w-full rounded-[10px] relative overflow-hidden mb-[50px] cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[10px]">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={place.image}
                      alt={place.title}
                      loading="lazy"
                      className="rounded-[10px] object-cover min-[768px]:w-[400px] h-[350px]"
                    />
                    <div className="bg-[#00000063] absolute left-0 top-0 inset-0 rounded-[10px]"></div>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.7, type: "spring" }}
                    viewport={{ once: true }}
                    className="inline-block absolute bg-[#ff5722] py-[4px] px-[15px] rounded-[50px] top-[15px] right-[15px] font-[500] text-white text-[14px]"
                  >
                    {place.discount}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute bottom-[15px] left-[15px] text-white"
                  >
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
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Wrapper>
    </div>
  );
}

export default StylingPlaces;
