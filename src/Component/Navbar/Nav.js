import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="Home"
          class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
        >
          <h1 class="m-0 text-success">JobEntry</h1>
        </a>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/Home" class="nav-item nav-link">
              Home
            </Link>
            <Link to="/About" class="nav-item nav-link">
              About
            </Link>

            {/* <Link to="/Contact" class="nav-item nav-link">
              Contact
            </Link> */}
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Login
              </a>
              <div class="dropdown-menu rounded-0 m-0">
                <Link to="/Mentorlogin" class="dropdown-item">
                  Mentor
                </Link>
                <Link to="/Employeerlogin" class="dropdown-item">
                  Employer
                </Link>
                <Link to="/Candidatelogin" class="dropdown-item">
                  Candidate
                </Link>
                {/* <a href="404.html" class="dropdown-item">404</a> */}
              </div>
            </div>
            <Link class="nav-item nav-link"></Link>
            <Link class="nav-item nav-link"></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
