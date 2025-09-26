import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  // Form container animatsiya
  const formVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  // Input field animatsiya
  const inputVariants = {
    initial: { opacity: 0, x: -30 },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Button animatsiya
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  // Text animatsiya
  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 1.0, duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="h-screen flex items-center justify-center px-[20px] relative overflow-hidden"
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0  bg-[#0000002d]"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-10 h-10 bg-white/10 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 right-16 w-8 h-8 bg-green-400/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-400/30 rounded-full blur-sm"
      />

      <motion.div
        variants={formVariants}
        className="relative z-10 bg-white/90 backdrop-blur-lg p-5 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
      >
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center "
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            TransportMix
          </motion.h2>
          <motion.p
            className="text-green-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Tizimga kirish
          </motion.p>
        </motion.div>

        <form onSubmit={handleLogin} className="space-y-2">
          {/* Email Input */}
          <motion.div variants={inputVariants} custom={0}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <motion.input
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
              }}
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="you@example.com"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div variants={inputVariants} custom={1}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parol
            </label>
            <motion.input
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
              }}
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="••••••••"
            />
          </motion.div>

          {/* Remember Me & Forgot Password */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between text-sm"
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-600">Eslab qolish</span>
            </label>
            <motion.span
              whileHover={{ scale: 1.05, color: "#16a34a" }}
              className="text-green-600 cursor-pointer hover:underline"
            >
              Parolni unutdingizmi?
            </motion.span>
          </motion.div>

          {/* Login Button */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg"
          >
            Tizimga kirish
          </motion.button>
        </form>

        {/* Register Link */}
        <motion.p
          variants={textVariants}
          className="text-center text-gray-600 mt-6 text-sm"
        >
          Hisobingiz yo'qmi?{" "}
          <motion.span
            whileHover={{ scale: 1.05, color: "#16a34a" }}
            className="text-green-600 cursor-pointer hover:underline font-medium"
          >
            Ro'yxatdan o'tish
          </motion.span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Login;
