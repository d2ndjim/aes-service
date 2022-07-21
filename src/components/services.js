import React, { useState } from 'react';
import { BsLightningCharge, BsCheck } from 'react-icons/bs';
import ResImage from '../assets/images/residential.jpg';
import ComImage from '../assets/images/commercial.jpg';

const Services = () => {
  const [isResidential, setIsResidential] = useState(true);

  return (
    <div className="mt-20 mb-20">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col justify-center items-center">
          <BsLightningCharge className="text-4xl text-[#F7B736]" />
          <h3>Our Services</h3>
        </div>
        <h1 className="text-[#25262E] md:text-3xl text-xl font-bold md:font-extrabold text-center mb-8">
          If It Is Electrical, We Do It...
        </h1>
        <p className="text-[#7E7A7A] text-xs text-center px-4">
          You can trust us to follow the safety measures required for all
          electrical installations and repairs. We respond to emergency repair
          needs as quickly as we can.
        </p>
      </div>
      <div id="resident" className="mt-10">
        <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-center items-center mb-8">
          <button
            type="button"
            className="border-solid border-1 border-[#7E7A7A] px-12 py-3 md:px-4 md:py-3 bg-[#F6F6F6]"
            onClick={() => setIsResidential(true)}
            style={
              isResidential
                ? { backgroundColor: '#F7B72F', color: 'white' }
                : undefined
            }
          >
            RESIDENTIAL ELECTRICAL
          </button>
          <button
            type="button"
            className="hidden md:block md:border-solid md:border-1 md:border-[#7E7A7A] md:px-4 md:py-3 md:bg-[#F6F6F6]"
            onClick={() => setIsResidential(false)}
            style={
              !isResidential
                ? { backgroundColor: '#F7B72F', color: 'white' }
                : undefined
            }
          >
            COMMERCIAL ELECTRICAL
          </button>
        </div>
        {isResidential ? (
          <div
            className="flex flex-col px-10 md:flex-row items-center justify-center md:gap-10 md:px-20"
            // data-aos="fade-down"
          >
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-10">
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Electrical Installation</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Our expert technicians are trained to install any type of
                  <br className="hidden md:block" />
                  electrical wiring for your home
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Lighting</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Full service electrical company offering some of the most
                  <br className="hidden md:block" />
                  comprehensive lighting services
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Addition/Renovation Wiring</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Can help you design and safely install updated electrical
                  <br className="hidden md:block" />
                  features
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Home Generators</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Install any type of backup generator for your home or
                  <br className="hidden md:block" />
                  business
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Electrical Repairs</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Do you have an electrical emergency that needs reliable
                  <br className="hidden md:block" />
                  electrical repair services?
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Circuit Breaker Panels</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  From electrical panel installation to repair, our licensed
                  <br className="hidden md:block" />
                  electricians can take care of it
                </p>
              </div>
            </div>
            <img src={ResImage} alt={ResImage} className="service-img pt-6" />
          </div>
        ) : (
          <div
            className="hidden md:flex flex-col px-10 md:flex-row items-center justify-center md:gap-10 md:px-20"
            // data-aos="fade-down"
          >
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-10">
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Electrical Installation</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Our expert technicians are trained to install any type of
                  <br />
                  electrical wiring for your home
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Lighting</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Full service electrical company offering some of the most
                  <br />
                  comprehensive lighting services
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Addition/Renovation Wiring</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Can help you design and safely install updated electrical
                  <br />
                  features
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Home Generators</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Install any type of backup generator for your home or
                  <br />
                  business
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Electrical Repairs</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Do you have an electrical emergency that needs reliable
                  <br />
                  electrical repair services?
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Circuit Breaker Panels</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  From electrical panel installation to repair, our licensed
                  <br />
                  electricians can take care of it
                </p>
              </div>
            </div>
            <img src={ComImage} alt={ComImage} className="service-img pt-6" />
          </div>
        )}
      </div>
      <div className="commercial mt-10 md:hidden">
        <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-center items-center mb-8">
          <button
            type="button"
            className="hidden border-solid border-1 border-[#7E7A7A] px-4 py-2 bg-[#F6F6F6]"
            onClick={() => setIsResidential(true)}
            style={
              isResidential
                ? { backgroundColor: '#F7B72F', color: 'white' }
                : undefined
            }
          >
            RESIDENTIAL ELECTRICAL
          </button>
          <button
            type="button"
            className="border-solid border-1 border-[#7E7A7A] px-12 py-3 md:px-4 md:py-2 bg-[#F6F6F6]"
            onClick={() => setIsResidential(false)}
            style={
              !isResidential
                ? { backgroundColor: '#F7B72F', color: 'white' }
                : undefined
            }
          >
            COMMERCIAL ELECTRICAL
          </button>
        </div>
        {isResidential ? (
          <div
            className="hidden md:flex px-10 md:flex-row items-center justify-center md:gap-10 md:px-20"
            // data-aos="fade-down"
          >
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-10">
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Electrical Installation</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Our expert technicians are trained to install any type of
                  <br />
                  electrical wiring for your home
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Lighting</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Full service electrical company offering some of the most
                  <br />
                  comprehensive lighting services
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Addition/Renovation Wiring</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Can help you design and safely install updated electrical
                  <br />
                  features
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Home Generators</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Install any type of backup generator for your home or
                  <br />
                  business
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Electrical Repairs</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Do you have an electrical emergency that needs reliable
                  <br />
                  electrical repair services?
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Circuit Breaker Panels</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  From electrical panel installation to repair, our licensed
                  <br />
                  electricians can take care of it
                </p>
              </div>
            </div>
            <img src={ResImage} alt={ResImage} className="service-img pt-6" />
          </div>
        ) : (
          <div
            className="flex flex-col px-10 md:flex-row items-center justify-center md:gap-10 md:px-20"
            // data-aos="fade-down"
          >
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-10">
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Electrical Installation</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Our expert technicians are trained to install any type of
                  <br className="hidden md:block" />
                  electrical wiring for your home
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Lighting</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Full service electrical company offering some of the most
                  <br className="hidden md:block" />
                  comprehensive lighting services
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Addition/Renovation Wiring</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Can help you design and safely install updated electrical
                  <br className="hidden md:block" />
                  features
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Home Generators</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Install any type of backup generator for your home or
                  <br />
                  business
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Electrical Repairs</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  Do you have an electrical emergency that needs reliable
                  <br className="hidden md:block" />
                  electrical repair services?
                </p>
              </div>
              <div className="text-xs">
                <div className="flex">
                  <BsCheck className="text-[#F7B736] text-base" />
                  <h4 className="font-bold">Circuit Breaker Panels</h4>
                </div>
                <p className="ml-4 mt-2 text-[#909193]">
                  From electrical panel installation to repair, our licensed
                  <br className="hidden md:block" />
                  electricians can take care of it
                </p>
              </div>
            </div>
            <img src={ComImage} alt={ComImage} className="service-img pt-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
