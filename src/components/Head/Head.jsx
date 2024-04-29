import React from "react";
import "./Head.scss";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <span>+88012 3457 7894</span>
            <i class="fa-regular fa-envelope"></i>
            <span>example@gmail.com</span>
          </div>
          <div className="right row">
            <span>Theme FAQ's</span>
            <span>Need Helps</span>
            <span>🏳️‍⚧️</span>
            <span>EN</span>
            <span>🏳️‍⚧️</span>
            <span>USD</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
