import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function EmployeeReg() {
  const [register, setRegister] = useState({
    companyname: "",
    regno: "",
    city: "",
    district: "",
    contact: "",
    email: "",
    password: "",
    type: "",
    description: "",
  });
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(register);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    axiosInstance
      .post("/registeremployer", register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Register Sucessfully");
          navigate("/Employeerlogin");
        } else {
          alert("User Cannot Register");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <h1 id="title">EMPLOYER REGISTER</h1>
      <div class="container" style={{ margin: "40px 100px" }}>
        <form id="survey-form" onSubmit={submitt}>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="name"
              placeholder="Company Name"
              name="companyname"
              value={register.companyname}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="number"
              id="Reg No"
              placeholder="Reg No"
              name="regno"
              value={register.regno}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="district"
              placeholder="District"
              name="district"
              value={register.district}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="city"
              placeholder="City"
              name="city"
              value={register.city}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="number"
              id="contact"
              placeholder="Contact"
              pattern="[0-9]*"
              name="contact"
              value={register.contact}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={register.email}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="password"
              placeholder="Password"
              name="password"
              value={register.password}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="type"
              placeholder="Company Type"
              name="type"
              value={register.type}
              onChange={changehandleSubmit}
            />
          </div>
          <label class="row-label" for="comments">
            Description:
          </label>
          <textarea
            id="comments"
            placeholder="Description..."
            name="description"
            value={register.description}
            onChange={changehandleSubmit}
          ></textarea>

          <button type="submit" class="btn btn-primary mb-5" id="submit">
            Submit
          </button>
        </form>
      </div>

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
    </div>
  );
}

export default EmployeeReg;
