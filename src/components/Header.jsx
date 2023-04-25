import Image from "next/image";
import { useState } from "react";
import style from "../styles/Header.module.scss";
import logo from "../assets/icons/basket-fill.svg";
import menu from "../assets/icons/list.svg";
import user from "../assets/icons/person-circle.svg";
import cart from "../assets/icons/cart-fill.svg";
import Menu from "./Menu";

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className="bg-dark py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between justify-content-lg-start">
          <Image src={menu} alt="menu" className="mini-menu d-md-none" />
          <div className="logo-container d-flex mx-md-0 mx-5">
            <Image src={logo} alt="logo" className={style["nav-logo"]} />
            <h5 className={style["title"]}>
              Fake <br /> Store
            </h5>
          </div>
          <ul className="mx-5 nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className={style["nav-text"]}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={style["nav-text"]}>
                Products
              </a>
            </li>
            <li>
              <a href="#" className={style["nav-text"]}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" className={style["nav-text"]}>
                Contact
              </a>
            </li>
          </ul>
          <span className={style["shopping-cart"]}>
            <Image className="mx-5" src={cart} alt="cart" />
          </span >
          <span className={style["user-icon"]}>
            <Image onClick={handleToggle} className="mx-1" src={user} alt="user" />
          </span>
        </div>
      </div>
      <hr className="text-white mt-3 mb-0" />
      {toggle && <Menu />}
    </header>
  );
};

export default Header;
