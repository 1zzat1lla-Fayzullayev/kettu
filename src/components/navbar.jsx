import { useEffect, useState } from "react";
import Wrapper from "../layout/wrapper";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Faqat desktop uchun linklar
  const desktopLinks = [
    { name: "Asosiy", path: "/" },
    { name: "Biz Haqimizda", path: "/about" },
    { name: "Aloqa", path: "/contact" },
  ];

  // Faqat mobil uchun linklar (hammasi + tizimga kirish uchun)
  const mobileLinks = [
    ...desktopLinks,
    { name: "Tizimga kirish uchun", path: "/login" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-[10px] z-[99] shadow-md py-1">
      <Wrapper>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-16">
            <Link to={"/"}>
              <img
                src="/logo_org.png"
                className="max-w-[55px] md:max-w-[80px]"
                alt="Logo"
              />
            </Link>

            {/* Desktop menu */}
            <ul className="hidden lg:flex items-center gap-10">
              {desktopLinks.map((menu, index) => (
                <li
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-300 
                  ${
                    activeLink === menu.name
                      ? "text-[#365a84] font-semibold"
                      : ""
                  } 
                  ${scrolled ? "text-black" : "text-white"}`}
                  onClick={() => handleLinkClick(menu.name)}
                >
                  <Link to={menu.path}>{menu.name}</Link>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#365a84] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop user icon (faqat login button, text yo‘q) */}
          <Link to={"/login"}>
            <div className="hidden lg:flex items-center gap-2 cursor-pointer">
              <img src="/user-profile.svg" className="w-6" alt="User" />
              <p
                className={`text-md font-medium ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                Tizimga kirish
              </p>
            </div>
          </Link>

          {/* Mobile burger menu */}
          <button className="lg:hidden" onClick={toggleMobileMenu}>
            <div className="flex flex-col bg-[#365a84] rounded-md w-10 h-10 justify-center items-center p-2">
              <div className="flex flex-col items-end gap-1">
                <div className="w-6 h-[2px] bg-white"></div>
                <div className="w-4 h-[2px] bg-white"></div>
                <div className="w-6 h-[2px] bg-white"></div>
                <div className="w-4 h-[2px] bg-white"></div>
              </div>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-[#000000b6] h-screen bg-opacity-40 z-[99] transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMobileMenu}
        >
          <div
            className={`fixed left-0 top-0 h-screen w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="bg-[#e44343] px-4 py-3 text-center text-white font-semibold cursor-pointer flex items-center justify-center"
              onClick={toggleMobileMenu}
            >
              <img src="/close.svg" className="w-[30px]" />
              <span> Yopish</span>
            </div>
            <ul className="p-4">
              {mobileLinks.map((menu, index) => (
                <li
                  key={index}
                  className={`mb-4 transition-all duration-300 ${
                    activeLink === menu.name
                      ? "text-[#365a84] font-semibold"
                      : "hover:text-[#365a84]"
                  } cursor-pointer`}
                  onClick={() => handleLinkClick(menu.name)}
                >
                  <Link to={menu.path}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
}

export default Navbar;
