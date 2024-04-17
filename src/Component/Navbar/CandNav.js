import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function CandNav() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("candlogid") == null) {
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
            <Link to="/CandHome" class="nav-item nav-link">
              Home
            </Link>
            <Link to="/CandAbout" class="nav-item nav-link">
              About
            </Link>

            <div class="nav-item dropdown">
              <Link
                to="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Jobs
              </Link>
              <div class="dropdown-menu rounded-0 m-0">
                <Link to="/ViewJobsCand" class="dropdown-item">
                  View All Jobs
                </Link>

                <Link to="/ViewApplication" class="dropdown-item">
                  All my Applications
                </Link>
                <Link to="/ViewIntervCand" class="dropdown-item">
                  Scheduled Interviews
                </Link>
              </div>
            </div>

            <div class="nav-item dropdown">
              <Link
                to="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Mentor
              </Link>
              <div class="dropdown-menu rounded-0 m-0">
                <Link to="/ViewAllMentors" class="dropdown-item">
                  View All Mentors
                </Link>

                <Link to="/MyMentors" class="dropdown-item">
                  My Mentors
                </Link>
                <Link to="/MyExams" class="dropdown-item">
                  Attended Exams
                </Link>
              </div>
            </div>

            <Link to="/CandViewProf" class="nav-item nav-link">
              Profile
            </Link>

            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Resume
              </a>
              <div class="dropdown-menu">
                <Link to="/BuildResume" class="dropdown-item">
                  Build Resume
                </Link>
                <Link to="/ViewBuildResume" class="dropdown-item">
                  View Resume
                </Link>
                <Link to="/EditResume" class="dropdown-item">
                  Edit Resume
                </Link>
              </div>
            </div>

            {/* <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Subscribe
              </a>
              <div class="dropdown-menu">
                <Link to="/ViewMentor" class="dropdown-item">
                  View Mentor
                </Link>
                <Link to="/Subscribe" class="dropdown-item">
                  Subscription
                </Link>
           
              </div>
            </div> */}
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

export default CandNav;
