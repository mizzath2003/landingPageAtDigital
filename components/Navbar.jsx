import { useState } from "react";
import { NAV_LINKS } from "../constants/constants.js";

const NavLinks = ({ handleClick }) => (
  <>
    {NAV_LINKS.map((item) => (
      <a
        href={item.href}
        key={item.key}
        className="text-white regular-14 cursor-pointer pb-1.5 transition-all hover:font-bold "
        onClick={() => handleClick && handleClick()}
      >
        {item.label}
      </a>
    ))}
  </>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`bg-primary-500 w-full z-30 py-6 ${
        mobileMenuOpen ? "fixed" : "relative"
      }`}
    >
      <div className="flexBetween md:px-12 px-3">
        <a href="/">
          <img src="./Logo.svg" alt="logo" className="border-none w-auto" />
        </a>

        <ul className="hidden h-full gap-11 md:flex">
          <NavLinks />
        </ul>

        {/* Mobile */}
        <div className="absolute md:hidden block top-7 right-3">
          {mobileMenuOpen ? (
            <img
              src="./menuClose.jpg"
              alt="menu"
              className="inline-block cursor-pointer md:hidden"
              width={38}
              height={25}
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <img
              src="./Hamburger.svg"
              alt="menu"
              className="inline-block cursor-pointer md:hidden"
              width={31}
              height={24}
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>

        <div
          className={` fixed top-0 h-screen w-[300px] bg-gradient-to-tl from-white/10 to-primary-500 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
            mobileMenuOpen ? "left-0" : "-left-full"
          }`}
        >
          <img
            src="./Logo.svg"
            alt="Logo"
            className="w-full h-14 object-contain"
          />
          <div className="flex flex-col text-center gap-5 mt-10 ">
            <NavLinks handleClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
