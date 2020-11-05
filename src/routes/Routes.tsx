import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage/HomePage";
import BusStopsPage from "../pages/BusStopsPage";
import BusStopPage from "../pages/BusStopPage";

const MainRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="bus-stops">
        <Route path="/" element={<BusStopsPage />}></Route>
        <Route path=":id" element={<BusStopPage />}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default MainRoutes;
