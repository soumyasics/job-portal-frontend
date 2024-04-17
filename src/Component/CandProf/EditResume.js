import React, { useEffect, useState } from "react";

import axiosInstance from "../../Baseurl";
import { useNavigate } from "react-router-dom";

function EditResume() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/home')
    }
  })
  const id = localStorage.getItem("candlogid");
  const [register, setRegister] = useState({
    fname: " ",
    lname: " ",
    email: " ",
    phonenumber: " ",

    expname1: " ",
    expduration1: " ",
    expname2: " ",
    expduration2: " ",

    education: " ",
    educationDur: " ",

    projectname1: " ",
    projectdesc1: " ",
    projectname2: " ",
    projectdesc2: " ",

    experienceNo: "",
    experience: "",
    objective: "",
    image: null,
  });
  const changehandleSubmit = (a) => {
    if (a.target.name == "image") {
      setRegister({ ...register, image: a.target.files[0] });
    } else {
      setRegister({ ...register, [a.target.name]: a.target.value });
    }
  };

  useEffect(() => {
    axiosInstance
      .post(`/viewResumeById/${localStorage.getItem("candlogid")}`)
      .then((res) => {
        console.log(res, "vieweresume");
        if (res.data.data != undefined) {
          setRegister(res.data.data);
          
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/editResumeById/${id}`, register, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Resume Edited Successfully");
          Navigate("/ViewBuildResume");
        } else {
          alert("Failed to Add");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    console.log(register);
  });

  return (
    <div>
      <div
        class="container"
        style={{ minHeight: "300px", margin: "34px 4rem" }}
      >
        <form id="survey-form" onSubmit={submitt}>
          <h3>Edit RESUME</h3>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="experienceNo"
              placeholder="First Name"
              name="fname"
                value={register.fname}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="experienceNo"
              placeholder="Last Name"
              name="lname"
                value={register.lname}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="email"
              id="experienceNo"
              placeholder="Email"
              name="email"
                value={register.email}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="tel"
              minLength={10}
              maxLength={10}
              id="experienceNo"
              placeholder="Phone Number"
              name="phonenumber"
                value={register.phonenumber}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="number"
              id="experienceNo"
              placeholder="Total Experience"
              name="experienceNo"
                value={register.experienceNo}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="experience"
              placeholder="Experience Description"
              name="experience"
                value={register.experience}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="experienceNo"
              placeholder="Name of the Company that you worked in (if any)"
              name="expname1"
                value={register.expname1}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="experienceNo"
              placeholder="Duration (1)"
              name="expduration1"
                value={register.expduration1}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="experienceNo"
              placeholder="Name of the Company (2) (if any)"
              name="expname2"
                value={register.expname2}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="experienceNo"
              placeholder="Duration (2)"
              name="expduration2"
                value={register.expduration2}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="experienceNo"
              placeholder="Education"
              name="education"
                value={register.education}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="number"
              min={1}
              id="experienceNo"
              placeholder="Education Duration"
              name="educationDur"
                value={register.educationDur}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              min={1}
              id="experienceNo"
              placeholder="Project Name (1)"
              name="projectname1"
                value={register.projectname1}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              min={1}
              id="experienceNo"
              placeholder="Project Description (1)"
              name="projectdesc1"
                value={register.projectdesc1}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              min={1}
              id="experienceNo"
              placeholder="Project Name (2)"
              name="projectname2"
                value={register.projectname2}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              min={1}
              id="experienceNo"
              placeholder="Project Description (2)"
              name="projectdesc2"
                value={register.projectdesc2}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group">
            <h5 class="mb-3">Objective</h5>
            <textarea
              class="w-100"
              rows="4"
              cols="50"
              name="objective"
              value={register.objective}
              onChange={changehandleSubmit}
            >
              Objective...
            </textarea>
          </div>

          {/* <div class="form-group d-flex">
            <h5 class="mb-3">Add your Picture</h5>
            <input
              class="form-control"
              type="file"
              name="image"
              //   value={register.thumbnail}
              onChange={changehandleSubmit}
            />
          </div> */}

          <button type="submit" class="btn btn-primary mb-5" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditResume;
