import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./module/home";
import Login from "./module/account/login";
import Cart from "./module/product/cart";
import Details from "./module/product/details";
import Register from "./module/account/resegter";
import Admin from "./module/admin";
import AddProduct from "./module/amin/addProduct";
import EditProduct from "./module/amin/editProduct";
import Header from "./module/header";
import TestApi from "./module/readImage";

export function SignOut() {
  localStorage.setItem("role", false);
  localStorage.setItem("logined", false);
}
function App() {
  const role = localStorage.getItem("role");
  if (role === undefined) {
    localStorage.setItem("role", false);
    localStorage.setItem("logined", false);
  }
  return (
    <div className="App bg-blue-100 pb-56">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<Admin />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="editProduct/:id" element={<EditProduct />} />
          <Route path="testApi" element={<TestApi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
