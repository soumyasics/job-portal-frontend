import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../Baseurl";

function Adminpage() {
  const Navigate = useNavigate()
  const [empdata, setempdata] = useState([]);
  const [canddata, setcanddata] = useState([]);
  const [mentordata, setmentordata] = useState([]);
  const [appmentordata, setappmentordata] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('adminlog')==null){
      Navigate('/adminlogin')
    }
  },[])

  useEffect(() => {
    axiosInstance
      .post(`/viewemployers`)
      .then((res) => {
        console.log(res, "viewemp");
        if (res.data.data != undefined) {
          setempdata(res.data.data);
        } else {
          setempdata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewCandidates`)
      .then((res) => {
        console.log(res, "viewcand");
        if (res.data.data != undefined) {
          setcanddata(res.data.data);
        } else {
          setcanddata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewAprvdmentor`)
      .then((res) => {
        console.log(res, "viewmentor");
        if (res.data.data != undefined) {
          setmentordata(res.data.data);
        } else {
          setmentordata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance
      .post(`/viewMentorReqs`)
      .then((res) => {
        console.log(res, "viewMentorReq");
        if (res.data.data != undefined) {
          setappmentordata(res.data.data);
        } else {
          setappmentordata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemoveEmp = (id) => {
    axiosInstance
      .post(`/deleteEmployerById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("removed");

          setempdata(res.data.data);
        } else {
          setempdata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRemoveCand = (id) => {
    axiosInstance
      .post(`/deleteCandidateById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("removed");

          setcanddata(res.data.data);
        } else {
          setcanddata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRemoveMentor = (id) => {
    axiosInstance
      .post(`/deleteMentorById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("removed");

          setmentordata(res.data.data);
        } else {
          setmentordata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleApprovMentor = (id) => {
    axiosInstance
      .post(`/approveMentor/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (localStorage.getItem("adminlog") == 1) {
    return (
      // <div className="productdiv1" style={{ minHeight: "400px" }}>
      
      //   <div class="container-xxl py-5">
      //     <div class="container">
      //       <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
      //         Welcome to the Admin Panel
      //       </h1>
      //       <div
      //         class="tab-class text-center wow fadeInUp"
      //         data-wow-delay="0.3s"
      //       >
      //         <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              
      //           <li class="nav-item">
      //             <a
      //               class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active joblistheading"
      //               data-bs-toggle="pill"
      //               href="#tab-1"
      //             >
      //               <h2 class="mt-n1 mb-0" className="joblistheading">
      //                 Employeer
      //               </h2>
      //             </a>
      //           </li>
             
      //           <li class="nav-item">
      //             <a
      //               class="d-flex align-items-center text-start mx-3 pb-3 joblistheading"
      //               data-bs-toggle="pill"
      //               href="#tab-2"
      //             >
      //               <h2 class="mt-n1 mb-0" className="joblistheading">
      //                 Candidate
      //               </h2>
      //             </a>
      //           </li>
               
      //           <li class="nav-item">
      //             <a
      //               class="d-flex align-items-center text-start mx-3 me-0 pb-3 joblistheading"
      //               data-bs-toggle="pill"
      //               href="#tab-3"
      //             >
      //               <h2 class="mt-n1 mb-0 " className="joblistheading">
      //                 All Approved Mentor
      //               </h2>
      //             </a>
      //           </li>
            
      //           <li class="nav-item">
      //             <a
      //               class="d-flex align-items-center text-start mx-3 me-0 pb-3 joblistheading"
      //               data-bs-toggle="pill"
      //               href="#tab-4"
      //             >
      //               <h2 class="mt-n1 mb-0 " className="joblistheading">
      //                 Mentors to be Approved
      //               </h2>
      //             </a>
      //           </li>
      //         </ul>
      //         <div class="tab-content">
              
      //           <div id="tab-1" class="tab-pane fade show p-0 active">
      //             {empdata.length ? (
      //               empdata.map((a) => {
      //                 return (
      //                   <div class="job-item p-4 mb-4">
      //                     <div class="row g-4">
      //                       <div class="col-sm-12 col-md-8 d-flex align-items-center">
      //                         <div class="text-start ps-4">
      //                           <h5 class="mb-3">
      //                             Company Name: {a.companyname}
      //                           </h5>
      //                           <span class="text-truncate me-3">
      //                             <i class="fa fa-map-marker-alt text-primary me-2"></i>
      //                             Email: {a.email}
      //                           </span>
      //                           <span class="text-truncate me-3">
      //                             <i class="far fa-clock text-primary me-2"></i>
      //                             Contact: {a.contact}
      //                           </span>
      //                           <span class="text-truncate me-0">
      //                             <i class="far fa-money-bill-alt text-primary me-2"></i>
      //                             Reg No:{a.regno}
      //                           </span>
      //                         </div>
      //                       </div>
      //                       <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
      //                         <div class="d-flex mb-3">
      //                           <a
      //                             type="button"
      //                             class="btn btn-danger"
      //                             onClick={() => handleRemoveEmp(a._id)}
      //                             href=""
      //                           >
      //                             Remove
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 );
      //               })
      //             ) : (
      //               <tr>no data</tr>
      //             )}
      //           </div>
              
      //           <div id="tab-2" class="tab-pane fade show p-0 active">
      //             {canddata.length ? (
      //               canddata.map((a) => {
      //                 return (
      //                   <div class="job-item p-4 mb-4">
      //                     <div class="row g-4">
      //                       <div class="col-sm-12 col-md-8 d-flex align-items-center">
      //                         <div class="text-start ps-4">
      //                           <h5 class="mb-3">Company Name: {a.name}</h5>
      //                           <span class="text-truncate me-3">
      //                             <i class="fa fa-map-marker-alt text-primary me-2"></i>
      //                             Email: {a.email}
      //                           </span>
      //                           <span class="text-truncate me-3">
      //                             <i class="far fa-clock text-primary me-2"></i>
      //                             Contact: {a.contact}
      //                           </span>
      //                           <span class="text-truncate me-0">
      //                             <i class="far fa-money-bill-alt text-primary me-2"></i>
      //                             Reg No:{a.regno}
      //                           </span>
      //                         </div>
      //                       </div>
      //                       <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
      //                         <div class="d-flex mb-3">
      //                           <button
      //                             type="button"
      //                             class="btn btn-danger"
      //                             onClick={() => handleRemoveCand(a._id)}
      //                           >
      //                             Remove
      //                           </button>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 );
      //               })
      //             ) : (
      //               <h1>no data</h1>
      //             )}
      //           </div>
                
      //           <div id="tab-3" class="tab-pane fade show p-0 active">
      //             {mentordata.length ? (
      //               mentordata.map((a) => {
      //                 return (
      //                   <div class="job-item p-4 mb-4">
      //                     <div class="row g-4">
      //                       <div class="col-sm-12 col-md-8 d-flex align-items-center">
      //                         <div class="text-start ps-4">
      //                           <h5 class="mb-3"> Name: {a.name}</h5>
      //                           <span class="text-truncate me-3">
      //                             <i class="fa fa-map-marker-alt text-primary me-2"></i>
      //                             Email: {a.email}
      //                           </span>
      //                           <span class="text-truncate me-3">
      //                             <i class="far fa-clock text-primary me-2"></i>
      //                             Contact: {a.contact}
      //                           </span>
      //                           {/* <span class="text-truncate me-0">
      //                             <i class="far fa-money-bill-alt text-primary me-2"></i>
      //                             Reg No:{a.regno}
      //                           </span> */}
      //                         </div>
      //                       </div>
      //                       <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
      //                         <div class="d-flex mb-3">
      //                           <a
      //                             type="button"
      //                             class="btn btn-danger"
      //                             onClick={() => handleRemoveMentor(a._id)}
      //                             href=""
      //                           >
      //                             Remove
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 );
      //               })
      //             ) : (
      //               <h1>No Mentor Data</h1>
      //             )}
      //           </div>
                
      //           <div id="tab-4" class="tab-pane fade show p-0 active">
      //             {appmentordata.length ? (
      //               appmentordata.map((a) => {
      //                 return (
      //                   <div class="job-item p-4 mb-4">
      //                     <div class="row g-4">
      //                       <div class="col-sm-12 col-md-8 d-flex align-items-center">
      //                         <div class="text-start ps-4">
      //                           <h5 class="mb-3"> Name: {a.name}</h5>
      //                           <span class="text-truncate me-3">
      //                             <i class="fa fa-map-marker-alt text-primary me-2"></i>
      //                             Email: {a.email}
      //                           </span>
      //                           <span class="text-truncate me-3">
      //                             <i class="far fa-clock text-primary me-2"></i>
      //                             Contact: {a.contact}
      //                           </span>
      //                           <span class="text-truncate me-0">
      //                             <i class="far fa-money-bill-alt text-primary me-2"></i>
      //                             Experience:{a.experience}
      //                           </span>
      //                           <span class="text-truncate me-0">
      //                             <i class="far fa-money-bill-alt text-primary me-2"></i>
      //                             Education:{a.qualification}
      //                           </span>
      //                         </div>
      //                       </div>
      //                       <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
      //                         <div class="d-flex mb-3">
      //                           <a
      //                             type="button"
      //                             class="btn btn-danger"
      //                             onClick={() => handleApprovMentor(a._id)}
      //                             href=""
      //                           >
      //                             Approve
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 );
      //               })
      //             ) : (
      //               <h1>No Approved Mentor data</h1>
      //             )}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div style={{ Height: "200px", margin: "150px" }} >
          
      <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
           <h2 class="accordion-header">
             <button
               class="accordion-button collapsed"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#flush-collapseOne"
               aria-expanded="false"
               aria-controls="flush-collapseOne"
               style={{ backgroundColor:'wheat'}}
             >
              <h3 style={{ colorAdjust:'inherit'}}> View Employeer</h3> 
             </button>
           </h2>
           <div
             id="flush-collapseOne"
             class="accordion-collapse collapse"
             data-bs-parent="#accordionFlushExample"
           >
             <div class="accordion-body">
               {/* customer map start*/}
               <div class="container text-center">
                 <div class="row">
                 {empdata.length ? (
                    empdata.map((a) => {
                      return (
                        <div class="job-item p-4 mb-4">
                          <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                              <div class="text-start ps-4">
                                <h5 class="mb-3">
                                  Company Name: {a.companyname}
                                </h5>
                                <span class="text-truncate me-3">
                                  <i class="fa fa-map-marker-alt text-primary me-2"></i>
                                  Email: {a.email}
                                </span>
                                <span class="text-truncate me-3">
                                  <i class="far fa-clock text-primary me-2"></i>
                                  Contact: {a.contact}
                                </span>
                                <span class="text-truncate me-0">
                                  <i class="far fa-money-bill-alt text-primary me-2"></i>
                                  Reg No:{a.regno}
                                </span>
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                              <div class="d-flex mb-3">
                                <a
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => handleRemoveEmp(a._id)}
                                  href=""
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col">
                       <div class="card" style={{ width: "18rem;" }}>
                         <div class="card-body">
                           <h5 class="card-title">No Employeer to display</h5>
                         </div>
                       </div>
                     </div>
                    
                  )}
                     
                  </div>
               </div>
               {/* customer map end*/}
             </div>
           </div>
         </div>
         <div class="accordion-item">
           <h2 class="accordion-header">
             <button
               class="accordion-button collapsed"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#flush-collapseThree"
               aria-expanded="false"
               aria-controls="flush-collapseThree"
               style={{ backgroundColor:'pink'}}
             >
                <h3 style={{ colorAdjust:'inherit'}}> View Candidate </h3> 
              
             </button>
           </h2>
           <div
             id="flush-collapseThree"
             class="accordion-collapse collapse"
             data-bs-parent="#accordionFlushExample"
           >
             <div class="accordion-body">
               {/* customer map start*/}
               <div class="container text-center">
                 <div class="row">
                 {canddata.length ? (
                canddata.map((a) => {
                  return (
                    <div class="job-item p-4 mb-4">
                      <div class="row g-4">
                        <div class="col-sm-12 col-md-8 d-flex align-items-center">
                          <div class="text-start ps-4">
                            <h5 class="mb-3">Company Name: {a.name}</h5>
                            <span class="text-truncate me-3">
                              <i class="fa fa-map-marker-alt text-primary me-2"></i>
                              Email: {a.email}
                            </span>
                            <span class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              Contact: {a.contact}
                            </span>
                            <span class="text-truncate me-0">
                              <i class="far fa-money-bill-alt text-primary me-2"></i>
                              Reg No:{a.regno}
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                          <div class="d-flex mb-3">
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => handleRemoveCand(a._id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col">
                <div class="card" style={{ width: "18rem;" }}>
                  <div class="card-body">
                    <h5 class="card-title">No Candidate to display</h5>
                  </div>
                </div>
              </div>
                
              )}

                  
                    
                
                    
                  
                 </div>
               </div>
               {/* customer map end*/}
             </div>
           </div>
          
         </div>
         <div class="accordion-item">
           <h2 class="accordion-header">
             <button
               class="accordion-button collapsed"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#flush-collapseTwo"
               aria-expanded="false"
               aria-controls="flush-collapseTwo"
               style={{ backgroundColor:'Grey'}}
             >
                  <h3 style={{ colorAdjust:'inherit'}}> View All Approved Mentor</h3> 
              
             </button>
           </h2>
           <div
             id="flush-collapseTwo"
             class="accordion-collapse collapse"
             data-bs-parent="#accordionFlushExample"
           >
             <div class="accordion-body">
               {/* customer map start*/}
               <div class="container text-center">
                 <div class="row">
                 {mentordata.length ? (
                    mentordata.map((a) => {
                      return (
                        <div class="job-item p-4 mb-4">
                          <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                              <div class="text-start ps-4">
                                <h5 class="mb-3"> Name: {a.name}</h5>
                                <span class="text-truncate me-3">
                                  <i class="fa fa-map-marker-alt text-primary me-2"></i>
                                  Email: {a.email}
                                </span>
                                <span class="text-truncate me-3">
                                  <i class="far fa-clock text-primary me-2"></i>
                                  Contact: {a.contact}
                                </span>
                                {/* <span class="text-truncate me-0">
                                  <i class="far fa-money-bill-alt text-primary me-2"></i>
                                  Reg No:{a.regno}
                                </span> */}
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                              <div class="d-flex mb-3">
                                <a
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => handleRemoveMentor(a._id)}
                                  href=""
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col">
                    <div class="card" style={{ width: "18rem;" }}>
                      <div class="card-body">
                        <h5 class="card-title">No Mentor to display</h5>
                      </div>
                    </div>
                  </div>
                   
                  )}
                    
                  
                 </div>
               </div>
               {/* customer map end*/}
             </div>
           </div>
         </div>
         <div class="accordion-item">
           <h2 class="accordion-header">
             <button
               class="accordion-button collapsed"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#flush-collapseThree"
               aria-expanded="false"
               aria-controls="flush-collapseThree"
               style={{ backgroundColor:'pink'}}
             >
                <h3 style={{ colorAdjust:'inherit'}}> Mentors To be Approved </h3> 
              
             </button>
           </h2>
           <div
             id="flush-collapseThree"
             class="accordion-collapse collapse"
             data-bs-parent="#accordionFlushExample"
           >
             <div class="accordion-body">
               {/* customer map start*/}
               <div class="container text-center">
                 <div class="row">
                 {appmentordata.length ? (
                    appmentordata.map((a) => {
                      return (
                        <div class="job-item p-4 mb-4">
                          <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                              <div class="text-start ps-4">
                                <h5 class="mb-3"> Name: {a.name}</h5>
                                <span class="text-truncate me-3">
                                  <i class="fa fa-map-marker-alt text-primary me-2"></i>
                                  Email: {a.email}
                                </span>
                                <span class="text-truncate me-3">
                                  <i class="far fa-clock text-primary me-2"></i>
                                  Contact: {a.contact}
                                </span>
                                <span class="text-truncate me-0">
                                  <i class="far fa-money-bill-alt text-primary me-2"></i>
                                  Experience:{a.experience}
                                </span>
                                <span class="text-truncate me-0">
                                  <i class="far fa-money-bill-alt text-primary me-2"></i>
                                  Education:{a.qualification}
                                </span>
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                              <div class="d-flex mb-3">
                                <a
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => handleApprovMentor(a._id)}
                                  href=""
                                >
                                  Approve
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col">
                    <div class="card" style={{ width: "18rem;" }}>
                      <div class="card-body">
                        <h5 class="card-title">No Approved Mentors to display</h5>
                      </div>
                    </div>
                  </div>
                    
                  )}
                    
                  
                 </div>
               </div>
               {/* customer map end*/}
             </div>
           </div>
          
         </div>
         
         </div>
 </div>
    );
  } else {
    return (
      <div style={{ minHeight: "400px" }}>
        <h1 style={{ textAlign: "center", position: "relative", top: "150px" }}>
          Please{" "}
          <Link style={{ fontSize: "50px" }} to="/AdminLogin">
            log in{" "}
          </Link>
          to see admin panel{" "}
        </h1>
      </div>
    );
  }
}

export default Adminpage;
