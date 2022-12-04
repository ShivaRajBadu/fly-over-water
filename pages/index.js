import Head from "next/head";
import { useState } from "react";
import Articles from "../components/Articles";
import BestSeller from "../components/best_seller";
import Connect_system from "../components/connect_system";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroPage from "../components/heropage";
import Industrial_lift from "../components/industrial_leading_lift";
import Lift from "../components/lift";
import Lift_connects_system from "../components/lift_connects_system";

import Market_Leading from "../components/market_leading";
import Modal from "../components/Modal";
import Surf_foils from "../components/surf_foils";
import Textfull from "../components/textfull";
import Video_section from "../components/video_section";

export default function Home() {
  const videoSectionData = {
    bg_image: "/video_section.webp",
    main_title: "Lift3 Efoil",
    main_desc: "in Cote d'Azur",
    sub_title: "Lift3 eFoil in Action",
    modalSrcs: [
      "https://www.youtube.com/embed/0xs-oaSZdqE",
      "https://www.youtube.com/embed/-arxoYcRWeM",
      "https://www.youtube.com/embed/OP-00EwLdiU",
      "https://www.youtube.com/embed/482ZqOLsLwE",
    ],
    videoData: [
      {
        videoSrc: "/high (1).mp4",
        title: "The LIFT3 F",
        sub_title: "A New Geneartion of Lift",
      },
      {
        videoSrc: "high_2.mp4",
        title: "The LIFT3 F",
        sub_title: "A New Geneartion of Lift",
      },
      {
        videoSrc: "high_3.mp4",
        title: "The LIFT3 F",
        sub_title: "A New Geneartion of Lift",
      },
    ],
  };
  const surfData = [
    {
      image: "wing.webp",
      title: "Wings",
      button_name: "Learn More",
    },
    {
      image: "wing2.webp",
      title: "Boards",
      button_name: "Learn More",
    },
    {
      image: "wing3.webp",
      title: "Apparel",
      button_name: "Learn More",
    },
  ];
  const listsData = [
    {
      text: "Speed",
      sub_text: "Up to 30mph",
    },
    {
      text: "Ride Time",
      sub_text: "Up to 100min",
    },
    {
      text: "Customizable",
      sub_text: "The Perfect Ride",
    },
    {
      text: "Advanced",
      sub_text: "Safety Features",
    },
  ];
  return (
    <div className=" w-full h-full overflow-hidden">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=News+Cycle&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        {/* mapbox */}
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <title>Lift Foils | efoil Electric Surf</title>
      </Head>
      <div className="relative">
        <Header />
        <HeroPage />
        <Textfull
          main_text="A feeling that can’t be described but can only beexperienced
            "
          sub_text="We’ve spent over a decade developing and fine-tuning the ultimate foiling experience. Whether you’re a complete beginner or an experienced thrill-seeker, into serene lakes or riding big surf, the Lift eFoil allows you to craft the adventure that’s best for you with an all-electric, silent motor that glides through any body of water."
          button_value="Discover"
        />
        <Lift
          video_src="/high (1).mp4"
          title="THE NEW LIFT3 F"
          sub_title="Ready for the next era in watersports?"
          description="With the LIFT3 F, we took a new approach to our industry leading eFoils–working with fiberglass instead of carbon fiber to offer stability over pure performance, at a new low price."
          button_value="Learn More"
        />
        <Market_Leading
          title="The Market Leading eFoil
            Designed for Experience"
          desc="The LIFT3 eFoil features an updated shape for increased aerodynamics and maneuverability, upgraded extra-durable construction, extended ride time, and the highest speed on the market."
          listsData={listsData}
          button_name="Configure Now"
        />
        <Industrial_lift />
        <Surf_foils
          title="SURF FOILS"
          desc="For over 10 years we've made performance foils for the committed, the future forward, the risk takers--riders that need foil hardware that is both innovative and unbelievably tough."
          surfData={surfData}
        />
        <Connect_system
          title="THE LIFT CONNECT SYSTEM"
          extra_txt={false}
          image="/connect.webp"
          button_value="Watch Video"
          description="Maximize your eFoil experience with the new  Lift Connect System (LCS)  propeller kit, featuring an  innovative click-and-lock mechanism for easy interchanging of your eFoil propeller, shroud or
                folding propeller, without the need for tools."
        />
        <Lift_connects_system />
        <Video_section videoSectionData={videoSectionData} />
        <Articles />
        <BestSeller />
        <Footer />
      </div>
    </div>
  );
}
