function Surf_foils({ title, desc, surfData }) {
  return (
    <div className="bg-[#2E3335] py-10 font-['News Cycle']">
      <div className="text-center mb-24">
        <h1 className="text-[60px] lg:text-[70px] font-[700] text-white my-2">
          {title}
        </h1>
        <p className="text-[30px] lg:text-[36px] font-[400] text-[#6C6B6B] max-w-[44%] px-5 mx-auto font-['News Cycle'] text-center leading-tight">
          {/* For over 10 years we've made performance foils for{" "}
          <span className="text-white"> the committed</span> ,the
          <span className="text-white"> future forward</span>, the{" "}
          <span> risk takers</span>--riders that need foil hardware that is both{" "}
          <span className="text-white">innovative and unbelievably tough.</span> */}
          {desc}
        </p>
      </div>
      <div className="flex gap-14 justify-center mt-[10rem]">
        {surfData.map((suf, index) => (
          <div
            key={index}
            className={`text-center ${index === 1 ? "mt-16" : ""}`}
          >
            <a href="/Wings " className="text-center">
              <div className="rounded-xl mx-auto w-[318px] h-[419px]">
                <img
                  className="w-full h-full rounded-3xl object-fill"
                  src={suf.image}
                  alt=""
                />
              </div>
              <h3 className="text-[30px] text-white font-[300] font-['News Cycle'] w-[80%] mx-auto mt-5">
                {suf.title}
              </h3>
            </a>

            <button className="text-[16px] bg-white text-[#474646] py-3 px-8 rounded-[1.5rem] my-3 hover:bg-[#36B7B2] hover:text-white ease-in-out duration-200">
              {suf.button_name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Surf_foils;
