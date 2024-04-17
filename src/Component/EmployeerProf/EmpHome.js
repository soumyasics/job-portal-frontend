import React, { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom'
import Carousel from "../Carousel";
import EmpCar from "./EmpCar";
import EmpAbout from "./EmpAbout";

function EmpHome() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`emplogid`)==null){
      Navigate('/home')
    }
  })


  return (
    <div>
        
        <EmpCar/>
        <EmpAbout/>
    </div>
  )
}

export default EmpHome