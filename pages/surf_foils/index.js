import Head from "next/head";
import Connect_system from "../../components/connect_system";
import Efoil_propeller from "../../components/efoil_component/efoil_propeller";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hover_content from "../../components/hover_contenr";
import Lift from "../../components/lift";
import Textfull from "../../components/textfull";
import Video_section from "../../components/video_section";

function SurfFoil() {
  const videoSectionData = {
    main_title: "Explore Surf Foiling with Lift",
    bg_image: "/surf_foil_bg.webp",
    sub_title: "SURF FOILING",
    modalSrcs: [
      "https://www.youtube.com/embed/0xs-oaSZdqE",
      "https://www.youtube.com/embed/-arxoYcRWeM",
      "https://www.youtube.com/embed/OP-00EwLdiU",
      "https://www.youtube.com/embed/482ZqOLsLwE",
    ],
    videoData: [
      {
        videoSrc: "/high (1).mp4",
        sub_title: "Guide to Surf Kit",
      },
      {
        videoSrc: "high_2.mp4",
        sub_title: "2021 High Aspect Wings",
      },
      {
        videoSrc: "high_3.mp4",
        sub_title: "Tow Foiling w/ Benny Ferris",
      },
    ],
  };

  const hoverData = [
    {
      first_text: "Fonts",
      second_text:
        'Our "mid-aspect" Wings, carefully crafted for efficency, balance and versatility',
    },
    {
      first_text: "High Aspect",
      second_text:
        "Our ultra-popular high apsect series offers unrivaled efficency  for surfing anf foiling ",
    },
    {
      first_text: "Stabilizers",
      second_text: "three tails wings series to find your perfect ride",
    },
  ];
  const mainData = {
    firstData: [
      {
        sub_title: "Ride Time 100 minutes",
        sub_description:
          "The eFoil is equipped with an advanced lithium-ion battery allowing for up to 100 minutes of riding with our Full Range Battery, or 60 minutes with our Light Battery.",
      },
      {
        sub_title: "Bluetooth Hand Controller",
        sub_description:
          "An ergonomic, waterproof Bluetooth controller that easily shows battery life, and allows you to swap intuitively between performance settings.",
      },
      {
        sub_title: "Extremely Quiet",
        sub_description:
          "With the LIFT3, we have improved the intricacies of our eFoil designs to reduce any acoustic noise down to near-silence so that when you fly… Now it’s just you and Mother Nature.",
      },
    ],
    secondData: [
      {
        image: "des_1.webp",
        sub_title: "Refined Materials",
        sub_description:
          "Lift eFoils are built in highly refined steel tools used to forge carbon fiber parts at extreme temperatures and heat, providing a unique marbled carbon fiber that is lighter and stronger than other eFoils.",
      },
      {
        image: "des_2.webp",

        sub_title: "Customize Your Ride",
        sub_description:
          "Our 10 years of exprience in hydrofoil wing design makes all the difference - each eFoil has a wide mix-and-match selection of options to help you achieve the ideal ride when optimizing for performance, stability, and environment.",
      },
      {
        image: "des_3.webp",
        sub_title: "Global Community",
        sub_description:
          "Over 300 partners worldwide available for demos, trainings, and finding new friends to ride with.",
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Lift Foils | efoil Electric Surf</title>
      </Head>
      <Header />
      <Lift
        video_src="surf_foil_home.mp4"
        title="SURF FOILS"
        sub_title=""
        description="Experience the Lift Foils difference."
        button_value="Watch Nazare Video"
        islift3={false}
      />
      <Textfull
        main_text="The Leader In Performance Hydrofoils"
        sub_text="For over 10 years we’ve made performance foils for the committed, the future forward, the risk takers—riders that need foil hardware that is both innovative and unbelievably tough."
        extra_text="This Is Why The Best, Trust Lift."
      />
      <Efoil_propeller
        srcs={["surf_foil_3.webp", "surf_foil_2.webp", "surf_foil_1.webp"]}
        titles={["SURF WINGS", "HIGH ASPECT WINGS", "TAIL WINGS"]}
        hoverData={hoverData}
      />
      <Textfull
        main_text="TOOLS FOR PERFORMANCE FOILING"
        sub_text="Our wings are made of carbon fiber which means they are high-strength and impact-resistant while still being lightweight.

        They’re designed for performance and come in a variety of sizes.

        We’ve tested every detail, including size, shape and angles to make sure that they maximize control and stability while minimizing unnecessary drag."
        button_value="Learn More"
      />
      <Lift
        video_src="surf_foil_2.mp4"
        title="FOIL BOARDS"
        sub_title=""
        description="Custom carbon fiber surf boards and wind boards, with a premium EVA deck pad and protective carrying case, ready to ride right out of the box."
        button_value="Watch 5'0 Video"
        islift3={false}
      />
      <Textfull
        main_text="TOUGH & CONSTRUCTED TO LAST A LIFETIME"
        sub_text="Shaped by 20+ year board shaping veteran Sean Ordoñez, Lift’s surf and wind boards are built for performance, tuned to work with our wings and masts, and guaranteed to last for years."
        button_value="Learn More"
      />
      <Connect_system
        title="FOIL MASTS"
        image="foil_masta.webp"
        button_value="Learn More"
      />
      <Textfull
        main_text="THE HIGHEST QUALITY"
        sub_text="We’ve spent years refining the design and construction of our masts- one of the foil’s most crucial components.

          We use the highest-quality carbon fiber, leading to minimal weight and excellent control and rigidity to help keep you stable."
        button_value="Learn More"
      />
      <Video_section videoSectionData={videoSectionData} />
      <Footer />
    </>
  );
}

export default SurfFoil;
