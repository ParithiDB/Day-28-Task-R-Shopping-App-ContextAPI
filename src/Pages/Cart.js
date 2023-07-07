import React from "react";
import { useCart } from "../Context/Cart.context";
import CartCard from "../Components/CartCard/CartCard";
import { Button } from "react-bootstrap";

export default function Cart() {

    const { cart = [], handleQuantity = () => {} } = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className="cartPage">
        <div id="cart-page-container" className="container">
            <div className="container-fluid">
                <div className="row">
                    {cart && cart.map((d, i) => (
                        <div className="col-12">
                            <CartCard 
                            data={d}
                            key={`cart-card-${i}`}
                            handleAdd={handleQuantity}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

<div className="py-5 footer">
<div className="container">
    <div className="d-flex justify-content-between">
    <p className="m-0 text-white">SUB TOTAL :</p>
    <p className="m-0 text-white">$ {totalPrice.toFixed(2)}</p>
    
    </div>

    <div className="d-flex justify-content-between mt-2">
    <p className="m-0 text-white">SHIPPING :</p>
    <p className="m-0 text-white">FREE</p>
    
    </div>
    <hr style={{color: "white"}}/>
    <div className="d-flex justify-content-between mt-2">
    <p className="m-0 text-white">TOTAL :</p>
    <p className="m-0 text-white">$ {totalPrice.toFixed(2)}</p>
    
    </div>
    <div className="d-flex justify-content-end mt-2">
    <p className="m-0  text-danger">Get Daily Cash with Nespola Card</p>
    </div>
    <div className="d-flex justify-content-end mt-2">
    <Button variant="outline-success">
        <img src="https://e7.pngegg.com/pngimages/494/693/png-clipart-logo-shopping-list-design-product-shopping-list-purple-angle-thumbnail.png" alt="cart" style={{height: 25,width: 25, borderRadius: 50} } className="me-1"></img>
        Check Out
        </Button>
    </div>
</div>
</div>

</div>
    )
}