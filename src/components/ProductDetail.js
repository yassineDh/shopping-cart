import React, { useEffect, useState } from "react";
// import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail(props) {
  let { id } = useParams();

  const [product, setproduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      const dummyProduct = res;
      setproduct(dummyProduct);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-4 item-photo">
          <img
            style={{ maxWidth: "100%" }}
            src="https://ak1.ostkcdn.com/images/products/8818677/Samsung-Galaxy-S4-I337-16GB-AT-T-Unlocked-GSM-Android-Cell-Phone-85e3430e-6981-4252-a984-245862302c78_600.jpg"
          />
        </div>
        <div className="col-xs-5" style={{ border: "0px solid gray" }}>
          <h3>
            Samsung Galaxy S4 I337 16GB 4G LTE Unlocked GSM Android Cell Phone
          </h3>
          <h5 style={{ color: "#337ab7" }}>
            vendido por <a href="#">Samsung</a> ·{" "}
            <small style={{ color: "#337ab7" }}>(5054 ventas)</small>
          </h5>

          <h6 className="title-price">
            <small>PRECIO OFERTA</small>
          </h6>
          <h3 style={{ marginTop: 0 + "px" }}>U$S 399</h3>

          <div className="section">
            <h6 className="title-attr" style={{ marginTop: 15 + "px" }}>
              <small>COLOR</small>
            </h6>
            <div>
              <div
                className="attr"
                style={{ width: 25 + "px", background: "#5a5a5a" }}
              ></div>
              <div
                className="attr"
                style={{ width: 25 + "px", background: "white" }}
              ></div>
            </div>
          </div>

          <div className="section" style={{ paddingBottom: 20 + "px" }}>
            <h6 className="title-attr">
              <small>CANTIDAD</small>
            </h6>
            <div>
              <div className="btn-minus">
                <span className="glyphicon glyphicon-minus"></span>
              </div>
              <input value="1" />
              <div className="btn-plus">
                <span className="glyphicon glyphicon-plus"></span>
              </div>
            </div>
          </div>

          <div className="section" style={{ paddingBottom: 20 + "px" }}>
            <button className="btn btn-success">
              <span
                style={{ marginRight: 20 + "px" }}
                className="glyphicon glyphicon-shopping-cart"
                aria-hidden="true"
              ></span>{" "}
              Agregar al carro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
