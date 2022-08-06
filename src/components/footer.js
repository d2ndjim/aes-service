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
          className="border-solid border-1 px-4 py-2 cursor-pointer md:px-8 md:py-4 bg-white hover:bg-black hover:text-white"
        >
          SCHEDULE A SERVICE
        </Link>
        <a
          href="tel:08123661281"
          className="border-solid border-1 bg-white px-7 py-2 md:px-8 md:py-4 text-black hover:bg-black hover:text-white"
        >
          CALL: 08123661281
        </a>
      </div>
    </div>
    <div className="bg-[#0E0D12] text-white grid grid-cols-1 gap-12 px-12 md:px-0 md:gap-0 md:grid-cols-3 items-center md:justify-items-center py-20">
      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Address</h4>
        <div className="flex gap-2 items-center">
          <div className="vertical-footer" />
          <p className="text-xs text-[#757477]">Lekki, Lagos, Nigeria.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Contacts</h4>
        <div className="flex gap-2 items-center">
          <div className="vertical-footer" />
          <p className="text-xs text-[#757477]">
            requestaquote@aengrs.com
            <br />
            08123661281
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-2 md:items-center">
        <h4 className="font-bold">Socials</h4>
        <div>
          <Socials />
        </div>
      </div>
    </div>
    <div className="bg-[#0E0D12] text-[#757477] flex justify-center p-8">
      <small>&copy; AES 2022. All rights reserved.</small>
    </div>
  </>
);

export default Footer;
