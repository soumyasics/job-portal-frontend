import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewCandExam() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`candlogid`) == null) {
      Navigate("/home");
    }
  });

  const { id } = useParams();
  const [myexam, setmyexam] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewAllexamsforMentorId/${id}`)
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
    <div>
      <div className="container">
        <div className="row">
          {myexam.length ? (
            myexam.map((a) => {
              return (
                <div className="col-4">
                  <div class="card">
                    <div class="card-body">
                      <h4> Mentor : {a.mid.name}</h4>
                      <h5 class="card-title">Exam : {a.title}</h5>
                      <p class="card-text " style={{ color: "black" }}>
                        {a.description}
                      </p>
                      <Link
                        className="btn btn-primary"
                        to={`/AttendExam/${a._id}`}
                      >
                        {" "}
                        Attend Exam{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12" style={{ minHeight: "300px", margin:'30px' }}>
              <div class="card">
                <div class="card-body">
                  <h1>no exams to display</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewCandExam;
