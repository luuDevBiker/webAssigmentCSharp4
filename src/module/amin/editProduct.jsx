import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateProduct } from "../../api/intances";
import { toast } from "react-toastify";


const EditProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    await axios.get("https://localhost:44357/api/Product/" + id).then((res) => {
      setProduct(res.data[0]);
    });
  }, []);
  const { register, handleSubmit, watch } = useForm();

  const editProduct = (data) => {
    console.log(data);
    var item = {
      idProduct: product.idProduct,
      image: data.image,
      importPrice: data.importPrice,
      isDeleted: data.isDeleted,
      nameProduct: data.nameProduct,
      price: data.price,
      quantity: data.quantity
    };
    axios.put("https://localhost:44357/api/Product/",item).then((res) => {  
      toast.success("Sửa thành công",{
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <div className="container mt-12 bg-blue show-down-3xl">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="col-md-12">
              <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-left m-3">
                  Home
                </button>
              </Link>
            </div>
            <form action="" onSubmit={handleSubmit(editProduct)}>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="col-md-12">
                      <h1 className="text-2xl font-bold">Edit Product</h1>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mx-3 mt-3">
                        <label className="float-left" htmlFor="">
                          Name Product
                        </label>
                        <input
                          name="nameProduct"
                          type="text"
                          className="form-control"
                          defaultValue={product.nameProduct}
                          {...register("nameProduct", { required: true })}
                        />
                      </div>
                      <div className="form-group mx-3 mt-3">
                        <label className="float-left" htmlFor="">
                          Price
                        </label>
                        <input
                          name="price"
                          type="text"
                          className="form-control"
                          defaultValue={product.price}
                          {...register("price", { required: true })}
                        />
                      </div>
                      <div className="form-group mx-3 mt-3">
                        <label className="float-left" htmlFor="">
                          Image
                        </label>
                        <input
                          name="image"
                          type="text"
                          className="form-control"
                          defaultValue={product.image}
                          {...register("image", { required: true })}
                        />
                      </div>
                      <div className="form-group mx-3 mt-3">
                        <label className="float-left" htmlFor="">
                          Quantity
                        </label>
                        <input
                          name="quantity"
                          type="text"
                          className="form-control"
                          defaultValue={product.quantity}
                          {...register("quantity", { required: true })}
                        />
                      </div>
                      <div className="mx-3 mt-3">
                        <label className="float-left" htmlFor="">
                          Disable product
                        </label>
                        <input
                          name="isDeleted"
                          type="checkbox"
                          className="w-12"
                          {...register("isDeleted")}
                        />
                      </div>
                      <button
                        type="submit"
                        className="border bg-blue-500 rounded-3 px-3 py-1 my-3"
                      >
                        Update Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
