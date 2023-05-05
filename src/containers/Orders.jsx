import React, { useContext } from "react";
import Image from "next/image";
import arrow from "@assets/icons/arrow-left-square.svg";
import style from "@styles/Orders.module.scss"
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import Link from "next/link";

const Orders = ({ toggleOrders, setToggleOrders }) => {

  const {state: {cart}} = useContext(AppContext)

  return (
    <div className={style["orders_container"]}>
      <div className="title_container d-flex px-3 py-3 align-items-center">
        <Image src={arrow} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)} className={style["back"]}/>
        <p className="title m-0 mx-3 text-white">
            My Orders
        </p>
      </div>
      <hr className="text-white mb-3 mt-0" />
      {cart.map((product) => (
        <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
      {/* <OrderItem /> */}
      <div className="order_section"></div>
      <div className={style["order_total"]}>
        <p className="me-auto mb-0">Total</p>
        <p className="mb-0">$0</p>
      </div>
      <Link href="/checkout">
      <button className={style["primary-button"]}>Checkout</button>
      </Link>
    </div>
  );
};

export default Orders;
