import { useState } from "react";

function Efoil_propeller({ srcs, titles, hoverData }) {
  const [source, setSource] = useState(srcs[0]);
  const [title, setTitle] = useState(titles[0]);
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
            {hoverData.map((da, index) => (
              <div
                key={index}
                onMouseOver={() => handleHover(index)}
                className="max-w-[340px] text-center cursor-pointer group"
              >
                <p className="w-5 h-5 border rounded-full mx-auto group-hover:bg-[#36b7b2]"></p>
                <h2 className="text-[18px] mt-5">{da.first_text}</h2>
                <p className="text-[16px] text-[#fff]/60 group-hover:text-[#fff]">
                  {da.second_text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Efoil_propeller;
