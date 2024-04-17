import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


import axiosInstance from "./Baseurl";

function AddRating() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("candlogid") == null) {
      navigate("/home");
    }
  });
    const {id} = useParams()

  const [rating, setrating] = useState(0);
  const changehandleSubmit = (a) => {
    setrating(a.target.value);
  };
  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    console.log(rating);
    axiosInstance
    .post(`/addRating/${id}`,{rating:rating} )
    .then((res) => {
      console.log(res, "rating");
      if (res.data.status == 200) {
        alert("Rate Sucessfully");
      }
      //  Navigate(`/ViewMentor`)
    })
    .catch((err) => {
      console.log(err);
    });
   
  };
 


  return (
    <div>
      
      <div
        class="container"
        style={{ minHeight: "100px", margin: "34px 4rem" }}
      >
        <form
          id="survey-form"
          onSubmit={submitt}
          style={{
            width: "18rem",
            marginLeft: "23rem",
            backgroundColor: "wheat",
          }}
        >
          <h3> ADD RATING</h3>

          <div class="form-group d-flex">
            <input
              class="form-control"
              type="range"
              min="0"
              max='5'
              id="rate"
              style={{ width: "12rem" }}
              name="newRate"
              //   value={register.title}
              onChange={changehandleSubmit}
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary mb-5"
            id="submit"
            style={{ width: "12rem", marginTop: "0.1rem" }}
            
          >
            Rate
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

export default AddRating;
