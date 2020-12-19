import React from "react";
import logo from "./logo.png";
import { navItems, buttonsNav } from "./Data";

function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <a className="navbar-brand ml-2" href="#">
          <img src={logo} alt="logo" id="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            {navItems.map((el, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href="#">
                  {el}
                </a>
              </li>
            ))}
          </ul>
          <div>
            {buttonsNav.map((el, index) => (
              <a className="nav-a mr-3" href="" key={index}>
                <i className={el}></i>
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="row mx-2">
        <div className="col border border-left-0 border-right-0 py-4">
          <h1>BIKES</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
