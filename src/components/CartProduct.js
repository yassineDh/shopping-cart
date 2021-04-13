import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFromCart } from "../redux/actions/action";
import "./CartProduct.css";

function CartProduct(props) {
  const { product } = props;
  const dispatch = useDispatch();
  return (
    <div className="item-card-product">
      <div className="buttons-card-product">
        <span
          className="delete-btn-card-product"
          onClick={()=>{dispatch(deleteProductFromCart(product.id))}}
        ></span>
      </div>

      <div className="image-card-product">
        <img src={product.image} alt="" style={{ maxWidth: "80px" }} />
      </div>

      <div className="description-card-product">
        <span>{product.title}</span>
        <span>{product.category}</span>
      </div>

      <div className="quantity-card-product" style={{ marginLeft: "auto" }}>
        <input type="text" name="name" value={product.quantity} disabled />
      </div>

      <div className="total-price-card-product">
        $ {product.quantity * product.price}
      </div>
    </div>
  );
}

export default CartProduct;
