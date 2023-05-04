import Image from "next/image";
import style from "../styles/Header.module.scss";
import logo from "../assets/icons/basket-fill.svg";
import menu from "../assets/icons/list.svg";
import user from "../assets/icons/person-circle.svg";
import cart from "../assets/icons/cart-fill.svg";
import Orders from "@/containers/Orders";
import Menu from "./Menu";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  let menuRef = useRef();
  let ordersRef = useRef();

  useEffect(() => {
    let handleOrders = (e) => {
      if (!ordersRef.current.contains(e.target)) {
        setToggleOrders(false);
      }
    };
    document.addEventListener("mousedown", handleOrders);

    return () => {
      document.removeEventListener("mousedown", handleOrders);
    };
  });

  useEffect(() => {
    let handleClose = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  });
  return (
    <>
      <header className="bg-dark py-3 shadow-lg mb-0">
        <div className="nav_container mx-2 mx-md-5">
          <div className="d-flex align-items-center justify-content-between">
            <Image src={menu} alt="menu" className="mini-menu d-md-none" />
            <div className="logo-container d-flex mx-md-0 mx-5">
              <Image src={logo} alt="logo" className={style["nav-logo"]} />
              <h5 className={style["title"]}>
                Fake <br /> Store
              </h5>
            </div>
            <ul className="d-none d-lg-flex mx-5 nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#home" className={style["nav-text"]}>
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
            <div className={style["icons_cont"]}>
              <div ref={menuRef} className={style["user-icon"]}>
                <Image
                  className={style["menu_logo"]}
                  onClick={() => setToggle(!toggle)}
                  src={user}
                  alt="user"
                />
              </div>
              <div ref={ordersRef} className={style["shopping-cart"]}>
                <Image
                  onClick={() => setToggleOrders(!toggleOrders)}
                  className={style["menu_logo"]}
                  src={cart}
                  alt="cart"
                />
                {/* <div className="text-white">3</div> */}
              </div>
            </div>
          </div>
        </div>
        {toggleOrders && (
          <Orders
            toggleOrders={toggleOrders}
            setToggleOrders={setToggleOrders}
          />
        )}
        {toggle && <Menu />}
      </header>
      <hr className="text-white m-2 p-1" />
    </>
  );
};

export default Header;
