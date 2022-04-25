import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const addProduct = (data) => {
    console.log(data);
    var item = {
      idProduct: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nameProduct: data.nameProduct,
      price: data.price,
      quantity: data.quantity,
      importPrice: data.importPrice,
      image: data.image,
      isDeleted: false,
    };

    axios
      .post("https://localhost:44357/api/Product", item)
      .then((res) => {
        toast.success("Thêm thành công", {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Thêm thất bại", {
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
      <form action="" onSubmit={handleSubmit(addProduct)}>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="col-md-12">
                <h1 className="text-2xl font-bold">Add Product</h1>
              </div>
              <div className="col-md-12">
                <div className="form-group mx-3 mt-3">
                  <label className="float-left" htmlFor="">
                    Name
                  </label>
                  <input
                    name="nameProduct"
                    type="text"
                    className="form-control"
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
                    {...register("quantity", { required: true })}
                  />
                </div>
                <button
                  type="submit"
                  className="border bg-blue-500 rounded-3 px-3 py-1 my-3"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
