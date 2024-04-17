import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { useNavigate } from "react-router-dom";

function ViewJob() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`emplogid`)==null){
      Navigate('/home')
    }
  })

  const [job, setjob] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewJobByEmpId/${localStorage.getItem("emplogid")}`)
      .then((res) => {
        console.log(res, "viewjobs");
        setjob(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  const handleDelete = (id) => {
    axiosInstance
      .post(`/deleteJobById/${id}`)
      .then((res) => {
        window.location.reload(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (localStorage.getItem("emplogid") != null)
    return (
      <>
        <div style={{ minHeight: "300px", marginTop: "5rem" }}>
          <div class="container text-center">
            <div class="row">
             {job.length?(
               job.map((a) => {
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
                          Title : {a.title}
                        </h5>
                        <hr/>
                        <p class="card-text" style={{ color: "black" }}>
                          Description: {a.description}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Qualification: {a.qualification}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Skills needed: {a.skills}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Added Date: {a.date.slice(0, 10)}
                        </p>
                      <hr/>
                        <div>
                          <div>
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => handleDelete(a._id)}
                              style={{ width: "50%" }}
                              href=""
                            >
                              Delete Job
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
             ):(<div className="col" style={{ margin: "30px 0px" }}>
             <div class="card">
               <div class="card-body">
                 <div class="d-flex align-items-center">
                   <strong role="status">No Job Added .....</strong>
                   <div
                     class="spinner-border ms-auto"
                     aria-hidden="true"
                   ></div>
                 </div>
               </div>
             </div>
           </div>)}
            </div>
          </div>
        </div>
      </>
    );
}

export default ViewJob;
