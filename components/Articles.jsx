function Articles() {
  return (
    <div className="bg-[#f5f5f5] py-10 pt-20">
      <p className="text-center text-[36px] text-[#919090] font-normal max-w-[540px] mx-auto">
        Lift eFoil named one of the{" "}
        <span className="text-[#474646] "> 10 Best Toys and Tenders.</span>
      </p>
      {/* articles */}
      <div className="flex justify-center gap-5 ">
        {/* first article */}
        <div className="w-[422px] h-[420px] bg-[#fff] rounded-[16px] px-8 py-2">
          {/* company logo */}
          <div className=" my-8 px-4 text-[1.4rem] tracking-widest leading-[20px]">
            Business Insider
          </div>
          {/* content */}
          <p className="text-[26px] text-[#979090] font-normal font-['Tinos'] py-5 text-center">
            We went to Isabela, Puerto Rico to try out the 'flying surfboard,'
            and it turns out,{" "}
            <span className="text-[#474646] font-normal">
              riding the efoil was easier than we expected.
            </span>
          </p>
        </div>
        {/* second article */}
        <div className="w-[422px] h-[420px] bg-[#fff] rounded-[16px] px-8 py-2">
          {/* company logo */}
          <div className=" my-8  px-4 text-[1.4rem] tracking-widest leading-[20px]">
            Robb Report
          </div>
          {/* content */}
          <p className="text-[26px] text-[#979090] font-normal font-['Tinos'] py-5 text-center">
            You’ll be gliding just above the water in no time.
          </p>
        </div>
        {/* third */}
        <div className="w-[422px] h-[420px] bg-[#fff] rounded-[16px] px-8 py-2">
          {/* company logo */}
          <div className=" my-8  px-4 text-[1.4rem] tracking-widest font-extrabold leading-[20px]">
            Bloomberg
          </div>
          {/* content */}
          <p className="text-[26px] text-[#979090] font-normal font-['Tinos'] py-5 text-center">
            <span className="text-[#474646]">As I accelerate</span> toward the
            horizon, I almost forget what it means to
            <span className="text-[#474646]">
              live in a world with gravity.
            </span>
          </p>
        </div>
        {/* fourth */}
        <div className="w-[422px] flex flex-col justify-between py-2  h-[420px] bg-[#fff] rounded-[16px] px-8">
          {/* company logo */}
          <div>
            <p className=" my-8 px-4 text-[1.4rem] tracking-widest leading-[20px]">
              {" "}
              BBC
            </p>
            {/* content */}
            <p className="text-[26px] text-[#979090] font-normal font-['Tinos'] py-5">
              Innovative surfing tech{" "}
              <span className="text-[#474646]">making waves.</span>
            </p>
          </div>

          <a
            className="text-[#919090] text-[16px]  hover:text-[#36B7B2] hover:border hover:border-[#E65E25] hover:border-dashed py-1 px-2 self-end align-baseline whitespace-pre"
            href="#"
          >
            {" "}
            Read Article ↗{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Articles;
