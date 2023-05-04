import Image from "next/image";
import check from "../assets/icons/bag-check.svg";
import bag from "../assets/icons/bag-plus.svg"
import React, {useEffect, useState}from "react";
import style from "../styles/Product.module.scss";

function Product({product}) {

  const [added, setAdded] = useState(false)
  
  const handleAdd = () =>{
    setAdded(!added)
  }

  return (
    <div className={style["product_cont"]}>
      <div className="cont d-flex flex-column">
        <Image
          src={product.image}
          width="250"
          height={250}
          alt="laop"
          className={style["product_img"]}
        />
        <div className={style["product_info"]}>
          <div>
            <p className="text-white">{product.title}</p>
            <p className="text-white m-0"> <span className="p-2 bg-black bg-gradient"><strong className={style["color_text"]}>${product.price}</strong></span></p>
          </div>
          <figure className={style["bag_icon"]} onClick={handleAdd}>
            <Image src={!added ? bag : check} alt="bag" className={style["bag"]}/>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Product;
