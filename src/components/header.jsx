import { useState } from "react";
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
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-[28px] md:text-[36px] lg:text-[52px] font-bold text-center"
          >
            Transport Mix bilan sayohatingizni rejalang!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white mt-4 text-center max-w-2xl text-lg"
          >
            Samolyot, avtobus, mashina yoki kema – barchasi bitta platformada.
            Sizga mos va arzon yo‘lni toping!
          </motion.p>

          {/* Search form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative mt-10 bg-white rounded-xl shadow-lg flex flex-col lg:flex-row items-end justify-between gap-4 p-6 w-full lg:w-auto"
          >
            {/* From */}
            <div className="flex flex-col w-full lg:w-[220px]">
              <label className="text-gray-600 font-medium mb-2">Qayerdan</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="text"
                placeholder="Toshkent"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 
                           focus:ring-green-500 transition-all duration-300 hover:shadow-md"
              />
            </div>

            {/* To */}
            <div className="flex flex-col w-full lg:w-[220px]">
              <label className="text-gray-600 font-medium mb-2">Qayerga</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="text"
                placeholder="Parij"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 
                           focus:ring-green-500 transition-all duration-300 hover:shadow-md"
              />
            </div>

            {/* Dates */}
            <div className="flex flex-col w-full lg:w-[220px] relative">
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
            </div>

            {/* Guests */}
            <div className="flex flex-col w-full lg:w-[180px] relative">
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
                    className="absolute top-[110%] bg-white border rounded-md shadow-md p-4 z-50 w-[220px]"
                  >
                    {/* Adults */}
                    <div className="flex justify-between items-center mb-2">
                      <span>Kattalar</span>
                      <div className="flex gap-2">
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.8 }}
                          onClick={() => setAdults(Math.max(0, adults - 1))}
                          className="bg-gray-200 px-2 rounded"
                        >
                          -
                        </motion.button>
                        <span>{adults}</span>
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.8 }}
                          onClick={() => setAdults(adults + 1)}
                          className="bg-gray-200 px-2 rounded"
                        >
                          +
                        </motion.button>
                      </div>
                    </div>
                    {/* Youth */}
                    <div className="flex justify-between items-center mb-2">
                      <span>Yoshlar</span>
                      <div className="flex gap-2">
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.8 }}
                          onClick={() => setYouth(Math.max(0, youth - 1))}
                          className="bg-gray-200 px-2 rounded"
                        >
                          -
                        </motion.button>
                        <span>{youth}</span>
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.8 }}
                          onClick={() => setYouth(youth + 1)}
                          className="bg-gray-200 px-2 rounded"
                        >
                          +
                        </motion.button>
                      </div>
                    </div>
                    {/* Children */}
                    <div className="flex justify-between items-center">
                      <span>Bolalar</span>
                      <div className="flex gap-2">
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.8 }}
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="bg-gray-200 px-2 rounded"
                        >
                          -
                        </motion.button>
                        <span>{children}</span>
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.8 }}
                          onClick={() => setChildren(children + 1)}
                          className="bg-gray-200 px-2 rounded"
                        >
                          +
                        </motion.button>
                      </div>
                    </div>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={handleApplyGuests}
                      className="bg-[#263547] text-white px-4 py-2 rounded mt-3 w-full"
                    >
                      Apply
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Submit button */}
            <div className="w-full lg:w-[180px]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white w-full h-[60px] rounded-md font-semibold hover:bg-green-600 transition"
              >
                Qidirish
              </motion.button>
            </div>
          </motion.form>

          {/* Transport icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
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
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200 }}
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
