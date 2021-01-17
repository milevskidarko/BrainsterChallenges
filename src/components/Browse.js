import React from "react";
import artists from "../db";
import BrowseArtist from "./BrowseArtist";

class Browse extends React.Component {
  state = {
    artists: artists,
  };

  render() {
    return (
      <div className="row m-0 bg-light">
        <div className="col-lg-10 offset-lg-1">
          <div className="Browse text-center">
            <h2 className="py-3 BrowseTitle">Browse the artist</h2>
            {this.state.artists.map((el, index) => {
              return (
                <div key={index}>
                  <BrowseArtist cover={el.cover} name={el.name} id={el.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Browse;
