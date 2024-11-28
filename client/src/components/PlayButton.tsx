import Play from "../assets/icons/Play.svg";
import { usePlayer } from "../context/PlayerContext";

interface Track {
  id: number;
  title: string;
  artist: string;
}

interface PlayButtonProps {
  playlistId?: number | string;
  playlistTrackId?: number;
  albumTrackId?: number;
  albumId?: number;
  track?: Track;
  albumDetailId?: number;
  id?: number;
}

function PlayButton({
  playlistTrackId,
  playlistId,
  albumId,
  albumTrackId,
  albumDetailId,
}: PlayButtonProps) {
  const { setPlayerState } = usePlayer();

  const handlePlayTrackList = () => {
    if (playlistTrackId) {
      fetch(`/api/playlist/${playlistId}/tracks`)
        .then((response) => response.json())
        .then((data) =>
          setPlayerState({
            tracks: data.data,
            currentTrackIndex: data.data.findIndex(
              (track: Track) => track.id === playlistTrackId,
            ),
          }),
        );
    } else if (playlistId) {
      fetch(`/api/playlist/${playlistId}/tracks`)
        .then((response) => response.json())
        .then((data) =>
          setPlayerState({
            tracks: data.data,
            currentTrackIndex: 0,
          }),
        );
    } else if (albumId) {
      fetch(`/api/album/${albumId}/tracks`)
        .then((response) => response.json())
        .then((data) => {
          setPlayerState({
            tracks: data.data,
            currentTrackIndex: data.data.findIndex(
              (track: Track) => track.id === albumTrackId,
            ),
          });
        });
    } else if (albumDetailId) {
      fetch(`/api/album/${albumDetailId}/tracks`)
        .then((response) => response.json())
        .then((data) => {
          setPlayerState({
            tracks: data.data,
            currentTrackIndex: data.data.findIndex(
              (track: Track) => track.id === albumTrackId,
            ),
          });
        });
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
