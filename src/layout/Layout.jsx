import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
