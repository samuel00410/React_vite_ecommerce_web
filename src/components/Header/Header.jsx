import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar"; // 選單
import Head from "../Head/Head";
import Search from "../Search/Search";

const Header = () => {
  return (
    <>
      <Head />
      <Search />
      <Navbar />
    </>
  );
};

export default Header;
