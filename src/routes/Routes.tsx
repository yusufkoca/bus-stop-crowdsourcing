import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage/HomePage";
import BusStopsPage from "../pages/BusStopsPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="bus-stops" element={<BusStopsPage />}>
        <Route path=":id" element={null}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}
