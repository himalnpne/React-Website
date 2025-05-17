import React, { useEffect } from 'react';
import './VibeCheck.css';
import f1Logo from './VibeCheck/f1.png';
import wrcLogo from './VibeCheck/WRC.png';
import motogpLogo from './VibeCheck/motogp.png';
import isleOfManTT from './VibeCheck/Isle_of_Man_TT.jpg';
import dakarLogo from './VibeCheck/dakarlogo.png';
import leMansLogo from './VibeCheck/24_Hours_of_Le_Mans.png';
import attackOnTitan from './VibeCheck/attackontitan_logo.png';
import dragonBallZ from './VibeCheck/dragobballz.png';
import gintama from './VibeCheck/gintamalogo.png';
import hxh from './VibeCheck/Hxh_logo.jpg';
import naruto from './VibeCheck/Naruto_logo..png';
import onePiece from './VibeCheck/one_piece_logo.png';
import soloLeveling from './VibeCheck/sololeveling_logo.png';
import slime from './VibeCheck/That_Time_I_Got_Reincarnated_as_a_Slime_logo.png';
import vinlandSaga from './VibeCheck/Vinland_Saga_simplified_logo.png';

const VibeCheck = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const moveX = (clientX - windowWidth / 2) / 50;
      const moveY = (clientY - windowHeight / 2) / 50;

      const redAccent = document.querySelector('.red-accent');
      const blueAccent = document.querySelector('.blue-accent');
      const purpleAccent = document.querySelector('.purple-accent');

      if (redAccent && blueAccent && purpleAccent) {
        redAccent.style.transform = `translate(${moveX * -1}px, ${moveY * -1}px)`;
        blueAccent.style.transform = `translate(${moveX}px, ${moveY}px)`;
        purpleAccent.style.transform = `translate(${moveY * -1}px, ${moveX}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const motorsportEvents = [
    { 
      logo: f1Logo,
      alt: "Formula 1 World Championship",
      description: "The pinnacle of open-wheel racing - where technology meets human skill at 300+ km/h"
    },
    {
      logo: wrcLogo,
      alt: "World Rally Championship",
      description: "Mastery of loose surfaces and unpredictable conditions - rally racing at its finest"
    },
    {
      logo: motogpLogo,
      alt: "MotoGP World Championship",
      description: "The ultimate test of motorcycle skill and bravery on asphalt circuits"
    },
    {
      logo: isleOfManTT,
      alt: "Isle of Man TT",
      description: "The most dangerous motorsport event - 60 km of public roads at 330+ km/h"
    },
    {
      logo: dakarLogo,
      alt: "Dakar Rally",
      description: "The ultimate endurance challenge through deserts and dunes"
    },
    {
      logo: leMansLogo,
      alt: "24 Hours of Le Mans",
      description: "The ultimate test of endurance - 24 hours of non-stop prototype racing"
    }
  ];

  const animeSeries = [
    {
      logo: attackOnTitan,
      alt: "Attack on Titan",
      description: "Humanity's last stand against monstrous Titans - a masterpiece of tension and moral complexity"
    },
    {
      logo: dragonBallZ,
      alt: "Dragon Ball Z",
      description: "The quintessential shonen epic that defined a generation of anime"
    },
    {
      logo: gintama,
      alt: "Gintama",
      description: "Hilarious samurai comedy with surprising emotional depth in Edo-era Japan"
    },
    {
      logo: hxh,
      alt: "Hunter x Hunter",
      description: "A deceptively deep adventure exploring the dark side of human potential"
    },
    {
      logo: naruto,
      alt: "Naruto",
      description: "The ultimate ninja coming-of-age story about perseverance and friendship"
    },
    {
      logo: onePiece,
      alt: "One Piece",
      description: "Epic pirate adventure spanning decades with unparalleled world-building"
    },
    {
      logo: soloLeveling,
      alt: "Solo Leveling",
      description: "The ultimate power fantasy with stunning visuals and hype moments"
    },
    {
      logo: slime,
      alt: "That Time I Got Reincarnated as a Slime",
      description: "Innovative isekai with creative world-building and satisfying progression"
    },
    {
      logo: vinlandSaga,
      alt: "Vinland Saga",
      description: "Brutal viking saga exploring the true meaning of strength and redemption"
    }
  ];

  return (
    <div className="vibe-check compact">
      <div className="floating-accent red-accent"></div>
      <div className="floating-accent blue-accent"></div>
      <div className="floating-accent purple-accent"></div>

      <div className="vibe-content">
        <header className="vibe-header">
          <div className="name-container">
            <h1 className="vibe-title">VibeCheck</h1>
            <div className="splash-effect"></div>
            <div className="ripple-effect"></div>
            <div className="ripple-effect-2"></div>
          </div>
          <p className="vibe-subtitle">
            My personal collection - if our music taste matches, we can vibe together
          </p>
        </header>

        <div className="section-group">
          <div className="motorsport-section">
            <h3 className="section-title">Need for Speed & Adrenaline</h3>
            <p className="section-subtitle">When I'm not listening to music, you'll find me immersed in these legendary motorsports:</p>
            
            <div className="logo-grid">
              {motorsportEvents.map((event, index) => (
                <div key={index} className="logo-card">
                  <div className="logo-container">
                    <img src={event.logo} alt={event.alt} className="event-logo"/>
                    <div className="logo-overlay"></div>
                  </div>
                  <p className="logo-description">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="anime-section">
            <h3 className="section-title anime-title">Anime Universe</h3>
            <p className="section-subtitle">When I need to recharge, these are my go-to anime worlds:</p>
            
            <div className="logo-grid">
              {animeSeries.map((anime, index) => (
                <div key={index} className="logo-card">
                  <div className="logo-container">
                    <img src={anime.logo} alt={anime.alt} className="event-logo"/>
                    <div className="logo-overlay"></div>
                  </div>
                  <p className="logo-description">{anime.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="playlist-buttons">
          <div className="button-group">
            <a href="https://www.youtube.com/playlist?list=PLMFLP6-j47w3AIa_SqUEPeBDdqquR4_g-" 
              target="_blank" rel="noopener noreferrer" className="playlist-button youtube-button">
              My YouTube Mix
              <span className="button-arrow">→</span>
            </a>

            <a href="https://open.spotify.com/playlist/5MBirI8pSfRodbaqhbIR56?si=f2C0gjSMRz-hq25zDNdeyw" 
              target="_blank" rel="noopener noreferrer" className="playlist-button spotify-button">
              My Spotify Vibes
              <span className="button-arrow">→</span>
            </a>
          </div>
        </div>

        <footer className="vibe-footer">
          <p>Keep the vibes going strong ✨</p>
        </footer>
      </div>
    </div>
  );
};

export default VibeCheck;