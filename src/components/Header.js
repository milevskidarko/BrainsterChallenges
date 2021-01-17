import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to={"/"}>
      <div
        className="Header border border-bottom"
        style={{ backgroundImage: "url(/images/raw/Girls-Listen-Music_0.jpg)" }}
      >
        <div className="card-overlay">
          <h2 className="text-white">MUSIC-DB</h2>
        </div>
      </div>
    </Link>
  );
}

export default Header;
