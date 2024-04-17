import React, { useEffect, useState } from "react";

import axiosInstance from "../../Baseurl";
import { useNavigate } from "react-router-dom";

function ViewApplication() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/home')
    }
  })
  const [applications, setApplications] = useState([]);
  const [appRem, setappRem] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(
        `/viewPendingApplicationsByCId/${localStorage.getItem("candlogid")}`
      )
      .then((res) => {
        console.log(res, "viewapplication");
        setApplications(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  const handleRejectApplication = (id) => {
    axiosInstance
      .post(`/rejectApplicationById/${id}`)
      .then((res) => {
        console.log(res, "rejectedApplications");
        setappRem(res.data.data);
        if (res.status == 200) {
          alert("Reject Successfully");
        } else {
          alert("Reject Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div >
      
      <div class="alert alert-primary" role="alert">
      <h1> All My Applications</h1>
</div>  
      
        <div class="container text-center">
          <div class="row">
            {applications.length ? (
              applications.map((a) => {
                return (
                  <div class="col-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">{a.jid.title}</h5>
                        <p class="card-text" style={{ color: "black" }}>
                          Category: {a.jid.category}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Experience: {a.jid.experience}yrs
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Qualifiation: {a.jid.qualification}
                        </p>

                        <button
                          class="btn btn-primary"
                          onClick={() => {
                            handleRejectApplication(a._id);
                          }}
                        >
                          Cancel Application
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">No Data</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewApplication;
