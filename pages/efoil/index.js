import Head from "next/head";
import Connect_system from "../../components/connect_system";
import Efoil_description from "../../components/efoil_component/efoil_description";
import Efoil_propeller from "../../components/efoil_component/efoil_propeller";
import Efoil_sizes from "../../components/efoil_component/efoil_sizes";
import Side_side from "../../components/efoil_component/side_side";
import Footer from "../../components/footer";
import Header from "../../components/header";

import Lift from "../../components/lift";

function EFoil() {
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
  const hoverData = [
    {
      first_text: "MOTOR",
      second_text:
        "The LIFT3 eFoil motor is extremely efficient and quiet through the water, and it packs enough power to pull two riders at the same time.",
    },
    {
      first_text: "Propeller",
      second_text:
        "The LIFT3 eFoil motor is extremely efficient and quiet through the water, and it packs enough power to pull two riders at the same time.",
    },
    {
      first_text: "SHROUD",
      second_text:
        "The LIFT3 eFoil motor is extremely efficient and quiet through the water, and it packs enough power to pull two riders at the same time.",
    },
  ];
  return (
    <>
      <div className="relative">
        <Head>
          <title>Lift Foils | efoil Electric Surf</title>
        </Head>
        <Header />
        <Lift
          video_src="efoil_vid.mp4"
          title="LIFT3"
          sub_title="Fly Over Water."
          description="The third generation Lift eFoil is the world's best-selling eFoil, and the pinnacle watersports experience."
          button_value="Shop Now"
          islift3={true}
        />
        <Efoil_description
          main_title="FAST, DURABLE & LONG LASTING"
          main_description="Plus a completely customizable lineup of foil hardware to help find your perfect ride. Shop Now"
          button_value="Shop Now"
          data={mainData.firstData}
        />
        <Connect_system
          title="THE LIFT3 OVERVIEW"
          extra_txt={true}
          image="bg_efoil.webp"
          button_value="Watch Full Video"
        />
        <Efoil_sizes />
        const srcs = ; const titles = ;
        <Efoil_propeller
          srcs={["propeller.webp", "propeller_3.webp", "propeller_2.webp"]}
          titles={[
            "ADVANCED PROPULSION",
            "PRECISION MACHINED PROPELLER",
            "PROTECTIVE SHROUD",
          ]}
          hoverData={hoverData}
        />
        <Efoil_description
          main_title="THE LIFT EXPERIENCE"
          main_description="The details make the perfect ride"
          button_value="Find a Demo Location"
          data={mainData.secondData}
        />
        <Side_side
          image="avaliable.webp"
          title="FINANCING AVAILABLE"
          description="Financing is available for Lift Foils eFoils with AFFIRM, qualifying buyers are eligible for up to 0% APR for 12 months."
          button_value="Shop Now"
        />
        <Connect_system
          title="CUSTOMIZE YOUR RIDE"
          image="bg_efoil_2.webp"
          button_value="Configure Now"
          description="The LIFT3 is fully customizable to offer you a bespoke foiling experience.

The shape of the wing changes the eFoil riding experience, and we offer a wide selection of dynamic wings for all types of eFoil experiences."
        />
        <Footer />
      </div>
    </>
  );
}

export default EFoil;
