import React from 'react';
import { BsLightningCharge, BsTrophy } from 'react-icons/bs';
import { TbHourglassLow, TbLicense } from 'react-icons/tb';
import { GrUserExpert } from 'react-icons/gr';
import { IoIosTimer } from 'react-icons/io';

const Benefits = () => (
  <>
    <div className="flex flex-col justify-center items-center gap-3 mt-16 mb-32">
      <div className="flex flex-col justify-center items-center">
        <BsLightningCharge className="text-4xl text-[#F7B736]" />
        <h3>Our Benefits</h3>
      </div>
      <h1 className="text-[#25262E] text-3xl font-extrabold text-center mb-8">
        Why We Should Be Your Top
        <br />
        {' '}
        Choice
      </h1>
      <div className="grid grid-cols-5 gap-4 w-4/5">
        <div className="flex flex-col gap-4 items-center justify-center border-solid border-2 border-[#E5E5E5] p-6 hover:border-[#F7B736]">
          <TbHourglassLow className="text-[#F7B736] text-3xl" />
          <p className="ben text-[#25262E]">Quick Response Times</p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center border-solid border-2 border-[#E5E5E5] p-8 hover:border-[#F7B736]">
          <TbLicense className="text-[#F7B736] text-3xl" />
          <p className="ben text-[#25262E]">Licensed Electricians</p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center border-solid border-2 border-[#E5E5E5] p-8 hover:border-[#F7B736]">
          <GrUserExpert className="text-[#F7B736] text-3xl" />
          <p className="ben text-[#25262E] text-center">
            Experienced and Accesible
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center border-solid border-2 border-[#E5E5E5] p-8 hover:border-[#F7B736]">
          <BsTrophy className="text-[#F7B736] text-3xl" />
          <p className="ben text-[#25262E]">Super Service Award</p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center border-solid border-2 border-[#E5E5E5] p-8 hover:border-[#F7B736]">
          <IoIosTimer className="text-[#F7B736] text-3xl" />
          <p className="ben text-[#25262E]">10 years+ experience</p>
        </div>
      </div>
    </div>
    <div className="flex mb-6">
      <div className="wiring flex flex-col justify-between text-white items-center">
        <h2 className="font-extrabold text-2xl mx-8 mt-16">
          Electrical Wiring And Re-Wiring Experts
        </h2>
        <div className="mb-12">
          <div className="vertical" />
          <p className="text-[#7E7A7A]">
            For new home construction, AES is one of
            <br />
            {' '}
            the best service providers
          </p>
        </div>
      </div>
      <div className="solar flex flex-col justify-between text-white items-center">
        <h2 className="font-extrabold text-2xl mx-8 mt-16">
          Whole House Generator Installation & Maintenance
        </h2>
        <div className="mb-12">
          <div className="vertical-2" />
          <p className="text-[#7E7A7A]">
            For new home construction, AES is one of
            <br />
            {' '}
            the best service providers
          </p>
        </div>
      </div>
      <div className="industrial flex flex-col justify-between text-white items-center">
        <h2 className="font-extrabold text-2xl mx-8 mt-16">
          Commercial & industrial Services
        </h2>
        <div className="mb-12">
          <div className="vertical-3" />
          <p className="text-[#7E7A7A]">
            For new home construction, AES is one of
            <br />
            {' '}
            the best service providers
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Benefits;
