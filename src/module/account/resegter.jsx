import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
      data['isAdmin'] = true;
      data['icCustomer'] = '3fa85f64-5717-4562-b3fc-2c963f66afa6'
      console.log(data);
    if (data.Password !== document.getElementsByName("ConfirmPassword")[0].value) {
      messageForm("Password not match", "error");
    } else {
        axios.post("http://localhost:44357/api/Customer", data).then((res) => {
            if (res.data.code === 200) {
                messageForm(res.data.status, "success");
                setTimeout(() => {
                    document.getElementById("home").click();
                }, 1500);
            } else {
                messageForm(res.data.status, "error");
            }
        });
      messageForm("Register success", "success");
    }
  };
  const messageForm = (value ,type) => {
    if (type === "success") {
      toast.success(value, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
        toast.error(value, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
  };
  return (
    <div className="container mt-3 bg-blue">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign up</h3>
        <div className="form-group">
          <label className="float-left mt-4">Customer Name</label>
          <input
            name="customerName"
            type="text"
            className="form-control"
            placeholder="Enter Customer Name"
            {...register("customerName", { required: true })}
          />
        </div>
        <div className="form-group">
          <label className="float-left mt-4">Account</label>
          <input
            name="account"
            type="text"
            className="form-control"
            placeholder="Enter account"
            {...register("account", { required: true })}
          />
        </div>

        <div className="form-group">
          <label className="float-left mt-4">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
        </div>
        <div>
          <label className="float-left mt-4">Confirm Password</label>
          <input
            name="ConfirmPassword"
            type="password"
            className="form-control"
            placeholder="Enter Confirm Password"
          />
        </div>

        <div className="form-group">
            <label name="NumberPhone" className="float-left mt-4">Number Phone</label>
            <input
                name="numberPhone"
                type="tel"
                className="form-control"
                placeholder="Enter Number Phone"
                {...register("numberPhone", { required: true })}
            />
        </div>

        <div>
          <label className="float-left mt-4">Sex</label>
          <select
            name="Sex"
            className="w-full"
            {...register("Sex", { required: true })}
          >
            <option value={true}>males</option>
            <option value={false}>females</option>
          </select>
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block mt-16">
          Sign up
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
