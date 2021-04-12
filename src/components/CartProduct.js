import React from "react";
import "./CartProduct.css";

function CartProduct(props) {
  const { product } = props;
  return (
    <div className="item-card-product">
      <div className="buttons-card-product">
        <span className="delete-btn-card-product"></span>
      </div>

      <div className="image-card-product">
        <img src={product.image} alt="" style={{ maxWidth: "80px" }} />
      </div>

      <div className="description-card-product">
        <span>{product.title}</span>
        <span>{product.category}</span>
      </div>

      <div className="quantity-card-product" style={{ marginLeft: "auto"}}>
        <input type="text" name="name" value={product.quantity} disabled />
      </div>

      <div className="total-price-card-product">
        $ {product.quantity * product.price}
      </div>
    </div>
  );
}

export default CartProduct;
