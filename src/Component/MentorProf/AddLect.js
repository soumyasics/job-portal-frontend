import React from "react";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import axiosInstance from "../../Baseurl";


function AddLectt() {

  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`mentlogid`)==null){
      Navigate('/home')
    }
  })



  const id = localStorage.getItem("mentlogid");
  const [register, setRegister] = useState({
    title: "",
    content: "",
    category: "",
    date: "",
    mid: id,
    thumbnail: null,
  });

  const navigate = useNavigate();
  const changehandleSubmit = (a) => {
    if (a.target.name == "thumbnail") {
      setRegister({ ...register, thumbnail: a.target.files[0] });
    } else {
      setRegister({ ...register, [a.target.name]: a.target.value });
    }
  };

  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post("/addLecture", register, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Add Lecture Sucessfully...");
          // navigate("/Customer");
          console.log(result.data.data._id);
          navigate(`/UploadVideo/${result.data.data._id}`);
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
        style={{ minHeight: "300px",width:"800px", margin: "24px 294px " }}
      >
        <form id="survey-form" onSubmit={submitt}>
          <h3> ADD LECTUTRE</h3>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="name"
              placeholder="title"
              name="title"
              //   value={register.title}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="content"
              placeholder="Contnet"
              name="content"
              //   value={register.content}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="city"
              placeholder="City"
              name="city"
              //   value={register.city}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="date"
              id="date"
              placeholder="Contact"
              name="date"
              //   value={register.date}
              onChange={changehandleSubmit}
            />
          </div>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="text"
              id="category"
              placeholder="Category"
              name="category"
              //   value={register.category}
              onChange={changehandleSubmit}
            />
          </div>
          <div class="form-group d-flex">
            <input
              class="form-control"
              type="file"
              name="thumbnail"
              //   value={register.thumbnail}
              onChange={changehandleSubmit}
            />
          </div>

          <button type="submit" class="btn btn-primary mb-5" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddLectt;
