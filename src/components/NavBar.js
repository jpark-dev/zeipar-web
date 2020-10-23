import React from "react";
import "../styles/nav.css";

export default function NavBar() {
  return (
    <>
      <div className="nav-wrapper">
        <div className="titles">Logo</div>
        <div className="titles">Profile</div>
        <div className="titles">Portfolio</div>
        <div className="titles">Translations</div>
        <div className="titles">Others</div>
      </div>
    </>
  );
}
