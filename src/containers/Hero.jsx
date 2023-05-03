import React from "react";
import Image from "next/image";
import office from "../assets/sample images/office.jpg";
import style from "../styles/Hero.module.scss"
import headset from "../assets/icons/headset.svg"
import watch from "../assets/icons/watch.svg"
import pc from "../assets/icons/pc-display.svg"

function Hero() {
  return (
    <div className="d-flex justify-content-end row m-0 mb-1">
      <div className="col-12 col-lg-8 p-0 pe-1">
      <Image
        className="opacity-75"
        src={office}
        alt="office"
        style={{ width: "100%", height: "67vh", maxHeight: "527.25px"}}
      />
      </div>
      <div className="col-lg-4 d-lg-flex d-none align-items-start flex-column" style={{background: "linear-gradient(315deg, #4c4177 0%, #2a5470 74%)"}}>
        <h1 className="p-5 text-white">Get <strong className={style["color_text"]}>everything</strong> you need</h1>
        <div className="icons-container d-flex mt-auto w-100 justify-content-between">
          <Image src={headset} alt="headset" className={style["icon_menu"]} />
          <Image src={watch} alt="watch" className={style["icon_menu"]} />
          <Image src={pc} alt="pc" className={style["icon_menu"]} />
        </div>
        <h1 className="py-3 mt-auto ps-5 text-white">
          For your <strong className={style["color_text"]}>home</strong> or office
        </h1>
      </div>
    </div>
  );
}

export default Hero;
