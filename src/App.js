import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Products, Checkout, Cart } from "./pages/index";
import Layout from "./layout/Layout";
import PaymentSuccess from "./pages/PaymentSuccess";
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/cart/checkout" element={<Checkout />} />
        <Route exact path="/order-placed" element={<PaymentSuccess />} />
      </Routes>
    </Layout>
  );
}

export default App;
