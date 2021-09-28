import React from "react";
import "../style/details.css";

const Details = (props) => {
  return (
    <div className="details">
      <img className="cover" src={props.song.img_src} alt="art cover" />
      <h3>{props.song.title}</h3>
      <h4>{props.song.artist}</h4>
    </div>
  );
};

export default Details;
