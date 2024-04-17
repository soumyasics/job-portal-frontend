import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });
  const changehandleSubmit = (a) => {
    setLogin({ ...login, [a.target.name]: a.target.value });
  };
  

  useEffect(()=>{
    if(localStorage.getItem('adminlog')!=null){
      navigate('/adminlogin/adminpage')
    }
   
  },[])

  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    if (login.name == "admin" && login.password == "admin12345") {
      localStorage.setItem("adminlog", 1);
      alert("Login successfully");
      window.location.reload(false)
    }
    else{
        alert('Invalid....')
    }
  };
  return (
    <div>
     
      <div>
        <div class="container login_page">
        
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-2"></div>
                <div class="col-lg-6 col-md-8 login-box">
                  <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                  </div>
                  <div class="col-lg-12 login-title">ADMIN LOGIN PANEL</div>

                  <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                      <form onSubmit={submitt}>
                        <div class="form-group">
                          <label class="form-control-label">USERNAME</label>
                          <input
                            name="name"
                            type="text"
                            class="form-control"
                            // value={login.name}
                            onChange={changehandleSubmit}
                          />
                        </div>
                        <div class="form-group">
                          <label class="form-control-label">PASSWORD</label>
                          <input
                            name="password"
                            type="password"
                            class="form-control"
                            // value={login.password}
                            onChange={changehandleSubmit}
                          />
                        </div>

                        <div class="col-lg-12 loginbttm">
                          <div class="col-lg-6 login-btm login-text"></div>
                          <div class="col-lg-7 login-btm login-button">
                            <button
                              type="submit"
                              class="btn btn-outline-primary"
                            >
                              LOGIN
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-2"></div>
                </div>
              </div>
            </div>
       
        </div>
      </div>
    </div>
  );
}

export default Admin;
