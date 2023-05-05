import React from "react";
import Image from "next/image";
import x from "@assets/icons/x.svg"
import style from "@styles/OrderItem.module.scss";

const OrderItem = ({ product }) => {
  return (
    <div className={style["cont_orderItem"]}>
      <figure>
        <Image width={70} height={70} src={product.image} alt="bike" />
      </figure>
      <p className="text-white m-0">{product?.title}</p>
      <p className="text-white m-0">${product?.price}</p>
      <Image src={x} alt="alt" className="me-1" />
    </div>
  );
};

export default OrderItem;
