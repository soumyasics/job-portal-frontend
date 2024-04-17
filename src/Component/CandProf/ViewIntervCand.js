import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { useNavigate } from "react-router-dom";

function ViewInterviewCand() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/home')
    }
  })
  
  const [interviews, setinterviews] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewInterviewsByCId/${localStorage.getItem("candlogid")}`)
      .then((res) => {
        console.log(res, "view interview");
        setinterviews(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  if (localStorage.getItem("candlogid") != null)
    return (
      <div>
        <div class="alert alert-primary" role="alert">
        <h1> Scheduled Interview</h1>
</div>
        
        <div class="container text-center">
          <div class="row">
            {interviews.map((a) => {
              return (
                <div class="col-6">
                  <div class="card">
                    <div
                      class="card-body"
                      style={{
                        boxShadow: "1px 1px 2px 2px black",
                      }}
                    >
                      <h4
                        style={{
                          color: "blue",
                          fontFamily: "cursive",
                          fontSize: "1.5rem",
                        }}
                      >
                        {" "}
                        Hi Candidate! This is your New Schedule
                      </h4>
                      <hr />
                      <p class="card-text" style={{ color: "black" }}>
                        Date: {a.date.slice(0, 9)}
                      </p>
                      <p class="card-text" style={{ color: "black" }}>
                        Time: {a.time}
                      </p>
                      <p class="card-text" style={{ color: "black" }}>
                        Venue: {a.venue}
                      </p>
                      <p class="card-text" style={{ color: "black" }}>
                        Comments: {a.comments}
                      </p>

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
    );
}

export default ViewInterviewCand;
