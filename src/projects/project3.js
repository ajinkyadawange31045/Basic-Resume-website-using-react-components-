import React from "react";
import Header from "../components/Header";

const Project1 = () => {
  return (
    <>
      <div className="container-fluid p-0">
      <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Utrishta Bharath Website</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                  Developed and hosted website for the club named, Utkrishta Bharath
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                  For front-end designing, bootstrap is used
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Backend built using Django
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Functionalities it has
                  <ul>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-trophy text-warning"></i>
                      </span>
                      Blogs are divided category wise and every blog have their authors name and Image displayed
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-trophy text-warning"></i>
                      </span>
                        Gallery (with seperate page to view full photo)
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-trophy text-warning"></i>
                      </span>
                        Forum (where people can like the discussion forum, they can view each others profile and views will be counted on every refresh for the each disscussion panel)
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-trophy text-warning"></i>
                      </span>
                      Signup and Login functionalities
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-trophy text-warning"></i>
                      </span>
                        user can edit their profile, including profile image(It will just replace the photo in the backend and our database will not fill with unnecessary photos which are deleted)
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-trophy text-warning"></i>
                      </span>
                        Their will be search bar, where people can search for blogs (they will be recommended blogs according to tags of the blog, same tags will be used as meta tags for SEO purpose)
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-trophy text-warning"></i>
                      </span>
                        Many other features (like all articles will can be visible on one page, video page (where we display the youtube embed videos), forum will be visible even without signedin with url indirect-forum,etc )
                    </li>
                    
                  </ul>
              </li>
              
            </ul> 

            <div>
            
          <h4 className="mt-5">Checkout </h4>
              <a className="text-light btn btn-dark m-2 " href="/github.com" target="_blank">Github</a>
              <a className="text-light btn btn-dark m-2 " href="/github.com" target="_blank">Visit</a>
       
          </div>   
            </div>
          
           </section>
      </div>
    </>
  );
};

export default Project1;
