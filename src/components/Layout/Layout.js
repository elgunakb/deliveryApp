import React from "react";
import Routes from "../../routes/Router";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
const Layout = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default Layout;
