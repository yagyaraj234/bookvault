import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Home,
  Products,
  Cart,
  PaymentSuccess,
  ProductDescription,
} from "./pages/index";
import Layout from "./layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDescription />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/order-placed" element={<PaymentSuccess />} />
        <Route
          exact
          path="*"
          element={<p className="text-center">Page does not exist.</p>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
