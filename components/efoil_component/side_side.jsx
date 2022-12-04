function Side_side({ image, title, description, button_value }) {
  return (
    <div className="flex w-full h-[850px] font-['Tinos'] overflow-hidden">
      <div className="w-[50%]">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="w-[50%]">
        <div className="w-full h-full flex justify-center items-start flex-col text-start ml-[7rem]">
          <h1 className="text-[68px] text-[#474646] font-bold w-[70%] leading-[67px] my-4">
            {title}
          </h1>
          <p className="text-[#919090] text-[22px] font-medium my-5 w-[70%] text-start">
            {description}
          </p>
          {button_value && (
            <button className="text-[19px] text-[#474646]  font-bold text-start w-full">
              {button_value}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Side_side;
