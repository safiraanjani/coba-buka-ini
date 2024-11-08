import React, { useEffect, useRef } from 'react';
import birthdaySong from '../assets/lagu.mp3';

function CustomAudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} src={birthdaySong} autoPlay loop />
  );
}

export default CustomAudioPlayer;
