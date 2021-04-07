import React, { useEffect, useState } from "react";
// import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail(props) {
  let { id } = useParams();

  const [product, setproduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      const dummyProduct = res.data;
      setproduct(dummyProduct);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 item-photo">
          <img style={{ maxWidth: "100%" }} src={product.image} />
        </div>
        <div className="col-lg-5" style={{ border: "0px solid gray" }}>
          <h3>{product.title}</h3>
          <h5 style={{ color: "#337ab7" }}>
            Category :
            <small style={{ color: "#337ab7" }}>
              {" "}
              {" " + product.category}
            </small>
          </h5>

          <h6 className="title-price">
            <small>Price</small>
          </h6>
          <h3 style={{ marginTop: 0 + "px" }}>US {product.price}$</h3>

          <div>
            <h6 style={{ marginTop: 15 + "px" }}>
              <small>Description</small>
            </h6>
            <div>
              <div style={{ background: "#5a5a5a" }}>{product.description}</div>
            </div>
          </div>

          <div style={{ paddingBottom: 20 + "px" }}>
            <h6>
              <small>Quantity</small>
            </h6>
            <div className="d-inline-flex">
              <div>
                <button type="button" class="btn btn-dark">
                  +
                </button>
              </div>
              <input value="1" />
              <div>
                <button type="button" class="btn btn-dark">
                  -
                </button>
              </div>
            </div>
          </div>

          <div style={{ paddingBottom: 20 + "px" }}>
            <button className="btn btn-success">Submit order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
