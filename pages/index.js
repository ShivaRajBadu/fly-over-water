import Head from "next/head";
import Header from "../components/header";
import HeroPage from "../components/heropage";
import Industrial_lift from "../components/industrial_leading_lift";
import Lift from "../components/lift";
import Market_Leading from "../components/market_leading";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;1,400;1,700&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Header />
      <HeroPage />
      <div className=" bg-white text-center py-16 ">
        <h1 className="text-[36px] max-w-[28%] mx-auto font-light font-sans leading-[41px]  mb-10">
          A feeling
          <span className="text-[#474646] font-thin">
            that can’t be described but can only be
          </span>
          experienced
        </h1>
        <p className="text-[19px] leading-[28.5px] w-[30%] mx-auto block mt-[3rem] mb-10 font-sans font-thin text-[#474646] ">
          We’ve spent over a decade developing and fine-tuning the ultimate
          foiling experience. Whether you’re a complete beginner or an
          experienced thrill-seeker, into serene lakes or riding big surf, the
          Lift eFoil allows you to
          <span className="font-normal"> craft the adventure</span> that’s best
          for you with an all-electric, silent motor that
          <span className=" font-normal">
            glides through any body of water.
          </span>
        </p>
        <button className="text-[#fff] border-[#474646] bg-[#474646] hover:bg-[#6c6b6b] hover:border-[#6c6b6b] border px-8 py-3 rounded-[25px] delay-100 text-[16px]">
          Discover
        </button>
      </div>
      <Lift />
      <Industrial_lift />
      <Market_Leading />
    </div>
  );
}
