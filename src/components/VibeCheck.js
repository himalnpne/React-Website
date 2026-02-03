import React, { useEffect, useState } from 'react';
import { Play, Music, ExternalLink, Sparkles } from 'lucide-react';
import { useDarkMode } from '../DarkModeContext';
import './VibeCheck.css';

// Import all existing images
import f1Logo from './VibeCheck/f1.png';
import wrcLogo from './VibeCheck/WRC.png';
import motogpLogo from './VibeCheck/motogp.png';
import isleOfManLogo from './VibeCheck/Isle_of_Man_TT.jpg';
import dakarLogo from './VibeCheck/dakarlogo.png';
import leMansLogo from './VibeCheck/24_Hours_of_Le_Mans.png';

// Import drama covers
import attackOnTitanCover from './VibeCheck/attack_on_titan.webp';
import vincenzoCover from './VibeCheck/vincenzo.webp';
import myNameCover from './VibeCheck/my_name.webp';
import arsenalCover from './VibeCheck/arsenal_military_academy.webp';
import breakingBadCover from './VibeCheck/breaking-bad-logo.png';
import dexterCover from './VibeCheck/dexter.webp';
import ozarkCover from './VibeCheck/ozark.webp';
import prisonBreakCover from './VibeCheck/prison_break.webp';
import blacklistCover from './VibeCheck/the_blacklist.webp';
import mentalistCover from './VibeCheck/the_mentalist.webp';
import narcosCover from './VibeCheck/narcos.webp';
import topGearCover from './VibeCheck/top_gear.webp';
import grandTourCover from './VibeCheck/the_grand_tour.webp';
import formulaOneCover from './VibeCheck/formula_one_drive_to_survive.webp';
import chernobylCover from './VibeCheck/chernobyl.webp';
import vikingsCover from './VibeCheck/404.png';
import gameOfThronesCover from './VibeCheck/game_of_thrones.webp';
import sopranosCover from './VibeCheck/the_sorapnos.webp';
import cuteProgrammerCover from './VibeCheck/cute_programmer.webp';
import fallingIntoSmileCover from './VibeCheck/falling_into_your_smile.webp';
import myDemonCover from './VibeCheck/my_demon.webp';
import mrCrowCover from './VibeCheck/mr_crow_miss_lizard.webp';
import putHeadOnShoulderCover from './VibeCheck/put_your_head_on_my_shoulder.webp';
import loveIsSweetCover from './VibeCheck/404.png';
import descendantsOfSunCover from './VibeCheck/decendents_of_sun.webp';
import businessProposalCover from './VibeCheck/404.png';
import loveAlarmCover from './VibeCheck/love_alaram.webp';
import forecastingLoveCover from './VibeCheck/forecasting_love_and_weather.webp';
import itsOkayCover from './VibeCheck/its_okay_not_to_be_okay.webp';
import bigMouthCover from './VibeCheck/big_mouth.webp';
import ourBelovedSummerCover from './VibeCheck/our_beloved_summer.webp';
import secretaryKimCover from './VibeCheck/whats_wrong_with_secretary_kim.webp';
import moveToHeavenCover from './VibeCheck/move_to_heaven.webp';
import kingTheLandCover from './VibeCheck/king_the_land.webp';
import queenOfTearsCover from './VibeCheck/queen_of_tears.webp';
import crashLandingCover from './VibeCheck/crash_landing_on_you.webp';
import trueBeautyCover from './VibeCheck/true_beauty.webp';
import marryMyHusbandCover from './VibeCheck/marry_my_husband.webp';
import meteorGardenCover from './VibeCheck/404.png';
import sweetToothCover from './VibeCheck/sweet_tooth.webp';
import beWithYouCover from './VibeCheck/be_with_you.webp';
import vagabondCover from './VibeCheck/vagabond.webp';
import love020Cover from './VibeCheck/love_020.webp';
import rebornRichCover from './VibeCheck/reborn_rich.webp';
import taxiDriverCover from './VibeCheck/taxi_driver.webp';
import myGirlfriendAlienCover from './VibeCheck/my_girlfriend_is_an_alien.webp';
import youAreMyGloryCover from './VibeCheck/you_are_my_glory.webp';
import goGoSquidCover from './VibeCheck/go_go_squid.webp';
import youAreMySecretCover from './VibeCheck/you_are_my_secret.webp';
import loveSoBeautifulCover from './VibeCheck/404.png';
import unforgettableLoveCover from './VibeCheck/404.png';
import myLittleHappinessCover from './VibeCheck/my_little_happiness.webp';
import onceWeMarriedCover from './VibeCheck/once_we_get_married.webp';
import ourSecretCover from './VibeCheck/our_secret.webp';
import foreverAndEverCover from './VibeCheck/404.png';
import youAreMyDestinyCover from './VibeCheck/you_are_my_destiny.webp';
import theGloryCover from './VibeCheck/the_glory.webp';
import backstreetRookieCover from './VibeCheck/backstreet_rookie.webp';
import extracurricularCover from './VibeCheck/extracurricular.webp';
import masterOfMyOwnCover from './VibeCheck/master_of_my_own.webp';
import killingVoteCover from './VibeCheck/404.png';
import gangnamBeautyCover from './VibeCheck/my_id_is_gangam_beauty.webp';
import soundOfMagicCover from './VibeCheck/the_sound_of_magic.webp';
import deathNoteCover from './VibeCheck/death_note.webp';
import onePieceCover from './VibeCheck/one_piece.webp';
import demonSlayerCover from './VibeCheck/demon_slayer_kimetsu_no_yaiba.webp';
import codeGeassCover from './VibeCheck/code_geass.webp';
import gintamaCover from './VibeCheck/gintama.webp';
import fruitsBasketCover from './VibeCheck/fruits_basket.webp';
import hunterHunterCover from './VibeCheck/hunter_x_hunter.webp';
import onePunchManCover from './VibeCheck/one_punch_man.webp';
import vinlandSagaCover from './VibeCheck/vinland_saga.webp';
import fightingSpiritCover from './VibeCheck/fighting_spirit.webp';
import haikyuCover from './VibeCheck/haikyu.webp';
import slamDunkCover from './VibeCheck/slam_dunk.webp';
import bakiCover from './VibeCheck/baki.webp';
import slimeCover from './VibeCheck/recarniated_as_a_slime.webp';
import campfireCookingCover from './VibeCheck/campfire_cooking_at_another_world.webp';
import foodWarsCover from './VibeCheck/food_wars.webp';
import twentyFiveTwentyOneCover from './VibeCheck/twentyfive_twentyone.webp';
import potatoLabCover from './VibeCheck/the_potato_lab.webp';

