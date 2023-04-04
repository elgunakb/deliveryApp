import Home from "../pages/Home";
import Cart from "../pages/Cart";
import React, { memo } from "react";
import Contact from "../pages/Contact";
import Favorite from "../pages/Favorite";
import { Route, Routes, Navigate } from "react-router-dom";

const Router = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      {/* <Route path="/home#food" element={< Home />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/food/:id" element={<FoodDetails />} /> */}
    </Routes>
  );
});

export default Router;
