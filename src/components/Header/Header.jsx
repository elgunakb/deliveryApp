import { Context } from "../../context";
import { Link } from "react-router-dom";
import React, { memo, useContext } from "react";
import CartIcon from "../../assets/images/cart.svg";
import LogoMain from "../../assets/images/bb__logo.svg";
import FavIcon from "../../assets/images/favorites.svg";
import BurgerMenu from "../BMenu/BurgerM";


const Header = memo(() => {
  const context = useContext(Context);

  return (
    <div className="header">
      <nav className="container">
        <div className="nav">
          <div className="nav__left">
            <img className="phone__logo" src={LogoMain} alt="logo__main" />
          </div>
          <div className="nav__mid">
            <ul>
              <li>
                {/* <BurgerMenu/> */}
                <Link to="/home">Home</Link>
              </li>
              <li>
                <a href="#tab">Food</a>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <span>
                <li
                  className="cart__icon"
                  style={{ marginTop: "7px", fontWeight: "bolder" }}
                >
                  <Link to="/cart">
                    <img src={CartIcon} alt="cart__icon" />
                    <span className="span">{context.list.length}</span>
                  </Link>
                </li>
              </span>
              <li>
                <Link to="/favorite">
                  <img src={FavIcon} alt="user__icon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="right__nav">
            <span>
              <li
                className="cart__icon"
                style={{ marginTop: "7px", fontWeight: "bolder" }}
              >
                <Link to="/cart">
                  <img src={CartIcon} alt="cart__icon" />
                  <span className="span">{context.list.length}</span>
                </Link>
              </li>
            </span>
            <li className="burger__menu">
              <button>
                {/* <img src={BurgerMenu} alt="" /> */}
                <BurgerMenu/>
              </button>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
});

export default Header;
