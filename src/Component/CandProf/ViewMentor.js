import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../../Baseurl";
import img1 from '../img/star.jpg'

function Viewmentor() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`candlogid`) == null) {
      Navigate("/home");
    }
  });
  const id = localStorage.getItem("candlogid");

  const [mentdata, setmentdata] = useState([]);
  const [mymentors, setmymentors] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewunSubscriptionsByCId/${localStorage.getItem("candlogid")}`)
      .then((res) => {
        console.log(res, "viewmnt");
        if (res.data.data) {
          setmentdata(res.data.data);
        } else {
          setmentdata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewSubscriptionsByCId/${localStorage.getItem("candlogid")}`)
      .then((res) => {
        console.log(res, " all my subs");
        if (res.data.data != undefined) {
          setmymentors(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const subscribeMentor = (mid) => {
    console.log(mid, "mid");
    axiosInstance
      .post(`/subscribeMentor`, {
        cid: localStorage.getItem("candlogid"),
        mid: mid,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("subscribed");
          window.location.reload(false);
        }
      });
  };
  return (
    <div>
      <div class="alert alert-primary" role="alert">
        <h1> All mentors</h1>
      </div>
      <div style={{ minHeight: "200px", margin: "20px" }}>
        {/* job map start*/}
        <div class="container text-center">
          <div class="row">
            {mentdata.length ? (
              mentdata.map((a) => {
                return (
                  <div className="col-4" style={{margin:'20px 0px'}}>
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-text" style={{ color: "black" }}>
                          Name: {a.name}
                        </h4>
                        <p class="card-text" style={{ color: "black" }}>
                          Email: {a.email}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Qualification:{a.qualification}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Experience:{a.experience}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Rating:{a.rating}<img src={img1} style={{maxHeight:"1rem",marginBottom:"0.2rem"}}/>
                        </p>

                        <button
                          class="btn btn-primary mb-5"
                          onClick={() => {
                            subscribeMentor(a._id);
                          }}
                        >
                          {" "}
                          Subscribe
                        </button>
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
        {/* job map end*/}
      </div>
    </div>
  );
}

export default Viewmentor;
