import { useState } from "react";
import Modal from "./Modal";

function Connect_system() {
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
      <div className="bg-[url('/connect.webp')] h-[867px] flex justify-center text-center items-end bg-[#555555]  bg-no-repeat bg-cover">
        <div className=" mt-16">
          <h1 className="text-[120px] font-[700] text-white">
            THE LIFT CONNECT SYSTEM
          </h1>
          <p className="text-[26px] max-w-[400px] mx-auto text-[#fff]/60">
            Maximize your eFoil experience with the new{" "}
            <span className="text-white opacity-100">
              Lift Connect System (LCS){" "}
            </span>
            propeller kit, featuring an{" "}
            <span className="text-white">
              innovative click-and-lock mechanism
            </span>{" "}
            for easy interchanging of your eFoil propeller, shroud or folding
            propeller,{" "}
            <span className="text-white">without the need for tools.</span>
          </p>
          <button
            onClick={handleOpen}
            className="bg-white text-[#474646] text-[16px] py-3 px-8 rounded-[1.7rem] my-7 mb-14 hover:bg-[#36B7B2] hover:text-white ease-in-out duration-300"
          >
            WATCH VIDEO
          </button>
        </div>
      </div>
    </>
  );
}

export default Connect_system;
