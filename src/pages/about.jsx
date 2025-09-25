import React from "react";
import Wrapper from "../layout/wrapper";

function About() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://prodelo.by/wp-content/uploads/2023/08/turizm.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <Wrapper>
        <div className="relative py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Biz haqimizda</h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
            Biz sayohatchilar uchun dunyo bo‘ylab eng qulay va esda qolarli
            yo‘llarni topishda yordam beramiz. Siz qaysi manzilni tanlamang,
            bizning platformamiz sizga eng yaxshi transport variantlari va
            marshrutlarni taklif qiladi.
          </p>
        </div>
      </Wrapper>
    </section>
  );
}

export default About;
