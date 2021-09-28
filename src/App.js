import "./App.css";
import { useState, useEffect } from "react";
import Player from './components/Player';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  const [songs] = useState([
    {
      title: "Dance Monkey",
      artist: "Tones & I",
      img_src: "./images/monkey.jpg",
      src: "./music/monkey.mp3",
    },
    {
      title: "Perfect",
      artist: "Ed Sharren",
      img_src: "./images/perfect.jpg",
      src: "./music/perfect.mp3",
    },
    {
      title: "Shape Of You",
      artist: "Ed Sharren",
      img_src: "./images/shape.jpg",
      src: "./music/shape.mp3",
    },
  ]);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
