import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import Logo from '../../assets/images/logo.png';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className="flex justify-between border-b mb-2">
        <div>
          <img src={Logo} alt={Logo} />
        </div>
        <button
          type="button"
          className="text-3xl text-[#F7B736] mr-10"
          onClick={() => setIsOpen(true)}
        >
          {!isOpen && <GiHamburgerMenu />}
        </button>
      </div>
      <nav>
        {isOpen && (
          <div className="mob-div" data-aos="fade-down">
            <button
              type="button"
              className="text-4xl close"
              onClick={() => setIsOpen(false)}
            >
              <CgClose />
            </button>
            <div className="flex flex-col gap-9 items-center mt-32">
              <NavLink
                to="/"
                className="nav-links text-white"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </NavLink>
              <Link
                to="resident"
                smooth
                className="nav-links .active text-white"
                onClick={() => setIsOpen(false)}
              >
                RESIDENTIAL
              </Link>
              <Link
                to="commercial"
                smooth
                className="nav-links text-white"
                onClick={() => setIsOpen(false)}
              >
                COMMERCIAL
              </Link>
              <NavLink
                to="/contact"
                className="nav-links text-white"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
