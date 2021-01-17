import React from "react";

class Albums extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.albums.map((el, index) => (
          <div className="col-md-4 pb-5" key={index}>
            <img src={`/images/albums/${el.cover}.jpg`} alt="img" />
          </div>
        ))}
      </div>
    );
  }
}

export default Albums;
