import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteName from "./services/routename";
import Layout from "./layout/layout";
import AboutMe from "./pages/aboutme/aboutme";
import Experience from "./pages/experience/experience";
import Project from "./pages/project/project";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={RouteName.aboutMe} element={<AboutMe />} />
          <Route path={RouteName.experience} element={<Experience />} />
          <Route path={RouteName.project} element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
