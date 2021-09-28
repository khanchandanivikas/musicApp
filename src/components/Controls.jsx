import React from "react";
import "../style/controls.css";

const Controls = (props) => {
  return (
    <div>
      <button className="btn" onClick={() => props.SkipSong(false)}><i className="fas fa-backward"></i></button>
      <button className="btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
        {props.isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
      </button>
      <button className="btn" onClick={() => props.SkipSong()}><i className="fas fa-forward"></i></button>
    </div>
  );
};

export default Controls;
