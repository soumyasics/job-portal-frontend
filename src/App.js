import React from "react";

// import Testimonal from './Component/Testimonal'
import Footer from "./Component/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Assets/Styles/Resume.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Jobs from "./Component/Jobs";
import Employeerlogin from "./Component/EmployeerProf/Employeerlogin";
import Candidate from "./Component/Candidate";
import Aboutus from "./Component/Aboutus";
import Mentor from "./Component/MentorProf/Mentor";
import CandReg from "./Component/CandReg";
import EmployeeReg from "./Component/EmployeerProf/EmployeeReg";
import MentorReg from "./Component/MentorProf/MentorReg";

import Contact from "./Component/Contact";

import AdminPage from "./Component/AdminPage";
import CandHome from "./Component/CandProf/CandHome";

import CandViewProf from "./Component/CandProf/CandViewProf";
import CandEditProf from "./Component/CandProf/CandEditProf";
import CandNav from "./Component/Navbar/CandNav";
import EmpHome from "./Component/EmployeerProf/EmpHome";
import EmpNav from "./Component/Navbar/EmpNav";
import EmpProfView from "./Component/EmployeerProf/EmpProfView";
import EmpProfEdit from "./Component/EmployeerProf/EmpProfEdit";
import MentorHome from "./Component/MentorProf/MentorHome";
import MentorEditProf from "./Component/MentorProf/MentorEditProf";
import MentorViewProf from "./Component/MentorProf/MentorViewProf";
import Admin from "./Component/Admin";
import AdminHome from "./Component/AdminHome";
import AdminAbout from "./Component/AdminAbout";
import AddLect from "./Component/MentorProf/AddLect";
import ViewLect from "./Component/ViewLect";
import UploadVideo from "./Component/UploadVideo";
import ViewVideo from "./Component/ViewVideo";
import AddJob from "./Component//EmployeerProf/AddJob";
import ViewJob from "./Component/EmployeerProf/ViewJob";
import ViewJobsCand from "./Component/CandProf/ViewJobsCand";
import CandAbout from "./Component/CandProf/CandAbout";
import BuildResume from "./Component/CandProf/BuildResume";
import ViewBuildResume from "./Component/CandProf/ViewBuildResume";
import ViewMentor from "./Component/CandProf/ViewMentor";
import ViewInterview from "./Component/EmployeerProf/ViewInterview";
import Subscribe from "./Component/Subscribe";
import AddRating from "./AddRating";
import CandCaro from "./Component/CandProf/CandCaro";
import ViewApplication from "./Component/CandProf/ViewApplication";
import ViewAppEmp from "./Component/EmployeerProf/ViewAppEmp";
import EmpAbout from "./Component/EmployeerProf/EmpAbout";
import MentorAbout from "./Component/MentorProf/MentorAbout";
import Schedule from "./Component/Schedule";
import ViewIntervCand from "./Component/CandProf/ViewIntervCand";
import ForgetpassEmp from "./Component/ForgetpassEmp";
import ForgetpassCand from "./Component/ForgetPassCand";
import ForgetpassMentor from "./Component/ForgetPassMentor";
import Navbar from "./Component/Navbar/Navbar";

// import Applyjob from "./Component/Applyjob";

import { useState, useEffect } from "react";
import MyMentors from "./Component/CandProf/MyMentors";
import ViewMentorLectures from "./Component/CandProf/ViewMentorLectures";
import AddExam from "./Component/MentorProf/AddExam";
import ViewMyExam from "./Component/MentorProf/ViewMyExam";
import ViewCandExam from "./Component/CandProf/ViewCandExam";
import AttendExam from "./Component/CandProf/AttendExam";
import AttendSingleExam from "./Component/CandProf/AttendSingleExam";
import MyExams from "./Component/CandProf/MyExams";
import EditResume from "./Component/CandProf/EditResume";
import MySubs from "./Component/MentorProf/MySubs";
import MenCarousel from "./Component/MentorProf/MenCarousel";
import Chart from "./Component/CandProf/Chart";

