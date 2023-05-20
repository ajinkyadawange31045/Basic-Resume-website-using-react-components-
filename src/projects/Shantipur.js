import React from "react";
import Header from "../components/Header";

const Accountsproject = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Shantipur Finance Management</h2>
            <ul className="fa-ul mb-0">
              <li>
                
                  Developed and hosted on pythonanywhere
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
                      
                      User can add entries
                    </li>
                    <li>
                      
                        User can only edit their entires and cannot delete them
                    </li>
                    <li>
                      
                        Admin can edit, delete and add entries on behalf of anyone in the frontend.
                    </li>
                    <li>
                      
                      It perfoms inner calculations to give amount remaining.
                    </li>
                    <li>
                      
                        On home page the entries are filtered according to the status weather resolved or not.
                    </li>
                    <li>
                      
                        On the dashborad, it will be filtered on the basis of id.
                    </li>
                    
                  </ul>
              </li>
              
            </ul> 

            <div>
            
          <h4 className="mt-5">Checkout </h4>
              <a className="text-light btn btn-dark m-2 " href="/github.com" target="_blank" rel="noreferrer">Github</a>
              <a className="text-light btn btn-dark m-2 " href="http://ajinkya31045.pythonanywhere.com/" target="_blank" rel="noreferrer">Visit</a>
       
          </div>   
            </div>
          
           </section>
      </div>
    </div>
  );
};

export default Accountsproject;
