import React from "react";
import Header from "../components/Header";

const Interest = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="interests">
          <div className="row">
            <div className="col-lg-6 order-lg-2 d-flex justify-content-center align-items-center">
              <img
                src="assets/img/profile.jpg"
                alt="Ajinkya Dawange"
                className="img-fluid rounded-circle"
                style={{ maxWidth: "300px", width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="resume-section-content" style={{ padding: "30px" }}>
                <h2 className="mb-4">About Me</h2>
                <p>
                  


Apart from being a web developer, I enjoy most of my time being outdoors. 
I love traveling and reading books. In the past 3 years, 
I have been to almost all the spiritual places in India,
which includes Vrindavan Mathura (in the first year), Srirangam (in the second year), Mayapur (in the second year),
Jagannath Puri (in third year), Kanchipuram (in third year),
Tirupati (in third year), Udupi-Pajaka (in third year), etc.



                 </p>
                <p className="mb-0">
                  
When forced indoors, I watch a number of sci-fi and historical movies. I am an aspiring student, and I spend a
large amount of my free time exploring the latest technological advancements in the web development world.
With my present skills, I try to build the product that will help me and the majority of the people out there.

                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Interest;
