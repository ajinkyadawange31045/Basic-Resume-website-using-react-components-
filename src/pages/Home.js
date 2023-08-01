import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Ajinkya&nbsp;
              <span className="text-primary">Dawange</span>
            </h1>
            <div className="subheading mb-5">
              Nashik, Maharashtra, India &nbsp; &nbsp;
              <a className="text-lowercase" href="mailto:ajinkyadawange31045ard@gmail.com">ajinkyadawange31045ard@gmail.com</a>
            </div>
            <p className="lead mb-5">
              I am Interested to learn New Technologies and apply them atleast in small aspects of my life.
              In short I'm a Tech Enthusiast driven by Curiosity and Continuous Learning, with a strong Teamwork Spirit.

            </p>
            <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/in/ajinkya-dawange-18a68826b/?originalSubdomain=in">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="https://github.com/ajinkyadawange31045">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" href="../assets/pdf/resume.pdf" download="myFile"> 
              <i className="fa-solid fa-file fa-bounce"></i>
             </a>
            </div>
            
          </div>
          
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Home;
