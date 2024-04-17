import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="Home" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 class="m-0 text-success">JobEntry</h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to='/Home' class="nav-item nav-link active">Home</Link>
                    <Link to='/AdminAbout' class="nav-item nav-link">About</Link>
                    <Link to='/AdminLogin' class="nav-item nav-link">Login</Link>
                    
                </div>
                <a href="" class="btn btn-success  rounded-0 py-4 px-lg-5 d-none d-lg-block">Post A Job<i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
    </div>
  )
}

export default AdminNav