import { Context } from "../context";
import React, { useContext, useEffect } from "react";
import "../style/pages/Favorite.scss";

const Favorite = () => {
  const { setFavorites, favorites } = useContext(Context);

  useEffect(() => {
    // console.log(favorites);
  }, [favorites]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <>
        <p className="wishlist">Wishlist</p>
        <div className="tab__frame">
          <p>Product</p>
          <p>Name</p>
          <p>Price</p>
          <p></p>
        </div>
        {favorites.map((item, key) => (
          <div className="favorite__cards" key={key}>
            <div className="favorite__card">
              <img src={item.image01} alt="food__image" />
              <p className="favorite__title">{item.title}</p>
              <p className="favorite__price">{item.price} ₼</p>
              <p className="x" onClick={() => removeFavorite(item.id)}>
                X
              </p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Favorite;
