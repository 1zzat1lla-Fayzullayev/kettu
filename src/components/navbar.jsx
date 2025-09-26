import { useEffect, useState } from "react";
import Wrapper from "../layout/wrapper";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
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

  const staticLinks = [
    { name: "Asosiy", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Sayohatlar", path: "/travels" },
    { name: "Biz Haqimizda", path: "/about" },
    { name: "Aloqa", path: "/contact" },
    { name: "Tizimga kirish uchun", path: "/login" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-[10px] z-[99] shadow-md py-1">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link to={"/"}>
              <img
                src="/logo_org.png"
                className="max-w-[55px] md:max-w-[80px]"
                alt="Logo"
              />
            </Link>

            <ul className="hidden lg:flex items-center gap-10">
              {staticLinks.map((menu, index) => (
                <li
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-300 
      ${
        activeLink === menu.name
          ? "text-green-500 font-semibold"
          : "hover:text-green-500"
      } 
      ${scrolled ? "text-black" : "text-white"}`}
                  onClick={() => handleLinkClick(menu.name)}
                >
                  <a href={menu.path}>{menu.name}</a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
              {/* {menuItems.map((menu, index) => (
                <li
                  key={index}
                  className={`relative group ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                  onMouseEnter={() => toggleDropdown(menu.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`relative pb-1 transition-all duration-300 
          ${
            activeLink === menu.name
              ? "text-green-500 font-semibold"
              : "hover:text-green-500"
          }`}
                    aria-expanded={activeDropdown === menu.name}
                    onClick={() => handleLinkClick(menu.name)}
                  >
                    {menu.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <div
                    className={`absolute top-[50px] left-0 w-[200px] bg-white shadow-lg transition-all duration-300 px-4 ease-in-out dropdown-menu 
          ${
            activeDropdown === menu.name
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-3"
          } `}
                  >
                    {menu.subItems.map((subItem, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-6 py-4 text-[#637082] border-b border-[#e9edf5] hover:text-green-500 hover:font-semibold transition-all duration-300 text-sm"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </li>
              ))} */}
            </ul>
          </div>

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

          <button className="lg:hidden" onClick={toggleMobileMenu}>
            <div className="flex flex-col bg-green-700 rounded-md w-10 h-10 justify-center items-center p-2">
              <div className="flex flex-col items-end gap-1">
                <div className="w-6 h-[2px] bg-white"></div>
                <div className="w-4 h-[2px] bg-white"></div>
                <div className="w-6 h-[2px] bg-white"></div>
                <div className="w-4 h-[2px] bg-white"></div>
              </div>
            </div>
          </button>
        </div>

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
              {/* {menuItems.map((menu, index) => (
                <li key={index} className="mb-4">
                  <button
                    onClick={() => {
                      toggleDropdown(menu.name);
                      handleLinkClick(menu.name);
                    }}
                    className={`block transition-all duration-300 ${
                      activeLink === menu.name
                        ? "text-green-500 font-semibold"
                        : "hover:text-green-500"
                    } cursor-pointer focus:outline-none w-full text-left`}
                  >
                    {menu.name}
                    <b className="caret"></b>
                  </button>
                  {activeDropdown === menu.name && (
                    <div className="ml-4 mt-2">
                      {menu.subItems.map((subItem, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block py-1 text-sm text-[#637082] hover:text-green-500 transition-all duration-300"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))} */}
              {staticLinks.map((menu, index) => (
                <li
                  key={index}
                  className={`mb-4 transition-all duration-300 ${
                    activeLink === menu.name
                      ? "text-green-500 font-semibold"
                      : "hover:text-green-500"
                  } cursor-pointer`}
                  onClick={() => handleLinkClick(menu.name)}
                >
                  <a href={menu.path}>{menu.name}</a>
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
