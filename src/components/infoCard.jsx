import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Wrapper from "../layout/wrapper";
import { Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      text: "Tezroq va arzonroq yetib borish yo'llarini solishtiring.",
    },
    {
      icon: "/face.svg",
      title: "Hamyonbop sayohat",
      text: "Byudjetingizga mos transportni tanlab, qulay sayohat qiling.",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 150,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#F9FAFB] pt-[50px] pb-[70px] overflow-hidden"
    >
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
            Nima uchun Transport Mix?
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Bizning platformamiz sayohatingizni oddiy va qulay qilish uchun
            yaratilgan
          </p>
        </motion.div>

        <Swiper
          spaceBetween={30}
          slidesPerView="auto"
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="flex items-start gap-4 mb-1 bg-white shadow-md hover:shadow-xl 
                           rounded-2xl p-6 cursor-pointer transition-all duration-300
                           border border-transparent hover:border-green-100"
              >
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex-shrink-0"
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-[55px] h-[55px]"
                    loading="lazy"
                  />
                </motion.div>

                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <h4 className="text-[15px] font-semibold text-[#1f2937] mb-2">
                    {card.title}
                  </h4>
                  <p className="text-[#6b7280] text-[15px] leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="custom-pagination mt-8 flex justify-center gap-2"
        />
      </Wrapper>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full -translate-x-16 -translate-y-16 opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full translate-x-24 translate-y-24 opacity-20"
      />
    </div>
  );
}

export default InfoCard;
