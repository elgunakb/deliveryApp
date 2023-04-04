import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import products from "./reducers/products";

const store = createStore(products,composeWithDevTools());

export default store;