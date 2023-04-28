import Image from "next/image";
import style from "../styles/Carousel.module.scss";
import shoes from "../assets/sample images/shoes.jpg";
import nintendo from "../assets/sample images/nintendo.jpg";
import coffee from "../assets/sample images/coffee.jpg";
import laptop from "../assets/sample images/laptop.jpg";
import globe1 from "../assets/icons/globe-americas.svg";
import globe2 from "../assets/icons/globe-asia-australia.svg";
import globe3 from "../assets/icons/globe-europe-africa.svg";

const Carousel = () => {
  const sampleImages = [
    {
      id: 2,
      title: "Nintendo Switch",
      image: nintendo,
      price: "399.99",
    },
    {
      id: 3,
      title: "Expresso Machine",
      image: coffee,
      price: "199.99",
    },
    {
      id: 4,
      title: "Laptop Asus",
      image: laptop,
      price: "449.99",
    },
  ];

  console.log(sampleImages);
  return (
    <section className="slideshow_main d-flex justify-content-end row">
      <div style={{background: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)'}} className="col-lg-4 d-lg-flex d-none align-items-start flex-column">
        <h1 className="py-4 ps-5 text-white">
          This is the{" "}
          <strong className={style["color_text"]}>Fake Store</strong> experience
        </h1>
        <div className="icons-container d-flex mt-auto">
          <Image src={globe1} alt="globe1" className="mx-5" />
          <Image src={globe2} alt="globe2" className="mx-5" />
          <Image src={globe3} alt="globe3" className="mx-5" />
        </div>
        <h1 className="py-3 mt-auto ps-5 text-white">
          Be <strong className={style["color_text"]}>shocked</strong> with
          our prices
        </h1>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide col-12 col-lg-8 px-0">
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
        <h1 className="py-4 ps-5 text-dark d-lg-none bg-maroon">
          This is the{" "}
          <strong className={style["color_text"]}>Fake Store</strong> experience
        </h1>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              width="1000"
              height="450"
              src={shoes}
              className="d-block w-100 opacity-75"
              alt="Running Shoes"
            />
            <div className="carousel-caption">
              <h4 className="text-dark fw-bold">Running Shoes</h4>
              <p className="text-dark">
                Get Them for only{" "}
                <span className="p-1 bg-black bg-gradient">
                  <strong className={style["color_text"]}>$59.99</strong>
                </span>
              </p>
            </div>
          </div>
          {sampleImages.map((slide) => (
            <div key={slide.id} className="carousel-item">
              <Image
                width="1000"
                height="450"
                src={slide.image}
                className="d-block w-100 opacity-75"
                alt={slide.title}
              />
              <div className="carousel-caption">
                <h4 className="text-dark fw-bold">{slide.title}</h4>
                <p className="text-dark">
                  Get it for only{" "}
                  <span className="bg-black bg-gradient p-1">
                    <strong className={style["color_text"]}>
                      ${slide.price}
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          ))}
          {/* <div className="carousel-item">
            <Image
              width="1000"
              height="450"
              src={shoes}
              className="d-block w-100 opacity-75"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              width="1000"
              height="450"
              src={shoes}
              className="d-block w-100 opacity-75"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div> */}
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
