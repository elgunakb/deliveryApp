import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { Context } from "../../../context";
import Line from "../../../assets/images/Vector 1788.svg";
import Fav from "../../../assets/images/heart (2).png";
import Fav2 from "../../../assets/images/heart (1).png";
import { FaStar } from "react-icons/fa";
import { PRODUCT_TYPES } from "../../../utils/constants";

const sizes = ["small", "medium", "large"];

const CardItem = ({ item }) => {
  const {
    list,
    setList,
    favorites,
    setFavorites,
    notificationProps,
    setNotificationProps,
  } = useContext(Context);
  // const [showToast, setShowToast] = useState(false);
  const [favs, setFavs] = useState(Fav2);

  const addToFav = (e) => {
    if (favs === Fav) {
      setFavs(Fav2);
      setNotificationProps({
        ...notificationProps,
        visible: true,
        type: "error",
        message: `${item.title} is removed from favourites`,
      });
    } else {
      setFavs(Fav);
      setNotificationProps({
        ...notificationProps,
        visible: true,
        type: "success",
        message: ` ${item.title} added to favorite `,
      });
    }

    e.stopPropagation();

    const existingItem = favorites.find((listItem) => listItem.id === item.id);

    if (existingItem) {
      setFavorites(
        favorites.map((listItem) =>
          listItem.id === item.id ? { ...listItem } : listItem
        )
      );
    } else {
      setFavorites([...favorites, { ...item }]);
    }
    setModal(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();

    const existingItem = list.find((listItem) => listItem.id === item.id);

    if (existingItem) {
      setList(
        list.map((listItem) =>
          listItem.id === item.id
            ? { ...listItem, quantity: listItem.quantity + quantity }
            : listItem
        )
      );
    } else {
      setList([...list, { ...item, quantity: quantity }]);
      setNotificationProps({
        ...notificationProps,
        visible: true,
        type: "success",
        message: ` ${item.title} added to favorite `,
      });
    }
    setModal(false);
  };
  setTimeout(() => {
    setNotificationProps({
      ...notificationProps,
      visible: false,
    });
  }, 4000);
  const addToCart = () => {
    const existingItem = list.find((listItem) => listItem.id === item.id);

    if (existingItem) {
      setList(
        list.map((listItem) =>
          listItem.id === item.id
            ? { ...listItem, quantity: listItem.quantity + quantity }
            : listItem
        )
      );
    } else {
      setList([...list, { ...item, quantity }]);
    }
  };

  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(
    list.find((listItem) => listItem.id === item.id)?.quantity || 1
  );
  const [clicked, setClicked] = useState({
    small: false,
    medium: false,
    large: false,
  });
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClickValue = (e, value) => {
    setCurrentValue(value);
    e.stopPropagation();
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleClicked = (size) => {
    setClicked({ Small: false, Medium: false, Large: false, [size]: true });
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = item.price * quantity;

  const toggleModal = () => {
    setModal(!modal);
  };

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!refOne?.current?.contains(e.target)) {
      setModal(false);
    }
  };

  // Raiting

  const colors = {
    orange: "F1A606",
    grey: "a9a9a9",
  };

  const stars = Array(5).fill(0);
  return (
    <>
      <div onClick={toggleModal} className="card" key={item.id}>
        <div className="product__item">
          <img src={item.image01} alt="food_image" />
        </div>
        <div className="product__content">
          <div className="content__top">
            <div className="title_">
              <h5>{item.title}</h5>
            </div>
            <img
              title="Favorite"
              className="favorite__icon"
              src={favs}
              alt="fav__icon"
              onClick={addToFav}
            />
          </div>

          <div className="content__mid">
            <div>
              <p className="price__text">Price</p>
              <p className="product__price">{item.price} ₼</p>
            </div>
            <div className="rating__style">
              {/* <BasicRating /> */}
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    style={{ marginTop: "23px", marginRight: "3px" }}
                    size={20}
                    color={
                      (hoverValue || currentValue) > index
                        ? colors.orange
                        : colors.grey
                    }
                    onClick={(e) => handleClickValue(e, index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </div>
          </div>
          <div className="cart__icon">
            <button className="buy__now" onClick={handleClick}>
              Buy now
            </button>
          </div>
        </div>
      </div>
      {/* {showToast ? <Toast /> : ""} */}
      {/* M O D A L  */}
      {modal ? (
        <div className="food__details">
          <div ref={refOne} className="fd__bg">
            <div className="food__image">
              <img
                className="food__image"
                src={item.image01}
                alt="food_image"
              />
            </div>
            <div className="food__infos">
              <div className="food__info">
                <div className="food__title">
                  <h5>{item.title}</h5>
                </div>
                <div className="food__desc">
                  <p>{item.desc}</p>
                </div>
                <div className="food__counter_price">
                  <div className="food__counter">
                    <button
                      disabled={quantity === 1}
                      onClick={handleDecreaseQuantity}
                      // className={classNames({'yes':quantity === 1})}
                      style={{
                        backgroundColor:
                          quantity === 1 ? "#adadad" : "rgb(255, 50, 50)",
                        cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                      }}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button onClick={handleIncreaseQuantity}>+</button>
                  </div>
                  <div className="food__price">{totalPrice} ₼</div>
                  <div className="add__to__cart">
                    <button onClick={addToCart}>Add to cart</button>
                  </div>
                </div>
                <img src={Line} alt="line" />
                {item.category === PRODUCT_TYPES.pizza && (
                  <>
                    <div className="select__size">
                      <p>SELECT SIZE</p>
                    </div>
                    <div className="sizes">
                      {sizes.map((size) => (
                        <button
                          className={clicked[size] ? "active" : ""}
                          onClick={() => handleClicked(size)}
                          key={size}
                          disabled={clicked[size]}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* <div style={{ marginTop: "20px" }} className="select__size">
                  <p>SELECT SLICE</p>
                </div>
                <div style={{ marginTop: "20px" }} className="sizes">
                  <button
                    className={clicked ? "active" : ""}
                    onClick={handleClicked}
                  >
                    Regular cut
                  </button>
                  <button
                    className={clicked ? "active" : ""}
                    onClick={handleClicked}
                  >
                    Double cut
                  </button>
                  <button
                    className={clicked ? "active" : ""}
                    onClick={handleClicked}
                  >
                    Square cut
                  </button>
                </div> */}
                <div style={{ marginTop: "20px" }} className="select__size">
                  <p>EXTRA ADDITIVES</p>
                  <textarea placeholder="ex: Add extra spice"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span onClick={() => setModal(false)}>X</span>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
    </>
  );
};

export default CardItem;
//
