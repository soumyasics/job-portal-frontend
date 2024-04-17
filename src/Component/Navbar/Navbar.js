import React from "react";
import EmpNav from "./EmpNav";
import CandNav from "./CandNav";
import MentorNav from "./MentorNav";
import Nav from "./Nav";
import AdminNav2 from "./AdminNav2";

function Navbar({ auth }) {
  if (auth == 0) {
    return <Nav />;
  } else if (auth == 1) {
    return <EmpNav />;
  } else if (auth == 2) {
    return <CandNav />;
  } else if (auth == 3) {
    return <MentorNav />;
  }
  else if (auth == 4) {
    return <AdminNav2 />;
  }
}

export default Navbar;
