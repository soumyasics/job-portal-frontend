import React, { useEffect, useState } from "react";
import img6 from "../img/about-1.jpg"
import img7 from "../img/about-2.jpg"
import img4 from "../img/about-3.jpg"
import img5 from "../img/about-4.jpg"
import { useNavigate } from 'react-router-dom'


function CandAbout() {

    const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/CandHome')
    }
  })
  return (
    <div>
       
        <div class="container-xxl py-5">
<div class="container">
    <div class="row g-5 align-items-center">
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="row g-0 about-bg rounded overflow-hidden">
                <div class="col-6 text-start">
                    <img class="img-fluid w-100" src={img6}/>
                </div>
                <div class="col-6 text-start">
                    <img class="img-fluid" src={img7} style={{width: "85%",marginTop: "15%"}}/>
                </div>
                <div class="col-6 text-end">
                    <img class="img-fluid" src={img4} style={{width:" 85%;"}}/>
                </div>
                <div class="col-6 text-end">
                    <img class="img-fluid w-100" src={img5}/>
                </div>
            </div>
        </div>
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 class="mb-4" style={{color:'black'}}>Welcome to Job Portal</h1>
              <p class="mb-4">
                At Job Portal, we are dedicated to revolutionizing the way job
                seekers and employers connect. Our platform is built on the
                foundation of innovation, inclusivity, and opportunity. Whether
                you're a skilled professional looking to take the next step in
                your career or an employer seeking top-tier talent, we're here
                to make the process seamless and rewarding.
              </p>
              <p class="mb-4">
                <b>Our Mission:</b>
                Our mission is simple yet impactful: to bridge the gap between
                talent and opportunity. We're committed to empowering job
                seekers by providing them with the tools, resources, and support
                they need to thrive in their careers. Simultaneously, we're
                equipping employers with the means to discover, assess, and
                onboard candidates who will drive their organizations forward.
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Why Choose Us?
                <p>
                  {" "}
                  Comprehensive Job Matching: Our intelligent algorithm ensures
                  that job seekers are matched with positions that align with
                  their skills, experience, and aspirations. This personalized
                  approach increases the likelihood of a successful and
                  fulfilling match for both candidates and employers.{" "}
                </p>
                <p>
                  {" "}
                  User-Friendly Experience: Navigating through our platform is
                  effortless. We've designed our user interface with simplicity
                  and efficiency in mind, so you can focus on what truly
                  matters: finding the perfect job or candidate.{" "}
                </p>
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Join Us Today
                <p>
                  {" "}
                  Whether you're a job seeker aiming to make your mark or an
                  employer seeking exceptional talent,Your Job Portal's 
                  is your partner in success. Join our growing community and
                  let's embark on a journey toward meaningful careers and
                  transformative growth.
                </p>
              </p>
              <p>
               
              </p>
              {/* <a class="btn btn-success py-3 px-5 mt-3" href="">Read More</a> */}
            </div>
    </div>
</div>
</div>
    </div>
  )
}

export default CandAbout