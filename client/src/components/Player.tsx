import { useRef, useState } from "react";
import Like from "../assets/icons/Like.svg";
import Mute from "../assets/icons/Mute.svg";
import Next from "../assets/icons/Next.svg";
import Pause from "../assets/icons/Pause.svg";
import Play from "../assets/icons/Play.svg";
import Previous from "../assets/icons/Previous.svg";
import Random from "../assets/icons/Random.svg";
import Repeat from "../assets/icons/Repeat.svg";
import Speaker from "../assets/icons/Speaker.svg";

function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);

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
  const handleMuteUnmute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return (
    <section
      className="bg-secondary-150/15 
      h-24 flex
      items-center w-full flex-col justify-around  "
    >
      <div className="flex w-full justify-around px-2 ">
        <aside className="flex gap-2 items-center justify-center w-1/4">
          {/* Pochette album + artiste + titre */}

          <button type="button">
            <img src="" alt="Pochette Albun Red Hot" className="w-11 h-11 " />
          </button>

          <div className="text-primary text-sm hidden laptop:block font-text">
            <p className="font-bold">Red Hot Chili Peppers</p>
            <p>Stadium Acardium</p>
          </div>
        </aside>

        {/* Bouton random */}
        <article className="flex justify-center items-center gap-8 w-1/2">
          <div className="laptop:flex hidden ">
            <button type="button"> </button>
            <img src={Random} alt="Bouton musique aléatoire" />
          </div>

          {/* BOUTON PREVIOUS */}
          <div className="flex items-center">
            <button type="button">
              <img src={Previous} alt="Bouton Previous" className="h-[25px]" />
            </button>
          </div>

          {/* BOUTON PLAY */}
          <div className="bg-accent rounded-full">
            <button
              type="button"
              className="flex justify-center items-center "
              onClick={handlePlayPause}
            >
              <div className="w-10 h-10 flex justify-center items-center ">
                {isPlaying ? (
                  <img src={Pause} alt="Bouton pause" className="w-[15px] " />
                ) : (
                  <img
                    src={Play}
                    alt="Bouton play/pause"
                    className="h-[15px] w-[15px]"
                  />
                )}
              </div>
            </button>
          </div>

          {/* BOUTON NEXT */}
          <div className="flex items-center">
            <button type="button">
              <img src={Next} alt="Bouton Next" className="h-[25px]" />
            </button>
          </div>

          {/* BOUTON REPEAT */}
          <div className="hidden laptop:flex  ">
            <button type="button"> </button>
            <img src={Repeat} alt="Bouton repeat" />
          </div>

          {/* BOUTON LIKE */}
        </article>
        <aside className=" w-1/4 flex justify-center gap-4 items-center ">
          <button type="button">
            <img src={Like} alt="Bouton like" className="w-[20px]" />
          </button>

          {/*GESTION DU VOLUME */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 [&::webkit-slider-thumb]:appearance-none [&::webkit-slider-thumb]:bg-accent hidden laptop:block"
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
      <div className=" gap-2 text-primary text-xs laptop:hidden flex font-text ">
        <p className="font-bold">Red Hot Chili Peppers </p>
        <span>-</span>
        <p>Stadium Acardium</p>
      </div>

      {/* PROGRESS BARRE */}
      <progress
        max="100"
        value="30"
        className=" [&::-webkit-progress-value]:rounded-lg 
        [&::-webkit-progress-value]:bg-orange-400 
        [&::-webkit-progress-bar]:rounded-lg 
        [&::-webkit-progress-bar]:bg-white w-1/2 h-1 bg-purple-950
        hidden laptop:block"
      />
      <audio
        ref={audioRef}
        src="https://app-back-jam.vercel.app/audio/red-hot-chili-peppers/stadium-arcadium/snow.mp3"
      >
        <track
          kind="captions"
          src="https://app-back-jam.vercel.app/audio/red-hot-chili-peppers/stadium-arcadium/snow.vtt"
        />
      </audio>
    </section>
  );
}

export default Player;
