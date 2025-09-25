/* eslint-disable react/prop-types */
import Wrapper from "../layout/wrapper";

const TravelCard = ({
  title,
  location,
  skidka,
  price,
  starCount,
  foiz,
  img,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= starCount) {
        stars.push(<i key={i} className="fa fa-star text-yellow-500"></i>);
      } else {
        stars.push(<i key={i} className="fa fa-star-o text-yellow-500"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="relative w-full mb-8">
      <div className="overflow-hidden rounded-[10px]">
        <img
          src={img}
          className="w-full transition-all ease-in object-cover hover:scale-105 transform rounded-[10px] h-[220px]"
          alt={title}
        />
      </div>
      <div className="bg-white shadow-xl mx-auto absolute left-0 right-0 bottom-[-50px] rounded-[5px] p-2 md:p-5 max-w-[350px] w-full transition-all ease-in transform">
        {foiz && <div className="tour_info_price_discount">{foiz}</div>}

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[16px] md:text-[17px] font-bold transition-all ease-in hover:text-green-700 cursor-pointer">
              {title}
            </h4>
            <div className="flex items-center gap-2">
              <img src="/location.svg" className="w-[15px]" alt="Location" />
              <span className="text-gray-600 text-[14px] md:text-[16px]">
                {location}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-2">{renderStars()}</div>
          </div>
          <div className="flex flex-col items-end">
            {skidka && (
              <span className="line-through text-gray-500">{skidka}</span>
            )}
            <p className="font-bold">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function PopularTravel() {
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
      title: "Xiva Ichan Qal’a safari",
      location: "Ichan Qal’a, Xiva",
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
      title: "Dubay cho‘l safari",
      location: "Dubay cho‘li, BAA",
      skidka: "$180",
      price: "$162",
      starCount: 4,
      foiz: "10% chegirma",
      img: "/dubai.jpg",
    },
    {
      title: "Istanbul Bosfor kruizi",
      location: "Bosfor bo‘g‘ozi, Istanbul",
      skidka: "$130",
      price: "$117",
      starCount: 4,
      foiz: "10% chegirma",
      img: "/istanbul.jpg",
    },
  ];

  return (
    <>
      <Wrapper>
        <div className="text-center mb-8 relative mt-[10px] md:mt-[30px]">
          <p className=" text-[#2C3F58] lora text-[17px] md:text-[20px]">
            Mashhur sayohat yo‘nalishlari
          </p>
          <h2 className="text-[25px] leading-[30px] md:leading-[40px] md:text-[30px] lg:text-[50px] font-bold text-[#2C3F58]">
            O‘zbekiston va dunyo bo‘ylab
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {travelData.map((item, index) => (
            <TravelCard key={index} {...item} />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default PopularTravel;
