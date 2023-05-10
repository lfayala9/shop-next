import Image from "next/image";
import check from "@assets/icons/bag-check.svg";
import bag from "@assets/icons/bag-plus.svg"
import React, { useContext, useRef, useState } from "react";
import style from "@styles/Product.module.scss";
import AppContext from "@context/AppContext";

const Product = ({product})=> {

  let ref = useRef()
  const { state, addToCart, removeItem } = useContext(AppContext);
  const [added, setAdded] = useState(false)

  const handleAdd = (item) =>{
    setAdded(true)
    addToCart(item)
  }
  
  const handleRemove = (item) =>{
    setAdded(false)
    removeItem(item)
  }

  return (
    <div className={style["product_cont"]}>
      <div className="cont d-flex flex-column">
        <Image
          src={product.image}
          width="270"
          height={250}
          alt="laop"
          className={style["product_img"]}
        />
        <div className={style["product_info"]}>
          <div>
            <p className="text-white">{product.title}</p>
            <p className="text-white m-0"> <span className="p-2 bg-black bg-gradient"><strong className={style["color_text"]}>${product.price}</strong></span></p>
          </div>
            {state.cart.includes(product) 
            ?<figure ref={ref} className={style["bag_icon2"]} onClick={()=> handleRemove(product)}> 
              <Image src={check} alt="bag" className={style["bag_check"]}/>
            </figure>
          :<figure ref={ref} className={style["bag_icon"]} onClick={()=> handleAdd(product)}>
              <Image src={bag} alt="bag" className={style["bag"]}/>
            </figure>
          }
        </div>
      </div>
    </div>
  );
}

export default Product;
