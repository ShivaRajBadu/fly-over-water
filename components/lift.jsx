function Lift() {
  return (
    <div className="relative h-[900px] w-[100%]">
      <div className="w-full h-full">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="w-full h-full object-cover">
          <source src="/high (1).mp4" />
        </video>
      </div>
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center ">
        <h1 className="font-sans font-[700] text-[70px] text-[#fff] uppercase my-3">
          THE NEW LIFT3 F
        </h1>
        <h2 className="text-[36px] font-sans leading-[41.4px] font-[400] text-white">
          Ready for the next era in watersports?
        </h2>
        <p className=" text-[rgba(255,255,255,0.6)] text-[28px] leading-[41.4px] w-[35%]  mx-auto font-sans font-[300] mb-28">
          With the LIFT3 F, we took a new approach to our industry leading
          eFoils–working with fiberglass instead of carbon fiber to offer{" "}
          <span className="text-white">
            stability over pure performance, at a new low price.
          </span>
        </p>
        <button className="bg-white text-[#474646] px-8 py-3 rounded-[25px] mt-16 hover:bg-[#1FABA5] hover:text-white delay-100 ease-in-out">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Lift;
