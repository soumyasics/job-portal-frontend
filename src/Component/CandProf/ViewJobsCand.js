import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function ViewJobsCand() {

  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/home')
    }
  })


  const { id } = useParams();
  const [jbdata, setjbdata] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewJobs`)
      .then((res) => {
        console.log(res, "viewjb");
        if (res.data.data) {
          setjbdata(res.data.data);
        } else {
          setjbdata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const applyjobHandle = (a) => {
    console.log(a);
    axiosInstance
      .post(`/applyJob`, {
        cid: localStorage.getItem("candlogid"),
        jid: a._id,
        empid: a.empid._id,
      })
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Apply Successfully...");
        } else {
          alert("Failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <div class="alert alert-primary" role="alert">
      <h1> All Jobs</h1>
</div>
       
        {/* job map start*/}
        <div class="container text-center">
          <div class="row">
            {jbdata.length ? (
              jbdata.map((a) => {
                return (
                  <div className="col-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title" style={{ color: "green" }}>
                          Title: {a.title}
                        </h5>
                        <h4 class="card-text" style={{ color: "black" }}>
                          Company: {a.empid.companyname}
                        </h4>
                        <p class="card-text" style={{ color: "black" }}>
                          Email: {a.empid.email}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Qualification:{a.qualification}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Description:{a.description}
                        </p>
                        <button
                          onClick={() => {
                            applyjobHandle(a);
                          }}
                          class="btn btn-danger"
                        >
                          Apply Job
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col">
                <div class="card" style={{ width: "18rem;" }}>
                  <div class="card-body">
                    <h5 class="card-title">No Jobs to display</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* job map end*/}
    </div>
  );
}

export default ViewJobsCand;
