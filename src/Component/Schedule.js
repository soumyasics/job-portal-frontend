import React, { useState } from "react";

import axiosInstance from "../Baseurl";
import { useParams } from "react-router-dom";

function Schedule() {
    const { id } = useParams();
    console.log(JSON.parse(id));
  const [register, setRegister] = useState({
    cid:JSON.parse(id).cid,
    jid:JSON.parse(id).jid,
    empid: localStorage.getItem("emplogid"),
    appId: JSON.parse(id).appId,
    date: "",
    type: "",
    time: "",
    venue: "",
    comments: "",
  });
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/scheduleInterview/${id}`, register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Schedule Successfully...");
        } else {
          alert("Failed to Book");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
    };
  return (
    <div>
     

      <div
        class="container"
        style={{ minHeight: "300px", margin: "34px 4rem" }}
      >
        <form id="survey-form" onSubmit={submitt}>
          <h3> Schedule Interviews</h3>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="date"
              id="date"
              name="date"
              //   value={register.content}
              onChange={changehandleSubmit}
            />
          </div>


          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="type"
              placeholder="type"
              name="type"
              //   value={register.category}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="time"
              id="time"
             
              name="time"
              //   value={register.category}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="venue"
              placeholder="venue"
              name="venue"
              //   value={register.category}
              onChange={changehandleSubmit}
            />
          </div>
         

          <div class="form-group">
            <h5 class="mb-3"> Comments</h5>
            <textarea
              class="w-100"
              rows="4"
              cols="50"
              name="comments"
              value={register.comments}
              onChange={changehandleSubmit}
            >
            Comments
            </textarea>
          </div>

          <button type="submit" class="btn btn-primary mb-5" id="submit">
            Scheduled
          </button>
          {/* <Link to="/UploadVideo">
      <button
        class="btn btn-primary mb-5"
    
        style={{ backgroundColor: "pink" }}
      >
        {" "}
        Upload Video
      </button>
    </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Schedule;
