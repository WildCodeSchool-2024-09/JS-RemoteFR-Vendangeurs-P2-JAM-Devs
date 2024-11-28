import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerSection from "../components/BannerSection";
import HeroBanner from "../components/HeroBanner";
import Loader from "../components/Loader";
import TrackList from "../components/TrackList";
import Wrapper from "../components/Wrapper";
import { searchAlbum, searchAlbumsTracks } from "../services/deezerApi";
import type { Albums, Track } from "../types/type";

function AlbumDetails() {
  const { id } = useParams();
  const [tracks, setTracks] = useState<Track[]>([]);
  const [album, setAlbum] = useState<Albums | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumData = await searchAlbum(id);
        const albumTracksData = await searchAlbumsTracks(id);

        setAlbum(albumData);
        setTracks(albumTracksData.data);
      } catch (err) {
        console.error("Erreur lors du chargement des données :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="laptop:flex laptop:flex-col laptop:gap-y-20">
          <BannerSection
            showBg={true}
            showBorder={true}
            image={album?.cover_big}
            blur={false}
          >
            <HeroBanner
              cover={album?.cover_big}
              title={album?.title}
              release={album?.release_date}
              nbFan={album?.fans}
            />
          </BannerSection>

          <Wrapper variantWidth={false}>
            {tracks?.length > 0
              ? tracks.map((track, index) => (
                  <ul
                    key={track.id}
                    className="w-full mx-auto flex flex-col items-center"
                  >
                    <TrackList
                      title={track.title_short}
                      duration={track.duration}
                      artist={track.artist}
                      imageBig={album?.cover_big}
                      imageSmall={album?.cover_small}
                      index={index}
                      albumDetailId={album?.id}
                      albumTrackId={track.id}
                    />
                  </ul>
                ))
              : ""}
          </Wrapper>
        </div>
      )}
    </>
  );
}

export default AlbumDetails;
