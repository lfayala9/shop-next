import React, { useContext } from "react";
import Image from "next/image";
import x from "@assets/icons/x.svg"
import style from "@styles/OrderItem.module.scss";
import AppContext from "@context/AppContext";

const OrderItem = ({ product, ids}) => {
  const {removeItem} = useContext(AppContext)
  const handleRemove = (product) =>{
    removeItem(product)
  }
  return (
    <div className={style["cont_orderItem"]}>
      <figure>
        <Image width={70} height={70} src={product.image} alt="bike" />
      </figure>
      <p className="text-white m-0">{product?.name}</p>
      <p className="text-white m-0">${product?.price}</p>
      <Image src={x} alt="alt" className={style["x_icon"]} onClick={()=> handleRemove(ids)} />
    </div>
  );
};

export default OrderItem;
