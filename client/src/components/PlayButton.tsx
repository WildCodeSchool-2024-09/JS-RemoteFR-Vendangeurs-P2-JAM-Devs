import Play from "../assets/icons/Play.svg";
import { usePlayer } from "../context/PlayerContext";

function PlayButton({
  playlistId,
  playlistTrackId,
  albumTrackId,
}: { playlistId?: number; playlistTrackId?: number; albumTrackId?: number }) {
  const { setPlayerState } = usePlayer();

  const handlePlayTrackList = () => {
    if (playlistTrackId) {
      fetch(`/api/track/${playlistTrackId}`)
        .then((response) => response.json())
        .then((data) => setPlayerState([data]));
    } else if (playlistId) {
      fetch(`/api/playlist/${playlistId}/tracks`)
        .then((response) => response.json())
        .then((data) => setPlayerState(data.data));
    } else if (albumTrackId) {
      fetch(`/api/track/${albumTrackId}`)
        .then((response) => response.json())
        .then((data) => setPlayerState([data]));
    }
  };

  return (
    <button
      type="button"
      className="flex bg-accent p-2 rounded-full border-2 border-secondary-100"
      onClick={handlePlayTrackList}
    >
      <img src={Play} alt=" bouton play" className="w-6 h-6" />
    </button>
  );
}

export default PlayButton;
