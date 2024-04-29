import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header">
        {/* 種類 */}
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories<i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          {/* 選單 */}
          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link d_flex capitalize"
              }
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user acount</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            {/* 切換成手機板直立式選單按鈕 */}
            <button
              className="toggle"
              onClick={() => {
                setMobileMenu(!MobileMenu);
              }}
            >
              {MobileMenu ? (
                <i className="fa fa-times close home-bth"></i>
              ) : (
                <i className="fa fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
