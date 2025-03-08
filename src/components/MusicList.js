import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicList = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/tracks')
      .then((response) => {
        setTracks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tracks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="music-container">
      {loading ? (
        <p>Loading tracks...</p>
      ) : tracks.length > 0 ? (
        tracks.map((track) => (
          <div key={track.id} className="music-item">
            <div className="music-item-cover">
              {track.coverUrl && <img src={track.coverUrl} alt={track.title} />}
            </div>
            <div className="music-item-info">
              <h2>{track.title}</h2>
              <p className="artist">{track.artist}</p>
              <p className="genre">{track.genre}</p>
              <div className="music-controls">
                <button className="play-button">▶ Play</button>
                <span className="duration">{track.duration}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No tracks available.</p>
      )}
    </div>
  );
};

export default MusicList;
