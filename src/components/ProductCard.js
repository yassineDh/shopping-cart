import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { image, title, id } = props;
  return (
    <div className="col-lg-3">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={`/products/${id}`} className="btn btn-primary">
            More details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
