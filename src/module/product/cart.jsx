import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Cart = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://619217ea41928b00176902bb.mockapi.io/api/ReactLearn/carts")
      .then((res) => {
        setProduct(res.data);
      });
  }, []);
  const thanhToan = async () => {
    var deleteCart = products; 
    while (deleteCart.length > 0) {
      console.log(deleteCart.length);
      await axios.delete(`https://619217ea41928b00176902bb.mockapi.io/api/ReactLearn/carts/${products[products.length-1].id}`);
      deleteCart.pop();
    }
    setProduct([]);
    };
  const updateQuantity = (id,option) => {
    const quantity = document.getElementById(`quantity${id}`).value;
    console.log(quantity);
    if(option === 'plus'){
        document.getElementById(`quantity${id}`).value = parseInt(quantity) + 1;
    }else{
        if(quantity > 1){
            document.getElementById(`quantity${id}`).value = parseInt(quantity) - 1;
        }
    }
    const product = products.find((item) => item.id === id);
    product.quantity = quantity;
    axios.put(
      `https://619217ea41928b00176902bb.mockapi.io/api/ReactLearn/carts/${id}`,
      product
    );
  };
  const deleteProduct = async(id) => {
    await axios.delete(`https://619217ea41928b00176902bb.mockapi.io/api/ReactLearn/carts/${id}`);
    await setProduct(products.filter((item) => item.id !== id));    
  };return (
    <div className="container mt-12 bg-blue show-down-3xl">
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Cart</h1>
          </div>
          <div className="flex-1">
            <Link to="/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                tiếp tục mua sắm
              </button>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <button onClick={()=>thanhToan()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              thanh toán
            </button>
          </div>
        </div>
      </div>
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
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.category}</p>
                    <p className="card-text">{product.title}</p>
                    <img src={product.image} alt="" />
                    <button
                      className="btn btn-primary m-1"
                      onClick={() => updateQuantity(product.id,"minus")}
                    >
                      -
                    </button>
                    <input
                      className="w-12 text-center"
                      type="number"
                      name="quantity"
                      readOnly={true}
                      id={"quantity" + product.id}
                      value={product.quantity}
                    />
                    <button className="btn btn-primary m-1" id="plus" onClick={()=>updateQuantity(product.id,"plus")}>
                      +
                    </button>
                    <button className="btn btn-primary m-1" id="plus" onClick={()=>deleteProduct(product.id)}>
                      delete
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
export default Cart;
