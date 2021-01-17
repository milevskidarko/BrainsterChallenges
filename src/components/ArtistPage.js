import Albums from "./Albums";
import artists from "../db";

const ArtistPage = (props) => {
  let currentArtist = artists[props.match.params.id - 1];

  return (
    <div className="row">
      <div className="col-lg-8 offset-lg-2 ArtistPage">
        <img src={`/images/covers/${currentArtist.cover}.jpg`} alt="img" />
        <h5 className="py-2">{currentArtist.name}</h5>
        <p>{currentArtist.bio}</p>
        <Albums albums={currentArtist.albums} />
      </div>
    </div>
  );
};

export default ArtistPage;
