import React from 'react';
import { Link } from 'react-router-dom';
import HomeContact from './homeContact';
import './intro.css';

const Intro = () => (
  <div className="main">
    <div className="content">
      <h1 className="text" data-aos="fade-right">
        Serving Your
        <br />
        Electrical Needs
        <br />
        <p className="para md:text-sm md:text-[#73787C]">
          At AES, we are proud to offer quality electrical services to customers
          throughout Nigeria.
        </p>
        <br className="md:hidden" />
        <Link
          to="/about"
          className="p-3 border-solid border-1 text-base md:p-4 bg-[#F7B736] hover:bg-[#fff] hover:text-black"
        >
          LEARN MORE
        </Link>
      </h1>
    </div>
    <div className="flex flex-col md:grid grid-cols-2 mb-4">
      <div className="w-full py-16 md:py-30 bg-[#F6F6F6]">
        <h3 className="px-10 text-2xl text-[#25262E] italic mb-10">
          &quot;We provide Electrical Installations, Upgrades, and
          Maintenance.&quot;
        </h3>
        <Link
          to="/about"
          className="s-link p-3 border-[#F7B736] border-solid border-2 md:p-4 text-base hover:bg-[#F7B736] hover:text-white"
        >
          READ MORE
        </Link>
      </div>
      <div className="w-full h-full bg-[#F7B736] flex flex-col">
        <div className="mt-5 md:mx-14 md:mt-8 md:py-30">
          <h2 className="ml-2 md:text-left p-2 font-extrabold text-white text-2xl">
            Schedule Service
          </h2>
          <HomeContact />
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
