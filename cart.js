import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);

  // for(let i = 0; i< cart.length; i++){
  //  let total = 0; const product = cart[i];
  //   total = total + product.price;

  // }
  let shipping = 0;
  if (total > 455) {
    shipping = 55.99;
  } else if (total > 15) {
    shipping = 12.99;
  } else if (total > 0) {
    shipping = 4.99;
  }

  const tax = Math.round(total / 10);

  return (
    <div className="summary">
      <h4>Order Summary</h4>
      <p>Items Ordered:{cart.length} </p>
      <p>Product Price: {total}</p>
      <p>Shipping Cost:{shipping} </p>
      <p>Tax: {tax}</p>
      <p>Total Price:{total + shipping}</p>
    </div>
  );
};

export default Cart;
