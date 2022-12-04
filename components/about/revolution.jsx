function Revolution() {
  return (
    <div className="flex justify-between gap-8 bg-[#2e3335] text-white py-20 px-16">
      <div className="w-[40%] relative  ">
        <div className="sticky top-[100px]">
          {" "}
          <h1 className="text-[50px] font-extrabold my-4">A REVOLUTION</h1>
          <p className="text-[35px] text-[#fff]/60 leading-10 w-[80%]">
            When we announced the eFoil concept, it immediately{" "}
            <span className="text-white">went viral.</span> It took years of
            R&D, components sourcing, design, and engineering, but once it was
            ready{" "}
            <span className="text-white">
              {" "}
              eFoiling took on a life of its own,
            </span>{" "}
            and we’re now very proud to say that we’ve shipped thousands of
            eFoils worldwide.
          </p>
        </div>
      </div>
      <div className="w-[60%]">
        <img
          className="w-full h-full"
          src="revolution_img.webp"
          alt="revolution foil image"
        />
      </div>
    </div>
  );
}

export default Revolution;
