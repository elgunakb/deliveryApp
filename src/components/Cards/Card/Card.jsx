import React, { useContext } from "react";
import { Context } from "../../../context";

const CardItem = ({ item }) => {
  const { list, setList } = useContext(Context);

  const handleClick = (item) => {
    const existingItem = list.find((listItem) => listItem.id === item.id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        alert(`Item ${item.title} has already been added to the cart`);
      } else {
        setList(
          list.map((listItem) =>
            listItem.id === item.id
              ? { ...listItem, quantity: listItem.quantity + 1 }
              : listItem
          )
        );
      }
    } else {
      setList([...list, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="card" key={item.id}>
      <div className="product__item">
        <img src={item.image01} alt="" />
      </div>
      <div className="product__content">
        <div className="title_">
          <h5>{item.title}</h5>
        </div>

        <p className="price__text">Price</p>
        <p className="product__price">{item.price} ₼</p>
        <div className="cart__icon">
          <button onClick={() => handleClick(item)}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
