import React from "react";
import Header from "../components/Header";
// import { Link } from 'react-router-dom';
const ResumeReact = () => {
  return (
    <>
    <div className="container-fluid p-0">
      <Header />
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">Django static Resume Website</h2>
          
          <ul className="fa-ul mb-0">
            <li>
              Not hosted
            </li>
            <li>
              For front-end designing, Bootstrap is used.
            </li>
            <li>
                For Backend Django is used
            </li>
            <li>
                No Database, It's a static website
            </li>
            <li>
                My first resume website or first Django website
            </li>
        </ul>
        

          <h4 className="mt-5">Checkout</h4>
          <a
            className="text-light btn btn-dark m-2"
            href="https://github.com/ajinkyadawange31045/resumeproject"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {/* <a
            className="text-light btn btn-dark m-2"
            href="https://ajinkya31045.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a> */}
        </div>
      </section>
    </div>
    </>
  );
};

export default ResumeReact;
