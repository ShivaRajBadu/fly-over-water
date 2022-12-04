function Story_card({ data }) {
  const { title, date, image } = data;
  return (
    <div className="w-[430px] cursor-pointer h-[610px] flex flex-col gap-4 my-6">
      <div className="h-[90%] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={image}
          alt=""
        />
      </div>
      <div className="h-[10%]">
        <h3 className="text-[16px] text-white font-light leading-[23px]">
          {title}
        </h3>
        <p className="text-[13px] text-[#fff]/60">{date}</p>
      </div>
    </div>
  );
}

export default Story_card;
