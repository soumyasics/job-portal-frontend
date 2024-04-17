import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { Link, useNavigate } from "react-router-dom";

import html2canvas from "html2canvas";

function ViewBuildResume() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/home')
    }
  })
  const [resume, setresume] = useState({});
  const [test, settest] = useState("");
  useEffect(() => {
    axiosInstance
      .post(`/viewResumeById/${localStorage.getItem("candlogid")}`)
      .then((res) => {
        console.log(res, "vieweresume");
        if (res.data.data != undefined) {
          setresume(res.data.data);
          settest("hello");
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const handleRemResum = (id) => {
    axiosInstance
      .post(`/deleteResumeById/${id}`)
      .then((res) => {
        console.log(res, "deleteresume");
        localStorage.clear();
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("candlogid") == null) {
      Navigate("/home");
    }
  });

  const downloadImage = () => {
    const table = document.getElementById("resume");

    html2canvas(table).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "Resume.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  if (localStorage.getItem("candlogid") != null)
    return (
      <div>
        {test.length ? (
          <>
            <div class="container1" id="resume">
              <div class="header1">
                <div class="full-name" style={{position:"relative"}}>
                  <span class="first-name">{resume.fname} </span>
                  <span class="last-name">{resume.lname}</span>
                </div>
                <div class="contact-info1">
                  <span class="email">Email: </span>
                  <span class="email-val">{resume.email}</span>
                  <span class="separator"></span>
                  <span class="email">Date Of Birth: </span>
                  <span class="email-val">{resume.dob.slice(0,10)}</span>
                  <span class="separator"></span>
                  <span class="phone">Phone: </span>
                  <span class="phone-val">{resume.phonenumber}</span>
                </div>

                <div class="about">
                  <span class="position">{resume.experience}</span>
                  <span class="desc">{resume.objective}</span>
                </div>
              </div>
              <div class="details">
                <div class="section">
                  <div class="section__title">Experience</div>
                  <div class="section__list">
                    <div class="section__list-item">
                      <div class="left">
                        <div class="name">{resume.expname1}</div>
                      </div>
                      <div class="right">
                        <div class="duration">
                          Total Experience : {resume.expduration1} Years
                        </div>
                      </div>
                    </div>
                    <div class="section__list-item">
                      <div class="left">
                        <div class="name">{resume.expname2}</div>
                      </div>
                      <div class="right">
                        <div class="duration">
                          Total Experience : {resume.expduration1} Years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section">
                  <div class="section__title">Education</div>

                  <div class="section__list">
                    <div class="section__list-item">
                      <div class="left">
                        <div class="name">{resume.education}</div>
                      </div>
                      <div class="right">
                        <div class="duration">
                          End Date:{resume.educationDur.slice(0, 10)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section">
                  <div class="section__title">Projects</div>
                  <div class="section__list">
                    <div class="section__list-item">
                      <div class="left">
                        <div class="name">{resume.projectname1}</div>
                        <div class="text">{resume.projectdesc1}</div>
                      </div>
                      <div class="right">
                        <div class="duration">
                          <div class="name">{resume.projectname2}</div>
                          <div class="text">{resume.projectdesc2}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <button className="btn btn-primary" style={{width:"100%", margin:"30px auto"}} onClick={downloadImage}>
                    {" "}
                    Download Your Resume
                  </button>
                </div>
              </div>
            </div>{" "}
          </>
        ) : null}
      </div>
    );
}

export default ViewBuildResume;
