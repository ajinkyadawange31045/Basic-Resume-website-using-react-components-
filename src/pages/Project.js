import React from "react";
import Header from "../components/Header";
import { Link } from 'react-router-dom';

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
                
                <img src="/assets/img/ub.png" alt="" />
                <p className="card-desc">1. Club Website (Utkrishta Bharath)</p>
                <p className="card-title btn btn-light">
                  

                  
                  <Link to="/projects/utkrishta-bharath" className="card-link" > Know More </Link> 
                  {/* <a href="/utkrishta-bharath" className="card-link" rel="noopener noreferrer noreferrer">Know More</a> */}
                  {/* <Link to="" className="card-link" > Know More </Link>  */}
{/*  */}
                  </p>
              </div>
              <div className="card">
                <img src="assets/img/shantipur.png" alt="" />
                <p className="card-desc">2. Accounts Management website for our PG (Shantipur)</p>
                <p className="card-title btn btn-light">
                  

                  
                  <Link to="/projects/account-management-shantipur" className="card-link" > Know More </Link> 
                  {/* <a href="/account-management-shantipur" className="card-link" rel="noreferrer">Know More</a> */}
                  
                  </p>
              </div>
              <div className="card">
                <img src="assets/img/studyspace.png" alt="" />
                <p className="card-desc ">3. Study Space (Notes and questions paper providing website)</p>
                <p className="card-title btn btn-light">
                  

                  
                  <Link to="/projects/study-space" className="card-link" > Know More </Link> 
                  {/* <a href="/study-space" className="card-link" rel="noreferrer">Know More</a> */}
                  
                  </p>
              </div>
              <div className="card">
                <img src="assets/img/miniblog.png" alt="" />
                <p className="card-desc ">4. Blog using django (my first database  (CRUD operation)</p>
                <p className="card-title btn btn-light">
                  

                  
                  <Link to="/projects/mini-blog" className="card-link" > Know More </Link> 
                  {/* <a href="/mini-blog" className="card-link" rel="noreferrer">Know More</a> */}
                  
                  </p>
              </div>
              <div className="card">
                <img src="assets/img/resumewebsite-django.png" alt="" />
                <p className="card-desc ">5. My first Resume website using Django</p>
                <p className="card-title btn btn-light">
                  

                  
                  <Link to="/projects/resume-django-static" className="card-link" > Know More </Link> 
                  {/* <a href="/utkrishta-bharath" className="card-link" rel="noreferrer">Know More</a> */}
                  
                  </p>
              </div>
              <div className="card">
                <img src="assets/img/portfolio-website.png" alt="" />
                <p className="card-desc ">The website on which we are (my first Portfolio website using React)</p>
                <p className="card-title btn btn-light">
                  

                  
                  <Link to="/projects/resume-react" className="card-link" > Know More </Link> 
                  {/* <a href="/utkrishta-bharath" className="card-link" rel="noreferrer">Know More</a> */}
                  
                  </p>
              </div>
              
          </div>

        
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
