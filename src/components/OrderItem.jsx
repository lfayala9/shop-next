import React, { useContext } from "react";
import Image from "next/image";
import x from "@assets/icons/x.svg"
import style from "@styles/OrderItem.module.scss";
import AppContext from "@context/AppContext";

const OrderItem = ({ product,}) => {
  const {removeItem} = useContext(AppContext)
  const handleRemove = (item) =>{
    removeItem(item)
  }
  return (
    <div className={style["cont_orderItem"]}>
      <figure>
        <Image width={70} height={70} src={product.image} alt="bike" />
      </figure>
      <p className="text-white m-0">{product?.title}</p>
      <p className="text-white m-0">${product?.price}</p>
      <Image src={x} alt="alt" className={style["x_icon"]} onClick={()=> handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
