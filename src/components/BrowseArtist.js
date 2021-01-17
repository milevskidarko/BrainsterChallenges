import React from "react";
import { Link } from "react-router-dom";

function BrowseArtist(props) {
  return (
    <div className="row m-0 bg-light">
      <div className="col-md-10 offset-md-1">
        <div className="BrowseArtist text-center">
          <Link to={`/artistPage/${props.id}`}>
            <div className="mb-4">
              <img src={`/images/covers/${props.cover}.jpg`} alt="img" />
              <p className="p-2">{props.name}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BrowseArtist;
