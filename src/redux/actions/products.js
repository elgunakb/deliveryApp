import { ADD_PRODUCT_TO_CART,UPDATE_PRODUCT_QUANTITY } from "../types";

export const addProductToCart = (payload) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload,
  };
};

export const updateProductQuantity = (payload) => {
    return {
      type: UPDATE_PRODUCT_QUANTITY,
      payload,
    };
  };
  