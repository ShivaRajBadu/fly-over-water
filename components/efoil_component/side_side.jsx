function Side_side() {
  return (
    <div className="flex w-full h-[850px] font-['Tinos']">
      <div className="w-[50%]">
        <img
          className="w-full h-full object-cover"
          src="avaliable.webp"
          alt=""
        />
      </div>
      <div className="w-[50%]">
        <div className="w-full h-full flex justify-center items-start flex-col text-start ml-[7rem]">
          <h1 className="text-[68px] text-[#474646] font-bold w-[70%] leading-[67px] my-4">
            FINANCING AVAILABLE
          </h1>
          <p className="text-[#919090] text-[22px] font-medium my-5 w-[70%] text-start">
            Financing is available for Lift Foils eFoils with AFFIRM, qualifying
            buyers are eligible for up to 0% APR for 12 months.
          </p>
          <button className="text-[19px] text-[#474646]  font-bold text-start w-full">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Side_side;
