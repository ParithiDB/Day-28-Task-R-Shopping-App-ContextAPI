import React, {useEffect, useState} from "react";
import Product from "../Components/Product/Product.js";
import FluidImage from "../Components/Images/Image.js";
import { useCart } from "../Context/Cart.context.js";

export default function Home() {

    const [items, setItems] = useState(null);
    // const [cart, setCart] = useState([]);
    const {cart, setCart} = useCart();
   
    

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_MOCKS_PRODUCTS_PATH}`)
        .then((response) => response.json())
        .then((result) => {
            if (result && result.products) {
                setItems(result.products)
            }
        })
        .catch((error) => console.log(error));


        return () => {};
    },[])

    function handleAddToCart(d) {
        let cartCopy = [...cart];
        cartCopy.push({...d, quantity : 1});
        setCart(cartCopy);
    }

    return (
        <>
        
        <div className="head">
            <FluidImage ImageURL="https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg" />
            
        </div>

       <div>
       {items && items.map((d, i) => (
        <Product key={`product-key-${i}`} data={d} handleAdd={handleAddToCart}/>
      ))}
           
       </div>
                
            
        </>
    )
}