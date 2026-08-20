import React, { useEffect, useState } from 'react';
import { Play, Music, ExternalLink, Sparkles, CheckCircle, XCircle, Clock } from 'lucide-react';
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
import defaultCover from './VibeCheck/404.png';

// New imports for additional shows
import triggerCover from './VibeCheck/404.png';
import heroWithoutClassCover from './VibeCheck/404.png';
import banishedCourtMagicianCover from './VibeCheck/404.png';
import devilJudgeCover from './VibeCheck/404.png';
import manipulatedCover from './VibeCheck/404.png';
import royalLadyWithLampCover from './VibeCheck/404.png';
import myFirstFirstLoveCover from './VibeCheck/404.png';
import firstRespondersCover from './VibeCheck/404.png';
import startup2020Cover from './VibeCheck/404.png';
import crazyLoveCover from './VibeCheck/404.png';
import cleanWithPassionCover from './VibeCheck/404.png';
import pinocchioCover from './VibeCheck/404.png';
import militaryProsecutorCover from './VibeCheck/404.png';
import tastefullyYoursCover from './VibeCheck/404.png';
import pleaseFeelAtEaseCover from './VibeCheck/404.png';
import fermatCuisineCover from './VibeCheck/404.png';
import weakestTamerCover from './VibeCheck/404.png';
import cheatKusushiCover from './VibeCheck/404.png';
import hellModeCover from './VibeCheck/404.png';
import easygoingTerritoryCover from './VibeCheck/404.png';
import nobleReincarnationCover from './VibeCheck/404.png';
import recordOfRagnarokCover from './VibeCheck/404.png';
import strongestJobCover from './VibeCheck/404.png';
import hyperKnifeCover from './VibeCheck/404.png';
import highSchoolGangsterCover from './VibeCheck/404.png';
import phantomLawyerCover from './VibeCheck/404.png';
import parallelWorldPharmacyCover from './VibeCheck/404.png';
import beginningAfterEndCover from './VibeCheck/404.png';
import perfectCrownCover from './VibeCheck/404.png';
import wisportiaCover from './VibeCheck/404.png';
import asBeautifulAsYouCover from './VibeCheck/404.png';
import perfectAndCasualCover from './VibeCheck/404.png';
import myCalorieBoyCover from './VibeCheck/404.png';
import riverRunsThroughCover from './VibeCheck/404.png';
import areYouHumanTooCover from './VibeCheck/404.png';
import blackSummonerCover from './VibeCheck/404.png';
import classroomEliteCover from './VibeCheck/404.png';
import devilPartTimerCover from './VibeCheck/404.png';
import greatestDemonLordCover from './VibeCheck/404.png';
import mashleCover from './VibeCheck/404.png';
import gathererAdventureCover from './VibeCheck/404.png';
import assassinStatusCover from './VibeCheck/404.png';
import waterMagicianCover from './VibeCheck/404.png';
import shieldHeroCover from './VibeCheck/404.png';
import apocalypseBringerCover from './VibeCheck/404.png';
import sweetReincarnationCover from './VibeCheck/404.png';
import amIStrongestCover from './VibeCheck/404.png';
import middleAgedShopperCover from './VibeCheck/404.png';
import magicMakerCover from './VibeCheck/404.png';
import journeyAnotherWorldCover from './VibeCheck/404.png';
import reincarnatedAristocratCover from './VibeCheck/404.png';
import newGateCover from './VibeCheck/404.png';
import isekaiCheatMagicianCover from './VibeCheck/404.png';
import anotherWorldSmartphoneCover from './VibeCheck/404.png';
import graceOfGodsCover from './VibeCheck/404.png';
import welcomeDemonSchoolCover from './VibeCheck/404.png';
import savingGoldCover from './VibeCheck/404.png';
import overlordCover from './VibeCheck/404.png';
import fruitEvolutionCover from './VibeCheck/404.png';
import myIsekaiLifeCover from './VibeCheck/404.png';
import aristocratOtherworldlyCover from './VibeCheck/404.png';
import nobleOnBrinkCover from './VibeCheck/404.png';
import myLovelyLiarCover from './VibeCheck/404.png';
import imNotRobotCover from './VibeCheck/404.png';
import neverthelessCover from './VibeCheck/404.png';
import noGainNoLoveCover from './VibeCheck/404.png';
import blackCloverCover from './VibeCheck/404.png';
import sheAndHerPerfectHusbandCover from './VibeCheck/404.png';
import helloMrGuCover from './VibeCheck/404.png';
import goAheadCover from './VibeCheck/404.png';
import riverMonstersCover from './VibeCheck/404.png';
import wayne2019Cover from './VibeCheck/404.png';
import animalKingdomCover from './VibeCheck/404.png';
import gothamCover from './VibeCheck/404.png';
import drStoneCover from './VibeCheck/404.png';
import regressionGreatSageCover from './VibeCheck/404.png';

