import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Baseurl'
import { useNavigate } from 'react-router-dom'

function MyExams() {
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`candlogid`)==null){
      Navigate('/home')
    }
  })
    const [myexams,setmyexams] = useState([])
    useEffect(()=>{
        console.log(localStorage.getItem('candlogid'));
        axiosInstance.post(`/viewAnswersforCandidateId/${localStorage.getItem(`candlogid`)}`)
        .then((res)=>{console.log(res)
        if(res.data.data!=undefined){
            setmyexams(res.data.data)
        }})
        .catch((err)=>{console.log(err);})
    },[])
  return (
    <div >
       <div class="alert alert-primary" role="alert">
        <h1> Attended Exams</h1>
</div>
    <div className="container text-center">
      <div className="row">
        {myexams.length ? (
          myexams.map((a) => {
            return (
              <div className="col-4">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-text" style={{ color: "black" }}>
                      Exam name : {a.examid.title}
                    </h4>
                    <h6> Mentor : {a.mid.name}</h6>

                    <hr/>
                    <h3> Marks obtained : {a.total} / 10</h3>
                   

                    <hr/>

                   

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
  )
}

export default MyExams