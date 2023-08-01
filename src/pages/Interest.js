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
                  Apart from being a web developer, I enjoy most of my time being
                  outdoors. In the winter, I am an avid skier and novice ice
                  climber. During the warmer months here in Colorado, I enjoy
                  mountain biking, free climbing, and kayaking.
                </p>
                <p className="mb-0">
                  When forced indoors, I follow a number of sci-fi and fantasy genre
                  movies and television shows, I am an aspiring chef, and I spend a
                  large amount of my free time exploring the latest technology
                  advancements in the front-end web development world.
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
