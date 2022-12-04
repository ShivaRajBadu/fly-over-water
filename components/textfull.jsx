function Textfull({ main_text, sub_text, button_value, extra_text }) {
  return (
    <div className=" bg-white text-center py-16 ">
      <h1 className="text-[36px] max-w-[50%] lg:max-w-[28%] mx-auto font-light font-sans leading-[41px]  lg:mb-10 mb-6">
        {/* A feeling
        <span className="text-[#474646] font-thin">
          that can’t be described but can only be
        </span>
        experienced */}
        {main_text}
      </h1>
      <p className="text-[19px] leading-[28.5px] w-[50%] lg:w-[30%] mx-auto block mt-[3rem] lg:mb-10 mb-6 font-sans font-thin text-[#474646] ">
        {/* We’ve spent over a decade developing and fine-tuning the ultimate
        foiling experience. Whether you’re a complete beginner or an experienced
        thrill-seeker, into serene lakes or riding big surf, the Lift eFoil
        allows you to
        <span className="font-normal"> craft the adventure</span> that’s best
        for you with an all-electric, silent motor that
        <span className=" font-normal">glides through any body of water.</span> */}
        {sub_text}
      </p>
      {button_value && (
        <button className="text-[#fff] border-[#474646] bg-[#474646] hover:bg-[#6c6b6b] hover:border-[#6c6b6b] border px-8 py-3 rounded-[25px] delay-100 text-[16px]">
          {button_value}
        </button>
      )}
      <p className="text-[19px] text-[#474646]">{extra_text}</p>
    </div>
  );
}

export default Textfull;
