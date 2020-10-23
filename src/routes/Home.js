import React from "react";
import NavBar from "../components/NavBar";
import "../styles/main_layout.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="section">Latest Updates</section>
      <section className="section">Try out Jason's applications</section>
    </>
  );
}
