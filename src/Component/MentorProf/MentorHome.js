import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import { useNavigate } from "react-router-dom";
import MenCarousel from "./MenCarousel";
import MentorAbout from "./MentorAbout";

function MentorHome() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`mentlogid`) == null) {
      Navigate("/home");
    }
  });

  return (
    <div>
      <MenCarousel />
      <MentorAbout />
    </div>
  );
}

export default MentorHome;
