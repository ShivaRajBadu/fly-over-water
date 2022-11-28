import { useState } from "react";

function Industrial_lift() {
  const srcs = ["high_3.mp4", "high_2.mp4", "high_4.mp4"];
  const [source, setSource] = useState("high_3.mp4");
  setTimeout(function () {
    setSource(srcs[2]);
  }, 10000);

  const handleChange = (index) => {
    setSource(srcs[index]);
  };

  return (
    <div className="h-[900px] w-[100%] relative bg-[#474646]">
      <div className="h-full w-full relative">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay={true}
            muted={true}
            src={source}
          />
          ;
        </div>
      </div>
      <div className="absolute top-1/2 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] mx-auto ">
        <h1 className="font-sans font-[700] text-[70px] my-3 text-white">
          THE INDUSTRY-LEADING LIFT3
        </h1>
        <p className="w-[25%] mx-auto  text-[rgba(255,255,255,0.6)] mb-5">
          The LIFT3 eFoil features best-in-class aerodynamics
          <span className="text-white">
            and maneuverability, extra-durable construction, extended ride time,
            and the highest speed on the market. Now with
          </span>
          0% APR for up to 12 Months
          <span className="text-white">with Affirm.</span>
        </p>
        <button className="bg-white px-8 font-[16px] text-[#474646] hover:bg-[#1FABA5] hover:text-white py-2 mt-4 rounded-[20px]">
          Learn More
        </button>
      </div>
      <div className="flex  gap-8 mx-auto px-8 w-full absolute bottom-10 ">
        <div onClick={() => handleChange(0)} className="w-[33%] cursor-pointer">
          <p className="text-white font-sans text-[19px] py-1 font-[700]">
            Aerodynamic
            <span className="text-[rgba(255,255,255,0.6)]">Design</span>
          </p>
          <div className="w-full border  border-white"> </div>
        </div>
        <div onClick={() => handleChange(1)} className="w-[33%] cursor-pointer">
          <p className="text-white font-sans text-[19px] py-1 font-[700]">
            Upgraded
            <span className="text-[rgba(255,255,255,0.6)]">Propulsion</span>
          </p>
          <div className="w-full border border-white"> </div>
        </div>
        <div onClick={() => handleChange(2)} className="w-[33%] cursor-pointer">
          <p className="text-white font-sans py-1 text-[19px] font-[700]">
            Incresed
            <span className="text-[rgba(255,255,255,0.6)]">Ride Time</span>
          </p>
          <div className="w-full border  border-white"> </div>
        </div>
      </div>
    </div>
  );
}

export default Industrial_lift;
