import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/main.scss";
import ScrollToTop from "./components/Layout/ScrollToTop/ScrollToTop";
<<<<<<< HEAD
=======
import { Provider } from "react-redux";
import store from "./redux/store";
>>>>>>> 02919dd06b01f293e7e71971dc428ab5def615ee

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
      <ScrollToTop />
      <App />
    </Router>
=======
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
>>>>>>> 02919dd06b01f293e7e71971dc428ab5def615ee
  </React.StrictMode>
);
