import Revolution from "../../components/about/revolution";
import Connect_system from "../../components/connect_system";
import Side_side from "../../components/efoil_component/side_side";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Lift from "../../components/lift";
import Market_Leading from "../../components/market_leading";
import Surf_foils from "../../components/surf_foils";
import Textfull from "../../components/textfull";

function About() {
  const surfData = [
    {
      image: "wing.webp",
      title: "Learn About eFoiling",
      button_name: "Read the History of Powered Surfing",
    },
    {
      image: "wing2.webp",
      title: "Hundreds of Demo Locations",
      button_name: "Find a Location",
    },
    {
      image: "wing3.webp",
      title: "Watch the Documentary",
      button_name: "View Now",
    },
  ];
  const listsData = [
    {
      text: "Demo Locations",
      sub_text: "300+",
    },
    {
      text: "eFoil Generations",
      sub_text: "3",
    },
    {
      text: "Global Offices",
      sub_text: "10",
    },
    {
      text: "eFoils Shipped",
      sub_text: "10000+",
    },
  ];
  return (
    <>
      <Header />
      <Lift
        video_src="about_bg.mp4"
        title="THE LIFT STORY"
        description="Lift is a family run business operating out of Puerto Rico since 2010."
        button_value="Watch Documentary"
        islift3={false}
      />
      <Textfull
        main_text="How It All Started
          Inventing the eFoil"
        sub_text="We’ve been riding the products we’ve been making since the beginning, so the constant pursuit for the ultimate ride has always been a part of our DNA. We don’t cut corners. We just obsessively try to perfect.

        In 2015, our co-founder Nick Leason - an engineer and avid surfer - came up with the idea for the original eFoil, applying the technology from smart phones, electric vehicles and even drones into a board that would let its rider fly above any body of water without needing to be propelled by wind or waves."
      />
      <Revolution />
      <Side_side
        image="about_side.webp"
        title="TRUE TO OUR ROOTS"
        description="We also continue to perfect our classic foil lineups, working with legendary board shapers and top carbon fiber suppliers to offer the highest-performance foil setups available on the market today. Top professionals from Laird Hamilton to Kai Lenny have trusted Lift’s classic foils in the most extreme conditions and are now part of our ever-growing family, giving us constant feedback that we incorporate into our design processes. We remain 100% committed to consistently holding our products to the highest standards."
      />
      <Surf_foils
        title="OUR PROMISE"
        desc="When you purchase Lift Foils products, you’re not just buying equipment, you’re investing in a lifetime of customer care, new upgrades and new frontiers. We're dedicated to being on the edge of technology and performance, and we're proud that when the top professionals in the world attempt their latest feats, they chose Lift."
        surfData={surfData}
      />
      <Market_Leading
        title="A Global Family"
        desc="As our company has continued to grow, we’ve built out a family of over 300 demo locations around the globe. We’ve also introduced four board sizes to accommodate riders of different sizes and styles, and moved from the original E1 to the new LIFT3 and LIFT3 F, offering up to 100 minutes of ride time and an incredible overall experience."
        listsData={listsData}
      />
      <Connect_system
        title="RIDING TOWARDS THE FUTURE"
        extra_txt={false}
        image="/about_bg.webp"
        button_value="Shop eFoils"
        description="It’s safe to say we’re not done with developing new ideas and products and we’re continuing to explore ways to make your next ride unlike any other."
      />
      <Footer />
    </>
  );
}

export default About;
