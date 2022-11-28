import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Hover_content({ datas }) {
  mapboxgl.accessToken = process.env.MAP_BOX_TOKEN;

  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: [84.124, 28.3949], // center map on Chad
        zoom: 6,
      });
    }
  }, [mapContainer]);

  return (
    <div>
      <div className="max-w-[95%] mx-auto flex h-[500px] ">
        <div className="w-[50%] flex flex-col py-8">
          <p className="text-[40px] max-w-[80%] text-[#919090] font-[Tinos] font-light mb-auto">
            {datas.main_title}
          </p>
          <div>
            {datas.main_image && (
              <div className="w-[400px] h-[250px] rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full"
                  src={datas.main_image}
                  alt="main image"
                />
              </div>
            )}
            {datas.buttons_value && (
              <div className=" flex gap-5">
                {datas.buttons_value.map((btn, index) => (
                  <button
                    key={index}
                    className="text-[#fff] border-[#474646] bg-[#474646] hover:bg-[#6c6b6b] hover:border-[#6c6b6b] border px-8 py-3 rounded-[25px] delay-100 text-[16px]"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-[50%] border-l">
          {datas.data ? (
            <ul className="flex flex-col  ">
              {datas.data.map((da, index) => (
                <li
                  key={index}
                  className="flex items-center gap-8 cursor-pointer border-b px-4 h-[72px]"
                >
                  {da.image ? (
                    <div className="w-[60px] h-[65px]">
                      <img className="w-full h-full " src={da.image} alt="" />
                    </div>
                  ) : (
                    da.dots && (
                      <p className="text-[35px] h-[70px] text-[#474646] tracking-widest  pl-4">
                        ::
                      </p>
                    )
                  )}

                  <h3 className="text-[25px] my-auto text-[#474646] hover:opacity-70">
                    {da.title}
                  </h3>
                </li>
              ))}
            </ul>
          ) : (
            <div
              className="map-container w-[500px] h-[350px] self-end ml-auto mt-[4rem] rounded-3xl overflow-hidden"
              ref={mapContainer}
            >
              <p>badu is here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hover_content;
