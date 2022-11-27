function Surf_foils() {
  return (
    <div className="bg-[#2E3335] py-10 font-['News Cycle']">
      <div className="text-center mb-24">
        <h1 className="text-[70px] font-[700] text-white my-2">SURF FOILS</h1>
        <p className="text-[36px] font-[400] text-[#6C6B6B] max-w-[44%] px-5 mx-auto font-['News Cycle'] text-center">
          For over 10 years we've made performance foils for{" "}
          <span className="text-white"> the committed</span> ,the
          <span className="text-white"> future forward</span>, the{" "}
          <span> risk takers</span>--riders that need foil hardware that is both{" "}
          <span className="text-white">innovative and unbelievably tough.</span>
        </p>
      </div>
      <div className="flex gap-14 justify-center mt-[10rem]">
        {/* wings */}
        <div className="text-center">
          <a href="/Wings">
            <div className="rounded-xl w-[318px] h-[419px]">
              <img
                className="w-full h-full rounded-3xl object-fill"
                src="wing.webp"
                alt=""
              />
            </div>
            <h3 className="text-[35px] text-white font-[300] font-['News Cycle'] mt-5">
              Wings
            </h3>
          </a>

          <button className="text-[16px] bg-white text-[#474646] py-3 px-8 rounded-[1.5rem] my-3 hover:bg-[#36B7B2] hover:text-white ease-in-out duration-200">
            Learn More
          </button>
        </div>
        {/* boards */}
        <div className="text-center mt-16">
          <a href="/boards">
            <div className="rounded-xl w-[318px] h-[419px]">
              <img
                className="w-full h-full rounded-3xl object-fill"
                src="wing2.webp"
                alt=""
              />
            </div>
            <h3 className="text-[35px] text-white font-[300] font-['News Cycle'] mt-5">
              Boards
            </h3>
          </a>

          <button className="text-[16px] bg-white text-[#474646] py-3 px-8 rounded-[1.5rem] my-3 hover:bg-[#36B7B2] hover:text-white ease-in-out duration-200">
            Learn More
          </button>
        </div>
        {/* apparel */}
        <div className="text-center">
          <a href="apparel">
            {" "}
            <div className="rounded-xl w-[318px] h-[419px]">
              <img
                className="w-full h-full rounded-3xl object-fill"
                src="wing3.webp"
                alt=""
              />
            </div>
            <h3 className="text-[35px] text-white font-[300] font-['News Cycle'] mt-5">
              Apparel
            </h3>
          </a>

          <button className="text-[16px] bg-white text-[#474646] py-3 px-8 rounded-[1.5rem] my-3 hover:bg-[#36B7B2] hover:text-white ease-in-out duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Surf_foils;
