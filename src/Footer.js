import React from "react";
import { data, socialItem } from "./Data";

function Footer() {
  const renderCard = (card, i) => {
    return (
      <div
        key={i}
        className="col-md-3 border border-left-0 border-top-0 border-bottom-0"
      >
        <h2>{card.title}</h2>
        <div className="row">
          <div className="col">
            {card.list.map((el, index) => (
              <ul className="navbar-nav" key={index}>
                <li>
                  <a href="">{el}</a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="Footer">
      <div className="row my-5 mx-2">
        <div className="col-md-3 border border-left-0 border-top-0 border-bottom-0">
          <h2>SOCIAL SHARE</h2>
          <div className="row">
            <div className="col">
              {socialItem.map((el, index) => (
                <a href="" className="social" key={index}>
                  <span>
                    <i className={el}></i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {data.map((item, index) => renderCard(item, index))}
      </div>
    </div>
  );
}
export default Footer;
