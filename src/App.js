import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage, ContactPage, Home, MediaPage, RecentWorkPage } from "./screen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/recent-work" element={<RecentWorkPage />} />
        <Route path="/recent-work" element={<RecentWorkPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
