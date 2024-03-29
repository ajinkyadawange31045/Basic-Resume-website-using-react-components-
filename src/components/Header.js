import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="sideNav"
      >
        <Link className="navbar-brand js-scroll-trigger" to="/">
          <span className="d-block d-lg-none">Ajinkya Dawange</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="assets/img/profile.jpg"
              alt=""
            />
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/experience">
                Experience
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/education">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/about-me">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