// Import short C-drama covers (all use 404.png as fallback)
import shortDramaCover from './VibeCheck/404.png';

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
    { image: triggerCover, title: "Trigger", category: "english", description: "Gritty crime thriller series" },
    { image: riverMonstersCover, title: "River Monsters", category: "english", description: "Documentary following extreme angler Jeremy Wade as he investigates freshwater mysteries and catches massive fish" },
    { image: wayne2019Cover, title: "Wayne (2019)", category: "english", description: "Action-comedy series about a rebellious teenager on a road trip to retrieve his father's stolen car" },
    { image: animalKingdomCover, title: "Animal Kingdom", category: "english", description: "Crime drama about a family of criminals in Southern California" },
    { image: gothamCover, title: "Gotham", category: "english", description: "Origin story of Batman's iconic villains and Commissioner Gordon" },

    // Asian Dramas (K-Drama & C-Drama)
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
    { image: devilJudgeCover, title: "The Devil Judge", category: "asian", description: "Dystopian legal drama about a head judge executing justice in a courtroom spectacle" },
    { image: manipulatedCover, title: "The Manipulated", category: "asian", description: "Psychological thriller about media manipulation and conspiracy" },
    { image: myFirstFirstLoveCover, title: "My First First Love", category: "asian", description: "Coming-of-age romance about five friends navigating relationships" },
    { image: firstRespondersCover, title: "The First Responders", category: "asian", description: "Action-packed drama about firefighters and police working together" },
    { image: startup2020Cover, title: "Start-Up (2020)", category: "asian", description: "Inspiring story of young entrepreneurs in South Korea's startup ecosystem" },
    { image: crazyLoveCover, title: "Crazy Love", category: "asian", description: "Dark rom-com about a tutor who receives a death threat from a student" },
    { image: cleanWithPassionCover, title: "Clean with Passion for Now", category: "asian", description: "Rom-com about a CEO with germophobia and a cheerful cleaning service owner" },
    { image: pinocchioCover, title: "Pinocchio", category: "asian", description: "Romantic drama about reporters with a unique condition" },
    { image: militaryProsecutorCover, title: "Military Prosecutor Doberman", category: "asian", description: "Action-legal drama about two military prosecutors seeking justice" },
    { image: tastefullyYoursCover, title: "Tastefully Yours", category: "asian", description: "Food-themed romantic comedy" },
    { image: pleaseFeelAtEaseCover, title: "Please Feel at Ease Mr. Ling", category: "asian", description: "C-Drama about a cold CEO and a cheerful assistant" },
    { image: highSchoolGangsterCover, title: "High School Return of a Gangster", category: "asian", description: "A gangster returns to high school in this exciting K-Drama" },
    { image: phantomLawyerCover, title: "Phantom Lawyer", category: "asian", description: "Legal thriller about a genius lawyer solving mysterious cases" },
    { image: asBeautifulAsYouCover, title: "As Beautiful As You", category: "asian", description: "Romantic C-Drama about a tech CEO and a veterinarian" },
    { image: perfectAndCasualCover, title: "Perfect And Casual", category: "asian", description: "Sweet rom-com about an accidental marriage" },
    { image: myCalorieBoyCover, title: "My Calorie Boy", category: "asian", description: "C-Drama about a foodie and a fitness enthusiast" },
    { image: riverRunsThroughCover, title: "A River Runs Through It", category: "asian", description: "Coming-of-age C-Drama about youth and first love" },
    { image: areYouHumanTooCover, title: "Are You Human Too?", category: "asian", description: "Sci-fi romance about an android and a heiress" },
    { image: myLovelyLiarCover, title: "My Lovely Liar", category: "asian", description: "Rom-com about a woman who can hear lies and a mysterious composer" },
    { image: imNotRobotCover, title: "I'm Not a Robot", category: "asian", description: "Rom-com about a man allergic to humans and a woman posing as a robot" },
    { image: neverthelessCover, title: "Nevertheless", category: "asian", description: "Realistic K-Drama about modern dating and relationships" },
    { image: noGainNoLoveCover, title: "No Gain No Love", category: "asian", description: "Romantic comedy about a career woman and a part-time convenience store worker" },
    { image: sheAndHerPerfectHusbandCover, title: "She and Her Perfect Husband", category: "asian", description: "C-Drama about a lawyer in a contract marriage" },
    { image: helloMrGuCover, title: "Hello Mr. Gu", category: "asian", description: "Romantic C-Drama about an office romance" },
    { image: goAheadCover, title: "Go Ahead", category: "asian", description: "Heartwarming C-Drama about three non-blood-related siblings" },

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
    { image: foodWarsCover, title: "Food Wars!", category: "anime", description: "High-stakes cooking duels with explosive dish reactions" },
    { image: heroWithoutClassCover, title: "Hero Without a Class", category: "anime", description: "Isekai anime about a hero with no special abilities" },
    { image: banishedCourtMagicianCover, title: "The Banished Court Magician", category: "anime", description: "A banished mage discovers new powers" },
    { image: royalLadyWithLampCover, title: "The Royal Lady with a Lamp", category: "anime", description: "Historical fantasy anime" },
    { image: fermatCuisineCover, title: "Fermat's Cuisine", category: "anime", description: "Cooking anime with mathematical precision" },
    { image: weakestTamerCover, title: "The Weakest Tamer Began a Journey to Pick Up Trash", category: "anime", description: "Wholesome isekai about a weak tamer's journey" },
    { image: cheatKusushiCover, title: "Cheat Kusushi no Slow Life: Isekai ni Tsukurou Drugstore", category: "anime", description: "Isekai about opening a pharmacy in another world" },
    { image: hellModeCover, title: "Hell Mode", category: "anime", description: "Isekai where a gamer must survive the hardest difficulty" },
    { image: easygoingTerritoryCover, title: "Easygoing Territory Defense by the Optimistic Lord", category: "anime", description: "Strategy fantasy anime" },
    { image: nobleReincarnationCover, title: "Noble Reincarnation", category: "anime", description: "A noble reborn with knowledge from his past life" },
    { image: recordOfRagnarokCover, title: "Record of Ragnarok", category: "anime", description: "Epic battles between gods and humans" },
    { image: strongestJobCover, title: "The Strongest Job is Apparently Not a Hero or a Sage, but an Appraiser", category: "anime", description: "Fantasy anime with a unique job class system" },
    { image: parallelWorldPharmacyCover, title: "Parallel World Pharmacy", category: "anime", description: "A pharmacist uses medical knowledge in a fantasy world" },
    { image: beginningAfterEndCover, title: "The Beginning After the End", category: "anime", description: "Isekai about a king reincarnated as a baby" },
    { image: wisportiaCover, title: "Wistoria: Wand and Sword", category: "anime", description: "Fantasy anime about a wand-wielding swordsman" },
    { image: blackSummonerCover, title: "Black Summoner", category: "anime", description: "Isekai about a summoner with dark powers" },
    { image: classroomEliteCover, title: "Classroom of the Elite", category: "anime", description: "Psychological thriller set in a prestigious high school" },
    { image: devilPartTimerCover, title: "The Devil is a Part-Timer!", category: "anime", description: "Comedy about the Devil working at a fast-food restaurant" },
    { image: greatestDemonLordCover, title: "The Greatest Demon Lord Is Reborn as a Typical Nobody", category: "anime", description: "Isekai comedy about a demon lord's reincarnation" },
    { image: mashleCover, title: "Mashle: Magic and Muscles", category: "anime", description: "Magic school action-comedy with a muscle-bound protagonist" },
    { image: gathererAdventureCover, title: "A Gatherer's Adventure in Isekai", category: "anime", description: "Wholesome isekai about a gatherer's journey" },
    { image: assassinStatusCover, title: "My Status as an Assassin Obviously Exceeds the Hero's", category: "anime", description: "Isekai action about a powerful assassin" },
    { image: waterMagicianCover, title: "The Water Magician", category: "anime", description: "Fantasy anime about water magic" },
    { image: shieldHeroCover, title: "The Rising of the Shield Hero", category: "anime", description: "Isekai about a hero betrayed and forced to rise from nothing" },
    { image: apocalypseBringerCover, title: "Apocalypse Bringer Mynoghra", category: "anime", description: "Dark fantasy about a civilization-building Isekai" },
    { image: sweetReincarnationCover, title: "Sweet Reincarnation", category: "anime", description: "Isekai about a pastry chef in a fantasy world" },
    { image: amIStrongestCover, title: "Am I Actually the Strongest?", category: "anime", description: "Isekai comedy about being overpowered" },
    { image: middleAgedShopperCover, title: "The Daily Life of a Middle-Aged Online Shopper in Another World", category: "anime", description: "Isekai about a middle-aged man's everyday adventures" },
    { image: magicMakerCover, title: "Magic Maker: How to Make Magic in Another World", category: "anime", description: "Isekai about creating magic from scratch" },
    { image: journeyAnotherWorldCover, title: "A Journey Through Another World: Raising Kids While Adventuring", category: "anime", description: "Wholesome isekai about raising kids and adventuring" },
    { image: reincarnatedAristocratCover, title: "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World", category: "anime", description: "Isekai strategy about using appraisal skills" },
    { image: newGateCover, title: "The New Gate", category: "anime", description: "Isekai about a player trapped in a death game" },
    { image: isekaiCheatMagicianCover, title: "Isekai Cheat Magician", category: "anime", description: "Two friends transported to a fantasy world with cheat abilities" },
    { image: anotherWorldSmartphoneCover, title: "In Another World With My Smartphone", category: "anime", description: "Isekai about a man who keeps his smartphone in another world" },
    { image: graceOfGodsCover, title: "By the Grace of the Gods", category: "anime", description: "Wholesome isekai about a slime tamer" },
    { image: welcomeDemonSchoolCover, title: "Welcome to Demon School! Iruma-kun", category: "anime", description: "Comedy about a human in demon school" },
    { image: savingGoldCover, title: "Saving 80,000 Gold in Another World for My Retirement", category: "anime", description: "Isekai about a woman planning for retirement in another world" },
    { image: overlordCover, title: "Overlord", category: "anime", description: "Dark isekai about a player trapped in a game as an undead king" },
    { image: fruitEvolutionCover, title: "The Fruit of Evolution", category: "anime", description: "Isekai comedy about an evolution fruit" },
    { image: myIsekaiLifeCover, title: "My Isekai Life: I Gained a Second Character Class and Became the Strongest Sage in the World", category: "anime", description: "Isekai about a sage with dual classes" },
    { image: aristocratOtherworldlyCover, title: "The Aristocrat's Otherworldly Adventure", category: "anime", description: "Isekai about a noble's adventure" },
    { image: nobleOnBrinkCover, title: "I'm a Noble on the Brink of Ruin, So I Might as Well Try Mastering Magic", category: "anime", description: "Fantasy anime about a noble mastering magic" },
    { image: blackCloverCover, title: "Black Clover", category: "anime", description: "A boy born without magic strives to become the Wizard King" },
    { image: perfectCrownCover, title: "Perfect Crown", category: "anime", description: "Anime about a perfect ruler" },
    { image: drStoneCover, title: "Dr. Stone", category: "anime", description: "A genius scientist rebuilds civilization after a mysterious petrification event" },
    { image: regressionGreatSageCover, title: "The Regression of Great Sage Riddle", category: "anime", description: "A wise sage regresses in time" },

    // Short C-Dramas
    { image: shortDramaCover, title: "Fresh Snow, New Life", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn with a Level-Up System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn for My Campus Queen", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Milk Tea Tycoon", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn: Taking Back What's Mine", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Cold CEO's Secret Heart", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "You Fled the Wedding, Why Are You Crying?", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Wife, the Billionaire CEO", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Ultimate Rebate System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Second Choice", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Dumped Groom's Heiress", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Super System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Unwanted Husband", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Captive Love", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Country Bride", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Accidental Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn: My Perfect System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Boss is My Vengeful Ex", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Scammed into a Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Hidden Billionaire's Revenge", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The King's Hidden Legacy", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Campus King System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "From Guard to God-Tier Tycoon", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Awakened Villain", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Slacking Secretary", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "God-Tier System: My Perfect Comeback", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Doubt Me, I Dare You", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Flash-Married to the Sweetheart", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Our Second Chance", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Revenge", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Hate-to-Win System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billion-Dollar Son-in-Law", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Revenge System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Blind Date is My CEO", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Tycoon's Great Love System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Married to the Beggar Lord", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Ex's Aunt, My CEO Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn to Be a Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Invincible King in Disguise", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn to Win My Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Secret Chef Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Simp's Revenge System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "System Unlocked", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Villain's System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Hidden Heir's Revenge", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Disowned Son's System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO with X-Ray Eyes", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Accidental Superstar Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Goddess's Kept Man", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Reborn Tycoon's Redemption", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Saved Her, Won Her", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Villain's Revenge System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Upgrade 3", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My 300 Ex-Girlfriends", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Synthesis System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "No More Pretending", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Manipulator Heir", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Goddess Rebate System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Trash-to-Treasure System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Villain System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Secret Trillionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Accidentally Confessed to My Boss", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Billionaire's Endless Love", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Two Divine Girls Unlock My Full Power", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Boss Who Broke the Market", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Apocalypse: Reborn to Survive", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The One Dollar Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Power of Every Lie", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The X-Ray Vision Tycoon", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Warlord's Return: No More Pretending", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Her Cullinan, Her Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Winning by Losing", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Ancient Supermarket", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Intern is a Secret Heiress", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn Investor's Love", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Beyond Your Reach", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire in Disguise", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Future Newspaper", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Just Married an Heiress", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Strongest Fisherman: All Fish Come to Me", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Boss is My Secret Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Chef's Revenge *2", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "I Want to Go Broke, But My Staff Are Great", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "A Red Packet from the Gods", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Pancake Stand Parents", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Heiress They Called Father", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Chef's Payback", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Sales Queen's Sweet Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "You Stole My Takeout, Why Is Your Family...", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Husband Has a Billion Identities", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Eye of Fortune", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "A Kiss of Fate: My Comeback Life", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Path of Golden Advice", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Farm My Way to Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Consumer Comeback", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Deliveryman Sees Fortune", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Heiress Behind the Veil", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire with X-Ray Eyes", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Secret Billionaire Heir", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The God of Fortune System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO I Picked Up", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Graduate's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Slacker System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Bus Card", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "After His Ex Betrayed Him", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn to Be Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Cast Off Daughter's Fortune", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Simp's Billionaire System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Too Many Suitors", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Barter System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Check-in System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Tycoon System *3", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Gourmet God's Ex-Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Dumped, Then I Became a Tycoon", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Divine Farmer's Power", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Reborn Billionaire Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Check-in Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Almighty System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "From Fired to Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Accidental Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billion Dollar Simp", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Immortal's CEO Bride", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Jilted CEO's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Tycoon Husband", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Hidden Protector Returns", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My CEO, My Empress", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Winning Her Broken Hearts", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Troll to the Top", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Reborn Heir's Revenge *2", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Icy Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Goddess System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Revenge on the Greedy Village", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire System *4", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Broke Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "From Shame to Power", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Bound by the Adoration System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Reality Bender System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Payback System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Heist System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Son-in-Law's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Rich Family Disowned the True Heiress. 7 Years Later, She Returned as a Top Prosecutor!", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Engineer's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Ascension System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My God-Tier Repair System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Woke Up Married to My Rival", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Slacking My Way to the Top", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Don't Call Me Sister", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Secret Husband", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "From Slacker to God by Doubt", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Forced to Date My Exes", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My System Made Me a Tycoon", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Boss with a System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Love at First Bite", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Secret Bodyguard", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Forced to Love the Campus Belle", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Alpha System's Queen", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Trapped by the Ice Queen", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Stop, Beauty! I'm Just a Guard", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Empire of the Reborn", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Their Secrets, My Fortune", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Mind-Reading Guard", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Dates Made Me a Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Her Husband is Mr. Power", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Heartbeat System Awakened", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Forced to Be a Player", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Slacker Husband", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Neighbor, the Thief", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Richest Man System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Intel System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Married to the Secret CEO", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Confess to the Heiress, or Die", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Price of Greed", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Revenge on His Ex", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Married to My Billionaire Boss", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Pen of Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Roll Call System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Cashback System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The High IQ System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Reject's Superpowered Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billion-Dollar Failures", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Diver's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Mob Boss's Daughter", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Secret Protector", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The All-Seeing Tycoon", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The 1-Star Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Rise of the Bandit King", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "From Broke to Boss", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Loser's Billionaire System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Zero-Dollar Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Debt System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn with a Fortune System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn to Be a King", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn with a Cheat System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "His Mystic Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Empty Truck's Gold", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Cashback Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn as a Campus Tycoon", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Rebel Live-in Husband", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Villain's Loudest Secret", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire She Dumped", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Dating System *2", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn to Spoil My Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Mob Boss's Heiress", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "She Dumped Him, He Soared", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Revenge *2", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Wife Cashback System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Trapped with the Mafia Queen", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The All-Star Driver", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Gangster's Genius Son", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire Doting System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Loser Husband's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Hairdresser is an Assassin", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Wife is the Demon Empress", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Second Life", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Heroines Can Read My Mind", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Cashback Love", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Divorced Tycoon's Revenge", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn as a Shadow Tycoon", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn: The Doctor's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Back Off, Campus Belle", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Power Doubles Everyday", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Cashback Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Shock Value System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn: I Walk the Snow Alone", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Trigger Her, Get Rich", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Three Fiancees", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Awakened with a Tycoon System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Tycoon's Second Chance", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Mob Boss's Outcast Son", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Done Chasing Her Love", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn: The Divine Choice System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Seven Wives Are Waiting", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Trapped with My Boss", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn: My Sister's Envy", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Untamable CEO", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Unexpected Heir", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Tycoon's Rebirth Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Contract Wife is a CEO", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Fired, Then My AI Fired Back", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Househusband's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Contract Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Grim Reaper's Foolish Bride", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Bound to the CEO", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Endure-and-Triumph System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My System and My Four Sisters", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Temporary Groom", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Superstar System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Time-Traveller's Farm", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Accidental Fugitive", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Forced to Be a Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Good Gods Made Me a Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Real Winner's Revenge", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Son-in-Law's Comeback", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "His Billion-Dollar Revenge", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Farming Emotions for Billions", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Plumber Who Won Campus Queen", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Secret CEO Husband", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Betrothal Gift System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Harem's Modern Physician", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Love's Unfamiliar Face", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Ungrateful Harvest", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Tenant's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO Can Hear Me", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Reborn Chef's Fortune", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "I Quit Before the Crash", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Husband's Payback", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Married to the Billionaire CEO", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Healer Mommy Flash Wed", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire Treasure Hunter", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Billionaire by Breathing", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Boss, My Billionaire Ex", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Disowned Son's System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Goddess Conquest System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Online Love, Offline Boss", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Dumpster Diving Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The World's Richest Deliveryman", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Celestial Eye", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "He Reads Minds, I Read His Fate", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Cashback Dating King", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire Dating System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Artist's Cheat Code", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Loser Husband's Second Chance", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Appraisal God", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Brags Become Billions", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Contract Husband", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Bankrupt Heir's 100x Cashback System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Loser's God-Tier System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Too Rich for His Ex", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Fiancees Can Read My Mind", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "I Have a Wish Fulfillment System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire Delivery Boy", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Rebate System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Boss is Now My Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Scandal System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Love Rekindled", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Secret Antidote", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My System for Pampering Wives", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Married to My Ex's Boss", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Forced to Marry the CEO", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Hidden King's CEO Bride", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn to Rule in 2002", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Substitute Bride", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Secret Billionaire Husband", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Unwanted Husband", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Ultimate Campus System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Married to the God of Investment", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Bound to the Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Ascension", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My God-Tier Check-in System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Daily Quiz", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Spend 1 Trillion Yuan", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Villain's Nanny", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Simp System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn: The Slacker's Rise", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Reborn Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire Payback", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "All My Exes Want Me Back", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Inner Voice, Their Obsession", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Invincible After 100,000 Draws", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Love Unseen in Spring", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Five Chances", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "I Fooled the World", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Prodigy Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Reborn Sweetheart", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Betrayed CEO's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Bound to the CEO by Mistake", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Inheriting Billions, Dating the Campus Queen", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Contract with Hades", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Apocalypse Grocer", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Crazy is New Sane", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Prodigal Inventor", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "From Toilet Cleaner to Corporate Queen", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Runaway Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn to the Countryside", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Divorced Man System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Untouchable", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Top Score's Max-Level System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Antique Whisper", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Streamer's Payback System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Hidden Billionaire Heir *2", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's Fake Bride", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Accidental Billionaire Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Live-in-Husband's Comeback: My Disabled Wife is Secret", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Dating for Power", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Rival, My ATM", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Dumped Trillionaire", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Married to the Ice Queen CEO", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Reject That Changed It All", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Divorced, Now I'm a Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Tycoon's God System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Hidden Billionaire Revenge", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Wife Can Hear My Thoughts", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire's Super System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Married to the Wolf King", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "Betrayed, I Married the Heiress", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Supreme Appraiser", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Contract Marriage: My Ice Queen Wife's", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Jilted, I Married a CEO", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Boy Billionaire", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Husband is the God of Wealth", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Secret Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire Villain", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Married to the Hidden CEO", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Infinite Money System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Tycoon's Secret System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Simp with a System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Antique God's Touch", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Underdog's Upgrade System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Immortal CEO's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn to Marry the Billionaire", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Card Earn Billions", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Revenge System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Love Across Mountains", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "My Accidental CEO Wife", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Wife's Secret Twin", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn to Be a Stock God", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Billionaire's No-Love Rule", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The President's Fake Boyfriend", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Billionaire Rental System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Loved as a Fake Heiress", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Married to the Heiress", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Married to My Forgotten Savior", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Brag to Riches", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Price-Seeing Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Divorced Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Reborn Simp's Revenge", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "I Have a Wealth Tycoon System", category: "shortcdrama", description: "Dropped - Short C-Drama" },
    { image: shortDramaCover, title: "The Junkman's Golden Eyes", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The CEO's Reborn Love", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "My Flash Marriage to the CEO", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Unmasking My Secret Spouse", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "Reborn as a Billionaire", category: "shortcdrama", description: "Completed - Short C-Drama" },
    { image: shortDramaCover, title: "The Underdog's Upgrade System", category: "shortcdrama", description: "Completed - Short C-Drama" },
    // ... continuing with more short C-dramas
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
    { id: 'anime', name: 'Anime', count: dramaCovers.filter(d => d.category === 'anime').length },
    { id: 'shortcdrama', name: 'Short C-Dramas', count: dramaCovers.filter(d => d.category === 'shortcdrama').length }
  ];

  // Helper function to handle image errors
  const handleImageError = (e) => {
    e.target.src = defaultCover;
  };

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

  // Function to get status icon
  const getStatusIcon = (description) => {
    if (description.includes('Completed')) {
      return <CheckCircle size={14} style={{ color: '#22c55e', marginLeft: '4px' }} />;
    } else if (description.includes('Dropped')) {
      return <XCircle size={14} style={{ color: '#ef4444', marginLeft: '4px' }} />;
    } else if (description.includes('Plan to Watch')) {
      return <Clock size={14} style={{ color: '#f59e0b', marginLeft: '4px' }} />;
    }
    return null;
  };

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
              <a href="https://www.youtube.com/playlist?list=PLTBX0x9-wL3w" 
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
                <img src={event.logo} alt={event.alt} className="content-logo" onError={handleImageError}/>
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
              Comprehensive collection of shows and series across different genres ({dramaCovers.length} total)
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
            {filteredDramas.map((drama, index) => {
              const statusIcon = getStatusIcon(drama.description);
              return (
                <div key={index} className="drama-cover-card">
                  <div className="drama-cover-image-container">
                    <img 
                      src={drama.image} 
                      alt={drama.title}
                      className="drama-cover-image"
                      onError={handleImageError}
                    />
                    <div className="drama-category-badge">
                      <span className={`drama-category ${drama.category}`}>
                        {drama.category === 'english' ? 'TV Series' : 
                         drama.category === 'asian' ? 'Asian Drama' : 
                         drama.category === 'anime' ? 'Anime' : 'Short C-Drama'}
                      </span>
                    </div>
                  </div>
                  <div className="drama-cover-content">
                    <h4 className="drama-cover-title">
                      {drama.title}
                      {statusIcon}
                    </h4>
                    <p className="drama-cover-description">{drama.description}</p>
                  </div>
                </div>
              );
            })}
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