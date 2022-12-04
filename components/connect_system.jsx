import { useState } from "react";
import Modal from "./Modal";
import Router from "next/router";

function Connect_system({
  image,
  title,
  extra_txt,
  description,
  button_value,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
    // disable scroll
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const handleClose = () => {
    console.log("clicked");
    setIsOpen((prev) => !prev);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };
  return (
    <>
      {isOpen && (
        <Modal
          src="https://www.youtube.com/embed/_qB-JsmQBto"
          handleClose={handleClose}
        />
      )}
      <div className="  h-[870px] flex justify-center text-center items-end bg-[#555555]  relative">
        <img
          className="absolute h-full w-full inset-0 z-10"
          src={image}
          alt="bg-image"
        />
        <div className=" mt-16 z-20">
          <h1
            className={`${
              button_value === "Configure Now"
                ? "text-[60px] lg:text-[70px] mb-4"
                : "text-[75px] lg:text-[90px]"
            } font-[700] text-white`}
          >
            {title}
          </h1>
          <div className="h-[312px]">
            {description && (
              <p className="text-[22px] mt-3 lg:text-[26px] f-full max-w-[400px] mx-auto text-[#fff]/60">
                {/* Maximize your eFoil experience with the new{" "}
                <span className="text-white opacity-100">
                  Lift Connect System (LCS){" "}
                </span>
                propeller kit, featuring an{" "}
                <span className="text-white">
                  innovative click-and-lock mechanism
                </span>{" "}
                for easy interchanging of your eFoil propeller, shroud or
                folding propeller,{" "}
                <span className="text-white">without the need for tools.</span> */}
                {description}
              </p>
            )}
          </div>

          <div className="my-7 mb-14 flex justify-center gap-[5rem] ">
            {extra_txt && (
              <p className="text-white text-[18px] font-bold">
                Lift Founder{" "}
                <span className="block text-[#fff]/70">Nick Leason</span>{" "}
              </p>
            )}
            {button_value === "Configure Now" ? (
              <button
                onClick={() => Router.replace("/product")}
                className="text-white backdrop-blur-[10px] bg-[#fff]/10 w-[176px] h-[45px] rounded-[9999px] hover:bg-[#36B7B2] text-[16px] font-semibold"
              >
                {button_value}
              </button>
            ) : (
              <button
                onClick={handleOpen}
                className="text-white backdrop-blur-[10px] bg-[#fff]/10 w-[176px] h-[45px] rounded-[9999px] hover:bg-[#36B7B2] text-[16px] font-semibold"
              >
                {button_value}
              </button>
            )}

            {extra_txt && (
              <p className="text-white text-[18px] font-bold">
                Shot in{" "}
                <span className="block text-[#fff]/70">Puerto Rico</span>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect_system;
