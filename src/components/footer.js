import React from 'react';
import { Link } from 'react-scroll';
import Socials from './socials';

const Footer = () => (
  <>
    <div className="flex flex-col justify-center items-center p-12 gap-3 md:gap-0 md:p-14 md:grid md:grid-cols-2 bg-[#F7B72F]">
      <h2 className="text-white font-bold text-xl md:text-2xl">
        Schedule An Appointment!
      </h2>
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <Link
          to="schedule"
          smooth
          className="border-solid border-1 px-4 py-2 md:px-8 md:py-4 bg-white hover:bg-black hover:text-white"
        >
          SCHEDULE A SERVICE
        </Link>
        <a
          href="tel:09098760067"
          className="border-solid border-2 px-4 py-2 md:px-8 md:py-4 text-white hover:bg-white hover:text-black"
        >
          CALL: 09098760067
        </a>
      </div>
    </div>
    <div className="bg-[#0E0D12] text-white flex flex-col justify-center md:grid md:grid-cols-3 items-center md:justify-items-center py-20">
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Address</h4>
        <div className="flex gap-2 items-center">
          <div className="vertical" />
          <p className="text-xs text-[#757477]">Lekki, Lagos, Nigeria.</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Contacts</h4>
        <div className="flex gap-2 items-center">
          <div className="vertical" />
          <p className="text-xs text-[#757477]">
            aesengr.com
            <br />
            09098760067
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="font-bold">Socials</h4>
        <Socials />
      </div>
    </div>
  </>
);

export default Footer;