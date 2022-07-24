import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FiPhoneCall } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';

const Header = () => (
  <div className="header hidden md:flex justify-between items-center">
    <div className="flex items-center">
      <div>
        <img src={Logo} alt={Logo} />
      </div>
      <nav className="flex gap-7">
        <NavLink to="/" className="nav-links">
          HOME
        </NavLink>
        <Link to="resident" smooth className="nav-links .active cursor-pointer">
          RESIDENTIAL
        </Link>
        <Link to="resident" smooth className="nav-links cursor-pointer">
          COMMERCIAL
        </Link>
        <NavLink to="/contact" className="nav-links">
          CONTACT
        </NavLink>
      </nav>
    </div>
    <div className="flex items-center gap-7 mr-6">
      <a id="phone" href="tel:08123661281" className="text-[#F7B736] text-3xl">
        <FiPhoneCall className="hover:text-black" />
      </a>
      <a
        href="tel:08123661281"
        className="font-bold hover:text-[#F7B736] text-2xl"
      >
        08123661281
      </a>
    </div>
  </div>
);

export default Header;
