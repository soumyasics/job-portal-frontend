import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Baseurl';
import Pic5 from '../img/user-verification-symbol-for-interface.png'



function CandEditProf() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`emplogid`)==null){
      Navigate('/home')
    }
  })

  
    const [value,setValue] = useState({});
    const navigate=useNavigate();
  
  
    const id=localStorage.getItem("emplogid")
  
  
    useEffect(() => {
      axiosInstance.post(`/viewemployerById/${id}`)
      .then((res)=>{
      setValue(res.data.data)
      
    })
    }, []);
  
    const updatefcn=(e)=>{
      e.preventDefault();
  
      axiosInstance.post(`/editemployerById/${id}`,value)
      .then((response)=>{
        console.log(response);
        if (response.data.status==200) {
          alert('Profile Updated')
          navigate('/EmpProfView')
        }else{
          alert('Updation Failed')
        }
  
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  
    const changefn = (e)=>{
  setValue({...value, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        console.log(value);

    })
  return (
    <div>
      
         <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src={Pic5}
              />
              <span class="font-weight-bold"style={{color: "black",fontFamily:'cursive',fontWeight:'700'}}>{value.name}</span>
              <span class="text-black-50" style={{color: "brown",fontFamily:'cursive',fontWeight:'700'}}>{value.email}</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Employeer Profile Edit</h4>
              </div>
              <form onSubmit={updatefcn}>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Name</label>
                  <input
                    type="text"
                    class="form-control"
                 
                    value={value.companyname}
                    name='name'
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Contact</label>
                  <input
                    type="number"
                    name="contact"
                    class="form-control"
                    value={value.contact}
                  
                    onChange={changefn}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Email</label>
                  <input
                    type="email"
                    class="form-control"  
                    value={value.email}
                    name="email"
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">City</label>
                  <input
                    type="text"
                    class="form-control"
                    name="specialization"
                    value={value.city}
                  />
                </div>
                
              
              
              <button type='submit' class='btn btn-primary h-23 w-100 py-2'>Update</button>
              <hr />
                  <Link
                    to="/EmpProfView"
                    type="submit"
                    class="btn btn-success  h-23 w-100 py-2"
                  >
                    Back
                  </Link>
                
              </div>
             
              </form>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CandEditProf