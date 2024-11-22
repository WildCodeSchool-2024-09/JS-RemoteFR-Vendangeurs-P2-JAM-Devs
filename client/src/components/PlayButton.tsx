import play from "../assets/icons/play.svg";
import { usePlayer } from "../context/PlayerContext";

function PlayButton({ id }: { id: number }) {
  const { setPlayerState } = usePlayer();

  const handlePlayTrackList = () => {
    fetch(`/api/playlist/${id}/tracks`)
      .then((response) => response.json())
      .then((data) => setPlayerState(data.data));
  };

  return (
    <button
      type="button"
      className="flex bg-accent p-2 rounded-full"
      onClick={handlePlayTrackList}
    >
      <img src={play} alt=" bouton play" className="w-6 h-6" />
    </button>
  );
}

export default PlayButton;
