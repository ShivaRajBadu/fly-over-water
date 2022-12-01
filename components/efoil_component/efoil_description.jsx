function Efoil_description({
  main_title,
  main_description,
  button_value,
  data,
}) {
  return (
    <div className="max-w-[95%] mx-auto px-5 my-16 py-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[#474646] text-[26px] font-light uppercase">
            {main_title}
          </h1>
          <p className="text-[26px] text-[#919090] w-[80%] ">
            {" "}
            {main_description}
          </p>
        </div>
        <button className="text-[#fff] border-[#474646] bg-[#474646] hover:bg-[#6c6b6b] hover:border-[#6c6b6b] border px-8 py-3 rounded-[25px] delay-100 text-[16px]">
          {button_value}
        </button>
      </div>
      <div className="flex  flex-nowrap overflow-x-scroll overflow-y-hidden gap-[2rem] my-10">
        {data.map((da) => (
          <div
            className={`min-w-[550px]${
              da.image ? " h-[550px]" : "h-[190px]"
            }  my-4 `}
          >
            <h4 className="text-[19px] text-[#919090] my-4 py-4 border-y">
              {da.sub_title}
            </h4>
            <p className="text-[16px] text-[#919090] w-[90%] h-[100px]">
              {da.sub_description}
            </p>
            {da.image && (
              <div className="h-[333px] w-[475px] overflow-hidden">
                {" "}
                <img
                  className=" w-full h-full object-center object-cover  rounded-md "
                  src={da.image}
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Efoil_description;
