import React, { useState } from 'react'
import axiosInstance from '../Baseurl';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';


function ForgetpassEmp() {
    const[forget,setforget]=useState([])
    const changehandleSubmit  = (e)=> {
        setforget({...forget,[e.target.name]:e.target.value})
        
      }
      const navigate=useNavigate();
    const onSubmit=(e)=>{
        console.log('reset');
        e.preventDefault()
         
        axiosInstance.post("/forgotpwdEmployer",forget)
        .then((response)=>{
            console.log(response);
            
            if (response.status===200) {
                alert("Updated Successfully")
                navigate("/Employeerlogin")
            }else{
                alert("Login Failed... Check your email/password")
            }
        })
        .catch((err)=>{
            console.log('error',err);
            toast.error("Login Failed... Check your email/password")  
              })

    }
  return (
    <div>
      
        <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                 FORGET PASSWORD
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form onSubmit={onSubmit}>
                            <div class="form-group">
                                <label class="form-control-label"> EMAIL</label>
                                <input 
                                name='email'
                                type="email" 
                                class="form-control"
                                value={forget.email}
                                onChange={changehandleSubmit}
                                required/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input 
                                name='password'
                                type="password" 
                                class="form-control" 
                                value={forget.password}
                                 onChange={changehandleSubmit}
                                 required
                                />
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                  
                                </div>
                                <div class="col-lg-7 login-btm login-button">
                                   
                                 <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                                
                               
                                </div>
                                </div>
                            
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>





    </div>

    </div>
  )
}

export default ForgetpassEmp