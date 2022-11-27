function Market_Leading() {
  return (
    <div className="my-8 py-4">
      <div className="text-center">
        <h1 className=" mx-auto my-6 text-[36px] font-[300]">
          The Market Leading eFoil
          <span className="block text-[#919090]">Designed for Experience</span>
        </h1>
        <p className="max-w-[32%] mx-auto my-6 mt-8 text-[19px] text-[#919090]">
          The LIFT3 eFoil features an updated shape for
          <span className="text-[#474646]">
            {" "}
            increased aerodynamics and maneuverability,
          </span>{" "}
          upgraded
          <span className="text-[#474646]"> extra-durable construction</span>,
          extended ride time, and the
          <span className="text-[#474646]"> highest speed on the market.</span>
        </p>
      </div>
      <div className="flex justify-between gap-3 w-[90%] mx-auto font-sans font-[300] my-10 py-2">
        {/* first item */}
        <div className="w-[25%] h-[160px] grid place-content-center border rounded-[20px]">
          <h2 className="text-center text-[26px]  text-black">
            <span className="block text-[#6C6B6B]">Speed</span> Up to 30mph
          </h2>
        </div>
        <div className=" w-[25%] h-[160px] grid place-content-center  border rounded-[20px]">
          <h2 className="text-center text-[26px] text-black">
            <span className="block text-[#6C6B6B]">Ride Time</span>Up to 100min
          </h2>
        </div>
        <div className="w-[25%] h-[160px] grid place-content-center border rounded-[20px]">
          <h2 className="text-center text-[26px] text-black">
            <span className="block text-[#6C6B6B]">Customizable</span> The
            Perfect Ride
          </h2>
        </div>
        <div className=" w-[25%] h-[160px] grid place-content-center border rounded-[20px]">
          <h2 className="text-center text-[26px] text-black">
            <span className="block text-[#6C6B6B]">Advanced</span> Safety
            Features
          </h2>
        </div>
      </div>
      <div className="text-center">
        <button className="text-center bg-[#474646] text-white px-8 text-[16px] py-3 rounded-3xl hover:bg-[#6c6b6b] ease-in-out duration-300">
          Configure Now
        </button>
      </div>
    </div>
  );
}

export default Market_Leading;
