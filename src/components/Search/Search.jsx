import React from "react";
import { Link } from "react-router-dom";
import "./Search.scss";

const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          {/* 左半部 */}
          <div className="logo width">
            <img src="/vite.svg" alt="logo" />
          </div>
          {/* 中半部 */}
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="請輸入你的搜尋" />
            <span>All Category</span>
          </div>
          {/* 右半部 */}
          <div className="icon f_flex width">
            <i className="fa fa-user icon_circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
