import React from "react";
import Routes from "../../routes/Router";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
