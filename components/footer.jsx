function Footer() {
  return (
    <div className="max-w-[90%] mx-auto py-8">
      <div className="flex justify-between my-8">
        <div>
          <p className=" text-[19px] text-[#474646]">
            Join the Lift Newsletter
            <span className="block">for the latest videos & releases</span>
          </p>
          <div className="relative w-[360px] my-6">
            <input
              className="bg-[#474646] text-white   outline-none w-full py-4 indent-5 rounded-[30px]"
              type="text"
              placeholder="Enter email address"
            />
            <input
              className="absolute top-2 cursor-pointer  hover:bg-[#36b7b2] px-3 text-[16px] py-2 rounded-[30px] right-2 text-white "
              type="submit"
              value="Sign up"
            />
          </div>
          <p className="max-w-[310px] text-[12px] text-[#919090]">
            By signing up to the Lift Foils newsletter you agree to our{" "}
            <a className="text-[#474646]" href="">
              Terms and Conditions
            </a>{" "}
            and that you have read our{" "}
            <a className="text-[#474646]" href="">
              Privacy Policy
            </a>{" "}
            , including our Cookie use.
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <div className="mx-5">
            <h3 className="text-[#474646] text-[19px]">Customer Service</h3>
            <ul>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  Contact
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  Customer Support
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  Shipping
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  FAQs
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  eFoil User Manual
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-5">
            <h3 className="text-[#474646] text-[19px]">About</h3>
            <ul>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  Loaction
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  Become a Partner
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  News
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  iOS App
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  Andriod App
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-5">
            <h3 className="text-[#474646] text-[19px]">Legal</h3>
            <ul>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  Patents
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  Privacy Policy
                </a>
              </li>
              <li className="py-1">
                <a className="text-[#919090] text-[19px] " href="">
                  Warrenty
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-16 my-8 items-center">
        <p className="text-[14px] text-[#919090]">
          Lift Foils © 2022
          <span className="cursor-pointer ml-4 font-medium"> Credit</span>
        </p>
        <div className="flex justify-between gap-6 items-center">
          <div className="flex gap-4">
            <button className="border border-[#919090] px-10 hover:bg-[#474646] hover:text-[#fff] text-[16px] tracking-widest text-[#474646] py-3 rounded-[30px]">
              US | $
            </button>
            <button className="border px-10 border-[#919090] hover:bg-[#474646] hover:text-[#fff] text-[16px] tracking-wider text-[#474646] py-3 rounded-[30px]">
              Sign In
            </button>
          </div>
          <ul className="flex gap-4">
            <li>
              <i className="fa-brands fa-square-instagram text-[35px] cursor-pointer rounded-[30px]"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube text-[35px] cursor-pointer rounded-[30px]"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-facebook text-[35px] cursor-pointer rounded-[30px]"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin text-[35px] rounded-[30px] cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-tiktok text-[35px] cursor-pointer rounded-[30px]"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
