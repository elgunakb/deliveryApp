import React, { createContext, useMemo } from "react";
import "./Cards.scss";
import CardItem from "./Card/Card";
import { products } from "../../assets/mock-data/data";

export const CardContext = createContext(null);

const Cards = ({ food }) => {
  const member = useMemo(() => {
    return food === "All"
      ? products
      : products.filter((el) => el.category === food);
  }, [food, products]);

  return (
    <div className="card__main">
      {member.map((item) => (
        <CardItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Cards;
