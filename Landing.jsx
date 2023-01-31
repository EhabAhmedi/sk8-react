import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import empty from "../assets/empty.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>SK8 HAVEN: Canada's Premier Skate Shop</h1>
            <h2>
              Find your Board at <span className="purple">SK8 HAVEN</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse boards</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={empty} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
