import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row" id="cards">
            {this.props.cards.map((card, index) => (
              <div
                className="col-md-3 col-sm-6 mx-3 my-3 px-0 item"
                key={index}
              >
                <div className="card item-card card-block">
                  <div className="p-3">
                    <img
                      className="card-img-top p-4"
                      src={`/images/${card.image}.png`}
                      alt=""
                      className="imgBike"
                    />
                  </div>
                  <div className="card-body bg-warning">
                    <h3 className="item-card-title">{card.name}</h3>
                    <p className="card-text">{card.price} $</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;