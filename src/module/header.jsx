import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export function hidden() {
  if(localStorage.getItem("logined") === "true"){
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("logout").style.display = "inline-block";
  }
  else{
    document.getElementById("login").style.display = "inline-block";
    document.getElementById("register").style.display = "inline-block";
    document.getElementById("logout").style.display = "none";
  }
  if(localStorage.getItem("role") === "true"){
    document.getElementById("admin").style.display = "inline-block";
    document.getElementById("cart").style.display = "none";
  }
  else{
    document.getElementById("admin").style.display = "none";
    document.getElementById("cart").style.display = "inline-block";
  }
}
const Header = () => {
  const logout = () => {
    localStorage.setItem("logined", false);
    localStorage.setItem("role",false);
    window.location.href = "/";
  };
  setTimeout(hidden, 1000);
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary" id="home">
                  Home
                </Link>
              </li>
              <li id="admin">
                <Link to="/admin" className="nav-link px-2 text-white">
                  Admin
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  My account
                </Link>
              </li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <button
                id="login"
                type="button"
                className="btn btn-outline-light me-2"
              >
                <Link to="login">
                  Login
                </Link>
              </button>
              <button
                id="register"
                type="button"
                className="btn btn-warning me-2"
              >
                <Link to="register">Register</Link>
              </button>
              <button
                id="logout"
                type="button"
                className="btn btn-warning"
                onClick={()=>logout()}
              >
                Sign-out
              </button>
              <button
              id="cart"
                type="button"
                className="btn btn-secondary ml-2 h-10 w-12 center"
              >
                <Link to="cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                  </svg>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
