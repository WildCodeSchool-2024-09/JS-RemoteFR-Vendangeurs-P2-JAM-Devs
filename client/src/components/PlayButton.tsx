import Play from "../assets/icons/Play.svg";
import { usePlayer } from "../context/PlayerContext";
import {
  searchAlbumsTracks,
  searchPlaylistTracks,
  searchTrack,
} from "../services/deezerApi";

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
  trackSearchId?: number;
}

function PlayButton({
  playlistTrackId,
  playlistId,
  albumId,
  albumTrackId,
  albumDetailId,
  trackSearchId,
}: PlayButtonProps) {
  const { setPlayerState } = usePlayer();

  const handlePlayTrackList = async () => {
    if (playlistTrackId) {
      const playlistData = await searchPlaylistTracks(playlistId);

      setPlayerState({
        tracks: playlistData,
        currentTrackIndex: playlistData.findIndex(
          (track: Track) => track.id === playlistTrackId,
        ),
      });
    } else if (playlistId) {
      const playlistData = await searchPlaylistTracks(playlistId);

      setPlayerState({
        tracks: playlistData,
        currentTrackIndex: 0,
      });
    } else if (albumId) {
      const albumData = await searchAlbumsTracks(albumId);

      setPlayerState({
        tracks: albumData.data,
        currentTrackIndex: albumData.data.findIndex(
          (track: Track) => track.id === albumTrackId,
        ),
      });
    } else if (albumDetailId) {
      const albumData = await searchAlbumsTracks(albumDetailId);

      setPlayerState({
        tracks: albumData.data,
        currentTrackIndex: albumData.data.findIndex(
          (track: Track) => track.id === albumTrackId,
        ),
      });
    } else if (trackSearchId) {
      const trackData = await searchTrack(trackSearchId);

      setPlayerState({
        tracks: [trackData],
        currentTrackIndex: 0,
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
