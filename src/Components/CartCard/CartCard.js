import React from "react";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export default function CartCard({data = {}, handleAdd = (e) => {}}) {



    return (
        <div className="container">
            <div className="card mt-5 p-2 ">
                <div className="row">
                    <div className="col-4">
                    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
        height={250}
          className="d-block w-100 h-100 pic"
          src={data.thumbnail}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={250}
          className="d-block w-100 h-100 pic"
          src={data.images[2]}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={250}
          className="d-block w-100 h-100 pic"
          src={data.images[1]}
          alt="First slide"
        />
      </Carousel.Item>
      
      
      </Carousel>
                    </div>
                    <div className="col-3">
                        <h5 className="d-flex text-align-left">{data.title}</h5>
                        
                        <h5 className="d-flex text-align-left">$ {data.price}.00/- <span className="ms-1"> per unit</span></h5>
                        <h6 className="d-flex text-align-left">Discount : {data.discountPercentage}% off</h6>
                        
                        

                    </div>
                    <div className="col-5 d-flex align-items-center justify-content-center">

                    <Button variant="outline-success mt-3" onClick={() => handleAdd(data.id, 'decrement')}>-</Button>
                    <h3 className="m-0">{data.quantity}</h3>
                    <Button variant="outline-success mt-3" onClick={() => handleAdd(data.id, 'increment')}>+</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}