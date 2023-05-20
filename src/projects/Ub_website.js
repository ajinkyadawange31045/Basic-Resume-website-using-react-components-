import React from "react";
import Header from "../components/Header";

const UbWebsiteProject  = () => {
  return (
    <div>
      <div className="container-fluid p-0">
      <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Utkrishta Bharath Website</h2>
            <ul className="fa-ul mb-0">
              <li>
                
                  Developed and hosted on container provided by college using lxd(nginx and gunicorn) for our club, Utkrishta Bharath
              </li>
              <li>
                  For front-end designing, bootstrap is used
              </li>
              <li>
                
                Backend built using Django
              </li>
              <li>
                
                Functionalities it has
                  <ul>
                    <li>
                      
                      Blogs are divided category wise and every blog have their authors name and Image displayed
                    </li>
                    <li>
                      
                        Gallery (with seperate page to view full photo)
                    </li>
                    <li>
                      
                        Forum (where people can like the discussion forum, they can view each others profile and views will be counted on every refresh for the each disscussion panel)
                    </li>
                    <li>
                      
                      Signup and Login functionalities
                    </li>
                    <li>
                      
                        user can edit their profile, including profile image(It will just replace the photo in the backend and our database will not fill with unnecessary photos which are deleted)
                    </li>
                    <li>
                      
                        Their will be search bar, where people can search for blogs (they will be recommended blogs according to tags of the blog, same tags will be used as meta tags for SEO purpose)
                    </li>
                    <li>
                      
                        Many other features (like all articles will can be visible on one page, video page (where we display the youtube embed videos), forum will be visible even without signedin with url indirect-forum,etc )
                    </li>
                    
                  </ul>
              </li>
              
            </ul> 

            <div>
            
          <h4 className="mt-5">Checkout </h4>
              <a className="text-light btn btn-dark m-2 " href="https://github.com/ajinkyadawange31045/UB-website-github" target="_blank" rel="noreferrer">Github</a>
              <a className="text-light btn btn-dark m-2 " href="https://ub.nitk.ac.in/" target="_blank" rel="noreferrer">Visit</a>
       
          </div>   
            </div>
          
           </section>
      </div>
    </div>
  );
};

export default UbWebsiteProject ;
