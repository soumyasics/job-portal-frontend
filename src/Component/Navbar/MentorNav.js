import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function MentorNav() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("mentlogid") == null) {
      Navigate("/Home");
    }
  });

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
            <Link to="/MentorHome" class="nav-item nav-link ">
              Home
            </Link>
         

            <Link to="/MentorViewProf" class="nav-item nav-link">
              Profile
            </Link>
            <Link to="/MySubs" class="nav-item nav-link">
              My Subscribers
            </Link>
            
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Lecture
              </a>
              <div class="dropdown-menu">
                <Link to="/AddLect" class="dropdown-item">
                  Add Lecture
                </Link>
                <Link to="/ViewLect" class="dropdown-item">
                  View Lecture
                </Link>
                {/* <Link to='/Customer' class="dropdown-item">Customer</Link>
                             <a href="404.html" class="dropdown-item">404</a>  */}
              </div>
            </div>

            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Exam
              </a>
              <div class="dropdown-menu">
                <Link to="/AddExam" class="dropdown-item">
                  Add Exam
                </Link>
                <Link to="/ViewExam" class="dropdown-item">
                  View Exam
                </Link>
                {/* <Link to='/Customer' class="dropdown-item">Customer</Link>
                             <a href="404.html" class="dropdown-item">404</a>  */}
              </div>
            </div>
          </div>
        </div>
        <Link
          onClick={() => {
            localStorage.clear();
            window.location.reload(false);
          }}
          class="btn btn-success  rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >
          Logout
        </Link>
      </nav>
    </div>
  );
}

export default MentorNav;
