import React from "react";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";

function ShopPage() {
  const dispatch = useDispatch();
  const cartProductsData = useSelector((state) => state.cartProducts);

  let money = cartProductsData
    .map((el) => el.price * el.quantity)
    .reduce((a, b) => a + b,0);

  let quantity = cartProductsData
    .map((el) => el.quantity)
    .reduce((a, b) => a + b,0);
  return (
    <div>
      <div className="shopping-cart">
        {cartProductsData.map((cartProduct) => (
          <CartProduct product={cartProduct} key={cartProduct.id} />
        ))}
      </div>
      {cartProductsData.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="col-3">total of orders : {quantity}</div>
            <div className="col-3">amount : {money} </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopPage;
