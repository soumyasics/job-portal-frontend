import React, { useEffect, useState } from "react";
import CandCaro from "./CandCaro";
import { useNavigate } from "react-router-dom";
import CandAbout from "./CandAbout";
import ChartCand from "./Chart";



function CandHome() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/home')
    }
  })
  return (
    <div>
      <CandCaro />
      <CandAbout />
      <ChartCand />
    
    
    
    </div>
  );
}

export default CandHome;
