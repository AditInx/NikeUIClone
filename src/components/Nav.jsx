import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger Icon and Dropdown */}
        <div className="hidden max-lg:block">
          <button onClick={toggleDropdown}>
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 top-16 bg-white shadow-md rounded-md p-4">
              {navLinks.map((item) => (
                <li key={item.label} className="mb-2 last:mb-0">
                  <a
                    href={item.href}
                    className="fonts-montserrat leading-normal text-lg text-slate-gray block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
