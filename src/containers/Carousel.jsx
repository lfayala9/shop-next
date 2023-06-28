import Image from "next/image";
import style from "@styles/Carousel.module.scss";
import shoes from "@assets/sample_images/shoes2.webp";
import nintendo from "@assets/sample_images/xbox3.webp";
import x from "@assets/icons/x.svg"
import coffee from "@assets/sample_images/coffee2.webp";
import laptop from "@assets/sample_images/laptop.webp";
import globe1 from "@assets/icons/globe-americas.svg";
import globe2 from "@assets/icons/truck.svg";
import globe3 from "@assets/icons/globe-europe-africa.svg";
import { useState } from "react";

const Carousel = () => {

  const [togglePop, setTogglePop] = useState(true);

  const sampleImages = [
    {
      id: 2,
      title: "Xbox Series X|S",
      image: nintendo,
      price: "399.99",
    },
    {
      id: 3,
      title: "Espresso Machine",
      image: coffee,
      price: "199.99",
    },
    {
      id: 4,
      title: "Asus Zenbook S",
      image: laptop,
      price: "449.99",
    },
  ];

  return (
    <section className="slideshow_main d-flex justify-content-end row mt-5 pt-3 mb-1">
      <div style={{background: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)'}} className="col-lg-4 d-lg-flex d-none align-items-start flex-column">
        <h1 className="py-4 ps-5 text-white pt-5">
          <span className={style["car_text"]}>This is the{" "}
          <strong className={style["color_text"]}>Fake Store</strong> experience</span>
        </h1>
        <div className="icons-container d-flex mt-auto w-100 justify-content-between">
          <Image src={globe1} alt="globe1" className={style["icon_menu"]} />
          <Image src={globe2} alt="globe2" className={style["icon_menu"]} />
          <Image src={globe3} alt="globe3" className={style["icon_menu"]} />
        </div>
        <h1 className="py-3 mt-auto ps-5 text-white">
          Be <strong className={style["color_text"]}>shocked</strong> with
          our prices
        </h1>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide col-12 col-lg-8 px-1">
        {togglePop && <p className={style["discount_tag"]}>Get 25% off with <strong>FAKE25</strong> code | Free Shipping over 49$ <span onClick={()=> setTogglePop(false)} className={style["close_x"]}><Image src={x} alt='x' /></span> </p>}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <h1 className="py-4 ps-5 text-dark d-lg-none">
          This is the{" "}
          <strong className={style["color_text"]}>Fake Store</strong> experience
        </h1>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src={shoes}
              className="d-block w-100 opacity-75 h-25"
              alt="Running Shoes"
              style={{width: "100%", height: "100%"}}
            />
            <div className="carousel-caption">
              <h4 className="text-dark fw-bold overflow-hidden">Running Shoes</h4>
              <p className="text-dark overflow-hidden">
                Get Them for only{" "}
                <span className="p-2 bg-black bg-gradient">
                  <strong className={style["color_text2"]}>$59.99</strong>
                </span>
              </p>
            </div>
          </div>
          {sampleImages.map((slide) => (
            <div key={slide.id} className="carousel-item">
              <Image
                src={slide.image}
                className="d-block w-100 opacity-75 h-25"
                alt={slide.title}
                style={{width: "100%", height: "100%"}}

              />
              <div className="carousel-caption">
                <h4 className="text-dark fw-bold overflow-hidden">{slide.title}</h4>
                <p className="text-dark overflow-hidden">
                  Get it for only{" "}
                  <span className="bg-black bg-gradient p-2">
                    <strong className={style["color_text2"]}>
                      ${slide.price}
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
