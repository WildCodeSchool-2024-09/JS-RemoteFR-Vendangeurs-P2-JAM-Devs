import { useEffect, useState } from "react";
import Artists from "../components/Artists";
import BannerHome from "../components/BannerHome.tsx";
import BannerSection from "../components/BannerSection.tsx";
import Playlists from "../components/Playlists";
import type { Artist, Playlist } from "../types/type.ts";

function Home() {
  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const cachedPlaylist = localStorage.getItem("playlist");
    const cachedArtists = localStorage.getItem("artists");

    if (cachedPlaylist) {
      setPlaylist(JSON.parse(cachedPlaylist));
    } else {
      fetch("http://localhost:3008/deezer-playlists")
        .then((response) => response.json())
        .then((data) => {
          const validData = data.filter((item: Playlist) => !item.error);

          setPlaylist(validData);
          localStorage.setItem("playlist", JSON.stringify(data));
        })
        .catch((error) => console.error(error));
    }
    if (cachedArtists) {
      setArtists(JSON.parse(cachedArtists));
    } else {
      fetch("http://localhost:3008/deezer-artists")
        .then((response) => response.json())
        .then((data) => {
          const validData = data.filter((item: Artist) => !item.error);

          setArtists(validData);
          localStorage.setItem("artists", JSON.stringify(data));
        })
        .catch((error) => console.error(error));
    }
  }, []);
  return (
    <div className="h-full">
      <BannerSection showBg={false} showBorder={false} blur={true}>
        <BannerHome />
      </BannerSection>
      <Playlists dataPlaylist={playlist} />
      <Artists dataArtist={artists} />
    </div>
  );
}

export default Home;
