import { useEffect, useState } from "react";
import Artists from "../components/Artists";
import BannerHome from "../components/BannerHome.tsx";
import BannerSection from "../components/BannerSection.tsx";
import Loader from "../components/Loader.tsx";
import Playlists from "../components/Playlists";
import Wrapper from "../components/Wrapper.tsx";
import {
  searchArtistsHome,
  searchBannerPlaylist,
  searchPlaylistHome,
} from "../services/deezerApi.ts";
import type { Artist, Playlist } from "../types/type.ts";

function Home() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [bannerPlaylist, setBannerPlaylist] = useState<Playlist>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedBannerData = sessionStorage.getItem("bannerPlaylist");
        const storedPlaylistsData = sessionStorage.getItem("playlists");
        const storedArtistsData = sessionStorage.getItem("artists");

        if (storedBannerData && storedPlaylistsData && storedArtistsData) {
          setBannerPlaylist(JSON.parse(storedBannerData));
          setPlaylists(JSON.parse(storedPlaylistsData));
          setArtists(JSON.parse(storedArtistsData));
          setLoading(false);
        } else {
          const bannerDatas = await searchBannerPlaylist();
          const playlistDatas = await searchPlaylistHome();
          const artistDatas = await searchArtistsHome();

          sessionStorage.setItem("bannerPlaylist", JSON.stringify(bannerDatas));
          sessionStorage.setItem("playlists", JSON.stringify(playlistDatas));
          sessionStorage.setItem("artists", JSON.stringify(artistDatas));

          setBannerPlaylist(bannerDatas);
          setPlaylists(playlistDatas);
          setArtists(artistDatas);
          setLoading(false);
        }
      } catch (err) {
        console.error("Erreur lors du chargement des données :", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <BannerSection showBg={false} showBorder={false} blur={true}>
            <Wrapper variantWidth={false}>
              <BannerHome
                id={bannerPlaylist?.id}
                picture={bannerPlaylist?.picture_big}
                title={bannerPlaylist?.title}
              />
            </Wrapper>
          </BannerSection>
          <Wrapper variantWidth={true}>
            <Playlists playlists={playlists} />
            <Artists artists={artists} />
          </Wrapper>
        </>
      )}
    </>
  );
}
export default Home;