function App() {
  const [auth, setauth] = useState("");
  // const [basename,setbaseurl] = useState('/job_portal:4022/')
  const [basename,setbaseurl] = useState('')

  useEffect(() => {
    if (localStorage.getItem("emplogid") != null) {
      setauth(1);
    } else if (localStorage.getItem("candlogid") != null) {
      setauth(2);
    } else if (localStorage.getItem("mentlogid") != null) {
      setauth(3);
    }
    else if (localStorage.getItem("adminlog") != null) {
      setauth(4);
    }
     else {
      setauth(0);
    }
  });
  return (
    <BrowserRouter basename="job_portal">
      <div className="Main">
        <Navbar auth={auth} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          {/* <Route exact path='/Aboutus' element={<Aboutus/>}/> */}
          <Route exact path="/Jobs" element={<Jobs />} />
          <Route exact path="/Employeerlogin" element={<Employeerlogin />} />
          <Route exact path="/Candidatelogin" element={<Candidate />} />
          <Route exact path="/Mentorlogin" element={<Mentor />} />
          <Route exact path="/About" element={<Aboutus />} />
          <Route exact path="/Employeereg" element={<EmployeeReg />} />
          <Route exact path="/Cantidatereg" element={<CandReg />} />
          <Route exact path="/Mentorreg" element={<MentorReg />} />
          <Route exact path="/Chart" element={<Chart />} />


          {/* <Route  path="/Adminlogin/adminview" element={<AdminPage/>}/> */}
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="/CandHome" element={<CandHome />} />
          <Route path="/CandNav" element={<CandNav />} />
          <Route path="/CandViewProf" element={<CandViewProf />} />
          <Route path="/CandEditProf" element={<CandEditProf />} />
          <Route path="/EmpHome" element={<EmpHome />} />
          <Route path="/MentorAbout" element={<MentorAbout />} />
          <Route path="/EmpAbout" element={<EmpAbout />} />
          <Route path="/EmpNav" element={<EmpNav />} />
          <Route path="/EmpProfView" element={<EmpProfView />} />
          <Route path="/EmpProfEdit" element={<EmpProfEdit />} />
          <Route path="/MentorHome" element={<MentorHome />} />
          <Route path="/MentorViewProf" element={<MentorViewProf />} />
          <Route path="/MentorEditProf" element={<MentorEditProf />} />
          <Route path="/AdminLogin" element={<Admin />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/AdminLogin/AdminPage" element={<AdminPage />} />
          <Route path="/AdminAbout" element={<AdminAbout />} />
          <Route path="/AddLect" element={<AddLect />} />
          <Route path="/ViewLect" element={<ViewLect />} />
          <Route path="/UploadVideo/:videoid" element={<UploadVideo />} />
          <Route path="/ViewVideo/:videoid" element={<ViewVideo />} />
          <Route path="/AddJob" element={<AddJob />} />
          <Route path="/ViewJob" element={<ViewJob />} />
          <Route path="/ViewJobsCand" element={<ViewJobsCand />} />
          <Route path="/CandAbout" element={<CandAbout />} />
          <Route path="/BuildResume" element={<BuildResume />} />
          <Route path="/ViewBuildResume" element={<ViewBuildResume />} />
          <Route path="/EditResume" element={<EditResume />} />
          <Route path="/ViewAllMentors" element={<ViewMentor />} />
          <Route path="/ViewInterview" element={<ViewInterview />} />
          <Route path="/Subscribe" element={<Subscribe />} />
          <Route path="/AddRating/:id" element={<AddRating />} />
          <Route path="/CandCaro" element={<CandCaro />} />
          <Route path="/ViewApplication" element={<ViewApplication />} />
          <Route path="/ViewAppEmp" element={<ViewAppEmp />} />
          <Route path="/Schedule/:id" element={<Schedule />} />
          <Route path="/ViewIntervCand" element={<ViewIntervCand />} />
          <Route path="/ForgetPassEmp" element={<ForgetpassEmp />} />
          <Route path="/ForgetPassCand" element={<ForgetpassCand />} />
          <Route path="/ForgetPassMentor" element={<ForgetpassMentor />} />
          <Route path="/MyMentors" element={<MyMentors />} />
          <Route path="/MySubs" element={<MySubs />} />
          <Route path="/MenCarousel" element={<MenCarousel />} />

          
          <Route path="/viewLectureofmentor/:id" element={<ViewMentorLectures />} />
          <Route path="/AddExam" element={<AddExam />} />
          <Route path="/ViewExam" element={<ViewMyExam />} />
          <Route path="/ViewExamofMentor/:id" element={<ViewCandExam />} />
          <Route path="/AttendExam/:id" element={<AttendExam />} />
          <Route path="/AttendSingleExam/:id" element={<AttendSingleExam />} />
          <Route path="/MyExams" element={<MyExams />} />
     


          
          

          {/* <Route path="/Applyjob/:id" element={<Applyjob/>} /> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
