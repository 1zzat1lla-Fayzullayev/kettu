/* eslint-disable react/prop-types */
import Wrapper from "../layout/wrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TravelCard = ({
  title,
  location,
  skidka,
  price,
  starCount,
  foiz,
  img,
  index,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.2 });

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= starCount) {
        stars.push(
          <motion.i
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
            }
            transition={{
              delay: 0.5 + i * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            className="fa fa-star text-yellow-500"
          />
        );
      } else {
        stars.push(
          <motion.i
            key={i}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="fa fa-star-o text-yellow-500"
          />
        );
      }
    }
    return stars;
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 80, scale: 0.9 }
      }
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 80,
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="relative w-full mb-16"
    >
      <motion.div
        className="overflow-hidden rounded-[10px]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          src={img}
          className="w-full transition-all ease-in object-cover rounded-[10px] h-[220px]"
          alt={title}
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
        className="bg-white shadow-xl mx-auto absolute left-0 right-0 bottom-[-50px] rounded-[10px] p-2 md:p-5 max-w-[350px] w-full transition-all ease-in transform hover:shadow-2xl"
      >
        {foiz && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
            }
            transition={{ delay: index * 0.15 + 0.5, type: "spring" }}
            className="tour_info_price_discount"
          >
            {foiz}
          </motion.div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.15 + 0.6 }}
              className="text-[16px] md:text-[17px] font-bold transition-all ease-in hover:text-green-700 cursor-pointer pt-6 md:pt-0"
            >
              {title}
            </motion.h4>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.15 + 0.7 }}
              className="flex items-center gap-2"
            >
              <motion.img
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.15 + 0.8, type: "spring" }}
                src="/location.svg"
                className="w-[15px]"
                alt="Location"
                loading="lazy"
              />
              <span className="text-gray-600 text-[14px] md:text-[16px]">
                {location}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.15 + 0.9 }}
              className="flex items-center gap-1 mt-2"
            >
              {renderStars()}
            </motion.div>
          </div>

          <div className="flex flex-col items-end">
            {skidka && (
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ delay: index * 0.15 + 0.7 }}
                className="line-through text-gray-500"
              >
                {skidka}
              </motion.span>
            )}
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ delay: index * 0.15 + 0.8, type: "spring" }}
              className="font-bold text-lg text-green-600"
            >
              {price}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

function PopularTravel() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const travelData = [
    {
      title: "Samarqand Registon sayohati",
      location: "Registon maydoni, Samarqand",
      skidka: "$150",
      price: "$135",
      starCount: 5,
      foiz: "10% chegirma",
      img: "/samarkand.jpg",
    },
    {
      title: "Buxoro qadimiy shahar turi",
      location: "Poi-Kalon majmuasi, Buxoro",
      skidka: "$120",
      price: "$108",
      starCount: 4,
      foiz: "10% chegirma",
      img: "/bukhara.jpg",
    },
    {
      title: "Xiva Ichan Qal'a safari",
      location: "Ichan Qal'a, Xiva",
      skidka: "$100",
      price: "$95",
      starCount: 5,
      foiz: "5% chegirma",
      img: "/khiva.jpg",
    },
    {
      title: "Parij Eyfel minorasi kechasi",
      location: "Eyfel minorasi, Parij",
      skidka: "$200",
      price: "$185",
      starCount: 5,
      foiz: "7% chegirma",
      img: "/paris.jpg",
    },
    {
      title: "Dubay cho'l safari",
      location: "Dubay cho'li, BAA",
      skidka: "$180",
      price: "$162",
      starCount: 4,
      foiz: "10% chegirma",
      img: "/dubai.jpg",
    },
    {
      title: "Istanbul Bosfor kruizi",
      location: "Bosfor bo'g'ozi, Istanbul",
      skidka: "$130",
      price: "$117",
      starCount: 4,
      foiz: "10% chegirma",
      img: "/istanbul.jpg",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative mt-[10px] md:mt-[30px]"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#2C3F58] text-[17px] md:text-[20px] mb-2"
          >
            Mashhur sayohat yo'nalishlari
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.5, type: "spring" }}
            className="text-[25px] leading-[30px] md:leading-[40px] md:text-[30px] lg:text-[50px] font-bold text-[#2C3F58]"
          >
            O'zbekiston va dunyo bo'ylab
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {travelData.map((item, index) => (
            <TravelCard key={index} {...item} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
          >
            Barcha yo'nalishlarni ko'rish
          </motion.button>
        </motion.div>
      </Wrapper>
    </div>
  );
}

export default PopularTravel;
