import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Interest from "./pages/Interest";
import Skills from "./pages/Skills";
import UbWebsiteProject  from "./projects/Ub_website";
import Accountsproject from "./projects/Shantipur";
import StudySpace from "./projects/StudySpace";
import Miniblog from "./projects/Miniblog";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interest />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/utkrishta-bharath" element={<UbWebsiteProject  />} />
          <Route path="/project/account-management-shantipur" element={<Accountsproject />} />
          <Route path="/project/study-space" element={<StudySpace />} />
          <Route path="/project/mini-blog" element={<Miniblog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
