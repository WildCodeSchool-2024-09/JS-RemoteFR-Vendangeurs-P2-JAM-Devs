import { useEffect, useState } from "react";
import Artists from "../components/Artists";
import Banner from "../components/Banner";
import Playlists from "../components/Playlists";
import type { Artist, Playlist } from "../types/type";

function Home() {
  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetch("https://app-back-jam.vercel.app/api/playlists")
      .then((response) => response.json())
      .then((data: Playlist[]) => setPlaylist(data))
      .catch((error) => console.error(error));

    fetch("https://app-back-jam.vercel.app/api/artists")
      .then((response) => response.json())
      .then((data: Artist[]) => setArtists(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Banner />
      <Playlists dataPlaylist={playlist} />
      <Artists dataArtist={artists} />
    </>
  );
}

export default Home;
