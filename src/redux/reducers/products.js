import { ADD_PRODUCT_TO_CART, UPDATE_PRODUCT_QUANTITY } from "../types";

const initialState = {
  list: [],
};

const products = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        list: [...state.list, payload],
      };
    }
    case UPDATE_PRODUCT_QUANTITY: {
      return {
        ...state,
        list: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
