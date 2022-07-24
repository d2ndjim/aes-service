import React from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import Socials from '../components/socials';
import VidImg from '../assets/images/vidImage.jpg';

const About = () => (
  <div>
    <div className="about-top flex items-center justify-center mb-20">
      <h1 className="text-3xl md:text-5xl text-white font-bold">About Us</h1>
    </div>
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 px-8 md:p-12 mb-12">
      <img src={VidImg} alt="lighting" className="w-full h-4/5 mb-8 md:mb-0" />
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <BsLightningCharge className="text-4xl text-[#F7BB42]" />
          <h1 className="text-xl font-bold">WHO WE ARE</h1>
        </div>
        <h1 className="text-4xl font-bold">Professional Contractors</h1>
        <p className="text-[#9091A1] leading-10 font-bold">
          With over ten years experience in delivering quality electrical services,
          We specialize in residential and commercial electrical services
          such as standby generator installations, service
          upgrades, and power quality designs. We care about
          helping our customers save energy and lower their electric bills with
          a variety of electrical upgrades.
        </p>
      </div>
    </div>
    <div className="bg-[#0E0D12] text-white grid grid-cols-1 gap-12 px-12 md:px-0 md:gap-0 md:grid-cols-3 items-center md:justify-items-center py-16">
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
  </div>
);

export default About;
