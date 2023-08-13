import React from "react";
import Header from "../components/Header";

const UbWebsiteProject = () => {
  return (
    <>
    <div className="container-fluid p-0">
      <Header />
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">Utkrishta Bharath Website</h2>
          
          <ul className="fa-ul mb-0">
            <li>
              Developed and hosted on a container provided by college using LXD (Nginx and Gunicorn) for our club, Utkrishta Bharath.
            </li>
            <li>
              For front-end designing, Bootstrap is used.
            </li>
            <li>
              Backend built using Django.
            </li>
            <li>
              Functionalities it has:
              <ul>
                <li>Blogs are divided category-wise, and each blog displays the author's name and image.</li>
                <li>Gallery (with a separate page to view full photos).</li>
                <li>Forum (where people can like the discussion forum, view each other's profile, and views will be counted on every refresh for each discussion panel).</li>
                <li>Signup and Login functionalities.</li>
                <li>Users can edit their profile, including the profile image (It will just replace the photo in the backend, and the database will not fill with unnecessary photos that are deleted).</li>
                <li>There will be a search bar where people can search for blogs (they will be recommended blogs according to tags of the blog, same tags will be used as meta tags for SEO purpose).</li>
                <li>Many other features (e.g., all articles will be visible on one page, video page (where YouTube embed videos are displayed), forum will be visible even without signing in with URL indirect-forum, etc.).</li>
              </ul>
            </li>
          </ul>
          

          <h4 className="mt-5">Checkout</h4>
          <a
            className="text-light btn btn-dark m-2"
            href="https://github.com/ajinkyadawange31045/UB-website-github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-light btn btn-dark m-2"
            href="https://ub.nitk.ac.in/"
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

export default UbWebsiteProject;
