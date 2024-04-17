import React, { useEffect, useState } from "react";
import axiosInstance from "../Baseurl";

import { Link } from "react-router-dom";

function ViewLect() {
  const [lect, setlect] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewLectureByMentor/${localStorage.getItem("mentlogid")}`)
      .then((res) => {
        console.log(res);
        if (res.data.data != null) {
        setlect(res.data.data);
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  if (localStorage.getItem("mentlogid") != null)
    return (
      <>
        <div style={{ minHeight: "300px", margin: "15px 0px" }}>
          <div class="container text-center">
            <div class="row">
              {lect.length ? (
                lect.map((a) => {
                  return (
                    <div class="col-3" style={{ margin: "10px 30px" }}>
                      <div
                        class="card"
                        style={{ width: "300px", margin: "auto" }}
                      >
                        <img
                          // src={`http://hybrid.srishticampus.in:4022/${a.thumbnail.originalname}`}
                          src={`http://localhost:4022/${a.thumbnail.originalname}`}

                          class="card-img-top"
                          alt="..."
                          height="240px"
                        />
                        <div class="card-body">
                          <h5 class="card-title">{a.title}</h5>
                          <p class="card-text" style={{ color: "black" }}>
                            Date: {a.date}
                          </p>
                          <p class="card-text" style={{ color: "black" }}>
                            Content: {a.content}
                          </p>

                          <Link
                            to={`/ViewVideo/${a._id}`}
                            class="btn btn-primary"
                          >
                            View Video
                          </Link>
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
                        <strong role="status">No Lect Added .....</strong>
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
      </>
    );
}

export default ViewLect;
