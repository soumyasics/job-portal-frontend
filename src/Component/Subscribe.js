import React, { useEffect, useState } from 'react'

import axiosInstance from '../Baseurl';
import { Link, json, useNavigate } from 'react-router-dom';

function Subscribe() {
    const[subscribe,setsubscribe]=useState([])
    const Navigate = useNavigate()
    useEffect(() => {
        axiosInstance
          .post(`/viewSubscriptionsByCId/${localStorage.getItem("candlogid")}`)
          .then((res) => {
            console.log(res);
            setsubscribe(res.data.data);
          })
          .catch((res) => {
            console.log(res);
          });
        
      }, []);
      const handleUnsub = (id) => {
        console.log(id);
        axiosInstance
          .post(`/unsubscribeMentorByCId/${id}`)
          .then((res) => {
            console.log(res,"unsubscribe");
            if (res.data.status == 200) {
              alert("Unsubscribe");
    
              
            } else {
              
            }
          //  Navigate(`/ViewMentor`)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      if (localStorage.getItem("candlogid")!=null) 

  return (
    <div>
         <>
    
    <div style={{ minHeight: "300px", margin: "15px 0px" }}>
      <div class="container text-center">
        <div class="row" >
          {/* subscribed values */}
          {subscribe.map((a) => {
            return (
              <div class="col-3" style={{margin:"10px 30px"}}>
                <div class="card" style={{ width: "300px", margin: "auto" }}>
                  {/* <img
                    src={`http://hybrid.srishticampus.in:4022//${a.thumbnail.originalname}`}
                    class="card-img-top"
                    alt="..."
                    height="240px"
                  /> */}
                  <div class="card-body">
                    <h5 class="card-title">{a.title}</h5>
                    <p class="card-text" style={{color:'black'}}>Name: {a.mid.name}</p>
                    <p class="card-text" style={{color:'black'}}>Email: {a.mid.email}</p>

                    
                    <Link  class="btn btn-danger" style={{marginLeft:'2px'}} onClick={()=>handleUnsub(a._id)}>
                      UnSubsribe
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    </div>
  </>
    </div>
  )
}

export default Subscribe