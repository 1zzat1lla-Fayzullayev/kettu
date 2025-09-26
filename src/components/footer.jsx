import {
  ArrowRight,
  CheckCircle,
  Compass,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import Wrapper from "../layout/wrapper";

function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-start flex-col space-x-2 mb-4">
                <div className="">
                  <img src="/logo_org.png" alt="" className="w-[100px]" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Transport Mix</h1>
                  <p className="text-xs text-gray-400">Sayohat platformasi</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Dunyodagi barcha transportlar va mehmonxonalar bir platformada.
                Sayohatingizni oson va qulay rejalashtiring.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Tezkor havolalar</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Biz haqimizda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Transportlar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Mehmonxonalar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Sayohat paketlari
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Hamkorlik
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Qo'llab-quvvatlash</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Yordam markazi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Aloqa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Shartlar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Maxfiylik
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Bekor qilish
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Bog'lanish</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">+998 90 123 45 67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">info@transportmix.uz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Toshkent, O'zbekiston</span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-medium mb-3">Yangiliklar</h5>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Email manzil"
                    className="flex-1 bg-gray-800 px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center">
            <div className="flex items-center">
              <span className="text-gray-400">
                © 2024 Transport Mix. Barcha huquqlar himoyalangan.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
