import { useState, useEffect } from "react";
import Wrapper from "../layout/wrapper";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const menuItems = [
    {
      name: "Asosiy",
      subItems: ["Asosiy 1", "Asosiy 2", "Asosiy 3", "Asosiy 4"],
    },
    {
      name: "Sayohatlar",
      subItems: ["Turlar ro'yxati", "Yagona sayohat"],
    },
  ];
  const staticLinks = ["Blog", "Biz Haqimizda", "Aloqa"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-[10px] z-[99] shadow-md py-1 transition-colors duration-300`}
    >
      <Wrapper>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-16">
            <img
              src="/logo_org.png"
              className="max-w-[55px] md:max-w-[80px]"
              alt="Logo"
            />

            {/* Desktop menu */}
            <ul className="hidden lg:flex items-center gap-10">
              {menuItems.map((menu, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => toggleDropdown(menu.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`relative pb-1 transition-all duration-300 
                    ${
                      activeLink === menu.name
                        ? "font-semibold"
                        : "hover:font-semibold"
                    }
                    ${
                      scrolled
                        ? "text-black hover:text-green-500"
                        : "text-white hover:text-green-300"
                    }
                    `}
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
                    }`}
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
              ))}

              {staticLinks.map((menu, index) => (
                <li
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-300 
                  ${activeLink === menu ? "font-semibold" : ""}
                  ${
                    scrolled
                      ? "text-black hover:text-green-500"
                      : "text-white hover:text-green-300"
                  }
                `}
                  onClick={() => handleLinkClick(menu)}
                >
                  {menu}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div
            className={`hidden lg:flex items-center gap-2 cursor-pointer ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <img src="/user-profile.svg" className="w-6" alt="User" />
            <p className="text-md font-medium">Tizimga kirish</p>
          </div>

          {/* Mobile hamburger */}
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
      </Wrapper>
    </nav>
  );
}

export default Navbar;
