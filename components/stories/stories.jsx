import Story_card from "./story_card";

function Stories_section() {
  const storyData = [
    {
      image: "story_bg.webp",
      title: "Lift Foils 2023 Surf and Wind Foil Board Lineup",
      date: "2022-11-09",
    },
    {
      image: "story_bg.webp",
      title: "Lift Foils 2023 Surf and Wind Foil Board Lineup",
      date: "2022-11-09",
    },
    {
      image: "story_bg.webp",
      title: "Lift Foils 2023 Surf and Wind Foil Board Lineup",
      date: "2022-11-09",
    },
    {
      image: "story_bg.webp",
      title: "Lift Foils 2023 Surf and Wind Foil Board Lineup",
      date: "2022-11-09",
    },
    {
      image: "story_bg.webp",
      title: "Lift Foils 2023 Surf and Wind Foil Board Lineup",
      date: "2022-11-09",
    },
    {
      image: "story_bg.webp",
      title: "Lift Foils 2023 Surf and Wind Foil Board Lineup",
      date: "2022-11-09",
    },
  ];
  return (
    <div className="bg-[#2e3335] py-16 ">
      {/* filter section */}
      <div className="flex align-middle gap-3 items-center text-white px-8 py-6">
        <h4 className="text-[13px] text-[#fff]/60">Filter By</h4>
        <ul className="flex gap-3 items-center">
          <li className=" w-[86px] py-[0.3rem] text-center rounded-full text-[13px]  bg-[#fff] text-[#474646] cursor-pointer">
            All
          </li>
          <li className="w-[86px] py-[0.3rem] text-center rounded-full text-[13px]  bg-[#474646] hover:bg-[#36B7B2] hover:text-white cursor-pointer">
            Interview
          </li>
          <li className="w-[86px] py-[0.3rem] text-center rounded-full text-[13px]  bg-[#474646] hover:bg-[#36B7B2] hover:text-white cursor-pointer">
            Guide
          </li>
          <li className="w-[86px] py-[0.3rem] text-center rounded-full text-[13px]  bg-[#474646] hover:bg-[#36B7B2] hover:text-white cursor-pointer">
            Video
          </li>
          <li className="w-[86px] py-[0.3rem] text-center rounded-full text-[13px]  bg-[#474646] hover:bg-[#36B7B2] hover:text-white cursor-pointer">
            News
          </li>
        </ul>
      </div>
      {/* story section */}
      <div className="flex  flex-wrap gap-6 px-10">
        {storyData.map((st, index) => (
          <Story_card key={index} data={st} />
        ))}
      </div>
    </div>
  );
}

export default Stories_section;
