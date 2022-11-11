function HeroPage() {
  return (
    <div className=" relative">
      <div className="absolute top-[65%] z-10 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-center  ">
        <h1 className="uppercase text-[120px] font-[700] text-[#fff] w-full my-20">
          FLY OVER WATER
        </h1>
        <h2 className="text-[26px] font-[300] text-[#fff] mt-10">
          THE INVENTORS OF THE EFOIL
        </h2>
        <h3 className="text-[26px]  w-[24%] text-[#474646] mx-auto">
          Explore the fastest, most durable, longest lasting eFoil experience.
        </h3>
        <button className="my-4 bg-[#fff] text-[#474646] hover:bg-[#1FABA5] hover:text-[#fff] font-[16px] delay-75 font-[300] rounded-[25px] px-10 py-3">
          Shop Now
        </button>
      </div>
      <div className="h-[900px] w-[100%] bg-green-400 ">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className=" w-full h-full object-cover">
          <source src="/high.mp4" />
        </video>
      </div>
    </div>
  );
}

export default HeroPage;
