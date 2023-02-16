import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Food from "../pages/Food";
import React, { memo } from "react";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Favorites from "../pages/Favorite";
import FoodDetails from "../pages/FoodDetails";
import { Route, Routes, Navigate } from "react-router-dom";

const Router = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/favaorites" element={<Favorites />} />
      <Route path="/food" element={<Food />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/food/:id" element={<FoodDetails />} />
    </Routes>
  );
});

export default Router;
