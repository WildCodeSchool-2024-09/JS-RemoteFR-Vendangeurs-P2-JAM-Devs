import "../App.css";
import LogoJam from "../assets/icons/LogoJamOrange.svg";
import Mute from "../assets/icons/Mute.svg";
import Next from "../assets/icons/Next.svg";
import Pause from "../assets/icons/Pause.svg";
import Play from "../assets/icons/Play.svg";
import Previous from "../assets/icons/Previous.svg";
import Random from "../assets/icons/Random.svg";
import RandomActif from "../assets/icons/RandomActif.svg";
import Repeat from "../assets/icons/Repeat.svg";
import RepeatActif from "../assets/icons/RepeatActif.svg";
import Speaker from "../assets/icons/Speaker.svg";

import { useEffect, useRef, useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import { formatTimeCode } from "../utils/formatDuration";

function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { playerState, setPlayerState } = usePlayer();
  const { tracks, currentTrackIndex } = playerState;
  const currentTrack = tracks[currentTrackIndex];

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Lecture et pause
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Changement de track
  useEffect(() => {
    if (!currentTrack || !audioRef.current) return;

    const audio = audioRef.current;

    audio.src = currentTrack.preview || "";
    audio.play();
    setIsPlaying(true);

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioData);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioData);
    };
  }, [currentTrack]);

  // Next track

  const handleNextTrack = () => {
    if (isRandom) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setPlayerState((prevState) => ({
        ...prevState,
        currentTrackIndex: randomIndex,
      }));
    } else {
      setPlayerState((prevState) => ({
        ...prevState,
        currentTrackIndex: (prevState.currentTrackIndex + 1) % tracks.length,
      }));
    }
  };

  // Previous track
  const handlePreviousTrack = () => {
    setPlayerState((prevState) => ({
      ...prevState,
      currentTrackIndex:
        (prevState.currentTrackIndex - 1 + tracks.length) % tracks.length,
    }));
  };

  // Fin de la track
  const handleTrackEnd = () => {
    if (isRepeat) {
      audioRef.current?.play();
    } else if (isRandom) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setPlayerState((prevState) => ({
        ...prevState,
        currentTrackIndex: randomIndex,
      }));
    } else if (currentTrackIndex < tracks.length - 1) {
      setPlayerState((prevState) => ({
        ...prevState,
        currentTrackIndex: prevState.currentTrackIndex + 1,
      }));
    }
  };

  // Mute et Unmute
  const handleMuteUnmute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Volume
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  // Répétition
  const handleRepeat = () => {
    setIsRepeat((prevRepeat) => {
      if (!prevRepeat) {
        setIsRandom(false);
      }
      return !prevRepeat;
    });
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isRepeat;
    }
  }, [isRepeat]);

  // Random
  const handleRandom = () => {
    setIsRandom((prevRandom) => {
      if (!prevRandom) {
        setIsRepeat(false);
      }
      return !prevRandom;
    });
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <section
      className="bg-secondary-150/15 
      h-24 flex
      items-center w-full flex-col justify-around  "
    >
      <div className="flex w-full justify-center px-2 ">
        <aside className="laptop:pl-16 flex gap-4 items-center justify-center w-1/4">
          {/* Pochette album + artiste + titre */}
          {currentTrack ? (
            <button type="button">
              {currentTrack?.artist?.picture_small ? (
                <img
                  src={currentTrack?.artist?.picture_small}
                  alt={
                    currentTrack?.artist?.name || null
                      ? currentTrack?.artist?.name
                      : ""
                  }
                  className=" w-11 h-11 laptop:w-14 laptop:h-14 "
                />
              ) : (
                <div className="flex justify-center items-center w-11 h-11 laptop:w-14 laptop:h-14 bg-gradient-to-br from-accent to-secondary-100 ">
                  <div className="laptop:w-12 laptop:h-12 w-9 h-9 bg-background flex justify-center items-center">
                    <img
                      src={LogoJam}
                      alt="Logo du site"
                      className="h-20 w-20"
                    />
                  </div>
                </div>
              )}
            </button>
          ) : (
            ""
          )}

          <div className="w-3/4 text-primary text-sm hidden laptop:block font-text">
            <p className="font-bold">{currentTrack?.artist?.name || null} </p>
            <p>{currentTrack?.title || null} </p>
          </div>
        </aside>

        {/* BOUTON RANDOM */}
        <article className="flex flex-col justify-center items-center laptop:gap-4 w-full">
          <div className="flex justify-center items-center gap-4 laptop:gap-8 w-1/2">
            <div className="laptop:flex hidden ">
              <button
                className={`${tracks.length === 0 ? "opacity-20 cursor-not-allowed" : ""}`}
                type="button"
                onClick={handleRandom}
                disabled={tracks.length === 0}
              >
                {isRandom ? (
                  <img src={RandomActif} alt="Bouton aléatoire activé" />
                ) : (
                  <img src={Random} alt="Bouton aléatoire" />
                )}
              </button>
            </div>

            {/* BOUTON PREVIOUS */}
            <div className="flex items-center">
              <button
                className={`${tracks.length === 0 ? "opacity-20 cursor-not-allowed" : ""}`}
                type="button"
                onClick={handlePreviousTrack}
                disabled={tracks.length === 0}
              >
                <img
                  src={Previous}
                  alt="Bouton précédent"
                  className="h-[25px] w-[25px]"
                />
              </button>
            </div>

            {/* BOUTON PLAY */}
            <div
              className={`w-10 h-10 flex justify-center items-center bg-accent rounded-full ${tracks.length === 0 ? "opacity-20 cursor-not-allowed" : ""}`}
            >
              <button
                type="button"
                className={`flex justify-center items-center ${tracks.length === 0 ? "cursor-not-allowed" : ""}`}
                onClick={handlePlayPause}
                disabled={tracks.length === 0}
              >
                <div className="w-10 h-10 flex justify-center items-center">
                  {isPlaying ? (
                    <img
                      src={Pause}
                      alt="Bouton pause"
                      className="w-[15px] h-[15px]"
                    />
                  ) : (
                    <img
                      src={Play}
                      alt="Bouton lecture"
                      className="h-[15px] w-[15px]"
                    />
                  )}
                </div>
              </button>
            </div>

            {/* BOUTON NEXT */}
            <div className="flex justify-end items-center">
              <button
                className={`${tracks.length === 0 ? "opacity-20 cursor-not-allowed" : ""}`}
                type="button"
                onClick={handleNextTrack}
                disabled={tracks.length === 0}
              >
                <img
                  src={Next}
                  alt="Bouton suivant"
                  className="h-[25px] w-[25px]"
                />
              </button>
            </div>

            {/* BOUTON REPEAT */}
            <div className="hidden laptop:flex  ">
              <button
                className={`w-[25px] h-[25px] ${tracks.length === 0 ? "opacity-20 cursor-not-allowed" : ""} `}
                type="button"
                onClick={handleRepeat}
                disabled={tracks.length === 0}
              >
                {isRepeat ? (
                  <img src={RepeatActif} alt="Bouton répétition activé" />
                ) : (
                  <img src={Repeat} alt="Bouton répétition" />
                )}
              </button>
            </div>
          </div>

          {/* PROGRESS BARRE */}

          <div className="flex justify-center gap-4 items-center w-full  text-primary">
            <span className=" hidden laptop:flex text-primary">
              {formatTimeCode(currentTime)}
            </span>
            <progress
              max="100"
              value={progress}
              className="  [&::-webkit-progress-value]:rounded-lg 
            [&::-webkit-progress-value]:bg-accent 
            [&::-webkit-progress-bar]:rounded-lg 
            [&::-webkit-progress-bar]:bg-secondary-100 w-1/2 h-1 bg-purple-950
            hidden laptop:block"
            />
            <span className="hidden laptop:flex text-primary">
              {formatTimeCode(duration)}
            </span>
          </div>
        </article>
        <aside className=" w-1/4 flex justify-center gap-4 items-center ">
          {/*GESTION DU VOLUME */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="hidden laptop:flex w-36 h-2 rounded-lg appearance-none cursor-pointer bg-secondary-100"
          />

          {/* BOUTON SON */}
          <button
            type="button"
            onClick={handleMuteUnmute}
            className="hidden laptop:flex"
          >
            <img src={isMuted ? Mute : Speaker} alt="Bouton son" />
          </button>
        </aside>
      </div>
      <div className=" laptop:hidden flex gap-2 text-primary text-xs  font-text  ">
        <p className="font-bold">{currentTrack?.artist?.name || null} </p>
        <span>{currentTrack?.title || null}</span>
      </div>

      <audio
        onEnded={handleTrackEnd}
        ref={audioRef}
        src={currentTrack?.preview}
        autoPlay
      >
        <track kind="captions" src={currentTrack?.preview} />
      </audio>
    </section>
  );
}

export default Player;
