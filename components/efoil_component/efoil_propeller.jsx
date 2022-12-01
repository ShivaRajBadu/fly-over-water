import { useState } from "react";

function Efoil_propeller() {
  const srcs = ["propeller.webp", "propeller_3.webp", "propeller_2.webp"];
  const titles = [
    "ADVANCED PROPULSION",
    "PRECISION MACHINED PROPELLER",
    "PROTECTIVE SHROUD",
  ];
  const [source, setSource] = useState("propeller.webp");
  const [title, setTitle] = useState("ADVANCED PROPULSION");
  const handleHover = (index) => {
    setSource(srcs[index]);
    setTitle(titles[index]);
  };
  return (
    <div className=" h-[890px] w-full bg-center relative">
      <img
        className="w-full h-full absolute inset-0  object-cover"
        src={source}
        alt=""
      />
      <div className="max-w-[95%] mx-auto px-5 relative h-full w-full">
        <div className="absolute text-white top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[80%]">
          <h1 className="text-[68px] font-bold ">{title}</h1>
          <div className="flex justify-between mt-[6rem]">
            {/* first */}
            <div
              onMouseOver={() => handleHover(0)}
              className="max-w-[340px] text-center cursor-pointer group"
            >
              <p className="w-5 h-5 border rounded-full mx-auto group-hover:bg-[#36b7b2]"></p>
              <h2 className="text-[18px] mt-5">MOTOR</h2>
              <p className="text-[16px] text-[#fff]/60 group-hover:text-[#fff]">
                The LIFT3 eFoil motor is extremely efficient and quiet through
                the water, and it packs enough power to pull two riders at the
                same time.
              </p>
            </div>
            {/* second */}
            <div
              onMouseOver={() => handleHover(1)}
              className="max-w-[340px] cursor-pointer group "
            >
              <p className="w-5 h-5 border rounded-full mx-auto group-hover:bg-[#36b7b2]"></p>
              <h2 className="text-[18px] mt-5">Propeller</h2>
              <p className="text-[16px] text-[#fff]/60 group-hover:text-[#fff]">
                The LIFT3 eFoil motor is extremely efficient and quiet through
                the water, and it packs enough power to pull two riders at the
                same time.
              </p>
            </div>
            {/* third */}
            <div
              onMouseOver={() => handleHover(2)}
              className="max-w-[340px] cursor-pointer group"
            >
              <p className="w-5 h-5 border rounded-full mx-auto group-hover:bg-[#36b7b2]"></p>
              <h2 className="text-[18px] uppercase mt-5">Shroud</h2>
              <p className="text-[16px] text-[#fff]/60 group-hover:text-[#fff]">
                The LIFT3 eFoil motor is extremely efficient and quiet through
                the water, and it packs enough power to pull two riders at the
                same time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Efoil_propeller;
