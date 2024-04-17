import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Baseurl";

function Candidate() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const changehandleSubmit = (a) => {
    setLogin({ ...login, [a.target.name]: a.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("candlogid") != null) {
      navigate("/CandHome");
    }
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    axiosInstance
      .post("/loginCandidate", login)
      .then((result) => {
        console.log("data entered", result);
        if (result.data.status == 200) {
          localStorage.setItem("candlogid", result.data.data._id);
          // navigate("/CandHome")
          alert("Login Successfully");
          window.location.reload(false);
        } else {
          alert(result.data.msg)
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">CANDIDATE LOGIN</div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                  <form onSubmit={submitt}>
                    <div class="form-group">
                      <label class="form-control-label">USERNAME EMAIL</label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        value={login.email}
                        onChange={changehandleSubmit}
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">PASSWORD</label>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        value={login.password}
                        onChange={changehandleSubmit}
                        i
                      />
                    </div>

                    <div class="col-lg-12 loginbttm">
                      <div class="col-lg-6 login-btm login-text"></div>
                      <div class="col-lg-7 login-btm login-button">
                        <button type="submit" class="btn btn-outline-primary"  style={{ marginLeft: "15rem" }}>
                          LOGIN
                        </button>
                        <div class="reg__link">
                          <p>Don't have an Account?</p>
                          <Link to="/Cantidatereg" class="reg">
                            Register
                          </Link>
                        </div>
                        <div>
                          <Link
                            to="/ForgetPassCand"
                           
                          >
                            Forget Password?
                          </Link>
                        </div>
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
  );
}

export default Candidate;
