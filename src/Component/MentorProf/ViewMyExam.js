import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { useNavigate } from "react-router-dom";

function ViewMyExam() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`mentlogid`) == null) {
      Navigate("/home");
    }
  });

  const [myexam, setmyexam] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewAllexamsforMentorId/${localStorage.getItem("mentlogid")}`)
      .then((res) => {
        console.log(res, " all mentor exams");
        if (res.data.data != undefined) {
          setmyexam(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ minHeight: "400px",margin:'20px' }}>
      <div className="container">
        <div className="row">
          {myexam.length ? (
            myexam.map((a) => {
              return (
                <div className="col-4">
                  <div class="card"  style={{margin:'20px' }}>
                    <div class="card-body">
                      <h5 class="card-title">{a.title}</h5>
                      <p class="card-text " style={{ color: "black" }}>
                        {a.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col" style={{ margin: "30px 0px" }}>
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <strong role="status">No Exams Added .....</strong>
                    <div
                      class="spinner-border ms-auto"
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewMyExam;
