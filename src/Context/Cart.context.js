import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({
    cart : [],
    setCart : () => Promise,
    handleQuantity : () => null,
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    function handleQuantity(id = 0, type = '') {
        const cartCopy = [...cart];
        
        const matchedDataIndex = cartCopy.findIndex((d) => d.id === id);
        if(matchedDataIndex !== -1) {
            if (type === 'decrement' && cartCopy[matchedDataIndex].quantity > 1) {
                cartCopy[matchedDataIndex].quantity--;
            } else if (type === 'increment') {
                cartCopy[matchedDataIndex].quantity++;
            } else if (type === 'remove') {
                cartCopy.splice(matchedDataIndex, 1)
            }
            setCart(cartCopy);
        }
        else {
            alert('No data found');
        }
    }

   

    const value = {
        cart,
        setCart,
        handleQuantity,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}