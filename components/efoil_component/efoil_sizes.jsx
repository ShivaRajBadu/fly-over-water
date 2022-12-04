import Link from "next/link";

function Efoil_sizes() {
  return (
    <div className="max-w-[95%] mx-auto px-5 py-8 my-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[30px] text-[#474646]">Four Sizes</h1>
          <p className="text-[25px] text-[#919090]">
            The perfect choices for{" "}
            <span className="text-[#474646]">stability</span> &{" "}
            <span className="text-[#474646]">performance</span>
          </p>
        </div>
        <button className="text-[#fff] border-[#474646] bg-[#474646] hover:bg-[#6c6b6b] hover:border-[#6c6b6b] border px-8 py-3 rounded-[25px] delay-100 text-[16px]">
          Watch the Unboxing
        </button>
      </div>
      <div className="flex my-8 cursor-pointer">
        <div className="text-center">
          <div>
            <img src="/size_1.webp" alt="" />
          </div>
          <div>
            <p className="text-[18px] text-[#474646] mb-4">
              LIFT 4&quote;2&rdquo; Pro
            </p>
            <Link href="/product">
              <a className="text-[#fff] border-[#474646] bg-[#474646] hover:bg-[#6c6b6b] hover:border-[#6c6b6b] border px-8 py-3 rounded-[25px] delay-100 text-[16px]">
                Buy
              </a>
            </Link>
          </div>
        </div>
        <div className="text-center cursor-pointer">
          <div>
            <img src="/size_2.webp" alt="" />
          </div>
          <div>
            <p className="text-[18px] text-[#474646] mb-4">
              LIFT 4&quot;9&rdquo; Sport
            </p>
            <Link href="/product">
              <a className="text-[#fff] border-[#474646] bg-[#474646] hover:bg-[#6c6b6b] hover:border-[#6c6b6b] border px-8 py-3 rounded-[25px] delay-100 text-[16px]">
                Buy
              </a>
            </Link>
          </div>
        </div>
        <div className="text-center cursor-pointer">
          <div>
            <img src="/size_3.webp" alt="" />
          </div>
          <div>
            <p className="text-[18px] text-[#474646] mb-4">
              LIFT 5&quote;4&rdquo; Cruiser
            </p>
            <Link href="/product">
              <a className="text-[#fff] border-[#474646] bg-[#474646] hover:bg-[#6c6b6b] hover:border-[#6c6b6b] border px-8 py-3 rounded-[25px] delay-100 text-[16px]">
                Buy
              </a>
            </Link>
          </div>
        </div>
        <div className="text-center cursor-pointer">
          <div>
            <img src="/size_4.webp" alt="" />
          </div>
          <div>
            <p className="text-[18px] text-[#474646] mb-4">
              LIFT 5&quot;9&rdquo; Explorer
            </p>
            <Link href="/product">
              <a className="text-[#fff] border-[#474646] bg-[#474646] hover:bg-[#6c6b6b] hover:border-[#6c6b6b] border px-8 py-3 rounded-[25px] delay-100 text-[16px]">
                Buy
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <p className="ml-0 mr-auto text-[#36b7b2] text-[13px]  w-[100%] relative after:content-[''] after:w-[94%] after:h-[1px] after:bg-slate-500 after:absolute after:top-[.7rem] after:left-[6rem]  after:bg-gradient-to-r from-[#36b7b226] to-[#36b7b2] ">
          performance
        </p>

        <p className="relative text-[#36b7b2] text-[13px]">fun</p>
      </div>
    </div>
  );
}

export default Efoil_sizes;
