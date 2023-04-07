import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">sharad pawar public school</h3>
                <div className="subheading mb-3">Schooling -Till class 10th</div>
                <p>Percentage: 88%</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2011-2018</span>
              </div>
            </div>
            
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">St. Lawrence Highschool</h3>
                <div className="subheading mb-3">Class 11th and 12th</div>
                <p>Percentage: 86.86%</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2018-2020</span>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">National Institute of Technology Surathkal, Karnataka</h3>
                <div className="subheading mb-3">Engineering in ECE dept.</div>
                <p>GPA: 7.56</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2020-pursuing</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

    
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Education;
