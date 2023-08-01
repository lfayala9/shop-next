import Product from "@components/Product";
import useGetProducts from "@hooks/useGetProducts";
import React, { useEffect,useState } from "react";
import style from "@styles/ProductList.module.scss"
import { ColorRing } from "react-loader-spinner";

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const API = `${apiUrl}/api/v1/products`

function ProductList() {
  const [loading, setIsLoading] = useState(false)
  const products = useGetProducts(API)

  useEffect(()=>{
    setIsLoading(true);
    products;
  },[])

  return (
    <>
      <div className={style["products_cont"]} id="products">
        <div className="main_cont d-flex flex-column align-items-center justify-content-center p-5">
          <h1 className="p-1 text-white h1">Browse some of our <br />Amazing <strong className={style["color_text3"]}>Products</strong></h1>
          <div className="d-flex row justify-content-center mt-4">
            {loading ? products.map(i=> (
              <Product loading={loading} product={i} key={i.id} data-tooltip-id="tooltip"
              data-tooltip-place="top"/>
            )) : <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
