import Logo from "../images/logo.svg";
import MenuIcon from "../images/icon-hamburger.svg";
import CloseIcon from "../images/icon-close.svg";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-10 h-20 px-6 flex items-center justify-between lg:px-[10.5rem] bg-white">
      <img src={Logo} alt="EasyBank Logo" />

      <div className="hidden h-full lg:flex lg:space-x-7 text-sm text-grayish-blue">
        <button onClick={() => scrollTo("home")} className="menu-link">
          Home
        </button>
        <button onClick={() => scrollTo("about")} className="menu-link">
          About
        </button>
        <button onClick={() => scrollTo("contact")} className="menu-link">
          Contact
        </button>
        <button onClick={() => scrollTo("blog")} className="menu-link">
          Blog
        </button>
        <button onClick={() => scrollTo("careers")} className="menu-link">
          Careers
        </button>
      </div>

      <button className="hidden lg:block px-7 py-3 rounded-full text-white font-bold text-sm bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-50 cursor-pointer">
        Request Invite
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden cursor-pointer"
      >
        <img src={menuOpen ? CloseIcon : MenuIcon} alt="Menu Icon" />
      </button>

      {menuOpen && (
        <>
          <div className="absolute top-20 left-0 z-0 w-screen h-screen bg-black opacity-50"></div>
          <div className="absolute z-10 top-full w-[calc(100vw-3rem)] mx-auto mt-5 rounded-lg lg:hidden bg-white">
            <ul className="text-center px-4 py-8 space-y-5 text-dark-blue">
              <li>
                <button onClick={() => scrollTo("home")} className="w-full">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("about")} className="w-full">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="w-full">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("blog")} className="w-full">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("careers")} className="w-full">
                  Careers
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
