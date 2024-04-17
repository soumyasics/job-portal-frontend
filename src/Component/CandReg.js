import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Baseurl";

const LanguagesComponent = ({ language, setLanguage }) => {
  const [newLanguage, setNewLanguage] = useState([]);
  const [oneval, setoneval] = useState("");

  const addLanguage = () => {
    if (newLanguage != "") {
      setLanguage([...language, newLanguage]);
      setNewLanguage("");
    }
  };

  const delone = (item) => {
    const x = language;
    console.log(x);
    if (x.includes(item)) {
      x.splice(x.indexOf(item), 1);
      console.log(x);
      setLanguage(x);
    }
  };

  return (
    <div>
      <label className="row-input small" htmlFor="box-windows">
        <input
          type="text"
          id="box-windows"
          value={newLanguage}
          style={{ padding: "2px 5px", borderRadius: "10px" }}
          onChange={(e) => setNewLanguage(e.target.value)}
        />

        <button
          className="btn btn-primary"
          style={{ margin: "-15px 5px " }}
          type="button"
          onClick={addLanguage}
        >
          Add Language
        </button>
      </label>
      <br />
      {language.map((languages, index) => {
        return (
          <span
            onClick={() => {
              delone(languages);
            }}
            style={{ margin: "5px" }}
            class="badge bg-secondary"
          >
            {languages}
          </span>
        );
      })}
    </div>
  );
};

const SkillsComponent = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };
  const deloneskill = (item) => {
    const x = skills;
    console.log(x);
    if (x.includes(item)) {
      x.splice(x.indexOf(item), 1);
      console.log(x);
      setSkills(x);
    }
  };
  return (
    <div>
      <label class="row-input small" for="box-windows">
        <input
          type="text"
          id="box-windows"
          style={{ padding: "2px 5px", borderRadius: "10px" }}
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        {/* <span class="inline-label">HTML and CSS</span> */}
        <button
          className="btn btn-primary"
          type="button"
          style={{ margin: "-15px 5px " }}
          onClick={addSkill}
        >
          Add Skill
        </button>
      </label>
      <br />
      {skills.map((skill, index) => {
        return (
          <span
            onClick={() => {
              deloneskill(skill);
            }}
            style={{ margin: "5px" }}
            class="badge bg-secondary"
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
};

function CandReg() {
  const [register, setRegister] = useState({
    name: "",
    age: "",
    city: "",
    pincode: "",
    district: "",
    contact: "",
    email: "",
    password: "",
    gender: "",
    qualification: "",
    language: [],
    experience: "",
    skills: [],
  });

  useEffect(() => {
    console.log(register);
  });
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  const navigate = useNavigate();
  const submitt = (b) => {
    // register.skills = skill;
    // register.language = language;
    console.log("submitted", register);
    b.preventDefault();
    axiosInstance
      .post("/registerCandidate", register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          navigate("/Candidatelogin");
          alert("Register Sucessfully");
        } else {
          alert("User Not Regsiter");
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
        <h1 id="title">CANDIDATE REGISTER</h1>

        {/* <p id="description">Fill in to apply</p> */}

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
          <label id="name-label" class="row-label" for="age">
            Age:
          </label>
          <input
            id="name"
            class="row-input"
            type="number"
            placeholder="Enter your age"
            name="age"
            value={register.age}
            onChange={changehandleSubmit}
            required
          />
          <label id="name-label" class="row-label" for="city">
            City:
          </label>
          <input
            id="name"
            class="row-input"
            type="text"
            placeholder="Enter your City"
            name="city"
            value={register.city}
            onChange={changehandleSubmit}
            required
          />
          <label id="name-label" class="row-label" for="pincode">
            Pincode:
          </label>
          <input
            id="name"
            class="row-input"
            type="number"
            placeholder="Enter pincode"
            name="pincode"
            value={register.pincode}
            onChange={changehandleSubmit}
            required
          />

          <label id="name-label" class="row-label" for="password">
            Password:
          </label>
          <input
            id="password"
            class="row-input"
            type="password"
            placeholder="Enter password"
            name="password"
            value={register.password}
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
          <label id="email-label" class="row-label" for="contact">
            Mobile Number:
          </label>
          <input
            id="email"
            class="row-input"
            type="number"
            placeholder="Enter your Mobile Number"
            pattern="[0-9]*"
            name="contact"
            value={register.contact}
            onChange={changehandleSubmit}
            required
          />

          <label class="row-label" for="dropdown">
            qualification:
          </label>
          <select
            id="dropdown"
            class="row-input"
            name="qualification"
            value={register.qualification}
            onChange={changehandleSubmit}
            required
          >
            <option value="select">Select an option</option>
            <option value="btech">B.tech</option>
            <option value="MSC">MSC</option>
            <option value="BSC">BSC</option>
            <option value="MC">MC</option>
          </select>
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
            <option value="select">Select an option</option>
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

          <label id="number-label" class="row-label" for="number">
            Years of experience (optional):
          </label>
          <input
            id="number"
            class="row-input"
            type="number"
            placeholder="Enter number of years of experience"
            min="0"
            max="50"
            name="experience"
            value={register.experience}
            onChange={changehandleSubmit}
          />
          <p class="row-label">Gender:</p>
          <select
            id="gender"
            className="row-input"
            name="gender"
            value={register.gender}
            onChange={changehandleSubmit}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <p class="row-label">Language:</p>
          <LanguagesComponent
            language={register.language}
            setLanguage={(language) => setRegister({ ...register, language })}
          />
          <p class="row-label">Known Skills:</p>
          <SkillsComponent
            skills={register.skills}
            setSkills={(skills) => setRegister({ ...register, skills })}
          />

          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CandReg;
