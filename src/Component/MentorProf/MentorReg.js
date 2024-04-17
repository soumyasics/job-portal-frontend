import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function CandReg() {
  const [register, setRegister] = useState({
    name: "",
    experience: "",
    city: "",
    district: "",
    contact: "",
    email: "",
    password: "",
    qualification: "",
    specialization: "",
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
      .post("/registermentor", register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          navigate("/Mentorlogin");
          alert("Register Sucessfully");
        } else {
          alert("User not Register");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Montserrat&display=swap"
        rel="stylesheet"
      />

      <div id="survey-container">
        <h2 id="title">MENTOR REGISTER</h2>

        <form id="survey-form" onSubmit={submitt}>
          <label id="name-label" class="row-label" for="name">
            Name:
          </label>
          <input
            id="name"
            class="row-input"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={register.name}
            onChange={changehandleSubmit}
            required
          />
          <label id="email-label" class="row-label" for="city">
            City:
          </label>
          <input
            id="email"
            class="row-input"
            type="text"
            placeholder="Enter your City"
            name="city"
            value={register.city}
            onChange={changehandleSubmit}
            required
          />

          <label id="email-label" class="row-label" for="email">
            Email:
          </label>
          <input
            id="email"
            class="row-input"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={register.email}
            onChange={changehandleSubmit}
            required
          />
          <label id="email-label" class="row-label" for="password">
            Password:
          </label>
          <input
            id="email"
            class="row-input"
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={register.password}
            onChange={changehandleSubmit}
            required
          />
          <label class="row-label" for="dropdown">
            District:
          </label>
          <select
            id="dropdown"
            class="row-input"
            name="district"
            value={register.district}
            onChange={changehandleSubmit}
            required
          >
            <option value="selected">Select an option</option>
            <option value="Kasargod"> Kasargod </option>
            <option value="Kannur"> Kannur </option>
            <option value="Wayanad"> Wayanad </option>
            <option value="Kozhikode"> Kozhikode </option>
            <option value="Malappuram">Malappuram </option>
            <option value="Palakkad"> Palakkad </option>
            <option value="Thrissur">Thrissur </option>
            <option value="Ernakulam"> Ernakulam </option>
            <option value="Idukki">Idukki</option>
            <option value="Kottayam">Kottayam </option>
            <option value="Alappuzha">Alappuzha</option>
            <option value="Pathanamthitta"> Pathanamthitta </option>
            <option value="Kollam"> Kollam </option>
            <option value="Trivandrum"> Trivandrum </option>
          </select>

          <label class="row-label" for="dropdown">
            Level of education:
          </label>
          <select
            id="dropdown"
            class="row-input"
            name="qualification"
            value={register.qualification}
            onChange={changehandleSubmit}
            required
          >
            <option value=" selected">Select an option</option>
            <option value="btech">B.tech</option>
            <option value="MSC">MSC</option>
            <option value="BSC">BSC</option>
            <option value="MC">MC</option>
          </select>
          <label id="email-label" class="row-label" for="specialization">
            Specialization:
          </label>
          <input
            id="email"
            class="row-input"
            type="text"
            placeholder="Specialization"
            name="specialization"
            value={register.specialization}
            onChange={changehandleSubmit}
            required
          />

          <label id="number-label" class="row-label" for="number">
            Years of experience:
          </label>
          <input
            id="number"
            class="row-input"
            type="number"
            placeholder="Enter number of years of experience"
            max="9"
            name="experience"
            value={register.experience}
            onChange={changehandleSubmit}
            required
          />

          <label id="number-label" class="row-label" for="number">
            Contact:
          </label>
          <input
            id="number"
            class="row-input"
            type="tel"
            placeholder="Mobile Number"
            name="contact"
            value={register.contact}
            onChange={changehandleSubmit}
            required
          />

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

          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CandReg;
