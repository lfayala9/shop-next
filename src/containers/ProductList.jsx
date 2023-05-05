import Product from "@components/Product";
import useGetProducts from "@hooks/useGetProducts";
import React from "react";
import style from "@styles/ProductList.module.scss"


const API = 'https://fakestoreapi.com/products?offset=20&limit=12';

function ProductList() {

  const products = useGetProducts(API)

  return (
    <>
      <div className={style["products_cont"]}>
        <div className="main_cont d-flex flex-column align-items-center justify-content-center p-5">
          <h1 className="p-1 text-white h1">Browse some of our <br />Amazing <strong className={style["color_text3"]}>Products</strong></h1>
          <div className="d-flex row justify-content-center mt-4">
            {products.map(product=> (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
