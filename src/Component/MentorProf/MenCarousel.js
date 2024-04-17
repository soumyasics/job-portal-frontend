import React from "react";
import img2 from '../img/carousel-6.jpg';
// import img1 from './img/carousel-2.jpg'

function MenCarousel() {
  return (
    <div >
      <div class="container-fluid p-0">
        <div class="owl-carousel header-carousel position-relative" >
          <div class="owl-carousel-item position-relative">
            <img class="img-fluid" src={img2} alt="" />
            <div
              class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(43, 57, 64, .5);"}}
            >
              {/* <div class="container">
                <div class="row justify-content-start">
                  <div class="col-10 col-lg-8">
                    <h6
                      class="display-3 animated slideInDown mb-2"
                      style={{
                        fontFamily: "Times New Romanive",
                        color: "black",
                      }}
                    >
                      {" "}
                      Find Your Dream Job
                    </h6>
                    <p
                      class="fs-5  mb-4 pb-2"
                      style={{ fontFamily: "Times New Roman", color: "Black" }}
                    >
                      "Ready to take the next step? Join our job portal
                      community today and embark<br/> on a journey towards a brighter
                      future."
                    </p>
                  
                  </div>
                </div>
               
              </div> */}
              
              
            </div>
            
          </div>
          
        </div>
      </div>
      
    </div>
    
  );
}

export default MenCarousel;