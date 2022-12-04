function Main_bg() {
  return (
    <div className="h-[900px] w-[100%] relative before:content-[' '] before:w-full before:h-[180px] before:bg-gradient-to-t before:from-[#2e3335] before:to-[#f8f7f700] before:absolute before:bottom-0 after:content-[' '] after:w-full after:h-[180px] after:bg-gradient-to-b after:from-[#2e3335ad] after:to-[#f8f7f700] after:absolute after:top-0">
      <div className="w-full h-full   bg-[#919090]">
        <img
          className="w-full h-full object-center object-cover"
          src="story_bg.webp"
          alt=""
        />
      </div>
      <div className="absolute bottom-[4rem] flex w-full justify-between  items-center  px-16">
        <div className="  flex gap-5 items-start">
          <button className="text-white backdrop-blur-[10px] bg-[#fff]/10 px-4 py-1 rounded-[9999px] hover:bg-[#36B7B2] text-[16px] font-bold">
            News
          </button>
          <h1 className="text-[26px] w-[330px] font-[600] leading-[33px] text-[#fff]/60">
            Lift Foils 2023 Surf and Wing Foil Board Lineup
          </h1>
        </div>
        <button className="bg-white text-[#474646] px-8 py-3 rounded-[25px] text-[14px]  hover:bg-[#1FABA5] hover:text-white delay-100 ease-in-out">
          Read Article
        </button>
      </div>
    </div>
  );
}

export default Main_bg;
