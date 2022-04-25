import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const addToCart = (product) => {
    axios.get(
      "https://localhost:44357/api/Product/" + id,
      product
    );
  };
  useEffect(() => {
    axios
      .get(
        `https://localhost:44357/api/Product/${id}`
      )
      .then((res) => {
        setProduct(res.data[0]);
        console.log(res.data);
      });
  }, []);
  return (
    <div className="container mt-12 bg-blue show-down-3xl">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="col-md-12">
              <div className="w-56 mx-2 my-2 border-2 inline-block">
                <h5 className="card-title">{product.nameProduct}</h5>
                <p className="card-text">{product.category}</p>
                <p className="card-text">{product.price} $</p>
                <img src={product.image} alt="" />
                <button
                  className="btn btn-primary m-1"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
