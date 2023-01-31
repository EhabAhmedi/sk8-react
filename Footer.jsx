import React from "react";
import { Link } from "react-router-dom";
import skatelogo from "../assets/skatelogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={skatelogo} className="footer__logo--img" alt="" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/books" className="footer__link">
              Boards
            </Link>
            <Link to="/cart" className="footer__link">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2023 Sk8 Haven
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