const VibeCheck = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Comprehensive drama covers from your watchlist
  const dramaCovers = [
    // English Shows
    { image: breakingBadCover, title: "Breaking Bad", category: "english", description: "The transformation of Walter White - a masterclass in character development" },
    { image: dexterCover, title: "Dexter", category: "english", description: "Chilling exploration of a vigilante serial killer with a moral code" },
    { image: ozarkCover, title: "Ozark", category: "english", description: "A tense crime thriller about a financial planner who relocates his family to the Missouri Ozarks to launder money for a drug cartel after a deal goes wrong" },
    { image: prisonBreakCover, title: "Prison Break", category: "english", description: "An engineer deliberately gets himself imprisoned to help his innocent brother escape death row" },
    { image: blacklistCover, title: "The Blacklist", category: "english", description: "Criminal mastermind helps FBI take down dangerous fugitives" },
    { image: mentalistCover, title: "The Mentalist", category: "english", description: "A former psychic con artist uses his exceptional observation skills to help the CBI solve murders" },
    { image: narcosCover, title: "Narcos", category: "english", description: "A gritty chronicle of the rise and fall of Colombian drug lord Pablo Escobar" },
    { image: topGearCover, title: "Top Gear", category: "english", description: "Beloved British motoring magazine show featuring irreverent hosts testing supercars" },
    { image: grandTourCover, title: "The Grand Tour", category: "english", description: "Spiritual successor to Top Gear with global adventures and outrageous experiments" },
    { image: formulaOneCover, title: "Formula One: Drive to Survive", category: "english", description: "Behind-the-scenes access to the high-stakes world of Formula 1 racing" },
    { image: chernobylCover, title: "Chernobyl", category: "english", description: "Harrowing miniseries depicting the 1986 nuclear disaster in the Soviet Union" },
    { image: vikingsCover, title: "Vikings", category: "english", description: "Historical action-drama chronicling the legendary Norse hero Ragnar Lothbrok" },
    { image: gameOfThronesCover, title: "Game of Thrones", category: "english", description: "Epic fantasy of noble families fighting for control of the Iron Throne" },
    { image: sopranosCover, title: "The Sopranos", category: "english", description: "Groundbreaking mob drama following New Jersey boss Tony Soprano" },
    { image: sweetToothCover, title: "Sweet Tooth", category: "english", description: "Post-apocalyptic fantasy about a hybrid deer-boy searching for a new home" },
    { image: potatoLabCover, title: "The Potato Lab", category: "english", description: "Fun, educational cooking show experimenting with potatoes in creative recipes" },

    // Asian Dramas
    { image: arsenalCover, title: "Arsenal Military Academy", category: "asian", description: "Historical romance set in early 20th-century China following a woman disguised as a man in military academy" },
    { image: myNameCover, title: "My Name", category: "asian", description: "Fierce revenge thriller about a woman infiltrating a drug cartel to avenge her father's murder" },
    { image: vincenzoCover, title: "Vincenzo", category: "asian", description: "Dark comedy about a Korean-Italian mafia consigliere seeking justice" },
    { image: cuteProgrammerCover, title: "Cute Programmer", category: "asian", description: "Tech genius clashes with a bubbly new hire in a sweet office romance" },
    { image: fallingIntoSmileCover, title: "Falling Into Your Smile", category: "asian", description: "Esports prodigy sparks rivals-to-lovers romance with star player" },
    { image: myDemonCover, title: "My Demon", category: "asian", description: "Fantasy romance where a powerful demon loses abilities after contract marriage" },
    { image: mrCrowCover, title: "Mr Crow Miss Lizard", category: "asian", description: "Romantic comedy with quirky characters and unexpected relationships" },
    { image: putHeadOnShoulderCover, title: "Put Your Head on My Shoulder", category: "asian", description: "College sweethearts navigate awkward crushes in lighthearted campus rom-com" },
    { image: loveIsSweetCover, title: "Love is Sweet", category: "asian", description: "Childhood friends reunite as corporate rivals in fluffy destined soulmates tale" },
    { image: descendantsOfSunCover, title: "Descendants of the Sun", category: "asian", description: "Romantic action series following special forces captain and humanitarian doctor" },
    { image: businessProposalCover, title: "Business Proposal", category: "asian", description: "Hilarious office rom-com with fake dating and CEO-employee dynamics" },
    { image: loveAlarmCover, title: "Love Alarm", category: "asian", description: "Sci-fi romance in a world where an app alerts users to nearby crushes" },
    { image: forecastingLoveCover, title: "Forecasting Love and Weather", category: "asian", description: "Workplace romance mixing humor, passion and emotional forecasts" },
    { image: itsOkayCover, title: "It's Okay Not to Be Okay", category: "asian", description: "Healing romance confronting childhood traumas through fairy-tale metaphors" },
    { image: bigMouthCover, title: "Big Mouth", category: "asian", description: "Twisty legal thriller with lawyer entangled in murder conspiracy" },
    { image: ourBelovedSummerCover, title: "Our Beloved Summer", category: "asian", description: "Ex-lovers reunite for documentary capturing nostalgic youth and adult complexities" },
    { image: secretaryKimCover, title: "What's Wrong with Secretary Kim", category: "asian", description: "Charming rom-com with narcissistic vice president and resigning secretary" },
    { image: moveToHeavenCover, title: "Move to Heaven", category: "asian", description: "Poignant drama about neurodiverse siblings running trauma cleaning business" },
    { image: kingTheLandCover, title: "King the Land", category: "asian", description: "Luxury hotel heiress clashes with employee in opulent rom-com" },
    { image: queenOfTearsCover, title: "Queen of Tears", category: "asian", description: "Chaebol heiress and husband fake marriage amid scandals and life-threatening twists" },
    { image: crashLandingCover, title: "Crash Landing on You", category: "asian", description: "Forbidden romance between South Korean heiress and North Korean captain" },
    { image: trueBeautyCover, title: "True Beauty", category: "asian", description: "Feel-good coming-of-age rom-com about self-acceptance and high school crushes" },
    { image: marryMyHusbandCover, title: "Marry My Husband", category: "asian", description: "Empowering revenge fantasy with time-travel and fate alteration" },
    { image: meteorGardenCover, title: "Meteor Garden", category: "asian", description: "Modern take on classic shoujo story with poor girl and rich heirs" },
    { image: beWithYouCover, title: "Be With You", category: "asian", description: "Heartwarming romance about love transcending time and circumstances" },
    { image: vagabondCover, title: "Vagabond", category: "asian", description: "High-octane action with stuntman uncovering massive conspiracy after plane crash" },
    { image: love020Cover, title: "Love O2O", category: "asian", description: "Esports fairy tale blending virtual quests with real-world university romance" },
    { image: rebornRichCover, title: "Reborn Rich", category: "asian", description: "Business drama with rebirth and corporate intrigue elements" },
    { image: taxiDriverCover, title: "Taxi Driver", category: "asian", description: "Gritty action-drama with vigilante drivers seeking justice for abuse victims" },
    { image: myGirlfriendAlienCover, title: "My Girlfriend is an Alien", category: "asian", description: "Sci-fi rom-com with alien-human cultural clashes and deepening love" },
    { image: youAreMyGloryCover, title: "You Are My Glory", category: "asian", description: "Second-chance romance between actress and aerospace engineer" },
    { image: goGoSquidCover, title: "Go Go Squid!", category: "asian", description: "Bubbly story of genius gamer girl and esports idol in competitive gaming world" },
    { image: youAreMySecretCover, title: "You Are My Secret", category: "asian", description: "Steamy office rom-com with corporate rivals hiding one-night stand" },
    { image: loveSoBeautifulCover, title: "A Love So Beautiful", category: "asian", description: "Timeless tale of patient love and youthful exuberance from high school" },
    { image: unforgettableLoveCover, title: "Unforgettable Love", category: "asian", description: "Healing drama with workaholic CEO and career counselor" },
    { image: myLittleHappinessCover, title: "My Little Happiness", category: "asian", description: "Endearing mentor-student romance with law student and professor" },
    { image: onceWeMarriedCover, title: "Once We Get Married", category: "asian", description: "Fake marriage between CEO and actress spirals into real emotions" },
    { image: ourSecretCover, title: "Our Secret", category: "asian", description: "Historical reincarnation story with past-life lovers reuniting in modern times" },
    { image: foreverAndEverCover, title: "Forever and Ever", category: "asian", description: "Ethereal romance with soulmates bound by fate across lifetimes" },
    { image: youAreMyDestinyCover, title: "You Are My Destiny", category: "asian", description: "Serendipitous family drama from accidental marriage and pregnancy" },
    { image: theGloryCover, title: "The Glory", category: "asian", description: "Dark tale of calculated revenge by bullying survivor turned teacher" },
    { image: backstreetRookieCover, title: "Backstreet Rookie", category: "asian", description: "Chaotic rom-com antics with convenience store owner and high school crush" },
    { image: extracurricularCover, title: "Extracurricular", category: "asian", description: "Tense teen thriller about student running illicit escort service" },
    { image: masterOfMyOwnCover, title: "Master of My Own", category: "asian", description: "Empowering story of career growth and personal development" },
    { image: killingVoteCover, title: "The Killing Vote", category: "asian", description: "Dystopian thriller where citizens vote to execute criminals via app" },
    { image: gangnamBeautyCover, title: "My ID is Gangnam Beauty", category: "asian", description: "College freshman navigates judgment and romance after plastic surgery" },
    { image: soundOfMagicCover, title: "The Sound of Magic", category: "asian", description: "Musical fantasy about mysterious magician and disillusioned teenager" },
    { image: twentyFiveTwentyOneCover, title: "Twenty-Five Twenty-One", category: "asian", description: "Nostalgic youth drama following fencer and reporter during 1997 IMF crisis" },

    // Anime
    { image: deathNoteCover, title: "Death Note", category: "anime", description: "Psychological cat-and-mouse thriller with notebook that kills anyone whose name is written" },
    { image: onePieceCover, title: "One Piece", category: "anime", description: "Epic pirate adventure spanning decades with unparalleled world-building" },
    { image: demonSlayerCover, title: "Demon Slayer", category: "anime", description: "Breathtaking sword fights against otherworldly foes to save demon-turned sister" },
    { image: codeGeassCover, title: "Code Geass", category: "anime", description: "Mecha-political thriller with exiled prince gaining mind control power" },
    { image: gintamaCover, title: "Gintama", category: "anime", description: "Hilarious meta-humor parodying tropes with heartfelt moments and wild action" },
    { image: fruitsBasketCover, title: "Fruits Basket", category: "anime", description: "Emotional tapestry of romance, family secrets and zodiac curse healing" },
    { image: attackOnTitanCover, title: "Attack on Titan", category: "anime", description: "Dark saga of survival and betrayal as humanity fights giant Titans" },
    { image: hunterHunterCover, title: "Hunter x Hunter", category: "anime", description: "Adventurous shonen with strategic battles and moral dilemmas" },
    { image: onePunchManCover, title: "One Punch Man", category: "anime", description: "Superhero satire with explosive action and deadpan humor" },
    { image: vinlandSagaCover, title: "Vinland Saga", category: "anime", description: "Gritty historical epic of Viking revenge evolving into peace dreams" },
    { image: fightingSpiritCover, title: "Fighting Spirit", category: "anime", description: "Inspirational sports shonen about timid teen discovering boxing confidence" },
    { image: haikyuCover, title: "Haikyu!!", category: "anime", description: "Energetic sports anime focusing on teamwork and volleyball growth" },
    { image: slamDunkCover, title: "Slam Dunk", category: "anime", description: "Classic sports tale of delinquent transforming into basketball key player" },
    { image: bakiCover, title: "Baki", category: "anime", description: "Raw, over-the-top combat in underground death matches" },
    { image: slimeCover, title: "That Time I Got Reincarnated as a Slime", category: "anime", description: "Isekai adventure building monster nation through clever skills" },
    { image: campfireCookingCover, title: "Campfire Cooking", category: "anime", description: "Cozy isekai foodie tale with gourmet meals charming adventurers" },
    { image: foodWarsCover, title: "Food Wars!", category: "anime", description: "High-stakes cooking duels with explosive dish reactions" }
  ];

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
      logo: isleOfManLogo,
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

  const filteredDramas = selectedCategory === 'all' 
    ? dramaCovers 
    : dramaCovers.filter(drama => drama.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Shows', count: dramaCovers.length },
    { id: 'english', name: 'English TV', count: dramaCovers.filter(d => d.category === 'english').length },
    { id: 'asian', name: 'Asian Dramas', count: dramaCovers.filter(d => d.category === 'asian').length },
    { id: 'anime', name: 'Anime', count: dramaCovers.filter(d => d.category === 'anime').length }
  ];

  if (isLoading) {
    return (
      <div className={`vibe-check ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="vibe-content">
          <div className="vibe-header">
            <div className="loading-skeleton" style={{height: '4rem', width: '300px', margin: '0 auto 1rem'}}></div>
            <div className="loading-skeleton" style={{height: '1.5rem', width: '400px', margin: '0 auto'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`vibe-check ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="background-pattern"></div>

      <div className="vibe-content">
        {/* Header */}
        <header className="vibe-header fade-in">
          <h1 className="vibe-title">VibeCheck</h1>
          <p className="vibe-subtitle">
            Discover my curated collection of entertainment preferences and musical tastes
          </p>
        </header>

        {/* Playlist Section */}
        <section className="content-section fade-in">
          <div className="section-header">
            <h2 className="section-title">Music Playlists</h2>
            <p className="section-subtitle">
              Explore my handpicked music collections across different platforms
            </p>
          </div>
          
          <div className="playlist-cards">
            <div className="playlist-card">
              <div className="playlist-card-header">
                <div className="playlist-icon youtube-icon">
                  <Play size={24} />
                </div>
                <div>
                  <h3 className="playlist-card-title">YouTube Music</h3>
                  <p className="playlist-card-description">
                    Curated selection of tracks that define my current taste in musical journey
                  </p>
                </div>
              </div>
              <a href="https://www.youtube.com/playlist?list=PLMFLP6-j47w3AIa_SqUEPeBDdqquR4_g-" 
                target="_blank" rel="noopener noreferrer" 
                className="playlist-card-button youtube-button">
                <Play size={16} style={{marginRight: '8px'}} />
                Listen on YouTube
                <ExternalLink size={14} style={{marginLeft: '8px'}} />
              </a>
            </div>

            <div className="playlist-card">
              <div className="playlist-card-header">
                <div className="playlist-icon spotify-icon">
                  <Music size={24} />
                </div>
                <div>
                  <h3 className="playlist-card-title">Spotify Collection</h3>
                  <p className="playlist-card-description">
                    My personal favourite soundtracks featuring diverse genres and moods
                  </p>
                </div>
              </div>
              <a href="https://open.spotify.com/playlist/5MBirI8pSfRodbaqhbIR56?si=f2C0gjSMRz-hq25zDNdeyw" 
                target="_blank" rel="noopener noreferrer" 
                className="playlist-card-button spotify-button">
                <Music size={16} style={{marginRight: '8px'}} />
                Listen on Spotify
                <ExternalLink size={14} style={{marginLeft: '8px'}} />
              </a>
            </div>
          </div>
        </section>

        {/* Motorsports Section */}
        <section className="content-section fade-in">
          <div className="section-header">
            <h2 className="section-title">Motorsports & Automotive</h2>
            <p className="section-subtitle">
              High-octane racing events and automotive culture that fuel my passion
            </p>
          </div>
          
          <div className="content-grid">
            {motorsportEvents.map((event, index) => (
              <div key={`motorsport-${index}`} className="content-card">
                <img src={event.logo} alt={event.alt} className="content-logo"/>
                <p className="content-description">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Watchlist Section */}
        <section className="content-section fade-in">
          <div className="section-header">
            <h2 className="section-title">My Watchlist</h2>
            <p className="section-subtitle">
              Comprehensive collection of shows and series across different genres
            </p>
          </div>
          
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
          
          <div className="drama-covers-grid">
            {filteredDramas.map((drama, index) => (
              <div key={index} className="drama-cover-card">
                <div className="drama-cover-image-container">
                  <img 
                    src={drama.image} 
                    alt={drama.title}
                    className="drama-cover-image"
                  />
                  <div className="drama-category-badge">
                    <span className={`drama-category ${drama.category}`}>
                      {drama.category === 'english' ? 'TV Series' : 
                       drama.category === 'asian' ? 'Asian Drama' : 'Anime'}
                    </span>
                  </div>
                </div>
                <div className="drama-cover-content">
                  <h4 className="drama-cover-title">{drama.title}</h4>
                  <p className="drama-cover-description">{drama.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="vibe-footer">
          <Sparkles size={16} style={{marginRight: '8px'}} />
          <p>Thanks for exploring my tastes! Let's connect if we share similar interests.</p>
        </footer>
      </div>
    </div>
  );
};

export default VibeCheck;