import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // React Router
// Pages
import { Home, Cart, CategoryProduct, ProductSingle, Search } from "./pages";
// components
import Layout from "./components/Layout";
import Siderbar from "./components/Sidebar/Sidebar"; // 側邊欄

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categoryproduct" element={<CategoryProduct />} />
            <Route path="/productsingle" element={<ProductSingle />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
