import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
    return (
        <div className="loginWrapper">
          <div className="loginContainer">
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
            <Button
              variant="primary"
              size="lg"
              disabled={isLoading}
              onClick={dis.handleSubmit()}
              block
            >
              {isLoading ? 'Loading…' : 'LOGIN'}
            </Button>
          </div>
        </div>
      );
};

export default SignIn;

