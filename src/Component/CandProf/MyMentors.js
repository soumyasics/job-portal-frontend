import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import {Link, useNavigate} from 'react-router-dom'

function MyMentors() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/home')
    }
  })
  const [mentors, setmentors] = useState("");
 
  useEffect(() => {
    axiosInstance
      .post(`/viewSubscriptionsByCId/${localStorage.getItem("candlogid")}`)
      .then((res) => {
        console.log(res, " all my subs");
        if (res.data.data != undefined) {
          setmentors(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const unsub= (id) => {
    axiosInstance.post(`/unsubscribeMentorByCId/${id}`)
    .then((res) => {
      console.log(res, " unsubs");
      alert('Unsubscribed successfully')
      window.location.reload()
     
    })
    .catch((err) => {
      console.log(err);
    });

  }

  return (
    <div>
        <div class="alert alert-primary" role="alert">
        <h1> My Mentors</h1>
</div>
      <div className="container text-center">
        <div className="row">
          {mentors.length ? (
            mentors.map((a) => {
              return (
                <div className="col-4"style={{margin:'20px 0px'}}>
                  <div class="card" >
                    <div class="card-body">
                      <h4 class="card-text" style={{ color: "black" }}>
                        Name : {a.mid.name}
                      </h4>
                      <p class="card-text" style={{ color: "black" }}>
                        Email : {a.mid.email}
                      </p>
                      <p class="card-text" style={{ color: "black" }}>
                        Qualification : {a.mid.qualification}
                      </p>
                      <p class="card-text" style={{ color: "black" }}>
                        Experience : {a.mid.experience} years
                      </p>

                      <hr/>

                      <Link to={`/viewLectureofmentor/${a.mid._id}`} className="btn btn-primary"> View Lectures</Link>
                     
                      <Link style={{margin:'5px' }} to={`/ViewExamofMentor/${a.mid._id}`} className="btn btn-primary"> View Exams</Link>
                      <hr/>
                      <button  onClick={()=>{unsub(a._id)}} className="btn btn-primary">UnSubscribe</button>
                      <Link  style={{margin:"5px"}}to={`/AddRating/${a.mid._id}`} class="btn btn-primary">
                      Rating Now
                    </Link>
                      


{/* /a.-id  - button */}
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

export default MyMentors;
