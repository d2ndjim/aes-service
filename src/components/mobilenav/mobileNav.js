import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Logo from '../../assets/images/logo.png';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className="flex justify-between mb-2">
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
            <div className="flex items-center p-32">
              <a
                className="pr-5"
                href="https://instagram.com/aes.engr?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Insta Page"
              >
                <FiInstagram className="text-white text-2xl hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
              </a>
              <a
                className="pr-5"
                href="https://www.linkedin.com/in/aes-engr-559050245"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Linkedin profile"
              >
                <FiLinkedin className="text-white text-2xl hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
              </a>
              <a
                href="https://twitter.com/aes_engr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Twitter profile"
              >
                <FiTwitter className="text-white text-2xl hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
