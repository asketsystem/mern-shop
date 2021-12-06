import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// If you are using react-router-dom v6 it looks like Switch has been replaced with Routes //
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
};

export default App;