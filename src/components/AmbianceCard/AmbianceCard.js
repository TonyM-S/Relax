import React, { useEffect, useState } from 'react';
import './AmbianceCard.css';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const AmbianceCard = ({ ambiance }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleAudioPlaying = (event) => {
      if (event.detail.audioUrl === ambiance.audioUrl) {
        setIsPlaying(event.detail.isPlaying);
      }
    };

    window.addEventListener('audioPlaying', handleAudioPlaying);

    return () => {
      window.removeEventListener('audioPlaying', handleAudioPlaying);
    };
  }, [ambiance.audioUrl]);


  return (
    <div className={`ambiance-card ${isPlaying ? 'playing' : ''}`}>
      <img src={ambiance.imageUrl} alt={ambiance.name} className="ambiance-image"/>
      <h2 className="ambiance-name">{ambiance.name}</h2>
      <AudioPlayer audioUrl={ambiance.audioUrl} />
    </div>
  );
};

export default AmbianceCard;
