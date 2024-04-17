import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function AddJob() {

  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`emplogid`)==null){
      Navigate('/home')
    }
  })


  const id = localStorage.getItem("emplogid");
  const [register, setRegister] = useState({
    empid: id,
    title: "",
    date: "",
    sal: "",
    experience: "",
    skills: "",
    qualification: "",
    description: "",
    category: "",
  });

  const navigate = useNavigate();
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };

  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post("/addJob", register, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Add Job Sucessfully...");
          // navigate("/Customer");
        } else {
          alert("Failed to Add");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  console.log(register);

  return (
    <div>
      <div
        class="container"
        style={{ minHeight: "300px", margin: "20px auto" }}
      >
      <div className="row">
        <div className="col"></div>
        <div className="col-8">
        <form id="survey-form" onSubmit={submitt}>
          <h1 style={{ textAlign: "center" }}> ADD JOB</h1>
          <hr />

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="name"
              placeholder=" Job title"
              name="title"
              //   value={register.title}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="number"
              id="sal"
              placeholder="Salary"
              name="sal"
              min='0'
              //   value={register.content}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <select
              id="dropdown"
              class="form-control col-sm-4"
              name="category"
              value={register.category}
              onChange={changehandleSubmit}
            >
              <option value="select">Job Category </option>
              <option value="Accounting"> Accounting </option>
              <option value="Administration">Administration</option>
              <option value="Marketing">Marketing</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Teaching">Teaching</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Sales">Sales</option>
              <option value="Volunteering">Volunteering</option>
              <option value="Logistics">Logistics</option>
              <option value="Information Technology (IT)">
                Information Technology (IT)
              </option>
            </select>
          </div>
          <div class="form-group d-flex">
      
            <input
              class="form-control"
              type="date"
              id="date"
              placeholder="Date"
              name="date"
              //   value={register.city}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="number"
              id="experience"
              placeholder="Experience"
              name="experience"
              //   value={register.category}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="skill"
              placeholder=" skills"
              name="skills"
              //   value={register.category}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <select
              id="dropdown"
              class="form-control col-sm-4"
              name="qualification"
              value={register.qualification}
              onChange={changehandleSubmit}
            >
              <option value="select"> Qualification Needed</option>
              <option value="12"> High School </option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>

          <div class="form-group">
            <h5 class="mb-3"> Job Description</h5>
            <textarea
              class="w-100"
              rows="4"
              cols="50"
              name="description"
              value={register.description}
              onChange={changehandleSubmit}
            >
              Description
            </textarea>
          </div>

          <button type="submit" class="btn btn-primary mb-5" id="submit">
            Submit
          </button>
          
        </form>
        </div>
        <div className="col"></div>
      </div>
      </div>
    </div>
  );
}
export default AddJob;
