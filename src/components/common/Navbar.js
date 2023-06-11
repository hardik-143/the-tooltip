import React from "react";
import { Link } from "react-router-dom";
import "../../style/navbar.scss"
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="inner">
          <div className="left"></div>
          <div className="right">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
