import React from "react";
import { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import axiosInstance from "../Baseurl";

function UploadVideo() {
  const videoid = useParams()
  const id = localStorage.getItem("mentlogid");
  const [register, setRegister] = useState({
    video: null,
  });

  const navigate = useNavigate();
  const changehandleSubmit = (a) => {
    if (a.target.name == "video") {
      setRegister({ ...register, video: a.target.files[0] });
    } else {
      setRegister({ ...register, [a.target.name]: a.target.value });
    }
  };

  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/uploadVideoLecture/${videoid.videoid}`, register, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          navigate("/AddLect");
          alert("Add Video Sucessfully...");
        } else {
          alert("Failed to Add");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  console.log(register);

  return (
    <div>
      <div
        class="container"
        style={{ minHeight: "300px", margin: "34px 4rem" }}
      >
        <form id="survey-form" onSubmit={submitt}>
          <h3> ADD VIDEO</h3>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="file"
              name="video"
              //   value={register.thumbnail}
              onChange={changehandleSubmit}
            />
          </div>
          {/* <Link to="/UploadVideo">
            <button
              class="btn btn-primary mb-5"
          
              style={{ backgroundColor: "pink" }}
            >
              {" "}
              Upload Video
            </button>
          </Link> */}

          <button type="submit" class="btn btn-primary mb-5" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default UploadVideo;
