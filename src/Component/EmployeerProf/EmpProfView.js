import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Baseurl';

import img4 from '../img/user-verification-symbol-for-interface.png'


function EmpViewProf() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`emplogid`)==null){
      Navigate('/home')
    }
  })

    const [emp, setemp] = useState({});
    useEffect(()=>{
      // const storedUser = localStorage.getItem("users");
      const id=localStorage.getItem("emplogid")
      console.log(id)
  ;
  
  
  
    axiosInstance.post(`/viewemployerById/${id}`)
    .then((res)=>{
      setemp(res.data.data)
      
    })
  
    },[])
    useEffect(()=>{
        console.log(emp);
    })
  return (
    <div>
           <div>
       
         <section class="vh-100" style={{backgroundColor:"#f4f5f7;"}}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-3" style={{borderRadius: ".5rem;"}}>
                <div class="row g-0">
                  <div
                    class="col-md-4 gradient-custom text-center text-white"
                    style={{borderTopLeftRadius:" .5rem;", borderBottomLeftRadius: ".5rem;"}}
                  >
                    <img
                      src={img4}
                      alt="Avatar"
                      class="img-fluid my-5"
                      style={{width: "80px;"}}
                    />
                   <h5 style={{color: "black",fontFamily:'cursive',fontWeight:'700'}}>{emp.companyname}</h5> 
                  
                    <i class="far fa-edit mb-5"></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <h6 style={{color: "violet",fontFamily:'cursive',fontWeight:'700'}}>Employeer Profile</h6>
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email</h6>
                          <p class="text-muted">{emp.email}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Contact</h6>
                          <p class="text-muted">{emp.contact}</p>
                        </div>
                      </div>
                 
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>City</h6>
                          <p class="text-muted">{emp.city}</p>
                        </div>
                        
                        
                      </div>
                     
                    <Link to='/EmpProfEdit'><button type='submit' class='btn btn-danger h-23 w-100 py-2'>Edit</button></Link>
                
                    </div>
                  </div>
                      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default EmpViewProf