import React from "react";
import axiosInstance from "../../Baseurl";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function ViewMentorLectures() {

  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/home')
    }
  })


  const { id } = useParams();
  const [lectures, setlectures] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewLectureByMentor/${id}`)
      .then((res) => {
        console.log(res, " all mentor lectures");
        if (res.data.data != undefined) {
          setlectures(res.data.data);
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
          {lectures.length ? (
            lectures.map((a) => {
              return (
                <div className="col-4">
                  <div class="card">
                    <img
                      src={`http://localhost:4022/${a.thumbnail.filename}`}
                      width={`100%`}
                      height={`200px`}
                    />
                    <div class="card-body">
                      <h4 class="card-text" style={{ color: "black" }}>
                        Title : {a.title}
                      </h4>
                      <p class="card-text" style={{ color: "black" }}>
                        Category : {a.category}
                      </p>
                      <p class="card-text" style={{ color: "black" }}>
                        Content : {a.content}
                      </p>

                      <Link className="btn btn-primary" to={`http://hybrid.srishticampus.in:4022/${a.video.filename}`}>View Lecture</Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">No Mentors to display</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewMentorLectures;
