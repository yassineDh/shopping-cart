import React from "react";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";

function ShopPage() {
  const dispatch = useDispatch();
  const cartProductsData = useSelector((state) => state.cartProducts);
  return (
    <div className="shopping-cart">
      {cartProductsData.map((cartProduct) => 
        <CartProduct product={cartProduct} key={cartProduct.id} />
      )}
    </div>
  );
}

export default ShopPage;
