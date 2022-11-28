function Lift({
  video_src,
  title,
  sub_title,
  description,
  button_value,
  islift3,
}) {
  return (
    <div className="relative h-[900px] w-[100%]">
      <div className="w-full h-full">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="w-full h-full object-cover"
        >
          <source src={video_src} />
        </video>
      </div>
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center ">
        <h1 className="font-sans font-[700] text-[70px] text-[#fff] uppercase my-3">
          {title}
        </h1>
        <h2 className="text-[36px] font-sans leading-[41.4px] font-[400] text-white">
          {sub_title}
        </h2>
        <p
          className={` text-[rgba(255,255,255,0.6)] text-[28px] leading-[41.4px] ${
            islift3 ? "w-[25%]" : "w-[35%]"
          }   mx-auto font-sans font-[300] mb-28 mt-1`}
        >
          {description}
          {/* With the LIFT3 F, we took a new approach to our industry leading
          eFoils–working with fiberglass instead of carbon fiber to offer{" "}
          <span className="text-white">
            stability over pure performance, at a new low price.
          </span> */}
        </p>
        <div className="flex gap-5 justify-center items-center  ">
          {islift3 && (
            <ul className="grid gap-5 auto-cols-auto content-center grid-flow-col  grid-row-auto bg-[#fff]/10 backdrop-blur-[10px] h-[55px] w-[430px] rounded-[9999px] px-[48px]">
              <li className="text-[#fff]/60 text-[14px]">
                Speed{" "}
                <span className="block text-[#36b7b2] text-[13px]">
                  Up to 30mph
                </span>
              </li>
              <li className="text-[#fff]/60 text-[14px]">
                Ride Time{" "}
                <span className="block text-[#36b7b2] text-[13px]">
                  100 minutes
                </span>
              </li>
              <li className="text-[#fff]/60 text-[14px]">
                Advanced{" "}
                <span className="block text-[#36b7b2] text-[13px]">
                  Safety Features
                </span>
              </li>
            </ul>
          )}

          <button className="bg-white text-[#474646] px-8 py-3 rounded-[25px]  hover:bg-[#1FABA5] hover:text-white delay-100 ease-in-out">
            {button_value}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lift;
