function Modal({ src, handleClose }) {
  console.log(src);
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 bg-[#171818]/90  z-10 backdrop-blur-lg">
        <div className="h-full w-full flex flex-col justify-center items-center relative z-50 ">
          <div className="z-20 text-center">
            <div className="w-[900px] h-[480px]">
              <iframe
                width="560"
                height="315"
                className="max-w-[900px] w-full h-[489px]"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <button
              className="mt-16 text-white bg-[#474646] py-3 rounded-3xl px-8 hover:bg-[#6c6b6b] ease-in-out duration-200"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
