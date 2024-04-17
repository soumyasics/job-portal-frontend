import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../Baseurl";

function ViewVideo() {

  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('mentlogid')==null){
      Navigate('/home')
    }
  },[])


  const [video, setvideo] = useState({ video: { filename: "" } });
  const videoid = useParams();
  useEffect(() => {
    console.log(videoid);
    axiosInstance
      .post(`/viewLectureById/${videoid.videoid}`)
      .then((res) => {
        console.log(res, "viewvideo");
        setvideo(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  useEffect(() => {
    console.log(`http:localhost:4006/${video.video.filename}`, "video");
    console.log(video.video.filename);
  });
  return (
    <div>        
      <Link className="btn btn-primary" to='/viewLect' style={{margin:"10px"}}> Back to Letures</Link>
      <div className="videodiv">
        <video width="100%" height="440" controls >
          <source src="movie.mp4" type="video/mp4" />
          <source src={`http://localhost:4022/${video.video.filename}`} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default ViewVideo;
