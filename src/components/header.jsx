import { useState, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Bus, Ship, Car } from "lucide-react";

function Header() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [adults, setAdults] = useState(1);
  const [youth, setYouth] = useState(0);
  const [children, setChildren] = useState(0);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [totalGuests, setTotalGuests] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDateChange = (dates, e) => {
    e.preventDefault();
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) setShowDatePicker(false);
  };

  const handleApplyGuests = (e) => {
    e.preventDefault();
    setTotalGuests(adults + youth + children);
    setShowGuestPicker(false);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat header-bg flex justify-center items-center z-[90] pb-5 md:pb-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b from-[#0f1f44]/30 to-[#0f1f44]/90"
      />

      <Wrapper>
        <div className="relative flex flex-col items-center justify-center h-full pt-[100px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-[28px] md:text-[36px] lg:text-[52px] font-bold text-center"
          >
            Transport Mix bilan sayohatingizni rejalang!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white mt-4 text-center max-w-2xl text-lg"
          >
            Samolyot, avtobus, mashina yoki kema – barchasi bitta platformada.
            Sizga mos va arzon yo'lni toping!
          </motion.p>

          <motion.form
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative mt-10 bg-[#ffffff9a] rounded-xl shadow-lg flex flex-col lg:flex-row items-end justify-between gap-4 p-6 w-full lg:w-auto"
          >
            <motion.div
              initial={isMobile ? { x: -100, opacity: 0 } : { opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: isMobile ? 0.7 : 0, duration: 0.6 }}
              className="flex flex-col w-full lg:w-[220px]"
            >
              <label className="text-gray-600 font-medium mb-2">Qayerdan</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="text"
                placeholder="Toshkent"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 
                           focus:ring-green-500 transition-all duration-300 hover:shadow-md"
              />
            </motion.div>

            <motion.div
              initial={isMobile ? { x: 100, opacity: 0 } : { opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: isMobile ? 0.8 : 0, duration: 0.6 }}
              className="flex flex-col w-full lg:w-[220px]"
            >
              <label className="text-gray-600 font-medium mb-2">Qayerga</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="text"
                placeholder="Parij"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 
                           focus:ring-green-500 transition-all duration-300 hover:shadow-md"
              />
            </motion.div>

            <motion.div
              initial={isMobile ? { y: 50, opacity: 0 } : { opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: isMobile ? 0.9 : 0, duration: 0.6 }}
              className="flex flex-col w-full lg:w-[220px] relative"
            >
              <label className="text-gray-600 font-medium mb-2">Sanalar</label>
              <div
                className="border rounded-md px-4 py-2 cursor-pointer hover:border-green-500 transition-all duration-300"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                {startDate && endDate
                  ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                  : "Sanani tanlang"}
              </div>

              <AnimatePresence>
                {showDatePicker && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-[110%] z-50 bg-white p-4 rounded-md shadow-md"
                  >
                    <DatePicker
                      selected={startDate}
                      onChange={handleDateChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
                      monthsShown={2}
                      minDate={new Date()}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={isMobile ? { y: 50, opacity: 0 } : { opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: isMobile ? 1.0 : 0, duration: 0.6 }}
              className="flex flex-col w-full lg:w-[180px] relative"
            >
              <label className="text-gray-600 font-medium mb-2">
                Mehmonlar
              </label>
              <div
                className="border rounded-md px-4 py-2 cursor-pointer hover:border-green-500 transition-all duration-300"
                onClick={() => setShowGuestPicker(!showGuestPicker)}
              >
                {totalGuests} kishi
              </div>

              <AnimatePresence>
                {showGuestPicker && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-[110%] right-0 lg:left-0 bg-white border border-gray-200 rounded-xl shadow-lg p-6 z-50 w-[300px]"
                  >
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Mehmonlar soni
                      </h3>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => setShowGuestPicker(false)}
                        className="text-gray-400 hover:text-gray-600 text-xl font-bold"
                      >
                        ×
                      </motion.button>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-gray-800">
                            Kattalar
                          </div>
                          <div className="text-sm text-gray-500">16+ yosh</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <motion.button
                            type="button"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#f3f4f6",
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center 
                       text-gray-600 font-medium text-lg transition-colors duration-200
                       hover:border-green-500 hover:text-green-600"
                            disabled={adults <= 1}
                          >
                            -
                          </motion.button>
                          <span className="w-8 text-center font-semibold text-gray-800 text-lg">
                            {adults}
                          </span>
                          <motion.button
                            type="button"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#f3f4f6",
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setAdults(adults + 1)}
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center 
                       text-gray-600 font-medium text-lg transition-colors duration-200
                       hover:border-green-500 hover:text-green-600"
                          >
                            +
                          </motion.button>
                        </div>
                      </div>

                      {/* Youth */}
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-gray-800">
                            Yoshlar
                          </div>
                          <div className="text-sm text-gray-500">
                            12-15 yosh
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <motion.button
                            type="button"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#f3f4f6",
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setYouth(Math.max(0, youth - 1))}
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center 
                       text-gray-600 font-medium text-lg transition-colors duration-200
                       hover:border-green-500 hover:text-green-600"
                            disabled={youth <= 0}
                          >
                            -
                          </motion.button>
                          <span className="w-8 text-center font-semibold text-gray-800 text-lg">
                            {youth}
                          </span>
                          <motion.button
                            type="button"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#f3f4f6",
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setYouth(youth + 1)}
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center 
                       text-gray-600 font-medium text-lg transition-colors duration-200
                       hover:border-green-500 hover:text-green-600"
                          >
                            +
                          </motion.button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-gray-800">
                            Bolalar
                          </div>
                          <div className="text-sm text-gray-500">2-11 yosh</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <motion.button
                            type="button"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#f3f4f6",
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              setChildren(Math.max(0, children - 1))
                            }
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center 
                       text-gray-600 font-medium text-lg transition-colors duration-200
                       hover:border-green-500 hover:text-green-600"
                            disabled={children <= 0}
                          >
                            -
                          </motion.button>
                          <span className="w-8 text-center font-semibold text-gray-800 text-lg">
                            {children}
                          </span>
                          <motion.button
                            type="button"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#f3f4f6",
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setChildren(children + 1)}
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center 
                       text-gray-600 font-medium text-lg transition-colors duration-200
                       hover:border-green-500 hover:text-green-600"
                          >
                            +
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Total and Apply button */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium text-gray-700">Jami:</span>
                        <span className="font-semibold text-lg text-green-600">
                          {adults + youth + children} kishi
                        </span>
                      </div>
                      <motion.button
                        type="button"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleApplyGuests}
                        className="bg-green-500 text-white w-full py-3 rounded-lg font-semibold 
                   hover:bg-green-600 transition-all duration-200 text-lg"
                      >
                        Tasdiqlash
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={isMobile ? { scale: 0, opacity: 0 } : { opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: isMobile ? 1.1 : 0,
                type: "spring",
                stiffness: 200,
              }}
              className="w-full lg:w-[180px]"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white w-full h-[60px] rounded-md font-semibold hover:bg-green-600 transition"
              >
                Qidirish
              </motion.button>
            </motion.div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="flex gap-8 mt-10 text-white"
          >
            {[
              { icon: Plane, label: "Samolyot" },
              { icon: Bus, label: "Avtobus" },
              { icon: Car, label: "Avtomobil" },
              { icon: Ship, label: "Kema" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 1.3 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <Icon size={36} />
                <span className="text-sm mt-1">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
