import React from "react";
import { useState, useRef, useEffect } from "react";
import Details from "./Details";
import Controls from "./Controls";
import "../style/player.css";

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div className="player">
      <h2>Playing Now</h2>
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
        controls
      ></audio>
      <p>
        <strong>
          Next up: {props.songs[props.nextSongIndex].title} By:{" "}
          {props.songs[props.nextSongIndex].artist}
        </strong>
      </p>
    </div>
  );
};

export default Player;
