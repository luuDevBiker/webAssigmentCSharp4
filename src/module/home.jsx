import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.create({
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "1800",
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Methods":
          "PUT, POST, GET, DELETE, PATCH, OPTIONS",
      },
    });
    axios.get("https://localhost:44357/api/Product").then((res) => {
      setProduct(res.data);
    });
  }, []);
  const addToCart = (id) => {
    const product = products.find((item) => item.id === id);
    console.log(product);
    var item = {
      productID: product.idProduct,
      customerID: localStorage.getItem("customerID"),
      productName: product.nameProduct,
      quantity: parseInt( document.getElementById("quantityBuy-" + product.productID)
        .value),
      price: product.price,
      isDeleted: true,
    };
    console.log(item);
    axios.post("https://localhost:44357/api/Cart", item).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="container mt-12 bg-blue show-down-3xl">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="col-md-12">
              {products.map((product, index) => {
                return (
                  <div
                    className="w-64 mx-2 my-2 border-2 inline-block"
                    key={index}
                  >
                    <h5 className="card-title">{product.nameProduct}</h5>
                    <p className="card-text">{product.nameProduct}</p>
                    <p className="card-text">{product.price}</p>
                    <div className="w-full h-56">
                      <img className="h-full" src={product.image} alt="" />
                    </div>
                    <p className="card-text">{product.price} $</p>
                    <p className="card-text">số lượng : {product.quantity}</p>
                    <div>
                      <input
                        type="number"
                        id={"quantityBuy-" + product.productID}
                        className="w-32 h-full"
                        defaultValue="1"
                        min={1}
                        max={product.quantity}
                      />
                    </div>
                    <Link
                      to={`details/${product.idProduct}`}
                      className="btn btn-primary m-1"
                    >
                      Detail
                    </Link>
                    <button
                      disabled={product.quantity <= 0 ? true : false}
                      className="btn btn-primary m-1"
                      onClick={() => addToCart(product.productID)}
                    >
                      Add to cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
