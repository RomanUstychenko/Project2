import scss from "./App.module.scss";
import Loader from "./components/imageSearch/loader/loader";
import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense,
  //  useState, useEffect, FC
   } from "react";

const Main = lazy(() => import("./pages/main/main"));
const ImageSearch = lazy(() => import("./pages/imageSearch/imageSearch"));

const App: React.FC = () => {
  return (
    <div className={scss.App}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/imageSearch" element={<ImageSearch />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
