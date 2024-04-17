import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpNav() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("emplogid") == null) {
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
            <Link to="/EmpHome" class="nav-item nav-link ">
              Home
            </Link>
            <Link to="/EmpAbout" class="nav-item nav-link">
              About
            </Link>
            <Link to="/ViewAppEmp" class="nav-item nav-link">
              Application
            </Link>
            <Link to="/ViewInterview" class="nav-item nav-link">
              Interviews
            </Link>
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Jobs
              </a>
              <div class="dropdown-menu">
                <Link to="/AddJob" class="dropdown-item">
                  Add Job
                </Link>
                <Link to="/ViewJob" class="dropdown-item">
                  View Job
                </Link>
                {/* <Link to='/Customer' class="dropdown-item">Customer</Link>
                             <a href="404.html" class="dropdown-item">404</a>  */}
              </div>
            </div>
            <Link to="/EmpProfView" class="nav-item nav-link">
              Profile
            </Link>

            
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

export default EmpNav;
