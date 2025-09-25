import { Swiper, SwiperSlide } from "swiper/react";
import Wrapper from "../layout/wrapper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function OurTraveler() {
  const users = [
    {
      image: "/user4.jpg",
      name: "Javlonbek",
      job: "Sayyoh",
      desc: "Toshkentdan Samarqandga tezkor poyezdda biletni shu platforma orqali oldim. Juda qulay va oson bo‘ldi.",
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
      desc: "Yevropada sayohat qilayotganimda poyezd va avtobus yo‘nalishlarini bir joyda ko‘rib tanlash imkoniyati juda asqotdi.",
      rating: 5,
    },
    {
      image: "/user5.jpg",
      name: "Zarina",
      job: "Ish safarida",
      desc: "Parijdan Londonga poyezd safarini shu xizmat orqali oldim. Vaqtdan yutdim va muammo bo‘lmadi.",
      rating: 4,
    },
    {
      image: "/user1.jpg",
      name: "Olimjon",
      job: "Sarguzasht izlovchi",
      desc: "Har safar boshqa mamlakatga borganda mahalliy transportlarni ham ko‘rsatib berishi juda qulay bo‘lyapti.",
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
    <>
      <Wrapper>
        <div className="text-center mb-8 relative mt-0 md:mt-[100px]">
          <p className="text-[#2C3F58] lora text-[17px] md:text-[20px]">
            Sayohatchilarimiz fikri
          </p>
          <h2 className="text-[25px] md:text-[30px] lg:text-[50px] font-bold text-[#2C3F58]">
            Ularning tajribasi
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
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="w-full rounded-[10px] relative flex flex-col items-center text-center p-4 mb-[50px] select-none user_card transition-all ease-in">
                <div className="relative transition-all ease-in transform">
                  <img
                    src={user.image}
                    alt={user.name}
                    loading="lazy"
                    className="rounded-[50%] object-cover w-[80px] h-[80px] transition-all ease-in user_img"
                  />
                </div>

                <div className="text-black mt-4">
                  <h3 className="text-[20px] mb-[5px] font-[600]">
                    {user.name}
                  </h3>
                  <p className="text-[#666]">{user.job}</p>
                  <div className="flex justify-center my-2">
                    {renderStars(user.rating)}
                  </div>
                  <p className="text-[#666]">{user.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </>
  );
}

export default OurTraveler;
