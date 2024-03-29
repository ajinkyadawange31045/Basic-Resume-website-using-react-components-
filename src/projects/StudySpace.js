import React from "react";
import Header from "../components/Header";

const StudySpace = () => {
  return (
    <>
      <div className="container-fluid p-0">
      <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Study Space</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  
                </span>
                  Study space is the website which provides previous year question paper and lecture notes of topper.
              </li>
              <li>
                <span className="fa-li">
                  
                </span>
                  For front-end designing, bootstrap is used
              </li>
              <li>
                <span className="fa-li">
                  
                </span>
                Backend built using Django
              </li>
              <li>
                <span className="fa-li">
                  
                </span>
                Functionalities it has
                  <ul>
                    <li>
                      <span className="fa-li">
                        
                      </span>
                      Urls are slug field as well as integers
                    </li>
                    <li>
                      <span className="fa-li">
                        
                      </span>
                        There are many subcategories
                    </li>
                    <li>
                      <span className="fa-li">
                        
                      </span>
                        At the end every topic can be linked to some pdf link uploaded on Gdrive
                    </li>
                    {/* <li>
                      <span className="fa-li">
                        
                      </span>
                      Signup and Login functionalities
                    </li>
                    <li>
                      <span className="fa-li">
                        
                      </span>
                        user can edit their profile, including profile image(It will just replace the photo in the backend and our database will not fill with unnecessary photos which are deleted)
                    </li>
                    <li>
                      <span className="fa-li">
                        
                      </span>
                        Their will be search bar, where people can search for blogs (they will be recommended blogs according to tags of the blog, same tags will be used as meta tags for SEO purpose)
                    </li>
                    <li>
                      <span className="fa-li">
                        
                      </span>
                        Many other features (like all articles will can be visible on one page, video page (where we display the youtube embed videos), forum will be visible even without signedin with url indirect-forum,etc )
                    </li> */}
                    
                  </ul>
              </li>
              
            </ul> 

            <div>
            
          <h4 className="mt-5">Checkout </h4>
              <a className="text-light btn btn-dark m-2 " href="https://github.com/ajinkyadawange31045/study_space" target="_blank" rel="noreferrer">Github</a>
              <a className="text-light btn btn-dark m-2 " href="https://studyspace.pythonanywhere.com" target="_blank" rel="noreferrer">
              <i class="fa-solid fa-arrow-up-right-from-square fa-bounce"></i>
              </a>
       
          </div>   
            </div>
          
           </section>
      </div>
    </>
  );
};

export default StudySpace;
