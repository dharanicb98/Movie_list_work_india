import React from "react";

function CastActorCard({ image, name, character }) {
  return (
    <div className="movie-actors">
      <img
        alt={name}
        src={`https://image.tmdb.org/t/p/w500${image}`}
        className="movie-content-img"
      />
      <div className="actor-name">
        <p>{name}</p>
        <p>Character: {character}</p>
      </div>
    </div>
  );
}

export default CastActorCard;
