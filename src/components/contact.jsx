import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    telegram: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // oddiy validatsiya
    if (!formData.email.includes("@")) {
      toast.error("Email noto‘g‘ri!");

      return;
    }
    if (!formData.telegram) {
      toast.error("Telegram username kiriting");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendToTelegram(formData);
      toast.success("Ma'lumotlaringiz yuborildi!");
      setFormData({ firstName: "", lastName: "", telegram: "", email: "" });
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("Yuborishda xatolik yuz berdi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendToTelegram = async (data) => {
    const telegramBotToken = "8409675343:AAGHaiD8FJs0Z93Hcaoq6GzqOj9moFjtxUk"; // default token
    const chatId = 6475396776;

    const message = `
📢 Yangi odammm!
👤 Ism: ${data.firstName}
👥 Familiya: ${data.lastName}
📱 Telegram: @${data.telegram.replace(/^@/, "")}
📧 Email: ${data.email}
⏰ Vaqt: ${new Date().toLocaleString()}
    `;

    await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative mt-[50px] w-full contact text-white flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-600 rounded-full -translate-x-36 -translate-y-36 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full translate-x-48 translate-y-48 opacity-20"></div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-20 h-20 border-2 border-green-300 rounded-full opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-16 h-16 border-2 border-green-200 rounded-full opacity-40"
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black leading-tight"
              >
                Sayohat yangiliklari va{" "}
                <span className="text-green-500">chegirmalar!</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl opacity-90 leading-relaxed text-black"
              >
                Obuna bo'ling va eng so'nggi yo'nalishlar, transport
                imkoniyatlari hamda maxsus chegirmalardan xabardor bo'ling.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#10b981" }}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Ismingiz"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-black border-2 border-[#80808028] transition-all"
                    required
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#10b981" }}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Familiyangiz"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-black border-2 border-[#80808028] transition-all"
                    required
                  />
                </div>

                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: "#10b981" }}
                  type="text"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  placeholder="Telegram username (sizningusername)"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-black border-2 border-[#80808028] transition-all"
                  required
                />

                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: "#10b981" }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email manzilingiz"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-black border-2 border-[#80808028] transition-all"
                  required
                />

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Obuna bo'lish"}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
