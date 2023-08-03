import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
// import { ContactPage, MediaPage, RecentWorkPage } from "./screen";
const Home = lazy(() => import('./screen/home/Home'))
const AboutPage = lazy(() => import('./screen/about-page/AboutPage'))
const ContactPage = lazy(() => import('./screen/contact/ContactPage'))
const MediaPage = lazy(() => import('./screen/media/MediaPage'))
const RecentWorkPage = lazy(() => import('./screen/recent-work/RecentWorkPage'))


const App = () => {
  return (
    <>
        <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/recent-work" element={<RecentWorkPage />} />
        <Route path="/recent-work" element={<RecentWorkPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
        </Suspense>
    </>
  );
};

export default App;
