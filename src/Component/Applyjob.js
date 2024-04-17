import React, { useState } from "react";
import axiosInstance from "../Baseurl";
import { useParams } from "react-router-dom";


function Applyjob() {
  const { id } = useParams();

  const [register, setRegister] = useState({
    cid: localStorage.getItem("candlogid"),
    jid: JSON.parse(id).jid,
    empid: JSON.parse(id).empid,
  });

  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };

  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/applyJob`, register)
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

  console.log(register);

  return <div>
   
   
                            

   </div>;
}

export default Applyjob;
