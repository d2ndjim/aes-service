import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';

const Header = () => (
  <div className="flex justify-between items-center">
    <div className="flex items-center">
      <div>
        <img src={Logo} alt={Logo} />
      </div>
      <nav className="flex gap-7">
        <NavLink to="/" className="nav-links">
          HOME
        </NavLink>
        <NavLink to="/residential" className="nav-links .active">
          RESIDENTIAL
        </NavLink>
        <NavLink to="/commercial" className="nav-links">
          COMMERCIAL
        </NavLink>
        <NavLink to="/Contact" className="nav-links">
          CONTACT
        </NavLink>
      </nav>
    </div>
    <div className="flex items-center gap-7 mr-6">
      <a id="phone" href="tel:09098760067" className="text-[#F7B736] text-2xl">
        <FiPhoneCall />
      </a>
      <a href="tel:09098760067" className="font-bold">
        09098760067
      </a>
    </div>
  </div>
);

export default Header;
