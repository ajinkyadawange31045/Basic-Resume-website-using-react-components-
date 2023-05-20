import React from "react";
import Header from "../components/Header";

const Project = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Projects</h2>

          <div className="flexard">
              <div className="card">
                <img src="assets/img/profile.jpg" alt="" />
                <p className="card-desc">1. Club Website (Utkrishta Bharath)</p>
                <p className="card-title btn btn-light"><a href="project/utkrishta-bharath" className="card-link" target="_blank" rel="noreferrer">Know More</a></p>
              </div>
              <div className="card">
                <img src="assets/img/profile.jpg" alt="" />
                <p className="card-desc">2. Accounts Management website for our PG (Shantipur)</p>
                <p className="card-title btn btn-light"><a href="project/account-management-shantipur" className="card-link" target="_blank" rel="noreferrer">Know More</a></p>
              </div>
              <div className="card">
                <img src="assets/img/profile.jpg" alt="" />
                <p className="card-desc ">3. Study Space (Notes and questions paper providing website)</p>
                <p className="card-title btn btn-light"><a href="project/utkrishta-bharath" className="card-link" target="_blank" rel="noreferrer">Know More</a></p>
              </div>
              <div className="card">
                <img src="assets/img/profile.jpg" alt="" />
                <p className="card-desc ">4. Blog using django (my first database project) (CRUD operation)</p>
                <p className="card-title btn btn-light"><a href="project/utkrishta-bharath" className="card-link" target="_blank" rel="noreferrer">Know More</a></p>
              </div>
              <div className="card">
                <img src="assets/img/profile.jpg" alt="" />
                <p className="card-desc ">5. My first portfolio website using Django</p>
                <p className="card-title btn btn-light"><a href="project/utkrishta-bharath" className="card-link" target="_blank" rel="noreferrer">Know More</a></p>
              </div>
              <div className="card">
                <img src="assets/img/profile.jpg" alt="" />
                <p className="card-desc ">The website on which we are (my first Portfolio website using React)</p>
                <p className="card-title btn btn-light"><a href="project/utkrishta-bharath" className="card-link" target="_blank" rel="noreferrer">Know More</a></p>
              </div>
              <div className="card">
                <img src="assets/img/profile.jpg" alt="" />
                <p className="card-desc ">Machine learning project - Internshala</p>
                <p className="card-title btn btn-light"><a href="project/utkrishta-bharath" className="card-link" target="_blank" rel="noreferrer">Know More</a></p>
              </div>
          </div>

            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Club Website (Utkrishta Bharath)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Accounts Management website for our PG (Shantipur)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                {/* 1<sup>st</sup> */}
                Blog using django (my first database project) (CRUD operation)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                {/* 1<sup>st</sup> */}
                My first portfolio website using Django
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                {/* 2<sup>nd</sup> */}
                The website on which we are (my first Portfolio website using React)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                {/* 1<sup>st</sup> */}
                Machine learning project - Internshala
              </li>
              {/* <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
