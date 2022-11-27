import Image from "next/image";

function BestSeller() {
  return (
    <div className="max-w-[90%] mx-auto py-5">
      <h1 className="text-[#474646] text-[26px] font-normal my-4 px-1">
        Best Seller
      </h1>
      <div className="flex gap-4">
        {/* first  */}
        <div className="w-[33%] relative h-[560px] border-2 rounded-2xl hover:border-[#36B7B2] ease-in-out duration-200">
          <a href="" className="">
            {" "}
            <div className="w-full ">
              <Image
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="h-full w-full object-fill rounded-2xl"
                src="/best_seller_1.webp"
                alt="image is here"
              />
            </div>
            <div className="absolute bottom-5 left-5">
              <h4 className="text-[#474646] text-[18px] font-[300] font-['News Cycle'] capitalize">
                LCS FIXED ALUMINUM PROPELLER KIT
              </h4>
              <p className="text-[18px] text-[#919090]">$990.00</p>
            </div>
          </a>
        </div>
        {/* second */}
        <div className="w-[33%] relative border-2 h-[560px] rounded-2xl hover:border-[#36B7B2] ease-in-out duration-200">
          <a href="" className="w-[561px] h-[81px]">
            {" "}
            <img
              className=" w-full object-fill rounded-2xl"
              src="/best_seller_2.webp"
              alt="image is here"
            />
            <div className="absolute bottom-5 left-5">
              <h4 className="text-[#474646] text--[18px] font-[300] font-['News Cycle'] capitalize">
                LCS FIXED ALUMINUM PROPELLER KIT
              </h4>
              <p className="text-[18px] text-[#919090]">$990.00</p>
            </div>
          </a>
        </div>
        {/* third */}
        <div className="w-[33%] relative border-2 h-[560px] rounded-2xl hover:border-[#36B7B2] ease-in-out duration-200">
          <a href="" className="w-[561px] h-[81px]">
            {" "}
            <img
              className="h-full w-full object-contain rounded-2xl"
              src="/best_seller_3.webp"
              alt="image is here"
            />
            <div className="absolute bottom-5 left-5">
              <h4 className="text-[#474646] text--[18px] font-[300] font-['News Cycle'] capitalize">
                LCS FIXED ALUMINUM PROPELLER KIT
              </h4>
              <p className="text-[18px] text-[#919090]">$990.00</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
