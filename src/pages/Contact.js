import React from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import Socials from '../components/socials';

const Contact = () => (
  <>
    <div className="contact-top flex items-center justify-center mb-20">
      <h1 className="text-white font-extrabold text-4xl">
        Contact Us
      </h1>
    </div>
    <div className="flex flex-col gap-4 items-center justify-center mb-20">
      <div className="flex flex-col justify-center items-center">
        <BsLightningCharge className="text-4xl text-[#F7B736]" />
        <h3 className="text-xl">Contact Us</h3>
      </div>
      <h1 className="text-[#25262E] md:text-4xl text-2xl font-bold md:font-extrabold text-center mb-8">
        Get In Touch With Us
      </h1>
      <form action="" method="" className="flex flex-col gap-4 w-4/5 md:w-7/12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <input
            name="name"
            type="text"
            placeholder="YOUR NAME*"
            required
            className="py-4 px-6 bg-[#F6F6F6] w-full md:w-1/2 outline-[#F7B72F]"
          />
          <input
            name="email"
            type="email"
            placeholder="YOUR EMAIL*"
            required
            className="py-4 px-6 bg-[#F6F6F6] w-full md:w-1/2 outline-[#F7B72F]"
          />
        </div>
        <textarea
          name="message"
          placeholder="YOUR MESSAGE*"
          rows="6"
          required
          className="p-6 bg-[#F6F6F6] outline-[#F7B72F]"
        />
        <button
          type="submit"
          className="m-auto text-white bg-[#F7B72F] mt-2 p-4 border-1 border-solid border-[#F7B72F] w-3/5 md:w-1/4 hover:bg-black"
        >
          SUBMIT
        </button>
      </form>
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
            aesengr.com
            <br />
            09098760067
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

export default Contact;
