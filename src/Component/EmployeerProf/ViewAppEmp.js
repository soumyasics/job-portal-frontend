import React, { useEffect, useState } from "react";

import axiosInstance from "../../Baseurl";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewAppEmp() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`emplogid`)==null){
      Navigate('/home')
    }
  })

  const id = useParams();
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewPendingApplnsByEmpId/${localStorage.getItem("emplogid")}`)
      .then((res) => {
        console.log(res, "view");
        setApps(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  // const ScheduleInterview = (a) => {
  //   axiosInstance
  //     .post(`/scheduleInterview/${a._id}`, {
  //       cid: a.cid._id,
  //       jid: a.jid._id,
  //       empid: localStorage.getItem("emplogid"),
  //     })
  //     .then((result) => {
  //       console.log("data entered", result);
  //       if (result.status == 200) {
  //         alert("Schedule Successfully...");
  //       } else {
  //         alert("Failed");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // };

  return (
    <div>
     
      <div style={{ minHeight: "300px", margin: "15px 0px" }}>
        <div class="container text-center">
          <div class="row">
            {apps.length?apps.map((a) => {
              return (
                <div class="col-4">
                  <div class="card" >
                    {/* <img
                    src={`http://hybrid.srishticampus.in:4022/${a.thumbnail.originalname}`}
                    class="card-img-top"
                    alt="..."
                    height="240px"
                  /> */}
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

                      <Link to={`/Schedule/${JSON.stringify({ jid:a.jid._id,cid:a.cid._id,appId:a._id,empid:a.empid})}`}
                        class="btn btn-primary"
                       
                      >
                        Schedule
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }):<div class="col-12" style={{ margin: "10px " }}>
            <div class="card" >
              {/* <img
              src={`http://hybrid.srishticampus.in:4022/${a.thumbnail.originalname}`}
              class="card-img-top"
              alt="..."
              height="240px"
            /> */}
              <div class="card-body">
                <h5 class="card-title">No Application Requests available</h5>
                
              </div>
            </div>
          </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAppEmp;
