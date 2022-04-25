import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Admin = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://localhost:44357/api/Product/getProductForAdmin"
      )
      .then((res) => {
        setProduct(res.data);
      });
  }, []);
  const deleteProduct = (id) => {
    axios
      .put(
        `https://localhost:44357/api/Product/${id}`
      )
      .then((res) => {
        var listProduct = products.filter((product) => product.id !== id);
        setProduct(listProduct);
      });
  };
  return (
    <div className="container mt-12 bg-blue show-down-3xl">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="col-md-12">
              <h1 className="text-2xl font-bold">Admin</h1>
            </div>
          </div>
          <div className="col-md-12">
            <ul>
              <li className="col-md-3 inline-block font-bold">
                <Link to={`/admin`}>list product</Link>
              </li>
              <li className="col-md-3 inline-block font-bold">
                <Link to={`/addProduct`}>add new product</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            {products.map((product, index) => {
              return (
                <div
                  className="w-64 mx-2 my-2 border-2 inline-block"
                  key={index}
                >
                  <h5 className="card-title">{product.nameProduct}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text">{product.title}</p>
                  <div className="w-full h-56">
                    <img className="h-full" src={product.image} alt="" />
                  </div>
                  <p className="card-text">{product.price} $</p>
                  <p className="card-text">số lượng : {product.quantity}</p>
                  <button
                    to={`/delete/${product.idProduct}`}
                    onClick={() => deleteProduct(product.idProduct)}
                    className="btn btn-primary m-1"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/editProduct/${product.idProduct}`}
                    className="btn btn-primary m-1"
                  >
                    Edit
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
