import React from "react";
import NavBar from "../components/NavBar";
import "../styles/main_layout.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="body-wrapper">
        <div>
          <section className="section">Latest Updates</section>
          <section className="section">Try out Jason's applications</section>
        </div>
        <aside className="posts">Posts</aside>
      </div>
    </>
  );
}
