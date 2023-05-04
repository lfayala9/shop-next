import { useState, useEffect } from "react";

const useGetProducts = (API) =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getProducts = async ()=>{
            await fetch(API)
            .then((res)=> res.json())
            .then((response)=> setProducts(response))
        };
        getProducts()
    },[]);

    return products;
}

export default useGetProducts;