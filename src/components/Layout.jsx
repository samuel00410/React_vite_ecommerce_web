import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header/Header"; // 頁首
import Navbar from "./Navbar/Navbar"; // 選單
import Footer from "./Footer/Footer"; // 頁尾
import Siderbar from "./Sidebar/Sidebar"; // 側邊欄

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
