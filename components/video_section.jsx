import Modal from "./Modal";

function Video_section({ isOpen, handleClose, handleOpen }) {
  return (
    <>
      <div className="h-[790px] font-['News Cycle'] bg-[url('/video_section.webp')] bg-no-repeat bg-cover my-8 bg-bottom py-6">
        <div className="w-[90%] mx-auto flex flex-col justify-between h-full ">
          {/* first section */}
          <a href="">
            <div className="flex justify-between items-center">
              {" "}
              <div className="py-10">
                <h2 className="text-[25px] text-white font-[300] tracking-widest ">
                  Lift3 Efoil
                </h2>
                <p className="text-[24px] text-[#fff]/60">in Cote d'Azur</p>
              </div>
              <div>
                {" "}
                <button
                  onClick={handleOpen}
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
          </a>
          {/* second section */}
          <div className="font-['News Cycle']">
            <h2 className="text-[24px] text-white  font-[400] my-2">
              Lift3 eFoil in Action
            </h2>
            <div className="flex gap-2">
              {/* first */}
              <div onClick={handleOpen}>
                <div className="h-[192px] w-[300px] my-2 cursor-pointer">
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/high (1).mp4"
                  ></video>
                </div>

                <div className="mx-1 my-2">
                  <h3 className="text-[16px] text-white">The LIFT3 F</h3>
                  <p className="text-[#fff]/60">A New Geneartion of Lift</p>
                </div>
              </div>
              {/* second */}
              <div onClick={handleOpen}>
                <div className="h-[192px] w-[300px] my-2 cursor-pointer">
                  {" "}
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/high (1).mp4"
                  ></video>
                </div>
                <div className="mx-1">
                  <h3 className="text-[16px] text-white">The LIFT3 F</h3>
                  <p className="text-[#fff]/60">A New Geneartion of Lift</p>
                </div>
              </div>
              {/* third */}
              <div>
                <div className="h-[192px] w-[300px] my-2 cursor-pointer">
                  {" "}
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/high (1).mp4"
                  ></video>
                </div>
                <div className="mx-1">
                  <h3 className="text-[16px] text-white">The LIFT3 F</h3>
                  <p className="text-[#fff]/60">A New Geneartion of Lift</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video_section;
