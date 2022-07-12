import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from 'react-icons/fi'
import Logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <>
      <div>
        <div>
          <img src={Logo} alt={Logo} />
        </div>
        <nav>
          <Link to="/" className="nav-links">
            HOME
          </Link>
          <Link to="/residential" className="nav-links">
            RESIDENTIAL
          </Link>
          <Link to="/commercial" className="nav-links">
            COMMERCIAL
          </Link>
          <Link to="/Contact" className="nav-links">
            CONTACT
          </Link>
        </nav>
      </div>
      <div>
        <a href="#"><FiPhoneCall /></a>
        <a href="#">09098760067</a>
      </div>
    </>
  );
}

export default Header