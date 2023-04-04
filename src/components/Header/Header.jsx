import React, { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import BurgerMenu from "../BMenu/BurgerM";
import CartIcon from "../../assets/images/cart.svg";
import LogoMain from "../../assets/images/bb__logo.svg";
import FavIcon from "../../assets/images/favorites.svg";

const Header = memo(() => {
  const context = useContext(Context);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const { list } = useContext(Context);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  
  const total = list.reduce(
    (plus, item) => plus + item.price * item.quantity,
    0
  );

  return (
    <header className="header">
      <nav className="container">
        <div className="nav">
          <div className="baron__bros__logo">
            <Link to="/home">
              <img className="phone__logo" src={LogoMain} alt="logo__main" />
            </Link>
          </div>
          <div className="nav__links">
            <ul>
              <li>
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
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {isDropdownOpen && (
                    <div className="cart-dropdown">
                      <p className="my__bag">My bag</p>
                      <div className="dropdown__styles">
                        <p>Prodcut</p>
                        <p>Quantity</p>
                        <p>Price</p>
                      </div>
                      <div>
                        {list.map((item) => (
                          <div className="carts" key={item.id}>
                            <div className="dropdown__styles">
                              <img
                                style={{ width: "50px" }}
                                src={item.image01}
                                alt="line"
                              />
                              <p className="dropdown__p">{item.quantity}</p>
                              <p className="dropdown__p">{item.price}</p>
                            </div>
                            <div className="dropdown__styles"></div>
                          </div>
                        ))}
                        <div className="dropdown__styles">
                          <p>Total</p>
                          <p>{total}</p>
                        </div>
                        <button className="dropdown__link">
                          <Link to="/cart">Go to cart</Link>
                        </button>
                      </div>
                    </div>
                  )}
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
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
              >
                {/* {isDropdownOpen && (
                  <div className="cart-dropdown">
                    <div>
                      {list.map((item) => (
                        <div className="carts" key={item.id}>
                          <div>{item.title}</div>
                          <img
                            style={{ width: "50px" }}
                            src={item.image01}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}
                <Link to="/cart">
                  <img src={CartIcon} alt="cart__icon" />
                  <span className="span">{context.list.length}</span>
                </Link>
              </li>
            </span>
            <li className="burger__menu">
              <span>
                <BurgerMenu />
              </span>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
});

export default Header;
