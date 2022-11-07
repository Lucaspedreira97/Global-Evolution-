import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { AboutUs } from "./pages/about us";
import { HomePage } from "./pages/home";

export const Approuter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};
