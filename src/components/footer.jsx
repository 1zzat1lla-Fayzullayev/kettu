import Wrapper from "../layout/wrapper";

function Footer() {
  return (
    <div className="bg-[#252C41]">
      <Wrapper>
        <section className="py-12">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/5 px-4 mb-8">
              <div className="logo mb-6">
                <a href="/">
                  <img
                    src="/logo_org.png"
                    alt="Sayohat Platforma"
                    className="w-[150px]"
                  />
                </a>
              </div>
              <div className="text-sm mb-2 text-[#858B9F] font-[600]">
                Email:
              </div>
              <div className="text-sm mb-4 text-[#858B9F]">info@sayohat.uz</div>
              <div className="text-sm mb-2 text-[#858B9F] font-[600]">
                Telefon:
              </div>
              <div className="text-sm mb-4 text-[#858B9F]">
                +998 90 123 45 67
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-400">
                  <img
                    src="/facebook-176-svgrepo-com.svg"
                    className="w-[20px]"
                  />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <img
                    src="/twitter-154-svgrepo-com.svg"
                    className="w-[20px]"
                  />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <img
                    src="/youtube-168-svgrepo-com.svg"
                    className="w-[20px]"
                  />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <img
                    src="/linked-in-logo-of-two-letters-svgrepo-com.svg"
                    className="w-[20px]"
                  />
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/5 px-4 mb-8">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Tezkor Havolalar
              </h2>
              <ul className="text-sm text-[#858B9F]">
                <li className="mb-4">
                  <a href="#">Asosiy</a>
                </li>
                <li className="mb-4">
                  <a href="#">Sayohatlar</a>
                </li>
                <li className="mb-4">
                  <a href="#">Blog</a>
                </li>
                <li className="mb-4">
                  <a href="#">Biz Haqimizda</a>
                </li>
                <li className="mb-4">
                  <a href="#">Aloqa</a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/5 px-4 mb-8">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Kategoriyalar
              </h2>
              <ul className="text-sm text-[#858B9F]">
                <li className="mb-4">
                  <a href="#">Transport</a>
                </li>
                <li className="mb-4">
                  <a href="#">Mehmonxonalar</a>
                </li>
                <li className="mb-4">
                  <a href="#">Turlar</a>
                </li>
                <li className="mb-4">
                  <a href="#">Ovqatlanish</a>
                </li>
                <li className="mb-4">
                  <a href="#">Sayohat maslahatlari</a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/5 px-4 mb-8">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Foydali Havolalar
              </h2>
              <ul className="text-sm text-[#858B9F]">
                <li className="mb-4">
                  <a href="#">Profil</a>
                </li>
                <li className="mb-4">
                  <a href="#">Buyurtmalar</a>
                </li>
                <li className="mb-4">
                  <a href="#">Sevimlilar</a>
                </li>
                <li className="mb-4">
                  <a href="#">Sozlamalar</a>
                </li>
                <li className="mb-4">
                  <a href="#">Yordam markazi</a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/5 px-4 mb-8">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Mobil Ilova
              </h2>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center space-x-2 border border-[#353d56] p-3 transition-all ease-in hover:border-[#ffffff4d]"
                >
                  <img src="/android.svg" className="w-[30px]" />
                  <div>
                    <div className="text-sm text-white">Google Play</div>
                    <div className="text-xs text-gray-400">Yuklab oling</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 border border-[#353d56] p-3 transition-all ease-in hover:border-[#ffffff4d]"
                >
                  <img src="/app-store.svg" className="w-[30px]" />
                  <div>
                    <div className="text-sm text-white">App Store</div>
                    <div className="text-xs text-gray-400">Hoziroq oling</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>

      <section className="bg-[#1B2132] py-6">
        <Wrapper>
          <div className="flex items-center">
            <div className="w-full">
              <div className="text-sm text-center text-[#858B9F]">
                © {new Date().getFullYear()} Sayohat Platforma – Barcha huquqlar
                himoyalangan
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}

export default Footer;
