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
import ResumeReact from "./projects/resume-react-website";
import ResumeDjango from "./projects/resume-django";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about-me" element={<Interest />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/utkrishta-bharath" element={<UbWebsiteProject  />} />
          <Route path="/projects/account-management-shantipur" element={<Accountsproject />} />
          <Route path="/projects/study-space" element={<StudySpace />} />
          <Route path="/projects/mini-blog" element={<Miniblog />} />
          <Route path="/projects/resume-react" element={<ResumeReact/>}></Route>
          <Route path="/projects/resume-django-static" element={<ResumeDjango/>}></Route>
          {/* <Route path" */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
