import { useState } from "react";
import Modal from "./Modal";

function Video_section({ videoSectionData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("");
  const handleOpen = (index) => {
    setIsOpen(true);
    setSource(videoSectionData.modalSrcs[index]);
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
      {isOpen && <Modal src={source} handleClose={handleClose} />}
      <div className="h-[800px] font-['News Cycle']  bg-no-repeat bg-cover mt-8 bg-bottom py-6 relative">
        <img
          className="absolute h-full w-full inset-0 -z-10"
          src={videoSectionData.bg_image}
          alt=""
        />
        {/* image overlay */}
        <div className="bg-gradient-to-t from-[#2e3335]/90 to-[#3e3335a4] h-[200px] w-[100%] absolute bottom-0 -z-10  "></div>
        <div className="w-[90%] mx-auto flex flex-col justify-between h-full ">
          {/* first section */}

          <div className="flex justify-between items-center">
            {" "}
            <div className="py-10">
              <h2 className="text-[25px] text-white font-[300] tracking-widest ">
                {videoSectionData.main_title}
              </h2>
              {videoSectionData.main_desc && (
                <p className="text-[24px] text-[#fff]/60">
                  {videoSectionData.main_desc}
                </p>
              )}
            </div>
            <div>
              {" "}
              <button
                onClick={() => handleOpen(0)}
                className="text-white backdrop-blur-md bg-[#fff]/10 flex items-center gap-2 py-3 px-10 rounded-[3rem] hover:bg-[#36B7B2] ease-in-out duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="PJLV"
                >
                  <path
                    d="M8.653 6.117A.75.75 0 007.5 6.75v10.5a.75.75 0 001.153.633l8.25-5.25a.75.75 0 000-1.266l-8.25-5.25z"
                    fill="currentColor"
                  ></path>
                </svg>{" "}
                Watch Full Video
              </button>
            </div>
          </div>

          {/* second section */}
          <div className="font-['News Cycle']">
            <h2 className="text-[24px] text-white  font-[400] m-2 relative">
              {videoSectionData.sub_title}
            </h2>
            <div className="flex gap-2">
              {videoSectionData.videoData.map((sr, index) => (
                <div key={index} onClick={() => handleOpen(index)}>
                  <div className="h-[192px] w-[300px] my-2 cursor-pointer  group  overflow-hidden ">
                    <div className="relative w-full h-full">
                      <video
                        className="hover:border hover:border-[#36b7b2] w-full h-full  object-cover rounded-lg"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        src={sr.videoSrc}
                      ></video>
                      <img
                        className="w-6 h-6 absolute  group-hover:block
                        hidden bottom-2 right-2 z-10"
                        src="play_icon.svg"
                        alt="play icons"
                      />
                    </div>
                  </div>

                  <div className="mx-1 my-2">
                    {sr.title && (
                      <h3 className="text-[16px] text-white">{sr.title}</h3>
                    )}

                    {sr.sub_title && (
                      <p className="text-[#fff]/60">{sr.sub_title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video_section;
