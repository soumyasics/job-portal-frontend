import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";

function MySubs() {
  const [mysub, setmysub] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewMysubscriptions/${localStorage.getItem("mentlogid")}`)
      .then((res) => {
        console.log(res);
        if (res.data.data != undefined) {
          setmysub(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{minHeight:"400px", margin:"40px"}}>
      <div className="container">
        <div className="row">
          {mysub.length
            ? mysub.map((a) => {
                return <div className="col-4"> <div class="card">
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                  <h5 class="card-title">Candidate Name : {a.cid.name}</h5>
                  <p style={{color:"black"}}  class="card-text">Contact : {a.cid.contact}</p>
                  <p style={{color:"black"}} class="card-text">Email : {a.cid.email}</p>           
                </div>
              </div></div>;
              })
            : <h1>No Subscribers Till Now !!!! </h1>}
        </div>
      </div>
    </div>
  );
}

export default MySubs;
