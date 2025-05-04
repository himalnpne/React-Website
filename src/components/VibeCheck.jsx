import React, { useState, useEffect } from 'react';
import './VibeCheck.css';

const VibeCheck = () => {
  // YouTube setup
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState('');
  const YT_API = 'AIzaSyCm4tkBPB8BxUUH1jsiYuZ8VpfC0QKGFJQ';
  const YT_PLAYLIST = 'PLMFLP6-j47w3AIa_SqUEPeBDdqquR4_g-';

  // Spotify playlist ID
  const SPOTIFY_PLAYLIST = '5MBirI8pSfRodbaqhbIR56';

  useEffect(() => {
    const fetchYT = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${YT_PLAYLIST}&key=${YT_API}`
        );
        const data = await res.json();
        if (data.items) {
          setVideos(data.items);
          setCurrentVideo(data.items[0]?.snippet.resourceId.videoId);
        }
      } catch (err) {
        console.error("YouTube API error:", err);
      }
    };
    fetchYT();
  }, []);

  return (
    <div className="vibe-container">
      <h1 className="section-title">My Playlists</h1>
      
      <div className="players-container">
        {/* YouTube Section */}
        <div className="platform-section">
          <div className="compact-player">
            {currentVideo && (
              <iframe
                title="YouTube Player"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <div className="playlist-header">YouTube Playlist</div>
          <div className="video-playlist">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className={`playlist-item ${currentVideo === video.snippet.resourceId.videoId ? 'active' : ''}`}
                onClick={() => setCurrentVideo(video.snippet.resourceId.videoId)}
              >
                <img 
                  src={video.snippet.thumbnails.default.url} 
                  alt={video.snippet.title}
                />
                <div className="item-info">
                  <span className="item-title">{video.snippet.title}</span>
                  <span className="item-meta">{video.snippet.channelTitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spotify Section */}
        <div className="platform-section">
          <div className="compact-player">
            <iframe
              title="Spotify Player"
              src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST}`}
              allow="encrypted-media"
            />
          </div>
          <div className="playlist-header">Spotify Playlist</div>
          <div className="spotify-placeholder">
            <p>Your Spotify tracks would appear here</p>
            <p>with similar styling to YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VibeCheck;