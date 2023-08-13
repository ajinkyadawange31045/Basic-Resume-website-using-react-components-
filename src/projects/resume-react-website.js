import React from "react";
import Header from "../components/Header";

const ResumeReact = () => {
  return (
    <>
    <div className="container-fluid p-0">
      <Header />
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">React Resume Website</h2>
          
          <ul className="fa-ul mb-0">
            <li>
              Hosted on Netlify
            </li>
            <li>
              For front-end designing, Bootstrap is used.
            </li>
        </ul>
          

          <h4 className="mt-5">Checkout</h4>
          <a
            className="text-light btn btn-dark m-2"
            href="https://github.com/ajinkyadawange31045/Basic-Resume-website-using-react-components-"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-light btn btn-dark m-2"
            href="https://ajinkya31045.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-solid fa-arrow-up-right-from-square fa-bounce"></i>
          </a>
          <div className="video-container mt-4">
          {/* <iframe
                width="810"
                height="450"
                src="https://www.youtube.com/embed/qP8kir2GUgo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen ></iframe> */}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ResumeReact;
