import React from 'react';
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Socials = () => (
  <div className="flex m-auto md:m-5">
    <a
      className="pr-5"
      href="https://instagram.com/aes.engr?igshid=YmMyMTA2M2Y="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Insta Page"
    >
      <FiInstagram className="text-[#757477] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      className="pr-5"
      href="https://www.linkedin.com/in/lekanj/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Linkedin profile"
    >
      <FiLinkedin className="text-[#757477] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      href="https://twitter.com/d2ndjim_"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Twitter profile"
    >
      <FiTwitter className="text-[#757477] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
  </div>
);

export default Socials;
