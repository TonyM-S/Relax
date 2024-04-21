import React, { useState, useEffect, useRef } from 'react';
import Slider from '@mui/material/Slider';
import './AudioPlayer.css';

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef(new Audio(audioUrl));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    audioRef.current.volume = volume / 100; 
    audioRef.current.loop = true;
  }, [volume]);

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => {
      const isNowPlaying = !prevIsPlaying;
      if (isNowPlaying) {
        audioRef.current.play();
        window.dispatchEvent(new CustomEvent('audioPlaying', { detail: { isPlaying: true, audioUrl } }));
      } else {
        audioRef.current.pause();
        window.dispatchEvent(new CustomEvent('audioPlaying', { detail: { isPlaying: false, audioUrl } }));
      }
      return isNowPlaying;
    });
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div className="audio-player">
      <button onClick={togglePlayPause} className="play-pause-btn">
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <Slider
        value={volume}
        onChange={handleVolumeChange}
        aria-labelledby="input-slider"
        valueLabelDisplay="auto"
        min={0}
        max={100}
        sx={{
          width: 100,
          color: '#474747',
          '& .MuiSlider-thumb': {
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 6px rgba(47, 47, 47, 0.3)`, 
            },
            '&.Mui-active': { 
              boxShadow: `0px 0px 0px 12px rgba(47, 47, 47, 0.3)`,
            }
          },
          '& .MuiSlider-track': {
            backgroundColor: '#474747', 
          },
          '& .MuiSlider-rail': {
            opacity: 0.5,
          },
        }}
      />
    </div>
  );
};

export default AudioPlayer;
