import { Swiper, SwiperSlide } from "swiper/react";
import Wrapper from "../layout/wrapper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

function OurTraveler() {
  const users = [
    {
      image: "/user4.jpg",
      name: "Javlonbek",
      job: "Sayyoh",
      desc: "Toshkentdan Samarqandga tezkor poyezdda biletni shu platforma orqali oldim. Juda qulay va oson bo'ldi.",
      rating: 5,
    },
    {
      image: "/user3.jpg",
      name: "Malika",
      job: "Talaba sayohatchi",
      desc: "Turkiyaga safarimda Istanbuldan Baku tomon avtobusni ham shu yerdan topdim. Narxlarni solishtirish juda foydali ekan.",
      rating: 4,
    },
    {
      image: "/user2.jpg",
      name: "Alisher",
      job: "Yakka sayohatchi",
      desc: "Yevropada sayohat qilayotganimda poyezd va avtobus yo'nalishlarini bir joyda ko'rib tanlash imkoniyati juda asqotdi.",
      rating: 5,
    },
    {
      image: "/user5.jpg",
      name: "Zarina",
      job: "Ish safarida",
      desc: "Parijdan Londonga poyezd safarini shu xizmat orqali oldim. Vaqtdan yutdim va muammo bo'lmadi.",
      rating: 4,
    },
    {
      image: "/user1.jpg",
      name: "Olimjon",
      job: "Sarguzasht izlovchi",
      desc: "Har safar boshqa mamlakatga borganda mahalliy transportlarni ham ko'rsatib berishi juda qulay bo'lyapti.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fa fa-star text-yellow-400"></i>);
      } else {
        stars.push(<i key={i} className="fa fa-star-o text-yellow-400"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="py-16 bg-white">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#2C3F58] text-[17px] md:text-[20px] mb-2">
            Sayohatchilarimiz fikri
          </p>
          <h2 className="text-[25px] md:text-[30px] lg:text-[50px] font-bold text-[#2C3F58]">
            Ularning tajribasi
          </h2>
        </motion.div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="w-full rounded-[20px] flex flex-col items-center text-center p-6 bg-gray-50 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                <motion.img
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.05 + 0.1,
                  }}
                  viewport={{ once: true }}
                  src={user.image}
                  alt={user.name}
                  loading="lazy"
                  className="rounded-[50%] object-cover w-[80px] h-[80px] border-4 border-white shadow-md mb-4"
                />

                <div className="text-black">
                  <h3 className="text-[20px] mb-1 font-[600]">{user.name}</h3>
                  <p className="text-[#666] text-sm mb-3">{user.job}</p>

                  <div className="flex justify-center my-3 gap-1">
                    {renderStars(user.rating)}
                  </div>

                  <p className="text-[#666] leading-relaxed">{user.desc}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </div>
  );
}

export default OurTraveler;
