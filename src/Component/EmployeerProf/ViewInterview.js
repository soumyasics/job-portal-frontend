import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { useNavigate } from "react-router-dom";

function ViewInterview() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`emplogid`)==null){
      Navigate('/home')
    }
  })

  const [interview, setinterview] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewInterviewsEmpId/${localStorage.getItem("emplogid")}`)
      .then((res) => {
        console.log(res, "view interview");
        setinterview(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  if (localStorage.getItem("emplogid") != null)
    return (
      <>
        <div style={{ minHeight: "300px", margin: "15px 0px" }}>
          <div class="container text-center">
            <h1> Scheduled Interviews</h1>
            <div class="row">
              {interview.map((a) => {
                return (
                  <div class="col-4">
                    <div
                      class="card"
                      
                    >
                      <div
                        class="card-body"
                        style={{ boxShadow: "1px 1px 2px 2px black" }}
                      >
                        <h5
                          class="card-title"
                          style={{
                            color: "blue",
                            boxShadow: "1px 1px 2px 2px black",
                            padding:"10px"
                          }}
                        >
                          Candidate : {a.cid.name}
                        </h5>
                        <hr/>
                        <p class="card-text" style={{ color: "black" }}>
                          Email: {a.cid.email}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Contact: {a.cid.contact}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Experience: {a.cid.experience} Years
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Qualification: {a.cid.qualification}
                        </p>
                        <hr/>
                        <h5> Interview Venue : {a.venue}</h5>
                        <h6> Time : {a.time}</h6>
                        <h6> Date : {a.date.slice(0,10)}</h6>


                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
}

export default ViewInterview;
