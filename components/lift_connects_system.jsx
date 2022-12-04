import { useState } from "react";

function Lift_connects_system() {
  return (
    <>
      <div className="w-[95%] mx-auto   my-16">
        <h3 className="text-[26px] text-[#474646] font-[400] font-['News Cycle'] my-4">
          Lift Connect system
        </h3>
        <div className="flex gap-3 ">
          {/* first */}
          <div className="w-[33%] relative border-2 rounded-2xl hover:border-[#36B7B2] ease-in-out duration-200 overflow-hidden ">
            <div className="w-full h-full  cursor-pointer" href="">
              <img
                className="h-full w-full object-cover rounded-2xl "
                src="/lift_connect.webp"
                alt=""
              />
              <h2 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[30px] lg:text-[50px] font-[700] font-['News Cycle] text-white">
                SHOP LCS
              </h2>
            </div>
          </div>
          {/* second */}
          <div className="w-[33%] relative border-2 rounded-2xl hover:border-[#36B7B2] ease-in-out duration-200">
            <div href="" className="h-full w-full cursor-pointer">
              {" "}
              <img
                className="h-full w-full object-fill rounded-2xl"
                src="/LCS1.webp"
                alt="image is here"
              />
              <div className="absolute lg:bottom-5 bottom-2 left-5">
                <h4 className="text-[#474646] text-[12px] lg:text-[18px] font-[300] font-['News Cycle'] capitalize">
                  LCS FIXED ALUMINUM PROPELLER KIT
                </h4>
                <p className="text-[12px] lg:text-[18px] text-[#919090]">
                  $990.00
                </p>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="w-[33%] relative border-2 rounded-2xl hover:border-[#36B7B2] ease-in-out duration-200">
            <a href="" className="w-[561px] h-[81px]">
              {" "}
              <img
                className="h-full w-full object-fill rounded-2xl"
                src="/LCS2.webp"
                alt="image is here "
              />
              <div className="absolute lg:bottom-5 bottom-2 left-5">
                <h4 className="text-[#474646] text-[12px] lg:text-[18px] font-[300] font-['News Cycle'] capitalize">
                  LCS FIXED ALUMINUM PROPELLER KIT
                </h4>
                <p className="text-[12px] lg:text-[18px] text-[#919090]">
                  $990.00
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lift_connects_system;
