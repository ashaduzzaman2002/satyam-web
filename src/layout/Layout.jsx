import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title} - Satyam</title>
      </Helmet>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
