import React from "react";
import Image from "next/image";
import arrow from "../assets/icons/arrow-left-square.svg";
import style from "../styles/Orders.module.scss"

const Orders = ({ toggleOrders, setToggleOrders }) => {
  return (
    <div className={style["orders_container"]}>
      <div onClick={() => setToggleOrders(!toggleOrders)} className="title_container d-flex px-3 py-3 align-items-center">
        <Image src={arrow} alt="arrow"/>
        <p className="title m-0 mx-3 text-white">
            My Orders
        </p>
      </div>
      <hr className="text-white mb-3 mt-0" />
      <div className="order_section"></div>
      <div className={style["order_total"]}>
        <p className="me-auto mb-0">Total</p>
        <p className="mb-0">$0</p>
      </div>
      <button className={style["primary-button"]}>Checkout</button>
    </div>
  );
};

export default Orders;
