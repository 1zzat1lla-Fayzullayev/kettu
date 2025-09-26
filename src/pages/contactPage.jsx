import React from "react";
import Wrapper from "../layout/wrapper";

function ContactPage() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/contactbg.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <Wrapper>
        <div className="relative py-20 md:py-28">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Biz bilan bog‘laning
          </h2>
          <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Savollaringiz, takliflaringiz yoki hamkorlik bo‘yicha murojaat
            qilish uchun quyidagi formani to‘ldiring. Biz imkon qadar tez
            aloqaga chiqamiz.
          </p>

          {/* Form */}
          <div className="max-w-2xl mx-auto bg-[#ffffff79] backdrop-blur-[10px] rounded-2xl shadow-lg p-8 text-black">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ism</label>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#365a84] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Emailingizni kiriting"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#365a84] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Xabar
                </label>
                <textarea
                  rows={4}
                  placeholder="Xabaringizni yozing..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#365a84] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg py-3 transition-all duration-300"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default ContactPage;
