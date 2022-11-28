import Footer from "../../components/footer";
import Header from "../../components/header";

import Lift from "../../components/lift";

function EFoil() {
  return (
    <>
      <div className="relative">
        <Header />
        <Lift
          video_src="efoil_vid.mp4"
          title="LIFT3"
          sub_title="Fly Over Water."
          description="The third generation Lift eFoil is the world's best-selling eFoil, and the pinnacle watersports experience."
          button_value="Shop Now"
          islift3={true}
        />
        <Footer />
      </div>
    </>
  );
}

export default EFoil;
